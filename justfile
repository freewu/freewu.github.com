# ═══════════════════════════════════════════════════════════════
#  freewu.github.com · Hugo 静态站点任务管理
#  ---------------------------------------------------------------
#  just --list        列出所有可用命令
#  just <命令>        执行命令
# ═══════════════════════════════════════════════════════════════

set shell := ["bash", "-uc"]

# ── 配置 ────────────────────────────────────────────────────────
theme         := "hugo-developer-portfolio"          # 站点主题
# hugo 可执行文件：优先 $HUGO，其次 hugo / hugo.exe（WSL 下自动使用 Windows 版）
hugo          := env_var_or_default("HUGO", `command -v hugo || command -v hugo.exe || echo hugo`)
publish_dir   := "docs"                              # hugo publishDir（GitHub Pages 目录）
origin_branch := "master"                            # 源码仓库主分支
pages_repo    := "git@github.com:freewu/freewu.github.io.git"  # Pages 部署仓库
pages_branch  := "master"                            # Pages 部署分支
bind          := "0.0.0.0"                           # 预览监听地址（WSL 建议 0.0.0.0）

# ── 别名 ────────────────────────────────────────────────────────
alias s      := serve
alias p      := preview
alias b      := build
alias post   := new
alias up     := release
alias deploy := release

# ═══════════════════════════════════════════════════════════════
#  默认 / 帮助
# ═══════════════════════════════════════════════════════════════

# 显示所有可用命令
[default]
help:
    @just --list --unsorted

# 显示带说明的分组命令
[group('help')]
list:
    @just --list

# ═══════════════════════════════════════════════════════════════
#  环境
# ═══════════════════════════════════════════════════════════════

# 检查本地依赖（git / hugo）
[group('env')]
check:
    @echo "==> 依赖检查"
    @command -v git  >/dev/null 2>&1 && echo "  git  : $(git --version)" || { echo "  git  : ✗ 未安装"; exit 1; }
    @command -v {{hugo}} >/dev/null 2>&1 && echo "  hugo : $($(command -v {{hugo}}) version)  [$(command -v {{hugo}})]" || { echo "  hugo : ✗ 未安装（可执行  just install-hugo，或设置 HUGO=/path/to/hugo）"; exit 1; }

# 通过 go install 安装 hugo
[group('env')]
install-hugo:
    go install -v github.com/gohugoio/hugo@latest
    @echo "==> 已安装，请确认 $$(go env GOPATH)/bin 在 PATH 中"

# ═══════════════════════════════════════════════════════════════
#  开发 / 预览
# ═══════════════════════════════════════════════════════════════

# 本地预览 http://localhost:1313/（含草稿，热更新）
[group('dev')]
serve port="1313" *args:
    @echo "==> 预览 http://localhost:{{port}}/  (Ctrl-C 退出)"
    @echo "==> 使用 hugo: {{hugo}}"
    {{hugo}} server -t {{theme}} --bind {{bind}} --port {{port}} \
        --renderToMemory --buildDrafts --buildFuture --disableFastRender {{args}}

# 本地预览（等价于 just serve）
[group('dev')]
preview port="1313" *args:
    @just serve {{port}} {{args}}

# 列出所有草稿
[group('dev')]
drafts:
    {{hugo}} list drafts -t {{theme}}

# 列出所有已发布文章
[group('dev')]
posts:
    @{{hugo}} list all -t {{theme}} | grep -v '^path' | column -s, -t || true

# ═══════════════════════════════════════════════════════════════
#  构建 / 清理
# ═══════════════════════════════════════════════════════════════

# 构建生产站点到 {{publish_dir}}（注意：docs/ 内含手工维护内容，不要加 --cleanDestinationDir）
[group('build')]
build:
    @echo "==> 构建站点 -> {{publish_dir}}/"
    {{hugo}} -t {{theme}} --minify
    @echo "==> 完成，docs/ 文件数: $(find {{publish_dir}} -type f | wc -l)"

# 构建（含草稿，用于本地验证）
[group('build')]
build-drafts:
    {{hugo}} -t {{theme}} --buildDrafts --buildFuture --cleanDestinationDir -d public

# 校验 docs/ 为生产构建产物（防止开发模式产物被误提交）
[group('build')]
verify:
    #!/usr/bin/env bash
    set -euo pipefail
    hits="$(grep -rIl 'localhost:1313' "{{publish_dir}}" || true)"
    if [ -n "$hits" ]; then
        echo "✗ 校验失败：{{publish_dir}}/ 含有 http://localhost:1313（开发模式产物）" >&2
        echo "$hits" | head >&2
        echo "  请执行 just build 重新生成后再提交" >&2
        exit 1
    fi
    echo "==> 校验通过：{{publish_dir}}/ 无开发模式链接"

# 清理构建缓存（不会动 docs/，其中含手工维护的文件）
[group('build')]
clean:
    rm -rf public resources .hugo_build.lock
    @echo "==> 已清理 public/ resources/"

# 彻底清理（含 docs/，会删除手工维护内容，谨慎使用）
[group('build')]
clean-all:
    rm -rf {{publish_dir}} public resources .hugo_build.lock
    @echo "==> 已清理 {{publish_dir}}/ public/ resources/（docs/ 需重新发布手工内容）"

# ═══════════════════════════════════════════════════════════════
#  内容
# ═══════════════════════════════════════════════════════════════

# 新建博客草稿: just new my-post
[group('content')]
new name:
    {{hugo}} new "blog/{{name}}.md" -t {{theme}}
    @echo "==> 已创建 content/blog/{{name}}.md（记得修改 draft: false 后发布）"

# 新建页面: just new-page about-me
[group('content')]
new-page name:
    {{hugo}} new "{{name}}/_index.md" -t {{theme}}

# ═══════════════════════════════════════════════════════════════
#  发布
# ═══════════════════════════════════════════════════════════════

# 一键发布：清理 → 构建 → 校验 → 提交 → 推送（GitHub Actions 自动部署 Pages）
[group('deploy')]
release msg="site update":
    @just clean
    @just build
    @just verify
    git add -A
    @git commit -m "{{msg}}" || echo "==> 没有需要提交的变更"
    git push origin {{origin_branch}}
    @echo "==> 已推送 origin/{{origin_branch}}，GitHub Actions 将自动发布"

# 仅提交并推送源码（本地不构建）
[group('deploy')]
push msg="site update":
    git add -A
    @git commit -m "{{msg}}" || echo "==> 没有需要提交的变更"
    git push origin {{origin_branch}}

# 将 {{publish_dir}} 产物强制推送到 Pages 仓库（备用方案，不用 Actions 时使用）
[group('deploy')]
push-pages msg="building site":
    #!/usr/bin/env bash
    set -euo pipefail
    if [ ! -d "{{publish_dir}}" ]; then
        echo "==> 未找到 {{publish_dir}}/，请先执行 just build" >&2
        exit 1
    fi
    tmp="$(mktemp -d)"
    trap 'rm -rf "$tmp"' EXIT
    echo "==> 复制 {{publish_dir}}/ 到临时目录并推送"
    cp -r "{{publish_dir}}/." "$tmp/"
    cd "$tmp"
    git init -q
    git checkout -q -b "{{pages_branch}}"
    git add -A
    git commit -qm "{{msg}} $(date '+%F %T')"
    git remote add origin "{{pages_repo}}"
    git push -f origin "{{pages_branch}}"
    echo "==> 已发布到 {{pages_repo}} ({{pages_branch}})"

# 查看当前改动状态
[group('deploy')]
status:
    @git status --short
    @echo "---"
    @git log --oneline -5
