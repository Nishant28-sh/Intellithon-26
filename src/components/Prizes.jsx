import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import Marquee from './Marquee'

const prizes = [
  { place: 'Second Prize', badge: '🥈', amount: 3000, color: '#00e5ff', border: 'border-cyan-DEFAULT/40', bg: 'bg-cyan-DEFAULT/[0.05]', shadow: 'hover:shadow-cyan', top: '', perks: 'Cash + Certificate + Swags' },
  { place: 'First Prize', badge: '🥇', amount: 5000, color: '#ffd700', border: 'border-gold/40', bg: 'bg-gold/[0.06]', shadow: 'hover:shadow-gold', top: '-translate-y-6', perks: 'Cash + Trophy + Certificate' },
  { place: 'Third Prize', badge: '🥉', amount: 2000, color: '#ff6432', border: 'border-orange-500/40', bg: 'bg-orange-500/[0.05]', shadow: 'hover:shadow-none', top: '', perks: 'Cash + Certificate' },
]

export default function Prizes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const totalPool = 10000

  return (
    <section id="prizes" className="relative z-[1]">
      <Marquee />
      <div className="section-bg-text">PRIZES</div>
      <div className="max-w-6xl mx-auto px-[5%] py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[6px] uppercase mb-6"
        >
          PRIZES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#8fb9c8] max-w-2xl mx-auto mb-12"
        >
          Top teams will be rewarded for innovation, execution quality, and final pitching. Prize pool is distributed across the top 3 winning teams.
        </motion.p>

        {/* Prize pool */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-2xl tracking-[4px] text-[#7aacbe] mb-14"
        >
          PRIZE POOL —{' '}
          <span className="text-cyan-DEFAULT" style={{ textShadow: '0 0 18px rgba(0,229,255,0.7)' }}>
            ₹{inView ? <CountUp end={totalPool} duration={2} separator="," /> : '0'}
          </span>
          <br />
          <small className="text-xs tracking-[4px] text-[#7aacbe]/70 mt-2 block">TOP 3 WINNERS</small>
        </motion.div>

        {/* Podium */}
        <div className="flex items-end justify-center gap-6 mb-12 flex-wrap">
          {prizes.map((p, i) => (
            <motion.div
              key={p.place}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }}
              whileHover={{ y: p.top ? -32 : -8, transition: { duration: 0.2 } }}
              className={`relative ${p.bg} border ${p.border} rounded-2xl px-9 py-10 min-w-[220px] text-center overflow-hidden 
                ${p.top} ${p.shadow} transition-shadow duration-300 cursor-default`}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />
              <div className="text-5xl mb-5">{p.badge}</div>
              <div className="font-orbitron text-3xl font-bold mb-3" style={{ color: p.color, textShadow: `0 0 12px ${p.color}66` }}>
                ₹{inView ? <CountUp end={p.amount} duration={2} separator="," /> : '0'}
              </div>
              <div className="font-orbitron text-[0.68rem] tracking-[2px] text-[#7aacbe] uppercase mb-3">{p.place}</div>
              <div className="font-mono text-[0.66rem] tracking-[1px] text-[#91b8c8]">{p.perks}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-orbitron text-base tracking-[4px] text-[#7aacbe]"
        >
          1ST: <span className="text-cyan-DEFAULT">₹5,000</span> &nbsp;·&nbsp; 2ND: <span className="text-cyan-DEFAULT">₹3,000</span> &nbsp;·&nbsp; 3RD: <span className="text-cyan-DEFAULT">₹2,000</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-xs text-[#6f95a3] tracking-[1px]"
        >
          Final prizes are subject to organizer verification and participation compliance.
        </motion.p>
      </div>
      <Marquee />
    </section>
  )
}
