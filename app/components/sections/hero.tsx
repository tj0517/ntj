"use client"; // Wymagane dla framer-motion

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { InteractiveShowcase } from "./DualStrategyShowcase";
import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/typing-animation";

interface HeroProps {
  color?: string;
}


export default function Hero({color='bg-[#007AFF]'}: HeroProps ) {
const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay, ease: "easeOut" }
    }),
  };

  return (
  <div className="min-h-screen bg-[#0A0A0A] flex flex-col  text-white">
  
  {/* Sekcja Hero */}
  <div className="w-2/3  relative mx-auto mt-36 md:mt-44 text-center flex flex-col items-center justify-center">

    <div 
  className={`absolute top-1/2 right-1/2 translate-x-1/2  -translate-y-1/2 rotate-[-30deg]  w-[300px] h-[500px]  blur-[100px] z-0  pointer-events-none ${color} animate-pulse opacity-30`}
  style={{ 
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
  }}
/>

    <h1 className="font-display font-bold text-4xl md:text-6xl  mb-6 tracking-tight z-10 relative">
 <TextAnimate className="md:mb-3"  animation="slideUp" by="word">
      Technologia rozwiązująca 
      </TextAnimate>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-cyan-400 font-thin translate-y-[-10px] inline-block">
        <TypingAnimation delay={500}>problemy.</TypingAnimation>
      </span>
    </h1>
    

    <motion.p
          custom={1.0} // Czas opóźnienia
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg z-10 relative text-pretty"
        >
          Nie budujemy tylko stron. Projektujemy i wdrażamy cyfrową
          infrastrukturę, która{" "}
          <span className="text-white font-medium">zwiększa zysk</span> i{" "}
          <span className="text-white font-medium">automatyzuje operacje</span>.
        </motion.p>
<motion.div
          custom={1.2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="grid gird-cols-1 md:grid-cols-2 gap-4 text-xl z-10 relative"
        >
          <a
            href="/calendar"
            className="group px-8 py-4 bg-gradient-to-br from-blue-500/70 via-blue-900 to-transparent backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-blue-400 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,122,255,0.25)] hover:shadow-[0_0_30px_rgba(0,122,255,0.4)]"
          >
            Darmowa konsultacja
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/projects"
            className="group px-8 py-4 bg-gradient-to-br from-cyan-400/70 via-cyan-900/70 to-transparent backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-cyan-400 rounded-2xl text-white font-medium flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
          >
            Jak działamy?
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </a>
        </motion.div>
  </div>

  {/* Sekcja z DualStrategy i Gradientem na dole */}
  <div className="h-[750px] md:h-[600px] flex items-center justify-center p-4 relative">
    
    {/* Treść */}
    <div className="z-10 w-full absolute bottom-0 translate-y-1/3 ">
        <InteractiveShowcase />
    </div>

    <div className="absolute bottom-0 left-0 w-full h-[800px]  pointer-events-none" />
    
  </div>
</div>
  );
}

