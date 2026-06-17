import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

async function probe(label, url, headers = {}) {
  const out = { label, url, status: 0, ok: false, error: null, sample: null }
  try {
    const res = await fetch(url, { cache: 'no-store', headers })
    out.status = res.status
    out.ok = res.ok
    const text = await res.text()
    out.sample = text.slice(0, 120)
  } catch (e) {
    out.error = String(e?.cause?.code || e?.cause || e)
  }
  return out
}

export async function GET() {
  const base = process.env.WORDPRESS_API_URL || 'https://next.mostafijemon.com/wp-json'
  const browserUA =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'

  const results = await Promise.all([
    probe('control_example', 'https://example.com'),
    probe('wp_default_ua', `${base}/wp/v2/pages?slug=home&acf_format=standard`),
    probe('wp_browser_ua', `${base}/wp/v2/pages?slug=home&acf_format=standard`, {
      'User-Agent': browserUA,
    }),
    probe('wp_root', `${base.replace(/\/wp-json$/, '')}/`, { 'User-Agent': browserUA }),
  ])

  return NextResponse.json({ base, results })
}
