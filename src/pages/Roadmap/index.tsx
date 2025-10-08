import { Card, CardContent } from '../../components/ui/card';
import { Smartphone, Globe, Layers, Cpu, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export const ProductRoadmap = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "AppScript Solutions",
      description: "Fokus pada pengembangan AppScript untuk pasar menengah ke bawah dengan automasi workflow dan integrasi Google Workspace.",
      icon: Zap,
      status: "current",
      features: ["Google Apps Script", "Workflow Automation", "Cloud Integration", "Business Process Optimization"]
    },
    {
      phase: "Phase 2", 
      title: "Web & Mobile Apps",
      description: "Ekspansi ke pengembangan website responsif dan aplikasi mobile native dengan teknologi modern.",
      icon: Smartphone,
      status: "next",
      features: ["React & Next.js", "React Native", "Progressive Web Apps", "Cross-platform Development"]
    },
    {
      phase: "Phase 3",
      title: "Professional Software",
      description: "Pengembangan software aplikasi profesional dan enterprise solutions dengan arsitektur scalable.",
      icon: Layers,
      status: "future",
      features: ["Enterprise Solutions", "Microservices", "Cloud Architecture", "Custom Software"]
    },
    {
      phase: "Phase 4",
      title: "IoT Innovation",
      description: "Eksplorasi dan implementasi teknologi Internet of Things untuk sistem cerdas dan automasi industri.",
      icon: Cpu,
      status: "research",
      features: ["Smart Devices", "Industrial IoT", "Edge Computing", "AI Integration"]
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'current':
        return 'border-[#dfaa1a] bg-[#dfaa1a]/10 shadow-[#dfaa1a]/20';
      case 'next':
        return 'border-[#dfaa1a]/60 bg-[#dfaa1a]/5 shadow-[#dfaa1a]/10';
      case 'future':
        return 'border-gray-600 bg-gray-900/50';
      case 'research':
        return 'border-gray-700 bg-gray-900/30';
      default:
        return 'border-gray-700 bg-gray-900/30';
    }
  };

  const getIconStyle = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-gradient-to-r from-[#dfaa1a] to-yellow-500 text-black';
      case 'next':
        return 'bg-[#dfaa1a]/20 text-[#dfaa1a] border-[#dfaa1a]/30';
      case 'future':
        return 'bg-gray-800 text-gray-400 border-gray-600';
      case 'research':
        return 'bg-gray-800/50 text-gray-500 border-gray-700';
      default:
        return 'bg-gray-800/50 text-gray-500 border-gray-700';
    }
  };

  return (
    <section id="product-development" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="roadmap-circuit" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <path d="M0 75h150M75 0v150" stroke="#dfaa1a" strokeWidth="1" opacity="0.3"/>
              <circle cx="75" cy="75" r="5" fill="#dfaa1a" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roadmap-circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#dfaa1a]/10 border border-[#dfaa1a]/30 rounded-full px-4 py-2 mb-6">
            <Globe className="h-4 w-4 text-[#dfaa1a]" />
            <span className="text-[#dfaa1a] text-sm font-medium">Product Development Roadmap</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Technology</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dfaa1a] via-yellow-400 to-[#dfaa1a]">
              Evolution Path
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Perjalanan inovasi teknologi AureLab dari solusi automation hingga 
            eksplorasi IoT dengan roadmap yang terstruktur dan sustainable.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#dfaa1a] via-[#dfaa1a]/50 to-gray-600 h-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className={`${getStatusStyle(phase.status)} border-2 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[#dfaa1a]/30`}>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 ${getIconStyle(phase.status)} transition-all duration-300`}>
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <div>
                            <div className="text-[#dfaa1a] font-semibold text-sm tracking-wide">
                              {phase.phase}
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                              {phase.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                          {phase.description}
                        </p>
                        
                        <div className="space-y-3">
                          {phase.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-[#dfaa1a] flex-shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {phase.status === 'current' && (
                          <div className="mt-6 flex items-center gap-2 text-[#dfaa1a] font-semibold">
                            <span>Currently Active</span>
                            <div className="w-2 h-2 bg-[#dfaa1a] rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full border-4 ${phase.status === 'current' ? 'border-[#dfaa1a] bg-[#dfaa1a]' : phase.status === 'next' ? 'border-[#dfaa1a]/60 bg-[#dfaa1a]/20' : 'border-gray-600 bg-gray-800'} transition-all duration-300`}>
                      </div>
                      {phase.status === 'current' && (
                        <div className="absolute inset-0 w-6 h-6 rounded-full bg-[#dfaa1a] animate-ping opacity-30"></div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-full lg:w-5/12 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg border border-[#dfaa1a]/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a]/5 to-yellow-500/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Join the Innovation?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dalam perjalanan transformasi digital dan wujudkan 
                ide teknologi Anda bersama tim expert AureLab.
              </p>
              <button className="relative group bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};