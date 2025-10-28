import { Button } from "../../components/ui/button";
import { ArrowRight, Code, Smartphone, Globe, Cpu, Zap } from "lucide-react";
import { useModal } from "../../App";

export const HeroSection = () => {
  const { openProductsModal } = useModal();

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Animated Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10h80v80H10z"
                fill="none"
                stroke="#dfaa1a"
                strokeWidth="0.5"
              />
              <circle cx="10" cy="10" r="2" fill="#dfaa1a" />
              <circle cx="90" cy="10" r="2" fill="#dfaa1a" />
              <circle cx="10" cy="90" r="2" fill="#dfaa1a" />
              <circle cx="90" cy="90" r="2" fill="#dfaa1a" />
              <path d="M50 10v80M10 50h80" stroke="#dfaa1a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Glowing Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#dfaa1a] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#dfaa1a]/10 border border-[#dfaa1a]/30 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-[#dfaa1a]" />
                <span className="text-[#dfaa1a] text-sm font-medium">
                  Ignite the Unseen
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Menyalakan Potensi yang </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dfaa1a] via-yellow-400 to-[#dfaa1a] animate-pulse">
                  Belum Terlihat
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Kami percaya setiap individu layak mendapat ruang untuk tumbuh dan bersinar. 
                Dengan teknologi yang inklusif dan berempati, kami membantu mereka yang 
                belum terlihat agar lebih berdaya.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('product-development');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                Pelajari Misi Kami
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#dfaa1a] cursor-pointer text-[#dfaa1a] hover:bg-[#dfaa1a] hover:text-black px-8 py-4 text-lg rounded-lg transition-all duration-300 backdrop-blur-sm bg-transparent"
                onClick={openProductsModal}
              >
                Explore Products
              </Button>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-3 text-gray-400 group cursor-pointer">
                <div className="p-2 bg-[#dfaa1a]/10 rounded-lg group-hover:bg-[#dfaa1a]/20 transition-colors duration-300">
                  <Smartphone className="h-6 w-6 text-[#dfaa1a]" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  Mobile Development
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group cursor-pointer">
                <div className="p-2 bg-[#dfaa1a]/10 rounded-lg group-hover:bg-[#dfaa1a]/20 transition-colors duration-300">
                  <Globe className="h-6 w-6 text-[#dfaa1a]" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  Web Solutions
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group cursor-pointer">
                <div className="p-2 bg-[#dfaa1a]/10 rounded-lg group-hover:bg-[#dfaa1a]/20 transition-colors duration-300">
                  <Cpu className="h-6 w-6 text-[#dfaa1a]" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  IoT Innovation
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Futuristic Mockup */}
          <div className="relative hidden lg:block">
            {/* Main Device Frame */}
            <div className="relative z-10 mx-auto max-w-sm">
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl border border-[#dfaa1a]/30">
                {/* Phone Screen */}
                <div className="bg-black rounded-2xl overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 py-2 text-xs text-gray-400">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 border border-gray-400 rounded-sm"></div>
                      <div className="w-1 h-2 bg-gray-400 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-2xl flex items-center justify-center">
                        <Code className="h-8 w-8 text-black" />
                      </div>
                      <h3 className="text-white font-bold">AureLab</h3>
                      <p className="text-gray-400 text-sm">Future Technology</p>
                    </div>

                    {/* Feature Cards */}
                    <div className="space-y-2">
                      <div className="bg-[#dfaa1a]/20 border border-[#dfaa1a]/30 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#dfaa1a] rounded-lg flex items-center justify-center">
                            <Smartphone className="h-4 w-4 text-black" />
                          </div>
                          <div>
                            <h4 className="text-white text-sm font-medium">
                              Mobile Apps
                            </h4>
                            <p className="text-gray-400 text-xs">
                              Native Development
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#dfaa1a]/10 border border-[#dfaa1a]/20 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#dfaa1a]/50 rounded-lg flex items-center justify-center">
                            <Globe className="h-4 w-4 text-[#dfaa1a]" />
                          </div>
                          <div>
                            <h4 className="text-white text-sm font-medium">
                              Web Platform
                            </h4>
                            <p className="text-gray-400 text-xs">
                              Full-stack Solutions
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#dfaa1a]/10 border border-[#dfaa1a]/20 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#dfaa1a]/50 rounded-lg flex items-center justify-center">
                            <Cpu className="h-4 w-4 text-[#dfaa1a]" />
                          </div>
                          <div>
                            <h4 className="text-white text-sm font-medium">
                              IoT Systems
                            </h4>
                            <p className="text-gray-400 text-xs">
                              Smart Solutions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#dfaa1a]/20 to-yellow-500/20 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#dfaa1a]/20 rounded-full flex items-center justify-center animate-bounce">
              <Code className="h-8 w-8 text-[#dfaa1a]" />
              <div className="absolute inset-0 bg-[#dfaa1a] rounded-full blur-lg opacity-30 animate-pulse"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-[#dfaa1a]/30 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="h-6 w-6 text-[#dfaa1a]" />
            </div>

            {/* Circuit Lines */}
            <div className="absolute top-1/2 -right-20 w-32 h-0.5 bg-gradient-to-r from-[#dfaa1a] to-transparent opacity-30"></div>
            <div className="absolute top-1/3 -left-20 w-24 h-0.5 bg-gradient-to-l from-[#dfaa1a] to-transparent opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Section 1 & 2 Content */}
      <div className="bg-gradient-to-b from-[#dfaa1a] to-yellow-500 py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Section 1: Mengapa Kami Ada? */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">
                Mengapa Kami Ada?
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Di tengah kemajuan teknologi yang serba cepat, masih banyak yang tertinggal, mereka yang belum terjangkau oleh sistem yang seharusnya melayani semua. AureLab hadir untuk menjembatani kesenjangan yang sering terabaikan.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Kami percaya teknologi seharusnya bekerja untuk manusia, bukan sebaliknya. Misi kami sederhana: Menciptakan solusi digital yang inklusif agar setiap orang bisa tumbuh dan berdaya lewat teknologi.
              </p>
            </div>

            {/* Section 2: Dari Inovasi Menuju Dampak Sosial */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">
                Dari Inovasi Menuju Dampak Sosial
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Setiap proyek di AureLab berawal dari empati, dari memahami tantangan nyata yang dihadapi manusia di lapangan. Kami merancang sistem yang mempertimbangkan realitas pengguna di lapangan, mulai dari pelajar di sekolah kecil, tenaga kesehatan di daerah terpencil, hingga rekan penyandang disabilitas yang ingin berkarya tanpa batas.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Melalui pendekatan human-centered design, kami tidak hanya menciptakan produk digital. Kami membangun jembatan antara kemampuan dan kesempatan antara teknologi dan kemanusiaan yang saling menguatkan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
    </section>
  );
};
