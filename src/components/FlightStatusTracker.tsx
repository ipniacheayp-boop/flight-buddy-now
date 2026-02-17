import { motion } from "framer-motion";
import { CheckCircle, Clock, XCircle, Plane, AlertTriangle, Loader2 } from "lucide-react";
import { format } from "date-fns";

export interface FlightData {
  flightNumber: string;
  airline: string;
  status: string;
  departure: {
    airport: string;
    iata: string;
    scheduled: string | null;
    estimated: string | null;
    actual: string | null;
    gate: string | null;
    terminal: string | null;
  };
  arrival: {
    airport: string;
    iata: string;
    scheduled: string | null;
    estimated: string | null;
    actual: string | null;
    gate: string | null;
    terminal: string | null;
  };
}

interface FlightStatusTrackerProps {
  flightData?: FlightData | null;
  loading?: boolean;
  error?: string | null;
}

const statusConfig: Record<string, { label: string; icon: typeof CheckCircle; color: string; bg: string }> = {
  active: { label: "On Time", icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
  scheduled: { label: "Scheduled", icon: Clock, color: "text-primary", bg: "bg-primary/10" },
  landed: { label: "Landed", icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
  cancelled: { label: "Cancelled", icon: XCircle, color: "text-cta", bg: "bg-cta/10" },
  incident: { label: "Incident", icon: AlertTriangle, color: "text-cta", bg: "bg-cta/10" },
  diverted: { label: "Diverted", icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" },
};

const defaultStatuses = [
  { label: "On Time", icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
  { label: "Delayed", icon: Clock, color: "text-warning", bg: "bg-warning/10" },
  { label: "Cancelled", icon: XCircle, color: "text-cta", bg: "bg-cta/10" },
];

const formatTime = (dateStr: string | null) => {
  if (!dateStr) return "—";
  try {
    return format(new Date(dateStr), "HH:mm");
  } catch {
    return "—";
  }
};

const FlightStatusTracker = ({ flightData, loading, error }: FlightStatusTrackerProps) => {
  const getTimelineSteps = () => {
    if (!flightData) {
      return [
        { label: "Booked", active: true },
        { label: "Departed", active: true },
        { label: "Arrived", active: false },
      ];
    }
    const s = flightData.status;
    return [
      { label: "Scheduled", active: true },
      { label: "Departed", active: s === "active" || s === "landed" },
      { label: "Arrived", active: s === "landed" },
    ];
  };

  const timelineSteps = getTimelineSteps();
  const activeCount = timelineSteps.filter((s) => s.active).length;
  const progressWidth = activeCount <= 1 ? "0%" : activeCount === 2 ? "50%" : "100%";

  const currentStatus = flightData
    ? statusConfig[flightData.status] || { label: flightData.status, icon: Clock, color: "text-warning", bg: "bg-warning/10" }
    : null;

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
            {flightData ? `${flightData.airline} — ${flightData.flightNumber}` : "Real-time updates on your flight"}
          </p>

          {loading && (
            <div className="flex items-center justify-center gap-2 text-primary mb-6">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="font-medium">Checking flight status...</span>
            </div>
          )}

          {error && (
            <div className="max-w-md mx-auto mb-6 p-4 rounded-lg bg-cta/10 text-cta text-center text-sm font-medium">
              {error}
            </div>
          )}

          {/* Status badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {flightData && currentStatus ? (
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${currentStatus.bg}`}>
                <currentStatus.icon className={`h-5 w-5 ${currentStatus.color}`} />
                <span className={`font-semibold text-sm ${currentStatus.color}`}>{currentStatus.label}</span>
              </div>
            ) : (
              defaultStatuses.map((s) => (
                <div key={s.label} className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${s.bg}`}>
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                  <span className={`font-semibold text-sm ${s.color}`}>{s.label}</span>
                </div>
              ))
            )}
          </div>

          {/* Flight details */}
          {flightData && (
            <div className="max-w-lg mx-auto grid grid-cols-2 gap-4 mb-10 text-sm">
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-muted-foreground mb-1">Departure</p>
                <p className="font-bold text-foreground">{flightData.departure.iata} — {flightData.departure.airport}</p>
                <p className="text-muted-foreground">Scheduled: {formatTime(flightData.departure.scheduled)}</p>
                {flightData.departure.gate && <p className="text-muted-foreground">Gate: {flightData.departure.gate}</p>}
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-muted-foreground mb-1">Arrival</p>
                <p className="font-bold text-foreground">{flightData.arrival.iata} — {flightData.arrival.airport}</p>
                <p className="text-muted-foreground">Scheduled: {formatTime(flightData.arrival.scheduled)}</p>
                {flightData.arrival.gate && <p className="text-muted-foreground">Gate: {flightData.arrival.gate}</p>}
              </div>
            </div>
          )}

          {/* Timeline */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-4 left-8 right-8 h-0.5 bg-border" />
              <div className="absolute top-4 left-8 h-0.5 bg-primary transition-all duration-500" style={{ width: progressWidth }} />

              {timelineSteps.map((step) => (
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
