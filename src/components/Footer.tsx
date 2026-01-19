import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/balgis-sidqi" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/blgss_sdqii?igsh=Njh0OHRsY2d5dWIw" },
  { name: "Email", icon: Mail, href: "mailto:balgissidqi@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="section-padding container-narrow">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-medium text-charcoal">
              Balgis Sidqi<span className="text-primary italic">.</span>
            </h3>
            <p className="mt-2 text-sm font-sans text-muted-foreground">
              Creating meaningful experiences,<br />one design at a time.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["About", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-end gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-sans text-muted-foreground">
            © 2025 Balgis Sidqi Al Mukarromah. All rights reserved.
          </p>
          <p className="text-sm font-sans text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
