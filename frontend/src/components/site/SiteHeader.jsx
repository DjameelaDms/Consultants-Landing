import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Consultants", href: "#consultants", testid: "nav-consultants" },
  { label: "Approach", href: "#approach", testid: "nav-approach" },
  { label: "Insights", href: "https://aretion.org/services/", testid: "nav-insights", external: true },
  { label: "Contact", href: "#footer", testid: "nav-contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#F9F6F0]/85 border-b border-[#E2D8C6]/70"
          : "backdrop-blur-md bg-[#F9F6F0]/40 border-b border-transparent"
      }`}
    >
      {/* Top advisory micro-bar (no decorative iconography) */}
      <div className="hidden md:flex items-center justify-center gap-3 py-1.5 bg-[#0C2039] text-[#F9F6F0]/85 text-[10px] uppercase tracking-[0.32em]" data-testid="royal-bar">
        <span>Healthcare Advisory · By Appointment · Est. 1986</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Brand logo — uploaded asset */}
          <a
            href="#top"
            data-testid="brand-logo"
            className="flex items-center gap-3 group"
            aria-label="Aretion & Company"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_healthcare-advisors/artifacts/6sd18gkg_A_Logo-39.png"
              alt="Aretion & Company"
              className="h-14 md:h-20 w-auto select-none"
              draggable={false}
              data-testid="brand-logo-img"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                data-testid={link.testid}
                className="text-[11px] uppercase tracking-[0.22em] text-[#0C2039] hover:text-[#C8A97E] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#C8A97E] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://aretion.org/for-careers/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-cta-button"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#F9F6F0] bg-[#0C2039] hover:bg-[#16335E] transition-colors duration-300 px-5 py-3"
            >
              Join Our Team
              <span aria-hidden="true">→</span>
            </a>
            <button
              type="button"
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-[#0C2039] p-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            data-testid="mobile-menu"
            className="md:hidden border-t border-[#E2D8C6]/70 py-6 flex flex-col gap-5"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setOpen(false)}
                data-testid={`mobile-${link.testid}`}
                className="text-sm uppercase tracking-[0.22em] text-[#0C2039] hover:text-[#C8A97E]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://aretion.org/for-careers/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-cta-button"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#F9F6F0] bg-[#0C2039] px-5 py-3 w-fit"
            >
              Join Our Team →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
