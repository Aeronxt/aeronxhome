import Hero from "@/components/Hero";
import OurBrandsSection from "@/components/OurBrandsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-premium">
      <Navbar />
      <main>
        <Hero />
        <OurBrandsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
