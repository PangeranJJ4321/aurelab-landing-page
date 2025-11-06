import React from "react";
import { Instagram, Mail, Phone, MapPin, Code, Globe, Cpu } from "lucide-react";
import { mockData } from "../constants/mock";
import { LogoAureLab } from "@/assets/export";

export const Footer = () => {
  const { contact } = mockData;

  const socialIcons: Record<
    "Instagram" | "Threads",
    React.ComponentType<{ className?: string }>
  > = {
    Instagram: Instagram,
    Threads: () => (
      <svg className="w-5 h-5" viewBox="0 0 640 640" fill="currentColor">
        <path d="M427.5 299.7C429.7 300.6 431.7 301.6 433.8 302.5C463 316.6 484.4 337.7 495.6 363.9C511.3 400.4 512.8 459.7 465.3 507.1C429.1 543.3 385 559.6 322.7 560.1L322.4 560.1C252.2 559.6 198.3 536 162 489.9C129.7 448.9 113.1 391.8 112.5 320.3L112.5 319.8C113 248.3 129.6 191.2 161.9 150.2C198.2 104.1 252.2 80.5 322.4 80L322.7 80C393 80.5 447.6 104 485 149.9C503.4 172.6 517 199.9 525.6 231.6L485.2 242.4C478.1 216.6 467.4 194.6 453 177C423.8 141.2 380 122.8 322.5 122.4C265.5 122.9 222.4 141.2 194.3 176.8C168.1 210.1 154.5 258.3 154 320C154.5 381.7 168.1 429.9 194.3 463.3C222.3 498.9 265.5 517.2 322.5 517.7C373.9 517.3 407.9 505.1 436.2 476.8C468.5 444.6 467.9 405 457.6 380.9C451.5 366.7 440.5 354.9 425.7 346C422 372.9 413.9 394.3 401 410.8C383.9 432.6 359.6 444.4 328.3 446.1C304.7 447.4 282 441.7 264.4 430.1C243.6 416.3 231.4 395.3 230.1 370.8C227.6 322.5 265.8 287.8 325.3 284.4C346.4 283.2 366.2 284.1 384.5 287.2C382.1 272.4 377.2 260.6 369.9 252C359.9 240.3 344.3 234.3 323.7 234.2L323 234.2C306.4 234.2 284 238.8 269.7 260.5L235.3 236.9C254.5 207.8 285.6 191.8 323.1 191.8L323.9 191.8C386.5 192.2 423.8 231.3 427.6 299.5L427.4 299.7L427.5 299.7zM271.5 368.5C272.8 393.6 299.9 405.3 326.1 403.8C351.7 402.4 380.7 392.4 385.6 330.6C372.4 327.7 357.8 326.2 342.2 326.2C337.4 326.2 332.6 326.3 327.8 326.6C284.9 329 270.6 349.8 271.6 368.4L271.5 368.5z" />
      </svg>
    ),
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#dfaa1a]/20 relative overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path d="M50 0v100M0 50h100" stroke="#dfaa1a" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="#dfaa1a" opacity="0.5" />
              <circle cx="100" cy="0" r="1" fill="#dfaa1a" opacity="0.5" />
              <circle cx="50" cy="50" r="2" fill="#dfaa1a" opacity="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-circuit)" />
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
              <h3 className="text-xl font-bold text-white">
                Aure<span className="text-[#dfaa1a]">Lab</span>
                <span> — Menyalakan yang Tak Terlihat</span>
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Kami percaya, inovasi sejati lahir dari keberanian melihat yang tak terlihat. <span className="italic">Inovasi sejati dimulai dari keberanian untuk melihat yang tak terlihat.</span> Terhubunglah dengan kami dan jadi bagian dari gerakan menciptakan teknologi yang lebih manusiawi.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2 italic">
              Kami tidak hanya membangun teknologi untuk manusia — kami membangunnya bersama mereka.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              {contact.socialMedia.map((social, index) => {
                const IconComponent =
                  socialIcons[social.platform as "Instagram" | "Threads"];
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
              Layanan Kami
            </h4>
            <ul className="space-y-3">
              {contact.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group"
                  >
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
              Teknologi
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  React & Next.js
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  Node.js & Python
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  Cloud Architecture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#dfaa1a] transition-colors duration-300"></div>
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300 flex items-center gap-2 group"
                >
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
              Tetap Terhubung dengan Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#dfaa1a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-sm block">
                    {contact.email}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#dfaa1a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-sm block">
                    {contact.phone}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#dfaa1a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-sm block">
                    {contact.address}
                  </span>
                </div>
              </li>
            </ul>

            {/* Operating Hours */}
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-800">
              <h5 className="text-sm font-semibold text-[#dfaa1a] mb-2">
                Jam Operasional
              </h5>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Senin-Jumat: 09:00–17:00 WIB</p>
                <p>Sabtu-Minggu: Tutup</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comment out newsletter section temporarily */}
        {/* 
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
        */}

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © {currentYear} AureLab. Hak cipta dilindungi.
              <span className="text-[#dfaa1a]"> Menyalakan yang Tak Terlihat</span> melalui
              Teknologi Digital.
            </div>
            {/* Comment out legal links temporarily */}
            {/* 
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
              <a href="/positions" className="text-gray-400 hover:text-[#dfaa1a] transition-colors duration-300">
                Careers
              </a>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dfaa1a]/50 to-transparent"></div>
    </footer>
  );
};
