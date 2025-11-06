import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { LogoAureLab } from "@/assets/export";
import { useLanguage } from "../App";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const languages = [
    { code: 'id' as const, name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleNavClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - 80;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleGetStartedClick = () => {
    const element = document.getElementById('product-development');
    if (element) {
      const elementPosition = element.offsetTop - 80;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black/95 backdrop-blur-lg border-b border-[#dfaa1a]/20 sticky top-0 z-50 transition-all duration-300">
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
              className="transition-all duration-300 relative group cursor-pointer text-white hover:text-[#dfaa1a]"
            >
              Beranda
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group cursor-pointer"
            >
              Tentang
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group cursor-pointer"
            >
              Tim
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-gray-300 hover:text-[#dfaa1a] transition-all duration-300 relative group cursor-pointer"
            >
              Kontak
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfaa1a] transition-all duration-300 group-hover:w-full"></div>
            </button>
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-700/50 rounded-lg text-white transition-all duration-300 hover:border-[#dfaa1a]/50 cursor-pointer"
              >
                <Globe className="h-4 w-4 text-[#dfaa1a]" />
                <span className="text-sm font-medium">{currentLanguage.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors duration-200 ${
                        language === lang.code
                          ? 'bg-[#dfaa1a]/10 text-[#dfaa1a] border-l-2 border-[#dfaa1a]'
                          : 'text-gray-300'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-[#dfaa1a]">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handleGetStartedClick}
              className="relative bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Mulai Sekarang
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
                className="transition-colors duration-300 py-2 text-left cursor-pointer text-gray-300 hover:text-[#dfaa1a]"
              >
                Beranda
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2 text-left cursor-pointer"
              >
                Tentang
              </button>
              <button
                onClick={() => handleNavClick('team')}
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2 text-left cursor-pointer"
              >
                Tim
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-gray-300 hover:text-[#dfaa1a] transition-colors duration-300 py-2 text-left cursor-pointer"
              >
                Kontak
              </button>
              {/* Mobile Language Switcher */}
              <div className="py-2 border-t border-gray-700/50 mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-medium">Bahasa</span>
                </div>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                        language === lang.code
                          ? 'bg-[#dfaa1a]/10 border-[#dfaa1a] text-[#dfaa1a]'
                          : 'bg-gray-800/50 border-gray-700 text-gray-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleGetStartedClick}
                className="relative bg-gradient-to-r from-[#dfaa1a] to-yellow-500 text-black font-bold w-full mt-4 transition-all duration-300 cursor-pointer"
              >
                Mulai Sekarang
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
