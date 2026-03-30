import { motion } from 'framer-motion'
import Marquee from './Marquee'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-36 pb-20 overflow-hidden z-[1]">
      {/* Floating orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] top-1/4 -left-1/4 animate-float pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-DEFAULT/5 blur-[120px] top-1/3 -right-1/4 animate-float-delay pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-DEFAULT/4 blur-[80px] bottom-10 left-1/3 pointer-events-none"
        style={{ animation: 'float 10s ease-in-out infinite 4s' }} />

      {/* Rotating ring accent */}
      <div className="absolute w-[800px] h-[800px] rounded-full border border-cyan-DEFAULT/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-spin-slow" />
      <div className="absolute w-[600px] h-[600px] rounded-full border border-cyan-DEFAULT/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-orb-spin" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '8px' }}
          animate={{ opacity: 1, letterSpacing: '4px' }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-mono text-cyan-DEFAULT text-xs sm:text-sm tracking-[4px] mb-4 uppercase"
        >
          K.R. Mangalam University Presents
        </motion.p>

        {/* Glitch title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mb-6"
        >
          <h1
            className="glitch-title text-[clamp(2.4rem,8vw,6.5rem)]"
            data-text="INTELLITHON '26"
          >
            INTELLITHON '26
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-[#7aacbe] text-[0.78rem] sm:text-sm tracking-[2px] sm:tracking-[6px] leading-relaxed max-w-[95vw] sm:max-w-none mx-auto mb-3"
        >
          <span className="block sm:inline">2 DAYS &nbsp;·&nbsp; AI ONLY</span>
          <span className="hidden sm:inline"> &nbsp;·&nbsp; </span>
          <span className="block sm:inline">1 AMAZING EXPERIENCE</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-cyan-DEFAULT text-sm tracking-widest mb-10"
        >
          April 16-17, 2026 &nbsp;·&nbsp; Gurugram, Haryana
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScnmjhwvYoOV9uP0tOsS5miVdvb0kIv45c5LFxJ11PJwHVBxg/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            className="btn-neon text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            REGISTER NOW
          </motion.a>
          <motion.a
            href="#about"
            className="btn-ghost text-sm"
            whileHover={{ scale: 1.03 }}
          >
            Learn More ↓
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0">
        <Marquee />
      </div>
    </section>
  )
}
