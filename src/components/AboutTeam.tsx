
import { useEffect } from "react";
import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Khalid Rahman",
    position: "Founder & CEO",
    description: "Aviation expert with 15+ years in airline operations and technology implementation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Anika Ahmed",
    position: "CTO",
    description: "Technology visionary leading our software development and innovation strategies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Rizwan Khan",
    position: "Head of Product",
    description: "Product strategist with a passion for creating intuitive user experiences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Sabrina Hossain",
    position: "Lead Designer",
    description: "Creative director ensuring our products are both beautiful and functional.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
];

const TeamMember = ({ name, position, description, image, index }: { 
  name: string; 
  position: string; 
  description: string; 
  image: string;
  index: number;
}) => {
  return (
    <div 
      className="animate-on-scroll"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="rounded-3xl overflow-hidden bg-card p-1 transition-all duration-300 hover:shadow-lg hover:shadow-aeron-purple/10 hover:-translate-y-1">
        <div className="aspect-square overflow-hidden rounded-2xl mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-foreground/60 font-medium mb-3">{position}</p>
          <p className="text-sm text-foreground/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutTeam = () => {
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
    <section id="team" className="py-24 bg-background/50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center gap-3 justify-center mb-16 animate-on-scroll">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our <span className="gradient-text">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name} 
              {...member} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
