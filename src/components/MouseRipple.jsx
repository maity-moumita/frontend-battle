'use client'

import { useEffect } from 'react'

export default function MouseRipple() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const ripple = document.createElement('div')
      ripple.className = 'mouse-ripple'
      ripple.style.left = `${e.clientX}px`
      ripple.style.top = `${e.clientY}px`
      document.body.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}
