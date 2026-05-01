# Manoj Kumar — Personal Portfolio (Home Page)

## Original problem statement
Build a home page for a personal consulting site (IT Risk / Audit / Cyber Governance) in the attached Kaufman-style layout. Static frontend only; other pages to come later.

## User choices
- Brand: **Manoj Kumar**
- Tagline: "Helping organizations manage risk, strengthen controls, and meet regulatory expectations"
- Industry: IT Risk Management, IT Audit, Internal Audit, Cyber Governance & Compliance
- Accent colour: #1CA3E0 (blue)
- Nav items: Services, Expertise, Work Experience, About, Contact
- CTA: "Let's Connect" — scrolls to Contact section
- Hero portrait: user-supplied styled office headshot

## Architecture
- Frontend-only React single-page (App.js)
- No backend changes; default FastAPI + MongoDB template untouched
- Fonts: Manrope (display) + Inter (body) via Google Fonts
- Icons: CSS chevron marks (no emoji)

## Implemented (Dec 2025)
- Fixed-top transparent header with brand wordmark + chevron logo mark
- Hero section: dark gradient + portrait right-side + animated blue chevron decoration + notched white cutout
- About ("Who I Am") section
- Services grid (6 cards) — IT Risk Mgmt, IT & Internal Audit, Cyber Governance, Regulatory Compliance, Third-Party Risk, Control Design
- Expertise section with 6 capability cards + "12+ Years" stat
- Work Experience timeline (3 roles)
- Contact section with email + LinkedIn CTAs
- Footer
- Smooth-scroll navigation
- `data-testid` on every interactive/critical element

## Backlog (P1 for future iterations)
- Services, Expertise, Work Experience, About, Contact as *dedicated routed pages* (currently all sections on home)
- Real LinkedIn URL + real email
- Contact form with backend POST
- Case studies / testimonials module
- Mobile hamburger menu (currently desktop nav hides on small screens)

## Backlog (P2)
- Blog / articles module
- Certifications & awards section
- Dark/light theme toggle
- Downloadable resume/CV
