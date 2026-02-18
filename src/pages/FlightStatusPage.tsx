import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plane, CheckCircle, Clock, XCircle, AlertTriangle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface FlightData {
  flightNumber: string;
  airline: string;
  status: string;
  departure: { airport: string; iata: string; scheduled: string | null; estimated: string | null; actual: string | null; gate: string | null; terminal: string | null };
  arrival: { airport: string; iata: string; scheduled: string | null; estimated: string | null; actual: string | null; gate: string | null; terminal: string | null };
}

const statusMap: Record<string, { label: string; icon: typeof CheckCircle; color: string; bg: string }> = {
  active: { label: "On Time", icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
  scheduled: { label: "Scheduled", icon: Clock, color: "text-primary", bg: "bg-primary/10" },
  landed: { label: "Landed", icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
  cancelled: { label: "Cancelled", icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" },
  diverted: { label: "Diverted", icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" },
};

const fmtTime = (d: string | null) => { if (!d) return "—"; try { return format(new Date(d), "HH:mm"); } catch { return "—"; } };

const FlightStatusPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<FlightData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true); setError(null); setData(null);
    try {
      const { data: res, error: err } = await supabase.functions.invoke("check-flight-status", { body: { flightNumber: query.trim() } });
      if (err) throw err;
      if (res?.error) setError(res.error);
      else setData(res as FlightData);
    } catch {
      setError("Could not check flight status. Please try again.");
    } finally { setLoading(false); }
  };

  const status = data ? statusMap[data.status] || { label: data.status, icon: Clock, color: "text-warning", bg: "bg-warning/10" } : null;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-primary py-12 md:py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">Flight Status</h1>
            <p className="text-primary-foreground/70 mb-8">Track any flight in real time</p>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Flight number (e.g. BA1234)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value.toUpperCase())}
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-background text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button type="submit" disabled={loading} className="h-12 px-8 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60">
                {loading ? "Checking..." : "Track Flight"}
              </button>
            </form>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-2xl">
            {loading && (
              <div className="flex items-center justify-center gap-2 text-primary py-10">
                <Loader2 className="h-5 w-5 animate-spin" /> Checking status...
              </div>
            )}
            {error && <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-center text-sm font-medium">{error}</div>}
            {data && status && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{data.airline}</h2>
                    <p className="text-muted-foreground">{data.flightNumber}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${status.bg}`}>
                    <status.icon className={`h-4 w-4 ${status.color}`} />
                    <span className={`text-sm font-semibold ${status.color}`}>{status.label}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-card border border-border">
                    <p className="text-xs font-medium text-muted-foreground mb-2">DEPARTURE</p>
                    <p className="text-2xl font-bold text-foreground mb-1">{data.departure.iata}</p>
                    <p className="text-sm text-muted-foreground">{data.departure.airport}</p>
                    <p className="text-sm text-foreground mt-2">Scheduled: {fmtTime(data.departure.scheduled)}</p>
                    {data.departure.gate && <p className="text-sm text-muted-foreground">Gate {data.departure.gate}</p>}
                    {data.departure.terminal && <p className="text-sm text-muted-foreground">Terminal {data.departure.terminal}</p>}
                  </div>
                  <div className="p-5 rounded-xl bg-card border border-border">
                    <p className="text-xs font-medium text-muted-foreground mb-2">ARRIVAL</p>
                    <p className="text-2xl font-bold text-foreground mb-1">{data.arrival.iata}</p>
                    <p className="text-sm text-muted-foreground">{data.arrival.airport}</p>
                    <p className="text-sm text-foreground mt-2">Scheduled: {fmtTime(data.arrival.scheduled)}</p>
                    {data.arrival.gate && <p className="text-sm text-muted-foreground">Gate {data.arrival.gate}</p>}
                    {data.arrival.terminal && <p className="text-sm text-muted-foreground">Terminal {data.arrival.terminal}</p>}
                  </div>
                </div>
              </motion.div>
            )}
            {!loading && !error && !data && (
              <div className="text-center py-16">
                <Plane className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Enter a flight number above to check its status.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default FlightStatusPage;
