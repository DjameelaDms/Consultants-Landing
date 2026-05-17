import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#top", id: "footer-link-home" },
  { label: "ARETION Group", href: "https://aretion.co.uk/group-companies", id: "footer-link-group", external: true },
  { label: "Consultants", href: "#consultants", id: "footer-link-consultants" },
  { label: "Contact", href: "https://aretion.co.uk/contact", id: "footer-link-contact-page", external: true },
];

const GROUP_COMPANIES = [
  {
    label: "ARETION Solutions",
    href: "https://solutions.aretion.co.uk/",
    id: "group-solutions",
    note: "Critical Infrastructure Technology",
  },
  {
    label: "ARETION Healthcare Consulting",
    href: "https://aretion.org/",
    id: "group-consulting",
    note: "Strategic Advisory",
  },
  {
    label: "ARETION Publishing Group",
    href: "https://publishing.aretion.co.uk/",
    id: "group-publishing",
    note: "Peer-reviewed Journals",
  },
];

export default function SiteFooter() {
  return (
    <footer
      id="footer"
      data-testid="site-footer"
      className="bg-[#F9F6F0] border-t border-[#E2D8C6] pt-20 md:pt-28 pb-10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top: oversized wordmark */}
        <div className="border-b border-[#E2D8C6] pb-12 md:pb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h3
              data-testid="footer-wordmark"
              className="text-[#0C2039] leading-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 8vw, 7.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Aretion <span className="italic text-[#C8A97E]" style={{ fontWeight: 400 }}>&amp;</span> Company
            </h3>
            <p className="max-w-sm text-sm text-[#4A5D54] leading-relaxed">
              A UK-based group overseeing specialist entities in healthcare
              technology, consulting and academic publishing. In healthcare
              since 1986.
            </p>
          </div>
        </div>

        {/* Middle grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 py-14 md:py-20">
          {/* Offices */}
          <div className="md:col-span-5">
            <span className="overline text-[#C8A97E]">Offices</span>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 text-[#C8A97E] shrink-0" />
                  <div>
                    <p
                      className="text-[#0C2039] mb-1"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.15rem",
                        fontWeight: 500,
                      }}
                    >
                      London
                    </p>
                    <address
                      data-testid="footer-address-london"
                      className="not-italic text-sm text-[#4A5D54] leading-relaxed"
                    >
                      71–75 Shelton Street
                      <br />
                      Covent Garden
                      <br />
                      London, WC2H 9JQ
                      <br />
                      United Kingdom
                    </address>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 text-[#C8A97E] shrink-0" />
                  <div>
                    <p
                      className="text-[#0C2039] mb-1"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.15rem",
                        fontWeight: 500,
                      }}
                    >
                      Gulf
                    </p>
                    <address
                      data-testid="footer-address-gulf"
                      className="not-italic text-sm text-[#4A5D54] leading-relaxed"
                    >
                      Innovation Boulevard, Al Aqeeq
                      <br />
                      King Abdullah Financial District
                      <br />
                      Building 7229, 13519
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3">
              <Mail size={16} className="mt-1 text-[#C8A97E]" />
              <a
                href="mailto:post@aretion.co.uk"
                data-testid="footer-email"
                className="text-base text-[#0C2039] hover:text-[#C8A97E] transition-colors"
              >
                post@aretion.co.uk
              </a>
            </div>
          </div>

          {/* Group companies */}
          <div className="md:col-span-4">
            <span className="overline text-[#C8A97E]">ARETION Group</span>
            <ul className="mt-6 space-y-5">
              {GROUP_COMPANIES.map((g) => (
                <li key={g.id}>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={g.id}
                    className="group inline-flex flex-col"
                  >
                    <span className="inline-flex items-center gap-2 text-[#0C2039] group-hover:text-[#C8A97E] transition-colors">
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.15rem",
                          fontWeight: 500,
                        }}
                      >
                        {g.label}
                      </span>
                      <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100" />
                    </span>
                    <span className="overline text-[#4A5D54] mt-1">
                      {g.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <span className="overline text-[#C8A97E]">Quick Links</span>
            <ul className="mt-6 flex flex-col gap-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    data-testid={l.id}
                    className="text-sm text-[#0C2039] hover:text-[#C8A97E] transition-colors uppercase tracking-[0.16em]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="border-t border-[#E2D8C6] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p
            data-testid="footer-copyright"
            className="text-xs uppercase tracking-[0.2em] text-[#4A5D54]"
          >
            © {new Date().getFullYear()} Aretion &amp; Company. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#4A5D54]">
            Healthcare · Technology · Publishing
          </p>
        </div>
      </div>
    </footer>
  );
}