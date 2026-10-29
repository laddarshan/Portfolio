import { motion } from 'framer-motion'
import { Moon, Sun, Volume2, VolumeX } from 'lucide-react'
import { me, nav } from '../data'
export default function Navbar({ dark, setDark, sound, setSound }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-canvas border-b border-blue-500/20">
      <div className="max-w-[1600px] mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <motion.img whileHover={{ rotate: 360, scale: 1.15 }} transition={{ duration: .6 }} src="/dp.png" alt="Darshan" className="w-12 h-12 rounded-full object-cover bg-brand border-2 border-blue-400 shadow-[0_0_15px_#0000FF]" />
          <span className="hidden sm:inline">{me.short}</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map(n => <motion.a key={n} href={`#${n.toLowerCase()}`} whileHover={{ y: -3, scale: 1.12 }} whileTap={{ scale: .9 }} className="hover:text-brand dark:hover:text-blue-400">{n}</motion.a>)}
        </nav>
        <div className="flex gap-2">
          <motion.button whileHover={{ rotate: 20, scale: 1.15 }} whileTap={{ scale: .8, rotate: 180 }} onClick={() => setDark(!dark)} className="p-2 rounded-full glass" aria-label="Theme">{dark ? <Sun size={22} /> : <Moon size={22} />}</motion.button>
          <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: .8 }} onClick={() => setSound(!sound)} className="p-2 rounded-full glass" aria-label="Sound">{sound ? <Volume2 size={22} /> : <VolumeX size={22} />}</motion.button>
        </div>
      </div>
    </header>
  )
}
