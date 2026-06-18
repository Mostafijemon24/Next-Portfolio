'use client'

import { useEffect, useState } from 'react'

function isReady(action) {
  return Boolean(action && action.startsWith('http') && !action.includes('your-form-id'))
}

export default function ContactForm({ action }) {
  // Forminator (or any WP form) is embedded from a WordPress page via iframe.
  // The embed page URL is set in WordPress → Site Settings → Contact Form Endpoint.
  const [height, setHeight] = useState(760)

  useEffect(() => {
    function onMessage(e) {
      // Optional auto-resize: the WP embed page can postMessage { type: 'me-form-height', height }
      const d = e?.data
      if (d && d.type === 'me-form-height' && typeof d.height === 'number') {
        setHeight(Math.max(420, Math.round(d.height) + 24))
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  if (!isReady(action)) {
    return (
      <div className="card" style={{ padding: '1.4rem' }}>
        <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.6 }}>
          Contact form এখনও কানেক্ট করা নেই। WordPress → <b>Site Settings → Contact → Contact Form
          Endpoint</b>-এ আপনার Forminator embed পেজের সম্পূর্ণ URL দিন — যেমন{' '}
          <code>https://next.mostafijemon.com/embed-contact/</code>
        </p>
      </div>
    )
  }

  return (
    <iframe
      src={action}
      title="Contact form"
      className="form-embed"
      style={{ height }}
      loading="lazy"
    />
  )
}
