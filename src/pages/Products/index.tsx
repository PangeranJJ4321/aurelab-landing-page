import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap, Check } from "lucide-react";
import { Header } from "../../components/Header";

export const ProductsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("appscript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('fade');
  const [isPageLoading, setIsPageLoading] = useState(true);

  const products = [
    {
      id: 1,
      title: "LANDING PAGE PORTOFOLIO",
      description: "Template landing page AppScript Series untuk portofolio profesional (karya, proyek) tanpa perlu pengalaman teknis. Konten dapat dikelola langsung dari Google Sheets dan otomatis ditampilkan di landing page.",
      features: [
        "Ubah Tulisan",
        "Ubah Warna Tema", 
        "Ubah Gambar",
        "Ubah CTA",
        "Ubah Layout",
        "Proyek Tidak Terbatas",
        "Hanya Sekali Bayar",
        "Dan masih banyak lagi"
      ],
      originalPrice: "Rp 679.000",
      discountedPrice: "Rp 99.000",
      discount: "85% OFF"
    },
    {
      id: 2,
      title: "LANDING PAGE KATALOG PRODUK",
      description: "Sistem katalog online siap pakai dari AppScript Series yang otomatis menampilkan data produk dari Google Sheets. Anda dapat mengupdate informasi produk (nama, harga, foto, kategori) di spreadsheet, dan halaman katalog akan terupdate otomatis tanpa perlu desain ulang atau edit manual.",
      features: [
        "Ubah Tulisan",
        "Ubah Warna Tema", 
        "Ubah Gambar",
        "Ubah CTA",
        "Ubah Layout",
        "Proyek Tidak Terbatas",
        "Hanya Sekali Bayar",
        "Dan masih banyak lagi"
      ],
      originalPrice: "Rp 679.000",
      discountedPrice: "Rp 99.000",
      discount: "85% OFF"
    },
    {
      id: 3,
      title: "LANDING PAGE CAMPAIGN/EVENT",
      description: "Landingpage AppScript Series dari Aurelab membantu Anda membuat landing page untuk event, webinar, atau promosi bisnis dengan cepat. Semua dapat dikelola dengan efisien dan fleksibel via Google Sheets, siap menarik lebih banyak lead.",
      features: [
        "Ubah Tulisan",
        "Ubah Warna Tema", 
        "Ubah Gambar",
        "Ubah CTA",
        "Ubah Layout",
        "Proyek Tidak Terbatas",
        "Hanya Sekali Bayar",
        "Dan masih banyak lagi"
      ],
      originalPrice: "Rp 679.000",
      discountedPrice: "Rp 99.000",
      discount: "85% OFF"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationDirection('right');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationDirection('left');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setAnimationDirection(index > currentSlide ? 'right' : 'left');
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const handleTabChange = (tab: string) => {
    if (isAnimating || tab === activeTab) return;
    setIsAnimating(true);
    setAnimationDirection('fade');
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const currentProduct = products[currentSlide];

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-black transition-all duration-700 ease-out ${
      isPageLoading ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
    }`}>
      {/* Navbar */}
      <Header />

      {/* Header */}
      <div className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Businesses building the future of <br/> digital solutions with AureLab.
            </h1>
            <div className="flex mt-8 lg:mt-0 items-center justify-start lg:justify-end space-x-2 gap-8 mt-6 lg:mt-0">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 mt-6 sm:mt-8">
            <span
              onClick={() => handleTabChange("appscript")}
              className={`text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer relative group ${
                activeTab === "appscript"
                  ? "text-[#dfaa1a]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              AppScript Series
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#dfaa1a] transition-all duration-300 ${
                activeTab === "appscript" ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`}></div>
            </span>
            <span
              onClick={() => handleTabChange("nextjs")}
              className={`text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer relative group ${
                activeTab === "nextjs"
                  ? "text-[#dfaa1a]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Next.js Series
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#dfaa1a] transition-all duration-300 ${
                activeTab === "nextjs" ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`}></div>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#dfaa1a]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Panel - Product Info */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Badge - Animated */}
              <div className={`inline-block transition-all duration-500 ${
                isAnimating 
                  ? animationDirection === 'left' 
                    ? 'opacity-0 -translate-x-8 scale-95' 
                    : animationDirection === 'right'
                    ? 'opacity-0 translate-x-8 scale-95'
                    : 'opacity-0 scale-95'
                  : 'opacity-100 translate-x-0 scale-100'
              }`} style={{ transitionDelay: isAnimating ? '0ms' : '50ms' }}>
                <span className="text-xs sm:text-sm text-[#dfaa1a] bg-[#dfaa1a]/10 px-2 sm:px-3 py-1 rounded-full">
                  {activeTab === "appscript" ? "AppScript Series" : "Next.js Series"}
                </span>
              </div>
              
              {/* Title - Animated */}
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white transition-all duration-500 ${
                isAnimating 
                  ? animationDirection === 'left' 
                    ? 'opacity-0 -translate-x-8 scale-95' 
                    : animationDirection === 'right'
                    ? 'opacity-0 translate-x-8 scale-95'
                    : 'opacity-0 scale-95'
                  : 'opacity-100 translate-x-0 scale-100'
              }`} style={{ transitionDelay: isAnimating ? '0ms' : '100ms' }}>
                {currentProduct.title}
              </h2>
              
              {/* Meta Info - Animated */}
              <div className={`flex items-center space-x-2 text-sm sm:text-base text-gray-300 transition-all duration-500 ${
                isAnimating 
                  ? animationDirection === 'left' 
                    ? 'opacity-0 -translate-x-8 scale-95' 
                    : animationDirection === 'right'
                    ? 'opacity-0 translate-x-8 scale-95'
                    : 'opacity-0 scale-95'
                  : 'opacity-100 translate-x-0 scale-100'
              }`} style={{ transitionDelay: isAnimating ? '0ms' : '150ms' }}>
                <span>Landing Page</span>
                <span>•</span>
                <span>Template</span>
              </div>

              {/* Product Description - Hidden on mobile, shown on desktop - Animated */}
              <p className={`hidden lg:block text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed transition-all duration-500 ${
                isAnimating 
                  ? animationDirection === 'left' 
                    ? 'opacity-0 -translate-x-8 scale-95' 
                    : animationDirection === 'right'
                    ? 'opacity-0 translate-x-8 scale-95'
                    : 'opacity-0 scale-95'
                  : 'opacity-100 translate-x-0 scale-100'
              }`} style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }}>
                {currentProduct.description}
              </p>

              {/* Features - Hidden on mobile, shown on desktop - Animated */}
              <div className={`hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 transition-all duration-500 ${
                isAnimating 
                  ? animationDirection === 'left' 
                    ? 'opacity-0 -translate-x-8 scale-95' 
                    : animationDirection === 'right'
                    ? 'opacity-0 translate-x-8 scale-95'
                    : 'opacity-0 scale-95'
                  : 'opacity-100 translate-x-0 scale-100'
              }`} style={{ transitionDelay: isAnimating ? '0ms' : '250ms' }}>
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#dfaa1a] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Product Image */}
            <div className="relative">
              <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#dfaa1a]/30 transition-all duration-500 ${
                isAnimating 
                  ? animationDirection === 'left' 
                    ? 'opacity-0 translate-x-8 scale-95' 
                    : animationDirection === 'right'
                    ? 'opacity-0 -translate-x-8 scale-95'
                    : 'opacity-0 scale-95'
                  : 'opacity-100 translate-x-0 scale-100'
              }`} style={{ transitionDelay: isAnimating ? '0ms' : '100ms' }}>
                {/* Mockup Image Placeholder */}
                <div className="relative">
                  <div className={`w-full h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center border border-[#dfaa1a]/30 transition-all duration-500 ${
                    isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`} style={{ transitionDelay: isAnimating ? '0ms' : '150ms' }}>
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4">🖥️</div>
                      <div className="text-white text-sm sm:text-base lg:text-lg font-medium">Product Preview</div>
                      <div className="text-gray-400 text-xs sm:text-sm">Coming Soon</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className={`absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#dfaa1a]/20 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isAnimating ? 'opacity-0 scale-0 rotate-180' : 'opacity-100 scale-100 rotate-0'
                  }`} style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }}>
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-[#dfaa1a]" />
                  </div>
                  
                  <div className={`absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#dfaa1a]/20 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isAnimating ? 'opacity-0 scale-0 -rotate-180' : 'opacity-100 scale-100 rotate-0'
                  }`} style={{ transitionDelay: isAnimating ? '0ms' : '250ms' }}>
                    <span className="text-lg sm:text-2xl">⚡</span>
                  </div>
                </div>

                {/* Pricing Badge */}
                <div className={`mt-4 sm:mt-6 text-center transition-all duration-500 ${
                  isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
                }`} style={{ transitionDelay: isAnimating ? '0ms' : '300ms' }}>
                  <div className="inline-flex items-center space-x-2 bg-[#dfaa1a] text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3">
                    <span>NEW PROMO!</span>
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {currentProduct.discount}
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-400 line-through text-sm sm:text-base lg:text-lg">
                      {currentProduct.originalPrice}
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#dfaa1a]">
                      {currentProduct.discountedPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Product Info - Only shown on mobile */}
          <div className="mt-8 lg:hidden">
            {/* Product Description - Animated */}
            <div className={`mb-6 transition-all duration-500 ${
              isAnimating 
                ? animationDirection === 'left' 
                  ? 'opacity-0 -translate-x-8 scale-95' 
                  : animationDirection === 'right'
                  ? 'opacity-0 translate-x-8 scale-95'
                  : 'opacity-0 scale-95'
                : 'opacity-100 translate-x-0 scale-100'
            }`} style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }}>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Features - Animated */}
            <div className={`transition-all duration-500 ${
              isAnimating 
                ? animationDirection === 'left' 
                  ? 'opacity-0 -translate-x-8 scale-95' 
                  : animationDirection === 'right'
                  ? 'opacity-0 translate-x-8 scale-95'
                  : 'opacity-0 scale-95'
                : 'opacity-100 translate-x-0 scale-100'
            }`} style={{ transitionDelay: isAnimating ? '0ms' : '250ms' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#dfaa1a] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="flex space-x-2 sm:space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? "bg-[#dfaa1a]"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    );
};