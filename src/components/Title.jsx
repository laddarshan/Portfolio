import { motion } from 'framer-motion'
export default function Title({ icon: Icon, children, sub }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: .6 }} className="text-center mb-12">
      <h2 className="inline-flex items-center gap-3 text-4xl md:text-5xl font-semibold text-[#00008E] dark:text-white">
        <motion.span animate={{ rotate: [0, -12, 12, 0] }} transition={{ repeat: Infinity, duration: 3 }}><Icon size={52} className="text-brand dark:text-blue-400" /></motion.span>{String(children).split(' ').slice(0, -1).join(' ')} <span className="grad-text">{String(children).split(' ').slice(-1)}</span>
      </h2>
      <motion.div initial={{ width: 0 }} whileInView={{ width: 140 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: .3, duration: .6 }} className="h-1 bg-brand mx-auto mt-3 rounded" />
      {sub && <p className="italic opacity-80 mt-4">{sub}</p>}
    </motion.div>
  )
}
