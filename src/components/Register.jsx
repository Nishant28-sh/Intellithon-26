import { motion } from 'framer-motion'

export default function Register() {
  return (
    <section
      id="register"
      className="relative py-28 z-[1] text-center border-t border-b border-cyan-DEFAULT/10"
      style={{ background: 'linear-gradient(180deg, #03040a, rgba(0,50,80,0.15), #03040a)' }}
    >
      <div className="max-w-3xl mx-auto px-[5%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[6px] uppercase mb-5"
        >
          READY TO <span className="text-cyan-DEFAULT">INNOVATE?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#7aacbe] mb-10 text-base max-w-md mx-auto"
        >
          Join 250+ innovators for a 2-day AI-only hackathon experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-6 justify-center mb-12"
        >
          {[
            { icon: '📅', text: 'April 20-21, 2026' },
            { icon: '📍', text: 'K.R. Mangalam University, Gurugram' },
            { icon: '💰', text: 'Free registration (2–4 members)' },
          ].map(d => (
            <div key={d.text} className="flex items-center gap-3 text-[#7aacbe] text-sm">
              <span>{d.icon}</span><span>{d.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLScnmjhwvYoOV9uP0tOsS5miVdvb0kIv45c5LFxJ11PJwHVBxg/viewform?usp=publish-editor"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 48px rgba(0,229,255,0.4)' }}
          whileTap={{ scale: 0.97 }}
          className="btn-neon text-base py-5 px-14 inline-block"
        >
          REGISTER YOUR TEAM NOW
        </motion.a>
      </div>
    </section>
  )
}
