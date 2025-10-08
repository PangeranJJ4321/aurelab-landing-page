import React from 'react';
import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Code, Globe, Cpu } from 'lucide-react';
import { mockData } from '../constants/mock';
import { LogoAureLab } from '@/assets/export';

export const Footer = () => {
  const { contact } = mockData;

  const socialIcons: Record<'LinkedIn' | 'Instagram' | 'Twitter', React.ComponentType<{ className?: string }>> = {
    LinkedIn: Linkedin,
    Instagram: Instagram,
    Twitter: Twitter
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#dfaa1a]/20 relative overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0v100M0 50h100" stroke="#dfaa1a" strokeWidth="0.5"/>
              <circle cx="0" cy="0" r="1" fill="#dfaa1a" opacity="0.5"/>
              <circle cx="100" cy="0" r="1" fill="#dfaa1a" opacity="0.5"/>
              <circle cx="50" cy="50" r="2" fill="#dfaa1a" opacity="0.7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="relative">
              <img
                src={LogoAureLab}
                alt="AureLab Logo"
                className="h-8 w-8 relative z-10"
              />
            </div>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Aure<span className="text-[#dfaa1a]">Lab</span>
              </h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Lab pengembangan teknologi digital yang menghadirkan solusi inovatif 
              untuk transformasi digital masa depan dengan cutting-edge technology.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              {contact.socialMedia.map((social, index) => {
                const IconComponent = socialIcons[social.platform as 'LinkedIn' | 'Instagram' | 'Twitter'];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-900/50 border border-gray-800 text-gray-400 hover:border-[#dfaa1a]/50 hover:text-[#dfaa1a] rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Code className="h-5 w-5 text-[#dfaa1a]" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {contact.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Cpu className="h-5 w-5 text-[#dfaa1a]" />
              Technology Stack
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  React & Next.js
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  Node.js & Python
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  Cloud Architecture
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  IoT Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Globe className="h-5 w-5 text-[#dfaa1a]" />
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#dfaa1a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-sm block">{contact.email}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#dfaa1a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-sm block">{contact.phone}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#dfaa1a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-sm block">{contact.address}</span>
                </div>
              </li>
            </ul>

            {/* Operating Hours */}
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-800">
              <h5 className="text-sm font-semibold text-[#dfaa1a] mb-2">Operating Hours</h5>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Mon-Fri: {contact.operatingHours.weekdays.split(': ')[1]}</p>
                <p>Sat: {contact.operatingHours.weekend.split(': ')[1]}</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg border border-[#dfaa1a]/20 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Stay Updated with Tech Innovation
                </h4>
                <p className="text-gray-400">
                  Get latest insights about technology trends and our breakthrough solutions
                </p>
              </div>
              <div className="flex gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 lg:w-80 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © {currentYear} AureLab. All rights reserved. 
              <span className="text-[#dfaa1a]"> Innovating the Future</span> of Digital Technology.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300">
                Security
              </a>
              <a href="#" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dfaa1a]/50 to-transparent"></div>
    </footer>
  );
};