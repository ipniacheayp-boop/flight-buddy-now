const promos = [
  "✈️ Summer Sale – Flights from $129",
  "🌍 New International Routes",
  "🎫 SkyMiles Flash Sale – Ends Sunday",
  "🏖️ Vacation Packages Now Available",
];

export default function PromoBanner() {
  return (
    <div className="bg-delta-blue-light border-b border-delta-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-8 overflow-x-auto">
        {promos.map((p) => (
          <span key={p} className="text-delta-blue text-sm font-medium whitespace-nowrap cursor-pointer hover:underline shrink-0">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
