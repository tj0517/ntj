


interface HeroProps {
  tile: string;
  color?: string;
}   

export default function Hero({tile, color='bg-blue-600/40'}: HeroProps) {
    const parts = tile.split("*");
  return (
  <div className="bg-[#0A0A0A] flex flex-col  text-white pb-20 overflow-clip">
  
  {/* Sekcja Hero */}
  <div className="w-2/3  relative mx-auto mt-36 md:mt-44 text-center flex flex-col items-center justify-center">

    <div 
  className={`absolute top-1/2 right-1/2 translate-x-1/2  -translate-y-1/2 -rotate-10  w-[60vw] h-[50vw] md:w-[55vw] md:h-[30vw] lg:w-[50vw] lg:h-[20vw] blur-[100px] z-0  pointer-events-none ${color}`}
  style={{ 
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' 
  }}
/> 
    <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.1] mb-6 tracking-tight z-10 relative">
        {parts.map((part, index) => {
        // Jeśli indeks jest nieparzysty (1, 3...), to znaczy, że był w gwiazdkach
        if (index % 2 === 1) {
          return (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-cyan-400 font-thin "> 
            {part}<br/>
            </span>
          );}
          return <span key={index}>{part}</span>;
      })}
    </h1> 
  </div>
</div>
  );
}

