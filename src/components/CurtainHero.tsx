import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import curtainImg from "@/assets/curtain-closed.jpg";

const CurtainHero = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Matches the duration of the curtain swing
    setTimeout(onOpen, 2200);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] cursor-pointer" 
      onClick={!isOpen ? handleOpen : undefined}
    >
      {/* LEFT CURTAIN - Transforms into a side drape */}
      <motion.div
        initial={false}
        animate={{ 
          // Move 75% out, shrink to 40% width, and skew to create the 'pull'
          x: isOpen ? "-75%" : "0%",
          scaleX: isOpen ? 0.4 : 1,
          skewY: isOpen ? -10 : 0,
          rotateZ: isOpen ? -3 : 0,
        }}
        transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full z-20 origin-top-left"
      >
        <img 
          src={curtainImg} 
          alt="Left Curtain" 
          className="w-full h-full object-cover brightness-[0.8]" 
        />
        {/* Shadow depth that increases when bunched to simulate heavy folds */}
        <div className={`absolute inset-0 transition-opacity duration-[2200ms] ${isOpen ? 'opacity-90' : 'opacity-30'} bg-gradient-to-r from-black/20 via-transparent to-black/95`} />
        
        {/* Subtle Gold Edge Detail (Zari) */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
      </motion.div>

      {/* RIGHT CURTAIN - Transforms into a side drape */}
      <motion.div
        initial={false}
        animate={{ 
          x: isOpen ? "75%" : "0%",
          scaleX: isOpen ? 0.4 : 1,
          skewY: isOpen ? 10 : 0,
          rotateZ: isOpen ? 3 : 0,
        }}
        transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full z-20 origin-top-right"
      >
        <img 
          src={curtainImg} 
          alt="Right Curtain" 
          className="w-full h-full object-cover scale-x-[-1] brightness-[0.8]" 
        />
        <div className={`absolute inset-0 transition-opacity duration-[2200ms] ${isOpen ? 'opacity-90' : 'opacity-30'} bg-gradient-to-l from-black/20 via-transparent to-black/95`} />
        
        {/* Subtle Gold Edge Detail (Zari) */}
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
      </motion.div>

      {/* FLOATING SEAL - Disappears when curtains move */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            exit={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-32 h-32 rounded-full border border-[#D4AF37]/30 bg-black/10 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <span className="font-display text-[#D4AF37] text-3xl tracking-tighter">S&S</span>
              <div className="w-8 h-[1px] bg-[#D4AF37]/30 mt-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* REVEALED INVITATION CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#FAF9F6] z-0">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          className="text-center px-12 max-w-3xl z-10"
        >
          <motion.span 
            className="block font-sans text-[10px] md:text-xs tracking-[0.6em] uppercase text-[#D4AF37] mb-10 font-semibold"
            animate={isOpen ? { letterSpacing: ["1em", "0.6em"] } : {}}
          >
            A Royal Celebration
          </motion.span>
          
          <h1 className="font-display text-6xl md:text-9xl text-[#1A1A1A] leading-[0.9] tracking-tighter mb-6">
            Sam <span className="italic font-serif text-[#D4AF37]">&</span> Sofia
          </h1>

          <div className="flex items-center justify-center gap-6 my-12">
            <div className="h-[0.5px] w-16 bg-[#D4AF37]/30" />
            <p className="font-body text-sm md:text-base text-gray-500 uppercase tracking-[0.4em]">
              Mumbai • India
            </p>
            <div className="h-[0.5px] w-16 bg-[#D4AF37]/30" />
          </div>

          <p className="font-serif italic text-2xl md:text-3xl text-gray-800/80">
            Spring 2027
          </p>
        </motion.div>
      </div>

      {/* TAP TO REVEAL HINT */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute bottom-16 w-full text-center z-30"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-[1px] h-10 bg-white/30" />
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-white/60">
                Tap to open
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CurtainHero;   