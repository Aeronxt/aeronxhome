
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import AboutTeam from "@/components/AboutTeam";
import AboutTimeline from "@/components/AboutTimeline";
import AboutValues from "@/components/AboutValues";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <AboutSection />
        <Separator className="my-0" />
        <AboutValues />
        <Separator className="my-0" />
        <AboutTimeline />
        <Separator className="my-0" />
        <AboutTeam />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
