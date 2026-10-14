#!/usr/bin/env python3
"""由仓库根目录的 logo.png 生成站点 favicon 全套资源（输出到 static/）。

用法：
    just favicon                    # 使用 ./logo.png
    python3 scripts/gen-favicon.py [源图路径]

生成文件（static/）：
    favicon.ico                 16/24/32/48/64 多尺寸（浏览器标签页）
    favicon-16x16.png
    favicon-32x32.png
    apple-touch-icon.png        180x180（iOS 添加到主屏）
    android-chrome-192x192.png  PWA / Android
    android-chrome-512x512.png  PWA / Android
    site.webmanifest            Web App Manifest（含 theme_color）

生成后执行 `just build` 同步到 docs/，并在 head.html 中引用（已在主题 head.html 中配置）。
"""
import pathlib
import sys

try:
    from PIL import Image, ImageStat
except ImportError:  # pragma: no cover
    sys.exit("✗ 缺少 Pillow，请先安装：pip install Pillow")

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "static"

SRC = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "logo.png"

ICO_SIZES = (16, 24, 32, 48, 64)
PNG_SIZES = (16, 32)
APPLE_SIZE = 180
ANDROID_SIZES = (192, 512)


def main() -> int:
    if not SRC.exists():
        sys.exit(f"✗ 找不到源图：{SRC}")
    if SRC.suffix.lower() == ".ico":
        sys.exit("✗ 源图不能是 .ico")

    src = Image.open(SRC).convert("RGB")
    w, h = src.size
    if w != h:
        side = min(w, h)
        left, top = (w - side) // 2, (h - side) // 2
        src = src.crop((left, top, left + side, top + side))
        print(f"==> 源图非正方形 {w}x{h}，居中裁剪为 {side}x{side}")

    def resized(size: int) -> Image.Image:
        return src.resize((size, size), Image.LANCZOS)

    OUT.mkdir(parents=True, exist_ok=True)
    written = []

    # 多尺寸 .ico：PIL 会从最大尺寸生成各档
    ico = OUT / "favicon.ico"
    resized(max(ICO_SIZES)).save(ico, format="ICO", sizes=[(s, s) for s in ICO_SIZES])
    written.append(ico)

    for size in PNG_SIZES:
        p = OUT / f"favicon-{size}x{size}.png"
        resized(size).save(p, format="PNG", optimize=True)
        written.append(p)

    p = OUT / "apple-touch-icon.png"
    resized(APPLE_SIZE).save(p, format="PNG", optimize=True)
    written.append(p)

    for size in ANDROID_SIZES:
        p = OUT / f"android-chrome-{size}x{size}.png"
        resized(size).save(p, format="PNG", optimize=True)
        written.append(p)

    # 主色：缩小后取平均，作为 manifest/theme-color
    avg = ImageStat.Stat(src.resize((64, 64))).mean
    theme = "#%02x%02x%02x" % tuple(round(v) for v in avg)
    manifest = OUT / "site.webmanifest"
    manifest.write_text(
        "{\n"
        '  "name": "Bluefrog\' Website",\n'
        '  "short_name": "Bluefrog",\n'
        '  "icons": [\n'
        '    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },\n'
        '    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }\n'
        "  ],\n"
        f'  "theme_color": "{theme}",\n'
        '  "background_color": "#ffffff",\n'
        '  "display": "standalone"\n'
        "}\n",
        encoding="utf-8",
    )
    written.append(manifest)

    print(f"==> 源图: {SRC} ({w}x{h})")
    for f in written:
        print(f"    {f.relative_to(ROOT)}  {f.stat().st_size:>8,} bytes")
    print(f"==> 主色（theme_color）: {theme}")
    print("==> 完成，执行 just build 同步到 docs/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
