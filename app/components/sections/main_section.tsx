"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SplitSectionProps {
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

  // Warianty animacji dla tekstu
  const textVariants = {
    hidden: { opacity: 0, x: reversed ? 30 : -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Opcjonalne: Linie oddzielające sekcje w stylu "Tech" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* === KOLUMNA TEKSTOWA === */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
          // Logika kolejności: jeśli reversed, tekst idzie na drugie miejsce (order-2)
          className={`flex flex-col items-start ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <motion.h2 variants={childVariants} className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            {title}
          </motion.h2>
          
          <motion.p variants={childVariants} className="text-lg text-gray-400 mb-8 leading-relaxed text-pretty">
            {description}
          </motion.p>

          {ctaText && ctaHref && (
            <motion.div variants={childVariants}>
              <Link 
                href={ctaHref}
                className="group flex items-center gap-2 text-blue-400 font-medium border-b border-blue-500/0 hover:border-blue-500 transition-all pb-0.5"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* === KOLUMNA WIZUALNA === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className={`w-full relative flex items-center justify-center ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
        >
          {/* Tło/Poświata dla elementu wizualnego */}
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full -z-10" />
          
          {visual}
        </motion.div>

      </div>
    </section>
  );
};