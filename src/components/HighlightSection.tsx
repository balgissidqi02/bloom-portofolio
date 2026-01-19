import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    description: "Redesign complete untuk pengalaman belanja yang lebih seamless",
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Membangun identitas visual untuk startup teknologi lokal",
  },
  {
    id: 3,
    title: "Social Impact Campaign",
    category: "Digital Campaign",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    description: "Kampanye awareness kesehatan mental untuk Gen-Z",
  },
];

const HighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-3 text-charcoal">
              Selected <span className="italic text-primary">Highlights</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-muted-foreground font-sans max-w-md text-right">
            Beberapa karya terpilih yang mencerminkan passion dan kemampuan saya.
          </p>
        </motion.div>

        {/* Highlight Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * index, duration: 0.8 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                
                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-ivory rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-charcoal" />
                </div>
              </div>

              {/* Content */}
              <span className="text-xs font-sans tracking-wider uppercase text-primary">
                {item.category}
              </span>
              <h3 className="text-xl font-serif font-medium text-charcoal mt-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm mt-2">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
