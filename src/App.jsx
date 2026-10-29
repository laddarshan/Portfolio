import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MyWorld from './components/MyWorld'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Quote from './components/Quote'
import Contact from './components/Contact'
import Intro from './components/Intro'
import ParticleBg from './components/ParticleBg'
import Cursor from './components/Cursor'
import Toaster from './components/Toaster'
import Reveal from './components/Reveal'
import { toast } from './toast'
export default function App() {
  const [dark, setDark] = useState(true), [sound, setSound] = useState(false), [intro, setIntro] = useState(true)
  const { scrollYProgress } = useScroll(); const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark])
  useEffect(() => { const t = setTimeout(() => setIntro(false), 1800); return () => clearTimeout(t) }, [])
  useEffect(() => { // click ripple on every click
    const h = e => { const r = document.createElement('span'); r.className = 'ripple'; r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px'; document.body.appendChild(r); setTimeout(() => r.remove(), 600) }
    window.addEventListener('pointerdown', h); return () => window.removeEventListener('pointerdown', h)
  }, [])
  useEffect(() => { // soft ambient sound
    if (!sound) return
    const ctx = new (window.AudioContext || window.webkitAudioContext)(), g = ctx.createGain(); g.gain.value = .03; g.connect(ctx.destination)
    ;[110, 165, 220].forEach(f => { const o = ctx.createOscillator(); o.frequency.value = f; o.connect(g); o.start() })
    toast('Ambient sound on'); return () => ctx.close()
  }, [sound])
  return (
    <>
      <AnimatePresence>{intro && <Intro />}</AnimatePresence>
      <motion.div style={{ scaleX: bar }} className="fixed top-0 inset-x-0 h-1 bg-brand origin-left z-[60]" />
      <Navbar dark={dark} setDark={d => { setDark(d); toast(d ? 'Dark mode' : 'Light mode') }} sound={sound} setSound={setSound} />
      <div className="bg-s1 relative isolate"><ParticleBg /><Hero /></div>
      <div className="bg-s2"><Reveal><MyWorld /></Reveal></div>
      <div className="bg-s3"><Reveal><About /></Reveal></div>
      <div className="bg-s4"><Reveal><Skills /></Reveal></div>
      <div className="bg-s5"><Reveal><Education /></Reveal></div>
      <div className="bg-s6"><Reveal><Projects /></Reveal></div>
      <div className="bg-s7"><Quote /></div>
      <div className="bg-s8"><Contact /></div>
      <Toaster /><Cursor />
    </>
  )
}
