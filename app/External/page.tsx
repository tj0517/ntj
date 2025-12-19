"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Gem, ShieldCheck, ArrowRight } from 'lucide-react';
import Hero from '../components/sections/hero-ie';
import { SplitSection } from '../components/sections/main_section';
import { CTABanner } from '../components/sections/cta';
import { ModulesGrid, GridItem } from '../components/sections/grid';

const tab = [
  {
    id: 1,
    element: <GridItem
            icon={<Zap className="h-8 w-8 text-[#00C7BE]" />}
            title="Szybkie strony Next.js"
            description="Budujemy strony osiągające 100/100. Odzyskaj ruch dzięki błyskawicznemu ładowaniu."
          />
  },
  {
    id: 2,
    element: <GridItem
            icon={<Gem className="h-8 w-8 text-[#00C7BE]" />}
            title="Strony Premium"
            description="Dedykowane rozwiązania dla biznesu. Wizerunek lidera wsparty nowoczesną technologią."
          />
  },
  {
    id: 3,
    element: <GridItem
            icon={<ShieldCheck className="h-8 w-8 text-[#00C7BE]" />}
            title="Headless CMS & SEO"
            description="Perfekcyjne techniczne SEO i bezpieczeństwo bez WordPressa. Pełna skalowalność treści."
          />
  }
]


// Komponent pomocniczy: Animowany Licznik 100/100
const AnimatedScore = () => {
  const [score, setScore] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 sekundy
      const steps = 100;
      const intervalTime = duration / steps;
      
      const timer = setInterval(() => {
        setScore((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-64 h-64 mx-auto flex items-center justify-center">
      {/* Outer glowing ring */}
      <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-[#00C7BE]/20 to-[#007AFF]/20 blur-2xl animate-pulse opacity-60" />

      {/* Main ring SVG */}
      <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 100 100">
        {/* Tło paska */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
        
        {/* Pasek postępu */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradientScore)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            filter: "drop-shadow(0 0 8px rgba(0, 122, 255, 0.5))",
          }}
        />
        <defs>
          <linearGradient id="gradientScore" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C7BE" />
            <stop offset="100%" stopColor="#007AFF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Score text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-6xl font-bold text-white font-mono drop-shadow-md">{score}</div>
        <div className="text-sm text-gray-400 mt-1 font-medium tracking-wide">PERFORMANCE</div>
      </div>
    </div>
  );
};

export default function ExternalPerformancePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <Hero 
        tile="Wizerunek *Lidera* dla Twojej Firmy" 
        color="bg-blue-500/40" 
      />

      {/* 2. Main Problem/Solution Split */}
      <SplitSection
        title="Tworzymy szybkie strony WWW, które konwertują."
        description="Dostarczamy Strony Premium oparte o nowoczesną architekturę. Budujemy wydajne strony Next.js zintegrowane jako strony Headless CMS, co gwarantuje nie tylko wynik 100/100 w testach prędkości, ale także doskonałe techniczne SEO. To rozwiązania szyte na miarę, sprawdzające się idealnie jako strony dla deweloperów/OZE, gdzie liczy się każdy szczegół i maksymalna wydajność."
        ctaText="Darmowa konsultacja"
        ctaHref="#audit"
        visual={<AnimatedScore />}
      />

      {/* 3. Solution: Headless Architecture */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-blue-600/10 to-transparent">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Headless Architecture</h2>
            <p className="text-xl text-gray-400">Rozdzielamy content od prezentacji</p>
          </motion.div>

          {/* Technical Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              
              {/* Box 1: CMS */}
              <div className="w-full md:w-80 p-8 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="text-sm font-mono text-[#00C7BE] mb-2">Backend</div>
                <h3 className="text-2xl font-bold mb-4">Sanity CMS</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Content Database</p>
                <div className="mt-6 space-y-2">
                  <div className="h-2 bg-white/10 rounded w-3/4" />
                  <div className="h-2 bg-white/10 rounded w-1/2" />
                  <div className="h-2 bg-white/10 rounded w-2/3" />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center gap-2">
                <ArrowRight className="w-8 h-8 text-[#007AFF] rotate-90 md:rotate-0" />
                <div className="text-xs font-mono text-gray-500">API</div>
              </div>

              {/* Box 2: Frontend */}
              <div className="w-full md:w-80 p-8 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="text-sm font-mono text-[#007AFF] mb-2">Frontend</div>
                <h3 className="text-2xl font-bold mb-4">Next.js</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Global Edge Network</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-12 bg-gradient-to-br from-[#007AFF]/20 to-[#00C7BE]/20 rounded border border-white/10" />
                  <div className="h-12 bg-gradient-to-br from-[#007AFF]/20 to-[#00C7BE]/20 rounded border border-white/10" />
                  <div className="h-12 bg-gradient-to-br from-[#007AFF]/20 to-[#00C7BE]/20 rounded border border-white/10" />
                </div>
              </div>
            </div>

            {/* Benefits Labels */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-full text-sm font-mono text-gray-300">
                ✓ Bezpieczeństwo
              </div>
              <div className="px-6 py-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-full text-sm font-mono text-gray-300">
                ✓ Szybkość
              </div>
              <div className="px-6 py-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-full text-sm font-mono text-gray-300">
                ✓ Brak wtyczek
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Key Benefits Grid */}
      <ModulesGrid tab={tab} title='Filary sukcesu' />

      {/* 5. CTA */}
      <CTABanner />
      
    </div>
  );
}