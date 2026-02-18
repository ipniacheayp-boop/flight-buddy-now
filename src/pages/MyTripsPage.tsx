import { motion } from "framer-motion";
import { Plane, Search, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const sampleTrips = [
  { id: 1, ref: "SVXK7M", from: "JFK", to: "LHR", date: "Mar 15, 2026", status: "Upcoming", airline: "SkyVoyage" },
  { id: 2, ref: "SVPL3N", from: "LHR", to: "CDG", date: "Feb 28, 2026", status: "Completed", airline: "SkyVoyage" },
];

const MyTripsPage = () => {
  const [refCode, setRefCode] = useState("");
  const [showTrips, setShowTrips] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-primary py-12 md:py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">My Trips</h1>
            <p className="text-primary-foreground/70 mb-8">Manage your bookings in one place</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setShowTrips(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Booking reference (e.g. SVXK7M)"
                  value={refCode}
                  onChange={(e) => setRefCode(e.target.value.toUpperCase())}
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-background text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button type="submit" className="h-12 px-8 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity">
                Find Booking
              </button>
            </form>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-2xl">
            {showTrips ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h2 className="text-lg font-bold text-foreground mb-4">Your Trips</h2>
                {sampleTrips.map((trip, i) => (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card border border-border rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded">Ref: {trip.ref}</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded ${trip.status === "Upcoming" ? "bg-primary/10 text-primary" : "bg-success/10 text-success"}`}>
                        {trip.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Plane className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-foreground">{trip.from} → {trip.to}</p>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {trip.date}
                        </div>
                      </div>
                      {trip.status === "Upcoming" && (
                        <button className="h-9 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-1">
                          Manage <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <Plane className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Enter your booking reference to view your trips.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default MyTripsPage;
