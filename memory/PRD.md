# ARETION & Company — Healthcare Advisory Landing Page

## Original Problem Statement
Create an elegant landing page as part of ARETION & Company's website to showcase the healthcare advisory consultants. Primary aim: attract customers to the consulting platform.

Sections required: Header (logo), Hero (headline + subhead), Consultant Showcase grid, CTA ("Join Our Consulting Platform Today!"), Footer (contact, social, quick links).

## User Choices (as confirmed)
- Consultant data: placeholder profiles (real data to be provided later)
- CTA: links out to external URL (`https://platform.aretion.com/join` placeholder)
- Visual style: **Editorial Luxury** — warm cream (#F9F6F0), deep forest green (#1A362D), warm gold (#C8A97E)
- Brand assets: typographic wordmark (no uploaded logo yet)
- No extra sections beyond the brief

## Architecture
- **Frontend only**: React (CRA + Tailwind), single route `/` rendering `LandingPage`
- No backend changes (CTA is external link, no form submission)
- Component split:
  - `pages/LandingPage.jsx`
  - `components/site/SiteHeader.jsx`
  - `components/site/Hero.jsx`
  - `components/site/ConsultantShowcase.jsx`
  - `components/site/CtaSection.jsx`
  - `components/site/SiteFooter.jsx`
- Typography: Cormorant Garamond (display serif) + Outfit (body sans), loaded via Google Fonts in `index.css`
- All interactive/key elements carry `data-testid` (kebab-case)

## User Personas
- **Health system executives & boards** seeking discreet senior advisory
- **Payor / insurer leadership** evaluating strategic & operational guidance
- **Emerging health-venture founders** seeking access to a council of advisors

## Core Static Requirements
- Sticky glassmorphism header with wordmark + nav + Join Platform CTA
- Hero with asymmetric split (text + portrait/architecture image + credential card + stats strip)
- 6-consultant editorial grid with staggered layout, hover desaturation removal, gold underline reveal
- Forest-green CTA section with oversized italic gold display word + main CTA button
- Footer with oversized wordmark, contact info (email/phone/address), social icons (LinkedIn/Twitter/Instagram), quick links (Consultants, Approach, Insights, Privacy Policy, Terms of Service), legal row

## Implemented (Dec 2025)
- Single-page elegant landing page fully built and tested (frontend 100% pass — 14/14 acceptance criteria)
- Editorial luxury aesthetic per design_guidelines.json
- Responsive: mobile menu, asymmetric grid collapses cleanly
- Accessibility: aria-labels on logo/menu, descriptive alt text
- All anchors with target=_blank use `rel="noopener noreferrer"`

## Backlog (Prioritized)

### P0 — replace placeholder content
- [ ] Real consultant profiles (photos, names, bios, links)
- [ ] Real CTA destination URL (replace `https://platform.aretion.com/join`)
- [ ] Upload real brand logo (currently a typographic wordmark)
- [ ] Real contact details (email, phone, address)
- [ ] Real social media URLs

### P1 — content depth
- [ ] Consultant detail pages or modal with biography, credentials, publications
- [ ] Privacy Policy + Terms of Service pages
- [ ] "Approach" and "Insights" anchor sections (currently nav links target CTA/footer)

### P2 — conversion enhancements
- [ ] Lead capture form (instead of pure external link) with backend persistence
- [ ] Newsletter subscription with double opt-in
- [ ] Engagement intake form (qualifies hospital network vs payor vs venture)
- [ ] Case studies / testimonials section
- [ ] SEO: open graph image, structured data (Organization + Person schema for consultants)
- [ ] Analytics goals on CTA click events

## Next Action Items
1. Collect real consultant data and brand assets from the user
2. Decide whether the CTA should remain an external link or become an in-platform lead form
3. Add Privacy Policy / Terms of Service pages
