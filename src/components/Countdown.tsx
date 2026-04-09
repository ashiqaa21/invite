import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-04-22T16:00:00");

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = TARGET_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, min: 0, sec: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      min: Math.floor((diff / (1000 * 60)) % 60),
      sec: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.min, label: "Min" },
    { value: timeLeft.sec, label: "Sec" },
  ];

  return (
    <section className="py-10 md:py-20 px-6 bg-primary text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl mb-10">Countdown</h2>
        <div className="flex justify-center gap-6 md:gap-10 mb-6">
          {units.map((u) => (
            <div key={u.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="font-sans-elegant text-xs tracking-[0.2em] uppercase mt-2 opacity-80">
                {u.label}
              </div>
            </div>
          ))}
        </div>
        <p className="font-body text-lg italic opacity-80">until the big day</p>
      </motion.div>
    </section>
  );
};

export default Countdown;
