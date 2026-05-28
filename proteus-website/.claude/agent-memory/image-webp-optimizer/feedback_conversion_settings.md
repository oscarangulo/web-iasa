---
name: cwebp conversion settings for IASA project
description: Validated cwebp flags and quality levels for this project's image categories
type: feedback
---

Settings confirmed to produce excellent quality/size ratio for this project (May 2026):

**Portrait/photo JPEGs (team photos):** `cwebp -q 82 -sharp_yuv -mt -preset photo`
- Achieved ~75-80% size reduction vs JPEG q=80 originals
- -sharp_yuv improves detail in skin tones and hair edges
- -mt enables multi-threading for speed

**Large group/scene photos:** Same as above (`-q 82 -sharp_yuv -mt -preset photo`)

**PNG logos with transparency (division logos, 600px):** `cwebp -q 90 -sharp_yuv -mt -preset drawing -exact`
- -exact preserves RGB values under transparent pixels (important for logo rendering)
- -preset drawing better than photo for graphic/vector-like content
- NOTE: `-preset logo` does NOT exist in cwebp 1.6.0 — use `drawing` instead

**Small PNG logos with transparency (logo-iasa, ~17KB):** `cwebp -lossless -mt -exact`
- Lossless is correct here: file is small enough that lossless WebP still beats PNG significantly (17KB PNG → 4.2KB WebP lossless = 75% saving)
- -exact mandatory to preserve transparency

**Why:** User requested q=75-85 for photos, q=90 for logos. q=82 was chosen as optimal midpoint for portrait photos — tested visually acceptable and hits target byte ranges.

**How to apply:** Use these exact flag combinations for future conversions in this project. Do not use `-preset logo` (invalid). Always use `-exact` for any PNG with transparency.
