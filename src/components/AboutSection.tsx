import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-5 gap-12 items-start"
        >
          {/* Section Label */}
          <div className="md:col-span-2">
            <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-3 text-charcoal">
              A little bit <br />
              <span className="italic text-primary">about myself</span>
            </h2>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg font-sans text-muted-foreground leading-relaxed"
            >
              Saya adalah seseorang yang percaya bahwa setiap pengalaman, sekecil apapun, 
              adalah kesempatan untuk belajar dan berkembang. Dengan latar belakang di 
              bidang <span className="text-foreground font-medium">desain dan strategi</span>, 
              saya senang menggabungkan kreativitas dengan pemikiran analitis.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg font-sans text-muted-foreground leading-relaxed"
            >
              Cara kerja saya? Saya suka memulai dengan mendengarkan, memahami masalah 
              dari berbagai sudut pandang, lalu menemukan solusi yang tidak hanya efektif 
              tapi juga bermakna. Saya percaya kolaborasi yang baik menghasilkan karya terbaik.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Curious", "Detail-oriented", "Collaborative", "Growth-minded"].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-rose-light text-charcoal rounded-full text-sm font-sans"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
