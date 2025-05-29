
import { useEffect } from "react";

const timelineEvents = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Aeron X was founded with a vision to transform the travel-tech industry in Bangladesh.",
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Launched KontaNibo, Bangladesh's first comprehensive comparison platform.",
  },
  {
    year: "2021",
    title: "Innovation Award",
    description: "Recognized for technological innovation in the Asian Tech Summit.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded operations to three countries with a growing international team.",
  },
  {
    year: "2023",
    title: "Aeron X Suite",
    description: "Released our flagship airline management system, transforming operations for startup airlines.",
  },
  {
    year: "2024",
    title: "Future Focus",
    description: "Continuing to innovate with AI-driven solutions and strategic partnerships.",
  },
];

const TimelineEvent = ({ year, title, description, isLeft, index }: { 
  year: string; 
  title: string; 
  description: string; 
  isLeft: boolean;
  index: number;
}) => {
  return (
    <div 
      className={`flex items-center animate-on-scroll mb-12 md:mb-0 ${isLeft ? 'md:justify-end' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`flex ${isLeft ? 'md:flex-row-reverse' : ''} items-center gap-4 md:w-1/2`}>
        <div className="hidden md:flex md:flex-col items-center">
          <div className="w-5 h-5 rounded-full gradient-bg"></div>
          <div className="w-1 bg-gradient-to-b from-aeron-purple to-aeron-blue h-40"></div>
        </div>

        <div className={`w-full md:max-w-md bg-card rounded-3xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:shadow-aeron-purple/10 hover:-translate-y-1 ${isLeft ? 'md:text-right' : ''}`}>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-aeron-purple/10 text-aeron-purple mb-3`}>
            {year}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutTimeline = () => {
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
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-aeron-purple/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-aeron-blue/5 blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
          Our <span className="gradient-text">Journey</span>
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                {...event}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
