import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, BookOpen, GraduationCap, MapPin } from 'lucide-react'

const Card = ({ icon: Icon, title, description, badge, isRed = false }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`relative p-8 rounded-[3rem] border transition-all duration-300 group ${
      isRed 
        ? 'bg-ncsu-red text-white border-ncsu-red shadow-xl shadow-ncsu-red/20' 
        : 'bg-white text-ncsu-black border-slate-100 shadow-xl shadow-slate-200/50'
    }`}
  >
    <div className={`mb-8 w-14 h-14 rounded-2xl flex items-center justify-center ${
      isRed ? 'bg-white/20' : 'bg-ncsu-red/10 text-ncsu-red'
    }`}>
      <Icon size={24} />
    </div>
    <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 block ${
      isRed ? 'text-white/70' : 'text-ncsu-red'
    }`}>
      {badge}
    </span>
    <h3 className="text-3xl font-black mb-4 tracking-tighter italic font-serif leading-tight">{title}</h3>
    <p className={`text-sm leading-relaxed font-medium ${isRed ? 'text-white/80' : 'text-slate-500'}`}>
      {description}
    </p>

    {!isRed && (
      <div className="absolute top-6 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon size={80} />
      </div>
    )}
  </motion.div>
)

export default function Problem() {
  return (
    <section id="problem" className="relative z-10 py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20 max-w-5xl mx-auto">
          <div className="flex-1">
             <span className="text-ncsu-red font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">The Gap</span>
            <h2 className="text-5xl md:text-7xl font-black text-ncsu-black mb-6 tracking-tighter leading-tight">
              The <span className="text-ncsu-red underline decoration-4 underline-offset-8 italic">Engagement</span> Gap.
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              In rural and low-income North Carolina schools, STEM labs are often non-existent.
            </p>
          </div>
          <div className="text-ncsu-red/20 hidden md:block">
            <AlertTriangle size={64} strokeWidth={1} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card 
            icon={MapPin}
            badge="The Location"
            title="Rural NC Deserts"
            description="Schools in rural counties lack the core funding to purchase expensive physics lab equipment, leaving students behind."
          />
          <Card 
            icon={BookOpen}
            badge="The Barrier"
            title="Textbook Learning"
            description="When physics is only taught via paper, students miss the tactile 'aha!' moment that sparks a lifelong interest in engineering."
          />
          <Card 
            icon={GraduationCap}
            badge="The Impact"
            title="Future Pipelines"
            description="Without early exposure, rural students are less likely to choose STEM majors, widening the inequality in the NC tech workforce."
            isRed={true}
          />
        </div>

         <div className="mt-20 max-w-5xl mx-auto bg-slate-50 p-1.5 rounded-[3rem] shadow-xl shadow-slate-100/50 border border-slate-100 flex flex-col md:flex-row items-center gap-12 px-12 py-12">
          <div className="text-7xl font-black text-ncsu-red tracking-tighter italic">82%</div>
          <div className="text-lg font-medium text-slate-500 border-l border-slate-200 pl-12 leading-relaxed">
            North Carolina elementary schools in rural districts report <span className="font-black text-ncsu-black italic underline decoration-ncsu-red">zero budget</span> for lab-specific equipment like ramps or precision friction kits.
          </div>
        </div>
      </div>
    </section>
  )
}
