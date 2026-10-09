# 视觉与实现

俯视鱼塘，青绿水面，大面积留白。平面荷叶与淡粉荷花集中在左上、右下，去掉鹅卵石等杂乱元素。三类低饱和锦鲤通过实时身体变形游动；植物保持平面浮叶风格，固定在背景中。

右上角可选农历日历与圆形设置按钮，默认通透，悬停时微微浮起。设置分为场景内容与通用软件设置，使用轻柔的开闭过渡。默认静音，用户可自行选择音乐。

背景 web/pond.jpg 由 ImageGen 生成，背景中不含鱼。图标由 scripts/make-icon.py 绘制。

背景生成提示：

> Production background asset for a minimalist interactive Zen koi pond wallpaper. 16:9 full bleed flat 2D top-down illustration, watercolor meets elegant Japanese hand-painted game art. Clear muted jade/teal green water, subtle soft diffuse underwater light and slight paper grain, quiet broad negative space. Five to seven rounded lotus leaves flat ON water surface in upper left corner, three flat leaves at lower right edge, two small pale pink flattened top-view lotus flowers lying among leaves. No above-water stems, no raised foliage, no 3D protrusion, no perspective, no deep shadows, no rocks, no shoreline. Delicate radial veins on matte leaves. Flowers illustrated from directly above. Sparse restrained arrangement, only 15 percent covered by plants, 85 percent open water. No fish, no text, no UI. Soft low contrast painterly water, no harsh golden caustics, no photorealism.

鱼体独立绘制于 Canvas，Three.js 绘制透明水波与植物遮挡层。雨滴以低亮度灰绿色水冠及水珠表现瞬间冲击，避免白色硬边圆环。水波使用固定时间步模拟，视觉绘制跟随刷新回调。
