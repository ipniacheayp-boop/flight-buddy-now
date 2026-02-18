import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Users, ArrowLeftRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HomeHero = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState<"roundtrip" | "oneway">("roundtrip");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/book");
  };

  return (
    <section className="relative -mt-16 pt-16 min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="container relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-4">
            Explore the World
            <br />
            <span className="text-primary-foreground/80">with SkyVoyage</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-lg">
            Premium air travel to over 200 destinations. Book your next adventure today.
          </p>
        </motion.div>

        {/* Flight search card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 max-w-4xl shadow-2xl">
            {/* Trip type toggle */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setTripType("roundtrip")}
                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${tripType === "roundtrip" ? "border-primary text-foreground" : "border-transparent text-muted-foreground"}`}
              >
                Round Trip
              </button>
              <button
                onClick={() => setTripType("oneway")}
                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${tripType === "oneway" ? "border-primary text-foreground" : "border-transparent text-muted-foreground"}`}
              >
                One Way
              </button>
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              {/* From */}
              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="City or airport"
                    className="w-full h-12 pl-10 pr-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
              </div>

              {/* Swap icon */}
              <div className="hidden md:flex md:col-span-1 items-center justify-center">
                <button type="button" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                  <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              {/* To */}
              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="City or airport"
                    className="w-full h-12 pl-10 pr-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="date"
                    className="w-full h-12 pl-10 pr-3 rounded-lg bg-background border border-border text-sm text-foreground focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="md:col-span-1">
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select className="w-full h-12 pl-10 pr-3 rounded-lg bg-background border border-border text-sm text-foreground focus:ring-2 focus:ring-ring outline-none appearance-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>

              {/* Search */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Search
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
