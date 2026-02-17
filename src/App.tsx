import UtilityBar from "./components/UtilityBar";
import Navbar from "./components/Navbar";
import HeroSearch from "./components/HeroSearch";
import PromoBanner from "./components/PromoBanner";
import DealsSection from "./components/DealsSection";
import DestinationsSection from "./components/DestinationsSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <UtilityBar />
      <Navbar />
      <HeroSearch />
      <PromoBanner />
      <DealsSection />
      <DestinationsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
