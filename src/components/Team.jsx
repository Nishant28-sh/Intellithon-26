import { motion } from 'framer-motion'
import amarSirImg from '../Assests/Amar sir img.png'
import nishantImg from '../Assests/Nishant.jpeg'

const GROUPS = [
  {
    title: 'CONVENORS',
    members: [
      { name: 'Prof. (Dr.) Monika Khatkar', role: 'Convenor', emoji: '👩‍💼', socials: { linkedin: '#' } },
      { name: 'Dr. Amar Saraswat', role: 'Convenor', emoji: '👨‍💼', image: amarSirImg, socials: { linkedin: '#' } },
    ],
  },
  {
    title: 'LEAD ORGANIZERS',
    members: [
      { name: 'Nishant Sharma', role: 'Operations Lead', emoji: '👨‍💻', image: nishantImg, phone: '+91 87086 39550', socials: { linkedin: '#', instagram: '#' } },
      { name: 'Yashraj Pahuja', role: 'Technical Lead', emoji: '👩‍💻', phone:  '+91 99537 90039', socials: { linkedin: '#', instagram: '#' } },
    ],
  },
]

function TeamCard({ member, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, borderColor: 'rgba(242,200,107,0.45)', boxShadow: '0 16px 42px rgba(242,200,107,0.16)' }}
      className="relative bg-[#07090f]/95 border border-[#f2c86b]/20 rounded-[30px] px-7 py-10 w-[285px] min-h-[410px] text-center overflow-hidden group cursor-default transition-colors duration-300"
    >
      {/* Panel glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/40 to-transparent pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute left-5 bottom-5 w-6 h-6 border-l-2 border-b-2 border-[#d9b45f]/85" />
      <div className="absolute right-5 top-5 w-6 h-6 border-r-2 border-t-2 border-[#d9b45f]/35 opacity-70" />

      {/* Avatar */}
      <div className="relative z-10 w-36 h-36 rounded-full mx-auto mb-6 border-[3px] border-[#d9b45f]/90 bg-white/95 flex items-center justify-center text-5xl overflow-hidden shadow-[0_0_28px_rgba(242,200,107,0.25)]">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          member.emoji
        )}
      </div>

      <h4 className="relative z-10 font-orbitron text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-wide text-[#b7f6ff] mb-2 leading-tight" style={{ textShadow: '0 0 14px rgba(0,229,255,0.55)' }}>{member.name}</h4>
      <p className="relative z-10 text-[#f0cf7b] text-[1rem] tracking-wide mb-2">{member.role}</p>
      {member.phone && <p className="relative z-10 font-mono text-[0.72rem] text-[#8db0bd] mb-5">{member.phone}</p>}

      {/* Socials */}
      <div className="relative z-10 flex gap-3 justify-center mt-auto">
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} aria-label="LinkedIn"
            className="w-11 h-11 rounded-full border border-[#d9b45f]/70 bg-[#2b1f03]/45 flex items-center justify-center text-[#f0cf7b] hover:border-[#f0cf7b] hover:text-[#ffe39f] transition-colors text-xl leading-none">
            in
          </a>
        )}
        {member.socials.instagram && (
          <a href={member.socials.instagram} aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-[#d9b45f]/70 bg-[#2b1f03]/45 flex items-center justify-center text-[#f0cf7b] hover:border-[#f0cf7b] hover:text-[#ffe39f] transition-colors text-lg leading-none">
            ig
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <section id="team" className="relative py-24 z-[1] text-center">
      <div className="section-bg-text">OUR TEAM</div>
      <div className="max-w-6xl mx-auto px-[5%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[6px] uppercase mb-16"
        >
          OUR <span className="text-cyan-DEFAULT">TEAM</span>
        </motion.h2>

        {GROUPS.map((group, gi) => (
          <div key={group.title} className="mb-14">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-orbitron text-xs tracking-[6px] text-cyan-DEFAULT uppercase mb-8"
            >
              {group.title}
            </motion.h3>
            <div className="flex flex-wrap gap-5 justify-center">
              {group.members.map((m, i) => (
                <TeamCard key={m.name} member={m} i={i + gi * 3} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
