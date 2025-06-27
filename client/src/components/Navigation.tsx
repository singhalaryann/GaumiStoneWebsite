import { useState, useEffect } from "react";
import { Menu, X, Gem } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${isScrolled ? 'navbar-scrolled' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-heading font-bold text-white flex items-center">
          <Gem className="mr-2 text-[hsl(32,95%,44%)] w-6 h-6" />
          Gaumti Stone Industries
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300">
            Home
          </button>
          <button onClick={() => scrollToSection('products')} className="text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300">
            Products
          </button>
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300">
            Services
          </button>
          <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300">
            Gallery
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300">
            About
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300">
            Contact
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[hsl(20,14.3%,4.1%)] bg-opacity-95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="block text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block text-white hover:text-[hsl(32,95%,44%)] transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
