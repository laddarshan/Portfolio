import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Globe from './Globe'
import { me } from '../data'
const card = 'relative h-[28rem] rounded-[2rem] overflow-hidden'
export default function MyWorld() {
  const [t, setT] = useState(new Date())
  const [me1, setMe1] = useState(false)
  useEffect(() => { const id = setInterval(() => setT(new Date()), 1000); return () => clearInterval(id) }, [])
  const date = t.toLocaleString('en-GB', { timeZone: 'Asia/Kolkata', weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) + ' IST'
  const links = [[FaGithub, me.github, '#111'], [FaInstagram, me.instagram, '#e1306c'], [FaLinkedin, me.linkedin, '#0a66c2'], [FaYoutube, me.youtube, '#ff0000']]
  return (
    <section id="my-world" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-14 leading-snug">I'm Very Flexible With<br /><span className="grad-text">Time Zone Communications</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div onHoverStart={() => setMe1(true)} onHoverEnd={() => setMe1(false)} onTap={() => setMe1(v => !v)} whileHover={{ scale: 1.04, y: -8 }} className={`${card} cursor-pointer bg-gradient-to-b from-amber-400 to-yellow-300 shadow-[0_0_50px_rgba(251,191,36,.45)]`}>
          {[[15, 20], [70, 12], [85, 40], [25, 55]].map(([l, tp], i) => <motion.span key={i} animate={{ opacity: [.2, 1, .2] }} transition={{ repeat: Infinity, duration: 2, delay: i * .5 }} className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ left: l + '%', top: tp + '%' }} />)}
          <motion.span initial={false} animate={me1 ? { opacity: 1, y: 0, scale: 1, rotate: -6 } : { opacity: 0, y: -20, scale: .5, rotate: -20 }} transition={{ type: 'spring', stiffness: 220, damping: 14 }} className="absolute top-5 left-6 text-4xl text-slate-900 z-10" style={{ fontFamily: 'Caveat, cursive' }}>This is me!</motion.span>
          <motion.img src="/arrow.png" alt="" initial={false} animate={me1 ? { opacity: 1, y: [0, 8, 0], scale: 1 } : { opacity: 0, y: -10, scale: .4 }} transition={me1 ? { y: { repeat: Infinity, duration: 1.4 }, opacity: { duration: .4 }, scale: { duration: .4 } } : { duration: .3 }} className="absolute top-[13%] left-[24%] w-[28%] z-10" />
          <img src="/me_cut1.png" alt="Darshan" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[88%] object-contain drop-shadow-xl" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.04, y: -8 }} className={`${card} p-[3px] bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400`}>
          <div className="h-full rounded-[calc(2rem-3px)] bg-black text-white flex flex-col items-center justify-between py-8 px-4 text-center">
            <div><p className="font-medium">Chikhli, Navsari, Gujarat, India</p><p className="text-sm text-slate-300">UTC+05:30</p></div>
            <Globe size={250} />
            <p className="text-xs text-slate-300">{date}</p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04, y: -8 }} className={`${card} bg-gradient-to-br from-rose-600 to-pink-400 shadow-[0_0_40px_rgba(244,63,94,.35)] p-8 text-white`}>
          <h3 className="text-2xl font-semibold text-center mb-8">Find Me Here</h3>
          <div className="grid grid-cols-2 gap-5">
            {links.map(([Icon, href, col], k) => (
              <motion.a key={k} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.12, rotate: 4 }} whileTap={{ scale: .9 }} className="h-28 rounded-2xl bg-white/25 grid place-items-center">
                <span className="w-14 h-14 rounded-xl bg-white grid place-items-center"><Icon size={34} color={col} /></span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
