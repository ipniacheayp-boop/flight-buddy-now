const destinations = [
  { name: "New York", tagline: "The City That Never Sleeps", gradient: "from-slate-900 to-blue-900", large: true },
  { name: "Paris",    tagline: "City of Light",             gradient: "from-violet-800 to-indigo-900" },
  { name: "Tokyo",    tagline: "Future Meets Tradition",    gradient: "from-red-800 to-rose-900" },
  { name: "Miami",    tagline: "Sun, Sand & Culture",       gradient: "from-amber-400 to-orange-500" },
  { name: "Bali",     tagline: "Island Paradise",           gradient: "from-teal-600 to-emerald-800" },
];

export default function DestinationsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-delta-blue">Popular Destinations</h2>
        <a href="#" className="text-delta-red text-sm font-semibold hover:underline">Explore all →</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ gridTemplateRows: "200px 200px" }}>
        {destinations.map((dest, i) => (
          <div
            key={dest.name}
            className={`relative rounded-xl overflow-hidden cursor-pointer group ${i === 0 ? "row-span-2 col-span-1" : ""}`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${dest.gradient} transition-transform duration-300 group-hover:scale-105`}
              style={{ minHeight: i === 0 ? "416px" : "200px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="font-bold text-xl">{dest.name}</div>
              <div className="text-xs opacity-80">{dest.tagline}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
