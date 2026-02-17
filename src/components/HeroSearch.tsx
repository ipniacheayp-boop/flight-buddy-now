import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

const tabs = ["Flights", "Hotels", "Cars", "Vacations", "Cruises"];

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState("Flights");
  const [tripType, setTripType] = useState("roundtrip");

  return (
    <section
      className="relative bg-delta-blue min-h-[480px] flex items-end pb-0"
      style={{
        background: "linear-gradient(135deg, #001d42 0%, #003A70 55%, #004f9e 100%)",
      }}
    >
      {/* Hero Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 text-center md:text-left">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-2">
          Where Will You Fly Next?
        </h1>
        <p className="text-white/70 text-lg">Book flights to 300+ destinations worldwide.</p>
      </div>

      {/* Search Box */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-t-xl shadow-2xl">

          {/* Tab Bar */}
          <div className="flex border-b border-delta-border overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-4 transition-colors ${
                  activeTab === tab
                    ? "border-delta-red text-delta-blue"
                    : "border-transparent text-delta-muted hover:text-delta-blue"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Trip Type */}
          <div className="px-6 pt-4 flex gap-6 flex-wrap">
            {["roundtrip", "oneway", "multicity"].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer text-sm text-delta-text">
                <input
                  type="radio"
                  name="triptype"
                  value={type}
                  checked={tripType === type}
                  onChange={() => setTripType(type)}
                  className="accent-delta-blue"
                />
                {type === "roundtrip" ? "Round Trip" : type === "oneway" ? "One Way" : "Multi-City"}
              </label>
            ))}
            <label className="flex items-center gap-2 cursor-pointer text-sm text-delta-blue ml-auto">
              <input type="checkbox" className="accent-delta-blue" />
              Search with miles
            </label>
          </div>

          {/* Fields */}
          <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
            {/* From */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-delta-muted uppercase tracking-wide mb-1">From</label>
              <input
                type="text"
                placeholder="City or airport"
                defaultValue="New York - JFK"
                className="w-full border border-delta-border rounded px-3 py-2.5 text-sm text-delta-text focus:outline-none focus:border-delta-blue"
              />
            </div>

            {/* Swap */}
            <div className="hidden md:flex items-end justify-center pb-1">
              <button className="p-2 rounded-full border border-delta-border hover:bg-delta-gray text-delta-blue transition">
                <ArrowLeftRight size={16} />
              </button>
            </div>

            {/* To */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-delta-muted uppercase tracking-wide mb-1">To</label>
              <input
                type="text"
                placeholder="City or airport"
                className="w-full border border-delta-border rounded px-3 py-2.5 text-sm text-delta-text focus:outline-none focus:border-delta-blue"
              />
            </div>

            {/* Depart */}
            <div>
              <label className="block text-xs font-bold text-delta-muted uppercase tracking-wide mb-1">Depart</label>
              <input
                type="date"
                className="w-full border border-delta-border rounded px-3 py-2.5 text-sm text-delta-text focus:outline-none focus:border-delta-blue"
              />
            </div>

            {/* Return */}
            {tripType === "roundtrip" && (
              <div>
                <label className="block text-xs font-bold text-delta-muted uppercase tracking-wide mb-1">Return</label>
                <input
                  type="date"
                  className="w-full border border-delta-border rounded px-3 py-2.5 text-sm text-delta-text focus:outline-none focus:border-delta-blue"
                />
              </div>
            )}
          </div>

          {/* Passengers + Search */}
          <div className="px-6 pb-6 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex gap-3 items-center">
              <div>
                <label className="block text-xs font-bold text-delta-muted uppercase tracking-wide mb-1">Passengers</label>
                <select className="border border-delta-border rounded px-3 py-2.5 text-sm text-delta-text focus:outline-none focus:border-delta-blue bg-white">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4+ Passengers</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-delta-muted uppercase tracking-wide mb-1">Cabin</label>
                <select className="border border-delta-border rounded px-3 py-2.5 text-sm text-delta-text focus:outline-none focus:border-delta-blue bg-white">
                  <option>Main Cabin</option>
                  <option>Delta Comfort+</option>
                  <option>First Class</option>
                  <option>Delta One®</option>
                </select>
              </div>
            </div>
            <button className="bg-delta-red hover:bg-delta-red-dark text-white font-bold px-10 py-3 rounded text-sm transition-colors shadow">
              Search Flights
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
