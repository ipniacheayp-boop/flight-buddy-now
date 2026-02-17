import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import HeroSection from "@/components/HeroSection";
import FlightStatusTracker, { type FlightData } from "@/components/FlightStatusTracker";
import RebookingCTA from "@/components/RebookingCTA";
import AlternativeFlights from "@/components/AlternativeFlights";
import ContactBar from "@/components/ContactBar";
import EmailCapture from "@/components/EmailCapture";
import FAQSection from "@/components/FAQSection";
import Disclaimer from "@/components/Disclaimer";

const Index = () => {
  const [flightData, setFlightData] = useState<FlightData | null>(null);
  const [flightLoading, setFlightLoading] = useState(false);
  const [flightError, setFlightError] = useState<string | null>(null);

  const handleFlightSearch = async (flightNumber: string) => {
    setFlightLoading(true);
    setFlightError(null);
    setFlightData(null);

    try {
      const { data, error } = await supabase.functions.invoke("check-flight-status", {
        body: { flightNumber },
      });

      if (error) throw error;

      if (data?.error) {
        setFlightError(data.error);
      } else {
        setFlightData(data as FlightData);
      }
    } catch (err: any) {
      console.error("Flight search error:", err);
      setFlightError("Could not check flight status. Please try again.");
    } finally {
      setFlightLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onSearch={handleFlightSearch} loading={flightLoading} />
      <FlightStatusTracker flightData={flightData} loading={flightLoading} error={flightError} />
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
