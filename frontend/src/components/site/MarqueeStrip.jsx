import { Asterism } from "./Ornament";

const PHRASES = [
  "Strategy",
  "Policy",
  "Operations",
  "Capital",
  "Quality & Accreditation",
  "Clinical Research",
  "Mental Health",
  "Toxicology",
  "Disaster Management",
  "Digital Health",
  "Legal",
  "Event Services",
];

export default function MarqueeStrip() {
  const items = [...PHRASES, ...PHRASES];
  return (
    <section
      data-testid="marquee-strip"
      aria-hidden="true"
      className="relative overflow-hidden bg-[#0C2039] text-[#F9F6F0] py-6 md:py-8 border-y border-[#C8A97E]/20 select-none"
    >
      <div className="marquee-track flex items-center whitespace-nowrap will-change-transform">
        {items.map((p, i) => (
          <span key={`${p}-${i}`} className="flex items-center gap-8 px-8">
            <span
              className="text-[#F9F6F0]/85"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              {p}
            </span>
            <Asterism size={20} className="text-[#C8A97E] shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
