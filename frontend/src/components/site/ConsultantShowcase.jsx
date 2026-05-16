const CONSULTANTS = [
  {
    name: "Dr. Elena Rostova",
    specialization: "Healthcare Policy",
    location: "Geneva · Washington",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRvY3RvcnxlbnwwfHx8fDE3Nzg5NjUwODF8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "James Kensington",
    specialization: "Operational Efficiency",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRvY3RvcnxlbnwwfHx8fDE3Nzg5NjUwODF8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Dr. Marcus Vance",
    specialization: "Clinical Strategy",
    location: "Boston",
    image:
      "https://images.unsplash.com/photo-1637059824899-a441006a6875?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRvY3RvcnxlbnwwfHx8fDE3Nzg5NjUwODF8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Sarah Lin",
    specialization: "Financial Guidance",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3ODk2NTA4NXww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Dr. Amira Tariq",
    specialization: "Digital Health Innovation",
    location: "Dubai",
    image:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRvY3RvcnxlbnwwfHx8fDE3Nzg5NjUwODF8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Arthur Pendelton",
    specialization: "Organizational Leadership",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3ODk2NTA4NXww&ixlib=rb-4.1.0&q=85",
  },
];

export default function ConsultantShowcase() {
  return (
    <section
      id="consultants"
      data-testid="consultants-section"
      className="relative py-24 md:py-32 lg:py-40 bg-[#EBE4D5]/40 border-y border-[#E2D8C6]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <span className="overline text-[#C8A97E]">— The Council</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="consultants-heading"
              className="text-[#1A362D] leading-[1.05]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
              }}
            >
              A curated council of advisors,
              <br />
              <span className="italic" style={{ fontWeight: 400 }}>
                each a quiet authority in their field.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[#4A5D54] leading-relaxed text-base md:text-lg">
              Hand-selected for their depth, integrity, and operational
              fluency — our consultants partner discreetly with healthcare
              leadership teams worldwide.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          data-testid="consultants-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-24"
        >
          {CONSULTANTS.map((c, idx) => (
            <article
              key={c.name}
              data-testid={`consultant-card-${idx}`}
              className={`consultant-card group ${idx % 2 === 1 ? "lg:translate-y-12" : ""}`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EBE4D5]">
                <img
                  src={c.image}
                  alt={c.name}
                  className="consultant-img w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Index numeral */}
                <span
                  className="absolute top-4 left-4 text-[#F9F6F0]/90 mix-blend-difference"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                  }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 md:mt-8">
                <div className="gold-divider mb-4" aria-hidden="true" />
                <h3
                  data-testid={`consultant-name-${idx}`}
                  className="text-[#1A362D]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.875rem",
                    fontWeight: 400,
                    lineHeight: 1.1,
                  }}
                >
                  <span className="name-underline">{c.name}</span>
                </h3>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <span
                    data-testid={`consultant-spec-${idx}`}
                    className="text-sm text-[#4A5D54] tracking-wide"
                  >
                    {c.specialization}
                  </span>
                  <span className="overline text-[#C8A97E]">{c.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial divider line */}
        <div className="mt-20 md:mt-28 flex items-center gap-6">
          <div className="h-px flex-1 bg-[#E2D8C6]" />
          <span className="divider-word text-lg md:text-xl">in confidence</span>
          <div className="h-px flex-1 bg-[#E2D8C6]" />
        </div>
      </div>
    </section>
  );
}
