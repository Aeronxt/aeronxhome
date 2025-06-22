import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    "Pages": [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Portfolio", href: "/products" },
      { name: "Contact", href: "/contact" }
    ]
  };
  
  return (
    <footer className="relative bg-gradient-to-br from-[#0A0A0F] via-[#111127] to-[#1A1A2E] border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-aeron-purple/30 to-aeron-blue/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-aeron-cyan/30 to-aeron-pink/30 blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src="https://wrczctvglyhprlbkogjb.supabase.co/storage/v1/object/public/mob//aerondropshad.png" 
                  alt="Aeron X Logo" 
                  className="h-8 w-auto drop-shadow-lg"
                />
              </div>
          </div>
          
            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
              </li>
                  ))}
            </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <span>© 2025 Aeron X Technologies</span>
              <Link to="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-aeron-purple to-aeron-blue flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
