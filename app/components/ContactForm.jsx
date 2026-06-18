'use client'

import { useState } from 'react'

export default function ContactForm({ endpoint, serviceOptions = [], submitLabel = 'Send message' }) {
  const [status, setStatus] = useState('idle') // idle | sending | ok | error
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')

    // Simple urlencoded POST → no CORS preflight needed
    const body = new URLSearchParams(new FormData(form))

    try {
      const res = await fetch(endpoint, { method: 'POST', body })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json.ok) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
        setError(json.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error — please try again, or email us directly.')
    }
  }

  if (status === 'ok') {
    return (
      <div className="card" style={{ padding: '1.6rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--teal)', fontWeight: 600, marginBottom: '.4rem' }}>
          ✓ Thank you! Your message has been sent.
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>
          I&apos;ll get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form id="contact-form" noValidate onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="jane@business.com" required />
      </div>
      <div className="field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service">
          {serviceOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          placeholder="A few sentences about your business, goals, and budget..."
        />
      </div>
      <button className="btn btn--primary btn--lg" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : submitLabel}
      </button>
      {status === 'error' && (
        <p role="alert" style={{ marginTop: '1rem', color: '#c0392b', fontSize: '.92rem' }}>
          {error}
        </p>
      )}
    </form>
  )
}
