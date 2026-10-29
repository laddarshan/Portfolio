import { motion } from 'framer-motion'
import { Smartphone, Globe, Database, Wrench, Brain, Sparkles } from 'lucide-react'
import { SiKotlin, SiAndroidstudio, SiMaterialdesign, SiSqlite, SiHtml5, SiCss, SiJavascript, SiBootstrap, SiPhp, SiFirebase, SiMysql, SiGit, SiGithub, SiAndroid } from 'react-icons/si'
import { VscVscode, VscCode } from 'react-icons/vsc'
import Title from './Title'
const cats = [
  { t: 'Mobile Development', I: Smartphone, items: [['Kotlin', SiKotlin], ['XML', VscCode], ['Android Studio', SiAndroidstudio], ['Material 3', SiMaterialdesign], ['Room DB', SiAndroid], ['SQLite', SiSqlite], ['LiveData', SiAndroid], ['ViewModel', SiAndroid]] },
  { t: 'Web and Full-Stack', I: Globe, items: [['HTML5', SiHtml5], ['CSS3', SiCss], ['JavaScript', SiJavascript], ['Bootstrap', SiBootstrap], ['PHP', SiPhp], ['Firebase Hosting', SiFirebase], ['GitHub Pages', SiGithub], ['CNAME DNS', Globe]] },
  { t: 'Backend and Databases', I: Database, items: [['Authentication', SiFirebase], ['Firestore', SiFirebase], ['Realtime DB', SiFirebase], ['Cloud Storage', SiFirebase], ['Functions', SiFirebase], ['FCM', SiFirebase], ['MySQL', SiMysql], ['SQLite', SiSqlite]] },
  { t: 'Developer Tools', I: Wrench, items: [['Git', SiGit], ['GitHub', SiGithub], ['Android Studio', SiAndroidstudio], ['VS Code', VscVscode], ['GitHub Copilot', Sparkles], ['ChatGPT', Sparkles], ['Claude AI', Sparkles], ['Gemini', Sparkles]] },
  { t: 'Core Competencies', I: Brain, items: [['Problem Solving', Brain], ['Debugging', Wrench], ['RESTful API', Globe], ['Agora RTC/RTM', Smartphone], ['UI/UX Design', SiMaterialdesign]] },
]
export default function Skills() {
  return (
    <section id="skills" className="section">
      <Title icon={Wrench} sub="What I work with every day">Skills</Title>
      <div className="grid md:grid-cols-2 gap-8">
        {cats.map(({ t, I, items }, ci) => (
          <motion.div key={t} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: ci * .1 }} whileHover={{ y: -6 }} className="glass p-8">
            <h3 className="flex items-center gap-2 font-semibold text-2xl mb-5 text-[#00008E] dark:text-blue-300"><I size={32} />{t}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(([n, Ic], i) => (
                <motion.span key={n} initial={{ opacity: 0, scale: .6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: i * .05 }} whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-base bg-blue-50 dark:bg-canvas border border-blue-200 dark:border-blue-500/40"><Ic size={22} className="text-brand dark:text-blue-400" />{n}</motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
