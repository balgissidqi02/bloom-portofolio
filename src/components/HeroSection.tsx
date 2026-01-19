import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden gradient-rose">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-sage-light opacity-40 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-accent opacity-30 blur-3xl" />
      
      <div className="section-padding container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-warm-gray font-sans text-sm tracking-widest uppercase"
          >
            Welcome to my space ✨
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance"
          >
            Hi, I'm{" "}
            <span className="text-primary italic">Sarah Amelia</span>
            <br />
            <span className="text-charcoal">Creative Problem Solver</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-sans font-light max-w-2xl leading-relaxed"
          >
            Passionate about transforming ideas into meaningful experiences. 
            Combining creativity, strategy, and genuine enthusiasm to make an impact 
            in <span className="text-secondary-foreground font-medium">product development</span> and{" "}
            <span className="text-secondary-foreground font-medium">user experience</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-ivory rounded-full font-sans text-sm font-medium hover:bg-foreground transition-all duration-300 hover:shadow-hover"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal text-charcoal rounded-full font-sans text-sm font-medium hover:bg-charcoal hover:text-ivory transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-sans tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
