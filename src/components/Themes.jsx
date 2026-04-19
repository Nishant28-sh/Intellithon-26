import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Marquee from './Marquee'
import problemStatementPdf from "../Assests/Intellithon'26 problem statement.pdf"

const themes = [
  { icon: '🤖', title: 'Artificial Intelligence (AI)', desc: 'The only track for Intellithon \"26: build impactful AI-first products and intelligent systems that solve real-world problems.' },
  { icon: '💡', title: 'Open Innovation', desc: 'Build solutions in any domain under Open Innovation, but AI integration is mandatory in the core idea, workflow, or implementation.' },
]

function useCountdown(target) {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0, isReleased: false })

  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - new Date()
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, mins: 0, secs: 0, isReleased: true })
        return
      }

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
        isReleased: false,
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return time
}

export default function Themes() {
  const time = useCountdown('2026-04-19T11:30:00')
  const pad = n => String(n).padStart(2, '0')

  return (
    <section id="themes" className="relative z-[1]">
      <Marquee className="mb-0" />
      <div className="section-bg-text">THEMES</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-[5%] py-16 sm:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[4px] sm:tracking-[6px] uppercase mb-10 sm:mb-14"
        >
          THEMES
        </motion.h2>

        {/* Theme Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 sm:mb-14">
          {themes.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -8,
                borderColor: '#00e5ff',
                boxShadow: '0 12px 40px rgba(0,229,255,0.15)',
                transition: { duration: 0.2 },
              }}
              className="relative w-full max-w-3xl lg:max-w-[calc(50%-0.75rem)] min-h-[260px] sm:min-h-[320px] bg-cyan-DEFAULT/[0.04] border border-cyan-DEFAULT/25 rounded-2xl p-6 sm:p-12 text-center cursor-default overflow-hidden group"
            >
              {/* Hover radial glow */}
              <div className="absolute inset-0 bg-card-radial opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{t.icon}</div>
              <h3 className="font-orbitron text-[0.9rem] sm:text-[1.2rem] font-semibold tracking-[1.5px] sm:tracking-[3px] text-cyan-DEFAULT uppercase mb-3 sm:mb-4">{t.title}</h3>
              <p className="text-[#9ec2d1] text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto bg-black/50 border border-red-500/30 rounded-xl px-4 sm:px-8 py-6 overflow-hidden"
        >
          <p className="font-mono text-[0.62rem] sm:text-xs text-red-400 tracking-[1.5px] sm:tracking-[2px] mb-4 uppercase">Countdown to Apr 19, 11:30 AM</p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 flex-wrap">
            {[['days', time.days], ['hours', time.hours], ['mins', time.mins], ['secs', time.secs]].map(([label, val], i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                <div className="flex flex-col items-center">
                  <span className="cd-digit">{pad(val)}</span>
                  <span className="font-mono text-[0.6rem] text-[#7aacbe] tracking-wider mt-1 uppercase">{label}</span>
                </div>
                {i < 3 && <span className="font-orbitron text-xl sm:text-2xl text-red-400 pb-5">:</span>}
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href={time.isReleased ? problemStatementPdf : undefined}
              download={time.isReleased ? 'Intellithon26-Problem-Statement.pdf' : undefined}
              aria-disabled={!time.isReleased}
              className={`w-full sm:w-auto font-mono text-xs px-4 py-2 rounded border transition-colors ${
                time.isReleased
                  ? 'bg-cyan-DEFAULT/10 border-cyan-DEFAULT/20 text-cyan-DEFAULT hover:bg-cyan-DEFAULT/20'
                  : 'bg-cyan-DEFAULT/5 border-cyan-DEFAULT/10 text-[#5b7480] pointer-events-none cursor-not-allowed'
              }`}
            >
              Download Problem Statement
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScnmjhwvYoOV9uP0tOsS5miVdvb0kIv45c5LFxJ11PJwHVBxg/viewform?usp=publish-editor" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-green/10 border border-green/25 text-green font-mono text-xs px-4 py-2 rounded hover:bg-green/20 transition-colors">
              Register For AI Track
            </a>
          </div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  )
}
