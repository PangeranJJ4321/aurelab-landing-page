import { useState } from "react";
import { ChevronLeft, ChevronRight, Zap, Check } from "lucide-react";

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsModal: React.FC<ProductsModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("appscript");
  const [isAnimating, setIsAnimating] = useState(false);

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
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
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
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const currentProduct = products[currentSlide];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-black w-full max-w-7xl min-h-[80vh] flex flex-col p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Produk Kami
          </h1>
          <div className="flex mt-4 lg:mt-0 items-center justify-end space-x-2 gap-4">
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
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#dfaa1a]/30 rounded-2xl p-6 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Panel - Product Info */}
            <div className="space-y-6">
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

            {/* Right Panel - Product Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 border border-[#dfaa1a]/30">
                <div className="relative">
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-[#dfaa1a]/30">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🖥️</div>
                      <div className="text-white text-lg font-medium">Product Preview</div>
                      <div className="text-gray-400 text-sm">Coming Soon</div>
                    </div>
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
              {products.map((_, index) => (
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

