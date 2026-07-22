import { useState, useEffect } from 'react'

export default function useTypewriter(text, speed = 40, delay = 800) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!text) return

    let timeout
    const timer = setTimeout(() => {
      let i = 0
      const type = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
          timeout = setTimeout(type, speed)
        } else {
          setDone(true)
        }
      }
      type()
    }, delay)

    return () => {
      clearTimeout(timer)
      clearTimeout(timeout)
    }
  }, [text, speed, delay])

  return { displayed, done }
}
