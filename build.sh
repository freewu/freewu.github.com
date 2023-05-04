#!/bin/bash
# 部署到 github pages 脚本
# 错误时终止脚本
set -e

# 删除打包文件夹
rm -rf docs

# 打包
hugo -t hugo-developer-portfolio # if using a theme, replace with `hugo -t <YOURTHEME>`

# 进入打包文件夹
cd public

# Add changes to git.

git init
git add -A

# Commit changes.
msg="building site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# 推送到 github
# freewu.github.io 只能使用 master分支
git push -f git@github.com:freewu/freewu.github.io.git master

