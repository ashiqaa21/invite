import { motion } from "framer-motion";

const ThankYouSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Thank You</h2>
        <p className="font-body text-lg text-muted-foreground">
          Your presence is the best gift we could receive.
        </p>
      </motion.div>
    </section>
  );
};

export default ThankYouSection;
