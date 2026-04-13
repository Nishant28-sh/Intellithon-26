import { motion } from 'framer-motion'
import ibmLogo from '../Assests/IBM LOGOO.jpg'
import froyoLogo from '../Assests/Froyo Logo.webp'

const partners = [
  { name: 'IBM', logo: ibmLogo },
  { name: 'Froyo Technologies', logo: froyoLogo },
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
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ borderColor: '#00e5ff', color: '#00e5ff', boxShadow: '0 0 20px rgba(0,229,255,0.2)' }}
              className="w-full sm:w-[240px] bg-cyan-DEFAULT/[0.03] border border-cyan-DEFAULT/15 rounded-xl px-4 py-5 flex flex-col items-center justify-center gap-3 font-mono text-xs text-[#7aacbe] cursor-default transition-colors duration-200"
            >
              <div className="w-20 h-20 rounded-xl bg-[#03040a] border border-cyan-DEFAULT/20 flex items-center justify-center overflow-hidden p-2">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm tracking-[2px] text-center text-[#c6eaf4]">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="mailto:nishantsharma9550@gmail.com"
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
