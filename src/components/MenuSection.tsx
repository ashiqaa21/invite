import { motion } from "framer-motion";
import menuFrame from "@/assets/menu-frame.png";

const MenuSection = () => {
  return (
    <section className="relative py-7 md:py-28 px-6 overflow-hidden">
      {/* Enhanced Background: Paper Texture + Subtle Gradient */}
      <div className="absolute inset-0 bg-[#FAF9F6]" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')` }}
      />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/[0.02]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative flex items-center justify-center min-h-[600px]"
      >
        {/* Background Frame - Adjusted scaling to ensure it wraps the text */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src={menuFrame}
            alt=""
            className="w-full h-full object-contain opacity-25 scale-110 md:scale-150 pointer-events-none select-none"
          />
        </div>

        {/* Content Container - Carefully constrained to the frame's "safe zone" */}
        <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] text-center flex flex-col items-center justify-center py-16">
          
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="block  text-[18px] md:text-[30px] md:tracking-[0.5em] uppercase text-accent mb-6"
          >
           بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className=" italic font-serif font-body text-2xl md:text-xl text-muted-foreground leading-[1.1] mb-6"
          >
           In the name of Allah, the Most Gracious <br />
            <span className="italic font-serif  font-body  "> the Most Merciful</span>
          </motion.h2>

          {/* Decorative Divider */}
          <div className="flex justify-center items-center gap-4 mb-8 w-full">
            <div className="flex-1 h-[1px] bg-foreground/10 max-w-[40px]" />
            <span className="text-xs text-foreground/40 transform rotate-45 border border-foreground/20 p-0.5">✧</span>
            <div className="flex-1 h-[1px] bg-foreground/10 max-w-[40px]" />
          </div>

          {/* Descriptive Text Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed px-2">
              We cordially invite you to the wedding of <br/>
               <span className="text-base">
                Nazin M Rafeeq & Thaha Mohammad  
                </span>
            </p>

            <div className="pt-6 border-t border-foreground/5">
              <p className="font-body text-xs text-foreground/100 uppercase tracking-[0.2em] mb-2">
               DUAS & BLESSINGS
              </p>
              <p className="font-body text-sm text-muted-foreground italic leading-tight">
                Your presence is our greatest gift. <br />
                  Please keep us in your prayers</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuSection;