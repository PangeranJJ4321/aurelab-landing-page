import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { LogoAureLab } from "@/assets/export";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (elementId: string) => {
    // Jika di halaman Products, navigasi ke home dulu
    if (location.pathname === '/products') {
      setIsNavigating(true);
      navigate('/');
      // Delay untuk memastikan halaman home sudah load
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition = element.offsetTop - 80;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
        setIsNavigating(false);
      }, 500);
    } else {
      // Jika sudah di home, langsung scroll
      const element = document.getElementById(elementId);
      if (element) {
        const elementPosition = element.offsetTop - 80;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleProductsClick = () => {
    setIsNavigating(true);
    navigate('/products');
    setIsMenuOpen(false);
    setTimeout(() => setIsNavigating(false), 500);
  };

  const handleGetStartedClick = () => {
    if (location.pathname === '/products') {
      // Jika di halaman Products, navigasi ke home dan scroll ke Technology Evolution Path
      setIsNavigating(true);
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('product-development');
        if (element) {
          const elementPosition = element.offsetTop - 80;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
        setIsNavigating(false);
      }, 500);
    } else {
      // Jika di home, langsung scroll ke Technology Evolution Path
      const element = document.getElementById('product-development');
      if (element) {
        const elementPosition = element.offsetTop - 80;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-black/95 backdrop-blur-lg border-b border-[#dfaa1a]/20 sticky top-0 z-50 transition-all duration-300 ${
      isNavigating ? 'opacity-75' : 'opacity-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={LogoAureLab}
                alt="AureLab Logo"
                className="h-8 w-8 relative z-10"
              />
            </div>
            <h1 className="text-2xl font-bold text-white">
              Aure<span className="text-[#dfaa1a]">Lab</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-white">
            <button
              onClick={() => handleNavClick('home')}
              className="text-white hover:text-[#dfaa1a] transition-all duration-300 relative group cursor-pointer"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={handleProductsClick}
              className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group cursor-pointer"
            >
              Products
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group cursor-pointer"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group cursor-pointer"
            >
              Team
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group cursor-pointer"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleGetStartedClick}
              className="relative bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Get Started
              <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-lg blur-sm opacity-30 animate-pulse"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#dfaa1a]/20 bg-black/90 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2 text-left cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={handleProductsClick}
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2 text-left cursor-pointer"
              >
                Products
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2 text-left cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('team')}
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2 text-left cursor-pointer"
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2 text-left cursor-pointer"
              >
                Contact
              </button>
              <Button 
                onClick={handleGetStartedClick}
                className="relative bg-gradient-to-r from-[#dfaa1a] to-yellow-500 text-black font-bold w-full mt-4 transition-all duration-300 cursor-pointer"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
