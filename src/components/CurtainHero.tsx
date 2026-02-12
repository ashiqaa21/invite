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
      {/* Left curtain - folds to the left side */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2 z-10 transition-all origin-left"
        style={{
          transform: isOpen ? "scaleX(0.15)" : "scaleX(1)",
          transition: "transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        <img src={curtainImg} alt="" className="w-full h-full object-cover" />
        {/* Fold shadow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isOpen
              ? "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0) 100%)"
              : "none",
            transition: "background 1.8s ease",
          }}
        />
      </div>
      {/* Right curtain - folds to the right side */}
      <div
        className="absolute top-0 bottom-0 right-0 w-1/2 z-10 transition-all origin-right"
        style={{
          transform: isOpen ? "scaleX(0.15)" : "scaleX(1)",
          transition: "transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        <img src={curtainImg} alt="" className="w-full h-full object-cover scale-x-[-1]" />
        {/* Fold shadow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isOpen
              ? "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0) 100%)"
              : "none",
            transition: "background 1.8s ease",
          }}
        />
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
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <p className="font-sans-elegant text-sm tracking-[0.3em] uppercase text-accent-foreground/80 animate-pulse">
            Tap to continue
          </p>
        </div>
      )}
    </section>
  );
};

export default CurtainHero;
