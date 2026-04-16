import React from 'react'
import { motion } from 'framer-motion'
import ThreeDViewer from './ThreeDViewer'
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

            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-square bg-white group flex flex-col">
              <div className="flex-grow relative">
                <ThreeDViewer />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-12 pt-0 text-center z-10 pointer-events-none">
                <div className="space-y-4 pointer-events-auto">
                  <h3 className="text-4xl font-black text-ncsu-black tracking-tighter italic font-serif">The Cycloid Ramp</h3>
                  <div className="flex gap-4 justify-center">
                    <span className="px-6 py-3 bg-ncsu-red text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-ncsu-red/20 hover:scale-105 transition-transform">
                      $2.05 / unit
                    </span>
                    <span className="px-6 py-3 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
                      PLA Sustainable
                    </span>
                  </div>
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
