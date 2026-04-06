import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

// --- EASY LOGO SETUP ---
// Replace the string below with your image path (e.g., "/logo.png" or "https://example.com/logo.png")
const LOGO_IMAGE = "/imPACKted.png"; // Set to your logo in public/ folder

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-ncsu-red rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-ncsu-red/20 group-hover:scale-110 transition-transform overflow-hidden">
            {LOGO_IMAGE ? (
              <img
                src={LOGO_IMAGE}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            ) : (
              "P"
            )}
          </div>
          <span className="font-serif font-black text-xl tracking-tighter">
            im<span className="text-ncsu-red italic font-black">PACK</span>ted
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <a href="#problem" className="hover:text-ncsu-red transition-colors">The Problem</a>
          <a href="#solution" className="hover:text-ncsu-red transition-colors">Our Solution</a>
          <a href="#timeline" className="hover:text-ncsu-red transition-colors">Design Cycle</a>
          <a href="#team" className="hover:text-ncsu-red transition-colors">Team</a>
          <a
            href="#contact"
            className="bg-ncsu-red text-white px-6 py-3 rounded-full hover:bg-slate-900 transition-all shadow-lg shadow-ncsu-red/20"
          >
            Get Involved
          </a>
        </div>

        <button className="md:hidden text-ncsu-black">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  )
}
