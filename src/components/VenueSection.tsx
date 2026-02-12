import { motion } from "framer-motion";
import venueImg from "@/assets/venue-illustration.png";

const VenueSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-body text-lg text-muted-foreground mb-8">
          The celebration will take place at
        </p>
        <p className="font-sans-elegant text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Extra: custom illustration of your venue
        </p>

        <div className="mb-8">
          <img
            src={venueImg}
            alt="Venue Illustration"
            className="mx-auto max-w-sm w-full"
          />
        </div>

        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Villa Medicea di Artimino
        </h2>
        <p className="font-body text-lg text-muted-foreground">
          Via di Papa Leone X, 28
        </p>
        <p className="font-body text-lg text-muted-foreground mb-6">
          Artimino, Florencia
        </p>
        <div className="inline-block border border-border px-8 py-4 rounded-sm">
          <p className="font-display text-lg text-foreground">September 10, 2027</p>
          <p className="font-body text-sm text-muted-foreground mt-1">Reception to Follow</p>
        </div>
      </motion.div>
    </section>
  );
};

export default VenueSection;
