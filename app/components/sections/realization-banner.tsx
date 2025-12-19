"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cpu, 
  ArrowUpRight, 
  Zap, 
  Layers 
} from "lucide-react";

// Definicja typu projektu
interface ProjectData {
  type: "internal" | "external";
  title: string;
  category: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export function ProjectBanner({ data }: { data?: ProjectData }) {
  // Domyślne dane (jeśli nie przekażesz propsów)
  const project = data || {
    type: "internal",
    title: "Logistics Core Dashboard",
    category: "System Operacyjny",
    description: "Migracja z 40 arkuszy Excel do jednej, centralnej aplikacji webowej. Pełna automatyzacja rozliczeń kierowców i statusów zleceń.",
    techStack: ["Next.js 14", "Supabase", "React Query", "Tailwind"],
    metrics: [
      { label: "Oszczędność czasu", value: "40h / msc" },
      { label: "Redukcja błędów", value: "100%" },
    ],
  };

  const isInternal = project.type === "internal";
  const accentColor = isInternal ? "text-[#00C7BE]" : "text-[#007AFF]";
  const accentBg = isInternal ? "bg-[#00C7BE]" : "bg-[#007AFF]";
  const accentBorder = isInternal ? "group-hover:border-[#00C7BE]/50" : "group-hover:border-[#007AFF]/50";
  const glowShadow = isInternal ? "group-hover:shadow-[0_0_40px_-10px_rgba(0,199,190,0.2)]" : "group-hover:shadow-[0_0_40px_-10px_rgba(0,122,255,0.2)]";

  return (
    <section className="py-8 px-4 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`
          group relative w-full max-w-6xl mx-auto 
          bg-zinc-900/40 backdrop-blur-xl 
          border border-white/10 rounded-3xl overflow-hidden
          transition-all duration-500
          ${accentBorder} ${glowShadow}
        `}
      >
        {/* Tło Grid (dekoracja) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
          
          {/* STREFA 1: KONTEKST BIZNESOWY (6 kolumn) */}
          <div className="lg:col-span-6 p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 ${accentColor}`}>
                  {project.type === "internal" ? "Internal Ops" : "External Perf"}
                </span>
                <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">
                   / {project.category}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white group cursor-pointer w-fit">
              Zobacz Case Study <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* STREFA 2: TECH STACK (3 kolumny) */}
          <div className="lg:col-span-3 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-6 text-zinc-500">
              <Layers className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider">Technologia</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {project.techStack.map((tech, i) => (
                <div key={i} className="flex items-center gap-3 group/item">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-white/10 text-zinc-400 group-hover/item:text-white transition-colors">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-zinc-300 font-mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* STREFA 3: WYNIKI (3 kolumny) */}
          <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white/[0.02] to-transparent">
            <div className="flex items-center gap-2 mb-6 text-zinc-500">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider">Wyniki (ROI)</span>
            </div>

            <div className="space-y-6">
              {project.metrics.map((metric, i) => (
                <div key={i}>
                  <div className={`text-3xl font-bold tracking-tight mb-1 ${accentColor}`}>
                    {metric.value}
                  </div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide font-mono">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        {/* Pasek postępu / Dekoracja na dole */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-white/5">
           <div className={`h-full w-1/3 ${accentBg}`} />
        </div>
      </motion.div>
    </section>
  );
}