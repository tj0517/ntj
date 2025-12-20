"use client";

import { Smartphone, Workflow, TrendingUp } from "lucide-react";
import { GlowingEffect } from "@/app/components/ui/glowing-effect";
import { motion } from "framer-motion";
import { title } from "process";

interface date_tab {
  id: number;
element: React.ReactNode;
}

interface ModulesGridProps {
  title?: string;
  tab?: date_tab[];
}

export function ModulesGrid({ title, tab }: ModulesGridProps) {
  return (
    <section className="pb-8 md:py-20 px-4 mx-auto w-full">
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Nagłówek z animacją */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 md:mb-24 text-center tracking-tight text-white"
        >
          {title}
        </motion.h2>

 <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          
        {tab?.map((item) => (
         item.element
        ))}
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-56 list-none">
      <div className="relative over h-full rounded-2xl border bg-zinc-900/80 border-white/10 p-2 md:rounded-3xl ">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          glowColor={"#00C7BE"}
        />

        
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-zinc-900/80 p-6 ">
          <div className="relative flex flex-1 flex-col justify-start gap-4">
            
            {/* Ikona w stylu "Internal Ops" (Gradient cyan) */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C7BE]/20 to-emerald-500/20 flex items-center justify-center border border-white/5">
              {icon}
            </div>

            <div className="space-y-3">
              <h3 className="pt-2 font-sans text-xl lg:text-2xl font-bold text-white tracking-tight">
                {title}
              </h3>
              <p className="font-sans md:text-sm lg:text-base text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};