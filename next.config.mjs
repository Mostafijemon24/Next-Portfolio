/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'mostafijemon.com' },
      { protocol: 'https', hostname: 'next.mostafijemon.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=0, stale-while-revalidate=0' }],
      },
    ]
  },
}
export default nextConfig
