"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTABanner() {
  
  // Warianty dla tekstu (sekwencyjne pojawianie się)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Opóźnienie między elementami
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  }

  return (
    <div className="mx-auto md:py-16] w-[90%] max-w-7xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-black via-blue-950/10 to-blue-900/60"
      >
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-8 md:px-16 py-12 md:py-16">
          
          {/* LEWA STRONA - Tekst */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 space-y-6 z-10"
          >
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Inżynieria biznesu. 
              <br />
              Efektywność i automatyzacja firm.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Budujemy strony dla firm MŚP oraz systemy ERP i CRM dla biznesu.
              Dopasowujemy technologię do problemu, by Twój biznes działał szybciej i generował większy zysk.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <a href="/contact" className="group inline-flex items-center gap-4 hover:gap-5 transition-all duration-300">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                  Skonsultuj Swój Projekt
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* PRAWA STRONA - Digital Core Sphere (Animowana) */}
          <div className="relative w-80 h-80 flex-shrink-0 select-none pointer-events-none">
            
            {/* Outer glow - pulsujący */}
            <motion.div 
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/20 rounded-full blur-3xl" 
            />

            {/* Główna sfera */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Ring 1 - Wolny obrót */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 rounded-full border border-blue-500/20 border-dashed"
              />

              {/* Ring 2 - Szybszy obrót w drugą stronę */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 rounded-full border border-blue-500/30 border-t-transparent border-l-transparent"
              />

              {/* Ring 3 - Pulsujący */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-48 h-48 rounded-full border border-blue-400/40"
              />

              {/* Core sphere - Oddychające jądro */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 via-blue-600/40 to-cyan-500/30 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-500/50 flex items-center justify-center"
              >
                 <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/50 to-blue-500/50 blur-xl" />
              </motion.div>

              {/* Data points - Lewitujące znaki */}
              <FloatingSymbol delay={0} className="top-16 right-20 text-blue-400/60 text-xl">+</FloatingSymbol>
              <FloatingSymbol delay={1} className="bottom-20 left-16 text-blue-400/60 text-xl">+</FloatingSymbol>
              <FloatingSymbol delay={0.5} className="top-24 left-12 text-cyan-400/50 text-sm">–</FloatingSymbol>
              <FloatingSymbol delay={1.5} className="bottom-16 right-16 text-blue-400/50 text-sm">–</FloatingSymbol>

              {/* Connecting lines - animowana przezroczystość */}
              <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45" 
              />
              <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45" 
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

interface FloatingSymbolProps {
  children: React.ReactNode
  className: string
  delay: number
}

// Pomocniczy komponent do lewitujących symboli, aby nie powtarzać kodu
function FloatingSymbol({ children, className, delay } : FloatingSymbolProps) {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
      className={`absolute font-mono pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  )
}