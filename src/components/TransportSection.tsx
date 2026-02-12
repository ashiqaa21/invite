import { motion } from "framer-motion";

const TransportSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center"
      >
        <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          How to get there
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Transport</h2>
        <p className="font-body text-lg text-foreground mb-10 max-w-sm mx-auto">
          We have organized buses from the center of Florence to the villa so you can enjoy the celebration without worries.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="border border-border px-8 py-6 rounded-sm flex-1">
            <p className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Bus departure
            </p>
            <p className="font-display text-lg text-foreground">Piazza della Signoria</p>
            <p className="font-display text-2xl text-foreground mt-2">16:00h</p>
          </div>
          <div className="border border-border px-8 py-6 rounded-sm flex-1">
            <p className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Return to Florence
            </p>
            <p className="font-display text-2xl text-foreground mt-2">02:00h</p>
          </div>
        </div>

        <p className="font-body text-sm text-muted-foreground italic mt-8">
          Please indicate in your RSVP if you need transport
        </p>
      </motion.div>
    </section>
  );
};

export default TransportSection;
