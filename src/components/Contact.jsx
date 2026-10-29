import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Send, Loader2, Copy, Bot, Github, Linkedin, Instagram, MapPin, Heart, Phone } from 'lucide-react'
import Title from './Title'
import { me, nav } from '../data'
import { toast } from '../toast'
const linkColors = ['text-sky-600 dark:text-sky-400', 'text-blue-600 dark:text-blue-400', 'text-indigo-600 dark:text-indigo-400', 'text-violet-600 dark:text-violet-400', 'text-fuchsia-600 dark:text-fuchsia-400', 'text-cyan-600 dark:text-cyan-400']
const empty = { name: '', email: '', subject: '', message: '' }
function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address'
  if (v.subject.trim().length < 3) e.subject = 'Please enter a subject'
  if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
  return e
}
export default function Contact() {
  const [v, setV] = useState(empty), [err, setErr] = useState({}), [shake, setShake] = useState(0), [load, setLoad] = useState(false)
  const submit = ev => {
    ev.preventDefault()
    const e = validate(v); setErr(e)
    if (Object.keys(e).length) { setShake(s => s + 1); toast('Please fix the highlighted fields', 'err'); return }
    setLoad(true)
    setTimeout(() => { setLoad(false); setV(empty); toast('Message sent. Thank you!') }, 1500) // connect a real service (EmailJS/Formspree) here
  }
  const field = (k, label, ph, area) => {
    const C = area ? 'textarea' : 'input'
    return (
      <motion.div key={k + shake} animate={err[k] ? { x: [0, -10, 10, -6, 6, 0] } : { x: 0 }} transition={{ duration: .4 }}>
        <C value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} placeholder={label + (ph || '')} rows={area ? 4 : undefined}
          className={`w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-canvas border outline-none transition focus:shadow-[0_0_15px_#0000FF] ${err[k] ? 'border-red-500' : 'border-blue-400/40'}`} />
        <AnimatePresence>{err[k] && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-sm mt-1">{err[k]}</motion.p>}</AnimatePresence>
      </motion.div>
    )
  }
  return (
    <>
      <section id="contact" className="section">
        <Title icon={Mail}>Get In Touch</Title>
        <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
          <span className="px-4 py-2 rounded-full border border-green-500 text-green-500">Open for Full-Time Roles / Freelance Work</span>
          <motion.button whileTap={{ scale: .9 }} whileHover={{ scale: 1.05 }} onClick={() => { navigator.clipboard?.writeText(me.email); toast('Email copied') }} className="px-4 py-2 rounded-full bg-brand text-white flex items-center gap-2"><Copy size={14} />Copy Email</motion.button>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }} whileHover={{ scale: 1.08, rotate: 3 }} className="grid place-items-center"><img src="/ai.png" alt="Darshan" className="h-[26rem] object-contain drop-shadow-[0_0_30px_rgba(59,130,246,.7)]" /></motion.div>
          <form onSubmit={submit} noValidate className="glass p-8 space-y-5">
            {field('name', 'Name')}{field('email', 'Email')}{field('subject', 'Subject')}{field('message', 'Message', '', true)}
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: .95 }} disabled={load} className="w-full py-4 rounded-xl bg-brand text-white flex justify-center items-center gap-2 disabled:opacity-70">
              {load ? <><Loader2 className="animate-spin" size={18} />Sending...</> : <><Send size={18} />Submit</>}
            </motion.button>
          <p className="text-sm opacity-70 text-center">I usually respond within 24 hours.</p>
          </form>
        </div>
      </section>
      <footer className="border-t border-blue-500/30">
        <div className="max-w-[1600px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          <div><h3 className="font-semibold text-2xl mb-2 flex items-center gap-3"><img src="/dp.png" alt="" className="w-12 h-12 rounded-full object-cover bg-brand" />Darshan's Portfolio</h3><p className="opacity-80 text-sm">Android and web developer building clean, useful apps.</p><p className="mt-2">Keep Smiling :)</p></div>
          <div><h3 className="font-semibold text-lg mb-2">Quick Links</h3>{nav.map((n, i) => <a key={n} href={`#${n.toLowerCase()}`} className={`block text-base font-medium py-1 transition hover:translate-x-3 hover:brightness-125 ${linkColors[i]}`}>{n}</a>)}</div>
          <div><h3 className="font-semibold text-lg mb-2">Reach Me Out On</h3>
            <p className="flex items-center gap-2 text-sm"><Mail size={14} />{me.email}
              <motion.button whileTap={{ scale: .8 }} onClick={() => { navigator.clipboard?.writeText(me.email); toast('Email copied') }} aria-label="Copy email"><Copy size={14} /></motion.button></p>
            <p className="flex items-center gap-2 text-sm mt-1"><MapPin size={14} />{me.location}</p>
            <p className="flex items-center gap-2 text-sm mt-1"><Phone size={14} /><a href="tel:+917383109419" className="hover:text-blue-400">+91 7383109419</a></p>
            <div className="flex gap-3 mt-3">{[[Github, me.github], [Linkedin, me.linkedin], [Instagram, me.instagram]].map(([I, h], k) => <motion.a key={k} whileHover={{ y: -4, scale: 1.2 }} whileTap={{ scale: .85 }} href={h} target="_blank" rel="noopener noreferrer"><I size={28} /></motion.a>)}</div></div>
        </div>
        <p className="text-center text-sm py-4 border-t border-blue-500/20 flex justify-center items-center gap-1">Designed with <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 1 }}><Heart size={14} className="text-red-500 fill-red-500" /></motion.span> by Darshan Lad</p>
      </footer>
    </>
  )
}
