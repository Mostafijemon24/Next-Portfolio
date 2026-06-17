import { revalidateTag, revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function isAuthorized(request) {
  const secret = process.env.REVALIDATE_SECRET
  if (!secret) return false
  const url = new URL(request.url)
  const fromQuery = url.searchParams.get('secret')
  const fromHeader = request.headers.get('x-revalidate-secret')
  return fromQuery === secret || fromHeader === secret
}

function handle(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, message: 'Invalid or missing secret' }, { status: 401 })
  }
  revalidateTag('wp')
  // Full coverage: purge every route under the root layout too
  revalidatePath('/', 'layout')
  return NextResponse.json({ ok: true, revalidated: true, tag: 'wp', path: '/', now: Date.now() })
}

export async function POST(request) {
  return handle(request)
}

export async function GET(request) {
  return handle(request)
}
