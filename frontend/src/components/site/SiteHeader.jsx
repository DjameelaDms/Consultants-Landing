import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Consultants", href: "#consultants", testid: "nav-consultants" },
  { label: "Approach", href: "#approach", testid: "nav-approach" },
  { label: "Insights", href: "#insights", testid: "nav-insights" },
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
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Wordmark logo */}
          <a
            href="#top"
            data-testid="brand-logo"
            className="flex items-center gap-3 group"
            aria-label="ARETION & Company"
          >
            <span
              className="inline-block w-2 h-2 rounded-full bg-[#C8A97E] group-hover:scale-125 transition-transform duration-500"
              aria-hidden="true"
            />
            <span
              className="text-[#1A362D] text-lg md:text-xl tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Aretion <span className="text-[#C8A97E] italic normal-case tracking-normal" style={{ fontWeight: 400 }}>&amp;</span> Company
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={link.testid}
                className="text-[11px] uppercase tracking-[0.22em] text-[#1A362D] hover:text-[#C8A97E] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#C8A97E] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://platform.aretion.com/join"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-cta-button"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#F9F6F0] bg-[#1A362D] hover:bg-[#234237] transition-colors duration-300 px-5 py-3"
            >
              Join Platform
              <span aria-hidden="true">→</span>
            </a>
            <button
              type="button"
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-[#1A362D] p-2"
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
                onClick={() => setOpen(false)}
                data-testid={`mobile-${link.testid}`}
                className="text-sm uppercase tracking-[0.22em] text-[#1A362D] hover:text-[#C8A97E]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://platform.aretion.com/join"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-cta-button"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#F9F6F0] bg-[#1A362D] px-5 py-3 w-fit"
            >
              Join Platform →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
