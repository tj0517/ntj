"use client";

import { type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

// 1. Konfiguracja danych (Interfejs)
interface FeatureItem {
icon: ReactNode;
  title: string;
  description: string;
  color: string; // np. "text-blue-500"
}

export const WhyUs = ({ features }: { features: FeatureItem[] }) => {
  
  // Warianty animacji dla kontenera (aby odpalać dzieci po kolei)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Opóźnienie między każdą kartą
      },
    },
  };

  // Warianty dla pojedynczej karty
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative bg-[#0A0A0A] py-16 md:py-24">
      <div className="relative mx-auto z-10 w-[90%] max-w-7xl">
        
        {/* Header - Animowany */}
        <div className="mb-16 md:text-left md:w-2/3 mx-auto z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6 text-center z-10 relative text-white"
          >
            Podejście <span className="text-blue-500 font-thin">Inżynierskie</span>, <br />
            Nie Artystyczne.
          </motion.h2>
        </div>

        {/* 2. Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 relative"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative py-8 md:py-12 md:px-8 first:pl-0 last:pr-0 flex flex-col items-start transition-all duration-300 hover:bg-white/[0.02] rounded-xl"
            >
              {/* Ikona */}
              <div className={`mb-6 p-0 transition-transform duration-300 group-hover:-translate-y-1 ${item.color}`}>
                {item.icon}
              </div>

              {/* Treść */}
              <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed text-pretty">
                {item.description}
              </p>

              {/* ----------------- DIVIDERY (LINIE) ----------------- */}
              
              {/* PIONOWY (Tylko Desktop, tylko jeśli nie jest to ostatni element) */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
              )}

              {/* POZIOMY (Tylko Mobile, tylko jeśli nie jest to ostatni element) */}
              {index < features.length - 1 && (
                <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
              )}
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};