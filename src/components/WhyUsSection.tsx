
import { useEffect } from "react";
import { Check, Zap, Code, Shield, Headset, Cloud } from "lucide-react";

type FeatureCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  index: number;
};

const FeatureCard = ({ title, icon, description, index }: FeatureCardProps) => {
  return (
    <div 
      className="bg-muted/30 backdrop-blur-sm rounded-2xl p-8 card-hover animate-on-scroll"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const WhyUsSection = () => {
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

  const features = [
    {
      title: "Industry-Specific Expertise",
      description: "We bring deep knowledge and experience in the industries we serve, ensuring solutions that truly address your unique challenges.",
      icon: <Check className="h-6 w-6 text-white" />,
    },
    {
      title: "Agile Development with Rapid Deployment",
      description: "Our agile methodology ensures quick iterations and faster time-to-market without compromising on quality.",
      icon: <Zap className="h-6 w-6 text-white" />,
    },
    {
      title: "Full-Stack Development & UI/UX Design",
      description: "From backend infrastructure to intuitive user interfaces, we handle every aspect of your digital solution.",
      icon: <Code className="h-6 w-6 text-white" />,
    },
    {
      title: "Cloud-Native and Scalable",
      description: "Built for the cloud from the ground up, our solutions scale seamlessly as your business grows.",
      icon: <Cloud className="h-6 w-6 text-white" />,
    },
    {
      title: "Security & Data Compliance at the Core",
      description: "We incorporate robust security measures and ensure compliance with industry regulations in all our solutions.",
      icon: <Shield className="h-6 w-6 text-white" />,
    },
    {
      title: "24/7 Dedicated Support",
      description: "Our commitment doesn't end with deployment. We provide ongoing support to ensure your systems run smoothly.",
      icon: <Headset className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-muted/10">
      {/* Background Elements */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] rounded-full bg-aeron-indigo/5 blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-aeron-cyan/5 blur-3xl" />
      
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-aeron-purple/10 px-4 py-2 rounded-full mb-4 animate-on-scroll">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-aeron-purple" />
              <span className="text-aeron-purple font-medium">Why Choose Us</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Why <span className="gradient-text">AERON X</span>?
          </h2>
          <p className="text-lg text-foreground/70 animate-on-scroll">
            We combine technical excellence with industry knowledge to deliver solutions that truly make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
