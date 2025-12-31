import { useEffect, useRef, useState } from 'react'

const MIN_X = 10
const MAX_X = 90

export default function BottomScene() {
  const [animalX, setAnimalX] = useState(50)
  const [facingRight, setFacingRight] = useState(false)
  const positionRef = useRef(50)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const currentY = window.scrollY
        const delta = currentY - lastScrollY.current

        if (delta !== 0) {
          const direction = delta > 0 ? -1 : 1
          const moveAmount = Math.min(1.8, Math.abs(delta) * 0.05)
          let nextX = positionRef.current + direction * moveAmount

          nextX = Math.max(MIN_X, Math.min(MAX_X, nextX))

          positionRef.current = nextX
          setAnimalX(nextX)
          setFacingRight(delta < 0)
          lastScrollY.current = currentY
        }

        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bottom-scene" aria-hidden="true">
      <div className="bottom-layer background" />
      <div className="bottom-layer water" />
      <img
        className={`bottom-animal ${facingRight ? 'facing-right' : ''}`}
        src="/img/cat.png"
        alt=""
        style={{ left: `${animalX}%` }}
      />
      <div className="bottom-layer foreground" />
    </div>
  )
}
