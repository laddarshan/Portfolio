import { useEffect, useRef } from 'react'
import dots from '../globeDots.json'
const rad = d => d * Math.PI / 180
export default function Globe({ size = 240 }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d'), dpr = window.devicePixelRatio || 1
    c.width = c.height = size * dpr; ctx.scale(dpr, dpr)
    const R = size / 2 - 6, cx = size / 2, cy = size / 2, p0 = rad(18)
    let lon0 = 60, raf, t = 0
    const proj = (lon, lat) => {
      const l = rad(lon - lon0), f = rad(lat)
      return { x: cx + R * Math.cos(f) * Math.sin(l), y: cy - R * (Math.cos(p0) * Math.sin(f) - Math.sin(p0) * Math.cos(f) * Math.cos(l)), v: Math.sin(p0) * Math.sin(f) + Math.cos(p0) * Math.cos(f) * Math.cos(l) }
    }
    const draw = () => {
      ctx.clearRect(0, 0, size, size)
      const g = ctx.createRadialGradient(cx - R / 3, cy - R / 3, R / 8, cx, cy, R)
      g.addColorStop(0, '#1b2a6b'); g.addColorStop(1, '#05061a')
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill()
      ctx.strokeStyle = 'rgba(120,130,255,.8)'; ctx.lineWidth = 1.5; ctx.shadowColor = '#6366f1'; ctx.shadowBlur = 14; ctx.stroke(); ctx.shadowBlur = 0
      for (const [lo, la] of dots) { const p = proj(lo, la); if (p.v > 0) { ctx.fillStyle = `rgba(150,190,255,${0.25 + p.v * .75})`; ctx.fillRect(p.x, p.y, 1.8, 1.8) } }
      const m = proj(73.07, 20.76)
      if (m.v > 0) { t += .08; const r = 4 + Math.sin(t) * 2; ctx.fillStyle = '#22d3ee'; ctx.shadowColor = '#22d3ee'; ctx.shadowBlur = 12; ctx.beginPath(); ctx.arc(m.x, m.y, r, 0, 7); ctx.fill(); ctx.shadowBlur = 0 }
      lon0 = (lon0 + .3) % 360; raf = requestAnimationFrame(draw)
    }
    draw(); return () => cancelAnimationFrame(raf)
  }, [size])
  return <canvas ref={ref} style={{ width: size, height: size }} />
}
