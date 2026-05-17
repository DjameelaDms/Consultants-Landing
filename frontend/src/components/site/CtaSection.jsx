import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      id="approach"
      data-testid="cta-section"
      className="relative bg-[#0C2039] text-[#F9F6F0] py-24 md:py-36 lg:py-44 overflow-hidden"
    >
      {/* Decorative serif backdrop */}
      <div
        aria-hidden="true"
        className="absolute -top-10 md:-top-20 left-0 right-0 text-center pointer-events-none select-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: "#C8A97E",
          opacity: 0.08,
          fontSize: "clamp(8rem, 22vw, 20rem)",
          lineHeight: 1,
          fontWeight: 400,
          letterSpacing: "-0.04em",
        }}
      >
        Aretion
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        <span className="overline text-[#C8A97E]" data-testid="cta-eyebrow">
          — The Invitation
        </span>

        <h2
          data-testid="cta-heading"
          className="mt-8 md:mt-10 text-[#F9F6F0] leading-[1.02]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(2.25rem, 6vw, 5rem)",
          }}
        >
          Join Our Consulting
          <br />
          <span className="italic text-[#C8A97E]" style={{ fontWeight: 400 }}>
            Platform Today.
          </span>
        </h2>

        <p
          data-testid="cta-subheading"
          className="mt-8 md:mt-10 max-w-2xl mx-auto text-[#F9F6F0]/70 leading-relaxed text-base md:text-lg"
        >
          Whether you lead a hospital network, payor, or emerging health venture
          — gain access to our advisory council and bespoke engagement framework.
        </p>

        <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
          <a
            href="https://aretion.org/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="main-cta-button"
            className="btn-gold inline-flex items-center gap-3 bg-[#C8A97E] text-[#0C2039] px-10 py-5 text-[11px] uppercase tracking-[0.28em] font-semibold"
          >
            <span>Join Our Consulting Platform Today</span>
            <ArrowUpRight size={16} className="relative z-10" />
          </a>
          <a
            href="#footer"
            data-testid="cta-secondary-button"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#F9F6F0]/80 hover:text-[#C8A97E] border-b border-[#F9F6F0]/40 hover:border-[#C8A97E] pb-1 transition-colors duration-300"
          >
            <span>Speak with our office</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Fine print */}
        <p className="mt-14 overline text-[#C8A97E]/80">
          By invitation · References reviewed within 48 hours
        </p>
      </div>
    </section>
  );
}
