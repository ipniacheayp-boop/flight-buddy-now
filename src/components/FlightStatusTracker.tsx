import { motion } from "framer-motion";
import { CheckCircle, Clock, XCircle, Plane } from "lucide-react";

const statuses = [
  { label: "On Time", icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
  { label: "Delayed", icon: Clock, color: "text-warning", bg: "bg-warning/10" },
  { label: "Cancelled", icon: XCircle, color: "text-cta", bg: "bg-cta/10" },
];

const timelineSteps = [
  { label: "Booked", active: true },
  { label: "Departed", active: true },
  { label: "Arrived", active: false },
];

const FlightStatusTracker = () => {
  return (
    <section id="flight-status" className="py-16 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
            Flight Status Tracker
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Real-time updates on your flight
          </p>

          {/* Status badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {statuses.map((s) => (
              <div key={s.label} className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${s.bg}`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
                <span className={`font-semibold text-sm ${s.color}`}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between relative">
              {/* Line */}
              <div className="absolute top-4 left-8 right-8 h-0.5 bg-border" />
              <div className="absolute top-4 left-8 h-0.5 bg-primary" style={{ width: "50%" }} />

              {timelineSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center z-10 relative">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.active ? "bg-primary" : "bg-border"
                    }`}
                  >
                    {step.active ? (
                      <Plane className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    )}
                  </div>
                  <span className={`mt-2 text-sm font-medium ${step.active ? "text-foreground" : "text-muted-foreground"}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlightStatusTracker;
