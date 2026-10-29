import { motion } from 'framer-motion'
import { Code2, Palette } from 'lucide-react'
export default function Quote() {
  return (
    <section id="quote" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: .25 }} whileHover={{ scale: 1.01 }}
        className="relative h-[30rem] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(251,146,60,.45)]">
        <video src="/krishna.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />
        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: .9, delay: .2 }} className="absolute right-6 bottom-10 w-[90%] md:w-[48%] text-right">
          <p className="text-xl md:text-2xl font-semibold text-yellow-400 leading-snug">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br />मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥</p>
          <p className="mt-3 text-white font-semibold">Karmanye Vadhikaraste, Ma Phaleshu Kadachana.<br />Ma Karma Phala Hetur Bhur Ma Te Sango'stvakarmani.</p>
          <p className="mt-3 text-sm text-slate-200">You Have A Right To Perform Your Duties, But You Are Not Entitled To The Fruits Of Your Actions.<br />Do Not Let The Fruits Of Action Be Your Motive, Nor Let Your Attachment Be To Inaction.</p>
          <p className="mt-3 text-sm text-slate-300">— Bhagavad Gita 2.47</p>
        </motion.div>
      </motion.div>
      <div className="text-center mt-16 text-white">
        <motion.h2 animate={{ textShadow: ['0 0 5px #0000FF', '0 0 25px #3B82F6', '0 0 5px #0000FF'] }} transition={{ repeat: Infinity, duration: 2.5 }} className="text-2xl md:text-4xl font-semibold">The Art Of Balance: Design, Code, And Creativity</motion.h2>
        <div className="rotate-180 mt-10 h-44 grid place-items-center">
          <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} className="relative w-80 h-2 bg-blue-400 rounded">
            <Code2 size={52} className="absolute -left-2 -top-14 text-blue-400" /><Palette size={52} className="absolute -right-2 -top-14 text-blue-400" />
          </motion.div>
          <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-blue-500 -mt-1" />
        </div>
      </div>
    </section>
  )
}
