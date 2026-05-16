import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const QUICK_LINKS = [
  { label: "Consultants", href: "#consultants", id: "footer-link-consultants" },
  { label: "Approach", href: "#approach", id: "footer-link-approach" },
  { label: "Insights", href: "#insights", id: "footer-link-insights" },
  { label: "Privacy Policy", href: "#privacy", id: "footer-link-privacy" },
  { label: "Terms of Service", href: "#terms", id: "footer-link-terms" },
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
              className="text-[#1A362D] leading-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 8vw, 7.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Aretion <span className="italic text-[#C8A97E]" style={{ fontWeight: 400 }}>&amp;</span> Company
            </h3>
            <p className="max-w-xs text-sm text-[#4A5D54] leading-relaxed">
              A private advisory firm serving the architecture of modern
              healthcare — quietly, deliberately, since 2012.
            </p>
          </div>
        </div>

        {/* Middle grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 py-14 md:py-20">
          {/* Contact */}
          <div className="md:col-span-5">
            <span className="overline text-[#C8A97E]">Contact</span>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-[#1A362D]">
                <Mail size={16} className="mt-1 text-[#C8A97E]" />
                <a
                  href="mailto:office@aretion.co"
                  data-testid="footer-email"
                  className="text-base hover:text-[#C8A97E] transition-colors"
                >
                  office@aretion.co
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#1A362D]">
                <Phone size={16} className="mt-1 text-[#C8A97E]" />
                <a
                  href="tel:+12125550199"
                  data-testid="footer-phone"
                  className="text-base hover:text-[#C8A97E] transition-colors"
                >
                  +1 (212) 555-0199
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#4A5D54]">
                <MapPin size={16} className="mt-1 text-[#C8A97E]" />
                <span data-testid="footer-address" className="text-base">
                  401 Park Avenue South, Floor 9 · New York, NY 10016
                </span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <span className="overline text-[#C8A97E]">Quick Links</span>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 gap-x-4">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={l.id}
                    className="text-sm text-[#1A362D] hover:text-[#C8A97E] transition-colors uppercase tracking-[0.16em]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <span className="overline text-[#C8A97E]">Follow</span>
            <ul className="mt-6 flex flex-col gap-3">
              {SOCIAL.map(({ label, href, Icon, id }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={id}
                    className="inline-flex items-center gap-3 text-sm text-[#1A362D] hover:text-[#C8A97E] transition-colors group"
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
            Discretion · Diligence · Distinction
          </p>
        </div>
      </div>
    </footer>
  );
}
