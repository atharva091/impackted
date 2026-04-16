import React from 'react'
import { motion } from 'framer-motion'
import { Beaker, Mail, MessageSquare, Palette, Terminal } from 'lucide-react'

const members = [
  { name: "Atharva", role: "Team Manager", bio: "Mechanical Engineering major", image: "/team/atharva.png" },
  { name: "Riley", role: "Designer", bio: "Civil Engineering major", image: "/team/riley.png" },
  { name: "Reese", role: "Materials Procurement", bio: "Industrial Engineering major", image: "/team/reese.png" },
  { name: "Madelynn", role: "Modeler", bio: "Aerospace Engineering major", image: "/team/madelynn.png" },
]

const TeamCard = ({ member, idx }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-ncsu-red/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />

      <div className="relative mb-8 w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center overflow-hidden text-5xl font-black text-ncsu-red italic border-2 border-dashed border-ncsu-red/20 group-hover:border-ncsu-red/40 transition-colors shadow-inner">
        {!imgError ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          member.name[0]
        )}
      </div>

      <div className="relative space-y-4">
        <h3 className="text-3xl font-black text-ncsu-black italic tracking-tighter font-serif group-hover:text-ncsu-red transition-colors">
          {member.name}
        </h3>
        <p className="text-ncsu-red font-black text-[10px] tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">{member.role}</p>
        <p className="text-slate-500 text-sm leading-relaxed font-medium mb-12">
          {member.bio}
        </p>

        <div className="flex gap-4 items-center justify-center pt-8 border-t border-slate-50">
          <button className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:bg-ncsu-red hover:text-white transition-all shadow-sm">
            <Terminal size={18} />
          </button>
          <button className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:bg-ncsu-red hover:text-white transition-all shadow-sm">
            <MessageSquare size={18} />
          </button>
          <button className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:bg-ncsu-red hover:text-white transition-all shadow-sm">
            <Mail size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-ncsu-red font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Meet The Pack</span>
            <h2 className="text-5xl md:text-7xl font-black text-ncsu-black mb-8 leading-tight tracking-tighter">
              The <span className="text-ncsu-red underline decoration-4 underline-offset-8 italic">imPACKted</span> Team.
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              A group of NC State engineering students dedicated to bridging the STEM gap.
            </p>
          </div>
          <p className="text-slate-400 max-w-sm text-xs text-right hidden md:block italic tracking-tight font-medium">
            Our multidisciplinary approach combines engineering, education, and community advocacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {members.map((m, i) => (
            <TeamCard key={m.name} member={m} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
