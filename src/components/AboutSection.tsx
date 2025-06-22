import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Target,
  Zap,
  Shield,
  Globe,
  Award,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

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
    
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stats = [
    {
      value: "From $0 to $500,000", 
      label: "in revenue.", 
      icon: <TrendingUp className="w-6 h-6" />,
      delay: 0 
    },
    {
      value: "47% growth", 
      label: "in new customers.", 
      icon: <Users className="w-6 h-6" />,
      delay: 200 
    },
    {
      value: "99.9% uptime", 
      label: "guaranteed.", 
      icon: <Shield className="w-6 h-6" />,
      delay: 400 
    },
    {
      value: "24/7 support", 
      label: "worldwide.", 
      icon: <Globe className="w-6 h-6" />,
      delay: 600 
    }
  ];

  const features = [
    "Delivering high-quality, on-demand designs with precision.",
    "Elevate your brand effortlessly, one snap at a time.",
    "Effortlessly connect with your favorite tools.",
    "Whether it's your CRM, email marketing platform."
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#111127] to-[#1A1A2E]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-aeron-purple/30 to-aeron-blue/30 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-aeron-cyan/30 to-aeron-pink/30 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aeron-purple/20 to-aeron-blue/20 border border-aeron-purple/30 backdrop-blur-xl mb-8">
                <Award className="w-4 h-4 text-aeron-purple" />
                <span className="text-sm font-medium text-white/90">About AeronX</span>
              </div>
            </Transition>
            
            <Transition
              show={isVisible}
              enter="transition-all duration-1200 ease-out delay-200"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                <span className="block text-white">Building Stronger</span>
                <span className="block bg-gradient-to-r from-aeron-purple via-aeron-blue to-aeron-cyan bg-clip-text text-transparent">
                  Brands Creating
                </span>
                <span className="block text-white">Impressions!</span>
              </h2>
            </Transition>
            
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-400"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <div className="max-w-3xl mx-auto space-y-4 mb-12">
                {features.map((feature, index) => (
                  <p key={index} className="text-xl text-white/70 leading-relaxed">
                    {feature}
                  </p>
                ))}
              </div>
            </Transition>

            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-600"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <Button className="bg-white text-black hover:bg-white/90 rounded-full text-lg px-8 py-6 font-semibold hover:scale-105 transition-all duration-300 group">
                View About AeronX
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Transition>
            </div>
            
                    {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-[800ms]"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <div
                className={`relative p-8 rounded-3xl backdrop-blur-2xl border transition-all duration-500 cursor-pointer group ${
                  hoveredStat === 0 
                    ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 scale-105' 
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/30'
                }`}
                onMouseEnter={() => setHoveredStat(0)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-aeron-purple to-aeron-blue flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aeron-purple group-hover:to-aeron-blue transition-all duration-300">
                    From $0 to $500,000
                  </div>
                  <div className="text-white/70 font-medium">in revenue.</div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aeron-purple/10 to-aeron-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-aeron-purple to-aeron-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </Transition>

            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-[1000ms]"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <div
                className={`relative p-8 rounded-3xl backdrop-blur-2xl border transition-all duration-500 cursor-pointer group ${
                  hoveredStat === 1 
                    ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 scale-105' 
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/30'
                }`}
                onMouseEnter={() => setHoveredStat(1)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-aeron-purple to-aeron-blue flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aeron-purple group-hover:to-aeron-blue transition-all duration-300">
                    47% growth
                  </div>
                  <div className="text-white/70 font-medium">in new customers.</div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aeron-purple/10 to-aeron-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-aeron-purple to-aeron-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            </div>
            </Transition>

            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-[1200ms]"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <div
                className={`relative p-8 rounded-3xl backdrop-blur-2xl border transition-all duration-500 cursor-pointer group ${
                  hoveredStat === 2 
                    ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 scale-105' 
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/30'
                }`}
                onMouseEnter={() => setHoveredStat(2)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-aeron-purple to-aeron-blue flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aeron-purple group-hover:to-aeron-blue transition-all duration-300">
                    99.9% uptime
                  </div>
                  <div className="text-white/70 font-medium">guaranteed.</div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aeron-purple/10 to-aeron-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-aeron-purple to-aeron-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </Transition>

            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-[1400ms]"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <div
                className={`relative p-8 rounded-3xl backdrop-blur-2xl border transition-all duration-500 cursor-pointer group ${
                  hoveredStat === 3 
                    ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 scale-105' 
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/30'
                }`}
                onMouseEnter={() => setHoveredStat(3)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-aeron-purple to-aeron-blue flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aeron-purple group-hover:to-aeron-blue transition-all duration-300">
                    24/7 support
            </div>
                  <div className="text-white/70 font-medium">worldwide.</div>
          </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aeron-purple/10 to-aeron-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-aeron-purple to-aeron-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </Transition>
            </div>

          {/* Bottom Section */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-1200"
            enterFrom="opacity-0 translate-y-20"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 mb-8">
                <CheckCircle className="w-5 h-5 text-aeron-purple" />
                <span className="text-white/90 font-medium">200+ Agencies Rated</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Delivering Tangible <span className="bg-gradient-to-r from-aeron-purple to-aeron-blue bg-clip-text text-transparent">Results</span>
              </h3>
              
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
              </p>

              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full text-lg px-8 py-6 font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300">
                Book a 15-min call
              </Button>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
