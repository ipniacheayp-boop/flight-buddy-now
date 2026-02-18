import { motion } from "framer-motion";
import { Shield, Globe, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "200+ Destinations",
    description: "Fly to over 200 destinations across 6 continents with seamless connections worldwide.",
  },
  {
    icon: Shield,
    title: "Flexible Booking",
    description: "Change or cancel your flight with ease. We offer free rebooking on most fare classes.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Consistently rated among the top airlines for comfort, service, and on-time performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you with any needs.",
  },
];

const WhyFlyWithUs = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Fly With SkyVoyage
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experience the difference of premium air travel designed around you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFlyWithUs;
