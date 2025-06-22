import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('cta');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    "Free consultation & project planning",
    "24/7 support and maintenance",
    "Scalable solutions for growth",
    "Enterprise-grade security"
  ];

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-aeron-purple/10 via-background to-aeron-blue/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_70%)]" />
      </div>
      
      {/* Interactive Background Elements */}
      <div 
        className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-aeron-purple/30 to-aeron-blue/30 blur-3xl animate-pulse-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-aeron-cyan/30 to-aeron-pink/30 blur-3xl animate-pulse-slow"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aeron-purple/10 to-aeron-blue/10 border border-aeron-purple/20 mb-6">
              <Sparkles className="w-4 h-4 text-aeron-purple" />
              <span className="text-sm font-medium text-foreground/80">Ready to Transform?</span>
            </div>
          </Transition>
          
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-200"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to build the future?
              <span className="block gradient-text">Let's create something amazing together.</span>
            </h2>
          </Transition>
          
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-400"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Join hundreds of businesses that trust Aeron X to deliver cutting-edge solutions that drive growth and innovation.
            </p>
          </Transition>

          {/* Features List */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-600"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-card/20 to-card/10 backdrop-blur-sm border border-border/30 hover:border-aeron-purple/30 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-aeron-purple flex-shrink-0" />
                  <span className="text-foreground/80 text-left">{feature}</span>
                </div>
              ))}
            </div>
          </Transition>

          {/* CTA Buttons */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-800"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="flex justify-center">
              <Button className="gradient-bg rounded-full text-lg px-8 py-6 hover:scale-105 hover:shadow-xl hover:shadow-aeron-purple/25 transition-all duration-300 group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Transition>

          {/* Trust Indicators */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-1000"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-sm text-foreground/60 mb-4">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-foreground/40">500+ Projects</div>
                <div className="w-1 h-1 rounded-full bg-foreground/40" />
                <div className="text-2xl font-bold text-foreground/40">50+ Countries</div>
                <div className="w-1 h-1 rounded-full bg-foreground/40" />
                <div className="text-2xl font-bold text-foreground/40">99.9% Uptime</div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/6 w-3 h-3 rounded-full bg-aeron-purple/60 animate-float" />
      <div className="absolute bottom-1/3 left-1/6 w-2 h-2 rounded-full bg-aeron-blue/60 animate-float delay-100" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-aeron-cyan/60 animate-float delay-200" />
    </section>
  );
};

export default CTASection; 