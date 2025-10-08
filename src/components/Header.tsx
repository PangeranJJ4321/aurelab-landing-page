import  { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Zap } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black/95 backdrop-blur-lg border-b border-[#dfaa1a]/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-[#dfaa1a] to-yellow-400 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-black font-bold" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-400 rounded-lg blur-sm opacity-50 animate-pulse"></div>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Aure<span className="text-[#dfaa1a]">Lab</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group">
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#product-development" className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group">
              Products
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group">
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#team" className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group">
              Team
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group">
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="relative bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-lg blur-sm opacity-30 animate-pulse"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#dfaa1a]/20 bg-black/90 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#product-development" 
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#team" 
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="relative bg-gradient-to-r from-[#dfaa1a] to-yellow-500 text-black font-bold w-full mt-4 transition-all duration-300"
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