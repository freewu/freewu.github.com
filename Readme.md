# freewu.github.com

基于 [Hugo](https://gohugo.io/) + 主题 `hugo-developer-portfolio` 的个人站点，产物输出到 `docs/`，由 GitHub Pages 发布。

日常操作统一使用 [just](https://github.com/casey/just) 管理（见 [`justfile`](./justfile)）。

## 准备

```bash
# 安装 just（任选其一）
winget install Casey.Just        # Windows
brew install just                # macOS
cargo install just               # Rust

# 检查本地依赖
just check

# 未安装 hugo 时，可用 go 安装
just install-hugo
```

## 常用命令

```bash
just                 # 列出所有命令（默认目标）
just check           # 检查 git / hugo 是否就绪

just serve           # 本地预览 http://localhost:1313/（含草稿、热更新）
just serve 8080      # 指定端口
just preview         # 等价于 just serve

just new my-post     # 新建文章 content/blog/my-post.md
just drafts          # 列出所有草稿
just posts           # 列出所有文章

just build           # 构建生产站点到 docs/（--minify，不清理 docs/）
just verify          # 校验 docs/ 没有开发模式产物（localhost:1313）
just build-drafts    # 构建含草稿的站点到 public/（本地验证）
just clean           # 清理 public/ resources/ 缓存（不动 docs/）
just clean-all       # 彻底清理（含 docs/，谨慎）

just favicon         # 由根目录 logo.png 重新生成 favicon 全套资源到 static/

just release "msg"   # 一键发布：clean -> build -> commit -> push（推荐）
just push "msg"      # 只提交推送源码，不在本地构建
just push-pages      # 备用：把 docs/ 强制推送到 Pages 仓库
just status          # 查看当前改动与最近提交
```

> 别名：`s` = `serve`，`p` = `preview`，`b` = `build`，`post` = `new`，`deploy` / `up` = `release`

> WSL 下自动探测 hugo：优先 `$HUGO`，其次 `hugo`、`hugo.exe`（无需手动指定）。如需强制某个版本：`HUGO=/path/to/hugo just build`。

> ⚠️ `docs/` 里除了 Hugo 生成的页面，还有**手工维护的内容**（`magic-tools/`、`resume/`、`api-manager/` 等），所以构建**不能**加 `--cleanDestinationDir`，`just clean` 也不会删除 `docs/`。

## 站点定制

- **顶部导航**：支持两级菜单。父级（如 `Projects`、`Books`）在 [`config.toml`](./config.toml) 中用 `identifier` + 子项 `parent` 关联，渲染逻辑在 [`themes/.../partials/menu.html`](./themes/hugo-developer-portfolio/layouts/partials/menu.html)（桌面端为 UIkit 下拉，手机端为侧边栏二级列表）。新增子项只需往 `config.toml` 的 `[[menu.main]]` 里加 `parent = "projects"`。
- **网站图标**：源图是仓库根目录的 `logo.png`，执行 `just favicon` 重新生成 `static/favicon.ico`、`favicon-16x16.png`、`favicon-32x32.png`、`apple-touch-icon.png`、`android-chrome-*.png`、`site.webmanifest`（引用见主题 `partials/head.html`），改完记得 `just build`。

## 发布流程

1. `just serve` 本地预览确认效果
2. `just release "更新说明"` —— 自动构建 `docs/`、提交并推送到 `origin/master`
3. GitHub Actions（[`.github/workflows/hugo.yml`](./.github/workflows/hugo.yml)）自动部署 GitHub Pages

## 不使用 just 时的手动命令

```bash
hugo server                                        # 预览
hugo -t hugo-developer-portfolio                   # 构建到 docs/
git add -A && git commit -m "msg" && git push      # 发布
```
