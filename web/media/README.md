# 云海视频素材

`cloud-sea.mp4`：用户提供的云海参考照片，经本机 MiniMax H3 Base FL2VA 与 8 步 Turbo LoRA 生成，再用 Real-ESRGAN x2plus 分块超分及居中裁切。2560×1440、24 FPS、83 帧、无声，约 3.46 秒、4.48 MiB。原生生成尺寸 1344×768，AI 恢复纹理不等同于真实原生 2K 细节。

原片首尾停滞帧被裁掉，24 帧过渡使用双向光流对齐后融合。使用原生缓冲循环，避免每次交接都重新启动暂停的解码器。接缝运动量见 `cloud-sea.report.json`；光流可能产生局部变形，需结合画面判断。

作者与项目声明见根目录 NOTICE。生成配置见 `experiments/cloud-video/cloud-sea-h3.api.json`，后处理见 `enhance.py`。不包含原始参考照片或模型权重。

昼夜采用连续天空渐变与云面调色，不重算真实阴影。固定时间仅锁定光照，视频始终流动。
