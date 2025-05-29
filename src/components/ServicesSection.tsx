
import { useEffect, useState } from "react";
import { Plane, CreditCard, Wrench, Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type SolutionTabProps = {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const SolutionTab = ({ icon, title, isActive, onClick }: SolutionTabProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
      isActive 
        ? "bg-gradient-to-r from-aeron-purple/20 to-aeron-blue/20 text-foreground" 
        : "hover:bg-muted/50 text-foreground/60"
    )}
  >
    <div className={cn(
      "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
      isActive ? "gradient-bg" : "bg-muted"
    )}>
      {icon}
    </div>
    <span className="font-medium text-lg">{title}</span>
  </button>
);

type SolutionContentProps = {
  title: string;
  description: string;
  features: string[];
  image: string;
  isActive: boolean;
};

const SolutionContent = ({ title, description, features, image, isActive }: SolutionContentProps) => (
  <div className={cn(
    "grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-500",
    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute pointer-events-none"
  )}>
    <div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center mt-1">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="rounded-2xl overflow-hidden h-full">
      <div className="bg-gradient-to-br from-aeron-purple to-aeron-blue p-1 h-full rounded-2xl">
        <div className="bg-background rounded-2xl overflow-hidden h-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
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

  const solutions = [
    {
      title: "Travel & Aviation Systems",
      description: "From GDS-integrated booking engines to full airline management platforms, our solutions streamline travel operations across every touchpoint.",
      icon: <Plane className="h-5 w-5 text-white" />,
      features: [
        "Airline Management Systems",
        "Online Booking Engines",
        "Airport Duty & Operations Platforms",
        "Real-Time Fare Aggregators",
        "Partner Integrations (Booking.com, Viator, etc.)"
      ],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Finance & FinTech Platforms",
      description: "Build trust and transparency with robust financial tech.",
      icon: <CreditCard className="h-5 w-5 text-white" />,
      features: [
        "Banking CRMs & Portals",
        "Expense Management Tools",
        "Secure Transaction Frameworks",
        "Digital Wallet Integrations",
        "Compliance-Ready Backends"
      ],
      image: "https://images.unsplash.com/photo-1565514020179-026b92b9a88b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Custom Enterprise Solutions",
      description: "We design systems that adapt to your workflows, not the other way around.",
      icon: <Wrench className="h-5 w-5 text-white" />,
      features: [
        "ERP & Inventory Systems",
        "HR & Payroll Platforms",
        "Logistics Management",
        "CRM and Lead Automation Tools"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Consumer-Facing Platforms",
      description: "User-first web and mobile apps that drive loyalty and deliver seamless experiences.",
      icon: <Globe className="h-5 w-5 text-white" />,
      features: [
        "eCommerce Platforms",
        "Mobile Apps (iOS & Android)",
        "Custom Dashboards",
        "Real-Time Analytics"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 -right-40 w-[500px] h-[500px] rounded-full bg-aeron-purple/5 blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-aeron-blue/5 blur-3xl" />
      
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-foreground/70 animate-on-scroll">
            We deliver comprehensive technology solutions tailored to the unique needs of various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-on-scroll">
          {solutions.map((solution, index) => (
            <SolutionTab
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        
        <div className="relative min-h-[400px] animate-on-scroll">
          {solutions.map((solution, index) => (
            <SolutionContent
              key={solution.title}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              image={solution.image}
              isActive={activeTab === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
