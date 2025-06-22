import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { 
  ArrowRight, 
  Star,
  Building2,
  TrendingUp,
  Users,
  Zap,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    
    const section = document.getElementById('results');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
      author: "John Smith",
      role: "CEO",
      company: "Innovate Solutions",
      logo: "IS",
      badge: "NEW",
      stats: ["30% Increase in Sales", "40% Boost in Retention"]
    },
    {
      quote: "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
      author: "Emily Davis", 
      role: "Product Manager",
      company: "Nexus Digital",
      logo: "ND",
      badge: "PRO",
      stats: ["25% Conversion Rates", "50% Reduced in CPA"]
    },
    {
      quote: "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
      author: "David Lee",
      role: "Founder", 
      company: "GreenLeaf Enterprises",
      logo: "GE",
      badge: "FRESH",
      stats: ["60% Increased Traffic", "35% Growth in Sales"]
    },
    {
      quote: "We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into a stunning website.",
      author: "Mark Thompson",
      role: "Creative Director",
      company: "PixelWorks Studio", 
      logo: "PW",
      badge: "",
      stats: ["20% Market Share", "45% Enhanced Visibility"]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="results" className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#111127] to-[#1A1A2E]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-aeron-blue/30 to-aeron-cyan/30 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-aeron-purple/30 to-aeron-pink/30 blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
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
                <span className="text-sm font-medium text-white/90">Results</span>
              </div>
            </Transition>
            
            <Transition
              show={isVisible}
              enter="transition-all duration-1200 ease-out delay-200"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
            >
              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                <span className="block text-white">Delivering Tangible</span>
                <span className="block bg-gradient-to-r from-aeron-purple via-aeron-blue to-aeron-cyan bg-clip-text text-transparent">
                  Results That Propel
                </span>
                <span className="block text-white">Your Success</span>
            </h2>
            </Transition>
            
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-400"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
              </p>
            </Transition>

            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-600"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <Button className="bg-white text-black hover:bg-white/90 rounded-full text-lg px-8 py-6 font-semibold hover:scale-105 transition-all duration-300 group">
                Book a 15-min call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Transition>
          </div>

          {/* Testimonials Carousel */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1500 ease-out delay-800"
            enterFrom="opacity-0 translate-y-20"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Testimonial Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`relative p-6 rounded-3xl backdrop-blur-2xl border transition-all duration-700 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30 scale-105 shadow-2xl'
                        : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/30'
                    }`}
          >
                    {/* Badge */}
                    {testimonial.badge && (
                      <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-gradient-to-r from-aeron-purple to-aeron-blue text-xs font-bold text-white">
                        {testimonial.badge}
                      </div>
                    )}

                    {/* Company Logo */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-aeron-purple to-aeron-blue flex items-center justify-center text-white font-bold">
                        {testimonial.logo}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.company}</h4>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-white/80 mb-4 text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="mb-4">
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-2">
                      {testimonial.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-sm font-medium text-aeron-purple">
                          {stat}
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aeron-purple/5 to-aeron-blue/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
        </div>
        
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-aeron-purple to-aeron-blue scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
            />
          ))}
              </div>
            </div>
          </Transition>

          {/* Bottom CTA */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-1200"
            enterFrom="opacity-0 translate-y-20"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="text-center mt-20">
              <p className="text-white/60 mb-4">Effortlessly connect with your favorite tools. Whether it's your CRM, email marketing platform.</p>
              <div className="flex justify-center gap-8 opacity-50">
                <div className="text-white/60 font-bold text-lg tracking-wider">Microsoft</div>
                <div className="text-white/60 font-bold text-lg tracking-wider">Google</div>
                <div className="text-white/60 font-bold text-lg tracking-wider">Amazon</div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
