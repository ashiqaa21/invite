import { motion } from "framer-motion";
import venueImg from "@/assets/venue-illustration.png";

const VenueSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#FAF9F6]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Left Side: Visual Illustration */}
        <motion.div 
          variants={itemVariants}
          className="relative group"
        >
          <div className="absolute -inset-4 border border-[#E5E2D9] rounded-sm -z-10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="bg-white p-8 shadow-sm border border-border/40">
            <img
              src={venueImg}
              alt="Villa Medicea Illustration"
              className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          {/* Subtle location tag */}
          <div className="absolute bottom-4 right-4 md:-right-8 bg-background px-4 py-2 shadow-md border border-border">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              kodlipet
            </p>
          </div>
        </motion.div>

        {/* Right Side: Details */}
        <motion.div variants={itemVariants} className="flex flex-col space-y-8">
          <div>
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-accent mb-4 block">
              The Celebration At
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-4">
              Noormahal  <br /> 
              <span className="italic font-serif pl-4">Conventional hall</span>
            </h2>
            <div className="w-12 h-[1px] bg-foreground/30 mb-6" />
          </div>

          <div className="space-y-2">
            {/* <p className="font-body text-2xl  text-foreground/90">
             Save the Date
            </p> */}
            <p className="font-body text-lg text-muted-foreground">
             5 Dhul-Qa’dah 1447 AH
            </p>
          </div>

          <div className=" block sm:flex-row items-start sm:items-center gap-6 ">
                       <p className="font-body text-2xl mb-4  text-foreground/90">
             Save the Date
            </p>
            <div className="bg-foreground text-background max-w-[200px] px-8 py-4 rounded-none">
              <p className="font-display text-xl tracking-tight">April 22, 2026</p>
            </div>
            {/* <div>
              <p className="font-body text-sm font-semibold text-foreground uppercase tracking-wider">
                16:00 PM
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Reception to follow
              </p>
            </div> */}
          </div>

          <motion.a
            href="https://www.google.com/maps/place/Noor+Mahal+Convention+Hall/@12.791625,75.9006304,17z/data=!4m7!3m6!1s0x3ba53d55995ebaa7:0x3bcdd20137f52dae!4b1!8m2!3d12.7916198!4d75.9032053!16s%2Fg%2F11ddxcwqxz?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D" // Update with actual Google Maps link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-sm font-body border-b border-foreground/20 pb-1 w-fit mt-4 hover:border-foreground transition-colors"
          >
            Open in Google Maps
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VenueSection;