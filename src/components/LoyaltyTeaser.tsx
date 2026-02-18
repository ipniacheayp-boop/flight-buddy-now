import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const LoyaltyTeaser = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-foreground p-10 md:p-16"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="relative max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
              <span className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">SkyRewards Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 leading-tight">
              Every Mile Takes You Further
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-md">
              Join SkyRewards and earn miles on every flight. Unlock exclusive benefits, priority boarding, and lounge access.
            </p>
            <Link
              to="/loyalty"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
            >
              Join SkyRewards
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoyaltyTeaser;
