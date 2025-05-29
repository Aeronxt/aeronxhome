
import { useEffect } from "react";
import { Plane, CreditCard, Hospital, Factory, ShoppingCart, Smartphone } from "lucide-react";

type IndustryCardProps = {
  title: string;
  icon: React.ReactNode;
  delay: number;
};

const IndustryCard = ({ title, icon, delay }: IndustryCardProps) => {
  return (
    <div 
      className="bg-muted/30 rounded-2xl p-6 text-center flex flex-col items-center backdrop-blur-sm card-hover animate-on-scroll"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
};

const IndustriesSection = () => {
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

  const industries = [
    {
      title: "Travel & Aviation",
      icon: <Plane className="h-8 w-8 text-white" />,
    },
    {
      title: "Finance & Banking",
      icon: <CreditCard className="h-8 w-8 text-white" />,
    },
    {
      title: "Healthcare",
      icon: <Hospital className="h-8 w-8 text-white" />,
    },
    {
      title: "Manufacturing",
      icon: <Factory className="h-8 w-8 text-white" />,
    },
    {
      title: "eCommerce",
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
    },
    {
      title: "Consumer Tech",
      icon: <Smartphone className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 -right-40 w-[400px] h-[400px] rounded-full bg-aeron-indigo/5 blur-3xl" />
      
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Featured <span className="gradient-text">Industries</span>
          </h2>
          <p className="text-lg text-foreground/70 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            We deliver specialized solutions across these key sectors
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.title}
              title={industry.title}
              icon={industry.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
