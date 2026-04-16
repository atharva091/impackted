import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Microscope, PenTool } from 'lucide-react'

export default function LabSheet() {
  return (
    <section id="resources" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <span className="text-ncsu-red font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block text-left">Educational Framework</span>
                <h2 className="text-5xl md:text-6xl font-black text-ncsu-black mb-8 leading-tight tracking-tighter">
                  Beyond the <span className="text-ncsu-red italic underline decoration-4 underline-offset-8">Marble Race</span>.
                </h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  Our lab sheets transform the physical experiment from a simple race into a rigorous scientific inquiry. We empower students to bridge the gap between observation and engineering analysis, fostering the critical thinking skills essential for the next generation of innovators.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-ncsu-red/5 rounded-2xl flex items-center justify-center text-ncsu-red">
                    <Microscope size={24} />
                  </div>
                  <h4 className="text-lg font-black italic">Scientific Inquiry</h4>
                  <p className="text-slate-400 text-sm font-medium">Shifting from passive watching to active data-driven investigation and hypothesis testing.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-ncsu-red/5 rounded-2xl flex items-center justify-center text-ncsu-red">
                    <PenTool size={24} />
                  </div>
                  <h4 className="text-lg font-black italic">Critical Thinking</h4>
                  <p className="text-slate-400 text-sm font-medium">Students learn to analyze their findings and iterate on designs based on experimental evidence.</p>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="https://www.canva.com/design/DAHFdMnO0_U/YPtoU-0OHztD_voWhWSmog/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-ncsu-red transition-all shadow-xl shadow-slate-200"
                >
                  <FileText size={16} />
                  Download Full Lab Sheet
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10 rotate-1" />
              <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
                <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '129.4118%', paddingBottom: '0', overflow: 'hidden', borderRadius: '1.5rem' }}>
                  <iframe 
                    loading="lazy" 
                    style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }}
                    src="https://www.canva.com/design/DAHFdMnO0_U/YPtoU-0OHztD_voWhWSmog/view?embed" 
                    allowFullScreen 
                    allow="fullscreen"
                  >
                  </iframe>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  Preview: E101 Elementary STEM Lab Sheet
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
