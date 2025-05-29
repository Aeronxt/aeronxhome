
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  gradient: string;
  path?: string;
}

const ProductCard = ({ title, description, features, image, gradient, path }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="rounded-3xl overflow-hidden group relative animate-on-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 ${gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />
      
      <div className="relative p-8 h-full flex flex-col">
        <div className="mb-auto">
          <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-white/80 mb-6">{description}</p>
          
          <div className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="text-white/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {path ? (
          <Button
            asChild
            variant="outline"
            className="self-start bg-white/20 border-white/20 text-white hover:bg-white/30 hover:text-white"
          >
            <Link to={path}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="self-start bg-white/20 border-white/20 text-white hover:bg-white/30 hover:text-white"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${isHovered ? 'opacity-20 scale-110' : 'opacity-40 scale-100'}`}
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

export default ProductCard;
