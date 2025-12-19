"use client"

import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Workflow, 
  TrendingUp, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight,
} from 'lucide-react';
import Hero from '../components/sections/hero-ie';
import { SplitSection } from '../components/sections/main_section';
import { CTABanner } from '../components/sections/cta';
import { ModulesGrid, GridItem } from '../components/sections/grid';
import { GlowingEffect } from "@/app/components/ui/glowing-effect";



// Pomocniczy komponent do wizualizacji Dashboardu w Hero
const DashboardVisual = () => (
  <div className="relative w-full max-w-lg mx-auto aspect-video bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-teal-900/20 group">
    {/* Sidebar */}
    <div className="absolute left-0 top-0 bottom-0 w-16 bg-zinc-900/50 border-r border-white/5 flex flex-col items-center py-4 gap-4">
      <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30"></div>
      <div className="w-6 h-1 rounded bg-zinc-700"></div>
      <div className="w-6 h-1 rounded bg-zinc-700"></div>
      <div className="w-6 h-1 rounded bg-zinc-700"></div>
    </div>
    
    {/* Header */}
    <div className="absolute top-0 left-16 right-0 h-12 border-b border-white/5 flex items-center px-4 justify-between bg-zinc-900/20">
      <div className="w-24 h-2 rounded bg-zinc-700"></div>
      <div className="flex gap-2">
         <div className="w-6 h-6 rounded-full bg-zinc-800"></div>
      </div>
    </div>

    {/* Content Area */}
    <div className="absolute top-12 left-16 right-0 bottom-0 p-4 grid grid-cols-2 gap-4">
       {/* Stat Cards */}
       <div className="col-span-2 grid grid-cols-3 gap-3">
          {[1,2,3].map(i => (
             <div key={i} className="bg-zinc-900/50 border border-white/5 rounded-lg p-3">
                <div className="w-4 h-4 rounded bg-teal-500/20 mb-2"></div>
                <div className="w-12 h-2 rounded bg-zinc-600 mb-1"></div>
                <div className="w-8 h-2 rounded bg-zinc-700"></div>
             </div>
          ))}
       </div>
       {/* Chart Area */}
       <div className="col-span-1 bg-zinc-900/50 border border-white/5 rounded-lg p-3 flex items-end gap-1 justify-between">
          {[40, 70, 50, 90, 60, 80].map((h, i) => (
             <div key={i} style={{height: `${h}%`}} className="w-full bg-gradient-to-t from-teal-500/40 to-teal-400/10 rounded-t-sm"></div>
          ))}
       </div>
       {/* List Area */}
       <div className="col-span-1 bg-zinc-900/50 border border-white/5 rounded-lg p-2 space-y-2">
          {[1,2,3,4].map(i => (
             <div key={i} className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-teal-500"></div>
               <div className="w-full h-1.5 rounded bg-zinc-700"></div>
             </div>
          ))}
       </div>
    </div>
    
    {/* Overlay Glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 via-transparent to-transparent pointer-events-none"></div>
  </div>
);

export default function InternalOperationsPage() {
const tab = [
  {
    id: 1,
    element: <GridItem
            icon={<TrendingUp className="h-8 w-8 text-[#00C7BE]" />}
            title="Aplikacje biznesowe & MVP" // 
            description="Tworzenie oprogramowania, które sprawia, że firma działa szybciej i generuje większy zysk." // 
          />
  },
  {
    id: 2,
    element: <GridItem
            icon={<Workflow className="h-8 w-8 text-[#00C7BE]" />}
            title="Automatyzacja firm" // 
            description="Faktura generuje się automatycznie, eliminując setki godzin miesięcznie marnowane na „kopiuj-wklej” z maili do tabelek." // [cite: 22, 28]
          />
  },
  {
    id: 3,
    element: <GridItem
            icon={ <Smartphone className="h-8 w-8 text-[#00C7BE]" />}
            title="Systemy ERP dla MŚP" // 
            description="Budowa Centralnego Systemu Operacyjnego, który zastępuje niesynchronizowane arkusze i przywraca kontrolę nad zyskiem."
          />
  }
];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden">
      
      <div className="bg-[#0A0A0A] min-h-screen">
      

          <Hero 
            tile="Dedykowany *CRM i ERP* dla Twojej Firmy" 
            color="bg-teal-600/40" 
          />



      <div className='relative z-10 bg-[#0A0A0A]'>
        <SplitSection
          title="Odzyskaj kontrolę nad skalą."
          description="Twoi pracownicy gubią zlecenia? Nie wiesz ile zarobiłeś w tym miesiącu? Wdrażamy Centralny System Operacyjny, który zamienia chaos w Excelach na uporządkowany dashboard. Zastanawiasz się jak zoptymalizować procesy w firmie? Mamy na to sprawdzone rozwiązania."
          ctaText="Skonsultuj swój problem"
          ctaHref="/contact"
          visual={
            <DashboardVisual />
          }
        />
        
        {/* Tu wstawiasz resztę sekcji (Diagram, Benefits), one też będą w tym kontenerze lub muszą mieć bg-[#0A0A0A] */}
      </div>

  </div>

      {/* Solution: The Operating System Diagram */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Centralny System Operacyjny</h2>
            <p className="text-xl text-gray-400">Jedno źródło prawdy zamiast setek plików</p>
          </motion.div>

          {/* Transformation Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              
              {/* LEFT: Chaos (Problem) */}
              <div className="w-full md:w-80 p-8 bg-zinc-900/30 backdrop-blur-sm border border-red-500/10 rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-sm font-mono text-red-400 mb-2">Przed</div>
                <h3 className="text-2xl font-bold mb-4">Chaos Skali</h3>
                <div className="flex flex-wrap gap-3 mt-6 opacity-60">
                   <div className="p-2 bg-zinc-800 rounded border border-white/5"><FileSpreadsheet className="w-6 h-6 text-red-400"/></div>
                   <div className="p-2 bg-zinc-800 rounded border border-white/5 translate-y-2"><FileSpreadsheet className="w-6 h-6 text-orange-400"/></div>
                   <div className="p-2 bg-zinc-800 rounded border border-white/5"><FileSpreadsheet className="w-6 h-6 text-red-300"/></div>
                </div>
                <p className="text-gray-500 text-sm mt-6">Rozproszone dane, błędy ludzkie, brak wiedzy o zysku.</p>
              </div>

              {/* Arrow Transformation */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-1 bg-zinc-800 rounded-full relative overflow-hidden">
                   <motion.div 
                     className="absolute inset-0 bg-gradient-to-r from-red-500 to-teal-500"
                     initial={{ x: '-100%' }}
                     whileInView={{ x: '0%' }}
                     transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                   />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600 hidden md:block" />
              </div>

              {/* RIGHT: Order (Solution) */}
              <div className="w-full md:w-80 p-8 bg-zinc-900/80 backdrop-blur-xl border border-teal-500/30 rounded-3xl shadow-[0_0_50px_rgba(0,199,190,0.1)] relative">
                <div className="absolute top-0 right-0 p-4">
                   <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-sm font-mono text-[#00C7BE] mb-2">Po</div>
                <h3 className="text-2xl font-bold mb-4">Dedykowany CRM</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Database & Automation Core</p>
                
                <div className="space-y-3">
                   <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      <span>Automatyzacja Faktur</span>
                   </div>
                   <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      <span>Panel Pracownika (Mobile)</span>
                   </div>
                   <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      <span>Raporty Finansowe Live</span>
                   </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <ModulesGrid tab={tab} title='Moduły systemu' />      
      <CTABanner />
    </div>
  )
}