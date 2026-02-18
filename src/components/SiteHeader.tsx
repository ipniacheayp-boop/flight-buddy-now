import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Plane, User, Search } from "lucide-react";

const navItems = [
  {
    label: "Book",
    children: [
      { label: "Search Flights", href: "/book" },
      { label: "Manage Booking", href: "/my-trips" },
      { label: "Flight Status", href: "/flight-status" },
    ],
  },
  {
    label: "Travel Info",
    children: [
      { label: "Baggage", href: "/travel-info" },
      { label: "Check-in", href: "/travel-info" },
      { label: "Airport Guide", href: "/travel-info" },
    ],
  },
  { label: "SkyRewards", href: "/loyalty" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isHome ? "bg-foreground/90 backdrop-blur-md" : "bg-card border-b border-border shadow-sm"}`}>
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Plane className="h-4 w-4 text-primary-foreground rotate-[-30deg]" />
          </div>
          <span className={`text-lg font-bold tracking-tight ${isHome ? "text-primary-foreground" : "text-foreground"}`}>
            SkyVoyage
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${isHome ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}>
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg border border-border shadow-xl py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isHome ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/flight-status"
            className={`p-2 rounded-md transition-colors ${isHome ? "text-primary-foreground/70 hover:text-primary-foreground" : "text-foreground/60 hover:text-foreground"}`}
          >
            <Search className="h-4.5 w-4.5" />
          </Link>
          <Link
            to="/my-trips"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isHome ? "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" : "bg-muted text-foreground hover:bg-muted/80"}`}
          >
            <User className="h-4 w-4" />
            My Trips
          </Link>
          <Link
            to="/book"
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${isHome ? "text-primary-foreground" : "text-foreground"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isHome ? "text-primary-foreground" : "text-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="container py-4 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-border grid grid-cols-2 gap-2">
                <Link to="/my-trips" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 h-11 text-sm font-medium rounded-lg bg-muted text-foreground">
                  <User className="h-4 w-4" /> My Trips
                </Link>
                <Link to="/book" onClick={() => setMobileOpen(false)} className="flex items-center justify-center h-11 text-sm font-semibold rounded-lg bg-primary text-primary-foreground">
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
