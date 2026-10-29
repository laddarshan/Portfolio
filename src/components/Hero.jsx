import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, Download, Bot } from 'lucide-react'
import { SiKotlin, SiFirebase, SiReact } from 'react-icons/si'
import HeroStage from './HeroStage'
import { me } from '../data'
function Typewriter({ words }) {
  const [i, setI] = useState(0), [txt, setTxt] = useState(''), [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const t = setTimeout(() => {
      if (!del) { setTxt(w.slice(0, txt.length + 1)); if (txt === w) setDel(true) }
      else { setTxt(w.slice(0, txt.length - 1)); if (txt.length <= 1) { setDel(false); setI((i + 1) % words.length) } }
    }, del ? 40 : txt === w ? 1200 : 90)
    return () => clearTimeout(t)
  }, [txt, del, i, words])
  return <span className="text-blue-500">{txt}<span className="animate-pulse">|</span></span>
}
export default function Hero() {
  const icons = [[Github, me.github], [Linkedin, me.linkedin], [Instagram, me.instagram], [Mail, `mailto:${me.email}`]]
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center pt-24 pb-10">
        <motion.div className="md:-ml-16 lg:-ml-24" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
          <motion.span animate={{ opacity: [.6, 1, .6] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-green-500 text-green-500 mb-3"><span className="w-2 h-2 rounded-full bg-green-500" />Open for Full-Time Roles / Freelance Work</motion.span>
          <p className="text-3xl md:text-4xl font-medium mb-3">Hi There, I'm</p>
          <h1 className="text-4xl md:text-5xl font-semibold grad-text mb-4">{me.short}</h1>
          <p className="text-2xl mb-4 h-9">I'm into <Typewriter words={me.roles} /></p>
          <p className="opacity-80 mb-6 max-w-lg">Passionate about building scalable Android apps and modern web applications with clean code and Material Design.</p>
          <p className="text-sm opacity-80 mb-4">Currently: MCA, FYMCA Sem-1 at SRIMCA, UTU</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href={me.resume} download className="px-5 py-2.5 rounded-full bg-brand text-white flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,0,255,0.6)] transition"><Download size={16} />Download Resume</a>
            <a href="#projects" className="px-5 py-2.5 rounded-full glass">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full glass">Contact Me</a>
          </div>
          <div className="flex gap-5 items-center flex-wrap mb-6">
            {[SiKotlin, SiFirebase, SiReact].map((Ic, k) => <motion.span key={k} animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2, delay: k * .3 }} className="p-3 rounded-full bg-white dark:bg-[#00006B] border border-blue-300 dark:border-blue-500/40"><Ic size={30} className="text-brand dark:text-blue-300" /></motion.span>)}
          </div>
          <div className="flex gap-6 items-center flex-wrap">
            {icons.map(([Icon, href], k) => (
              <motion.a key={k} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -6, scale: 1.12 }} whileTap={{ scale: .88 }}
                className={`w-14 h-14 grid place-items-center rounded-2xl border-2 border-blue-400/60 text-slate-800 dark:text-white transition-colors hover:text-white hover:border-transparent ${['hover:bg-[#24292e]', 'hover:bg-[#0a66c2]', 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600', 'hover:bg-red-500'][k]}`}><Icon size={26} /></motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} className="grid place-items-center">
          <HeroStage />
        </motion.div>
      </div>
    </section>
  )
}
