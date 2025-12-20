"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Search, Layers, Code2, Rocket,TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const caseStudies = [
  {
  id: "optimization", 
  title: "Freelancer Hub: Automatyzacja Zarządzania Projektami",
  problem: "Chaos organizacyjny, setki maili i problem z zarządzaniem wieloma projektami jednocześnie.",
  goal: "Zmniejszenie czasu obsługi operacyjnej klientów o 50%.",
  solution: "Wprowadzenie dedykowanej aplikacji webowej (Freelancer Hub) automatyzującej zarządzanie projektami, obieg dokumentów oraz komunikację.",
  phases: [
    {
      id: 1,
      phase: "Discovery",
      polishPhase: "Analiza",
      icon: Search,
      insight: "Ręczne odpisywanie na maile 'o przebiegu realizacji' i tworzenie umów zajmowało 30% czasu pracy.",
      action: "Zmapowaliśmy proces komunikacji i zidentyfikowaliśmy punkty krytyczne do automatyzacji.",
      metric: "Odzyskany czas: ~20h/msc",
    },
    {
      id: 2,
      phase: "Architecture",
      polishPhase: "Projekt",
      icon: Layers,
      insight: "Klienci czuli się zagubieni bez stałego wglądu w postępy prac.",
      action: "Zaprojektowaliśmy architekturę RBAC (Role-Based Access Control) z oddzielnym panelem dla Klienta i Admina.",
      metric: "Przejrzystość procesu: 100%",
    },
    {
      id: 3,
      phase: "Development",
      polishPhase: "Kod",
      icon: Code2,
      insight: "Zarządzanie fakturami i plikami w różnych folderach generowało błędy.",
      action: "Stworzyliśmy centralny dashboard w Next.js integrujący zadania, pliki i płatności w jednym miejscu.",
      metric: "Błędy w dokumentacji: 0",
    },
    {
      id: 4,
      phase: "Deployment",
      polishPhase: "Start",
      icon: Rocket,
      insight: "Klienci chcieli mieć możliwość akceptacji etapów z poziomu telefonu.",
      action: "Wdrożyliśmy technologię PWA, umożliwiając instalację aplikacji na telefonie bez AppStore.",
      metric: "Dostępność mobilna: Native-like",
    },
    {
      id: 5,
      phase: "Growth",
      polishPhase: "Skalowanie",
      icon: TrendingUp,
      insight: "Tworzenie cotygodniowych raportów statusowych stało się wąskim gardłem.",
      action: "Zaimplementowaliśmy model AI, który automatycznie generuje podsumowania prac dla klienta.",
      metric: "Raportowanie: Automatyczne",
    },
  ],
  },
  {
  id: "Wizerunek",
    title: "Seaclouds: Oil & Gas webiste Redesign & SEO Optimization",
    problem: "Strona oparta na wolnym kreatorze wizualnym, niewidoczna w Google i nieoddająca doświadczenia firmy.",
    goal: "Zbudowanie autorytetu w sieci i zdobycie czołowych pozycji w Google dla fraz kluczowych w branży Oil & Gas.",
    solution: "Migracja z kreatora na ultra-szybki Next.js + Sanity CMS oraz wdrożenie technicznego SEO.",
    phases: [
      {
        id: 1,
        phase: "Discovery",
        polishPhase: "Audyt",
        icon: Search,
        insight: "Stary kreator generował za dużo kodu, który był nieczytelny dla robotów Google.",
        action: "Przeprowadziliśmy audyt techniczny wykazujący brak indeksacji kluczowych podstron ofertowych.",
        metric: "Widoczność SEO: ~0",
      },
      {
        id: 2,
        phase: "Architecture",
        polishPhase: "Design",
        icon: Layers,
        insight: "W branży Oil & Gas zaufanie buduje się precyzją, a nie przypadkowym układem z szablonu.",
        action: "Zaprojektowaliśmy dedykowany UI eksponujący projekty i case studies, budujący wizerunek eksperta.",
        metric: "Odbiór marki: Premium",
      },
      {
        id: 3,
        phase: "Development",
        polishPhase: "Kod",
        icon: Code2,
        insight: "Aby wyprzedzić konkurencję, strona musiała być technicznie perfekcyjna.",
        action: "Wdrożyliśmy Next.js z pełną optymalizacją Core Web Vitals.",
        metric: "Performance: 99/100",
      },
      {
        id: 4,
        phase: "Deployment",
        polishPhase: "Content",
        icon: Rocket,
        insight: "Klient potrzebował łatwego narzędzia do publikacji treści na stronie.",
        action: "Wdrożenie Sanity CMS pozwoliło na szybkie tworzenie wpisów pod konkretne frazy niszowe.",
        metric: "Edycja treści: Intuicyjna",
      },
      {
        id: 5,
        phase: "Growth",
        polishPhase: "Wyniki",
        icon: TrendingUp,
        insight: "Dzięki czystemu kodowi Google błyskawicznie zaindeksowało nową strukturę.",
        action: "Połączenie wydajności Next.js ze strategią słów kluczowych dało szybkie efekty.",
        metric: "TOP 3 w Google: < 30 dni",
      },
    ],
  },
]

export default function EngineeringShowcase() {
const [activeStep, setActiveStep] = useState<number>(1)
  const [selectedCase, setSelectedCase] = useState<string>("freelancer")
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const currentCase = caseStudies.find((c) => c.id === selectedCase) || caseStudies[0]
useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index + 1)
            }
          })
        },

        { threshold: 0.5, rootMargin: "-50px 0px -50px 0px" },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [selectedCase])

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-technical text-[#00C7BE] text-sm mb-4 tracking-wider uppercase">
            Custom Problems, Standardized Precision
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Każde wdrożenie jest inne.
            <br />
            <span className="text-zinc-400">Proces jest niezawodny.</span>
          </h2>

          <div className="mt-12 flex items-center gap-4">
            <span className="font-technical text-xs text-zinc-500 uppercase tracking-wider">Example:</span>
            <div className="relative inline-flex bg-zinc-900/50 border border-zinc-800 rounded-lg p-1">
              {caseStudies.map((caseStudy) => (
                <button
                  key={caseStudy.id}
                  onClick={() => setSelectedCase(caseStudy.id)}
                  className={`
                    relative px-4 py-2 rounded-md font-technical text-xs uppercase tracking-wider
                    transition-colors duration-300
                    ${selectedCase === caseStudy.id ? "text-black" : "text-zinc-400 hover:text-zinc-200"}
                  `}
                >
                  {selectedCase === caseStudy.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 ${selectedCase==="external" ? "bg-blue-500" : "bg-cyan-400"} rounded-md`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{caseStudy.id}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Sticky Context Card */}
          <div className="lg:sticky lg:top-20 h-fit">
            <motion.div
              key={selectedCase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm p-8 relative overflow-hidden">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C7BE]/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-px w-8 bg-[#00C7BE]" />
                    <span className="font-technical text-[#00C7BE] text-xs tracking-wider uppercase">Case Study</span>
                  </div>

                  <h3 className={`text-2xl font-bold mb-6 text-pretty text text-transparent bg-clip-text ${selectedCase==="external" ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-[#007AFF] to-cyan-400`}>{currentCase.title}</h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span className="font-technical text-xs text-zinc-400 uppercase tracking-wide">Problem</span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">{currentCase.problem}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span className="font-technical text-xs text-zinc-400 uppercase tracking-wide">Goal</span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">{currentCase.goal}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C7BE]" />
                        <span className="font-technical text-xs text-zinc-400 uppercase tracking-wide">Solution</span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">{currentCase.solution}</p>
                    </div>
                  </div>

                  {/* Connecting Line Animation */}
                  <motion.div
                    className="absolute -right-12 top-1/2 hidden lg:block"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center">
                      <div className="h-px w-20 bg-gradient-to-r from-[#00C7BE] to-transparent" />
                      <div className="w-2 h-2 rounded-full bg-[#00C7BE]" />
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-32">
            {currentCase.phases.map((phase, index) => {
              const Icon = phase.icon
              const isActive = activeStep === phase.id
              const color = (selectedCase === "external" ? "bg-blue-500" : "bg-cyan-400")

              return (
                <motion.div
                  key={`${selectedCase}-${phase.id}`}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Vertical Line Connector */}
                  {index < currentCase.phases.length - 1 && (
                    <div className="absolute left-6 top-16 w-px h-32 bg-gradient-to-b from-zinc-700 to-transparent" />
                  )}

                  <div className="flex gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          boxShadow: isActive ? "0 0 30px rgba(0, 199, 190, 0.5)" : "0 0 0px rgba(0, 199, 190, 0)",
                        }}
                        transition={{ duration: 0.3 }}
                        className={`
                          relative w-12 h-12 rounded-lg flex items-center justify-center
                          transition-colors duration-300
                          ${isActive ? "bg-[#00C7BE] text-black" : "bg-zinc-800 text-zinc-400"}
                        `}
                      >
                        <Icon className="w-5 h-5" />

                        {/* Corner Accents */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-current opacity-50" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-current opacity-50" />
                      </motion.div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-technical text-xs text-zinc-500 uppercase tracking-wider">
                          {phase.phase}
                        </span>
                        <div className="h-px flex-1 bg-zinc-800" />
                        <motion.span
                          animate={{
                            opacity: isActive ? 1 : 0.5,
                            color: isActive ? "#00C7BE" : "#71717a",
                          }}
                          className="font-technical text-sm"
                        >
                          0{phase.id}
                        </motion.span>
                      </div>

                      <motion.h4
                        animate={{
                          color: isActive ? "#ffffff" : "#a1a1aa",
                        }}
                        className="text-xl md:text-2xl font-bold mb-3"
                      >
                        {phase.polishPhase}
                      </motion.h4>

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0.7,
                        }}
                        className="mb-4 p-3 bg-zinc-800/30 border-l-2 border-zinc-700 rounded-r"
                      >
                        <span className="font-technical text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                          Insight
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">{phase.insight}</p>
                      </motion.div>

                      <motion.p
                        animate={{
                          color: isActive ? "#e4e4e7" : "#71717a",
                        }}
                        className="text-sm leading-relaxed font-light mb-4"
                      >
                        {phase.action}
                      </motion.p>

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0.5,
                        }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00C7BE]/10 border border-[#00C7BE]/30 rounded"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#00C7BE]" />
                        <span className="font-technical text-xs text-[#00C7BE]">{phase.metric}</span>
                      </motion.div>

                      {/* Active State Glow Line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="h-0.5 bg-gradient-to-r from-[#00C7BE] to-transparent mt-4 origin-left"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
