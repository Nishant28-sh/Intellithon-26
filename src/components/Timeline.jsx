import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const days = [
  {
    id: 1, label: 'PRE-HACKATHON', date: 'DAY 0 — APR 19',
    events: [
      { time: '11:00 AM', event: 'PROBLEM STATEMENTS RELEASE' },
      { time: '10:30 PM', event: 'TEAM PREPARATION & Q/A' },
    ],
  },
  {
    id: 2, label: 'HACKATHON DAY 1', date: 'DAY 1 — APR 20',
    events: [
      { time: '09:20 AM', event: 'HACKATHON DAY 1 KICKOFF' },
      { time: '11:30 AM', event: 'ROUND 1 SUBMISSION DEADLINE' },
      { time: '04:00 PM', event: 'ROUND 1 RESULTS ANNOUNCED' },
    ],
  },
  {
    id: 3, label: 'HACKATHON DAY 2', date: 'DAY 2 — APR 21',
    events: [
      { time: '09:15 AM', event: 'ROUND 2 OFFLINE HACKING CONTINUES' },
      { time: '10:30 PM', event: 'COMPLETED PROJECT SHOWCASE' },
      { time: '11:00 PM', event: 'JUDGEMENT DAY & FINAL EVALUATION' },
      { time: '03:30 PM', event: 'WINNER ANNOUNCEMENT & CLOSING' },
    ],
  },
]

export default function Timeline() {
  const [active, setActive] = useState(1)
  const current = days.find(d => d.id === active)

  return (
    <section id="timeline" className="relative py-24 z-[1] text-center">
      <div className="section-bg-text">TIMELINE</div>
      <div className="max-w-4xl mx-auto px-[5%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[6px] uppercase mb-12"
        >
          EVENT <span className="text-cyan-DEFAULT">TIMELINE</span>
        </motion.h2>

        {/* Day Tabs */}
        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 sm:justify-center mb-12 px-1">
          {days.map(d => (
            <motion.button
              key={d.id}
              onClick={() => setActive(d.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full sm:w-auto min-w-0 font-orbitron text-[0.56rem] sm:text-[0.68rem] tracking-[1px] sm:tracking-[2px] uppercase px-2 sm:px-6 py-2.5 rounded-full border-2 transition-all duration-300 cursor-pointer leading-tight whitespace-normal sm:whitespace-nowrap text-center
                ${active === d.id
                  ? 'border-cyan-DEFAULT text-cyan-DEFAULT bg-cyan-DEFAULT/8 shadow-cyan'
                  : 'border-cyan-DEFAULT/20 text-[#7aacbe] hover:border-cyan-DEFAULT/50 hover:text-cyan-DEFAULT'}`}
            >
              {d.label}
            </motion.button>
          ))}
        </div>

        {/* Events */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-orbitron text-sm tracking-[4px] text-cyan-DEFAULT mb-10">{current.date}</p>

            <div className="relative max-w-lg mx-auto">
              {/* Vertical line */}
              <div className="timeline-line" />

              <div className="flex flex-col gap-7">
                {current.events.map((ev, i) => (
                  <motion.div
                    key={ev.event}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center justify-center gap-5"
                  >
                    <span className="font-mono text-xs text-[#7aacbe] w-24 text-right">{ev.time}</span>
                    <div className="w-3 h-3 rounded-full border-2 border-cyan-DEFAULT bg-[#03040a] shadow-cyan z-10 flex-shrink-0" />
                    <span className="font-orbitron text-[0.7rem] tracking-[2px] text-white w-44 text-left">{ev.event}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
