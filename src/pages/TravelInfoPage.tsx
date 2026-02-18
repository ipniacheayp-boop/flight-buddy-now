import { motion } from "framer-motion";
import { Luggage, Clock, ShieldCheck, Plane, ChevronRight } from "lucide-react";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const tabs = ["Baggage", "Check-in", "Airport Guide", "Visa & Passport"];

const content: Record<string, { title: string; description: string; items: { title: string; detail: string }[] }> = {
  Baggage: {
    title: "Baggage Allowance",
    description: "Know what you can bring before you go.",
    items: [
      { title: "Carry-On", detail: "1 carry-on bag (max 10kg) + 1 personal item included on all fares." },
      { title: "Checked Baggage", detail: "Economy: 1 × 23kg bag. Business: 2 × 32kg bags. First: 3 × 32kg bags." },
      { title: "Extra Baggage", detail: "Purchase additional bags online at a discounted rate up to 24 hours before departure." },
      { title: "Special Items", detail: "Sports equipment, musical instruments, and oversized items may incur additional fees." },
    ],
  },
  "Check-in": {
    title: "Online Check-in",
    description: "Check in from anywhere, anytime.",
    items: [
      { title: "When to Check In", detail: "Online check-in opens 48 hours and closes 2 hours before departure." },
      { title: "Mobile Boarding Pass", detail: "Download your boarding pass to your phone or print it at the airport." },
      { title: "Seat Selection", detail: "Choose your preferred seat during check-in or pre-select when booking." },
      { title: "Airport Check-in", detail: "Airport counters open 3 hours before departure for international flights." },
    ],
  },
  "Airport Guide": {
    title: "At the Airport",
    description: "Make your airport experience smooth and stress-free.",
    items: [
      { title: "Arrival Time", detail: "Arrive at least 2 hours before domestic and 3 hours before international flights." },
      { title: "Security", detail: "Have your boarding pass and ID ready. Remove liquids and electronics from carry-on." },
      { title: "Lounges", detail: "SkyRewards Gold and Platinum members enjoy complimentary lounge access." },
      { title: "Transfers", detail: "Allow at least 90 minutes for connecting flights at major hubs." },
    ],
  },
  "Visa & Passport": {
    title: "Travel Documents",
    description: "Ensure your documents are in order before you travel.",
    items: [
      { title: "Passport Validity", detail: "Many countries require at least 6 months of passport validity from your travel date." },
      { title: "Visa Requirements", detail: "Check destination visa requirements well in advance. We recommend at least 8 weeks." },
      { title: "Transit Visas", detail: "Some countries require transit visas even if you're not leaving the airport." },
      { title: "Travel Insurance", detail: "We strongly recommend comprehensive travel insurance for all international trips." },
    ],
  },
};

const TravelInfoPage = () => {
  const [activeTab, setActiveTab] = useState("Baggage");
  const data = content[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-primary py-12 md:py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">Travel Information</h1>
            <p className="text-primary-foreground/70">Everything you need for a smooth journey</p>
          </div>
        </section>

        <section className="py-10">
          <div className="container max-w-4xl">
            {/* Tabs */}
            <div className="flex overflow-x-auto gap-2 mb-10 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-2xl font-bold text-foreground mb-2">{data.title}</h2>
              <p className="text-muted-foreground mb-8">{data.description}</p>

              <div className="space-y-4">
                {data.items.map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default TravelInfoPage;
