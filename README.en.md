# Zen desktop · 禅意桌面

[简体中文](README.md) | **English**

A quiet moment on your desktop.

An interactive Windows wallpaper focused on calm, space, and gentle motion. Scenes include a koi pond and an experimental **Cloud Sea Beta**. In the top-down pond, fish swim, turn, gather around food, and disperse. Light rain creates ripples around floating lotus leaves and flowers. The pond is rendered in real time; the cloud scene combines local video motion with continuous time-of-day grading.

![Koi pond preview](docs/preview.png)

Current version: **0.5.1**. Source mirrors: [GitHub](https://github.com/SSYNG/zen-desktop) · [Gitee](https://gitee.com/ssy_kr/zen-desktop).

0.5.1 removes procedural clouds and their dependencies, removes large fish coils and launches, and applies tiled AI restoration to 2560×1440 cloud video. Stalled endpoints are trimmed and the loop transition uses optical flow. Day/night grading, optional Windows login startup, and individual feeding reaction delays and tail rhythms remain. See the [video generation workflow](experiments/cloud-video/README.md).

## Features

- Four koi varieties (Kohaku, Yamabuki, Sanke, and solid red Benigoi); select two or three, adjust the population from 6 to 32, and set a baseline speed. Individual fish have different speeds and occasionally dart or turn sharply.
- Click empty desktop space to drop one food pellet. Nearby fish accelerate toward it; a close lateral pellet triggers braking and gentle steering. Reaction delay and tail rhythm vary between fish and encounters. Only mouth contact consumes food, after which the school disperses.
- Population changes bring new fish in from beyond the frame and let departing fish swim out, preserving existing fish.
- Optional light rain with drops, subtle crowns, splashes, and expanding, overlapping water ripples.
- **Cloud Sea Beta**: tiled-restored cloud video with an offline optical-flow loop transition and native buffered video looping. It follows the local clock or a fixed time, with dawn, noon, sunset, and night presets. Fixed time freezes lighting while clouds keep moving.
- Optional Windows login startup, disabled by default. Launch directly onto the desktop with settings closed. Portable upgrades update the launch path while preserving disabled startup items.
- Optional calendar with Gregorian and Chinese lunar dates, weekday, and a countdown to the next holiday or solar term.
- Separate wallpaper and application settings, translucent panels, subtle hover movement, and smooth opening and closing transitions.
- Custom local music with playback and volume controls. The application stays silent until music is selected.
- Launch directly onto the desktop with settings closed. Double-click empty desktop space to toggle icons; a normal exit makes desktop icons visible.
- Rendering follows refresh callbacks with a fallback frame clock for desktop callback stalls. There is no fixed frame-rate setting; actual performance depends on hardware and window scheduling.

Rain, ocean, snowy forest, and bamboo-path scenes are placeholders for future development.

## Run

Windows 10 / 11 x64. Electron / Chromium is bundled, so WebView2 is not required. The native desktop bridge requires .NET Framework 4.8.

1. Extract the entire portable archive and keep all files together.
2. Double-click ZenDesktop.exe to attach the wallpaper to the primary monitor.
3. Open settings using the upper-right button or system tray. Closing settings keeps the wallpaper running.
4. Enable Windows login startup in Application Settings if desired. Keep the portable folder in place; launching a newer version migrates the registered path.
5. Exit from the tray menu or the bottom of the settings panel.

Defaults: 16 fish, the three original varieties, speed multiplier 0.8, calendar enabled, rain, sound, and login startup disabled. Settings persist in %APPDATA%\ZenDesktop-Electron. Custom music is stored in IndexedDB within that user data directory.

The portable archive is approximately **157 MiB**, or **376 MiB** extracted. Local dist/ retains only the latest 0.5.1 and previous 0.5.0 folders and ZIP files. Build artifacts are excluded from Git; build from source after cloning. No remote release binaries were published in this round.

To preview in a normal window without attaching to the desktop or changing icons:

    .\ZenDesktop.exe --preview

## Development

Windows, Node.js **22.12 or later**, npm, and the Windows .NET Framework C# compiler are required. Tested with Node.js 22.13.1. Python and Pillow are needed only to regenerate the icon; normal builds use the committed icon.

    npm ci
    npm run preview       # Browser preview: http://127.0.0.1:5173
    npm test              # Simulation, cloud clocks, and audio lifecycle tests
    npm run build         # Compile the bridge and package Windows x64
    npm run desktop       # Run Electron after the bridge has been generated

The first install or build downloads the Electron runtime. If necessary for your network, set ELECTRON_MIRROR before npm ci; otherwise official download sources are used. Keep certificate verification enabled.

If your npm configuration disables installation scripts, run node node_modules/electron/install.js before launching the development desktop application.

Build outputs:

    dist/v0.5.1/ZenDesktop-win32-x64/ZenDesktop.exe
    dist/ZenDesktop-Electron-0.5.1-win-x64.zip

Exit a running version before rebuilding the same version because Windows may lock its files. Browser previews cover visuals and interactions; desktop attachment, icons, and tray behavior require the Windows application.

## Architecture

| Path | Purpose |
| --- | --- |
| electron/ | Wallpaper and settings windows, tray, isolated IPC, fallback frame clock |
| native/ | C# / Win32 desktop attachment, pointer mapping, icon control |
| web/simulation.js | Steering, separation, feeding, darts, and sharp turns |
| web/renderer.js | Independent Canvas fish, procedural skins, and rain drops |
| web/cloud-video.js / web/media/ | Video cloud motion, native video looping, day/night grading and bundled media |
| electron/startup.cjs | Windows user login startup and portable path migration |
| web/cloud-time.js | Local / fixed clock and continuous time-of-day changes |
| web/water-surface.js | Three.js GPU waves and transparent surface layer |
| web/ | Settings, lunar calendar, audio, and flat watercolor background |
| assets/ | Windows and PNG icons |
| scripts/ | Packaging, preview server, and icon generation |
| tests/ | Fish, cloud clock, and audio tests |

Fish and water are drawn separately to avoid uploading a full-screen fish canvas to WebGL every frame. Lotus leaves and flowers are fixed in the background. Fish use procedural 2.5D body deformation rather than complete 3D models. Unsupported water rendering falls back to Canvas ripples.

## Compatibility and current limits

- Video Cloud Sea is Beta: a silent 3.46-second, 83-frame, 24 FPS, 2560×1440 clip restored from 1344×768 using tiled AI upscaling and cropping. Stalled endpoints are trimmed and the transition is aligned with optical flow; the entire clip has not been frame-interpolated. Local warping may remain, so a perfectly seamless loop in every region is not guaranteed. Sky and cloud grading approximate time-of-day changes, without recomputing sun direction, mountain shadows or occlusion.
- Cloud video renders at up to 2560 pixels wide for 2K displays. AI restoration improves clarity but does not provide native 2K generation detail. WebGL 2 is required. Resource, decoding or graphics-context errors return to the pond; actual FPS depends on hardware.
- Local-clock mode assumes approximately 06:00 sunrise and 18:00 sunset. No location access or geographic / seasonal astronomical calculation is used.
- Only the primary monitor is supported; per-monitor wallpaper settings are not implemented.
- Desktop organizers can cover the wallpaper layer. Exiting Tencent Desktop Organizer restored wallpaper visibility during testing.
- Avoid running multiple historical versions together. Use the tray's reattach command after restarting Explorer.
- WorkerW / Progman attachment depends on undocumented Explorer window structures and may be affected by Windows updates.
- A normal exit shows desktop icons. Forced termination or a crash may prevent cleanup; restore icons through the desktop context menu: View → Show desktop icons.
- Fullscreen application pausing, sleep recovery, additional scenes, an installer, and long-duration power optimization are not implemented.

Twenty-two automated tests cover startup toggles and portable path migration, cloud clocks and settings migration, alongside attraction and food consumption, dispersal, simulation stability, individual speeds, spontaneous turns, bounded rain, custom audio cleanup, lateral feeding turns, mouth-only bites, population transitions, rapid slider reversals, and independent reactions to pellets between two fish. Actual desktop presentation needs manual verification; changing simulation state does not prove that the displayed image is updating.

## License and author

Original author: **SSYNG (Gitee: ssy_kr)**.

This project is source-available under the [PolyForm Noncommercial License 1.0.0](LICENSE):

- Study, use, modification, and distribution are permitted within the license terms.
- **Commercial use is not licensed.**
- **Derivative work and redistribution must retain the original author information, project links, and required license notices, and include LICENSE and NOTICE.**
- Third-party components retain their own licenses; this project's noncommercial license does not replace those terms.

Required attribution is in [NOTICE](NOTICE). See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for dependency notices. The complete license text governs.
