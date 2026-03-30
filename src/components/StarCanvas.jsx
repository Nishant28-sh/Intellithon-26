import { useEffect, useRef } from 'react'

export default function StarCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []
    let shootingStars = []
    let nebulae = []
    let shootingStarTimer = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Twinkling stars ──────────────────────────────────────────────────
    const initStars = () => {
      stars = Array.from({ length: 320 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.2,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.006,
        speed: Math.random() * 0.08 + 0.01,
        hue: Math.random() > 0.85 ? 280 : 190,   // mostly cyan, some purple
      }))
    }

    // ── Nebula orbs ──────────────────────────────────────────────────────
    const initNebulae = () => {
      nebulae = Array.from({ length: 6 }, (_, i) => ({
        x: (canvas.width / 6) * i + canvas.width / 12,
        y: Math.random() * canvas.height,
        r: Math.random() * 180 + 100,
        a: Math.random() * 0.045 + 0.01,
        da: (Math.random() - 0.5) * 0.0003,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.15,
        hue: [190, 260, 310, 200, 280, 170][i],
      }))
    }

    initStars()
    initNebulae()

    // ── Spawn a shooting star ────────────────────────────────────────────
    const spawnShootingStar = () => {
      const angle = Math.PI / 5 + Math.random() * Math.PI / 8
      const speed = Math.random() * 15 + 15 // Increased speed
      shootingStars.push({
        x: Math.random() * canvas.width * 0.8,
        y: Math.random() * canvas.height * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: Math.random() * 120 + 80,
        a: 1,
        tail: [],
      })
    }

    // ── Draw loop ────────────────────────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 1. Nebula orbs
      nebulae.forEach(n => {
        n.a += n.da
        if (n.a <= 0.005 || n.a >= 0.07) n.da *= -1
        n.x += n.dx
        n.y += n.dy
        if (n.x < -n.r) n.x = canvas.width + n.r
        if (n.x > canvas.width + n.r) n.x = -n.r
        if (n.y < -n.r) n.y = canvas.height + n.r
        if (n.y > canvas.height + n.r) n.y = -n.r

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r)
        grad.addColorStop(0,   `hsla(${n.hue}, 100%, 65%, ${n.a})`)
        grad.addColorStop(0.4, `hsla(${n.hue}, 80%,  50%, ${n.a * 0.5})`)
        grad.addColorStop(1,   `hsla(${n.hue}, 60%,  40%, 0)`)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      // 2. Twinkling stars
      stars.forEach(s => {
        s.a += s.da
        if (s.a <= 0 || s.a >= 1) s.da *= -1
        s.y += s.speed
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width }

        // tiny glow for brighter stars
        if (s.r > 1.2) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3.5)
          glow.addColorStop(0, `hsla(${s.hue},100%,85%,${s.a * 0.35})`)
          glow.addColorStop(1, `hsla(${s.hue},100%,70%,0)`)
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue},90%,85%,${s.a})`
        ctx.fill()
      })

      // 3. Constellations (connection lines)
      ctx.lineWidth = 0.5
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 80) {
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            const alpha = (1 - dist / 80) * 0.25 * Math.min(stars[i].a, stars[j].a)
            ctx.strokeStyle = `hsla(${stars[i].hue}, 100%, 80%, ${alpha})`
            ctx.stroke()
          }
        }
      }

      // 4. Shooting stars
      shootingStarTimer++
      if (shootingStarTimer > 30 + Math.random() * 60) { // Increased frequency
        spawnShootingStar()
        shootingStarTimer = 0
      }

      shootingStars = shootingStars.filter(ss => ss.a > 0.01)
      shootingStars.forEach(ss => {
        ss.tail.unshift({ x: ss.x, y: ss.y })
        if (ss.tail.length > 40) ss.tail.pop() // longer tail
        ss.x += ss.vx
        ss.y += ss.vy
        ss.a -= 0.015 // slower fade

        // draw gradient tail
        for (let i = 1; i < ss.tail.length; i++) {
          const t = 1 - i / ss.tail.length
          ctx.beginPath()
          ctx.moveTo(ss.tail[i - 1].x, ss.tail[i - 1].y)
          ctx.lineTo(ss.tail[i].x, ss.tail[i].y)
          ctx.strokeStyle = `rgba(180,240,255,${ss.a * t * 0.85})`
          ctx.lineWidth = t * 2.5
          ctx.stroke()
        }

        // bright head
        ctx.beginPath()
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220,255,255,${ss.a})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  )
}
