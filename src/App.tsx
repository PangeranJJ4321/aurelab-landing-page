import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./pages/Hero/index";
import { ProductRoadmap } from "./pages/Roadmap/index";
import { AboutSection } from "./pages/About/index.tsx";
import { TeamSection } from "./pages/Team/index";
import { ContactSection } from "./pages/Contact/Index";
import { Footer } from "./components/Footer";
import { PositionsModal } from "./components/PositionsModal";
import { ProductsModal } from "./components/ProductsModal";
import { WhatsAppButton } from "./components/whatsapp-button";
import ProductsCarousel from "./pages/Products";
import { mockData } from "./constants/mock";

// Create context for modal state
interface ModalContextType {
  isPositionsModalOpen: boolean;
  openPositionsModal: () => void;
  closePositionsModal: () => void;
  isProductsModalOpen: boolean;
  openProductsModal: () => void;
  closeProductsModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

// Create context for language state
export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductRoadmap />
      <ProductsCarousel />
      <TeamSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton 
        phoneNumber={mockData.contact.phone}
      />
    </div>
  );
};

function App() {
  const [isPositionsModalOpen, setIsPositionsModalOpen] = useState(false);
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('id');

  const openPositionsModal = () => setIsPositionsModalOpen(true);
  const closePositionsModal = () => setIsPositionsModalOpen(false);
  
  const openProductsModal = () => setIsProductsModalOpen(true);
  const closeProductsModal = () => setIsProductsModalOpen(false);

  const modalValue = {
    isPositionsModalOpen,
    openPositionsModal,
    closePositionsModal,
    isProductsModalOpen,
    openProductsModal,
    closeProductsModal,
  };

  const languageValue = {
    language,
    setLanguage,
  };

  return (
    <div className="App bg-black min-h-screen">
      <BrowserRouter>
        <LanguageContext.Provider value={languageValue}>
          <ModalContext.Provider value={modalValue}>
            <PositionsModal 
              isOpen={isPositionsModalOpen} 
              onClose={closePositionsModal} 
            />
            <ProductsModal 
              isOpen={isProductsModalOpen} 
              onClose={closeProductsModal} 
            />
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </ModalContext.Provider>
        </LanguageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;