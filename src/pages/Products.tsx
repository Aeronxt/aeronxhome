
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, GitCompare, Plane } from "lucide-react";

type ProductItemProps = {
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  gradient: string;
  reverse?: boolean;
  icon?: JSX.Element;
  path?: string;
};

const ProductItem = ({ title, category, description, features, image, gradient, reverse, icon, path }: ProductItemProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 py-16 border-b border-border animate-on-scroll`}>
      <div className="w-full lg:w-1/2">
        <div className="rounded-3xl overflow-hidden h-full">
          <div className={`${gradient} p-1 h-full`}>
            <div className="bg-background h-full rounded-3xl overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <span className="text-sm text-aeron-purple font-medium uppercase tracking-wider mb-2 flex items-center gap-2">
          {icon}
          {category}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-foreground/70 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
        
        {path ? (
          <Button asChild className="self-start gradient-bg rounded-full">
            <Link to={path}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button className="self-start gradient-bg rounded-full">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

const Products = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

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

  const products = [
    {
      title: "KontaNibo.com",
      category: "Comparison Platform",
      description: "Bangladesh's first comprehensive comparison site empowering consumers to make informed decisions. KontaNibo.com allows users to compare a wide range of products and services, from bank accounts and financial products to mobile plans and more. Built entirely in-house with our proprietary database integration capabilities.",
      features: [
        "Compare rates and features across multiple banks and financial institutions",
        "Find the best mobile plans tailored to your usage patterns",
        "Transparent side-by-side comparison of features and benefits",
        "Built with our own proprietary database for seamless integration",
        "Regular updates to ensure the most current information"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "bg-gradient-to-br from-aeron-blue to-aeron-indigo",
      icon: <GitCompare className="w-5 h-5 text-aeron-purple" />,
      path: "/products/kontanibo"
    },
    {
      title: "Aeron X Suite",
      category: "Airline Management System",
      description: "Our flagship project, Aeron X Suite is a comprehensive airline management system designed specifically for startup airlines. It provides everything from Departure Control Systems (DCS) and booking engines to operations management, flight tracking, and crew scheduling. Built for seamless integration and rapid deployment to get airlines operational in record time.",
      features: [
        "Integrated DCS with check-in, boarding, and weight & balance capabilities",
        "Complete booking engine with GDS connectivity and payment processing",
        "Operations control center with real-time flight tracking and monitoring",
        "Crew scheduling and management with duty time compliance",
        "Fast deployment timeline to get airlines operational quickly",
        "Scalable architecture that grows with your airline"
      ],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "bg-gradient-to-br from-aeron-purple to-aeron-pink",
      icon: <Plane className="w-5 h-5 text-aeron-purple" />,
      path: "/products/aeron-x-suite"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto">
          {/* Hero section */}
          <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Products</span></h1>
            <p className="text-xl text-foreground/70">
              From Bangladesh's first comparison site to comprehensive airline management systems, our products combine cutting-edge technology with exceptional user experience to transform how industries operate.
            </p>
          </div>
          
          {/* Products list */}
          <div className="space-y-8">
            {products.map((product, index) => (
              <ProductItem 
                key={product.title}
                title={product.title}
                category={product.category}
                description={product.description}
                features={product.features}
                image={product.image}
                gradient={product.gradient}
                reverse={index % 2 !== 0}
                icon={product.icon}
                path={product.path}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
