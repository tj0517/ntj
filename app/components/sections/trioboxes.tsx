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
    <section className=" relative overflow-clip">

      <div className=" relative mx-auto z-10">
        {/* Header */}
        
        <div className="mb-16  md:text-left md:w-2/3 mx-auto z-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-center z-10 relative">
            Other challenges<br /> same<span className="text-blue-500 font-thin">&nbsp;pillars</span>
       
          </h2>
        </div>

        {/* 2. Grid z liniami podziału (Divide) zamiast Boxów */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mx-auto max-w-7xl">
          
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0A0A0A] rounded-4xl overflow-clip relative py-8 md:py-12 md:px-8  flex flex-col items-start transition-all duration-300"
            >
              <div 
  className={`absolute top-0 right-0 translate-x-20 -translate-y-24 -rotate-10 w-50 h-50   blur-[20px] z-0  pointer-events-none 
    bg-blue-600/80`}
  style={{ 
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' 
  }}
/> 
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
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};