import { motion } from 'framer-motion'
import amarSirImg from '../Assests/Amar Sir.png'
import nishantImg from '../Assests/Nishant.jpeg'
import monikaImg from "../Assests/monika ma'am.jpeg"
import shwetaImg from "../Assests/Shweta ma'am.png"
import yashrajImg from '../Assests/Yashraj.jpeg'

const GROUPS = [
  {
    title: 'CONVENORS',
    members: [
      { name: 'Prof.(Dr.) Shweta Bansal', nameLines: ['Prof.(Dr.) Shweta', 'Bansal'], role: 'Convenor', emoji: '👩‍💼', image: shwetaImg, imageFit: 'cover', imagePosition: '50% 22%', socials: { linkedin: 'https://www.linkedin.com/in/prof-dr-shweta-a-bansal-a0495b17/' } },
      { name: 'Dr. Monika Khatkar', role: 'Convenor', emoji: '👩‍💼', image: monikaImg, imagePosition: '50% 25%', socials: { linkedin: 'https://www.linkedin.com/in/dr-monika-khatkar-81253133/' } },
      { name: 'Dr. Amar Saraswat', role: 'Convenor', emoji: '👨‍💼', image: amarSirImg, imagePosition: '58% center', socials: { linkedin: 'https://www.linkedin.com/in/dr-amar-saraswat-b67453188/' } },
    ],
  },
  {
    title: 'LEAD ORGANIZERS',
    members: [
      { name: 'Nishant Sharma', role: 'Operations Lead', emoji: '👨‍💻', image: nishantImg, phone: '+91 87086 39550', socials: { linkedin: 'https://www.linkedin.com/in/nishant-sharma-24b089285/', instagram: 'https://www.instagram.com/er_nishant_sharma_/' } },
      { name: 'Yashraj Pahuja', role: 'Technical Lead', emoji: '👩‍💻', image: yashrajImg, imagePosition: '50% 42%', phone:  '+91 99537 90039', socials: { linkedin: 'https://www.linkedin.com/in/yashraj-pahuja-28a34b325/', instagram: '#' } },
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
      whileHover={{ y: -8, borderColor: 'rgba(242,200,107,0.95)', boxShadow: '0 18px 44px rgba(242,200,107,0.24)' }}
      className="relative bg-[#07090f]/97 border-2 border-[#d9b45f] rounded-[30px] px-6 sm:px-7 py-8 sm:py-9 w-[min(88vw,320px)] min-h-[450px] text-center overflow-hidden group cursor-default transition-colors duration-300"
    >
      {/* Panel glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/45 to-transparent pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute left-6 bottom-6 w-8 h-8 border-l-[3px] border-b-[3px] border-[#d9b45f]" />

      {/* Avatar */}
      <div className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 sm:mb-7 border-[3px] border-[#d9b45f]/92 bg-white/95 flex items-center justify-center text-5xl overflow-hidden shadow-[0_0_28px_rgba(242,200,107,0.24)]">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{
              objectFit: member.imageFit || 'cover',
              objectPosition: member.imagePosition || 'center',
            }}
          />
        ) : (
          member.emoji
        )}
      </div>

      <h4 className="relative z-10 font-orbitron text-[clamp(1.35rem,4.2vw,1.85rem)] font-semibold tracking-wide text-[#b7f6ff] mb-3 leading-tight" style={{ textShadow: '0 0 14px rgba(0,229,255,0.58)' }}>
        {member.nameLines ? member.nameLines.map((line) => <span key={line} className="block">{line}</span>) : member.name}
      </h4>
      <p className="relative z-10 text-[#f0cf7b] text-[clamp(0.95rem,2.9vw,1.2rem)] tracking-wide mb-3">{member.role}</p>
      {member.phone && <p className="relative z-10 font-orbitron text-[clamp(0.82rem,2.4vw,0.98rem)] text-[#f0cf7b] mb-6">☎ {member.phone}</p>}

      {/* Socials */}
      <div className="relative z-10 flex gap-4 justify-center mt-auto">
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border-2 border-[#d9b45f]/82 bg-[#2b1f03]/55 flex items-center justify-center text-[#f0cf7b] hover:border-[#f0cf7b] hover:text-[#ffe39f] transition-colors text-2xl leading-none shadow-[0_0_12px_rgba(242,200,107,0.2)]">
            in
          </a>
        )}
        {member.socials.instagram && (
          <a href={member.socials.instagram} aria-label="Instagram"
            className="w-12 h-12 rounded-full border-2 border-[#d9b45f]/82 bg-[#2b1f03]/55 flex items-center justify-center text-[#f0cf7b] hover:border-[#f0cf7b] hover:text-[#ffe39f] transition-colors text-xl leading-none shadow-[0_0_12px_rgba(242,200,107,0.2)]">
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
            <div className={group.title === 'CONVENORS' ? 'grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center' : 'flex flex-wrap gap-5 justify-center'}>
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
