import { useEffect, useRef } from "react";

// 5 screenshots × 4 consultants each = 20 advisors
const SHEET_1 =
  "https://customer-assets.emergentagent.com/job_healthcare-advisors/artifacts/79p4yg49_Screenshot%202026-05-17%20at%2000.17.30.png";
const SHEET_2 =
  "https://customer-assets.emergentagent.com/job_healthcare-advisors/artifacts/pbrde1aq_Screenshot%202026-05-17%20at%2000.18.19.png";
const SHEET_3 =
  "https://customer-assets.emergentagent.com/job_healthcare-advisors/artifacts/qlubxeq5_Screenshot%202026-05-17%20at%2000.18.29.png";
const SHEET_4 =
  "https://customer-assets.emergentagent.com/job_healthcare-advisors/artifacts/x0sqa7zx_Screenshot%202026-05-17%20at%2000.18.36.png";
const SHEET_5 =
  "https://customer-assets.emergentagent.com/job_healthcare-advisors/artifacts/8wi5tymd_Screenshot%202026-05-17%20at%2000.18.44.png";

const CONSULTANTS = [
  // Sheet 1
  { name: "Bandar Mzahim", specialization: "Clinical Research Services", experience: 12, sheet: SHEET_1, col: 0 },
  { name: "Khalid Almulhim", specialization: "Toxicology & Environmental Medicine", experience: 15, sheet: SHEET_1, col: 1 },
  { name: "Bodor Alqaaed", specialization: "Telepsychology & Mental Health", experience: 4, sheet: SHEET_1, col: 2 },
  { name: "Nidaa Bajow", specialization: "Strategy & Capacity Planning", experience: 17, sheet: SHEET_1, col: 3 },
  // Sheet 2
  { name: "Sharafaldeen Bin Nafisah", specialization: "Clinical Research Services", experience: 7, sheet: SHEET_2, col: 0 },
  { name: "Samah Alsadah", specialization: "Telepsychology & Mental Health", experience: 14, sheet: SHEET_2, col: 1 },
  { name: "Ansar Halayqa", specialization: "Telepsychology & Mental Health", experience: 10, sheet: SHEET_2, col: 2 },
  { name: "Mona AlMofadda", specialization: "Healthcare Quality & Accreditation", experience: 8, sheet: SHEET_2, col: 3 },
  // Sheet 3
  { name: "Bodoor Ayman Tayeb", specialization: "Healthcare Quality & Accreditation", experience: 10, sheet: SHEET_3, col: 0 },
  { name: "Hassan Farhat", specialization: "Clinical Research Services", experience: 17, sheet: SHEET_3, col: 1 },
  { name: "Mohammed Badawy", specialization: "Clinical Research Services", experience: 12, sheet: SHEET_3, col: 2 },
  { name: "Abdussalam Ali Alshehri", specialization: "Healthcare Legal Services", experience: 24, sheet: SHEET_3, col: 3 },
  // Sheet 4
  { name: "Dr. Naif Mohammad M Harthi", specialization: "Clinical Research Services", experience: 12, sheet: SHEET_4, col: 0 },
  { name: "Heetaf Aloqaily", specialization: "Medical & Healthcare Event Services", experience: 6, sheet: SHEET_4, col: 1 },
  { name: "Ateeq Omar Marzuq Almuwallad", specialization: "Clinical Research Services", experience: 12, sheet: SHEET_4, col: 2 },
  { name: "Mohammed Sultan", specialization: "Clinical Research Services", experience: 21, sheet: SHEET_4, col: 3 },
  // Sheet 5
  { name: "Shahad Aldawsari", specialization: "Toxicology & Environmental Medicine", experience: 1, sheet: SHEET_5, col: 0 },
  { name: "Zakaria Mani", specialization: "Clinical Research Services", experience: 18, sheet: SHEET_5, col: 1 },
  { name: "Rawan Eskandarani", specialization: "Clinical Research Services", experience: 9, sheet: SHEET_5, col: 2 },
  { name: "Shahnaz Alkhalil", specialization: "Healthcare Quality & Accreditation", experience: 16, sheet: SHEET_5, col: 3 },
];

export default function ConsultantShowcase() {
  const gridRef = useRef(null);

  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;
    const cards = root.querySelectorAll(".consultant-card");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      cards.forEach((c) => c.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

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

        {/* Grid — 4 across on lg */}
        <div
          ref={gridRef}
          data-testid="consultants-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-14 md:gap-y-20"
        >
          {CONSULTANTS.map((c, idx) => (
            <article
              key={`${c.name}-${idx}`}
              data-testid={`consultant-card-${idx}`}
              className="consultant-card group"
              style={{
                // Stagger inside each row of 4 (xl breakpoint), graceful on smaller too
                transitionDelay: `${(idx % 4) * 90}ms`,
              }}
            >
              <div className="consultant-photo relative aspect-[3/4] w-full overflow-hidden">
                {/* Inner zoom wrapper — scales the absolutely-positioned image on hover
                    without breaking its calibrated offset (transform origin is centered). */}
                <div className="consultant-zoom absolute inset-0">
                  <img
                    src={c.sheet}
                    alt={c.name}
                    loading="lazy"
                    className="consultant-img absolute max-w-none select-none pointer-events-none"
                    draggable={false}
                    style={{
                      width: "1000%",
                      height: "auto",
                      top: "-9%",
                      left: `-${c.col * 250 + 75}%`,
                    }}
                  />
                </div>
                {/* Cream wash overlay — softens any white backgrounds in source
                    so portraits feel embedded in the editorial palette */}
                <div className="consultant-wash absolute inset-0 pointer-events-none" aria-hidden="true" />
                {/* Index numeral */}
                <span
                  className="absolute top-3 left-3 text-[#F9F6F0] bg-[#1A362D]/55 backdrop-blur-sm px-2 py-1 z-10"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                  }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 md:mt-6">
                <div className="gold-divider mb-3" aria-hidden="true" />
                <h3
                  data-testid={`consultant-name-${idx}`}
                  className="text-[#1A362D]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    lineHeight: 1.1,
                  }}
                >
                  <span className="name-underline">{c.name}</span>
                </h3>
                <p
                  data-testid={`consultant-spec-${idx}`}
                  className="mt-2 text-sm text-[#4A5D54] leading-snug"
                >
                  {c.specialization}
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span
                    data-testid={`consultant-experience-${idx}`}
                    className="overline text-[#4A5D54]"
                  >
                    {c.experience} {c.experience === 1 ? "year" : "years"}
                  </span>
                  <span className="overline text-[#C8A97E] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Read profile →
                  </span>
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
