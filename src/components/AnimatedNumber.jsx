import { useState, useEffect, useRef } from 'react'

export default function AnimatedNumber({ value, duration = 700 }) {
  const [display, setDisplay] = useState('')
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  // Parse value into numeric prefix and suffix
  const match = value.match(/^([\d,.]+)(.*)$/)
  const targetNum = match ? match[1] : value
  const suffix = match ? match[2] : ''
  const max = parseInt(targetNum.replace(/[.,]/g, ''), 10) || 0

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const startTime = Date.now()
    const isOrdinal = suffix === 'st' || suffix === 'nd' || suffix === 'rd' || suffix === 'th'

    let frame

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)

      if (progress < 1) {
        // Generate random-looking digits that converge
        const currentTarget = Math.round(max * eased)
        const jitter = Math.max(1, Math.round(max * (1 - eased) * (0.5 + Math.random() * 0.5)))
        const rand = Math.max(1, currentTarget + (Math.random() > 0.5 ? jitter : -jitter))
        const clamped = Math.min(max, Math.max(isOrdinal ? 1 : 0, rand))

        if (targetNum.includes(',')) {
          setDisplay(clamped.toLocaleString() + suffix)
        } else {
          setDisplay(clamped + suffix)
        }

        frame = requestAnimationFrame(animate)
      } else {
        setDisplay(value)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, value, targetNum, suffix, max, duration])

  return <span ref={ref}>{display || '—'}</span>
}
