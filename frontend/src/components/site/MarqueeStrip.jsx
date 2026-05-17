const PHRASES = [
  "Healthcare HR Consulting",
  "Disaster Management Consulting",
  "Healthcare Quality & Accreditation",
  "Clinical Research Services",
  "Healthcare Legal & Legislative",
  "Healthcare Technology Solutions",
  "Project Management",
  "Toxicology & Environmental Medicine",
  "Medical & Healthcare Event Services",
  "Telepsychology & Mental Health",
  "Leadership Development & Coaching",
  "Organisational Change Management",
  "Healthcare Financial Management",
  "Economics & Capital Planning",
  "Risk Management & Insurance",
  "Financial Statement Analysis",
  "Applied Analytics & Optimisation",
  "Business Analytics & Visualisation",
  "Health Informatics & HIMS",
  "AI & Machine Learning Advisory",
  "Operations Strategy & Capacity Planning",
  "Supply Chain & Inventory",
  "Quality Management & TQM",
  "Strategic PMO Support",
  "Marketing, Branding & Patient-Centric Growth",
  "Digital & Social Media Performance",
  "Negotiation & Conflict Resolution",
  "Applied Business & Market Research",
];

export default function MarqueeStrip() {
  // Duplicate so the seamless loop has the full content twice.
  const items = [...PHRASES, ...PHRASES];
  return (
    <section
      data-testid="marquee-strip"
      aria-hidden="true"
      className="relative overflow-hidden bg-[#0C2039] text-[#F9F6F0] py-6 md:py-8 border-y border-[#C8A97E]/20 select-none"
    >
      <div className="marquee-track flex items-center whitespace-nowrap will-change-transform">
        {items.map((p, i) => (
          <span
            key={`${p}-${i}`}
            className="px-10 text-[#F9F6F0]/90"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.4rem, 2.6vw, 2.25rem)",
              fontWeight: 300,
              letterSpacing: "-0.005em",
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
