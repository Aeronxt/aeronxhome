
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

const ProductsSection = () => {
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

  const featuredProducts = [
    {
      title: "KontaNibo.com",
      description: "Bangladesh's first comparison platform for financial and consumer services.",
      features: [
        "Compare bank accounts and rates",
        "Mobile plan comparison",
        "Built-in database integration",
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "bg-gradient-to-br from-aeron-blue to-aeron-indigo",
      path: "/products/kontanibo",
    },
    {
      title: "Aeron X Suite",
      description: "Complete airline management system for startup airlines.",
      features: [
        "Integrated DCS and Booking Engine",
        "Operations tracking and management",
        "Crew scheduling and logistics",
      ],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "bg-gradient-to-br from-aeron-purple to-aeron-pink",
      path: "/products/aeron-x-suite",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              Discover our innovative solutions designed to help your business thrive in the digital age.
            </p>
          </div>
          <Button 
            asChild
            className="gradient-bg rounded-full mt-6 md:mt-0 animate-on-scroll" 
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/products">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              features={product.features}
              image={product.image}
              gradient={product.gradient}
              path={product.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
