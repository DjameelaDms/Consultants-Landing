import { ArrowDownRight } from "lucide-react";
import { OrnamentDivider, Crown } from "./Ornament";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1775601258812-b8d41b699eab?w=1400&h=1800&fit=crop&q=85";

export default function Hero({ mounted }) {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 paper-grain"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top meta row */}
        <div
          data-testid="hero-meta"
          className={`flex items-center justify-between mb-12 md:mb-20 ${mounted ? "reveal-fade-up" : "opacity-0"}`}
        >
          <span className="overline text-[#C8A97E] flex items-center gap-2" data-testid="hero-eyebrow">
            <Crown size={14} className="text-[#C8A97E]" />
            Healthcare Advisory · By Appointment · Est. 1986
          </span>
          <span className="hidden md:inline overline text-[#4A5D54]">
            Vol. I — Council of Advisers
          </span>
        </div>

        {/* Asymmetric split */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Headline column */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <OrnamentDivider className={`w-44 h-5 -ml-1 mb-5 ${mounted ? "reveal-fade-up delay-1" : "opacity-0"}`} />
            <h1
              data-testid="hero-headline"
              className={`text-[#0C2039] leading-[0.95] tracking-tight ${mounted ? "reveal-fade-up delay-1" : "opacity-0"}`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 7vw, 6.25rem)",
              }}
            >
              Meet Our{" "}
              <span className="italic text-[#0C2039]" style={{ fontWeight: 400 }}>
                Esteemed
              </span>
              <br />
              Healthcare Advisory
              <br />
              <span className="relative inline-block">
                Consultants
                <span className="absolute left-0 -bottom-2 h-px w-24 md:w-40 bg-[#C8A97E]" aria-hidden="true" />
              </span>
            </h1>

            <p
              data-testid="hero-subheadline"
              className={`mt-10 md:mt-14 max-w-xl text-[#4A5D54] leading-relaxed text-base md:text-lg ${mounted ? "reveal-fade-up delay-2" : "opacity-0"}`}
            >
              Expert guidance to elevate healthcare organisations and drive
              success — strategy, operations, policy and capital, delivered
              by a curated council of senior advisers.
            </p>

            <div
              className={`mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 ${mounted ? "reveal-fade-up delay-3" : "opacity-0"}`}
            >
              <a
                href="https://aretion.org/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-primary"
                className="btn-primary inline-flex items-center gap-3 bg-[#0C2039] text-[#F9F6F0] px-8 py-4 text-[11px] uppercase tracking-[0.24em]"
              >
                <span>Join Our Consulting Platform</span>
                <ArrowDownRight size={16} className="relative z-10" />
              </a>
              <a
                href="#consultants"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#0C2039] border-b border-[#0C2039] pb-1 hover:text-[#C8A97E] hover:border-[#C8A97E] transition-colors duration-300"
              >
                <span>Meet the Council</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 lg:pl-8">
            <div
              data-testid="hero-image-wrapper"
              className={`relative aspect-[3/4] w-full overflow-hidden ${mounted ? "reveal-fade-in delay-2" : "opacity-0"}`}
            >
              <img
                src={HERO_IMAGE}
                alt="19th-century Victorian luxury palace interior"
                className="w-full h-full object-cover slow-zoom"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2039]/30 via-transparent to-transparent" />
              {/* Floating credential card */}
              <div
                data-testid="hero-credential"
                className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8 bg-[#F9F6F0]/95 backdrop-blur-md border border-[#E2D8C6] p-5 md:p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="overline text-[#C8A97E]">The Council</span>
                  <span
                    className="text-[#0C2039]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.25rem",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    20<span className="text-[#C8A97E]">+</span>
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#4A5D54]">
                  Twenty senior healthcare advisers across strategy, clinical
                  research, quality &amp; digital health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
