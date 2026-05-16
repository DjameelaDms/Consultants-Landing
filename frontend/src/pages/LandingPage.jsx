import { useEffect, useState } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import ConsultantShowcase from "@/components/site/ConsultantShowcase";
import CtaSection from "@/components/site/CtaSection";
import SiteFooter from "@/components/site/SiteFooter";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Remove third-party Emergent badge (inline-styled, so JS removal is required)
    const removeBadge = () => {
      const el = document.getElementById("emergent-badge");
      if (el && el.parentNode) el.parentNode.removeChild(el);
    };
    removeBadge();
    // Re-run in case it's re-injected
    const t = setInterval(removeBadge, 800);
    return () => clearInterval(t);
  }, []);

  return (
    <main
      data-testid="landing-page"
      className="min-h-screen bg-[#F9F6F0] text-[#1A362D] overflow-x-hidden"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <SiteHeader />
      <Hero mounted={mounted} />
      <ConsultantShowcase />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
