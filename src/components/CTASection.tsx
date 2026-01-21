import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-charcoal text-ivory relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sage/10 blur-3xl" />

      <div className="container-narrow relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-ivory/10 flex items-center justify-center"
          >
            <Mail className="w-7 h-7 text-ivory" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            Let's Create Something
            <br />
            <span className="italic text-primary">Beautiful Together</span>
          </h2>

          {/* Description */}
          <p className="text-ivory/70 font-sans text-lg max-w-xl mx-auto mb-8">
            Tertarik untuk berkolaborasi, berdiskusi, atau sekadar menyapa? 
            Saya selalu terbuka untuk kesempatan baru dan percakapan yang bermakna.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="mailto:balgissidqi@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ivory text-charcoal rounded-full font-sans font-medium hover:bg-rose-light transition-colors duration-300 group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/30 text-ivory rounded-full font-sans font-medium hover:bg-ivory/10 transition-colors duration-300"
            >
              View My Work
            </a>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 inline-flex items-center gap-2 text-sm font-sans text-ivory/60"
          >
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            Open to new opportunities
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
