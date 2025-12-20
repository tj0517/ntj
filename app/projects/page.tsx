"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Dodano AnimatePresence
import { ArrowUpRight, Code2, X, TrendingUp, Globe, Server } from "lucide-react"; // Dodano ikony
import Hero from "../components/sections/hero-ie";
import { CTABanner } from "../components/sections/cta";
import { GlowingEffect } from "../components/ui/glowing-effect";
import EngineeringShowcase from "../components/sections/EngineeringShowcase";


const projects = [
  {
    id: 1,
    title: "Freelancer Hub: Automation SaaS",
    client: "Internal / Global Market",
    type: "internal",
    description: "Autorski system operacyjny automatyzujący pracę freelancera. Zastąpił chaos mailowy i Excela, wprowadzając AI do raportowania.",
    metrics: [
      { label: "Oszczędność czasu", value: "~20h / mc" },
      { label: "Raportowanie", value: "Automatyczne (AI)" },
    ],
    stack: ["Next.js", "Supabase", "OpenAI API", "PWA"],
    imageGradient: "from-blue-900/40 to-indigo-900/40",
    // Dodatkowe dane do banera
    details: "System z architekturą RBAC (Admin/Klient). Automatyczne generowanie umów, moduł AI podsumowujący postępy oraz wersja PWA na telefon.",
    link: "#", 
  },
  {
    id: 2,
    title: "Seaclouds: Oil & Gas Renewal",
    client: "Seaclouds.eu",
    type: "external",
    description: "Transformacja z wolnego kreatora na ultra-szybki Next.js. Strategia SEO zapewniła czołowe pozycje w niszy w zaledwie 30 dni.",
    metrics: [
      { label: "SEO Rank", value: "TOP 3 (30 dni)" },
      { label: "Load Time", value: "8.2s → 0.8s" },
    ],
    stack: ["Next.js", "Sanity CMS", "Tailwind", "Vercel"],
    imageGradient: "from-cyan-900/40 to-emerald-900/40",
    details: "Profesjonalny wizerunek wsparł negocjacje przy wygranym kontrakcie OZE. Architektura Headless pozwala na edycję Case Studies bez pomocy IT.",
    link: "https://seaclouds.eu",
  },
  {
    id: 3,
    title: "Shadowlab: Hybrid E-commerce",
    client: "Shadowlab",
    type: "external",
    description: "Nowoczesna platforma sprzedażowa w stylu sportowym. Łączy szybkość B2C (dla klienta detalicznego) z logiką kont B2B.",
    metrics: [
      { label: "Architektura", value: "Headless" },
      { label: "UX Score", value: "Premium" },
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    imageGradient: "from-slate-900/40 to-purple-900/40",
    details: "Dedykowany panel użytkownika z historią zamówień. System ról i uprawnień oraz tryb Dark Mode zoptymalizowany pod konwersję.",
    link: "https://shadowlab.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden">
      <Hero tile="Nasze *podejście* oraz Realizacje" color="bg-indigo-600/40" />
      <div className="border-y-[0.5px] border-white/20">
        <EngineeringShowcase />
      </div>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Nie pokazujemy obrazków. <br />
            <span className="text-gray-400">Pokazujemy wyniki biznesowe.</span>
          </motion.h2>
          <p className="text-gray-500 text-lg">
            Każda linijka kodu w TJ Engineering ma cel: zarobić pieniądze (External) lub zaoszczędzić czas (Internal). Oto dowody.
          </p>
        </div>
      </section>

      <section className="pb-32 px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}


const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false); // Stan otwarcia banera

  const isInternal = project.type === "internal";
  const accentColor = isInternal ? "#00C7BE" : "#007AFF";
  const accentClass = isInternal ? "text-[#00C7BE]" : "text-[#007AFF]";
  const bgAccent = isInternal ? "bg-[#00C7BE]" : "bg-[#007AFF]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[550px] group cursor-pointer"
      onClick={() => setIsOpen(true)} // Kliknięcie w kartę otwiera szczegóły
    >
      {/* Główny kontener karty */}
      <div className="relative h-full rounded-3xl border border-white/10 bg-zinc-900/30 overflow-hidden transition-colors duration-500 hover:border-white/20">
        
        {/* Efekt Glow - znika gdy otwarte, żeby nie razić */}
        {!isOpen && (
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
            glowColor={accentColor}
          />
        )}

        {/* --- STANDARDOWA ZAWARTOŚĆ KARTY --- */}
        <div className="relative flex flex-col h-full p-1">
          {/* Obrazek */}
          <div className={`h-56 shrink-0 rounded-2xl relative border border-white/5 flex items-center justify-center overflow-hidden m-2 relative`}>
            {/* Siatka techniczna w tle obrazka */}
<Image  
              src={`/projects/projects-${project.id}.png`}   
              alt={project.title}
fill
              className="object-cover object-top w-full h-full"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/5 ${accentClass}`}>
                {isInternal ? "Internal Ops" : "External Perf"}
              </span>
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-auto line-clamp-3">
              {project.description}
            </p>

            {/* Skrócone Metryki */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {project.metrics.map((m: any, i: number) => (
                <div key={i} className="bg-black/40 rounded-lg p-3 border border-white/5">
                  <div className={`text-lg font-bold font-mono ${accentClass}`}>{m.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- INTERAKTYWNY BANNER (OVERLAY) --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="no-scrollbar absolute inset-0 z-20 bg-[#09090B]/95 backdrop-blur-xl p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()} // Zapobiega zamykaniu przy kliknięciu w treść
            >
              {/* Header Overlay'a */}
              <div className="flex justify-between items-start mb-8">
                <div>
                   <div className={`text-xs font-mono mb-2 uppercase tracking-widest ${accentClass}`}>Project Details</div>
                   <h3 className="text-2xl font-bold text-white">{project.client}</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Treść Szczegółowa */}
              <div className="space-y-6 flex-grow overflow-y-auto no-scrollbar">
                
                {/* Tech Description */}
                <div className="space-y-2">
                   <h4 className="flex items-center gap-2 text-sm font-bold text-gray-300">
                     <Server className="w-4 h-4" /> Architektura
                   </h4>
                   <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-white/10 pl-4">
                     {project.details}
                   </p>
                </div>

                {/* Full Stack Grid */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-3">
                    <Code2 className="w-4 h-4" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rozszerzone Metryki */}
                <div>
                   <h4 className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-3">
                    <TrendingUp className="w-4 h-4" /> Key Performance Indicators
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.metrics.map((m: any, i: number) => (
                      <div key={i} className="flex justify-between items-center p-3 rounded bg-white/[0.03] border border-white/5">
                        <span className="text-xs text-gray-500 uppercase">{m.label}</span>
                        <span className={`font-mono font-bold ${accentClass}`}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer z Linkiem */}
              <div className="pt-6 mt-4 border-t border-white/10">
              { project.link !== "#" && ( 
                <a 
                  href={project.link} 
                  className={`w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-transform active:scale-95 ${bgAccent} hover:brightness-110`}
                >
                  <Globe className="w-4 h-4" /> Zobacz Online
                </a>
              )}
              </div>


            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};