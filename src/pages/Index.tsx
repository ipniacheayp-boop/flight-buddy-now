import HeroSection from "@/components/HeroSection";
import FlightStatusTracker from "@/components/FlightStatusTracker";
import RebookingCTA from "@/components/RebookingCTA";
import AlternativeFlights from "@/components/AlternativeFlights";
import ContactBar from "@/components/ContactBar";
import EmailCapture from "@/components/EmailCapture";
import FAQSection from "@/components/FAQSection";
import Disclaimer from "@/components/Disclaimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FlightStatusTracker />
      <RebookingCTA />
      <AlternativeFlights />
      <ContactBar />
      <EmailCapture />
      <FAQSection />
      <Disclaimer />
    </div>
  );
};

export default Index;
