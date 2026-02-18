import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const footerLinks = [
  {
    title: "Flights",
    links: [
      { label: "Search Flights", href: "/book" },
      { label: "Flight Status", href: "/flight-status" },
      { label: "Manage Booking", href: "/my-trips" },
      { label: "Check-in", href: "/travel-info" },
    ],
  },
  {
    title: "Travel Info",
    links: [
      { label: "Baggage Policy", href: "/travel-info" },
      { label: "Airport Guide", href: "/travel-info" },
      { label: "Visa & Passport", href: "/travel-info" },
      { label: "Special Assistance", href: "/travel-info" },
    ],
  },
  {
    title: "SkyRewards",
    links: [
      { label: "Join Now", href: "/loyalty" },
      { label: "Earn Miles", href: "/loyalty" },
      { label: "Redeem Miles", href: "/loyalty" },
      { label: "Tier Benefits", href: "/loyalty" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About SkyVoyage", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Press", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];

const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Plane className="h-4 w-4 text-primary-foreground rotate-[-30deg]" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">SkyVoyage</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your journey begins with us. Premium air travel connecting the world.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} SkyVoyage Airlines. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-primary-foreground transition-colors">Terms</Link>
            <Link to="/" className="hover:text-primary-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
