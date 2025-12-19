import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SplitSectionProps {
  // Lewa strona (Teksty)
  title: string;
  description: string;
  ctaText?: string;       
  ctaHref?: string;       
  

  visual: React.ReactNode; 

  reversed?: boolean;
}

export const SplitSection = ({ 
  title, 
  description, 
  ctaText, 
  ctaHref, 
  visual, 
  reversed = false 
}: SplitSectionProps) => {
  return (
    <section className="py-20 px-6 border-y border-white/20">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? 'direction-rtl' : ''}`}>
        <div className={`flex flex-col items-start ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            {description}
          </p>

          {ctaText && ctaHref && (
            <Link 
              href={ctaHref}
              className="group flex items-center gap-2 text-electric font-medium border-b border-electric/0 hover:border-electric transition-all pb-0.5"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* === PRAWA STRONA (Twój SVG / Div) === */}
        <div className={`w-full relative ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Tu React "wypluje" to, co przekażesz w propsie 'visual' */}
          {visual}
        </div>

      </div>
    </section>
  );
};