import { motion } from "framer-motion";
import menuFrame from "@/assets/menu-frame.png";

const MenuSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
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
            className="block font-sans text-[10px] tracking-[0.5em] uppercase text-accent mb-6"
          >
            The Celebration Feast
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="font-display text-4xl md:text-5xl text-foreground leading-[1.1] mb-6"
          >
            A Taste of <br />
            <span className="italic font-serif">India</span>
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
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed px-2">
              We invite you to share a celebratory dinner 
              featuring seasonal flavors and traditional 
              delicacies curated for this special evening.
            </p>

            <div className="pt-6 border-t border-foreground/5">
              <p className="font-body text-xs text-foreground/60 uppercase tracking-[0.2em] mb-2">
                Blessings & Shagun
              </p>
              <p className="font-body text-sm text-muted-foreground italic leading-tight">
                Your presence is our greatest gift. <br />
                We kindly request no boxed gifts.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuSection;