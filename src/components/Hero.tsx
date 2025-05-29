import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="min-h-screen w-full relative flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-20 -right-64 w-[800px] h-[800px] rounded-full bg-aeron-purple/10 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-aeron-blue/10 blur-3xl animate-pulse-slow" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-aeron-purple/20 to-aeron-blue/20 blur-xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-aeron-cyan/20 to-aeron-pink/20 blur-xl animate-float delay-100" />
      <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-aeron-indigo/20 to-aeron-blue/20 blur-xl animate-float delay-200" />

      <div className="container px-4 mx-auto pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl font-extrabold leading-tight md:leading-tight mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Empowering Industries with 
            <span className="block gradient-text"> Next-Gen Tech Solutions</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>At Aeron X, we craft smart, scalable, and secure digital solutions—designed to transform how industries operate and how people experience technology.</p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button className="gradient-bg rounded-full text-lg px-8 py-6 hover:scale-105 transition-transform">
              Discover Our Solutions
            </Button>
            <Button variant="outline" className="rounded-full text-lg px-8 py-6 border-foreground/20 hover:bg-foreground/5 hover:scale-105 transition-transform">
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;