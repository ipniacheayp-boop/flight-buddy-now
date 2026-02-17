const features = [
  { icon: "✈️", title: "300+ Destinations", desc: "Fly to more places on our global network across 6 continents." },
  { icon: "🛡️", title: "Flexible Booking", desc: "Change or cancel with no fees on most fares." },
  { icon: "⭐", title: "SkyMiles Rewards", desc: "Earn miles every flight. Redeem for future travel." },
  { icon: "💺", title: "Premium Comfort", desc: "Delta One®, First Class, and Delta Comfort+ options." },
];

export default function FeaturesSection() {
  return (
    <section className="bg-delta-blue py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-10">Why Fly Delta</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-3">
              <div className="text-3xl">{f.icon}</div>
              <div className="text-white font-semibold text-base">{f.title}</div>
              <div className="text-white/60 text-sm leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
