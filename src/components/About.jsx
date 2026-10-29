import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, MapPin, User } from 'lucide-react'
import Title from './Title'
import { me } from '../data'
export default function About() {
  const [on, setOn] = useState(false)
  return (
    <section id="about" className="section">
      <Title icon={User}>About Me</Title>
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} whileHover={{ scale: 1.03 }} onClick={() => setOn(!on)}
          className="group relative h-[24rem] max-w-[17rem] mx-auto w-full rounded-[2rem] overflow-hidden cursor-pointer bg-gradient-to-br from-[#000039] via-[#0000AA] to-[#3B82F6] shadow-[0_0_60px_rgba(59,130,246,.55)]">
          <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-blue-400/30 blur-3xl" />
          <motion.span animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-12 right-8 w-24 h-24 rounded-full border-4 border-white/30" />
          <motion.span animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-28 left-6 w-14 h-14 rounded-2xl rotate-12 bg-white/20" />
          <div className="absolute inset-0">
            <img src="/about_bw.png" alt="Darshan" className="absolute inset-0 w-full h-full object-cover object-top" />
            <img src="/about_color.png" alt="Darshan" className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 group-hover:opacity-100 ${on ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }}>
          <h3 className="text-2xl font-semibold">I'm {me.name}</h3>
          <p className="text-blue-500 mb-4">Android & Web Developer</p>
          <p className="opacity-90 mb-3 text-sm">I'm an MCA student at SRIMCA, Uka Tarsadia University (UTU), having completed my BCA from VNSGU. I build Android apps with Kotlin, Firebase, Room DB and SQLite, and web apps with HTML, CSS, JavaScript and PHP. I love clean code, maintainable architecture and user-friendly Material Design.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4 text-sm">
            <div className="glass p-3"><b>Focus Areas</b><br />Mobile Apps (Android Studio, Kotlin). Databases (Firebase, Room DB, SQLite, MySQL).</div>
            <div className="glass p-3"><b>Work Philosophy</b><br />Clean Code, Maintainable Architecture and User-Friendly Material Design apps.</div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4 text-xs">{['MCA, SRIMCA UTU (Sem-1)', 'BCA, VNSGU (Completed)', 'Chikhli, Navsari, Gujarat'].map(b => <span key={b} className="px-3 py-1 rounded-full border border-blue-400">{b}</span>)}</div>
          <p className="flex items-center gap-2 text-sm mb-1"><Mail size={16} />{me.email}</p>
          <p className="flex items-center gap-2 text-sm mb-4"><MapPin size={16} />{me.address}</p>
          <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: .93 }} href={me.resume} download className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white"><Download size={16} />Resume</motion.a>
          <blockquote className="glass p-4 mt-6 italic text-sm">“That hardly ever happens is another way of saying ‘it happens.’”<footer className="text-right text-blue-500 not-italic mt-2">— Douglas Crockford</footer></blockquote>
        </motion.div>
      </div>
    </section>
  )
}
