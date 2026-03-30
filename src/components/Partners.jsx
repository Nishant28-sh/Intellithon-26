import { motion } from 'framer-motion'

const partners = [
  'TechCorp','InnovateCo','NextGen Labs','CloudSync',
  'DevForge','AlphaStack','ByteWave','CodeCraft',
  'DataNest','HackIO','PulseTech','ZeroGravity',
]

const scrollPartners = [
  '🏢 TechCorp','💡 InnovateCo','🔬 NextGen Labs','☁️ CloudSync',
  '🛠️ DevForge','⚡ AlphaStack','🌊 ByteWave','💻 CodeCraft',
  '📊 DataNest','🎯 HackIO','⚡ PulseTech','🚀 ZeroGravity',
]

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 z-[1] text-center">
      <div className="section-bg-text">PARTNERS</div>
      <div className="max-w-6xl mx-auto px-[5%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[6px] uppercase mb-14"
        >
          OUR TRUSTED <span className="text-cyan-DEFAULT">PARTNERS</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ borderColor: '#00e5ff', color: '#00e5ff', boxShadow: '0 0 20px rgba(0,229,255,0.2)' }}
              className="bg-cyan-DEFAULT/[0.03] border border-cyan-DEFAULT/15 rounded-xl px-3 py-5 flex items-center justify-center font-mono text-xs text-[#7aacbe] cursor-default transition-colors duration-200"
            >
              {p}
            </motion.div>
          ))}
        </div>

        {/* Scrolling row */}
        <div className="overflow-hidden my-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#03040a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#03040a] to-transparent z-10 pointer-events-none" />
          <div
            className="flex gap-4 w-max"
            style={{ animation: 'marquee 18s linear infinite' }}
          >
            {[...scrollPartners, ...scrollPartners].map((p, i) => (
              <span
                key={i}
                className="bg-cyan-DEFAULT/[0.03] border border-cyan-DEFAULT/15 rounded-full px-5 py-2 font-mono text-xs text-[#7aacbe] whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <motion.a
          href="mailto:intellithon@krmu.edu.in"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ borderColor: '#00e5ff', color: '#00e5ff' }}
          className="inline-block mt-6 font-orbitron text-xs tracking-[3px] uppercase px-8 py-3 rounded-full border-2 border-cyan-DEFAULT/30 text-[#7aacbe] transition-all duration-300"
        >
          BECOME OUR SPONSOR
        </motion.a>
      </div>
    </section>
  )
}
