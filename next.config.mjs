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
  async redirects() {
    return [
      // WP service slug "e-commerce-solutions" → actual Next.js route "/ecommerce-solutions"
      { source: '/e-commerce-solutions', destination: '/ecommerce-solutions', permanent: true },
    ]
  },
}
export default nextConfig
