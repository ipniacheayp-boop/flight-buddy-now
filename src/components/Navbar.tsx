import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Book", href: "#" },
  { label: "Check-In", href: "#" },
  { label: "My Trips", href: "#" },
  { label: "Travel Info", href: "#" },
  { label: "SkyMiles", href: "#" },
  { label: "Deals", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-delta-blue shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Delta Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          {/* Delta triangle widget */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <polygon points="18,2 34,30 2,30" fill="#C8102E"/>
            <polygon points="18,10 28,28 8,28" fill="#8B0000" opacity="0.4"/>
          </svg>
          <span className="text-white font-bold text-xl tracking-wide uppercase">Delta</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white text-sm font-semibold px-4 py-5 block border-b-4 border-transparent hover:border-delta-red transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white text-sm font-semibold border border-white/50 px-4 py-1.5 rounded hover:bg-white/10 transition">
            Sign In
          </button>
          <button className="bg-delta-red text-white text-sm font-semibold px-4 py-1.5 rounded hover:bg-delta-red-dark transition">
            Join SkyMiles
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-delta-blue-dark border-t border-white/10">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-white px-6 py-3 text-sm border-b border-white/10 hover:bg-delta-blue">
              {item.label}
            </a>
          ))}
          <div className="p-4 flex gap-3">
            <button className="flex-1 text-white text-sm border border-white/50 py-2 rounded">Sign In</button>
            <button className="flex-1 bg-delta-red text-white text-sm py-2 rounded">Join SkyMiles</button>
          </div>
        </div>
      )}
    </nav>
  );
}
