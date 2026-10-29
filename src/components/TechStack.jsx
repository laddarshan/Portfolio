import { useEffect, useRef } from 'react'
import Matter from 'matter-js'
import { Wrench } from 'lucide-react'
import Title from './Title'
import { SiKotlin, SiAndroidstudio, SiFlutter, SiFirebase, SiMysql, SiSqlite, SiAndroid, SiGit, SiGithub, SiJavascript, SiPhp, SiHtml5, SiCss } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
const techs = [[SiKotlin,'Kotlin','#7F52FF'],[SiAndroidstudio,'Android Studio','#3DDC84'],[SiFlutter,'Flutter','#02569B'],[SiFirebase,'Firebase','#FFA000'],[SiMysql,'MySQL','#00758F'],[SiSqlite,'SQLite','#0F80CC'],[SiAndroid,'Room DB','#3DDC84'],[SiGit,'Git','#F05032'],[SiGithub,'GitHub','#8b949e'],[SiJavascript,'JavaScript','#F7DF1E'],[SiPhp,'PHP','#777BB4'],[SiHtml5,'HTML5','#E34F26'],[SiCss,'CSS3','#1572B6'],[VscVscode,'VS Code','#007ACC']]
export default function TechStack() {
  const box = useRef(null)
  useEffect(() => {
    const el = box.current, W = el.clientWidth, H = el.clientHeight, R = W < 500 ? 40 : 66
    const { Engine, World, Bodies, Mouse, MouseConstraint, Runner, Body } = Matter
    const engine = Engine.create(); engine.gravity.y = 0.2
    const wall = (x, y, w, h) => Bodies.rectangle(x, y, w, h, { isStatic: true })
    const nodes = [...el.querySelectorAll('[data-t]')]
    const bodies = nodes.map(() => { const b = Bodies.circle(Math.random() * (W - 2 * R) + R, Math.random() * 120 + R, R, { restitution: .85, frictionAir: .008 }); Body.setVelocity(b, { x: (Math.random() - .5) * 8, y: 0 }); return b })
    const mouse = Mouse.create(el)
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel); mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)
    const mc = MouseConstraint.create(engine, { mouse, constraint: { stiffness: .2, render: { visible: false } } })
    World.add(engine.world, [wall(W / 2, H + 30, W * 2, 60), wall(W / 2, -30, W * 2, 60), wall(-30, H / 2, 60, H * 2), wall(W + 30, H / 2, 60, H * 2), ...bodies, mc])
    const runner = Runner.create(); Runner.run(runner, engine)
    let raf; const loop = () => { bodies.forEach((b, i) => { nodes[i].style.transform = `translate(${b.position.x - R}px,${b.position.y - R}px)` }); raf = requestAnimationFrame(loop) }; loop()
    return () => { cancelAnimationFrame(raf); Runner.stop(runner); World.clear(engine.world); Engine.clear(engine) }
  }, [])
  return (
    <section id="tech" className="section">
      <Title icon={Wrench} sub="Drag the icons with your mouse or finger">Tech Stack</Title>
      <div ref={box} className="relative h-[640px] overflow-hidden glass cursor-grab active:cursor-grabbing select-none">
        {techs.map(([Ic, n, c]) => (
          <div key={n} data-t className="absolute left-0 top-0 rounded-full flex flex-col items-center justify-center bg-white border-2"
            style={{ width: (window.innerWidth < 500 ? 80 : 132), height: (window.innerWidth < 500 ? 80 : 132), borderColor: c, boxShadow: `0 0 16px ${c}88` }}>
            <Ic size={window.innerWidth < 500 ? 30 : 52} color={c} /><span className="text-[10px] sm:text-sm mt-1 font-semibold text-slate-800">{n}</span></div>
        ))}
      </div>
    </section>
  )
}
