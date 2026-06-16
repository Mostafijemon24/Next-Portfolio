'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollManager() {
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo(0, 0)
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
  return null
}
