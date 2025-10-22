import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Target, Eye, Heart, Brain, Cpu, ArrowRight } from 'lucide-react';
import { mockData } from '../../constants/mock';

export const AboutSection = () => {
  const { about } = mockData;

  const foundationPillars = [
    {
      icon: Brain,
      title: "Filosofi",
      subtitle: "Philosophy Foundation",
      description: "Pendekatan filosofis dalam setiap pengembangan teknologi dengan prinsip humanis dan sustainable innovation.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Cpu,
      title: "Teknologi",
      subtitle: "Technology Excellence",
      description: "Implementasi teknologi cutting-edge dengan arsitektur yang scalable dan future-proof untuk solusi jangka panjang.",
      color: "from-[#dfaa1a] to-yellow-500"
    },
    {
      icon: Heart,
      title: "Psikologi",
      subtitle: "Human-Centered Design",
      description: "Memahami psikologi pengguna untuk menciptakan experience yang intuitif dan memenuhi kebutuhan manusia.",
      color: "from-pink-500 to-rose-600"
    }
  ];


  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#dfaa1a]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#dfaa1a] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#dfaa1a]/10 border border-[#dfaa1a]/30 rounded-full px-4 py-2 mb-6">
            <Target className="h-4 w-4 text-[#dfaa1a]" />
            <span className="text-[#dfaa1a] text-sm font-medium">About AureLab</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Membangun Masa Depan</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dfaa1a] via-yellow-400 to-[#dfaa1a]">
              Digital Bersama
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {about.background}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-[#dfaa1a]/30 backdrop-blur-lg shadow-2xl shadow-[#dfaa1a]/10 hover:shadow-[#dfaa1a]/20 transition-all duration-500 hover:scale-105">
            <CardHeader className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a]/10 to-yellow-500/10"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-2xl">
                  <Eye className="h-8 w-8 text-black" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Visi</CardTitle>
                  <p className="text-[#dfaa1a] text-sm">Our Vision</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                {about.vision}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-500/30 backdrop-blur-lg shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
            <CardHeader className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Misi</CardTitle>
                  <p className="text-purple-400 text-sm">Our Mission</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                {about.mission}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Foundation Pillars */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Fondasi Keilmuan
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Tiga pilar fundamental yang menjadi dasar pengembangan setiap solusi teknologi di AureLab
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {foundationPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card key={index} className="group bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 backdrop-blur-lg hover:border-[#dfaa1a]/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#dfaa1a] transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 font-medium">
                      {pillar.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="relative group bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Learn More About Us
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};