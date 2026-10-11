"""Offline tiled Real-ESRGAN x2 restoration and optical-flow loop preparation.

Run with the local ComfyUI Python (torch, spandrel, av) and OpenCV on PYTHONPATH.
Model weights and frame caches stay outside the wallpaper distribution.
"""
import argparse
import hashlib
import json
import time
from pathlib import Path

import av
import cv2
import numpy as np
import torch
from spandrel import ModelLoader


def decode(source):
    with av.open(str(source)) as container:
        stream = container.streams.video[0]
        return [frame.to_ndarray(format="rgb24") for frame in container.decode(stream)], int(stream.average_rate)


def motion(frames):
    small = [cv2.resize(f, (480, 270)).astype(np.float32) for f in frames]
    # Exclude static sky and most of the fixed mountains.
    return [float(np.abs(b[100:240, 160:460] - a[100:240, 160:460]).mean()) for a, b in zip(small, small[1:])]


def loop_plan(frames, fps):
    speed = motion(frames)
    typical = float(np.median(speed[len(speed)//4:3*len(speed)//4]))
    first, last = 0, len(frames)
    # Trim endpoint anchoring only when measured motion is unusually low.
    limit = min(fps*2, len(frames)//3)
    while first < limit and speed[first] < typical*.55:
        first += 1
    while len(frames)-last < limit and speed[last-2] < typical*.55:
        last -= 1
    overlap = min(fps, (last-first)//4)
    return first, last, overlap, speed


def restore(image, model, tile=512, pad=32):
    h, w = image.shape[:2]
    result = np.empty((h*2, w*2, 3), np.uint8)
    for y in range(0, h, tile):
        for x in range(0, w, tile):
            x1, y1 = min(w, x+tile), min(h, y+tile)
            ax, ay, bx, by = max(0, x-pad), max(0, y-pad), min(w, x1+pad), min(h, y1+pad)
            tensor = torch.from_numpy(image[ay:by, ax:bx].copy()).permute(2, 0, 1).unsqueeze(0).to(device=model.device, dtype=model.dtype)/255
            with torch.inference_mode():
                out = model(tensor).clamp(0, 1)
            crop = out[0, :, (y-ay)*2:(y1-ay)*2, (x-ax)*2:(x1-ax)*2]
            result[y*2:y1*2, x*2:x1*2] = crop.permute(1, 2, 0).float().mul(255).round().byte().cpu().numpy()
    # Keep the original 16:9 crop rather than stretching clouds and mountains.
    scaled_h = round(result.shape[0]*2560/result.shape[1])
    result = cv2.resize(result, (2560, scaled_h), interpolation=cv2.INTER_AREA)
    top = (scaled_h-1440)//2
    return result[top:top+1440]


def flow_blend(a, b, t):
    h, w = a.shape[:2]
    size = (640, 360)
    small_a = cv2.cvtColor(cv2.resize(a, size), cv2.COLOR_RGB2GRAY)
    small_b = cv2.cvtColor(cv2.resize(b, size), cv2.COLOR_RGB2GRAY)
    def flow(x, y):
        f = cv2.calcOpticalFlowFarneback(x, y, None, .5, 4, 25, 5, 7, 1.5, 0)
        f = cv2.resize(f, (w, h), interpolation=cv2.INTER_LINEAR)
        f[..., 0] *= w/size[0]
        f[..., 1] *= h/size[1]
        return f
    forward, backward = flow(small_a, small_b), flow(small_b, small_a)
    xx, yy = np.meshgrid(np.arange(w, dtype=np.float32), np.arange(h, dtype=np.float32))
    wa = cv2.remap(a, xx-forward[..., 0]*t, yy-forward[..., 1]*t, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)
    wb = cv2.remap(b, xx-backward[..., 0]*(1-t), yy-backward[..., 1]*(1-t), cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)
    return np.clip(wa.astype(np.float32)*(1-t)+wb.astype(np.float32)*t, 0, 255).round().astype(np.uint8)


def encode(frames, fps, output):
    output.parent.mkdir(parents=True, exist_ok=True)
    temp = output.with_name(output.stem+".partial.mp4")
    with av.open(str(temp), "w") as container:
        stream = container.add_stream("libx264", rate=fps)
        stream.width, stream.height = 2560, 1440
        stream.pix_fmt = "yuv420p"
        stream.options = {"crf":"16", "preset":"medium", "movflags":"+faststart"}
        for array in frames:
            for packet in stream.encode(av.VideoFrame.from_ndarray(array, format="rgb24")):
                container.mux(packet)
        for packet in stream.encode():
            container.mux(packet)
    temp.replace(output)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("--model", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--cache", type=Path, required=True)
    parser.add_argument("--benchmark", action="store_true")
    args = parser.parse_args()
    frames, fps = decode(args.source)
    first, last, overlap, before = loop_plan(frames, fps)
    model = ModelLoader().load_from_file(str(args.model)).eval().to("cuda")
    if model.scale != 2:
        raise ValueError("Expected the official x2 model")
    if model.supports_half:
        model = model.half()
    start = time.perf_counter()
    sample = restore(frames[len(frames)//2], model)
    torch.cuda.synchronize()
    benchmark = time.perf_counter()-start
    print(json.dumps({"secondsPerFrame":benchmark,"inputFrames":len(frames),"trim":[first,len(frames)-last],"overlap":overlap,"estimatedMinutes":benchmark*len(frames)/60,"motionStart":before[:12],"motionEnd":before[-12:]}), flush=True)
    args.cache.mkdir(parents=True, exist_ok=True)
    cv2.imwrite(str(args.cache/"sample-2k.png"), cv2.cvtColor(sample, cv2.COLOR_RGB2BGR))
    if args.benchmark:
        return
    restored = []
    for i in range(first, last):
        file = args.cache/f"frame-{i:04}.png"
        if file.exists():
            image = cv2.cvtColor(cv2.imread(str(file)), cv2.COLOR_BGR2RGB)
        else:
            image = sample if i == len(frames)//2 else restore(frames[i], model)
            cv2.imwrite(str(file), cv2.cvtColor(image, cv2.COLOR_RGB2BGR))
        restored.append(image)
    del model
    torch.cuda.empty_cache()
    loop = restored[overlap:-overlap]
    for i in range(overlap):
        t = (i+1)/(overlap+1)
        t = t*t*(3-2*t)
        loop.append(flow_blend(restored[-overlap+i], restored[i], t))
    encode(loop, fps, args.output)
    decoded, output_fps = decode(args.output)
    if len(decoded) != len(loop) or decoded[0].shape != (1440,2560,3) or output_fps != fps:
        raise RuntimeError("Encoded output failed geometry/frame validation")
    after = motion(decoded + [decoded[0]])
    report = {"resolution":[2560,1440],"fps":fps,"frames":len(decoded),"duration":len(decoded)/fps,"sourceTrim":[first,len(frames)-last],"flowOverlapFrames":overlap,"seamMotion":after[-1],"typicalMotion":float(np.median(after)),"minMotion":min(after),"seconds":time.perf_counter()-start,"bytes":args.output.stat().st_size,"modelSHA256":hashlib.sha256(args.model.read_bytes()).hexdigest(),"sourceSHA256":hashlib.sha256(args.source.read_bytes()).hexdigest()}
    args.output.with_suffix(".report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report), flush=True)


if __name__ == "__main__":
    main()
