"use client";

import React from 'react';
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer, 
  XAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { Lock, Gauge } from 'lucide-react';

const chartData = [
  { name: 'Mon', profit: 4000, efficiency: 2400 },
  { name: 'Tue', profit: 3000, efficiency: 1398 },
  { name: 'Wed', profit: 2000, efficiency: 9800 },
  { name: 'Thu', profit: 2780, efficiency: 3908 },
  { name: 'Fri', profit: 1890, efficiency: 4800 },
  { name: 'Sat', profit: 2390, efficiency: 3800 },
  { name: 'Sun', profit: 3490, efficiency: 4300 },
];

const CoreStrategy = () => {
  return (
    <section id="strategy" className="py-24 w-[90%]  mx-auto max-w-7xl">
      {/* Nagłówek Sekcji */}
      <div className="mb-16 md:mb-20 w-2/3 mx-auto">
        <h2 className=" text-center text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
          Dwa Filary Twojego <br/>
          <span className="text-blue-500 font-thin">Cyfrowego Wzrostu</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* === FILAR 1: INTERNAL OPS (DASHBOARD) === */}
        <div className="group relative bg-gradient-to-br from-blue-900/90 via-blue-950/40 to-black  rounded-2xl p-1 overflow-hidden h-[550px] flex flex-col transition-all hover:border-electric/30">
          {/* Efekt poświaty tła */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
            <div className="mb-6">
          <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
  Systemy ERP dla MŚP 
  <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">
    Dedykowany CRM 
  </span>
</h3>
<p className="text-gray-400 text-sm md:text-base max-w-sm">
  Aplikacje biznesowe  i budowa aplikacji MVP , które eliminują chaos skali  oraz piekło Excela. Twój Centralny System Operacyjny.
</p>
            </div>
            
            {/* Wizualizacja: Dashboard */}
            <div className="flex-1 bg-onyx border border-glass-border rounded-xl overflow-hidden relative shadow-2xl flex flex-col">
              {/* Fake Sidebar */}
              <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-glass-border bg-[#0f0f0f] flex flex-col items-center py-4 gap-3 z-20">
                 <div className="w-5 h-5 rounded bg-glass border border-glass-border"></div>
                 <div className="w-5 h-5 rounded bg-glass border border-glass-border"></div>
                 <div className="w-8 h-[1px] bg-glass-border my-1"></div>
                 <div className="w-5 h-5 rounded bg-electric/20 border border-electric/50 shadow-[0_0_10px_rgba(0,122,255,0.2)]"></div>
              </div>
              
              {/* Fake Header */}
              <div className="h-10 border-b border-glass-border bg-[#0f0f0f] ml-12 flex items-center justify-between px-4">
                  <div className="w-24 h-2 bg-glass-border rounded-full"></div>
                  <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-glass-border"></div>
                  </div>
              </div>

              {/* Chart Content Area */}
              <div className="ml-12 p-4 md:p-6 h-full flex flex-col bg-onyx/50">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Total Efficiency</div>
                        <div className="text-xl text-white font-bold font-mono">94.2%</div>
                    </div>
                    <div className="px-2 py-0.5 bg-cyan/10 text-cyan text-[10px] rounded font-mono border border-cyan/20">+14.2%</div>
                </div>
                <div className="flex-1 w-full min-h-[150px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                        <defs>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#007AFF" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#007AFF" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00C7BE" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#00C7BE" stopOpacity={0}/>
                        </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                        <XAxis dataKey="name" hide />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#0A0A0A', borderColor: '#333', color: '#fff', fontSize: '12px' }} 
                            cursor={{ stroke: 'rgba(255,255,255,0.1)' }}
                        />
                        <Area type="monotone" dataKey="profit" stroke="#007AFF" fillOpacity={1} fill="url(#colorProfit)" strokeWidth={2} />
                        <Area type="monotone" dataKey="efficiency" stroke="#00C7BE" fillOpacity={1} fill="url(#colorEff)" strokeWidth={2} />
                    </AreaChart>
                    </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Tagi Technologiczne */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Next.js App Router', 'Supabase', 'Automation', 'Real-time'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2.5 py-1 bg-glass border border-glass-border text-gray-400 rounded-md  hover:border-blue-600 hover:bg-gradient-to-r from-blue-600/50 to-transparent transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* === FILAR 2: EXTERNAL PERFORMANCE (LAPTOP) === */}
        <div className="group relative bg-gradient-to-bl from-cyan-600/90 via-cyan-950/40 to-black rounded-2xl p-1 overflow-hidden h-[550px] flex flex-col transition-all hover:border-cyan/30">
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
            <div className="mb-6">
             <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
  Strony Premium 
  <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
    Techniczne SEO 
  </span>
</h3>
<p className="text-gray-400 text-sm md:text-base max-w-sm">
  Szybkie strony WWW  oparte o Next.js i Headless CMS. 
  Budujemy wizerunek, 
  który w końcu nadąża za jakością Twoich usług.
</p>
            </div>
            
            {/* Wizualizacja: Laptop Mockup */}
            <div className="flex-1 relative flex items-center justify-center py-4">
               {/* Laptop Lid */}
               <div className="relative w-full max-w-[380px] aspect-[16/10] bg-onyx border border-gray-800 rounded-t-xl border-b-0 shadow-2xl flex flex-col z-20 transition-transform group-hover:scale-[1.02] duration-500">
                  {/* Browser Header */}
                  <div className="h-7 bg-[#1a1a1a] border-b border-gray-800 flex items-center px-3 gap-2 rounded-t-xl">
                      <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
                      </div>
                      <div className="flex-1 mx-4 h-5 bg-black/40 rounded flex items-center justify-center border border-white/5">
                          <Lock className="w-2.5 h-2.5 text-gray-500 mr-1.5" />
                          <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
                      </div>
                  </div>
                  
                  {/* Screen Content (Abstract Website) */}
                  <div className="flex-1 bg-black relative overflow-hidden">
                      <div className="absolute inset-0 flex flex-col p-5 gap-3 opacity-60">
                          {/* Skeleton UI */}
                          <div className="w-3/4 h-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded mb-2"></div>
                          <div className="w-full h-24 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded"></div>
                          <div className="flex gap-3">
                              <div className="w-1/3 h-20 bg-gray-900/50 rounded border border-gray-800/50"></div>
                              <div className="w-1/3 h-20 bg-gray-900/50 rounded border border-gray-800/50"></div>
                              <div className="w-1/3 h-20 bg-gray-900/50 rounded border border-gray-800/50"></div>
                          </div>
                      </div>

                      {/* Overlay: PageSpeed Score */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 animate-in fade-in zoom-in duration-700">
                        <div className="flex flex-col items-center justify-center bg-onyx/95 backdrop-blur-xl border border-cyan/30 p-4 rounded-2xl shadow-[0_0_40px_rgba(0,199,190,0.15)] min-w-[100px]">
                            <Gauge className="w-8 h-8 text-cyan mb-2" />
                            <span className="text-4xl font-display font-bold text-white">99</span>
                            <span className="text-[10px] uppercase tracking-widest text-cyan mt-1 font-bold">PageSpeed</span>
                        </div>
                      </div>
                  </div>
               </div>
               
               {/* Laptop Base */}
               <div className="absolute bottom-4 w-[420px] max-w-[105%] h-3 bg-gray-800 rounded-b-xl opacity-80 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] z-10"></div>
            </div>

            {/* Tagi Technologiczne */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Headless CMS', 'SEO Technical', 'Global CDN', 'Next.js'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2.5 py-1 bg-glass border border-glass-border text-gray-400 rounded-md hover:border-cyan-400 hover:bg-gradient-to-r from-cyan-400/50 to-transparent transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CoreStrategy;