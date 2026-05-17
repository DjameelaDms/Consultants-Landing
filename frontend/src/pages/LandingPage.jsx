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

      {/* SEO: visually-hidden long-form summary for crawlers — does not affect layout */}
      <div className="sr-only">
        <h2>About ARETION &amp; Company</h2>
        <p>
          ARETION &amp; Company is a British healthcare advisory firm established in 1986,
          headquartered in Covent Garden, London, with a Gulf office in the King Abdullah
          Financial District, Riyadh. Through our council of senior advisers we partner
          discreetly with healthcare leadership teams worldwide, delivering bespoke
          engagements across strategy, operations, policy and capital.
        </p>
        <h3>Disciplines covered by our council</h3>
        <ul>
          <li>Clinical Research Services</li>
          <li>Disaster Management Consulting</li>
          <li>Telepsychology &amp; Mental Health</li>
          <li>Toxicology &amp; Environmental Medicine</li>
          <li>Healthcare Quality &amp; Accreditation</li>
          <li>Healthcare Legal &amp; Legislative Services</li>
          <li>Medical &amp; Healthcare Event Services</li>
          <li>Healthcare Financial Management Advisory</li>
          <li>Healthcare HR Consulting</li>
          <li>Operations Strategy &amp; Capacity Planning</li>
          <li>Health Informatics &amp; HIMS Optimisation</li>
          <li>AI &amp; Machine Learning Advisory for Healthcare</li>
          <li>Organisational Change Management</li>
          <li>Leadership Development &amp; Communication Coaching</li>
          <li>Marketing, Branding &amp; Patient-Centric Growth</li>
        </ul>
        <h3>Contact ARETION &amp; Company</h3>
        <p>
          For enquiries: <a href="mailto:contact@aretion.org">contact@aretion.org</a> or
          <a href="mailto:post@aretion.co.uk"> post@aretion.co.uk</a>. To book a
          consultation visit <a href="https://platform.aretion.org/login">platform.aretion.org</a>.
        </p>
      </div>
    </main>
  );
}
