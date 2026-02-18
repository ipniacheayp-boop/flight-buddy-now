import { motion } from "framer-motion";
import { Star, Crown, Gem, Award, ArrowRight, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const tiers = [
  {
    name: "Silver",
    miles: "0 – 24,999",
    icon: Star,
    color: "text-muted-foreground",
    bg: "bg-muted",
    benefits: ["Earn 1 mile per $1 spent", "Priority check-in", "Extra baggage allowance", "Seat selection included"],
  },
  {
    name: "Gold",
    miles: "25,000 – 74,999",
    icon: Award,
    color: "text-warning",
    bg: "bg-warning/10",
    benefits: ["Earn 1.5x miles", "Priority boarding", "Lounge access (2x/year)", "Free same-day changes", "Complimentary upgrades (subject to availability)"],
  },
  {
    name: "Platinum",
    miles: "75,000+",
    icon: Gem,
    color: "text-primary",
    bg: "bg-primary/10",
    benefits: ["Earn 2x miles", "Unlimited lounge access", "Guaranteed upgrades", "Dedicated concierge", "Free companion ticket annually", "Global partner lounge access"],
  },
];

const LoyaltyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-foreground py-20 md:py-28">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-6 w-6 text-primary-foreground" />
              <span className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">SkyRewards</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Rewarding Every Journey
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Earn miles on every flight and unlock a world of exclusive benefits. The more you fly, the more you earn.
            </p>
            <button className="h-12 px-8 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Join SkyRewards Free <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Tiers */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">Membership Tiers</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
              Your tier is determined by the miles you earn each calendar year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 text-center"
                >
                  <div className={`w-14 h-14 rounded-xl ${tier.bg} flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className={`h-7 w-7 ${tier.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{tier.miles} miles/year</p>
                  <ul className="space-y-3 text-left">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earn miles */}
        <section className="py-20 bg-muted/50">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">How to Earn Miles</h2>
            <p className="text-muted-foreground mb-10">Miles accumulate with every trip and through our partner network.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Fly", desc: "Earn miles on every SkyVoyage flight based on distance and fare class." },
                { label: "Shop", desc: "Use SkyRewards partners for shopping, dining, and car rentals." },
                { label: "Stay", desc: "Earn bonus miles with our hotel and travel partners worldwide." },
              ].map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default LoyaltyPage;
