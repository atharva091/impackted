import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Smartphone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="flex-1">
            <span className="text-ncsu-red font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Get in Touch</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">
              Let's <span className="text-ncsu-red italic font-black">imPACKt</span> <br />
              the Classroom.
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12 max-w-lg leading-relaxed">
              Join us in our mission to bring hands-on physics to every student in North Carolina. Whether you're an educator or a partner, we want to hear from you.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">General Inquiry</span>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-ncsu-red/5 text-ncsu-red rounded-xl flex items-center justify-center group-hover:bg-ncsu-red group-hover:text-white transition-all">
                    <Mail size={18} />
                  </div>
                  <span className="font-black text-sm tracking-tight">hello@impackted.org</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Phone Support</span>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-ncsu-red/5 text-ncsu-red rounded-xl flex items-center justify-center group-hover:bg-ncsu-red group-hover:text-white transition-all">
                    <Smartphone size={18} />
                  </div>
                  <span className="font-black text-sm tracking-tight">+1 (919) PACK-GAP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe" 
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ncsu-red/20 focus:border-ncsu-red transition-all placeholder:text-slate-300 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@ncsu.edu" 
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ncsu-red/20 focus:border-ncsu-red transition-all placeholder:text-slate-300 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 ml-4">Message</label>
                  <textarea 
                    rows="4"
                    placeholder="How can we help?" 
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ncsu-red/20 focus:border-ncsu-red transition-all placeholder:text-slate-300 resize-none font-medium"
                  />
                </div>
                <button 
                  className="w-full bg-ncsu-red text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-ncsu-red/20 hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
