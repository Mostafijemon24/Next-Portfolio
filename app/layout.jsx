import './globals.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import { getSiteSettings } from '@/lib/wordpress'
import { getSiteUrl } from '@/lib/site-url'

// Header/Footer cached at the edge; revalidated instantly via /api/revalidate (WP webhook)
export const revalidate = 3600

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: 'Mostafij Emon | Affordable Website Designer, Plugins & SEO',
  description:
    'Affordable WordPress website design, plugin development, and SEO for small businesses. Fast, mobile-friendly sites built to rank and grow by Mostafij Emon.',
  authors: [{ name: 'Mostafij Emon' }],
  robots: { index: true, follow: true },
}

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <Header settings={settings} />
        {children}
        <Footer settings={settings} />
        <ScrollManager />
      </body>
    </html>
  )
}
