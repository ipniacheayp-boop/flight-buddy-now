import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  { city: "Tokyo", country: "Japan", code: "NRT", price: "From $699", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80" },
  { city: "Paris", country: "France", code: "CDG", price: "From $449", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80" },
  { city: "Dubai", country: "UAE", code: "DXB", price: "From $599", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
  { city: "New York", country: "USA", code: "JFK", price: "From $299", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80" },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Popular Destinations
            </h2>
            <p className="text-muted-foreground">Handpicked routes with the best fares</p>
          </div>
          <Link to="/book" className="hidden md:flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            View all routes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link to="/book" className="group block overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={`${dest.city}, ${dest.country}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-foreground">{dest.city}</h3>
                    <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">{dest.code}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{dest.country}</p>
                  <p className="text-sm font-bold text-primary">{dest.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
