# 云海视频实验

生成成片已接入云海 Beta：视频负责运动，代码按时刻调色。0.5.1 已移除程序体积云及相关依赖。

使用本机 `D:\ComfyUI` 已部署的 MiniMax H3 Base FL2VA、INT8 主模型与 8 步 Turbo LoRA。将参考照片作为首尾帧，固定机位，保持山体、曝光和光照稳定，只生成缓慢移动的云雾；首尾约束有助于回环，但不能保证运动速度连续或完全无缝，须看成片后再决定循环处理。

- 生成：1344×768、124 帧、24 FPS，约 5.17 秒，8 步、种子 2026101101。
- 同时保存无声的 768p 原片与 Lanczos 放大、居中裁切为 1920×1080 的 MP4。1080p 输出不代表原生 1080p 细节，也没有做 AI 超分或补帧。
- 工作流不调用付费云端 API，不下载新模型。仅保存视频，未解码音频分支。
- 本机为 RTX 3060 12 GB / 32 GB 内存，完整视频实验可能耗时较长，不能用已通过的低分辨率短片测试推断本任务成功。

ComfyUI 按 H3 预设启动并空闲后，手动执行一次：

```powershell
node experiments/cloud-video/submit.mjs "<参考图片的绝对路径>"
```

脚本上传参考图、提交一次 `/prompt`，保存确认信息到 `.build/cloud-video-submission.json` 后退出。**不会轮询进度、自动重试或自动追加任务**；再次运行会创建另一个任务。输出预计位于 `D:\ComfyUI\output\video\ZenDesktop_cloudsea_H3_768p_*.mp4` 和 `ZenDesktop_cloudsea_H3_1080p_*.mp4`。仅确认入队，不能据此宣称生成成功或效果合格。

当前将成片作为 Electron 内 HTML video 的底层画面，代码按本机时间或固定时间连续调整调色、天空渐变与夜空星点，日历和交互界面继续独立叠加。单段视频不含几何、法线与深度，调色不能真实重算光照、遮挡和阴影；更自然的昼夜变化需要同构图的多个光照时段素材及平滑过渡。AI 原片为 24 FPS，不会因界面跟随显示器刷新而自动增加视频的真实帧数。

依据：[MiniMax 官方模型说明](https://huggingface.co/MiniMaxAI/MiniMax-H3)指出本地 Base 可验证 768p，完整高清 Regenerate 模块尚未开源。此实验不将用户参考照片提交到代码仓库。

本机生成已完成，成片为 `web/media/cloud-sea.mp4`。一次性关机监测已清理，不会随软件启动。

## 现有成片的 2K 超分与循环修复

0.5.1 对已有 768p 原片执行 Real-ESRGAN x2plus 分块像素超分。512 像素块带 32 像素上下文，去除每块边缘后拼合；2 倍恢复后等比缩放并居中裁切到 2560×1440，不重新生成运动。去掉开头 3 帧和结尾 14 帧的低运动区，24 帧双向 Farneback 光流过渡。最终 83 帧、24 FPS、约 3.46 秒、4.48 MiB。

本机 RTX 3060 12 GB 完整处理约 224 秒。解码复核尺寸、帧数与帧率；云面接缝平均变化量 2.12，典型帧 2.33，最小值 1.67（RGB 差值，仅作停顿诊断，不等同于视觉无缝保证）。离线报告在 `web/media/cloud-sea.report.json`。

工具需要 Python、CUDA PyTorch、Spandrel、PyAV 和 OpenCV。模型从 [Real-ESRGAN 官方发布页](https://github.com/xinntao/Real-ESRGAN/releases/tag/v0.2.1) 获取 `RealESRGAN_x2plus.pth`。模型及帧缓存放在忽略的 `.build/`，不随应用分发：

```powershell
python experiments/cloud-video/enhance.py "<768p 原片路径>" --model .build/cloud-tools/models/RealESRGAN_x2plus.pth --cache .build/cloud-tools/frames --output .build/cloud-tools/cloud-sea-2k-loop.mp4
```

脚本只输出一次性能估算和完成报告，不轮询 ComfyUI。缓存目录必须专用于同一原片和模型，换输入时使用新的空目录。`--benchmark` 只处理一帧。

用户提供的 H3 二采工作流使用潜空间放大再采样，需要原始 latent 或重新编码，以及当前本机缺少的 Goohai 节点和超分权重；该工作流的分块开关当前关闭。本轮选择已确认的成片分块超分路线，保留当前运动，不执行二次扩散采样。

离线处理工具的授权分别为 [Real-ESRGAN BSD-3-Clause](https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE)、[Spandrel MIT](https://github.com/chaiNNer-org/spandrel/blob/main/LICENSE)、[OpenCV Apache-2.0](https://github.com/opencv/opencv/blob/4.x/LICENSE)、[PyAV BSD-3-Clause](https://github.com/PyAV-Org/PyAV/blob/main/LICENSE.txt)。它们不进入壁纸运行包；视频编码所用 FFmpeg/libx264 遵循本地工具自身许可证。
