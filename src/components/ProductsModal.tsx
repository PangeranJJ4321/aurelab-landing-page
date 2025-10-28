import { useState } from "react";
import { ChevronLeft, ChevronRight, Zap, Check, X, ArrowLeft } from "lucide-react";

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsModal: React.FC<ProductsModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("appscript");
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: "LANDING PAGE PORTOFOLIO",
      description: "Template landing page AppScript Series untuk portofolio profesional (karya, proyek) tanpa perlu pengalaman teknis. Konten dapat dikelola langsung dari Google Sheets dan otomatis ditampilkan di landing page.",
      image: "/5.png",
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
      image: "/6.png",
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
      image: "/7.png",
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
      id: 4,
      title: "LANDING PAGE BISNIS",
      description: "Template landing page AppScript Series untuk bisnis profesional dengan sistem manajemen konten yang mudah. Dapatkan landing page yang menarik dan profesional untuk meningkatkan konversi bisnis Anda.",
      image: "/8.png",
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
      id: 5,
      title: "NEXT.JS PORTFOLIO TEMPLATE",
      description: "Template portfolio modern menggunakan Next.js dengan performa tinggi dan SEO yang optimal. Cocok untuk developer, designer, atau profesional yang ingin showcase karya mereka dengan teknologi terdepan.",
      image: "/9.png",
      features: [
        "Next.js 14",
        "TypeScript Support",
        "SEO Optimized",
        "Responsive Design",
        "Dark/Light Mode",
        "CMS Integration",
        "Performance Optimized",
        "Modern UI/UX"
      ],
      originalPrice: "Rp 1.299.000",
      discountedPrice: "Rp 199.000",
      discount: "85% OFF"
    },
    {
      id: 6,
      title: "NEXT.JS E-COMMERCE TEMPLATE",
      description: "Template e-commerce lengkap menggunakan Next.js dengan fitur modern seperti payment gateway, inventory management, dan admin dashboard. Siap untuk bisnis online yang serius.",
      image: "/10.png",
      features: [
        "Next.js 14",
        "Payment Gateway",
        "Admin Dashboard",
        "Inventory Management",
        "User Authentication",
        "Order Tracking",
        "Mobile Responsive",
        "Performance Optimized"
      ],
      originalPrice: "Rp 1.999.000",
      discountedPrice: "Rp 299.000",
      discount: "85% OFF"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredProducts.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const handleTabChange = (tab: string) => {
    if (isAnimating || tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setCurrentSlide(0); // Reset to first slide when changing tabs
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Filter products based on active tab
  const filteredProducts = products.filter(product => {
    if (activeTab === "appscript") {
      return product.id <= 4; // Products 1-4 are AppScript
    } else {
      return product.id >= 5; // Products 5-6 are Next.js
    }
  });

  const currentProduct = filteredProducts[currentSlide % filteredProducts.length];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-black w-full max-w-6xl mt-23 mb-8 lg:my-32 mx-4 flex flex-col p-4 lg:p-8 z-10 border border-[#dfaa1a]/20 rounded-xl">
        {/* Back Button - Desktop Only, Outside Modal */}
        <button
          onClick={onClose}
          className="hidden lg:flex items-center mt-5 gap-2 text-[#dfaa1a] hover:text-yellow-400 transition-colors duration-300 group absolute -top-16 left-0"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Kembali</span>
        </button>

        {/* Close Button - Mobile Only */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-[#dfaa1a] hover:text-white transition-colors duration-300 z-50 bg-black border border-[#dfaa1a]/30 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 relative z-10 bg-black pr-14 lg:pr-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Produk Kami
            </h1>
          </div>
          
          <div className="hidden lg:flex mt-4 lg:mt-0 items-center justify-end space-x-2 gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 mb-6">
          <button
            onClick={() => handleTabChange("appscript")}
            className={`text-base font-medium transition-all duration-300 cursor-pointer relative group ${
              activeTab === "appscript" ? "text-[#dfaa1a]" : "text-gray-400 hover:text-white"
            }`}
          >
            AppScript Series
            <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#dfaa1a] transition-all duration-300 ${
              activeTab === "appscript" ? "opacity-100" : "opacity-0 group-hover:opacity-50"
            }`}></div>
          </button>
          <button
            onClick={() => handleTabChange("nextjs")}
            className={`text-base font-medium transition-all duration-300 cursor-pointer relative group ${
              activeTab === "nextjs" ? "text-[#dfaa1a]" : "text-gray-400 hover:text-white"
            }`}
          >
            Next.js Series
            <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#dfaa1a] transition-all duration-300 ${
              activeTab === "nextjs" ? "opacity-100" : "opacity-0 group-hover:opacity-50"
            }`}></div>
          </button>
        </div>

        {/* Main Content */}
        <div 
          className="bg-gradient-to-br from-gray-900 to-black border border-[#dfaa1a]/30 rounded-2xl p-6 lg:p-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Panel - Product Info (Desktop: Left, Mobile: Bottom) */}
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-sm text-[#dfaa1a] bg-[#dfaa1a]/10 px-3 py-1 rounded-full">
                {activeTab === "appscript" ? "AppScript Series" : "Next.js Series"}
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {currentProduct.title}
              </h2>
              
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>Landing Page</span>
                <span>•</span>
                <span>Template</span>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {currentProduct.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-[#dfaa1a] flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Product Image (Desktop: Right, Mobile: Top) */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 border border-[#dfaa1a]/30">
                <div className="relative">
                  <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden border border-[#dfaa1a]/30">
                    <img 
                      src={currentProduct.image} 
                      alt={currentProduct.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#dfaa1a]/20 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-[#dfaa1a]" />
                  </div>
                  
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-[#dfaa1a]/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-[#dfaa1a] text-black px-4 py-2 rounded-full text-sm font-bold mb-3">
                    <span>NEW PROMO!</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {currentProduct.discount}
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-400 line-through text-lg">
                      {currentProduct.originalPrice}
                    </div>
                    <div className="text-2xl font-bold text-[#dfaa1a]">
                      {currentProduct.discountedPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Dots */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-3">
              {filteredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
    </div>
  );
};