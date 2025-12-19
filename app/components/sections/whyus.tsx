import {type LucideIcon } from 'lucide-react';

// 1. Konfiguracja danych (Tabela)
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string; // Klasa koloru dla ikony/akcentu
}



export const WhyUs = ({features}: { features: FeatureItem[] }) => {
  return (
    <section className=" relative bg-[#0A0A0A]">

      <div className=" relative mx-auto z-10">
        {/* Header */}

        <div className="mb-16  md:text-left md:w-2/3 mx-auto z-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-center z-10 relative">
            Podejście <span className="text-blue-500 font-thin">Inżynierskie</span>, <br />
            Nie Artystyczne.
          </h2>
        </div>

        {/* 2. Grid z liniami podziału (Divide) zamiast Boxów */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto max-w-7xl">
          
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group relative py-8 md:py-12 md:px-8 first:pl-0 last:pr-0 flex flex-col items-start transition-all duration-300"
            >
              {/* Ikona - minimalistyczna, bez tła, tylko kolor */}
              <div className={`mb-6 p-0 transition-transform duration-300 group-hover:-translate-y-1 ${item.color}`}>
                <item.icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              
              {/* Treść */}
              <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-electric transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed text-pretty">
                {item.description}
              </p>
              {index < features.length - 1 && (
                <div className='absolute right-0 h-2/3 top-1/2 -translate-y-1/2 hidden md:flex items-center bg-cyan-400/25'>
              <div className='h-16 w-px bg-cyan-400 '></div>
              </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};