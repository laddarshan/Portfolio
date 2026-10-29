import { useState } from 'react'
import { motion } from 'framer-motion'
import { FolderOpen, ExternalLink, Github, Globe, Smartphone, GraduationCap, Building2 } from 'lucide-react'
import Title from './Title'
import { projects, me } from '../data'
import { toast } from '../toast'
const grads = ['from-indigo-600 to-cyan-400', 'from-emerald-600 to-teal-400', 'from-purple-600 to-fuchsia-400', 'from-orange-500 to-rose-400']
const icons = [Globe, Smartphone, GraduationCap, Building2]
const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-')
export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <section id="projects" className="section">
      <Title icon={FolderOpen}>Projects Made</Title>
      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((p, i) => {
          const Icon = icons[i % 4], on = open === i
          return (
            <motion.div key={p.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: i * .1 }}
              whileHover={{ scale: 1.03 }} onClick={() => setOpen(on ? null : i)} className="group relative h-[22rem] rounded-xl overflow-hidden cursor-pointer shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${grads[i % 4]} grid place-items-center pb-12`}><Icon size={130} className="text-white/90" /></div>
              <img src={`/projects/${slug(p.title)}.png`} alt="" onError={e => (e.currentTarget.style.display = 'none')} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-[#FFD60A] text-[#000055] font-semibold text-2xl px-5 py-4">{p.title}</div>
              <div className={`absolute inset-0 bg-white text-slate-800 p-7 flex flex-col justify-center transition-transform duration-500 group-hover:translate-y-0 ${on ? 'translate-y-0' : 'translate-y-full'}`}>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 w-fit">{p.label}</span>
                <h3 className="text-2xl font-semibold mt-2">{p.title}</h3>
                <p className="mt-2">{p.desc}</p>
                <ul className="list-disc pl-5 mt-2 text-slate-600">{p.feats.map(x => <li key={x}>{x}</li>)}</ul>
                <div className="flex flex-wrap gap-2 mt-3">{p.tech.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-slate-400">{t}</span>)}</div>
                <div className="flex gap-3 mt-4" onClick={e => e.stopPropagation()}>
                  <motion.button whileTap={{ scale: .9 }} whileHover={{ scale: 1.05 }} onClick={() => toast('Demo link coming soon')} className="px-6 py-2 rounded-lg bg-slate-800 text-white flex items-center gap-2"><ExternalLink size={16} />View</motion.button>
                  <motion.a whileTap={{ scale: .9 }} whileHover={{ scale: 1.05 }} href={me.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg bg-slate-800 text-white flex items-center gap-2"><Github size={16} />Code</motion.a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      <div className="text-center mt-12"><motion.a whileHover={{ scale: 1.08 }} whileTap={{ scale: .93 }} href={me.github} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-brand text-white">View All on GitHub</motion.a></div>
    </section>
  )
}
