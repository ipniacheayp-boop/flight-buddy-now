import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError("");

    const { error: dbError } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase() });

    setLoading(false);

    if (dbError) {
      if (dbError.code === "23505") {
        setSubmitted(true); // already subscribed, treat as success
      } else {
        setError("Something went wrong. Please try again.");
        console.error("Subscriber insert error:", dbError);
      }
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          <Bell className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Get Flight Alerts Before Your Trip
          </h2>
          <p className="text-muted-foreground mb-6">
            We'll notify you of any delays or cancellations so you're always prepared.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-2 text-success font-semibold"
            >
              <CheckCircle className="h-5 w-5" />
              You're all set! We'll keep you updated.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-lg bg-background text-foreground border border-border text-base placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={loading}
                className="h-12 px-7 rounded-lg bg-cta text-cta-foreground font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.98] shrink-0 disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> : "Notify Me"}
              </button>
            </form>
          )}
          {error && <p className="text-cta text-sm mt-2">{error}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;
