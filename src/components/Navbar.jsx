import React, { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// --- EASY LOGO SETUP ---
// Replace the string below with your image path (e.g., "/logo.png" or "https://example.com/logo.png")
const LOGO_IMAGE = "/imPACKted.png"; // Set to your logo in public/ folder

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [hasDismissedHint, setHasDismissedHint] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)

      // Show hint on mobile if scrolled deep and not yet dismissed
      if (window.innerWidth < 768 && window.scrollY > 1200 && !hasDismissedHint) {
        setShowHint(true)
      } else if (window.scrollY < 200) {
        setShowHint(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasDismissedHint])

  // Dismiss hint when menu is opened
  useEffect(() => {
    if (isMenuOpen) {
      setShowHint(false)
      setHasDismissedHint(true)
    }
  }, [isMenuOpen])

  const navLinks = [
    { name: "The Problem", href: "#problem" },
    { name: "Our Solution", href: "#solution" },
    { name: "Resources", href: "#resources" },
    { name: "Design Cycle", href: "#timeline" },
    { name: "Team", href: "#team" },
    { name: "References", href: "#references" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-8'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-ncsu-red transition-colors">{link.name}</a>
            ))}
            <a
              href="#contact"
              className="bg-ncsu-red text-white px-6 py-3 rounded-full hover:bg-slate-900 transition-all shadow-lg shadow-ncsu-red/20"
            >
              Get Involved
            </a>
          </div>

          {/* Mobile Menu Toggle & Hint */}
          <div className="flex items-center gap-4 md:hidden">
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="pointer-events-none"
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex items-center gap-2 px-3 py-1.5"
                  >
                    <span className="text-[7px] font-black uppercase tracking-widest whitespace-nowrap text-slate-900">
                      Use the <span className="text-ncsu-red">Menu</span> for navigation
                    </span>
                    <ArrowRight size={10} className="text-ncsu-red" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="text-ncsu-black p-2 hover:bg-slate-50 rounded-xl transition-colors relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-black italic tracking-tighter font-serif text-ncsu-black hover:text-ncsu-red transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-4 bg-ncsu-red text-white w-full py-6 rounded-3xl text-xs font-black uppercase tracking-[0.3em] shadow-2xl shadow-ncsu-red/30 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            Get Involved
          </a>
        </div>
      </div>
    </>
  )
}
