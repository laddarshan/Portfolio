import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'
export default function Toaster() {
  const [list, setList] = useState([])
  useEffect(() => {
    const h = e => { const t = e.detail; setList(l => [...l, t]); setTimeout(() => setList(l => l.filter(x => x.id !== t.id)), 3000) }
    window.addEventListener('toast', h); return () => window.removeEventListener('toast', h)
  }, [])
  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2">
      <AnimatePresence>
        {list.map(t => (
          <motion.div key={t.id} layout initial={{ opacity: 0, x: 80, scale: .8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 80 }}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-white shadow-lg ${t.type === 'err' ? 'bg-red-600' : 'bg-brand'}`}>
            {t.type === 'err' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}{t.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
