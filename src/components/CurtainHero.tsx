"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Assuming standard imports in a Vite or Create React App environment
import curtainClosed from "@/assets/green.png";
import curtainOpen from "@/assets/g.png";

const CurtainHero = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    if (onOpen) onOpen();
  };

  // Physics for a "heavy" fabric feel
  const curtainTransition = {
    duration: 2.5,
    ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth deceleration
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-neutral-900 cursor-pointer"
      onClick={() => !isOpen && handleOpen()}
    >
      {/* 1. UNDERLAY (The Final Look) */}
      {/* This stays hidden behind the closed curtains until they move */}
      <div className="absolute inset-0 z-0">
        <img
          src={curtainOpen}
          alt="Opened Curtain"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay to make text pop */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 2. REVEALED CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={isOpen ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-black drop-shadow-2xl">
            Sam <span className="text-[#D4AF37]">&</span> Sofia
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={isOpen ? { width: "100%" } : {}}
            transition={{ delay: 1.2, duration: 1 }}
            className="h-[1px] bg-[#D4AF37] mt-4 mx-auto"
          />
        </motion.div>
      </div>

      {/* 3. INTERACTIVE CURTAINS (Left & Right) */}
      <div className="absolute inset-0 z-20 flex pointer-events-none">
        {/* Left Panel */}
        <motion.div
          initial={false}
          animate={{
            x: isOpen ? "-90%" : "0%",
            skewY: isOpen ? -2 : 0,
            scaleX: isOpen ? 0.6 : 1,
          }}
          transition={curtainTransition}
          className="relative w-1/2 h-full origin-left shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
        >
          <img
            src={curtainClosed}
            className="w-full h-full object-cover brightness-90"
            alt=""
          />
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={false}
          animate={{
            x: isOpen ? "90%" : "0%",
            skewY: isOpen ? 2 : 0,
            scaleX: isOpen ? 0.6 : 1,
          }}
          transition={curtainTransition}
          className="relative w-1/2 h-full origin-right shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
        >
          <img
            src={curtainClosed}
            className="w-full h-full object-cover scale-x-[-1] brightness-90"
            alt=""
          />
        </motion.div>
      </div>

      {/* 4. THE SEAL (Interactive Element) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            exit={{ 
              opacity: 0, 
              scale: 1.5, 
              filter: "blur(20px)",
              transition: { duration: 0.8 } 
            }}
            className="absolute inset-0 z-30 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-40 h-40 flex items-center justify-center"
            >
              {/* Pulsing ring */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
              />
              
              <div className="w-32 h-32 rounded-full border border-[#D4AF37]/50 bg-white backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl">
                <span className="text-[#D4AF37] text-3xl font-serif tracking-widest">S&S</span>
                <span className="text-[#D4AF37] text-[10px] mt-1 uppercase tracking-tighter">Click to Enter</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CurtainHero;