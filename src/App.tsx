import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./pages/Hero/index";
import { ProductRoadmap } from "./pages/Roadmap/index";
// import { AboutSection } from "./pages/About/index";
import { TeamSection } from "./pages/Team/index";
import { ContactSection } from "./pages/Contact/Index";
import { ProductsPage } from "./pages/Products/index";
import { Footer } from "./components/Footer";
import { PositionsModal } from "./components/PositionsModal";

// Create context for modal state
interface ModalContextType {
  isPositionsModalOpen: boolean;
  openPositionsModal: () => void;
  closePositionsModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <ProductRoadmap />
      {/* <AboutSection /> */}
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

// Smooth transition wrapper component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      className={`page-transition ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        transition: 'opacity 0.2s ease-in-out',
        minHeight: '100vh',
        backgroundColor: '#000000'
      }}
    >
      {children}
    </div>
  );
};

function App() {
  const [isPositionsModalOpen, setIsPositionsModalOpen] = useState(false);

  const openPositionsModal = () => setIsPositionsModalOpen(true);
  const closePositionsModal = () => setIsPositionsModalOpen(false);

  const modalValue = {
    isPositionsModalOpen,
    openPositionsModal,
    closePositionsModal,
  };

  return (
    <div className="App bg-black min-h-screen">
      <BrowserRouter>
        <ModalContext.Provider value={modalValue}>
          <PositionsModal 
            isOpen={isPositionsModalOpen} 
            onClose={closePositionsModal} 
          />
          <PageTransition>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </PageTransition>
        </ModalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;