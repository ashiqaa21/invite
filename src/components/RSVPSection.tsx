import { useState } from "react";
import { motion } from "framer-motion";

const RSVPSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.attending) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <h2 className="font-display text-4xl mb-4">Thank You</h2>
          <p className="font-body text-lg opacity-80">
            For joining us on this special day. Your presence is the best gift we could receive.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <p className="font-sans-elegant text-[10px] tracking-[0.3em] uppercase text-center opacity-60 mb-2">
        
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-center mb-8">
          Confirm your attendance
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase block mb-2 opacity-80">
              Full Name *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-primary-foreground/30 pb-2 font-body text-lg outline-none focus:border-primary-foreground/60 transition-colors placeholder:opacity-30"
              required
            />
          </div>

          <div>
            <label className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase block mb-2 opacity-80">
              Email (optional)
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-primary-foreground/30 pb-2 font-body text-lg outline-none focus:border-primary-foreground/60 transition-colors placeholder:opacity-30"
            />
          </div>

          <div>
            <label className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase block mb-3 opacity-80">
              Will you attend? *
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, attending: "yes" })}
                className={`flex-1 py-3 rounded-sm font-sans-elegant text-xs tracking-[0.15em] uppercase border transition-colors ${
                  form.attending === "yes"
                    ? "bg-primary-foreground text-primary border-primary-foreground"
                    : "border-primary-foreground/30 hover:border-primary-foreground/60"
                }`}
              >
                Yes, I'll be there!
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, attending: "no" })}
                className={`flex-1 py-3 rounded-sm font-sans-elegant text-xs tracking-[0.15em] uppercase border transition-colors ${
                  form.attending === "no"
                    ? "bg-primary-foreground text-primary border-primary-foreground"
                    : "border-primary-foreground/30 hover:border-primary-foreground/60"
                }`}
              >
                No, I can't make it
              </button>
            </div>
          </div>

          <div>
            <label className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase block mb-2 opacity-80">
              Message for the couple (optional)
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full bg-transparent border-b border-primary-foreground/30 pb-2 font-body text-lg outline-none focus:border-primary-foreground/60 transition-colors resize-none placeholder:opacity-30"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 border border-primary-foreground/50 rounded-sm font-sans-elegant text-xs tracking-[0.3em] uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Confirm
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
