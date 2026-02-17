import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plane } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onSearch: (flightNumber: string) => void;
  loading?: boolean;
}

const HeroSection = ({ onSearch, loading }: HeroSectionProps) => {
  const [flightNumber, setFlightNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (flightNumber.trim()) {
      onSearch(flightNumber.trim());
      document.getElementById("flight-status")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      <div className="container relative z-10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Plane className="h-5 w-5 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
              24/7 Travel Assistance
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
            Flight Delayed or Cancelled? We'll Rebook You Fast.
          </h1>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
            Independent travel assistance — available 24/7
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter flight number (e.g. BA1234)"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                className="w-full h-13 pl-11 pr-4 rounded-lg bg-background text-foreground text-base placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="h-13 px-7 rounded-lg bg-cta text-cta-foreground font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.98] shrink-0 disabled:opacity-60"
            >
              {loading ? "Checking..." : "Check Status"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
