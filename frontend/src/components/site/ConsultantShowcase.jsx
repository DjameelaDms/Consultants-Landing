import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { OrnamentDivider } from "./Ornament";

// One image per consultant — sourced directly from platform.aretion.org
// (mhtml export verified: each consultant has their own portrait URL).
const CONSULTANTS = [
  {
    name: "Bandar Mzahim",
    specialization: "Disaster Management Consulting",
    experience: 12,
    image:
      "https://platform.aretion.org/uploads/consultants/1777375688_Screenshot%202026-04-28%20at%2014.26.34.png",
  },
  {
    name: "Khalid Almulhim",
    specialization: "Toxicology & Environmental Medicine",
    experience: 15,
    image:
      "https://platform.aretion.org/uploads/consultants/1778402332.jpg",
  },
  {
    name: "Bodor Alqaaed",
    specialization: "Telepsychology & Mental Health",
    experience: 4,
    image:
      "https://platform.aretion.org/uploads/consultants/1777426862_1777426783_Subject.png",
  },
  {
    name: "Nidaa Bajow",
    specialization: "Strategy & Capacity Planning",
    experience: 17,
    image:
      "https://platform.aretion.org/uploads/consultants/1777925299.jpg",
  },
  {
    name: "Sharafaldeen Bin Nafisah",
    specialization: "Disaster Management Consulting",
    experience: 7,
    image:
      "https://platform.aretion.org/uploads/consultants/1777375438_image2.jpeg",
  },
  {
    name: "Samah Alsadah",
    specialization: "Telepsychology & Mental Health",
    experience: 14,
    image:
      "https://platform.aretion.org/uploads/consultants/1777400959_1777400911_%D8%B3%D9%85%D8%A7%D8%AD%20.jpeg",
  },
  {
    name: "Ansar Halayqa",
    specialization: "Telepsychology & Mental Health",
    experience: 10,
    image:
      "https://platform.aretion.org/uploads/consultants/1777482069_Snapchat-100737972.jpg",
  },
  {
    name: "Mona AlMofadda",
    specialization: "Healthcare Quality & Accreditation",
    experience: 8,
    image:
      "https://platform.aretion.org/uploads/consultants/1778946261_1778946205_YELLOW.jpeg",
  },
  {
    name: "Shahad Aldawsari",
    specialization: "Toxicology & Environmental Medicine",
    experience: 1,
    image:
      "https://platform.aretion.org/uploads/consultants/1778041451_1778041441_IMG_0369.jpeg",
  },
  {
    name: "Zakaria Mani",
    specialization: "Clinical Research Services",
    experience: 18,
    image:
      "https://platform.aretion.org/uploads/consultants/1778228079_WhatsApp%20Image%202023-07-12%20at%208.15.35%20PM.jpeg",
  },
  {
    name: "Rawan Eskandarani",
    specialization: "Medical & Healthcare Event Services",
    experience: 9,
    image:
      "https://platform.aretion.org/uploads/consultants/1778238703_1000238358.jpg",
  },
  {
    name: "Shahnaz Alkhalil",
    specialization: "Healthcare Quality & Accreditation",
    experience: 16,
    image:
      "https://platform.aretion.org/uploads/consultants/1778253255_1778253215_Shahnazm.jpg",
  },
  {
    name: "Bodoor Ayman Tayeb",
    specialization: "Healthcare Quality & Accreditation",
    experience: 10,
    image:
      "https://customer-assets.emergentagent.com/job_healthcare-advisors/artifacts/3f14zizr_623180064_18405798247135146_4947904528646073156_n.jpeg",
  },
  {
    name: "Hassan Farhat",
    specialization: "Clinical Research Services",
    experience: 17,
    image:
      "https://platform.aretion.org/uploads/consultants/1778321256_1778321232_2067d08b-f8f9-419e-8b32-19f4aff0d39c.jpeg",
  },
  {
    name: "Mohammed Badawy",
    specialization: "Disaster Management Consulting",
    experience: 12,
    image:
      "https://platform.aretion.org/uploads/consultants/1778384887_aaa.jpg",
  },
  {
    name: "Abdussalam Ali Alshehri",
    specialization: "Healthcare Legal Services",
    experience: 24,
    image:
      "https://platform.aretion.org/uploads/consultants/1778415849_1778415811_1000002212.jpg",
  },
  {
    name: "Naif Mohammad M Harthi",
    specialization: "Clinical Research Services",
    experience: 12,
    image:
      "https://platform.aretion.org/uploads/consultants/1778422556_1778422519_Untitled.jpg",
  },
  {
    name: "Heetaf Aloqaily",
    specialization: "Medical & Healthcare Event Services",
    experience: 6,
    image:
      "https://platform.aretion.org/uploads/consultants/1778528306_1778528282_PHOTO-2025-07-08-17-30-34.jpg",
  },
  {
    name: "Ateeq Omar Marzuq Almuwallad",
    specialization: "Clinical Research Services",
    experience: 12,
    image:
      "https://platform.aretion.org/uploads/consultants/1778736837_1778736813_%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9%20-%20%D8%B9%D8%AA%D9%8A%D9%82%20%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF.jpeg",
  },
  {
    name: "Mohammed Sultan",
    specialization: "Clinical Research Services",
    experience: 21,
    image:
      "https://platform.aretion.org/uploads/consultants/1777982621_1000242157.jpg",
  },
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
      className="relative py-24 md:py-32 lg:py-40 bg-[#EBE4D5]/40 border-y border-[#E2D8C6] overflow-hidden"
    >
      {/* Editorial section ornament */}
      <div
        aria-hidden="true"
        className="absolute -right-10 top-20 hidden lg:block pointer-events-none select-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "#C8A97E",
          opacity: 0.08,
          fontSize: "clamp(7rem, 14vw, 14rem)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
      >
        council
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <span className="overline text-[#C8A97E]">— The Council</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="consultants-heading"
              className="text-[#0C2039] leading-[1.05]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
              }}
            >
              A curated council of advisers,
              <br />
              <span className="italic" style={{ fontWeight: 400 }}>
                each a quiet authority in their field.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[#4A5D54] leading-relaxed text-base md:text-lg">
              Hand-selected for their depth, integrity and operational
              fluency — our consultants partner discreetly with healthcare
              leadership teams worldwide.
            </p>
          </div>
        </div>

        {/* Grid — 4 across on lg */}
        <div
          ref={gridRef}
          data-testid="consultants-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 md:gap-x-10 gap-y-16 md:gap-y-24"
        >
          {CONSULTANTS.map((c, idx) => (
            <article
              key={`${c.name}-${idx}`}
              data-testid={`consultant-card-${idx}`}
              className="consultant-card group relative"
              style={{ transitionDelay: `${(idx % 4) * 110}ms` }}
            >
              {/* Oversized editorial numeral — floats outside frame top-left */}
              <span
                className="consultant-numeral absolute -top-3 -left-1 md:-top-4 md:-left-2 text-[#C8A97E] z-20 pointer-events-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
                aria-hidden="true"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Photo frame */}
              <div
                data-testid={`consultant-photo-${idx}`}
                className="consultant-photo relative aspect-[3/4] w-full overflow-hidden"
              >
                {/* Inner photo — clip-path reveal on entrance, zoom + duotone shift on hover */}
                <div className="consultant-mask absolute inset-0">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="consultant-img w-full h-full object-cover object-center select-none"
                    draggable={false}
                  />
                </div>

                {/* Hairline gold frame inside the photo */}
                <span
                  aria-hidden="true"
                  className="consultant-frame absolute inset-2 md:inset-3 pointer-events-none border border-[#C8A97E]/0 group-hover:border-[#C8A97E]/70 transition-colors duration-500"
                />

                {/* Deep-forest scrim that lifts the caption on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(12,32,57,0) 0%, rgba(12,32,57,0.55) 100%)",
                  }}
                />

                {/* Specialty chip — slides in from bottom on hover */}
                <div className="consultant-chip absolute left-3 right-3 md:left-4 md:right-4 bottom-3 md:bottom-4 z-10 pointer-events-none">
                  <div className="flex items-center justify-between gap-3 backdrop-blur-md bg-[#F9F6F0]/85 border border-[#E2D8C6] px-3 py-2">
                    <span className="overline text-[#0C2039] truncate">
                      {c.specialization}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="text-[#C8A97E] shrink-0"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 md:mt-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="gold-divider" aria-hidden="true" />
                  <span className="overline text-[#4A5D54]">
                    Senior Adviser
                  </span>
                </div>
                <h3
                  data-testid={`consultant-name-${idx}`}
                  className="text-[#0C2039]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.55rem",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span className="name-underline">{c.name}</span>
                </h3>
                <div className="mt-3 flex items-baseline justify-between gap-4">
                  <p
                    data-testid={`consultant-spec-${idx}`}
                    className="text-sm text-[#4A5D54] leading-snug"
                  >
                    {c.specialization}
                  </p>
                  <span
                    data-testid={`consultant-experience-${idx}`}
                    className="overline text-[#C8A97E] shrink-0"
                  >
                    {c.experience} {c.experience === 1 ? "yr" : "yrs"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial divider line */}
        <div className="mt-20 md:mt-28 flex flex-col items-center gap-4">
          <OrnamentDivider className="w-full max-w-[420px] h-7" />
          <span className="divider-word text-lg md:text-xl">in confidence</span>
        </div>
      </div>
    </section>
  );
}
