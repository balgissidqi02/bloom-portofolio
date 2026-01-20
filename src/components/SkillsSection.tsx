import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileText, 
  Table, 
   Monitor,
  Code, 
  Database, 
  BarChart,
  Users, 
  Lightbulb,
  RefreshCw,
  MessageSquare,
  Target,
  Sparkles
} from "lucide-react";
import {
  SiReact,
  SiLaravel,
  SiPhp,
  SiHtml5,
  SiCss3
} from "react-icons/si";

const skillCategories = [
  {
    title: "Hard Skills",
    color: "rose",
    skills: [
      { name: "Microsoft Word", icon: FileText },
      { name: "Microsoft Excel", icon: Table },
      { name: "Microsoft Power Point", icon: Monitor  },
      { name: "Python", icon: Code },
      { name: "SQL", icon: Database  },
      { name: "Power BI", icon: BarChart  },
      { name: "React", icon: SiReact  },
      { name: "Laravel", icon: SiLaravel  },
      { name: "PHP", icon: SiPhp },
      { name: "HTML", icon: SiHtml5  },
      { name: "CSS", icon: SiCss3  },
    ],
  },
  {
    title: "Soft Skills",
    color: "sage",
    skills: [
      { name: "Communication", icon: MessageSquare },
      { name: "Teamwork", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Adaptable", icon: RefreshCw }, 
      { name: "Leadership", icon: Target },
    ],
  },
];

const additionalSkills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Usability Testing",
  "Visual Design",
  "Project Management",
  "Copywriting",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-sage">
      <div className="container-narrow" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-3 text-charcoal">
            Skills & <span className="italic text-primary">Tools</span>
          </h2>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * categoryIndex, duration: 0.8 }}
              className="bg-card rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-serif font-medium text-charcoal mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className={`flex items-center gap-3 p-3 rounded-xl ${
                        category.color === "rose" ? "bg-rose-light" : "bg-sage-light"
                      } hover:shadow-soft transition-shadow duration-300`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                        <Icon className="w-5 h-5 text-charcoal" />
                      </div>
                      <span className="font-sans text-sm font-medium text-charcoal">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Also experienced in
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-sans text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
