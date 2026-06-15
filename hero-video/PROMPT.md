# Hero background video — generation kit

Ambient, looping background for the hero section. Sits **behind** the HTML logo/lettering/CTA, so the center stays empty and the doodles live in the corners.

## Files

| File | Use |
|---|---|
| `hero-video-start.png` (1920×1080) | first frame, desktop 16:9 |
| `hero-video-end.png` (1920×1080) | last frame — identical to start, for a seamless loop |
| `hero-video-start-portrait.png` (1080×1920) | first frame, mobile 9:16 (optional 2nd render) |
| `hero-video-end-portrait.png` (1080×1920) | last frame, portrait |

Use **image-to-video**. Feed the start frame. If the tool accepts a last/end frame, give it the (identical) end frame. If it has a **Loop** toggle, turn it on and you can skip the end frame.

---

## Main prompt (paste into Kling / Runway Gen-3 / Luma / Veo / Pika / Hailuo)

> Hand-drawn 2D line-art animation on a warm cream background. A flat illustrated scene of coffee doodles — outlined cups, a teapot, hands, and small hearts in orange, green and dark brown — comes gently to life. Thin wisps of steam rise and curl slowly from the cups and the teapot spout. The little hearts pulse softly and bob up and down a few pixels. The outlined hands give a slow, gentle squeeze and the fingers wiggle subtly. Every ink line has a faint living-line "boil", like looping hand-drawn stop-motion. The faint background pattern drifts almost imperceptibly. Locked-off static camera, no zoom, no pan. Calm, cozy, minimal, breathing motion. Seamless loop — every element returns exactly to its starting pose.

## Negative prompt

> camera movement, zoom, pan, parallax push, 3D, realistic rendering, photorealism, new objects appearing, objects drifting away, morphing shapes, distortion, warping lines, text, letters, watermark, logo, color change, flicker, busy motion, fast motion, people, faces, liquid splashing

## Settings

- **Aspect:** 16:9 (desktop). Render the portrait pair separately at 9:16 for mobile if you want it sharp on phones.
- **Duration:** 5 s (loop or extend to ~8–10 s).
- **Motion strength / dynamism:** LOW (e.g. Runway "motion 2–3 / 10", Kling low). The win here is subtlety — too much motion breaks the line-art.
- **Loop:** ON if available, else rely on identical first+last frame.
- **FPS:** 24.

## Per-tool notes

- **Kling 1.6 / 2.x** — image-to-video, Start + End frame slots: drop start in both. Creativity low, "Professional mode" on. Best for clean line-art.
- **Runway Gen-3 / Gen-4** — image-to-video, paste prompt, Motion Brush optional on each cup's steam zone; keep global motion low.
- **Luma Dream Machine** — upload start frame, enable **Loop**, paste prompt; end frame optional.
- **Pika / Hailuo (MiniMax)** — image-to-video, prompt + low motion; add "subtle, slow" if it over-animates.

---

## After you get the .mp4

Drop it in the project and tell me — I'll wire a muted, autoplay, looping `<video>` into the hero behind the logo (poster = the start frame, `prefers-reduced-motion` falls back to the static image), compress it to web size, and add the portrait source for mobile. Target: keep it under ~2–3 MB so the page stays fast.
