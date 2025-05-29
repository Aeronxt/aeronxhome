
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/lovable-uploads/e4016ef3-8741-46b6-99c4-1454264a91c5.png" 
                alt="Aeron X Logo" 
                className="h-12"
              />
            </Link>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-aeron-purple" />
                <a href="mailto:info@aeronxtt.com" className="text-foreground/70 hover:text-foreground transition-colors">info@aeronxtt.com</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-aeron-purple" />
                <span className="text-foreground/70">Melbourne, VIC, 3000, & Dhaka, Bangladesh 1215</span>
              </li>
              <li className="text-foreground/70">
                <span className="font-medium">ABN:</span> 61 278 718 345
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-foreground/50 text-sm">
            © {currentYear} Aeron X. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
