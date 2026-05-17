import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#top", id: "footer-link-home" },
  { label: "Consultants", href: "#consultants", id: "footer-link-consultants" },
  { label: "Services", href: "https://aretion.org/services/", id: "footer-link-services", external: true },
  { label: "Contact", href: "https://aretion.co.uk/contact", id: "footer-link-contact-page", external: true },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: Linkedin,
    id: "social-linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    Icon: Twitter,
    id: "social-twitter",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: Instagram,
    id: "social-instagram",
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
              technology, consulting and academic publishing.
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

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-[#C8A97E] shrink-0" />
                <a
                  href="mailto:post@aretion.co.uk"
                  data-testid="footer-email"
                  className="text-base text-[#0C2039] hover:text-[#C8A97E] transition-colors"
                >
                  post@aretion.co.uk
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-[#C8A97E] shrink-0" />
                <a
                  href="mailto:contact@aretion.org"
                  data-testid="footer-email-secondary"
                  className="text-base text-[#0C2039] hover:text-[#C8A97E] transition-colors"
                >
                  contact@aretion.org
                </a>
              </div>
            </div>
          </div>

          {/* Follow / Social */}
          <div className="md:col-span-4">
            <span className="overline text-[#C8A97E]">Follow</span>
            <ul className="mt-6 flex flex-col gap-3">
              {SOCIAL.map(({ label, href, Icon, id }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={id}
                    className="inline-flex items-center gap-3 text-sm text-[#0C2039] hover:text-[#C8A97E] transition-colors group"
                  >
                    <Icon size={16} className="text-[#C8A97E]" />
                    <span className="border-b border-transparent group-hover:border-[#C8A97E] pb-0.5">
                      {label}
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