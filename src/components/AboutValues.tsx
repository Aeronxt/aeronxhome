
import { useEffect } from "react";
import { Heart, Settings, Star, Award } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "We continuously push boundaries and explore new technologies to deliver cutting-edge solutions.",
    icon: <Star className="h-8 w-8 text-white" />,
    gradient: "from-aeron-purple to-aeron-blue",
  },
  {
    title: "Excellence",
    description: "We are committed to delivering the highest quality in everything we create and provide.",
    icon: <Award className="h-8 w-8 text-white" />,
    gradient: "from-aeron-blue to-aeron-cyan",
  },
  {
    title: "Partnership",
    description: "We build lasting relationships with our clients, working together to achieve shared success.",
    icon: <Heart className="h-8 w-8 text-white" />,
    gradient: "from-aeron-cyan to-aeron-indigo",
  },
  {
    title: "Adaptability",
    description: "We embrace change and quickly adapt to evolving technologies and market needs.",
    icon: <Settings className="h-8 w-8 text-white" />,
    gradient: "from-aeron-indigo to-aeron-purple",
  },
];

const ValueCard = ({ title, description, icon, gradient, index }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  gradient: string;
  index: number;
}) => {
  return (
    <div 
      className="animate-on-scroll"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`rounded-3xl bg-gradient-to-br ${gradient} p-1 h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
        <div className="bg-card rounded-3xl p-8 h-full flex flex-col">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aeron-purple/20 to-aeron-blue/20 flex items-center justify-center mb-6">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-foreground/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutValues = () => {
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

  return (
    <section id="values" className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
          Our Core <span className="gradient-text">Values</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={value.title} 
              {...value} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
