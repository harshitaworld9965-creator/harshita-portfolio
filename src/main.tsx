import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Github, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import './styles.css'

const titles = ['Full Stack AI Engineer', 'Frontend Developer', 'Product Builder']
const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node', 'Python', 'FastAPI', 'Machine Learning', 'Git', 'GitHub', 'Figma']
const projects = [
  { num: '01', title: 'NEXUS\nINTELLIGENCE', tag: 'AI product platform', copy: 'Turning scattered signals into sharp, human decisions.', tags: ['NEXT.JS', 'PYTHON', 'LLMs'], className: 'nexus' },
  { num: '02', title: 'AURA\nFINANCE', tag: 'A new kind of clarity', copy: 'A calm financial universe where complexity becomes confidence.', tags: ['REACT', 'MOTION', 'DATA VIZ'], className: 'aura' },
  { num: '03', title: 'STILL\nMOTION', tag: 'Creative systems', copy: 'Giving modern brands a visual language that moves at the speed of culture.', tags: ['DIRECTION', 'WEBGL', 'SYSTEMS'], className: 'still' }
]

function App() {
  const [loading, setLoading] = useState(true)
  const [titleIndex, setTitleIndex] = useState(0)
  const cursor = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const heroY = useTransform(scrollYProgress, [0, .25], [0, 180])

  useEffect(() => {
    const lenis = new Lenis({ lerp: .09, smoothWheel: true })
    let frame: number
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    const timeout = window.setTimeout(() => setLoading(false), 2200)
    const rotate = window.setInterval(() => setTitleIndex(i => (i + 1) % titles.length), 2600)
    const move = (e: MouseEvent) => { if (cursor.current) cursor.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)` }
    window.addEventListener('mousemove', move)
    return () => { cancelAnimationFrame(frame); lenis.destroy(); clearTimeout(timeout); clearInterval(rotate); window.removeEventListener('mousemove', move) }
  }, [])

  return <>
    <div ref={cursor} className="cursor"><i /></div>
    <motion.div className="read-progress" style={{ scaleX }} />
    <div className={'loader ' + (loading ? '' : 'done')}><div className="loader-word">H<span>●</span>RSHITA</div><div className="loader-line" /></div>
    <div className="ambient"><i className="orb orb-a"/><i className="orb orb-b"/><i className="orb orb-c"/><div className="grain"/></div>
    <Nav />
    <main>
      <section className="hero" id="home">
        <motion.div className="hero-stage" style={{ y: heroY }}>
          <p className="eyebrow reveal">Independent creative technologist <span>↗</span> India / Everywhere</p>
          <h1><span className="word-shift">HAR</span><span className="outline">SHI</span><span className="word-shift">TA</span></h1>
          <div className="hero-bottom"><div className="title-rotator"><span className="pulse"/><span key={titleIndex} className="title-current">{titles[titleIndex]}</span></div><p>Building intelligent<br/>experiences.</p></div>
        </motion.div>
        <div className="hero-meta"><span>Scroll to explore</span><ArrowDownRight size={18}/><span>© 2024</span></div>
      </section>

      <section className="manifesto" id="about">
        <Reveal><p className="eyebrow">01 / The point of view</p></Reveal>
        <Reveal><h2>Technology should<br/><em>feel like magic.</em></h2></Reveal>
        <div className="manifesto-row"><Reveal><p>I shape ideas into lucid, high-performing digital worlds — where strategic thinking meets a little bit of wonder.</p></Reveal><div className="round-stamp">SCROLL<br/>FORWARD<br/><Sparkles size={18}/></div></div>
        <div className="portrait"><div className="portrait-glow"/><div className="portrait-copy">EVERY PIXEL<br/>HAS A PURPOSE</div><span className="portrait-index">001—</span></div>
      </section>

      <section className="chapter" id="process">
        <div className="chapter-sticky"><p className="eyebrow">02 / A process in motion</p><h2>FROM<br/><span>AMBIGUITY</span><br/>TO IMPACT.</h2><p className="chapter-note">I work at the intersection of design, engineering, and emerging intelligence.</p></div>
        <div className="timeline">{[['01', 'Listen deeply', 'The most interesting problems rarely arrive fully formed.'], ['02', 'Find the signal', 'Strategy becomes a shared language for what matters.'], ['03', 'Make it tangible', 'Design and code move together to create momentum.']].map(([n,t,c]) => <Reveal key={n}><article><span>{n}</span><h3>{t}</h3><p>{c}</p></article></Reveal>)}</div>
      </section>

      <section className="capabilities" id="capabilities"><Reveal><p className="eyebrow">03 / Selected capabilities</p><h2>TOOLS ARE<br/>ONLY <em>THE BEGINNING.</em></h2></Reveal><div className="tech-cloud">{tech.map((name,i) => <motion.button whileHover={{ scale: 1.08, y: -12 }} key={name} className={'tech tech-' + (i % 5)}><span>{String(i+1).padStart(2,'0')}</span>{name}<i/></motion.button>)}</div></section>

      <section className="work" id="work"><div className="work-heading"><p className="eyebrow">04 / Chosen work</p><h2>Ideas, <em>made real.</em></h2><span>(03)</span></div>{projects.map(project => <Project key={project.num} {...project}/>)}</section>

      <section className="contact" id="contact"><p className="eyebrow">05 / The next thing</p><h2>LET'S BUILD<br/>SOMETHING<br/><em>EXTRAORDINARY.</em></h2><a className="contact-link" href="mailto:hello@harshita.dev">hello@harshita.dev <ArrowUpRight/></a><div className="footer-line"><span>© HARSHITA 2024</span><div><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">GitHub</a></div><span>MADE WITH INTENTION</span></div></section>
    </main>
  </>
}

function Nav(){ const [scrolled,setScrolled]=useState(false); useEffect(()=>{const f=()=>setScrolled(scrollY>50); addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]); return <nav className={scrolled?'scrolled':''}><a className="brand" href="#home">H<span>•</span></a><div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div><a className="available" href="mailto:hello@harshita.dev"><i/>Available for select work</a></nav> }
function Reveal({children}:{children:React.ReactNode}){return <motion.div initial={{ opacity:0, y:45 }} whileInView={{ opacity:1,y:0 }} viewport={{once:true, amount:.25}} transition={{duration:.9,ease:[.2,.7,.2,1]}}>{children}</motion.div>}
function Project({num,title,tag,copy,tags,className}:{num:string,title:string,tag:string,copy:string,tags:string[],className:string}) { return <Reveal><article className={'project ' + className}><div className="project-art"><div className="art-sphere"/><div className="art-ring"/><span>{num}</span></div><div className="project-content"><p className="eyebrow">{tag}</p><h3>{title.split('\n').map(x=><React.Fragment key={x}>{x}<br/></React.Fragment>)}</h3><p>{copy}</p><div className="chips">{tags.map(t=><span key={t}>{t}</span>)}</div><button>Explore case study <ArrowUpRight size={16}/></button></div></article></Reveal> }

createRoot(document.getElementById('root')!).render(<App />)
