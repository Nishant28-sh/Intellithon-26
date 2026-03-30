import { motion } from 'framer-motion'

const hexItems = [
  '🏆','💡','🤝','💻','🎯','🌍','🔬','🚀','🎓','⚡','🛡️','🌾','⛓️','🏥','🎉',
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 z-[1] text-center">
      <div className="section-bg-text">GALLERY</div>
      <div className="max-w-6xl mx-auto px-[5%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[6px] uppercase mb-14"
        >
          GALLERY
        </motion.h2>

        {/* Hex grid */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {hexItems.map((emoji, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.12 }}
              className="hex-clip w-[110px] h-[126px] bg-cyan-DEFAULT/[0.03] border border-cyan-DEFAULT/15 flex items-center justify-center text-4xl cursor-default hover:bg-cyan-DEFAULT/10 transition-colors duration-300"
            >
              <span>{emoji}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-xs text-[#7aacbe] tracking-widest"
        >
          📸 Photos from Intellithon '26 will appear here after the event!
        </motion.p>
      </div>
    </section>
  )
}
