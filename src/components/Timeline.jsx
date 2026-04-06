import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2 } from 'lucide-react'

const milestones = [
  { date: "Jan 21", title: "Idea Brainstorming", description: "First workshop at NC State, identifying the STEM accessibility problem." },
  { date: "Jan 30", title: "Deep Research", description: "Analyzing current curriculum gaps in rural NC school districts." },
  { date: "Feb 14", title: "Prototyping", description: "Design of our first 3D-printed Brachistochrone curve kit." },
  { date: "April 16", title: "FEDD Day", description: "Final presentation and deployment of our Physics Lab Kits." },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white text-ncsu-black border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-ncsu-red font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">The Journey</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Our Design Cycle</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">From a classroom spark to a field-ready physics kit.</p>
        </div>

        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Vertical Line for Mobile, Horizontal for Desktop */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-100 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-12 relative">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pt-12"
              >
                {/* Node */}
                <div className="absolute top-[-5px] left-0 w-2.5 h-2.5 bg-ncsu-red rounded-full z-10 shadow-[0_0_10px_rgba(204,0,0,0.3)]" />
                
                <div className="group">
                  <div className="flex items-center gap-2 text-ncsu-red font-black text-[10px] tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Calendar size={14} />
                    {m.date}
                  </div>
                  <h3 className="text-2xl font-black mb-3 italic tracking-tight">{m.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {m.description}
                  </p>
                  
                  {idx === milestones.length - 1 && (
                    <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-ncsu-red/5 text-ncsu-red text-[10px] font-black uppercase tracking-widest rounded-full border border-ncsu-red/20 shadow-sm">
                      <CheckCircle2 size={14} className="fill-ncsu-red/10" /> Goal Reached
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
