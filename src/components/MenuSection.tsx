import { motion } from "framer-motion";
import menuFrame from "@/assets/menu-frame.png";

const menuItems = [
  {
    course: "Aperitivo",
    title: "Selección de antipasti toscanos",
    desc: "Bruschetta, crostini & affettati misti",
  },
  {
    course: "Primo",
    title: "Risotto al tartufo nero di Norcia",
    desc: "con parmigiano reggiano 24 mesi",
  },
  {
    course: "Secondo",
    title: "Filetto di manzo alla griglia",
    desc: "con salsa al vino rosso e verdure di stagione",
  },
  {
    course: "Dolce",
    title: "Torta nuziale con crema di mascarpone",
    desc: "e frutti di bosco freschi",
  },
];

const MenuSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto text-center relative"
      >
        <img
          src={menuFrame}
          alt=""
          className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-30"
        />
        <div className="relative z-10 py-12 px-6">
          {menuItems.map((item, i) => (
            <div key={i} className="mb-8 last:mb-0">
              <h3 className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {item.course}
              </h3>
              <p className="font-display text-xl text-foreground">{item.title}</p>
              <p className="font-body text-base text-muted-foreground italic">{item.desc}</p>
            </div>
          ))}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-body text-sm text-muted-foreground italic">Vini della Tenuta</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuSection;
