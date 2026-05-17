import { useEffect, useState } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import MarqueeStrip from "@/components/site/MarqueeStrip";
import ConsultantShowcase from "@/components/site/ConsultantShowcase";
import CtaSection from "@/components/site/CtaSection";
import SiteFooter from "@/components/site/SiteFooter";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Remove third-party Emergent badge (inline-styled, so JS removal is required).
    // Stop the interval once we've successfully removed it.
    let attempts = 0;
    let t = null;
    const removeBadge = () => {
      const el = document.getElementById("emergent-badge");
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
        if (t) clearInterval(t);
      } else if (++attempts > 20 && t) {
        clearInterval(t);
      }
    };
    removeBadge();
    t = setInterval(removeBadge, 500);
    return () => {
      if (t) clearInterval(t);
    };
  }, []);

  return (
    <main
      data-testid="landing-page"
      className="min-h-screen bg-[#F9F6F0] text-[#0C2039] overflow-x-hidden"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <SiteHeader />
      <Hero mounted={mounted} />
      <MarqueeStrip />
      <ConsultantShowcase />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
