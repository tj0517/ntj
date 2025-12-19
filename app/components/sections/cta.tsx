"use client"

import { ArrowUpRight } from "lucide-react"

export function CTABanner() {
  return (
    <div className=" mx-auto md:py-16 bg-[#0A0A0A] w-[90%]  mx-auto max-w-7xl">
      <div className=" mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-black via-blue-950/10 to-blue-900/60 ">


        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-8 md:px-16 py-12 md:py-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-6">
           <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
  Inżynieria biznesu. 
  <br />
  Efektywność i automatyzacja firm.
</h2>
<p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
  Budujemy strony dla firm MŚP oraz systemy ERP i CRM dla biznesu.
  Dopasowujemy technologię do problemu, by Twój biznes działał szybciej i generował większy zysk.
</p>

            {/* CTA Button - Circular Icon + Text */}
            <div className="pt-4">
              <a href="/contact" className="group inline-flex items-center gap-4 hover:gap-5 transition-all duration-300">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                  Skonsultuj Swój Projekt
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Digital Core Sphere */}
          <div className="relative w-80 h-80 flex-shrink-0">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/20 rounded-full blur-3xl" />

            {/* Main sphere - concentric circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outermost ring */}
              <div
                className="absolute w-80 h-80 rounded-full border-2 border-blue-500/20 animate-pulse"
                style={{ animationDuration: "4s" }}
              />

              {/* Second ring */}
              <div
                className="absolute w-64 h-64 rounded-full border-2 border-blue-500/30 animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              />

              {/* Third ring */}
              <div
                className="absolute w-48 h-48 rounded-full border border-blue-400/40 animate-pulse"
                style={{ animationDuration: "2.5s", animationDelay: "1s" }}
              />

              {/* Core sphere */}
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 via-blue-600/40 to-cyan-500/30 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-500/50">
                {/* Inner glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/50 to-blue-500/50 blur-xl" />
              </div>

              {/* Data points - plus signs */}
              <div
                className="absolute top-16 right-20 text-blue-400/60 font-mono text-xl animate-pulse"
                style={{ animationDuration: "2s" }}
              >
                +
              </div>
              <div
                className="absolute bottom-20 left-16 text-blue-400/60 font-mono text-xl animate-pulse"
                style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}
              >
                +
              </div>
              <div
                className="absolute top-24 left-12 text-cyan-400/50 font-mono text-sm animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "0.6s" }}
              >
                –
              </div>
              <div
                className="absolute bottom-16 right-16 text-blue-400/50 font-mono text-sm animate-pulse"
                style={{ animationDuration: "2.8s", animationDelay: "0.9s" }}
              >
                –
              </div>

              {/* Connecting lines */}
              <div className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45" />
              <div className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}