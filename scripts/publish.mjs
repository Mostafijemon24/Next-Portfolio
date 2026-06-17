#!/usr/bin/env node
/**
 * One-click publish — WordPress check → Git push → Vercel deploy
 * Usage: npm run publish
 * Config: copy publish.env.example → publish.env
 */

import { execSync, spawnSync } from 'child_process'
import { existsSync, readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
process.chdir(root)

const log = (msg) => console.log(msg)
const step = (n, msg) => log(`\n[${n}/4] ${msg}`)

function loadPublishEnv() {
  for (const file of ['publish.env', '.env.publish']) {
    if (!existsSync(file)) continue
    readFileSync(file, 'utf8')
      .split('\n')
      .forEach((line) => {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) return
        const eq = trimmed.indexOf('=')
        if (eq === -1) return
        const key = trimmed.slice(0, eq).trim()
        const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '')
        if (key && process.env[key] === undefined) process.env[key] = val
      })
    break
  }
}

function run(cmd, silent = false) {
  return execSync(cmd, {
    cwd: root,
    encoding: 'utf8',
    stdio: silent ? 'pipe' : 'inherit',
  })
}

function runCapture(cmd) {
  return execSync(cmd, { cwd: root, encoding: 'utf8' }).trim()
}

async function fetchOk(url, options = {}) {
  const res = await fetch(url, { cache: 'no-store', ...options })
  return res.ok
}

loadPublishEnv()

const GIT_BRANCH = process.env.GIT_BRANCH || 'main'
const LIVE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mostafij-emon-next.vercel.app'
const WP_API = process.env.WORDPRESS_API_URL || 'https://next.mostafijemon.com/wp-json'
const ALWAYS_REDEPLOY = process.env.ALWAYS_REDEPLOY !== 'false'
const AUTO_COMMIT = process.env.AUTO_COMMIT !== 'false'
const COMMIT_PREFIX = process.env.COMMIT_PREFIX || 'publish'

log('\n══════════════════════════════════════')
log('  Mostafij Emon — Publish')
log('══════════════════════════════════════')
log(`  WordPress : ${WP_API}`)
log(`  Live site : ${LIVE_URL}`)
log(`  Git branch: ${GIT_BRANCH}`)

// ── 1) WordPress health ──────────────────────────────────────
step(1, 'WordPress API চেক...')

try {
  const settingsOk = await fetchOk(`${WP_API}/me/v1/site-settings`)
  const servicesOk = await fetchOk(`${WP_API}/wp/v2/service?per_page=1`)
  if (!settingsOk || !servicesOk) throw new Error('API response not OK')
  log('  ✓ WordPress API ঠিক আছে')
} catch (e) {
  log(`  ✗ WordPress API সমস্যা: ${e.message}`)
  log('  ইন্টারনেট ও WORDPRESS_API_URL চেক করুন।')
  process.exit(1)
}

// ── 2) Git commit + push ─────────────────────────────────────
step(2, 'GitHub-এ push...')

let pushed = false

try {
  runCapture('git rev-parse --is-inside-work-tree')
} catch {
  log('  ✗ Git repository নেই')
  process.exit(1)
}

const status = runCapture('git status --porcelain')
const hasChanges = status.length > 0

if (hasChanges) {
  if (!AUTO_COMMIT) {
    log('  ⚠ লোকাল কোড পরিবর্তন আছে কিন্তু AUTO_COMMIT=false')
    log(status)
    process.exit(1)
  }

  const msg = `${COMMIT_PREFIX}: ${new Date().toISOString().slice(0, 16).replace('T', ' ')}`
  run('git add -A')
  run(`git commit -m ${JSON.stringify(msg)}`)
  log(`  ✓ Commit: ${msg}`)
} else {
  log('  · কোড পরিবর্তন নেই — commit skip')
}

try {
  const branch = runCapture('git branch --show-current')
  if (branch !== GIT_BRANCH) {
    log(`  ⚠ বর্তমান branch: ${branch} (expected ${GIT_BRANCH})`)
  }
  run(`git push -u origin ${GIT_BRANCH}`)
  pushed = true
  log('  ✓ GitHub push সফল')
} catch {
  log('  ✗ git push ব্যর্থ — GitHub login / remote চেক করুন')
  log('  টিপ: gh auth login  অথবা  SSH key সেটআপ করুন')
  if (hasChanges) process.exit(1)
}

// ── 3) Vercel deploy ─────────────────────────────────────────
step(3, 'Vercel deploy...')

const hook = process.env.VERCEL_DEPLOY_HOOK

if (hook) {
  try {
    const res = await fetch(hook, { method: 'POST' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    log('  ✓ Deploy hook ট্রিগার হয়েছে (GitHub push + Vercel build)')
  } catch (e) {
    log(`  ⚠ Deploy hook ব্যর্থ: ${e.message}`)
    log('  Vercel CLI দিয়ে deploy করা হচ্ছে...')
    deployWithCli()
  }
} else if (hasChanges || ALWAYS_REDEPLOY || pushed) {
  if (!hook && ALWAYS_REDEPLOY && !hasChanges) {
    log('  · WP আপডেটের পর fresh deploy (ALWAYS_REDEPLOY=true)')
  }
  deployWithCli()
} else {
  log('  · Deploy skip (কোড পরিবর্তন নেই, ALWAYS_REDEPLOY=false)')
}

function deployWithCli() {
  const result = spawnSync('npx', ['vercel', '--prod', '--yes'], {
    cwd: root,
    stdio: 'inherit',
    shell: true,
  })
  if (result.status !== 0) {
    log('  ✗ Vercel deploy ব্যর্থ')
    process.exit(1)
  }
  log('  ✓ Vercel production deploy সফল')
}

// ── 4) Live verify ───────────────────────────────────────────
step(4, 'লাইভ সাইট যাচাই...')

await new Promise((r) => setTimeout(r, 5000))

try {
  const ok = await fetchOk(LIVE_URL)
  if (ok) log(`  ✓ লাইভ সাইট চালু: ${LIVE_URL}`)
  else log(`  ⚠ লাইভ সাইট HTTP error — ১–২ মিনিট পর আবার চেক করুন`)
} catch (e) {
  log(`  ⚠ লাইভ চেক: ${e.message}`)
}

log('\n══════════════════════════════════════')
log('  সম্পন্ন!')
log('══════════════════════════════════════')
log('  লাইভ দেখুন : ' + LIVE_URL)
log('  WP এডিট    : https://next.mostafijemon.com/wp-admin')
log('  Hard refresh: Cmd+Shift+R (Mac) / Ctrl+F5 (Win)')
log('')
