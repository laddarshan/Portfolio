import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Title from './Title'
import { education, eduImgs } from '../data'
export default function Education() {
  return (
    <section id="education" className="section">
      <Title icon={GraduationCap} sub="Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.">My Education</Title>
      <div className="space-y-8 max-w-6xl mx-auto">
        {education.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} whileHover={{ scale: 1.02 }} className="glass overflow-hidden grid md:grid-cols-2">
            <div className="overflow-hidden h-64 md:h-80"><img src={eduImgs[i]} alt={e.place} className="w-full h-full object-cover hover:scale-110 transition duration-700" /></div>
            <div className="p-8 flex flex-col justify-center text-center"><h3 className="text-2xl font-semibold mb-2">{e.title}</h3><p className="opacity-80 mb-2">{e.place}</p>
              <p>{e.time} | <span className="text-blue-500 font-medium">{e.status}</span></p></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
