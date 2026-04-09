import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CurtainHero from "@/components/CurtainHero";
import DateReveal from "@/components/DateReveal";
import Countdown from "@/components/Countdown";
import VenueSection from "@/components/VenueSection";
import MenuSection from "@/components/MenuSection";
import ThankYouSection from "@/components/ThankYouSection";

const Index = () => {
  const [curtainOpened, setCurtainOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <CurtainHero onOpen={() => setCurtainOpened(true)} />

      <AnimatePresence>
        {curtainOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <DateReveal />
            <VenueSection />
            <Countdown />
            <MenuSection />
            <ThankYouSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
