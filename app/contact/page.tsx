"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, ArrowRight, CheckCircle2, Linkedin } from "lucide-react";
import Hero from "../components/sections/hero-ie";

export default function ContactPage() {
  // Stan do zarządzania "trybem" formularza (internal vs external)
  const [activeType, setActiveType] = useState<"internal" | "external">("external");

  // Dynamiczne kolory w zależności od wyboru
  const activeColor = activeType === "internal" ? "text-[#00C7BE]" : "text-[#007AFF]";
  const activeBorder = activeType === "internal" ? "focus:border-[#00C7BE]" : "focus:border-[#007AFF]";
  const activeBg = activeType === "internal" ? "bg-cyan-400" : "bg-blue-500";
  const activeGlow = activeType === "internal" ? "shadow-[0_0_30px_rgba(0,199,190,0.3)]" : "shadow-[0_0_30px_rgba(0,122,255,0.3)]";

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden selection:bg-white/20">
      
      {/* 1. HERO - Minimalistyczne */}
      <Hero 
        tile="Start *Transformation* Contact Us" 
        color={activeType === "internal" ? "bg-teal-600/30" : "bg-blue-600/30"} 
      />

      <section className="py-20  relative z-10 border-y-[0.5px] border-white/20">
        <div className="grid lg:grid-cols-2 gap-16 items-start px-4 max-w-7xl mx-auto">
          
          {/* --- LEWA STRONA: KONTEKST --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Inżynierska precyzja.<br />
              <span className="text-gray-500">Biznesowe wyniki.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Tworzymy rozwiązania skrojone na miarę Twoich potrzeb.
              Dostosowujemy je do Twojego biznesu, abyś mógł osiągnąć więcej.
              Optymalizujemy procesy wewnętrzne i zwiększamy efektywność działań marketingowych.
            </p>

            {/* Dane kontaktowe */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-white/30 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-mono text-sm text-gray-500 uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:kontakt@tjengineering.pl" className="text-xl font-bold hover:text-white transition-colors">
                    tymonjezionek.web@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-zinc-900 border border-white/10">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-mono text-sm text-gray-500 uppercase tracking-wider mb-1">Lokalizacja</h3>
                  <p className="text-xl font-bold">Gdańsk, Polska</p>
                  <p className="text-sm text-gray-400">Działamy Globalnie (Zdalnie)</p>
                </div>
              </div>

              
              <a href="/calendar" rel="noopener noreferrer" className={`mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600/80 to-cyan-400/80 hover:scale-[1.02] hover:bg-gradient-to-l active:scale-[0.98] transition-all duration-300`}>
Darmowa Konsultacja
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* --- PRAWA STRONA: FORMULARZ "TERMINAL" --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Tło zmieniające kolor w zależności od wyboru */}
            <div className={`absolute top-0 right-0 w-64 h-64 ${activeBg} opacity-10 blur-[100px] pointer-events-none transition-colors duration-700`} />

            <form className="relative space-y-6">
              
              {/* Wybór ścieżki (Internal / External) */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setActiveType("external")}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                    activeType === "external" 
                      ? "bg-blue-600/10 border-blue-500 text-white" 
                      : "bg-transparent border-white/10 text-gray-500 hover:border-white/30"
                  }`}
                >
                  <div className="font-bold text-sm mb-1">Wizerunek</div>
                  <div className="text-xs opacity-70">Marketing & Technologia</div>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveType("internal")}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                    activeType === "internal" 
                      ? "bg-teal-600/10 border-teal-500 text-white" 
                      : "bg-transparent border-white/10 text-gray-500 hover:border-white/30"
                  }`}
                >
                  <div className="font-bold text-sm mb-1">Optymalizacja</div>
                  <div className="text-xs opacity-70">Systemy & Logika</div>
                </button>
              </div>

              {/* Pola formularza */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Imię i Nazwisko</label>
                  <input 
                    type="text" 

                    className={`w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-transparent transition-all duration-300 ${activeBorder}`}
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Email Firmowy</label>
                  <input 
                    type="email" 

                    className={`w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-transparent transition-all duration-300 ${activeBorder}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Opisz wyzwanie</label>
                  <textarea 
                    rows={4}
                    className={`w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-transparent transition-all duration-300 ${activeBorder}`}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className={` w-full overflow-clip py-4 mt-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative `}
              >
                <div className={`absolute  -top-20 -left-12 blur-xl w-32 h-32 rounded-full opacity-30 pointer-events-none ${activeBg}`}></div>
                <div className={`absolute -bottom-20 -right-12 blur-xl w-32 h-32 rounded-full opacity-30 pointer-events-none ${activeBg}`}></div>
                Wyślij Zgłoszenie <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                <CheckCircle2 className="w-3 h-3" /> Odpisujemy w max. 24h
              </div>

            </form>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
}