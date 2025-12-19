"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 mt-24">

      {/* Top Section - 4 Column Grid */}
      <div className="relative overflow-clip max-w-7xl mx-auto px-6 py-16">
              <div 
  className="absolute top-0 right-1/2 translate-x-1/2  -translate-y-8/12   w-125 h-100 bg-gradient-to-r from-blue-600/80 to-cyan-400/80 blur-[150px]  pointer-events-none"
  style={{ 
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' 
  }}
/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {/* Col 1 - Brand */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-2 mb-4">
              <a href="#" className="flex items-center group">
          <div className="font-sans font-bold text-white text-4xl tracking-tighter flex items-end">
            TJ
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 mb-1 ml-1.5 animate-pulse"></span>
          </div>
        </a>
            </div>
            <p className="text-gray-400 font-mono text-sm">Engineered for Growth.</p>
          </div>

          {/* Col 2 - Internal Ops */}
          <div className="lg:px-8">
  <h3 className="font-mono text-white hover:text-cyan-400 hover:cursor-pointer text-sm font-semibold mb-4 uppercase tracking-wider">
    <a href="/optymalizacja-wewnetrzna">Optymalizacja</a>
  </h3>
  <ul className="space-y-3">
    <li>
      <Link href="#" className="text-gray-400 transition-colors duration-200 text-sm">
        Automatyzacja procesów
      </Link>
    </li>
    <li>
      <Link href="#" className="text-gray-400 transition-colors duration-200 text-sm">
        Dedykowane panele (Dashboardy)
      </Link>
    </li>
    <li>
      <Link href="#" className="text-gray-400 transition-colors duration-200 text-sm">
        Systemy CRM i ERP
      </Link>
    </li>
  </ul>
</div>

{/* Col 3 - External Perf */}
<div className="lg:px-8">
  <h3 className="font-mono text-white text-sm font-semibold mb-4 uppercase tracking-wider">Wizerunek</h3>
  <ul className="space-y-3">
    <li>
      <Link href="#" className="text-gray-400 transition-colors duration-200 text-sm">
        Strony klasy Premium
      </Link>
    </li>
    <li>
      <Link href="#" className="text-gray-400 transition-colors duration-200 text-sm">
        Techniczne SEO
      </Link>
    </li>
    <li>
      <Link href="#" className="text-gray-400 transition-colors duration-200 text-sm">
        Optymalizacja wydajności
      </Link>
    </li>
  </ul>
</div>

          {/* Col 4 - Connect */}
          <div className="lg:pl-8">
            <h3 className="font-mono text-white text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h3>
            <div className="space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-xs text-gray-400 font-mono">Status: Dostępny</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2025 TJ Consultancy. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}