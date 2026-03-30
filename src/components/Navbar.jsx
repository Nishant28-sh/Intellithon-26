import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home', section: 'home' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Themes', href: '#themes', section: 'themes' },
  { label: 'Timeline', href: '#timeline', section: 'timeline' },
  { label: 'Prizes', href: '#prizes', section: 'prizes' },
  { label: 'Our Team', href: '#team', section: 'team' },
  { label: "FAQ'S", href: '#faq', section: 'faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      // Active section tracking
      const sections = ['home','about','themes','timeline','prizes','team','faq']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }

    const onHashChange = () => {
      const section = window.location.hash.replace('#', '')
      if (section) setActive(section)
    }

    onScroll()
    onHashChange()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 flex items-center px-4 sm:px-6 lg:px-8 py-2.5 transition-all duration-300 border-b border-cyan-DEFAULT/15
          ${scrolled ? 'bg-[#04070d]/98 backdrop-blur-xl' : 'bg-[#04070d]/95 backdrop-blur-lg'}`}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-DEFAULT/70 to-transparent" />

        {/* Brand */}
        <a href="#home" className="mr-auto font-orbitron font-semibold tracking-[2px] text-[#9fd0e1] uppercase" style={{ fontSize: 'clamp(0.92rem, 3.6vw, 1.1rem)' }}>
          INTELLITHON '26
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 mr-5 list-none">
          {links.map(link => (
            <li key={link.section}>
              <a
                href={link.href}
                onClick={() => setActive(link.section)}
                className={`relative pb-2 font-orbitron font-medium tracking-[0.8px] transition-colors duration-200
                  ${active === link.section ? 'text-cyan-DEFAULT' : 'text-[#d2dee6] hover:text-cyan-DEFAULT'}`}
                style={{ fontSize: 'clamp(0.8rem, 0.72vw, 0.92rem)' }}
              >
                {link.label}
                <span className={`absolute left-0 right-0 -bottom-[8px] h-[3px] rounded bg-cyan-DEFAULT transition-opacity duration-200 ${active === link.section ? 'opacity-100' : 'opacity-0'}`} />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScnmjhwvYoOV9uP0tOsS5miVdvb0kIv45c5LFxJ11PJwHVBxg/viewform?usp=publish-editor"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:block font-orbitron text-sm font-bold tracking-[2px] px-10 py-3 rounded-full border border-[#ff8c8c] text-white bg-gradient-to-b from-[#ff4f54] to-[#d93138] hover:from-[#ff656b] hover:to-[#e03e45] transition-all duration-300 shadow-[0_0_22px_rgba(255,72,72,0.34)]"
        >
          REGISTER NOW
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 ml-auto bg-transparent border border-cyan-DEFAULT/25 rounded-md cursor-pointer p-2.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-[2.5px] bg-cyan-DEFAULT rounded shadow-[0_0_8px_rgba(0,229,255,0.6)] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[2.5px] bg-cyan-DEFAULT rounded shadow-[0_0_8px_rgba(0,229,255,0.6)] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2.5px] bg-cyan-DEFAULT rounded shadow-[0_0_8px_rgba(0,229,255,0.6)] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/55 backdrop-blur-[1px] lg:hidden"
              aria-label="Close menu overlay"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[66px] left-3 right-3 z-40 bg-[#060b14]/98 backdrop-blur-xl border border-cyan-DEFAULT/20 rounded-xl px-4 py-4 flex flex-col gap-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)] lg:hidden"
            >
              {links.map(link => (
                <a
                  key={link.section}
                  href={link.href}
                  onClick={() => { setActive(link.section); setMenuOpen(false) }}
                  className={`font-orbitron text-[0.78rem] tracking-[1.6px] uppercase px-3 py-3 rounded-md border transition-colors duration-200
                    ${active === link.section
                      ? 'text-cyan-DEFAULT border-cyan-DEFAULT/40 bg-cyan-DEFAULT/10'
                      : 'text-[#9cb8c4] border-transparent hover:border-cyan-DEFAULT/20 hover:text-cyan-DEFAULT'}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScnmjhwvYoOV9uP0tOsS5miVdvb0kIv45c5LFxJ11PJwHVBxg/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="text-center mt-2 text-sm font-orbitron tracking-[1.6px] py-3 rounded-full border border-[#ff7a7a] text-white bg-gradient-to-b from-[#ff5252] to-[#d92f37]"
              >
                REGISTER NOW
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
