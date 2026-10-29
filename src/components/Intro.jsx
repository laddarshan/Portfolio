import { motion } from 'framer-motion'
export default function Intro() {
  return (
    <motion.div className="fixed inset-0 z-[200] bg-canvas grid place-items-center text-white" initial={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: .8, ease: 'easeInOut' }}>
      <div className="text-center">
        <motion.img src="/dp.png" alt="" animate={{ scale: [1, 1.15, 1], boxShadow: ['0 0 10px #0000FF', '0 0 50px #0000FF', '0 0 10px #0000FF'] }} transition={{ repeat: Infinity, duration: 1 }} className="w-28 h-28 rounded-full object-cover bg-brand mx-auto" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-4 text-xl">Darshan Lad</motion.p>
        <div className="w-48 h-1 bg-white/20 mt-4 rounded overflow-hidden"><motion.div className="h-full bg-blue-400" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5 }} /></div>
      </div>
    </motion.div>
  )
}
