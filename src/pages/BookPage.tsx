import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, ArrowLeftRight, ArrowRight, Plane, Clock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const sampleResults = [
  { id: 1, from: "JFK", to: "LHR", airline: "SkyVoyage", depart: "08:30", arrive: "20:15", duration: "7h 45m", stops: "Nonstop", price: 449, cabin: "Economy" },
  { id: 2, from: "JFK", to: "LHR", airline: "SkyVoyage", depart: "13:00", arrive: "01:30+1", duration: "8h 30m", stops: "Nonstop", price: 389, cabin: "Economy" },
  { id: 3, from: "JFK", to: "LHR", airline: "SkyVoyage", depart: "18:45", arrive: "06:50+1", duration: "8h 05m", stops: "Nonstop", price: 529, cabin: "Economy Plus" },
  { id: 4, from: "JFK", to: "LHR", airline: "SkyVoyage", depart: "22:00", arrive: "10:20+1", duration: "8h 20m", stops: "1 Stop", price: 319, cabin: "Economy" },
];

const BookPage = () => {
  const [searched, setSearched] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Search bar */}
        <section className="bg-primary py-8">
          <div className="container">
            <form
              onSubmit={(e) => { e.preventDefault(); setSearched(true); }}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end"
            >
              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-primary-foreground/70 mb-1.5">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input defaultValue="New York (JFK)" className="w-full h-12 pl-10 pr-3 rounded-lg bg-background border-0 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="hidden md:flex md:col-span-1 items-center justify-center">
                <button type="button" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                  <ArrowLeftRight className="h-4 w-4 text-primary-foreground" />
                </button>
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-primary-foreground/70 mb-1.5">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input defaultValue="London (LHR)" className="w-full h-12 pl-10 pr-3 rounded-lg bg-background border-0 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-primary-foreground/70 mb-1.5">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input type="date" className="w-full h-12 pl-10 pr-3 rounded-lg bg-background border-0 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-medium text-primary-foreground/70 mb-1.5">Pax</label>
                <select className="w-full h-12 px-3 rounded-lg bg-background border-0 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring appearance-none">
                  <option>1</option><option>2</option><option>3</option><option>4</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full h-12 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Search <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Results */}
        <section className="py-10">
          <div className="container max-w-4xl">
            {!searched ? (
              <div className="text-center py-20">
                <Plane className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-foreground mb-2">Search for Flights</h2>
                <p className="text-muted-foreground">Enter your route and dates above to find available flights.</p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">JFK → LHR</h2>
                  <span className="text-sm text-muted-foreground">{sampleResults.length} flights found</span>
                </div>
                <div className="space-y-3">
                  {sampleResults.map((f, i) => (
                    <motion.div
                      key={f.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Plane className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{f.airline}</p>
                            <p className="text-xs text-muted-foreground">{f.cabin}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 flex-1 justify-center">
                          <div className="text-center">
                            <p className="text-lg font-bold text-foreground">{f.depart}</p>
                            <p className="text-xs text-muted-foreground">{f.from}</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <p className="text-xs text-muted-foreground">{f.duration}</p>
                            <div className="w-20 h-px bg-border my-1 relative">
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Plane className="h-3 w-3 text-primary" />
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">{f.stops}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-foreground">{f.arrive}</p>
                            <p className="text-xs text-muted-foreground">{f.to}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-2xl font-extrabold text-foreground">${f.price}</p>
                          <button className="h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                            Select
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BookPage;
