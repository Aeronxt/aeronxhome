
import { useEffect, useState } from "react";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute top-20 -right-64 w-[800px] h-[800px] rounded-full bg-aeron-purple/5 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-aeron-blue/5 blur-3xl animate-pulse-slow" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Pioneering the Future of 
            <span className="block gradient-text mt-2">Tech Innovation</span>
          </h1>
          
          <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl text-foreground/70 mb-8">
              At Aeron X, we're not just developing technologies; we're crafting experiences that 
              transform industries and empower businesses to reach new heights of efficiency and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
