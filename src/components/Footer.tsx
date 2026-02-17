const cols = [
  {
    title: "Book Travel",
    links: ["Flights", "Hotels", "Car Rentals", "Vacation Packages", "Cruises"],
  },
  {
    title: "My Travel",
    links: ["My Trips", "Check-In", "Flight Status", "Baggage", "Seat Upgrade"],
  },
  {
    title: "SkyMiles",
    links: ["Program Overview", "Earn Miles", "Redeem Miles", "Elite Status", "Credit Cards"],
  },
  {
    title: "Help",
    links: ["Help Center", "Contact Us", "Accessibility", "Refunds", "Travel Alerts"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1e] text-white/60 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="28" height="28" viewBox="0 0 36 36"><polygon points="18,2 34,30 2,30" fill="#C8102E"/></svg>
            <span className="text-white font-bold text-lg tracking-wider">DELTA</span>
          </div>
          <p className="text-sm leading-relaxed">
            Connecting the world through flight, service, and the power of human spirit.
          </p>
        </div>
        {/* Links */}
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-white/10 pt-5 flex flex-wrap justify-between gap-4 text-xs">
        <span>© {new Date().getFullYear()} Delta Air Lines, Inc. All rights reserved.</span>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms", "Accessibility", "Site Map"].map((l) => (
            <a key={l} href="#" className="hover:text-white">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
