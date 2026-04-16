import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Sparkles, ArrowRight, ArrowDown, Flag } from 'lucide-react'

// ... existing milestones ...
const milestones = [
  { date: "Jan 21", title: "Idea Brainstorming", description: "First workshop at NC State, identifying the STEM accessibility problem." },
  { date: "Jan 30", title: "Deep Research", description: "Analyzing current curriculum gaps in rural NC school districts." },
  { date: "Feb 14", title: "Prototyping", description: "Design of our first 3D-printed Brachistochrone curve kit." },
  { date: "April 16", title: "FEDD Day", description: "Final presentation and deployment of our Physics Lab Kits." },
]

const MiniConfetti = () => {
  return (
    <div className="absolute -top-16 left-1/2 -translateX-1/2 w-48 h-48 pointer-events-none z-30 overflow-hidden" style={{ transform: 'translateX(-50%)' }}>
      {[...Array(15)].map((_, i) => {
        const isRed = i % 2 === 0;
        return (
          <motion.div
            key={i}
            initial={{ y: -20, x: 96 + (Math.random() * 80 - 40), opacity: 0, scale: 0 }}
            animate={{ 
              y: [0, 150], 
              x: 96 + (Math.random() * 120 - 60),
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            className={`absolute w-1.5 h-1.5 shadow-sm ${isRed ? 'bg-ncsu-red' : 'bg-slate-900'}`}
            style={{ borderRadius: i % 3 === 0 ? '50%' : '2px' }}
          />
        )
      })}
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white text-ncsu-black border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-ncsu-red font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">The Journey</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Our Design Cycle</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">From a classroom spark to a field-ready physics kit.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-0 md:gap-4 max-w-6xl mx-auto relative mt-20">
          {milestones.map((m, idx) => {
            const isLast = idx === milestones.length - 1;
            
            return (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 relative flex flex-row md:flex-col gap-6 group"
            >
              {isLast && <MiniConfetti />}
              
              {/* Mobile Vertical Arrow connecting nodes */}
              {!isLast && (
                <div className="md:hidden flex flex-col items-center absolute top-8 left-[15px] bottom-0 opacity-30 group-hover:opacity-100 transition-opacity z-0 pointer-events-none">
                  <div className="w-[2px] flex-1 bg-slate-300 rounded-full" />
                  <ArrowDown size={14} className="text-slate-400 shrink-0 bg-white z-10" />
                </div>
              )}

              {/* Top Node & Desktop Line wrapper */}
              <div className="flex flex-col md:flex-row items-center md:w-full shrink-0 relative z-10 pt-1 md:pt-0">
                {/* Node */}
                <div className={`w-8 h-8 rounded-full bg-white border-2 border-slate-200 shadow-sm group-hover:border-ncsu-red flex items-center justify-center relative z-20 transition-all duration-300 ${isLast ? 'border-ncsu-red shadow-[0_0_15px_rgba(204,0,0,0.2)]' : ''}`}>
                  {isLast ? (
                    <Flag size={12} className="text-ncsu-red fill-ncsu-red/20 group-hover:scale-125 transition-transform" />
                  ) : (
                    <div className="w-2.5 h-2.5 bg-slate-300 group-hover:bg-ncsu-red rounded-full transition-all duration-300 group-hover:scale-125" />
                  )}
                </div>

                {/* Desktop Horizontal Arrow connecting nodes */}
                {!isLast && (
                  <div className="hidden md:flex flex-1 items-center px-4 opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="h-[2px] w-full bg-slate-300 rounded-full" />
                    <ArrowRight size={16} className="text-slate-400 shrink-0 -ml-1" />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 pb-16 md:pb-0 pt-0 md:pt-4 z-10">
                <div className="flex items-center gap-2 text-ncsu-red font-black text-[10px] tracking-widest uppercase mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Calendar size={14} />
                  {m.date}
                </div>
                <h3 className="text-2xl font-black mb-3 italic tracking-tight">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {m.description}
                </p>
                
                {idx === milestones.length - 1 && (
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-ncsu-red/5 text-ncsu-red text-[10px] font-black uppercase tracking-widest rounded-full border border-ncsu-red/20 shadow-sm">
                    <CheckCircle2 size={14} className="fill-ncsu-red/10" /> Goal Reached
                  </div>
                )}
              </div>
            </motion.div>
          )})}
        </div>

        {/* Future Products Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 text-center relative overflow-hidden group max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ncsu-red/5 to-transparent opacity-100" />
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-ncsu-red shadow-sm border border-slate-100">
                <Sparkles size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tighter italic font-serif">Expanding the Lab</h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              👀 More STEM-learning products coming soon, with the same affordability in mind. 
              Our mission doesn't stop at the Brachistochrone curve—we aim to democratize access to the entire physics lab.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

