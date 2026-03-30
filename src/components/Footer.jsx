import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = ['About','Themes','Timeline','Prizes','Team','FAQ']

export default function Footer() {
  return (
    <footer className="bg-[#060b14] border-t border-cyan-DEFAULT/10 pt-16 pb-0 relative z-[1]">
      <div className="max-w-6xl mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          {/* Brand */}
          <div>
            <div className="font-orbitron text-2xl font-bold tracking-widest text-cyan-DEFAULT mb-4" style={{ textShadow: '0 0 14px rgba(0,229,255,0.5)' }}>
              INTELLITHON <span className="text-[#7aacbe]">'26</span>
            </div>
            <p className="text-[#7aacbe] text-sm leading-relaxed mb-3">
              K.R. Mangalam University<br />
              Sohna Road, Gurugram<br />
              Haryana – 122103
            </p>
            <a href="mailto:intellithon@krmu.edu.in" className="font-mono text-xs text-cyan-DEFAULT hover:text-cyan-dim transition-colors">
              nishantsharma9550@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-xs tracking-[4px] text-cyan-DEFAULT uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3 list-none">
              {navLinks.map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#7aacbe] text-sm hover:text-cyan-DEFAULT transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-orbitron text-xs tracking-[4px] text-cyan-DEFAULT uppercase mb-5">Follow Us</h4>
            <div className="flex gap-3 mb-4">
              {[
                { label: 'Instagram', icon: '📸', href: 'https://instagram.com/intellithon.official' },
                { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/' },
                { label: 'Twitter', icon: '🐦', href: 'https://twitter.com/' },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, borderColor: '#00e5ff' }}
                  className="w-10 h-10 rounded-full border border-cyan-DEFAULT/20 flex items-center justify-center text-base text-[#7aacbe] hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="font-mono text-xs text-[#7aacbe]">@intellithon.official</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-[#7aacbe] font-mono">
        © 2026 Intellithon. All rights reserved. Made with 💙 by K.R. Mangalam University.
      </div>
    </footer>
  )
}
