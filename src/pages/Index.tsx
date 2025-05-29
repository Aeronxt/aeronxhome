
import Hero from "@/components/Hero";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <IndustriesSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
};

export default Index;
