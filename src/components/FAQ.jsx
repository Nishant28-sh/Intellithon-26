import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Who can participate in Intellithon \'26?', a: 'Any undergraduate or postgraduate student from any recognized college or university across India can participate. Teams of 2–4 members are allowed.' },
  { q: 'What is the registration fee?', a: 'Registration is completely free for all teams (2–4 members). This includes your workspace, internet access, meals, and refreshments throughout the 2-day event.' },
  { q: 'Are external libraries and frameworks allowed?', a: 'Yes! You are free to use any open-source libraries, frameworks, and APIs. However, the core idea and implementation must be developed during the hackathon.' },
  { q: 'What is provided at the venue?', a: 'Participants will be provided with high-speed internet, a dedicated workspace, power outlets throughout the event.' },
  { q: 'Is there accommodation available?', a: 'NO' },
  { q: 'How will the judging work?', a: 'Projects will be evaluated on Innovation & Creativity, Technical Complexity, Real-world Impact, Presentation & Demo Quality, and Scalability.' },
  { q: 'How can I contact the organizers?', a: 'Reach us at nishantsharma9550@gmail.com or DM us on WhatsApp. We typically respond within 24 hours.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="relative py-24 z-[1]">
      <div className="section-bg-text">FAQ</div>
      <div className="max-w-3xl mx-auto px-[5%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[6px] uppercase mb-14 text-center"
        >
          FAQ'S
        </motion.h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`border rounded-xl overflow-hidden transition-colors duration-300
                ${open === i ? 'border-cyan-DEFAULT/35' : 'border-cyan-DEFAULT/15 hover:border-cyan-DEFAULT/30'}`}
            >
              <button
                className="w-full text-left px-6 py-5 bg-cyan-DEFAULT/[0.03] text-white font-inter text-sm font-medium flex items-center justify-between gap-4 cursor-pointer hover:text-cyan-DEFAULT transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-cyan-DEFAULT text-xl flex-shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 pt-1 text-[#7aacbe] text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
