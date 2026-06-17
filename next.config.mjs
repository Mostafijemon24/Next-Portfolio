/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'mostafijemon.com' },
      { protocol: 'https', hostname: 'mostafijemon.studio' },
      { protocol: 'https', hostname: 'next.mostafijemon.com' },
    ],
  },
}
export default nextConfig
