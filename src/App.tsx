import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./pages/Hero/index";
import { ProductRoadmap } from "./pages/Roadmap/index";
import { AboutSection } from "./pages/About/index";
import { TeamSection } from "./pages/Team/index";
import { ContactSection } from "./pages/Contact/Index";
import { ProductsPage } from "./pages/Products/index";
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

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;