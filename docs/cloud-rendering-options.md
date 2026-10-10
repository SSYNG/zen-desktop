# 云海渲染方案调研

调研日期：2026-10-11。候选库已接入 0.4.0 的云海 Beta。采用本地资源、完整像素采样与时间累积，保留细节及湍流，关闭光束并降低阴影开销；最终性能以桌面实测为准。

## 建议

优先验证 `@takram/three-clouds` 的已发布 WebGL 实现，搭配 `@takram/three-atmosphere` 和 `postprocessing`，沿用现有 Electron 桌面宿主。它比当前简化的云海 shader 更完整，接入成本也比迁移到游戏引擎低。它仍是 Beta，不能把官方演示或作者的显卡成绩直接当成本项目的效果、稳定性和帧率保证。

参考图的目标更接近连续云层与山间薄雾的组合。渲染器提供的是基础能力，仍需配置云层高度、密度剖面、细节侵蚀、湍流及光照，避免直接使用大块积云的默认造型。

## 候选比较

| 方案 | 已有能力 | 对本项目的影响 |
| --- | --- | --- |
| Takram Three.js 云与大气 | 多层体积云、细节侵蚀、湍流、稀薄雾、云影、时间重建；MIT 许可 | 最适合现有 Three.js / Electron 架构，但仍需验证 Beta 的拖影、闪烁和硬件兼容性 |
| Unity HDRP | 内置体积云、形状和侵蚀控制、分层风速、多重散射、阴影和时间累积 | 完整的引擎级方案；需要新的原生渲染宿主及桌面嵌入集成，不能直接当作网页库引入 |
| Unreal Engine | 内置物理云材质、大气与动态时刻、光散射、云影及可缩放质量 | 完整的引擎级方案；需要独立原生场景和新的部署、桌面宿主验证 |

## 接入条件核对

- 当前项目：Three.js `0.186.1`。
- 已发布云库：`@takram/three-clouds 0.7.6`；依赖大气库 `0.19.1`、地理基础库 `0.9.1`。Three.js 的声明要求是 `>=0.170.0`。
- `postprocessing 6.39.5` 声明支持 Three.js `>=0.168.0 <0.187.0`，包含项目当前版本。这仅证明声明的版本范围匹配，不替代运行测试。
- 可使用原生 Three.js 的 `CloudsEffect`，无需增加 React / R3F；其 React peer dependencies 为可选。
- 后处理需要使用 `postprocessing` 的 EffectComposer，不能直接替换成 Three.js examples 中同名的 composer。
- 天空与大气、云缓冲及山体深度需要正确组合；这不是只替换一个材质即可完成的集成。
- 默认示例从 GitHub 加载云噪声与大气查找表。本项目已将必要资源随软件打包，使用本地路径；采样抖动数据由原创脚本生成。
- npm 元数据中的解包体积约为：云包 4.10 MB、大气包 36.93 MB。它们包含源码等内容，不等于最终打包增量，也不等于 GPU 显存占用；须实际裁剪打包后再统计。

## 已知限制

Takram 官方将 clouds / atmosphere 标为 Beta。云库目前限制四层云；时间升采样在稀薄云和遮挡变化处可能产生拖影与涂抹；云的大气透视使用近似深度，也可能产生伪影。

官方正在改写 WebGPU / 节点 API，云部分仍在进行中，且新旧 API 不兼容。初次集成应锁定已发布 WebGL 版本，避免同时承担渲染改造与尚未完成的新 API 迁移。

体积云的时间重建用于降低采样成本，不等于限制显示帧率。保持随显示器刷新的动画调度，通过内部渲染分辨率、采样和阴影设置控制 GPU 成本。

## 验证顺序

1. 先以本地资源接入完整的大气与云合成链路，验证断网启动和场景反复切换。
2. 使用固定高山视角，调出连续的云海主体、半透明薄雾及不同速度的细节流动；避免边缘过硬、全画面均匀棉团。
3. 将本机时间或固定时间映射到同一套太阳方向与光照参数。固定模式只锁定光照时刻，云继续运动。
4. 在朝霞、日中、日落、夜幕四个时刻检查曝光、颜色和山体遮挡，并检查切换时的时间重建历史残留。
5. 测量 2560×1440 桌面实际 GPU 帧耗时、帧率、功耗和显存；CPU 更新耗时不能代表 GPU 渲染成本。
6. 根据实测调整内部渲染质量，完成退出、设置窗口和赏鱼回归验证，再打包并统计体积。

## 官方来源

- [Takram 云库说明、API、性能及限制](https://github.com/takram-design-engineering/three-geospatial/tree/main/packages/clouds)
- [Takram 项目状态与 WebGPU 迁移说明](https://github.com/takram-design-engineering/three-geospatial)
- [云库官方实时演示](https://takram-design-engineering.github.io/three-geospatial/?path=/story/clouds-clouds--basic)
- [云库已发布版本](https://github.com/takram-design-engineering/three-geospatial/releases)
- [CloudsEffect 源码](https://github.com/takram-design-engineering/three-geospatial/blob/main/packages/clouds/src/CloudsEffect.ts)
- [云库 npm 元数据](https://www.npmjs.com/package/@takram/three-clouds/v/0.7.6)
- [大气库 npm 元数据](https://www.npmjs.com/package/@takram/three-atmosphere/v/0.19.1)
- [postprocessing 依赖与许可](https://github.com/pmndrs/postprocessing/blob/main/package.json)
- [Takram MIT 许可](https://github.com/takram-design-engineering/three-geospatial/blob/main/LICENSE)
- [Unity HDRP 17 体积云文档](https://docs.unity.cn/Packages/com.unity.render-pipelines.high-definition@17.0/manual/Override-Volumetric-Clouds.html)
- [Unreal Engine 体积云文档](https://dev.epicgames.com/documentation/unreal-engine/volumetric-cloud-component-in-unreal-engine)
