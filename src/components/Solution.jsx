import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, DollarSign, Leaf, Printer, Sparkles } from 'lucide-react'

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-ncsu-red/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-ncsu-red/5 rounded-full blur-3xl opacity-50" />
            
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-square flex items-center justify-center bg-white group">
              <div className="absolute inset-0 bg-gradient-to-br from-ncsu-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
               <div className="flex flex-col items-center gap-10 p-12 text-center group">
                <Printer size={140} className="text-ncsu-red stroke-[0.5px] group-hover:scale-110 transition-transform duration-700" />
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-ncsu-black tracking-tighter italic font-serif">The Cycloid Ramp</h3>
                  <p className="text-slate-400 max-w-sm font-medium leading-relaxed">
                    Precision engineered in NC State's engineering labs. 
                    A professional-grade educational tool.
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <span className="px-6 py-3 bg-ncsu-red text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-ncsu-red/20 hover:scale-105 transition-transform">
                    $1.83 / unit
                  </span>
                  <span className="px-6 py-3 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
                    PLA Sustainable
                  </span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-16 translate-y-[-50%] bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 hidden lg:block hover:scale-105 transition-transform">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shadow-sm">
                    <Leaf size={20} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-800">100% Recyclable</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                    <Cpu size={20} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-800">Precision Fit</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <span className="text-ncsu-red font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Our Solution</span>
              <h2 className="text-5xl md:text-7xl font-black text-ncsu-black mb-10 leading-tight tracking-tighter">
                A <span className="text-ncsu-red italic font-black underline decoration-4 underline-offset-8">3D-Printed</span> <br />
                Physics Lab Kit.
              </h2>
              
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
                We leverage additive manufacturing to close the resource gap. Our kits are designed to be printed locally in schools or shipped at a fraction of the cost of traditional laboratory equipment.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ncsu-red border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:bg-ncsu-red group-hover:text-white transition-all">
                  <Sparkles size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black italic tracking-tight">Sustainable Excellence</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Made from biodegradable PLA, our ramps are safe for students and designed for long-term classroom reuse.</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ncsu-red border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:bg-ncsu-red group-hover:text-white transition-all">
                  <Printer size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black italic tracking-tight">Rapid Accessibility</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Open-source designs that can be printed on any standard classroom 3D printer in under 4 hours.</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ncsu-red border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:bg-ncsu-red group-hover:text-white transition-all">
                  <DollarSign size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black italic tracking-tight">Radical Affordability</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Manufacturing cost of just $1.83, obliterating the $200+ commercial barrier for low-income districts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
