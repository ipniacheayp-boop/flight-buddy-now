const deals = [
  { city: "Paris", country: "France", from: "New York (JFK)", price: "$389", badge: "SALE", gradient: "from-indigo-800 to-purple-900" },
  { city: "Tokyo", country: "Japan", from: "Los Angeles (LAX)", price: "$649", badge: "NEW ROUTE", gradient: "from-rose-800 to-red-900" },
  { city: "Miami", country: "Florida", from: "Chicago (ORD)", price: "$129", badge: "DEAL", gradient: "from-amber-500 to-orange-600" },
  { city: "London", country: "England", from: "Atlanta (ATL)", price: "$449", badge: "HOT", gradient: "from-slate-700 to-slate-900" },
];

export default function DealsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-delta-blue">Flight Deals</h2>
        <a href="#" className="text-delta-red text-sm font-semibold hover:underline">View all deals →</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {deals.map((deal) => (
          <div key={deal.city} className="rounded-lg overflow-hidden border border-delta-border shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
            <div className={`h-40 bg-gradient-to-br ${deal.gradient} relative`}>
              <span className="absolute top-3 left-3 bg-delta-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                {deal.badge}
              </span>
            </div>
            <div className="p-4 bg-white">
              <div className="text-base font-bold text-delta-text">{deal.city}, {deal.country}</div>
              <div className="text-xs text-delta-muted mb-3">{deal.from}</div>
              <div className="text-xl font-bold text-delta-red">
                {deal.price} <span className="text-xs text-delta-muted font-normal">/ person RT</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
