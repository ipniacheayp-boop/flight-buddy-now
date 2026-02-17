import { motion } from "framer-motion";
import { Plane, Clock, ArrowRight } from "lucide-react";

const flights = [
  { route: "JFK → LHR", airline: "British Airways", departure: "14:30", price: "$389", id: 1 },
  { route: "JFK → LHR", airline: "Delta Airlines", departure: "16:15", price: "$425", id: 2 },
  { route: "JFK → LHR", airline: "Virgin Atlantic", departure: "19:00", price: "$352", id: 3 },
];

const AlternativeFlights = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
            Alternative Flights Available
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            We found these options for you
          </p>

          <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
            {flights.map((flight, i) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Plane className="h-4 w-4 text-primary" />
                  <span className="font-bold text-foreground">{flight.route}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{flight.airline}</p>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Departs {flight.departure}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">{flight.price}</span>
                  <button className="h-10 px-5 rounded-lg bg-cta text-cta-foreground text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98] inline-flex items-center gap-1.5">
                    Book Assistance
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlternativeFlights;
