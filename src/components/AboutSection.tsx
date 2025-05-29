
import { useEffect } from "react";
import { Compass, Users, Lightbulb, User, HandHeart, DollarSign, Cloud } from "lucide-react";

type ValueCardProps = {
  title: string;
  icon: React.ReactNode;
  delay: number;
};

const ValueCard = ({ title, icon, delay }: ValueCardProps) => {
  return (
    <div 
      className="flex items-center gap-4 animate-on-scroll"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
      </div>
    </div>
  );
};

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const coreValues = [
    {
      title: "Innovation First",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
    },
    {
      title: "Client-Centric Design",
      icon: <User className="h-6 w-6 text-white" />,
    },
    {
      title: "End-to-End Support",
      icon: <HandHeart className="h-6 w-6 text-white" />,
    },
    {
      title: "Affordable, Scalable Tech",
      icon: <DollarSign className="h-6 w-6 text-white" />,
    },
    {
      title: "Future-Proof Architecture",
      icon: <Cloud className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4 animate-on-scroll">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Compass className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="gradient-text">Aeron X</span>
              </h2>
            </div>
            
            <div className="mb-8 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-2">Our Mission:</h3>
              <p className="text-lg text-foreground/70">
                To simplify, streamline, and supercharge industry operations through tailored IT solutions that are as innovative as they are affordable.
              </p>
            </div>
            
            <div className="mb-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl font-bold">Who We Are:</h3>
              </div>
              
              <p className="text-lg text-foreground/70">
                Founded by a team of aviation and technology professionals, AERON X Technologies is the first travel-tech provider from Bangladesh with a global vision. We're redefining enterprise management with high-performance platforms that empower businesses of every size.
              </p>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-4">Core Values:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <ValueCard 
                    key={value.title}
                    title={value.title}
                    icon={value.icon}
                    delay={index + 4}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative animate-on-scroll">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-aeron-purple to-aeron-blue p-1">
              <div className="w-full h-full bg-background rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-gradient-to-br from-aeron-cyan to-aeron-indigo p-1 animate-float">
              <div className="w-full h-full bg-background rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Developer coding" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
