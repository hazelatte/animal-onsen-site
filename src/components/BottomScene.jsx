import { useEffect, useRef, useState } from 'react'

const MIN_X = 10
const MAX_X = 90

export default function BottomScene() {
  const [animalX, setAnimalX] = useState(50)
  const [facingRight, setFacingRight] = useState(false)
  const positionRef = useRef(50)
  const lastScrollY = useRef(0)
  const pendingDelta = useRef(0)
  const rafId = useRef(null)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const moveAnimal = (delta) => {
      if (delta === 0) return
      const direction = delta > 0 ? -1 : 1
      const moveAmount = Math.min(1.8, Math.abs(delta) * 0.05)
      let nextX = positionRef.current + direction * moveAmount

      nextX = Math.max(MIN_X, Math.min(MAX_X, nextX))

      positionRef.current = nextX
      setAnimalX(nextX)
      setFacingRight(delta < 0)
    }

    const scheduleMove = (delta) => {
      pendingDelta.current += delta
      if (rafId.current) return
      rafId.current = requestAnimationFrame(() => {
        const deltaTotal = pendingDelta.current
        pendingDelta.current = 0
        rafId.current = null
        moveAnimal(deltaTotal)
      })
    }

    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current
      if (delta !== 0) {
        scheduleMove(delta)
        lastScrollY.current = currentY
      }
    }

    const handleWheel = (event) => {
      scheduleMove(event.deltaY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="bottom-scene" aria-hidden="true">
      <div className="bottom-layer background" />
      <div className="bottom-layer water" />
      <div className="bottom-layer mid-foreground" />
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
