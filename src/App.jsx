import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StarCanvas from './components/StarCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Themes from './components/Themes'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Register from './components/Register'
import Footer from './components/Footer'

// Premium cursor: center dot + smooth trailing ring
function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const hoverRectRef = useRef(null)
  const hoveringRef = useRef(false)
  const pressTimeoutRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia('(pointer: fine)').matches
    setEnabled(canUseCustomCursor)
    if (!canUseCustomCursor) return

    document.body.classList.add('custom-cursor')

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let rafId

    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const interactiveEl = e.target.closest(interactiveSelector)
      if (interactiveEl) {
        hoverRectRef.current = interactiveEl.getBoundingClientRect()
        if (!hoveringRef.current) {
          hoveringRef.current = true
          setHoveringInteractive(true)
        }
      } else if (hoveringRef.current) {
        hoveringRef.current = false
        hoverRectRef.current = null
        setHoveringInteractive(false)
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }
    }

    const animateRing = () => {
      let targetX = mouseX
      let targetY = mouseY

      if (hoverRectRef.current) {
        const centerX = hoverRectRef.current.left + hoverRectRef.current.width / 2
        const centerY = hoverRectRef.current.top + hoverRectRef.current.height / 2
        targetX = mouseX + (centerX - mouseX) * 0.35
        targetY = mouseY + (centerY - mouseY) * 0.35
      }

      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }

      rafId = requestAnimationFrame(animateRing)
    }

    const handleMouseOver = (e) => {
      const interactiveEl = e.target.closest(interactiveSelector)
      if (interactiveEl) {
        hoverRectRef.current = interactiveEl.getBoundingClientRect()
        hoveringRef.current = true
        setHoveringInteractive(true)
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.closest(interactiveSelector)) {
        hoveringRef.current = false
        setHoveringInteractive(false)
        hoverRectRef.current = null
      }
    }

    const handleMouseDown = () => {
      setIsPressed(true)
      if (pressTimeoutRef.current) clearTimeout(pressTimeoutRef.current)
      pressTimeoutRef.current = setTimeout(() => setIsPressed(false), 120)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    animateRing()

    return () => {
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(rafId)
      if (pressTimeoutRef.current) clearTimeout(pressTimeoutRef.current)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className={`custom-cursor-ring ${hoveringInteractive ? 'is-hover' : ''} ${isPressed ? 'is-press' : ''}`} />
      <div ref={dotRef} className={`custom-cursor-dot ${hoveringInteractive ? 'is-hover' : ''} ${isPressed ? 'is-press' : ''}`} />
    </>
  )
}

// Scroll to top button
function ScrollTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0,229,255,0.4)' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-cyan-DEFAULT/10 border border-cyan-DEFAULT text-cyan-DEFAULT flex items-center justify-center cursor-pointer text-lg"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#03040a] text-white overflow-x-hidden">
      <StarCanvas />
      <div className="bg-cyber-grid" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Themes />
        <Timeline />
        <Prizes />
        <Team />
        <FAQ />
        <Register />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}
