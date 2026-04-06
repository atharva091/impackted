import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, GraduationCap } from 'lucide-react'

const Path = ({ d, progress, color, finishFirst = false }) => {
  const pathLength = useTransform(progress, [0.05, finishFirst ? 0.38 : 0.44], [0, 1], { clamp: true })
  const pathRef = useRef(null)
  const [point, setPoint] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    if (!pathRef.current) return
    const updatePosition = () => {
      const length = pathRef.current.getTotalLength()
      const p = pathRef.current.getPointAtLength(pathLength.get() * length)
      setPoint({ x: p.x, y: p.y })
    }
    const unsubscribe = pathLength.on('change', updatePosition)
    updatePosition()
    return () => unsubscribe()
  }, [pathLength])

  return (
    <>
      <path ref={pathRef} d={d} fill="none" stroke="none" />
      <motion.circle
        cx={point.x}
        cy={point.y}
        r="14"
        fill={color}
        className="marble shadow-2xl"
        style={{ filter: `drop-shadow(0 6px 16px rgba(0,0,0,0.4))` }}
      />
    </>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // TIMELINES for 400vh
  // Phase 1 (Ramp): Solid 0-0.4, Fades to 0 by 0.5
  const rampOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0])
  
  // Phase 2 (Big Text): Starts fading in at 0.42, FULLY SOLID at 0.55, stays till end (1.0)
  const textOpacity = useTransform(scrollYProgress, [0.42, 0.52, 1], [0, 1, 1])
  const textScale = useTransform(scrollYProgress, [0.45, 0.6], [0.5, 1])
  const textY = useTransform(scrollYProgress, [0.45, 0.6], [50, 0])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white text-ncsu-black overflow-visible z-0 border-b-0">
      {/* Sticky container stays pinned for the duration of the 400vh scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* PHASE 1: Brachistochrone Animation */}
        <motion.div 
          style={{ 
            opacity: rampOpacity,
            zIndex: useTransform(scrollYProgress, p => p > 0.48 ? 0 : 5)
          }}
          className="relative flex flex-col items-center justify-center w-full h-full px-6 flex-shrink-0"
        >
          <div className="text-center max-w-4xl z-10 mb-4 mt-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
               <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ncsu-red/5 border border-ncsu-red/20 text-ncsu-red text-[10px] font-black tracking-widest uppercase mb-4">
                <GraduationCap size={14} className="fill-ncsu-red" /> NC State Engineering E101
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-2 leading-tight tracking-tighter text-ncsu-black font-lora">
                Bridging the <br />
                <span className="text-ncsu-red italic font-serif">STEM Gap</span>
              </h1>
            </motion.div>
          </div>

          <div className="relative w-full max-w-7xl h-[60vh] flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl overflow-visible">
              <defs>
                <linearGradient id="rampGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5F5FF" />
                  <stop offset="100%" stopColor="#E6E6FA" />
                </linearGradient>
              </defs>
              <path d="M 30 30 L 30 365 L 375 365 L 30 30" fill="url(#rampGrad)" stroke="#B57EDC" strokeWidth="1.5" className="opacity-90" />
              <g className="opacity-15">
                 {[...Array(10)].map((_, i) => (<path key={i} d={`M 30 30 L ${30 + i * 35} 365`} stroke="#6B4191" strokeWidth="0.5" fill="none" />))}
              </g>
              <g className="opacity-40">
                <path d="M 50 40 L 350 350" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 45 45 Q 45 350 345 350" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 40 50 C 40 250, 80 350, 340 350" fill="none" stroke="#CC0000" strokeWidth="4" opacity="0.3" />
              </g>
              <Path d="M 50 40 L 350 350" progress={scrollYProgress} color="#94a3b8" />
              <Path d="M 45 45 Q 45 350 345 350" progress={scrollYProgress} color="#475569" />
              <Path d="M 40 50 C 40 250, 80 350, 340 350" progress={scrollYProgress} color="#CC0000" finishFirst={true} />
            </svg>
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
              className="absolute -bottom-8 flex flex-col items-center gap-2 text-ncsu-red/40"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
        </motion.div>

        {/* PHASE 2: Huge Text Reveal (PINNED) */}
        <motion.div 
          style={{ 
            opacity: textOpacity,
            scale: textScale,
            y: textY,
            position: 'absolute',
            zIndex: 10,
            pointerEvents: useTransform(scrollYProgress, p => p > 0.42 ? 'auto' : 'none')
          }}
          className="flex flex-col items-center justify-center text-center px-6 w-full h-full flex-shrink-0"
        >
          <span className="text-ncsu-red font-black text-sm uppercase tracking-[0.6em] mb-12 opacity-40">Team Engineering Mission</span>
          <h2 className="text-[14vw] md:text-[250px] font-black tracking-tighter leading-none italic select-none text-ncsu-black font-lora">
            TEAM <br />
            <span className="text-ncsu-red drop-shadow-[0_25px_70px_rgba(204,0,0,0.4)]">imPACKted.</span>
          </h2>
          <div className="mt-20 w-64 h-2 bg-ncsu-red/5 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleX: scrollYProgress }} 
               className="h-full bg-ncsu-red origin-left" 
             />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
