import { Phone, MessageCircle } from "lucide-react";

const ContactBar = () => {
  return (
    <>
      {/* Desktop bar */}
      <section className="hidden md:block py-6 bg-muted/50 border-y border-border">
        <div className="container">
          <div className="flex items-center justify-center gap-6">
            <a
              href="tel:+18001234567"
              className="inline-flex items-center gap-2.5 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="h-5 w-5" />
              📞 Call Now
            </a>
            <a
              href="#chat"
              className="inline-flex items-center gap-2.5 h-12 px-8 rounded-lg bg-cta text-cta-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" />
              💬 Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-0">
          <a
            href="tel:+18001234567"
            className="flex items-center justify-center gap-2 h-14 bg-primary text-primary-foreground font-semibold text-base"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a
            href="#chat"
            className="flex items-center justify-center gap-2 h-14 bg-cta text-cta-foreground font-semibold text-base"
          >
            <MessageCircle className="h-5 w-5" />
            Chat Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactBar;
