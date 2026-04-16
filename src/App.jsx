import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import LabSheet from './components/LabSheet'
import Timeline from './components/Timeline'
import Team from './components/Team'
import References from './components/References'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white font-serif text-slate-900 leading-relaxed antialiased">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(255,255,255,1)] mt-[-100vh]">
        <Problem />
        <Solution />
        <LabSheet />
        <Timeline />
        <Team />
        <References />
        <Contact />
        
        <footer className="bg-white py-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] border-t border-slate-100">
          <p>© 2026 Team imPACKted • NC State University E101</p>
        </footer>
      </div>
    </div>
  )
}

export default function Root() {
  return <App />;
}
