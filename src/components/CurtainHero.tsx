import { useState } from "react";
import curtainImg from "@/assets/curtain-closed.jpg";

const CurtainHero = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden cursor-pointer" onClick={!isOpen ? handleOpen : undefined}>
      {/* Left curtain */}
      <div className={`absolute inset-0 w-1/2 left-0 z-10 ${isOpen ? "curtain-open-left" : ""}`}>
        <img src={curtainImg} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Right curtain */}
      <div className={`absolute inset-0 w-1/2 right-0 left-auto z-10 ${isOpen ? "curtain-open-right" : ""}`}>
        <img src={curtainImg} alt="" className="w-full h-full object-cover scale-x-[-1]" />
      </div>
      {/* Behind curtain content */}
      <div className="absolute inset-0 flex items-center justify-center bg-background z-0">
        <div className="text-center">
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-foreground mb-4">
            Sam & Sofia
          </h1>
          <p className="font-body text-xl md:text-2xl text-muted-foreground tracking-widest uppercase">
            Are getting married
          </p>
        </div>
      </div>
      {/* Tap hint */}
      {!isOpen && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-centro">
          <p className="font-sans-elegant text-sm tracking-[0.3em] uppercase text-accent-foreground/80 animate-pulse">
            Tap to continue
          </p>
        </div>
      )}
    </section>
  );
};

export default CurtainHero;
