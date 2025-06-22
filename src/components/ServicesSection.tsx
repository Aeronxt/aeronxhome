import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { 
  ArrowRight,
  Rocket,
  Users,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Lightbulb,
  Target,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

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
    
    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stages = [
    {
      number: "Stage 1",
      title: "Kickoff",
      description: "The kickoff stage is where everything begins. We align with you to understand your goals, vision, and expectations. Through in-depth discussions and thorough research.",
      features: ["Comprehensive Consultation", "Project Roadmap"],
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-aeron-purple to-aeron-indigo"
    },
    {
      number: "Stage 2", 
      title: "Execution",
      description: "With a clear strategy in place, we move into the execution phase, where ideas come to life. Our team works high efficiently and collaboratively to implement the plan.",
      features: ["Seamless Integration", "Real Time Collaboration"],
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-aeron-blue to-aeron-cyan"
    },
    {
      number: "Stage 3",
      title: "Handoff", 
      description: "Once the design and development are finalized, we seamlessly transition to the handoff stage. Here, we provide you with all the assets, documentation, and support to a smooth launch.",
      features: ["Book an Appointment", "Ongoing Support", "Documentation"],
      icon: <Target className="w-6 h-6" />,
      gradient: "from-aeron-cyan to-aeron-pink"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#111127] to-[#1A1A2E]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-aeron-purple/30 to-aeron-blue/30 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-aeron-cyan/30 to-aeron-pink/30 blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
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
                <span className="text-sm font-medium text-white/90">How We Work?</span>
              </div>
            </Transition>
            
            <Transition
              show={isVisible}
              enter="transition-all duration-1200 ease-out delay-200"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                <span className="block text-white">We Simplify The</span>
                <span className="block bg-gradient-to-r from-aeron-purple via-aeron-blue to-aeron-cyan bg-clip-text text-transparent">
                  Journey From Design
                </span>
                <span className="block text-white">To Launch.</span>
              </h2>
            </Transition>
            
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-400"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                We make it easy to bring your ideas to life, guiding you from concept to a fully launched product.
              </p>
            </Transition>

            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-600"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <p className="text-white/60 mb-8">
                Effortlessly connect with your favorite tools. Whether it's your CRM, email marketing platform.
              </p>
            </Transition>
          </div>

          {/* Process Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-[800ms]"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <div
                className={`relative p-8 rounded-3xl backdrop-blur-2xl border transition-all duration-500 cursor-pointer group ${
                  activeStage === 0
                    ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 scale-105 shadow-2xl'
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/30'
                }`}
                onMouseEnter={() => setActiveStage(0)}
                onMouseLeave={() => setActiveStage(-1)}
              >
                <div className="text-sm font-bold text-aeron-purple mb-2">Stage 1</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-aeron-purple to-aeron-indigo flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aeron-purple group-hover:to-aeron-blue transition-all duration-300">
                  Kickoff
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  The kickoff stage is where everything begins. We align with you to understand your goals, vision, and expectations. Through in-depth discussions and thorough research.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-aeron-purple flex-shrink-0" />
                    <span className="text-sm text-white/80">Comprehensive Consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-aeron-purple flex-shrink-0" />
                    <span className="text-sm text-white/80">Project Roadmap</span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aeron-purple to-aeron-indigo opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
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
                  activeStage === 1
                    ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 scale-105 shadow-2xl'
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/30'
                }`}
                onMouseEnter={() => setActiveStage(1)}
                onMouseLeave={() => setActiveStage(-1)}
              >
                <div className="text-sm font-bold text-aeron-purple mb-2">Stage 2</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-aeron-blue to-aeron-cyan flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aeron-purple group-hover:to-aeron-blue transition-all duration-300">
                  Execution
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  With a clear strategy in place, we move into the execution phase, where ideas come to life. Our team works high efficiently and collaboratively to implement the plan.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-aeron-purple flex-shrink-0" />
                    <span className="text-sm text-white/80">Seamless Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-aeron-purple flex-shrink-0" />
                    <span className="text-sm text-white/80">Real Time Collaboration</span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aeron-blue to-aeron-cyan opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
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
                  activeStage === 2
                    ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 scale-105 shadow-2xl'
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/30'
                }`}
                onMouseEnter={() => setActiveStage(2)}
                onMouseLeave={() => setActiveStage(-1)}
              >
                <div className="text-sm font-bold text-aeron-purple mb-2">Stage 3</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-aeron-cyan to-aeron-pink flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aeron-purple group-hover:to-aeron-blue transition-all duration-300">
                  Handoff
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Once the design and development are finalized, we seamlessly transition to the handoff stage. Here, we provide you with all the assets, documentation, and support to a smooth launch.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-aeron-purple flex-shrink-0" />
                    <span className="text-sm text-white/80">Book an Appointment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-aeron-purple flex-shrink-0" />
                    <span className="text-sm text-white/80">Ongoing Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-aeron-purple flex-shrink-0" />
                    <span className="text-sm text-white/80">Documentation</span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aeron-cyan to-aeron-pink opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-aeron-purple to-aeron-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </Transition>
          </div>

          {/* Visual Workflow */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1500 ease-out delay-1400"
            enterFrom="opacity-0 translate-y-20 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
          >
            <div className="relative max-w-4xl mx-auto mb-20">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Workflow Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Our Streamlined Process</h3>
                  <p className="text-white/60">From concept to launch in 3 simple stages</p>
                </div>

                {/* Workflow Steps */}
                <div className="flex items-center justify-between mb-8">
                  {stages.map((stage, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stage.gradient} flex items-center justify-center text-white font-bold mb-2`}>
                        {index + 1}
                      </div>
                      <div className="text-sm text-white/70 text-center">{stage.title}</div>
                      {index < stages.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-white/40 ml-8 mt-2" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-aeron-purple via-aeron-blue to-aeron-cyan" />
                  <div className="flex justify-between">
                    {['Start', 'Development', 'Launch'].map((label, index) => (
                      <div key={index} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-2">
                        <div className="text-sm font-medium text-white">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          {/* Bottom CTA */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-1600"
            enterFrom="opacity-0 translate-y-20"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-aeron-purple to-aeron-blue bg-clip-text text-transparent">Start Your Journey?</span>
              </h3>
              
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Let's discuss your project and see how we can bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-white/90 rounded-full text-lg px-8 py-6 font-semibold hover:scale-105 transition-all duration-300 group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full text-lg px-8 py-6 font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300">
                  View Our Work
                </Button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
