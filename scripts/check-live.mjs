#!/usr/bin/env node
/**
 * Quick health check — WordPress API + live Vercel site.
 * Run: npm run check:live
 */

const WP = process.env.WORDPRESS_API_URL || 'https://next.mostafijemon.com/wp-json'
const LIVE = process.env.NEXT_PUBLIC_SITE_URL || 'https://mostafij-emon-next.vercel.app'

const ok = (msg) => console.log(`  ✓ ${msg}`)
const warn = (msg) => console.log(`  ⚠ ${msg}`)
const fail = (msg) => console.log(`  ✗ ${msg}`)

let errors = 0

async function getJson(url) {
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

console.log('\nMostafij Emon — Live check\n')
console.log(`WordPress: ${WP}`)
console.log(`Live site: ${LIVE}\n`)

try {
  const settings = await getJson(`${WP}/me/v1/site-settings`)
  ok('Site Settings API')
  if (!settings.form_endpoint) warn('form_endpoint খালি — contact form কাজ করবে না')
  else ok('Contact form endpoint সেট')
} catch (e) {
  fail(`Site Settings API — ${e.message}`)
  errors++
}

try {
  const services = await getJson(`${WP}/wp/v2/service?per_page=1&acf_format=standard`)
  ok(`Services CPT (${services.length}+ items)`)
} catch (e) {
  fail(`Services API — ${e.message}`)
  errors++
}

try {
  const res = await fetch(LIVE, { cache: 'no-store' })
  if (!res.ok) throw new Error(String(res.status))
  const html = await res.text()
  ok('Live site responds')

  if (html.includes('WORDPRESS_API_URL') || html.includes('your-form-id')) {
    warn('Live HTML-এ placeholder দেখা যাচ্ছে — কোড deploy প্রয়োজন হতে পারে')
  }

  if (!html.includes('mostafij-emon-next') && !html.includes('vercel.app') && LIVE.includes('vercel')) {
    // noop
  }
} catch (e) {
  fail(`Live site — ${e.message}`)
  errors++
}

console.log('')
if (errors === 0) {
  console.log('সব ঠিক আছে। WP-তে কনটেন্ট বদলালে redeploy লাগবে না।\n')
} else {
  console.log(`${errors}টি সমস্যা। কোড পরিবর্তন হলে: npm run ship\n`)
  process.exit(1)
}
