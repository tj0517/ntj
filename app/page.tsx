import Hero from "./components/sections/hero";
import CoreStrategy from "./components/sections/offer_previev";
import { WhyUs } from "./components/sections/whyus";
import { CTABanner } from "./components/sections/cta";
import { TrendingUp, Database,Zap } from 'lucide-react';



export default function Home() {
const features = [
  {
    icon: TrendingUp,
    title: "Inżynieria biznesu i Automatyzacja",
    description: 
      "Wdrażamy automatyzację firm stawiając na efektywność w biznesie. Tworzymy dedykowane rozwiązania dla firm MŚP , gdzie technologia realnie wspiera inżynierię biznesu.",
    color: "text-blue-500",
  },
  {
    icon: Database,
    title: "Systemy ERP i CRM dla MŚP",
    description: 
      "Projektujemy aplikacje biznesowe oraz dedykowany CRM. Budujemy systemy ERP dla MŚP  oraz aplikacje MVP , które eliminują chaos skali i piekło Excela.",
    color: "text-teal-400",
  },
  {
    icon: Zap,
    title: "Strony Premium i Techniczne SEO",
    description: 
      "Budujemy szybkie strony WWW w oparciu o Next.js oraz Headless CMS. Zapewniamy techniczne SEO dla wymagających branż, jak deweloperzy czy OZE.",
    color: "text-white",
  },
];
  return (
    <div className="">
      <main>
     <Hero color="bg-linear-to-r from-blue-600/40 to-cyan-400/40"/>
     <div className="pt-96 pb-12 md:pb-20 w-full  overflow-clip bg-[#0A0A0A] border-y border-glass-border">
     <WhyUs features={features} />
     </div>
           <CoreStrategy/>
                <CTABanner/>
      </main>
    </div>
  );
}
