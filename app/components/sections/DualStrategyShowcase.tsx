"use client";

import { useState } from "react";
import { Activity, Database, TrendingUp, BarChart3, Zap, Globe, ArrowRight,Layers } from "lucide-react";

type Strategy = "internal" | "external";

export const InteractiveShowcase = () => {
  const [activeStrategy, setActiveStrategy] = useState<"internal" | "external">("external");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
      {/* Toggle Switch */}
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="w-[90%] md:w-[40%] relative bg-slate-900/30 backdrop-blur-md rounded-full p-1.5 md:p-2 border border-slate-700/50">
          <div
            className="absolute top-1.5 bottom-1.5 md:top-2 md:bottom-2 w-[calc(50%-0.5rem)] rounded-full border border-teal-500/50 transition-all duration-500 ease-out"
            style={{
              left: activeStrategy === "external" ? "0.375rem" : "calc(50% + 0.375rem)",
              backgroundColor: activeStrategy === "internal" ? "rgba(20, 184, 166, 0.1)" : "rgba(59, 130, 246, 0.1)",
              borderColor: activeStrategy === "internal" ? "rgba(20, 184, 166, 0.3)" : "rgba(59, 130, 246, 0.3)",
            }}
          />
          <div className="w-full relative flex gap-2">
            <button
              onClick={() => setActiveStrategy("external")}
              className={`w-1/2 py-3 md:py-4 rounded-full font-mono text-xs md:text-sm text-center font-medium transition-all duration-300 ${
                activeStrategy === "external" ? "text-blue-400" : "text-slate-400 hover:text-slate-300"
              }`}
            >
Optymalizacja
            </button>
             <button
              onClick={() => setActiveStrategy("internal")}
              className={`w-1/2 py-3 md:py-4 text-center rounded-full font-mono text-xs md:text-sm font-medium transition-all duration-300 ${
                activeStrategy === "internal" ? "text-teal-300" : "text-slate-400 hover:text-slate-300"
              }`}
>
              Wizerunek
            </button>
          </div>
        </div>
      </div>

      {/* Main Showcase Area */}
      {/* Zmieniono stałą wysokość na min-h, aby content się mieścił na mobile */}
     <div className={`relative min-h-[900px] md:min-h-[670px]  bg-slate-900/40 backdrop-blur-xl rounded-3xl p-4 md:p-6 overflow-hidden`}>
        
        {/* === INTERNAL EFFICIENCY VIEW === */}
       <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            activeStrategy === "internal"
              ? "opacity-100 scale-100 pointer-events-auto z-10"
              : "opacity-0 scale-95 pointer-events-none z-0"
          }`}
        >
          <div className="h-full rounded-3xl border border-teal-500/20 overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Sidebar Admina */}
            <div className="hidden md:block w-64 bg-slate-950/50 border-r border-slate-700/50 p-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                  <Database className="w-5 h-5 text-teal-400" />
                </div>
                <span className="font-mono text-sm font-semibold text-slate-300">Custom ERP</span>
              </div>
              <nav className="space-y-2">
                {["Panel Główny", "Analityka Zysku", "Zlecenia", "Automatyzacje", "Ustawienia"].map((item, i) => (
                  <div
                    key={item}
                    className={`px-4 py-3 rounded-lg text-sm font-mono transition-colors ${
                      i === 0
                        ? "bg-teal-500/10 text-teal-300 border border-teal-500/30"
                        : "text-slate-500 hover:text-slate-400 hover:bg-slate-800/50"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </nav>
             
            </div>

            {/* Nagłówek Mobile dla Internal */}
            <div className="md:hidden p-4 border-b border-slate-700/50 bg-slate-950/50 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-teal-400" />
                  <span className="font-mono text-sm font-semibold text-slate-300">Centralny System Operacyjny</span>
               </div>
            </div>

            {/* Treść Główna Internal */}
            <div className="flex-1 p-4 md:p-8">
              <div className="mb-6">
                <h2 className="text-xl md:text-3xl font-mono font-bold text-slate-200 mb-2">Dedykowany CRM</h2>
                <p className="text-xs md:text-sm text-teal-500/80 font-mono uppercase tracking-widest">Inżynieria biznesu</p>
              </div>

              {/* Statystyki */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 ">
                {[
                  { label: "Oszczędność czasu", value: "100+ h", icon: Zap },
                  { label: "Błędy operacyjne", value: "-94%", icon: Activity },
                  { label: "Wzrost wydajności", value: "+12.4%", icon: TrendingUp },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-slate-950/50 rounded-xl border border-slate-700/30 p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <metric.icon className="w-4 h-4 text-teal-400" />
                      <span className="text-xs font-mono text-slate-500">{metric.label}</span>
                    </div>
                    <p className="text-2xl font-mono font-bold text-teal-300">{metric.value}</p>
                  </div>
                ))}
              </div>

              {/* Wykres Wydajności */}
              <div className="bg-slate-950/50 rounded-xl border border-slate-700/30 p-4 md:p-6 mb-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-mono font-semibold text-slate-300">Skalowanie bez chaosu </h3>
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-teal-500/50 border border-teal-400"></div>
                    <span className="text-xs font-mono text-slate-500">Przepustowość procesów</span>
                  </div>
                </div>
                <div className="flex items-end justify-between h-32 gap-1 md:gap-2">
                  {[45, 52, 48, 65, 72, 68, 85, 82, 94, 92, 96, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-teal-500/50 to-teal-400/30 rounded-t-sm border-t border-teal-400/50 transition-all duration-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Tabela Aktywności */}
              <div className="bg-slate-950/50 rounded-xl border border-slate-700/30 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-4 h-4 text-slate-500" />
                  <span className="text-xs font-mono text-slate-500">Ostatnie automatyzacje</span>
                </div>
                <div className="space-y-3">
                  {[
                    { task: "Generowanie faktury (automatyczne)", status: "Sukces", time: "2 min temu" },
                    { task: "Synchronizacja danych z mapą", status: "Sukces", time: "15 min temu" },
                    { task: "Raport zysku za bieżący miesiąc", status: "Gotowe", time: "1 h temu" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs font-mono border-b border-slate-800/50 pb-2 last:border-0 last:pb-0">
                      <span className="text-slate-400">{item.task}</span>
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className={item.status === "Sukces" || item.status === "Gotowe" ? "text-teal-400" : "text-yellow-400"}>
                          {item.status}
                        </span>
                        <span className="text-slate-600 hidden sm:inline">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === EXTERNAL GROWTH VIEW === */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            activeStrategy === "external"
              ? "opacity-100 scale-100 pointer-events-auto z-10"
              : "opacity-0 scale-95 pointer-events-none z-0"
          }`}
        >
          <div className="h-full rounded-3xl border border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-500/10 flex flex-col">
            <div className="relative flex-1 flex flex-col">
              
              {/* Hero Header */}
              <div className="relative flex-1 flex flex-col items-center justify-center p-6 md:p-12 bg-gradient-to-b from-slate-900/50 to-slate-950/50">
                
                {/* Speed Score Badge (Mobile: Top relative, Desktop: Absolute right) */}
                <div className="relative mb-8 md:mb-0 md:absolute md:top-8 md:right-8 w-full md:w-auto flex justify-center md:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                    <div className="relative bg-slate-950/80 backdrop-blur-sm rounded-2xl border border-blue-400/50 p-4 md:p-6 shadow-lg shadow-blue-500/20">
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl font-mono font-bold text-blue-300 mb-1 md:mb-2">100</div>
                        <div className="text-[10px] md:text-xs font-mono text-blue-400/70 tracking-wider">SPEED SCORE</div>
                      </div>
                      <div className="mt-2 md:mt-3 flex gap-1 justify-center">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="max-w-xl text-center space-y-4 md:space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-400/30 mb-2 md:mb-4">
                    <Zap className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                    <span className="text-[10px] md:text-xs font-mono text-blue-300 tracking-wider">LIGHTNING FAST</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-mono font-bold text-white leading-tight text-balance">
                    Wizerunek, który{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                      Sprzedaje
                    </span>
                  </h1>

                  <p className="text-sm md:text-xl text-slate-400 font-mono leading-relaxed text-pretty px-2 md:px-0">
                    Szybkie strony Next.js, które pozycjonują Cię jako lidera rynku.
                  </p>

                  <div className="grid md:grid-cols-2 w-3/4 lg:w-full mx-auto items-center justify-center gap-3 md:gap-4 pt-4 md:pt-6">
                    <a href="/calendar" className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 bg-blue-500 hover:bg-blue-400 rounded-xl font-mono font-semibold text-white transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 border border-blue-400/50 text-sm md:text-base">
                      <span className="flex items-center justify-center gap-2">
                        Konsultacja
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                    <a href="/External" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-slate-900/50 hover:bg-slate-800/50 rounded-xl font-mono font-semibold text-slate-300 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50 backdrop-blur-sm text-sm md:text-base">
                      Jak działamy?
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/80 backdrop-blur-sm border-t border-blue-500/20 pb-8 p-4 md:py-10">
                <div className="grid grid-cols-2 md:flex md:items-center md:justify-around gap-6 md:gap-0">
                  {[
                    { icon: Layers, label: "Headless CMS", value: "Custom" },
                    { icon: Globe, label: "Szybkość ładowania", value: "<50ms" },
                    { icon: Zap, label: "LCP Score", value: "0.8s" },
                    { icon: TrendingUp, label: "Konwersja", value: "A+" },
                  ].map((feature) => (
                    <div key={feature.label} className="text-center flex flex-col items-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 mb-2 md:mb-3">
                        <feature.icon className="w-6 h-6 md:w-5 md:h-5 text-blue-400" />
                      </div>
                      <div className="text-xl md:text-2xl font-mono font-bold text-blue-300 mb-1">{feature.value}</div>
                      <div className="text-[10px] md:text-xs font-mono text-slate-500">{feature.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}