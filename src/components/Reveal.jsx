import { motion } from 'framer-motion'
export default function Reveal({ children, delay = 0 }) {
  return <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: .7, delay }}>{children}</motion.div>
}
