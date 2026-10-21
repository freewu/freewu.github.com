#!/usr/bin/env node
/**
 * 简体内容 → 繁体内容（OpenCC）
 *
 *   content/**.md  ──▶  content/**.zh-hant.md
 *
 * 说明：
 *   - 繁体文件是「生成物」，请勿手改；改完简体内容后重新执行 `just sync-hant`
 *   - 英文内容需手工维护（content/**.en.md），不会被本脚本处理
 *   - 转换配置默认 twp（台湾正体 + 台湾用词），可用 OPENCC_TO=tw|hk|twp 覆盖
 *
 * 依赖：opencc-js（首次运行前在仓库根目录执行 `npm --prefix scripts install`）
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as OpenCC from 'opencc-js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = join(root, 'content')
const target = process.env.OPENCC_TO || process.argv[2] || 'twp'

const SKIP = /\.(zh-hant|en)\.md$/
const convert = OpenCC.Converter({ from: 'cn', to: target })

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (name.endsWith('.md') && !SKIP.test(name)) out.push(p)
  }
  return out
}

let n = 0
for (const src of walk(contentDir)) {
  const dst = src.replace(/\.md$/, '.zh-hant.md')
  writeFileSync(dst, convert(readFileSync(src, 'utf8')), 'utf8')
  console.log(`  ✓ ${relative(root, src)} → ${relative(root, dst)}`)
  n++
}
console.log(`==> 繁体内容已更新：${n} 个文件（OpenCC: cn → ${target}）`)
