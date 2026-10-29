import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { SiKotlin, SiFirebase } from 'react-icons/si'
export default function HeroStage() {
  const ref = useRef(null), mx = useMotionValue(0), my = useMotionValue(0)
  useEffect(() => {
    const h = e => { const r = ref.current.getBoundingClientRect(); mx.set((e.clientX - r.left - r.width / 2) / (innerWidth / 2)); my.set((e.clientY - r.top - r.height / 2) / (innerHeight / 2)) }
    addEventListener('mousemove', h); return () => removeEventListener('mousemove', h)
  }, [])
  const cfg = { stiffness: 110, damping: 14 }
  const ry = useSpring(useTransform(mx, [-1, 1], [-30, 30]), cfg), rx = useSpring(useTransform(my, [-1, 1], [22, -22]), cfg)
  const tx = useSpring(useTransform(mx, [-1, 1], [-28, 28]), cfg), ty = useSpring(useTransform(my, [-1, 1], [-20, 20]), cfg)
  const bx = useTransform(tx, v => v * 2), by = useTransform(ty, v => v * 2)
  return (
    <div ref={ref} className="relative w-[22rem] md:w-[30rem] h-[30rem]" style={{ perspective: 1100 }}>
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }} className="absolute inset-0">
        <div className="absolute left-1/2 bottom-4 w-80 h-80 -ml-40" style={{ transform: 'rotateX(75deg) translateZ(-60px)', transformStyle: 'preserve-3d' }}>
          <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle,#0000FF88,#00003900 70%)' }} />
          {[0, .8, 1.6].map(d => <motion.div key={d} animate={{ scale: [.5, 1.1], opacity: [.9, 0] }} transition={{ repeat: Infinity, duration: 2.4, delay: d }} className="absolute inset-0 rounded-full border-2 border-blue-400" />)}
        </div>
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 14, ease: 'linear' }} style={{ z: 20 }} className="absolute inset-10 rounded-full border-2 border-dashed border-blue-400/50">
          {[0, 120, 240].map(a => <span key={a} className="absolute w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" style={{ top: '50%', left: '50%', transform: `rotate(${a}deg) translateX(13rem) translate(-50%,-50%)` }} />)}
        </motion.div>
        <motion.div style={{ x: tx, y: ty, z: 80 }} className="absolute inset-0 grid place-items-center">
          <motion.img src="/android.png" alt="Android" animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} whileHover={{ scale: 1.12 }} className="w-72 md:w-96 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,.7)]" />
        </motion.div>
        <motion.span style={{ x: bx, y: by, z: 150 }} animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute top-4 left-8 p-3 rounded-full bg-white"><SiKotlin size={26} color="#7F52FF" /></motion.span>
        <motion.span style={{ x: bx, y: by, z: 150 }} animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 3, delay: .6 }} className="absolute bottom-12 right-6 p-3 rounded-full bg-white"><SiFirebase size={26} color="#FFA000" /></motion.span>
      </motion.div>
    </div>
  )
}
