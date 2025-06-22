import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Shield, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const logos = [
    { name: "Microsoft", opacity: 0.6 },
    { name: "Google", opacity: 0.5 },
    { name: "Amazon", opacity: 0.7 },
    { name: "Meta", opacity: 0.6 },
    { name: "Apple", opacity: 0.5 }
  ];

  return (
    <section className="min-h-screen w-full relative flex items-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#111127] to-[#1A1A2E]">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)',
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
            animation: 'pulse 6s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-aeron-purple animate-float opacity-60" />
      <div className="absolute bottom-1/3 left-1/6 w-3 h-3 rounded-full bg-aeron-blue animate-float opacity-50" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-aeron-cyan animate-float opacity-70" style={{ animationDelay: '2s' }} />

      <div className="container px-4 mx-auto relative z-10 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aeron-purple/20 to-aeron-blue/20 border border-aeron-purple/30 backdrop-blur-xl mb-8">
                <div className="w-2 h-2 rounded-full bg-aeron-purple animate-pulse" />
                <span className="text-sm font-medium text-white/90">No. 1 Tech Studio of 2025</span>
              </div>
            </Transition>
            
            {/* Main Heading */}
            <Transition
              show={isVisible}
              enter="transition-all duration-1200 ease-out delay-200"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8">
                <span className="block text-white">Premium Agency</span>
                <span className="block bg-gradient-to-r from-aeron-purple via-aeron-blue to-aeron-cyan bg-clip-text text-transparent">
                  for Developers.
                </span>
              </h1>
            </Transition>
            
            {/* Description */}
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-400"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                We specialize in crafting unique digital presence
                <br />
                that help businesses grow and stand out in their industries.
              </p>
            </Transition>

            {/* CTA Buttons */}
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-600"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button className="bg-white text-black hover:bg-white/90 rounded-full text-lg px-8 py-6 font-semibold hover:scale-105 transition-all duration-300 group">
                  Connect With Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full text-lg px-8 py-6 font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                  <Play className="mr-2 h-4 w-4" />
                  What is AeronX?
                </Button>
              </div>
            </Transition>

            {/* Client Logos */}
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-800"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
                {logos.map((logo, index) => (
                  <div 
                    key={index}
                    className="text-white/60 font-bold text-lg tracking-wider hover:text-white/80 transition-colors duration-300"
                    style={{ opacity: logo.opacity }}
                  >
                    {logo.name}
                  </div>
                ))}
              </div>
            </Transition>
          </div>

          {/* Preview Section */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1500 ease-out delay-1000"
            enterFrom="opacity-0 translate-y-20 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
          >
            <div className="mt-20 relative">
              {/* Main Preview Card */}
              <div className="relative max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  
                  {/* Content Preview */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-aeron-purple to-aeron-blue" />
                        <div>
                          <div className="h-4 bg-white/20 rounded w-24 mb-2" />
                          <div className="h-3 bg-white/10 rounded w-16" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 bg-white/10 rounded-lg w-20" />
                        <div className="h-8 bg-aeron-purple/30 rounded-lg w-24" />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-aeron-purple/20 to-aeron-purple/10 rounded-2xl p-4 border border-aeron-purple/20">
                        <div className="h-6 bg-white/30 rounded w-16 mb-2" />
                        <div className="h-4 bg-white/20 rounded w-12" />
                      </div>
                      <div className="bg-gradient-to-br from-aeron-blue/20 to-aeron-blue/10 rounded-2xl p-4 border border-aeron-blue/20">
                        <div className="h-6 bg-white/30 rounded w-20 mb-2" />
                        <div className="h-4 bg-white/20 rounded w-16" />
                      </div>
                      <div className="bg-gradient-to-br from-aeron-cyan/20 to-aeron-cyan/10 rounded-2xl p-4 border border-aeron-cyan/20">
                        <div className="h-6 bg-white/30 rounded w-14 mb-2" />
                        <div className="h-4 bg-white/20 rounded w-10" />
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="h-32 bg-gradient-to-r from-aeron-purple/10 to-aeron-blue/10 rounded-2xl border border-white/10 flex items-end justify-center p-4">
                      <div className="flex items-end gap-2">
                        {[40, 60, 80, 45, 90, 70, 85].map((height, i) => (
                          <div 
                            key={i}
                            className="bg-gradient-to-t from-aeron-purple to-aeron-blue rounded-sm w-4 opacity-70"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-white/80 font-medium">Live</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl">
                  <div className="text-sm text-white/60">Active Projects</div>
                  <div className="text-2xl font-bold text-white">247</div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default Hero;