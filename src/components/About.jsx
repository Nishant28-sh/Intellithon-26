import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import aboutImage from '../Assests/about page.jpeg'

const stats = [
  { value: 1000, suffix: '+', label: 'Participants' },
  { value: 200, suffix: '+', label: 'Teams' },
  { value: 48, suffix: '', label: 'Hours' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="relative py-24 z-[1]">
      <div className="section-bg-text">ABOUT US</div>
      <div className="max-w-6xl mx-auto px-[5%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold text-center tracking-[6px] uppercase mb-16"
        >
          ABOUT <span className="text-cyan-DEFAULT">US</span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <motion.div variants={item}>
            <p className="text-[#7aacbe] leading-relaxed mb-5">
              Intellithon is the flagship annual hackathon hosted by{' '}
              <strong className="text-white">K.R. Mangalam University</strong>, bringing together
              innovators, developers, designers, and problem-solvers from across the country under one roof.
            </p>
            <p className="text-[#7aacbe] leading-relaxed mb-5">
              With its grand debut edition, Intellithon '26 is set to mark its most ambitious launch yet —
              a national-scale innovation festival with <strong className="text-white">1000+ participants</strong> and{' '}
              <strong className="text-white">200+ teams</strong> expected.
            </p>
            <p className="text-[#7aacbe] leading-relaxed mb-10">
              More than just a hackathon — it's a <strong className="text-white">2-day AI-focused journey</strong> of
              creativity, collaboration, and innovation where ideas turn into real-world impact.
            </p>

            {/* Stats */}
            <div className="flex gap-10 flex-wrap">
              {stats.map(stat => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="font-orbitron text-3xl font-bold text-cyan-DEFAULT" style={{ textShadow: '0 0 12px rgba(0,229,255,0.5)' }}>
                    {inView ? (
                      <CountUp end={stat.value} duration={2} separator="," />) : 0}
                    {stat.suffix}
                  </span>
                  <span className="font-mono text-[0.7rem] tracking-widest text-[#7aacbe] uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={item}>
            <div className="relative rounded-xl overflow-hidden border border-cyan-DEFAULT/15 bg-cyan-DEFAULT/[0.03] aspect-[4/3] group">
              <img
                src={aboutImage}
                alt="Intellithon event highlights"
                className="w-full h-full object-cover"
              />
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl border border-cyan-DEFAULT/0 group-hover:border-cyan-DEFAULT/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-DEFAULT to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
