import { Heart, Eye, Target, Users, Lightbulb, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export const AboutSection = () => {
  const about = {
    vision: "Mewujudkan ekosistem teknologi yang inklusif, tempat setiap individu dapat tumbuh dan berdaya melalui solusi digital yang memahami mereka.",
    mission: [
      "Menghadirkan solusi digital yang berpihak pada manusia, bukan sekadar efisiensi sistem.",
      "Mendampingi sektor-sektor sosial seperti pendidikan, kesehatan, dan komunitas disabilitas dalam perjalanan transformasi digital.",
      "Mengembangkan teknologi yang mudah diakses, berkelanjutan, dan relevan dengan kebutuhan nyata masyarakat."
    ]
  };

  const foundationPillars = [
    {
      icon: Users,
      title: "Empati",
      subtitle: "Empati",
      description: "Kami memulai setiap ide dengan empati mendengarkan cerita, memahami tantangan, lalu merancang solusi yang berarti.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Inklusi",
      subtitle: "Inklusi",
      description: "Kami percaya teknologi seharusnya dapat diakses oleh siapapun, tanpa batasan kemampuan, latar belakang, atau konteks sosial.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Inovasi",
      subtitle: "Inovasi",
      description: "Kami terus bereksplorasi dan bereksperimen untuk menemukan cara baru agar teknologi tetap relevan, berkelanjutan, dan bermakna bagi kehidupan manusia.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Integritas",
      subtitle: "Integritas",
      description: "Kinerja kami berlandaskan pada nilai kejujuran, tanggung jawab, dan transparansi. Kami yakin bahwa nilai-nilai ini adalah fondasi dari setiap kemajuan.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M100 0v200M0 100h200" stroke="#dfaa1a" strokeWidth="1" opacity="0.3" />
              <circle cx="0" cy="0" r="3" fill="#dfaa1a" opacity="0.5" />
              <circle cx="200" cy="0" r="3" fill="#dfaa1a" opacity="0.5" />
              <circle cx="0" cy="200" r="3" fill="#dfaa1a" opacity="0.5" />
              <circle cx="200" cy="200" r="3" fill="#dfaa1a" opacity="0.5" />
              <circle cx="100" cy="100" r="5" fill="#dfaa1a" opacity="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-circuit)" />
        </svg>
      </div>

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#dfaa1a] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[80vh]">
          {/* Title Section - Left Side */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-[#dfaa1a]/10 border border-[#dfaa1a]/30 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-[#dfaa1a]" />
              <span className="text-[#dfaa1a] text-sm font-medium">Tentang AureLab</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Tentang </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dfaa1a] via-yellow-400 to-[#dfaa1a]">
                AureLab
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              AureLab ada karena kami percaya bahwa teknologi seharusnya untuk semua. Kami hadir untuk membuat teknologi yang dapat diakses, bermakna, dan inklusif — bagi setiap individu, tanpa memandang latar belakang atau keterbatasannya.
            </p>
          </div>

          {/* Content Section - Right Side */}
          <div className="relative order-2 lg:order-2">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border-2 border-[#dfaa1a]/30 rounded-2xl shadow-2xl overflow-hidden">
              {/* Fade overlay at top */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900/80 to-transparent z-10 pointer-events-none"></div>

              {/* Scrollable content */}
              <div className="max-h-[60vh] overflow-y-auto scrollbar-hide p-8 lg:p-12">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-base lg:text-lg">
                    AureLab ada karena kami percaya bahwa teknologi seharusnya dapat diakses oleh semua kalangan. Kami melihat dunia digital tumbuh dengan cepat, tetapi tidak semua orang dapat berjalan bersamanya. Masih ada banyak ruang yang belum tersentuh. Teman-teman disabilitas yang menghadapi sistem dengan desain terbatas, sekolah-sekolah yang berjuang bertransformasi digital, hingga sektor kesehatan yang kekurangan akses pada teknologi yang mudah digunakan.
                  </p>

                  <p className="font-medium italic text-[#dfaa1a] text-base lg:text-lg">
                    Kami percaya teknologi tidak seharusnya mengecualikan, tetapi memberdayakan.
                  </p>

                  <p className="text-base lg:text-lg">
                    Setiap orang berhak merasakan manfaat dari inovasi yang diciptakan untuk mempermudah hidup, bukan sebaliknya. Dari keyakinan itu, AureLab berdiri sebagai laboratorium eksplorasi digital yang berfokus pada pengembangan sistem berbasis empati dan kebermaknaan.
                  </p>

                  <p className="text-base lg:text-lg">
                    Kami tidak hanya membangun produk, <span className="font-medium italic text-[#dfaa1a]">Kami membangun pemahaman.</span> Setiap desain, setiap baris kode, dan setiap keputusan pengembangan kami merujuk pada pengalaman manusia yang sebenarnya. Kami percaya bahwa efisiensi tanpa empati hanyalah mesin. Sementara kemajuan teknologi sejati terletak pada kemampuannya untuk memahami kebutuhan penggunanya.
                  </p>

                  <p className="font-medium italic text-[#dfaa1a] text-center text-base lg:text-lg">
                    Inklusi bukanlah pemikiran tambahan, melainkan fondasi kami.
                  </p>

                  <p className="text-base lg:text-lg">
                    Melalui pendekatan <span className="font-medium">desain yang berpusat pada manusia</span>, AureLab berupaya menciptakan solusi digital yang relevan bagi semua kalangan. Tidak hanya mereka yang mempunyai <span className="font-medium">hak istimewa</span>, tetapi juga teman-teman penyandang disabilitas agar dapat mengakses teknologi tanpa hambatan visual atau fungsional. Sekolah dan lembaga pendidikan agar transformasi digital menjadi inklusif dan mudah dijangkau. Tenaga kesehatan dan organisasi sosial agar pelayanan publik dapat berjalan lebih efisien dan manusiawi.
                  </p>

                  <p className="text-base lg:text-lg">
                    Kami ingin menjadi penghubung antara kemampuan dan kesempatan, antara teknologi dan kemanusiaan. <span className="font-medium italic text-[#dfaa1a]">Di AureLab, kami tidak hanya berinovasi. Kami mendengar, belajar, dan menyalakan jalan bagi mereka yang sering kali tidak terlihat. Karena ketika teknologi memahami manusia, ia berhenti menjadi sekadar alat — namun menjadi jembatan menuju kesetaraan dan pemberdayaan.</span>
                  </p>
                </div>
              </div>

              {/* Fade overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/80 to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}

        <div className="grid lg:grid-cols-2 gap-8 mb-20 mt-20">
          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-[#dfaa1a]/30 backdrop-blur-lg shadow-2xl shadow-[#dfaa1a]/10 hover:shadow-[#dfaa1a]/20 transition-all duration-500 hover:scale-105">
            <CardHeader className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a]/10 to-yellow-500/10"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-2xl">
                  <Eye className="h-8 w-8 text-black" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Visi</CardTitle>
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
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <ol className="list-decimal pl-6 space-y-3 text-gray-300 text-lg">
                {about.mission.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Foundation Pillars */}
        <div className="mb-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-6 lg:text-4xl font-bold text-white mb-4">
            Nilai - Nilai Utama Kami
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Empati. Inklusi. Inovasi. Integritas.
              Empat nilai yang menjadi dasar cara AureLab berpikir, bekerja, dan membantu sesama melalui teknologi.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
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
        <div className="text-center mt-30">
          <div className="inline-flex items-center gap-4">
            <button onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }} className="relative group bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
              Pelajari Lebih Lanjut
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};