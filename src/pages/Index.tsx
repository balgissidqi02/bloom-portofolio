import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import HighlightSection from "@/components/HighlightSection";
import SkillsSection from "@/components/SkillsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <HighlightSection />
        <SkillsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
