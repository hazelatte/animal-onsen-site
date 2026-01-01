import { useEffect, useRef, useState } from 'react'

export default function BottomScene() {
  const [animalX, setAnimalX] = useState(50)
  const [facingRight, setFacingRight] = useState(false)
  const [isPopping, setIsPopping] = useState(false)
  const [hearts, setHearts] = useState([])
  const positionRef = useRef(50)
  const targetRef = useRef(50)
  const lastScrollY = useRef(0)
  const pendingDelta = useRef(0)
  const rafId = useRef(null)
  const moveRaf = useRef(null)
  const boundsRef = useRef({ min: 0, max: 0 })
  const sceneRef = useRef(null)
  const wrapRef = useRef(null)
  const updateBoundsRef = useRef(null)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const updateBounds = () => {
      const scene = sceneRef.current
      const wrap = wrapRef.current
      if (!scene || !wrap) return

      const sceneWidth = scene.clientWidth
      const catWidth = wrap.getBoundingClientRect().width
      const padding = 8
      const min = ((catWidth / 2 + padding) / sceneWidth) * 100
      const max = Math.max(min, 100 - min)

      boundsRef.current = { min, max }

      const current = positionRef.current ?? 50
      const clamped = Math.max(min, Math.min(max, current))
      positionRef.current = clamped
      targetRef.current = clamped
      setAnimalX(clamped)
    }

    updateBoundsRef.current = updateBounds

    updateBounds()
    window.addEventListener('resize', updateBounds)

    const moveAnimal = (delta) => {
      const { min, max } = boundsRef.current
      if (max <= min) return
      if (delta === 0) return
      const direction = delta > 0 ? -1 : 1
      const moveAmount = Math.min(6.5, Math.abs(delta) * 0.18)
      const currentTarget = targetRef.current ?? (min + max) / 2
      let nextX = currentTarget + direction * moveAmount

      nextX = Math.max(min, Math.min(max, nextX))

      targetRef.current = nextX
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
      const delta = event.deltaY !== 0 ? event.deltaY : event.deltaX
      scheduleMove(delta)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    document.addEventListener('wheel', handleWheel, { passive: true })

    const animate = () => {
      const current = positionRef.current ?? animalX
      const target = targetRef.current ?? current
      const next = current + (target - current) * 0.3

      positionRef.current = next
      setAnimalX(next)
      moveRaf.current = requestAnimationFrame(animate)
    }

    moveRaf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      document.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', updateBounds)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      if (moveRaf.current) cancelAnimationFrame(moveRaf.current)
    }
  }, [])

  return (
    <div className="bottom-scene" aria-hidden="true" ref={sceneRef}>
      <div className="bottom-layer water" />
      <div className="bottom-layer mid-foreground" />
      <div className="bottom-animal-wrap" style={{ left: `${animalX}%` }} ref={wrapRef}>
        <img
          className="bottom-animal"
          src="/img/cat.png"
          alt=""
          role="button"
          tabIndex={0}
          aria-label="Cat"
          onLoad={() => updateBoundsRef.current?.()}
          onClick={() => {
            setIsPopping(true)
            setHearts((prev) => [
              ...prev,
              { id: crypto.randomUUID(), offset: (Math.random() - 0.5) * 24 },
            ])
            window.setTimeout(() => setIsPopping(false), 160)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              setIsPopping(true)
              setHearts((prev) => [
                ...prev,
                { id: crypto.randomUUID(), offset: (Math.random() - 0.5) * 24 },
              ])
              window.setTimeout(() => setIsPopping(false), 160)
            }
          }}
          style={{
            '--cat-flip': facingRight ? '-1' : '1',
            '--cat-scale': isPopping ? '1.12' : '1',
          }}
        />
        {hearts.map((heart) => (
          <img
            key={heart.id}
            className="bottom-heart show"
            src="/img/heart.png"
            alt=""
            aria-hidden="true"
            style={{ '--heart-offset': `${heart.offset}px` }}
            onAnimationEnd={() => {
              setHearts((prev) => prev.filter((item) => item.id !== heart.id))
            }}
          />
        ))}
      </div>
      <div className="bottom-layer foreground" />
    </div>
  )
}
