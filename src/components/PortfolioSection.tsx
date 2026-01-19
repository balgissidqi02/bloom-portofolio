import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Award, Users, Folder, Star } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  role: string;
  highlight: string;
  category: string;
}

const categories = [
  { id: "all", label: "Semua", icon: Star },
  { id: "experience", label: "Pengalaman", icon: Briefcase },
  { id: "project", label: "Proyek", icon: Folder },
  { id: "organization", label: "Organisasi", icon: Users },
  { id: "certification", label: "Sertifikasi", icon: Award },
  { id: "education", label: "Pendidikan", icon: GraduationCap },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "UI/UX Design Internship",
    description: "Merancang user interface untuk aplikasi mobile e-commerce dengan fokus pada user experience yang intuitif.",
    role: "UI/UX Design Intern",
    highlight: "Meningkatkan conversion rate sebesar 25%",
    category: "experience",
  },
  {
    id: 2,
    title: "Community App Redesign",
    description: "Proyek redesign aplikasi komunitas lokal untuk meningkatkan engagement dan kemudahan navigasi.",
    role: "Lead Designer",
    highlight: "500+ active users dalam 3 bulan pertama",
    category: "project",
  },
  {
    id: 3,
    title: "Student Organization Leadership",
    description: "Memimpin divisi kreatif dalam organisasi mahasiswa, mengelola tim 15 orang untuk berbagai event kampus.",
    role: "Head of Creative Division",
    highlight: "Berhasil mengeksekusi 12 event dalam setahun",
    category: "organization",
  },
  {
    id: 4,
    title: "Google UX Design Certificate",
    description: "Program sertifikasi profesional dari Google covering UX research, wireframing, prototyping, dan usability testing.",
    role: "Certified Professional",
    highlight: "Completed with distinction",
    category: "certification",
  },
  {
    id: 5,
    title: "Social Campaign Project",
    description: "Merancang dan mengeksekusi kampanye sosial digital untuk awareness kesehatan mental di kalangan mahasiswa.",
    role: "Project Lead & Designer",
    highlight: "Reached 50K+ impressions",
    category: "project",
  },
  {
    id: 6,
    title: "Bachelor of Communication",
    description: "Fokus pada komunikasi digital dan media studies dengan thesis tentang user behavior di platform digital.",
    role: "Graduate",
    highlight: "GPA 3.75/4.00",
    category: "education",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding gradient-warm">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-3 text-charcoal">
            Journey & <span className="italic text-primary">Achievements</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-xl mx-auto">
            Kumpulan pengalaman, proyek, dan pencapaian yang membentuk perjalanan saya.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-charcoal text-ivory shadow-soft"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-sage-light text-secondary-foreground rounded-full text-xs font-sans mb-4 capitalize">
                {item.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-serif font-medium text-charcoal mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Role */}
              <p className="text-sm font-sans text-primary font-medium mb-3">
                {item.role}
              </p>

              {/* Description */}
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlight */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-1">
                  Highlight
                </p>
                <p className="text-sm font-sans font-medium text-foreground">
                  {item.highlight}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
