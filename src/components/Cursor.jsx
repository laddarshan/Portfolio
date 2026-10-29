import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
const N = 6
function Dot({ x, y, i, mode }) {
  const cfg = { stiffness: 380 - i * 55, damping: 26 + i, mass: .5 + i * .12 }
  const sx = useSpring(x, cfg), sy = useSpring(y, cfg)
  const size = 40 - i * 5, lead = i === 0
  return (
    <motion.div style={{ x: sx, y: sy, width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
      animate={{ scale: lead ? (mode === 'hover' ? 2.1 : mode === 'down' ? .6 : mode === 'text' ? .4 : 1) : 1, opacity: lead ? 1 : .5 - i * .07 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[400] ${lead ? 'border-2 border-blue-400 bg-blue-500/10 shadow-[0_0_18px_#3B82F6]' : 'bg-gradient-to-br from-blue-500 to-cyan-300 blur-[1px]'}`} />
  )
}
export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const [mode, setMode] = useState('idle'), [on, setOn] = useState(false)
  const glow = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setOn(true)
    let tx = innerWidth / 2, ty = innerHeight / 2, cx = tx, cy = ty, raf
    const move = e => { x.set(e.clientX); y.set(e.clientY); tx = e.clientX; ty = e.clientY }
    const over = e => { const t = e.target.closest?.('input,textarea') ? 'text' : e.target.closest?.('a,button,[role=button],.cursor-pointer') ? 'hover' : 'idle'; setMode(t) }
    const down = () => setMode('down'), up = e => over(e)
    const loop = () => { cx += (tx - cx) * .08; cy += (ty - cy) * .08; const hr = document.getElementById('home')?.getBoundingClientRect(); const g = glow.current; if (g && hr) { g.style.display = hr.bottom > 0 && hr.top < innerHeight ? 'block' : 'none'; g.style.clipPath = `inset(${Math.max(0, hr.top)}px 0 ${Math.max(0, innerHeight - hr.bottom)}px 0)` } glow.current?.style.setProperty('--mx', cx + 'px'); glow.current?.style.setProperty('--my', cy + 'px'); raf = requestAnimationFrame(loop) }
    loop()
    addEventListener('mousemove', move); addEventListener('mouseover', over); addEventListener('mousedown', down); addEventListener('mouseup', up)
    return () => { cancelAnimationFrame(raf); removeEventListener('mousemove', move); removeEventListener('mouseover', over); removeEventListener('mousedown', down); removeEventListener('mouseup', up) }
  }, [])
  if (!on) return null
  return (
    <>
      <div ref={glow} className="fixed inset-0 pointer-events-none z-[1]" style={{ mixBlendMode: 'screen', background: 'radial-gradient(520px circle at var(--mx) var(--my), rgba(59,130,246,.22), rgba(0,0,255,.08) 45%, transparent 70%)' }} />
      {Array.from({ length: N }, (_, i) => N - 1 - i).map(i => <Dot key={i} x={x} y={y} i={i} mode={mode} />)}
    </>
  )
}
