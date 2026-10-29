import { useEffect, useRef } from 'react'
export default function ParticleBg() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    let w, h, raf, vis = false, m = { x: -999, y: -999 }, pts = []
    const init = () => {
      w = c.width = c.offsetWidth; h = c.height = c.offsetHeight
      pts = Array.from({ length: Math.min(120, Math.round(w * h / 13000)) }, () => {
        const a = Math.random() * Math.PI * 2, s = .9 + Math.random() * 1.0   // constant speed, so they never stop or clump
        return { x: Math.random() * w, y: Math.random() * h, vx: Math.cos(a) * s, vy: Math.sin(a) * s, r: Math.random() * 1.5 + 1 }
      })
    }
    init()
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting }); io.observe(c)
    const move = e => { m = { x: e.clientX, y: e.clientY } }
    const draw = () => {
      raf = requestAnimationFrame(draw); if (!vis) return
      ctx.clearRect(0, 0, w, h)
      const r = c.getBoundingClientRect(), mx = m.x - r.left, my = m.y - r.top
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dm = Math.hypot(p.x - mx, p.y - my), near = dm < 170
        ctx.fillStyle = near ? 'rgba(125,211,252,.95)' : 'rgba(96,130,255,.75)'
        ctx.beginPath(); ctx.arc(p.x, p.y, near ? p.r + 1.2 : p.r, 0, 7); ctx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 130) { ctx.strokeStyle = `rgba(96,130,255,${(1 - d / 130) * .8})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke() }
        }
        if (near) { ctx.strokeStyle = `rgba(56,189,248,${1 - dm / 170})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my); ctx.stroke() }
      })
    }
    draw(); addEventListener('mousemove', move); addEventListener('resize', init)
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener('mousemove', move); removeEventListener('resize', init) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />
}
