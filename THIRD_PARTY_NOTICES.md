# Third-party notices

项目原创代码、背景与图标按根目录 LICENSE 授权。下列第三方组件继续适用其原有许可证，不受项目原创代码的非商用许可替代。

| Component | Version | License / upstream |
| --- | --- | --- |
| Electron | 44.7.0 | MIT · https://github.com/electron/electron |
| Three.js | 0.186.1 | MIT · https://github.com/mrdoob/three.js |
| @takram/three-clouds | 0.7.6 | MIT · https://github.com/takram-design-engineering/three-geospatial |
| @takram/three-atmosphere | 0.19.1 | MIT, with Bruneton BSD-3-Clause shader portions |
| @takram/three-geospatial | 0.9.1 | MIT · same Takram repository |
| postprocessing | 6.39.5 | Zlib · https://github.com/pmndrs/postprocessing |
| fflate (via Three.js EXRLoader) | 0.8.2 | MIT · https://github.com/101arrowz/fflate |
| esbuild (build only) | 0.28.2 | MIT · https://github.com/evanw/esbuild |
| lunar-javascript | 1.7.7 | MIT · https://github.com/6tail/lunar-javascript |
| @electron/packager (build only) | 20.3.0 | BSD-2-Clause · https://github.com/electron/packager |

源码保留以下完整许可证：

- docs/Electron-LICENSE.txt：Electron contributors / GitHub Inc.
- docs/Three-LICENSE.txt：Three.js authors.
- docs/lunar-LICENSE.txt：Copyright (c) 2018 6tail.
- docs/Takram-LICENSE.txt：Copyright (c) 2024 Shota Matsuda；云噪声与大气预计算数据同源。
- docs/Bruneton-LICENSE.txt：Copyright (c) 2017 Eric Bruneton，BSD-3-Clause。
- docs/Postprocessing-LICENSE.txt：Copyright © 2015 Raoul van Rüschen，Zlib。
- docs/fflate-LICENSE.txt：Copyright (c) 2023 Arjun Barrett，MIT。

web/cloud-assets/stbn.bin 是 scripts/cloud-noise.mjs 原创生成的确定性三维高通秩映射采样数据，不分发 NVIDIA STBN SDK 或其预生成纹理；它不是 NVIDIA STBN 的同等质量声明。

便携程序 resources/app/ 中提供相应许可证副本；程序顶层的 Electron LICENSE 与 LICENSES.chromium.html 保留运行时及 Chromium 的第三方许可和声明，请随程序一起分发。resources/app/LICENSE 为禅意桌面自身许可，勿与程序顶层的 Electron 许可混淆。

图标生成脚本使用 Pillow（开发工具），普通构建不需要运行该脚本。npm 开发依赖的许可证随各依赖安装，完整依赖版本由 package-lock.json 固定。
