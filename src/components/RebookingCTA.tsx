import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RebookingCTA = () => {
  return (
    <section className="py-14 bg-primary">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            Need a New Flight?
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-lg">
            Our agents find alternatives in minutes.
          </p>
          <button className="w-full sm:w-auto h-14 px-10 rounded-lg bg-cta text-cta-foreground font-bold text-lg hover:opacity-90 transition-opacity active:scale-[0.98] inline-flex items-center justify-center gap-2">
            Get Rebooking Help Now
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RebookingCTA;
