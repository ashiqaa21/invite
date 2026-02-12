import { motion } from "framer-motion";
import dressCodeImg from "@/assets/dresscode-illustration.png";

const DressCodeSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">Dress Code</h2>
        <img
          src={dressCodeImg}
          alt="Dress Code Illustration"
          className="mx-auto max-w-xs w-full mb-8"
        />
        <p className="font-body text-lg text-foreground mb-4">
          We invite you to dress elegantly and formally to celebrate this special day with us.
        </p>
        <div className="inline-block border border-border px-6 py-3 rounded-sm mb-3">
          <p className="font-sans-elegant text-sm tracking-[0.2em] uppercase text-foreground">
            Formal Attire
          </p>
        </div>
        <p className="font-body text-sm text-muted-foreground italic">
          Please avoid wearing white
        </p>
      </motion.div>
    </section>
  );
};

export default DressCodeSection;
