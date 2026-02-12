import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import giftIcon from "@/assets/gift-icon.png";

const GiftsSection = () => {
  const [showBank, setShowBank] = useState(false);

  return (
    <section className="py-24 px-6 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center"
      >
        <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Wedding registry
        </p>
        <img src={giftIcon} alt="Gift" className="mx-auto w-16 h-16 mb-6" />
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Gifts</h2>
        <p className="font-body text-lg text-foreground mb-8 max-w-sm mx-auto">
          Your presence is the best gift we could receive. However, if you wish to contribute to our new life together, you can do so via bank transfer.
        </p>
        <p className="font-body text-lg text-foreground italic mb-6">With all our love</p>

        <button
          onClick={() => setShowBank(!showBank)}
          className="font-sans-elegant text-xs tracking-[0.2em] uppercase border border-foreground px-8 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Bank details
        </button>

        <AnimatePresence>
          {showBank && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div className="bg-background p-6 rounded-sm border border-border text-left">
                <div className="space-y-2 font-body text-sm">
                  <p><span className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Account Holder:</span><br />SAM & SOFIA</p>
                  <p><span className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase text-muted-foreground">IBAN:</span><br />ES00 0000 0000 0000 0000 0000</p>
                  <p><span className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Reference:</span><br />Sam & Sofia Wedding</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default GiftsSection;
