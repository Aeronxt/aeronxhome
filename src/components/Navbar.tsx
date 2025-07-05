import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginButton from "./LoginButton";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  const navigation = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '#about', type: 'scroll', sectionId: 'about' },
    { name: 'Portfolio', href: '#services', type: 'scroll', sectionId: 'services' },
    { name: 'Contact', href: '/contact', type: 'link' },
  ];

  return (
    <Disclosure as="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-black/80 backdrop-blur-2xl py-4 border-b border-white/10"
        : "bg-transparent py-6"
    }`}>
      {({ open, close }) => (
        <>
          <div className="container px-4 mx-auto">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center group transition-transform duration-300 transform translate-x-[96px]">
                <img 
                  src="https://wrczctvglyhprlbkogjb.supabase.co/storage/v1/object/public/mob//aerondropshad.png" 
                  alt="Aeron X Logo" 
                  className="h-6 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  item.type === 'link' ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white/70 hover:text-white transition-all duration-300 relative group font-medium"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-aeron-purple to-aeron-blue transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.sectionId!)}
                      className="text-white/70 hover:text-white transition-all duration-300 relative group font-medium"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-aeron-purple to-aeron-blue transition-all duration-300 group-hover:w-full" />
                    </button>
                  )
                ))}
                
                {/* CTA Button */}
                <div className="ml-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-aeron-purple to-aeron-blue text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-aeron-purple/30 transition-all duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
              </nav>

              {/* Mobile menu button */}
              <Disclosure.Button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 transition-colors">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden">
              <div className="bg-black/95 backdrop-blur-2xl border-t border-white/10">
                <div className="space-y-1 px-4 pb-3 pt-2">
                  {navigation.map((item) => (
                    item.type === 'link' ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                        onClick={() => close()}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => {
                          scrollToSection(item.sectionId!);
                          close();
                        }}
                        className="block w-full text-left rounded-lg px-3 py-3 text-base font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                      >
                        {item.name}
                      </button>
                    )
                  ))}
                  
                  {/* Mobile CTA */}
                  <div className="px-3 py-3">
                    <Link
                      to="/contact"
                      className="block w-full text-center bg-gradient-to-r from-aeron-purple to-aeron-blue text-white px-6 py-3 rounded-full font-semibold"
                      onClick={() => close()}
                    >
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
