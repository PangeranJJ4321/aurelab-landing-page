import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Smartphone, Globe, Cpu, Zap, Shield, Layers } from 'lucide-react';

export const ProductDevelopment = () => {
  const roadmapItems = [
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Pengembangan aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal dan user experience terbaik.",
      features: ["React Native", "Flutter", "Progressive Web Apps"]
    },
    {
      icon: Globe,
      title: "Website & Web Applications",
      description: "Solusi website responsif dan aplikasi web modern dengan teknologi terdepan untuk kebutuhan bisnis Anda.",
      features: ["React.js", "Next.js", "Full-stack Development"]
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Eksplorasi dan implementasi teknologi Internet of Things untuk automasi dan monitoring sistem cerdas.",
      features: ["Sensor Integration", "Data Analytics", "Cloud Connectivity"]
    },
    {
      icon: Layers,
      title: "Software Profesional",
      description: "Pengembangan software aplikasi profesional yang dapat disesuaikan dengan kebutuhan spesifik industri Anda.",
      features: ["Custom Solutions", "Enterprise Grade", "Scalable Architecture"]
    },
    {
      icon: Zap,
      title: "AppScript Integration",
      description: "Fokus utama kami pada AppScript untuk otomasi dan integrasi dengan berbagai platform Google Workspace dan cloud services.",
      features: ["Google Apps Script", "Automation", "API Integration"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Keamanan data dan maintenance berkelanjutan untuk memastikan aplikasi Anda selalu aman dan up-to-date.",
      features: ["Data Protection", "Regular Updates", "24/7 Support"]
    }
  ];

  return (
    <section id="product-development" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Road Map Pengembangan
            <span className="block text-[#dfaa1a]">Produk Terdepan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fokus saat ini adalah AppScript untuk pasar menengah ke bawah, 
            diikuti website/aplikasi mobile, software aplikasi profesional, 
            dan eksplorasi IoT dengan teknologi terkini.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-[#dfaa1a] to-orange-400 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-[#dfaa1a] transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#dfaa1a] rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Siap Memulai Project Anda?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Konsultasikan ide dan kebutuhan teknologi Anda dengan tim ahli kami. 
              Kami siap membantu mewujudkan visi digital Anda.
            </p>
            <button className="bg-[#dfaa1a] hover:bg-[#c8981a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              Diskusi Project Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};