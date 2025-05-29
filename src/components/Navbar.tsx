
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LoginButton from "./LoginButton";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/e4016ef3-8741-46b6-99c4-1454264a91c5.png" 
            alt="Aeron X Logo" 
            className="h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-aeron-purple after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-aeron-purple after:transition-all hover:after:w-full"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-aeron-purple after:transition-all hover:after:w-full"
          >
            Solutions
          </button>
          <Link
            to="/products"
            className="text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-aeron-purple after:transition-all hover:after:w-full"
          >
            Products
          </Link>
          <div className="flex items-center gap-4">
            <LoginButton />
            <AnimatedButton to="/contact" text="Let's Talk" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg p-4 flex flex-col gap-4 border-t border-border animate-fade-in">
          <Link
            to="/"
            className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2 text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2 text-left"
          >
            Solutions
          </button>
          <Link
            to="/products"
            className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <div className="px-4 py-2">
            <LoginButton />
          </div>
          <div className="mx-4 mt-4">
            <AnimatedButton to="/contact" text="Let's Talk" onClick={() => setMobileMenuOpen(false)} />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
