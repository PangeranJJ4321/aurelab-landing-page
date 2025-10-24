import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./pages/Hero/index";
import { ProductRoadmap } from "./pages/Roadmap/index";
import { AboutSection } from "./pages/About/index";
import { TeamSection } from "./pages/Team/index";
import { ContactSection } from "./pages/Contact/Index";
import { ProductsPage } from "./pages/Products/index";
import Positions from "./pages/Positions/index";
import PositionDetail from "./pages/PositionDetail/index";
import Application from "./pages/Application/index";
import { Footer } from "./components/Footer";


const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <ProductRoadmap />
      <AboutSection />
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
  return (
    <div className="App bg-black min-h-screen">
      <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/positions/:id" element={<PositionDetailWrapper />} />
            <Route path="/apply" element={<ApplicationWrapper />} />
            <Route path="/apply/:id" element={<ApplicationWrapper />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </div>
  );
}

// Wrapper component to extract position ID from URL params
const PositionDetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <PositionDetail positionId={id || ''} />;
};

// Wrapper component for Application page
const ApplicationWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <Application positionId={id} />;
};

export default App;