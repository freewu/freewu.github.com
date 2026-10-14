# AGENTS.md

本文件为 AI 编码助手/协作者提供本仓库的工作约定。**每次改动都必须遵守以下规则。**

## 项目简介

- 基于 [Hugo](https://gohugo.io/) 的个人站点，主题 `hugo-developer-portfolio`
- 构建产物输出到 `docs/`（`config.toml` 中 `publishDir = "docs"`），由 **GitHub Pages** 发布
- 任务统一用 [just](https://github.com/casey/just) 管理，见 `justfile`
- 源码仓库：`origin` = `https://github.com/freewu/freewu.github.com.git`（主分支 `master`）
- 部署仓库（备用）：`git@github.com:freewu/freewu.github.io.git`

## ⚠️ 强制规则：每次改动都要提交并推送远程

**任何一次代码/内容改动完成后，必须执行 `commit` 并 `push` 到远程，不允许只提交到本地。**

完成后按以下方式之一操作：

```bash
# 方式一（推荐，含构建）：清理 -> 构建 docs/ -> 提交 -> 推送
just release "提交说明"

# 方式二（只提交推送源码）
just push "提交说明"

# 方式三（手动）
git add -A
git commit -m "提交说明"
git push origin master
```

要求：

1. 一个逻辑改动对应一次提交，提交信息使用简洁的中文或英文描述。
2. 推送目标固定为 `origin master`；推送失败必须重试或明确报告原因，不得静默跳过。
3. 涉及站点内容的改动，先 `just build` 保证 `docs/` 与内容同步，再提交推送。
4. 推送后确认远端已更新（`git status` 应显示 `up to date`）。
5. 不要提交 `public/`、`resources/`、`*.lock` 等临时产物（已在 `.gitignore` 中忽略）。
6. 任何时候都不要使用 `--force` 推送到 `origin/master`；`just push-pages` 仅用于备用 Pages 仓库。

## ⚠️ 不要清空 docs/

`docs/` 中既包含 Hugo 生成的页面，也包含**手工维护的内容/单页应用**：`magic-tools/`、`api-manager/`、`cache-manager/`、`book-manager/`、`resume/` 等。

- 构建时**禁止**使用 `--cleanDestinationDir`（会删掉上述手工内容，已在 justfile 中移除）。
- `just clean` 只清理 `public/`、`resources/`，不删除 `docs/`；`just clean-all` 会删 `docs/`，仅在明确需要时使用。
- 发布前用 `git status docs` 确认没有大批 `D`（删除）记录。

## ⚠️ 不要把开发模式产物提交到 docs/

`hugo server` 默认会把页面写到 `publishDir`（即 `docs/`），且开发模式会：

- 把链接写成 `http://localhost:1313/`（污染 sitemap / RSS / 所有页面）
- 不压缩 HTML，导致 docs/ 出现大量无关变更

因此：

- `just serve` 已加 `--renderToMemory`，本地预览**不会**改动 `docs/`（日志显示 `Serving pages from memory`）。
- 直接手跑 hugo 时也必须加 `-M/--renderToMemory`；发布前必须用 **`just build`** 生成 `docs/`。
- 提交前跑 **`just verify`**：它会检查 `docs/` 是否含有 `localhost:1313`，有则报错阻止提交。`just release` 已内置该步骤。
- 若发现 docs/ 被开发产物污染：`git checkout <上一个好提交> -- docs && just build` 恢复。

## WSL / Windows 环境

- justfile 会自动探测 hugo：优先 `$HUGO` 环境变量，其次 `hugo`、`hugo.exe`。本机 WSL 内未安装 Linux 版时，会直接使用 Windows 版（如 `C:\Users\24358\go\bin\hugo.exe`，已在 PATH 中）。
- 如需强制指定：`HUGO=/path/to/hugo just build`；可用 `just check` 查看实际使用的可执行文件。
- 启动 bash 时出现的 `wsl: 检测到 localhost 代理配置，但未镜像到 WSL...` 是 WSL 自身的告警（Windows 侧配置了代理但未开启镜像模式），**不影响构建与预览**，可忽略。

## 常用命令

```bash
just                 # 列出所有命令
just check           # 检查 git / hugo 依赖
just serve [port]    # 本地预览 http://localhost:1313/
just new <name>      # 新建文章 content/blog/<name>.md
just build           # 构建到 docs/（--minify，不清理 docs/）
just verify          # 校验 docs/ 无开发模式链接（localhost:1313）
just favicon         # 由根目录 logo.png 重新生成 favicon 到 static/
just clean           # 清理 public/ resources/（不会删 docs/）
just clean-all       # 彻底清理（含 docs/，谨慎）
just release "msg"   # 一键发布（clean + build + verify + commit + push）
just push "msg"      # 仅提交并推送
just status          # 查看改动与最近提交
```

## 导航与图标

- **顶部导航支持两级菜单**：`config.toml` 的 `[[menu.main]]` 中，父级用 `identifier = "projects"`（`URL = "#"` 表示只展开不跳转），子项用 `parent = "projects"` 关联；外部链接（`https://...`）会新窗口打开。渲染在 `themes/hugo-developer-portfolio/layouts/partials/menu.html`：桌面端用 UIkit 下拉（`uk-navbar-dropdown`），手机侧边栏用 `uk-nav-sub` 二级列表。新增子项只需加一条带 `parent` 的菜单项。
- **网站图标（favicon）**：源图是仓库根目录的 `logo.png`（正方形，2048x2048）。改动图标后执行 `just favicon` 重新生成 `static/favicon.ico`、`favicon-16x16.png`、`favicon-32x32.png`、`apple-touch-icon.png`、`android-chrome-{192,512}.png`、`site.webmanifest`（脚本：`scripts/gen-favicon.py`，需 Pillow），然后 `just build` 同步到 `docs/`。引用位置：主题 `partials/head.html`。

## 目录说明

```
config.toml          站点配置（含 publishDir = docs）
justfile             任务管理入口
content/             文章与页面（Markdown）
content/blog/        博客文章
content/about/       About 页面
data/homepage.yml    首页数据
static/images/       静态图片
static/favicon*.png  网站图标（由 logo.png 生成，勿手改）
logo.png             品牌源图（favicon 生成源）
scripts/             辅助脚本（gen-favicon.py 等）
themes/hugo-developer-portfolio/   主题（含自定义 layouts 改动）
docs/                构建产物（GitHub Pages 发布目录，需提交）
.github/workflows/hugo.yml         CI：推送 master 后自动部署 Pages
build.sh              历史脚本（已过时，功能由 justfile 替代）
```

## 约定

- 回复与提交信息使用中文优先。
- 修改主题 `layouts/` 属于源码改动，同样需要提交推送。
- 发布流程：`just serve` 本地确认 → `just release "msg"` → GitHub Actions 自动部署。
