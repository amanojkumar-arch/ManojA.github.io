import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_home-builder-55/artifacts/5s1va9u3_20260425_115304-IMG_STYLE.jpg";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Expertise", id: "expertise" },
  { label: "Work Experience", id: "experience" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------- Header ---------------- */
const Header = () => {
  return (
    <header
      data-testid="site-header"
      className="absolute top-0 left-0 right-0 z-30"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
        <button
          data-testid="brand-logo"
          onClick={() => scrollTo("top")}
          className="flex items-center gap-3 group"
        >
          <span className="font-display text-white text-2xl md:text-3xl font-extrabold tracking-tight">
            Manoj&nbsp;Kumar
          </span>
          <span className="chevron-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => scrollTo(n.id)}
              className="nav-link font-display text-white/90 hover:text-white text-[15px] font-medium"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button
          data-testid="lets-connect-btn"
          onClick={() => scrollTo("contact")}
          className="cta-pill font-display font-bold text-[13px] tracking-[0.14em] px-6 md:px-7 py-3 md:py-3.5"
        >
          LET'S CONNECT
        </button>
      </div>
    </header>
  );
};

/* ---------------- Hero ---------------- */
const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[760px] md:min-h-[820px] overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, #0b1220 0%, #152033 45%, #1d2f4a 100%)",
      }}
    >
      {/* Right-side headshot (absolute, fills right half) */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[56%] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Manoj Kumar portrait"
          data-testid="hero-portrait"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark gradient to blend portrait into left side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,18,32,0.98) 0%, rgba(11,18,32,0.72) 22%, rgba(11,18,32,0.25) 46%, rgba(11,18,32,0) 70%)",
          }}
        />
      </div>

      {/* Decorative blue chevrons — top-right cluster */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-4 top-[38%] pointer-events-none"
      >
        <div className="relative w-[220px] h-[220px]">
          <span className="hero-chevron" style={{ left: 0, top: 0 }} />
          <span className="hero-chevron" style={{ left: 42, top: 0 }} />
          <span
            className="hero-chevron"
            style={{ left: 110, top: 44, opacity: 0.85 }}
          />
          <span
            className="hero-chevron"
            style={{ left: 152, top: 44, opacity: 0.85 }}
          />
        </div>
      </div>

      <Header />

      {/* Copy block */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 pt-44 md:pt-52 pb-40">
        <div className="max-w-2xl">
          <p
            data-testid="hero-kicker"
            className="rise kicker text-[#5fc0ea] mb-5"
          >
            IT Risk · Audit · Cyber Governance
          </p>
          <h1
            data-testid="hero-headline"
            className="rise delay-1 font-display text-white font-extrabold leading-[1.05] text-[38px] sm:text-[48px] lg:text-[60px] tracking-[-0.02em]"
          >
            Helping organizations manage{" "}
            <span className="text-[#5fc0ea]">risk</span>, strengthen{" "}
            <span className="text-[#5fc0ea]">controls</span>, and meet{" "}
            <span className="text-[#5fc0ea]">regulatory</span> expectations.
          </h1>
          <p
            data-testid="hero-sub"
            className="rise delay-2 mt-6 max-w-xl font-body text-white/75 text-base md:text-lg leading-relaxed"
          >
            Over a decade of advising enterprises on internal audit, IT
            controls, cyber governance, and compliance frameworks — turning
            complex regulation into clear, measurable action.
          </p>

          <div className="rise delay-3 mt-10 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-learn-more-btn"
              onClick={() => scrollTo("services")}
              className="flat-btn font-display font-bold text-[13px] tracking-[0.16em] px-9 py-4"
            >
              LEARN MORE
            </button>
            <button
              data-testid="hero-contact-btn"
              onClick={() => scrollTo("contact")}
              className="font-display font-semibold text-white/80 hover:text-white text-[14px] tracking-[0.1em] px-4 py-4 border-b border-white/30 hover:border-white transition"
            >
              SCHEDULE A CONSULTATION →
            </button>
          </div>
        </div>
      </div>

      {/* Notched white cutout at bottom */}
      <svg
        className="hero-notch"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,90 L0,50 L90,50 L140,0 L360,0 L410,50 L1440,50 L1440,90 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
};

/* ---------------- Who We Are / About ---------------- */
const About = () => (
  <section
    id="about"
    data-testid="about-section"
    className="bg-white py-24 md:py-32"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <p className="kicker">Who I Am</p>
        <div className="mt-6 h-[3px] w-14 bg-[var(--brand-blue)]" />
      </div>
      <div className="lg:col-span-8">
        <h2 className="font-display text-[28px] md:text-[38px] lg:text-[44px] font-extrabold text-[var(--ink)] leading-[1.15] tracking-[-0.02em]">
          A governance practitioner for companies that refuse to guess about
          risk.
        </h2>
        <div className="mt-8 space-y-5 font-body text-[var(--muted-ink)] text-[17px] leading-[1.75] max-w-3xl">
          <p>
            I&apos;m <strong className="text-[var(--ink)]">Manoj Kumar</strong>,
            an IT Risk Management, Internal Audit and Cyber Governance
            professional. I partner with finance, technology and compliance
            leaders to design control environments that stand up to regulators,
            auditors and the board — without slowing the business down.
          </p>
          <p>
            My work spans SOX IT general controls, ISO 27001, SOC 1 &amp; SOC
            2, NIST CSF, RBI/SEBI regulatory reviews, third-party risk and
            enterprise-wide cyber risk assessments. The goal is the same every
            time: translate complex requirements into clear, testable,
            defensible controls.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Services ---------------- */
const SERVICES = [
  {
    title: "IT Risk Management",
    body: "End-to-end IT risk frameworks, heat-maps, key risk indicators and board-level reporting that tie technology risk to business outcomes.",
  },
  {
    title: "IT & Internal Audit",
    body: "Risk-based audit planning, execution and reporting across ITGCs, application controls, SOX, SOC 1/SOC 2 readiness and remediation.",
  },
  {
    title: "Cyber Governance",
    body: "CISO-office advisory — policies, standards, risk register, security KPIs, and governance structures aligned to NIST CSF and ISO 27001.",
  },
  {
    title: "Regulatory Compliance",
    body: "Mapping and testing against SOX, GDPR, DPDP, RBI, SEBI, HIPAA and other regulatory regimes with evidence-ready workpapers.",
  },
  {
    title: "Third-Party & Vendor Risk",
    body: "Vendor inherent/residual risk tiering, due diligence questionnaires, continuous monitoring and contractual control obligations.",
  },
  {
    title: "Control Design & Remediation",
    body: "Re-engineering broken controls, closing audit findings, and building sustainable control ownership across first and second lines.",
  },
];

const Services = () => (
  <section
    id="services"
    data-testid="services-section"
    className="bg-[var(--paper-soft)] py-24 md:py-32 relative overflow-hidden"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10">
      <div className="max-w-2xl">
        <p className="kicker">What I Do</p>
        <h2 className="mt-5 font-display text-[34px] md:text-[48px] font-extrabold text-[var(--ink)] leading-[1.1] tracking-[-0.02em]">
          Services built around your control environment.
        </h2>
        <p className="mt-5 font-body text-[17px] text-[var(--muted-ink)] leading-relaxed">
          Each engagement is scoped around the controls that matter most to
          your regulators, auditors and customers — no templated reports, no
          compliance theatre.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            data-testid={`service-card-${i}`}
            className="card-lift bg-white border border-[#e5e9f0] rounded-sm p-8 relative"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-[var(--brand-blue)] font-extrabold text-[15px] tracking-[0.2em]">
                0{i + 1}
              </span>
              <span className="chevron-mark ink opacity-70" aria-hidden="true">
                <span />
                <span />
              </span>
            </div>
            <h3 className="mt-6 font-display font-extrabold text-[var(--ink)] text-[22px] leading-tight tracking-[-0.01em]">
              {s.title}
            </h3>
            <p className="mt-4 font-body text-[15px] text-[var(--muted-ink)] leading-[1.7]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Expertise ---------------- */
const EXPERTISE = [
  { k: "Frameworks", v: ["NIST CSF", "ISO 27001", "COBIT", "COSO"] },
  { k: "Audit & Assurance", v: ["SOX ITGC", "SOC 1 / SOC 2", "Internal Audit", "IFC"] },
  { k: "Regulatory", v: ["RBI IT Framework", "SEBI CSCRF", "GDPR", "DPDP Act"] },
  {
    k: "Cyber Domains",
    v: ["Identity & Access", "Cloud Security", "Data Protection", "Third-Party Risk"],
  },
  {
    k: "Tooling",
    v: ["ServiceNow GRC", "Archer", "Auditboard", "Excel-native workpapers"],
  },
  {
    k: "Industries",
    v: ["Banking & NBFC", "Insurance", "IT/ITeS", "Fintech"],
  },
];

const Expertise = () => (
  <section
    id="expertise"
    data-testid="expertise-section"
    className="bg-white py-24 md:py-32 relative"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <p className="kicker">Areas of Expertise</p>
        <h2 className="mt-5 font-display text-[34px] md:text-[46px] font-extrabold text-[var(--ink)] leading-[1.1] tracking-[-0.02em]">
          Deep specialisation across the full governance, risk &amp;
          compliance stack.
        </h2>
        <p className="mt-5 font-body text-[17px] text-[var(--muted-ink)] leading-relaxed max-w-md">
          A practitioner&apos;s view of what works — built from years of
          hands-on audit, assessment and advisory engagements.
        </p>
        <div
          className="mt-10 inline-flex items-center gap-4 px-6 py-4 bg-[var(--ink)] text-white"
          data-testid="expertise-stat"
        >
          <span className="font-display text-[var(--brand-blue)] text-4xl font-extrabold">
            12+
          </span>
          <span className="font-display text-sm tracking-[0.2em] uppercase text-white/80 max-w-[140px] leading-snug">
            Years in Risk &amp; Assurance
          </span>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="grid sm:grid-cols-2 gap-6">
          {EXPERTISE.map((e, idx) => (
            <div
              key={e.k}
              data-testid={`expertise-card-${idx}`}
              className="card-lift border border-[#e5e9f0] rounded-sm p-7 bg-[var(--paper-soft)]"
            >
              <p className="font-display font-bold text-[13px] tracking-[0.2em] text-[var(--brand-blue)] uppercase">
                {e.k}
              </p>
              <ul className="mt-4 space-y-2">
                {e.v.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] text-[var(--ink)] flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Work Experience ---------------- */
const EXPERIENCE = [
  {
    period: "Mar 2023 — Present",
    role: "Enterprise Technology Senior Auditor / Enterprise Technology Auditor",
    org: "Wells Fargo",
    location: "Hyderabad",
    logo: "/logos/wellsfargo.svg",
    body:
      "Executed enterprise technology risk audits across infrastructure, applications, and cyber domains. Assessed ITGC/ITAC controls, supported SOX/regulatory assurance, and contributed to risk-based audit planning. Partnered with stakeholders to strengthen governance and control maturity.",
  },
  {
    period: "Feb 2021 — Mar 2023",
    role: "Experienced Associate (incl. Netherlands Secondment)",
    org: "PwC",
    location: "",
    logo: "/logos/pwc.svg",
    body:
      "Executed SOX/ICFR IT audits, assessed ITGC and application controls, and supported remediation. Used analytics (ACL, Alteryx) to improve audit efficiency and identify control gaps. Contributed to internal quality control testing during secondment in the Netherlands.",
  },
  {
    period: "Feb 2019 — Jan 2021",
    role: "Internal Auditor (Consultant)",
    org: "Granules India Limited",
    location: "",
    logo: "/logos/granules.png",
    body:
      "Performed ICFR testing, process audits, and control evaluations. Supported internal audit leadership and mentored junior team members.",
  },
  {
    period: "Aug 2017 — Jun 2018",
    role: "Associate Consultant",
    org: "Infosys",
    location: "",
    logo: "/logos/infosys.svg",
    body:
      "Worked in management reporting and business process environments, supporting operational and financial reporting workflows.",
  },
];

const Experience = () => (
  <section
    id="experience"
    data-testid="experience-section"
    className="bg-[var(--ink)] py-24 md:py-32 relative overflow-hidden"
  >
    {/* decorative chevron bg */}
    <div
      aria-hidden="true"
      className="absolute right-0 top-16 opacity-[0.07] pointer-events-none"
    >
      <div className="relative w-[340px] h-[300px]">
        <span
          className="hero-chevron"
          style={{ left: 0, top: 0, height: 160, width: 30 }}
        />
        <span
          className="hero-chevron"
          style={{ left: 70, top: 0, height: 160, width: 30 }}
        />
        <span
          className="hero-chevron"
          style={{ left: 160, top: 80, height: 160, width: 30 }}
        />
        <span
          className="hero-chevron"
          style={{ left: 230, top: 80, height: 160, width: 30 }}
        />
      </div>
    </div>

    <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative">
      <p className="kicker text-[#5fc0ea]">Work Experience</p>
      <h2 className="mt-5 font-display text-[34px] md:text-[48px] font-extrabold text-white leading-[1.1] tracking-[-0.02em] max-w-3xl">
        A career built on evidence, rigour and business judgement.
      </h2>

      <div className="mt-16 relative">
        <div className="absolute left-[7px] top-3 bottom-3 w-[2px] timeline-line hidden md:block" />
        <div className="space-y-14">
          {EXPERIENCE.map((e, i) => (
            <div
              key={i}
              data-testid={`experience-${i}`}
              className="relative grid md:grid-cols-12 gap-6 md:gap-10"
            >
              <div className="md:col-span-4 flex md:items-start gap-5">
                <span className="timeline-dot mt-2 hidden md:inline-block" />
                <div>
                  <p className="font-display text-[var(--brand-blue)] font-bold text-[13px] tracking-[0.2em] uppercase">
                    {e.period}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    {e.logo && (
                      <span
                        data-testid={`experience-${i}-logo`}
                        className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-white p-1.5 flex-shrink-0"
                      >
                        <img
                          src={e.logo}
                          alt={`${e.org} logo`}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                        />
                      </span>
                    )}
                    <p className="font-display text-white text-lg font-semibold leading-tight">
                      {e.org}
                    </p>
                  </div>
                  {e.location && (
                    <p className="mt-2 font-body text-white/55 text-sm">
                      {e.location}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-white text-[24px] md:text-[28px] font-extrabold tracking-[-0.01em] leading-tight">
                  {e.role}
                </h3>
                <p className="mt-4 font-body text-white/70 text-[16px] leading-[1.75] max-w-2xl">
                  {e.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Contact ---------------- */
const Contact = () => (
  <section
    id="contact"
    data-testid="contact-section"
    className="bg-white py-24 md:py-32"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-6">
        <p className="kicker">Let's Connect</p>
        <h2 className="mt-5 font-display text-[36px] md:text-[52px] font-extrabold text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
          Working on something interesting in audit, risk, governance, or cyber these days?
        </h2>
        <div className="mt-6 space-y-4 font-body text-[17px] text-[var(--muted-ink)] leading-[1.75] max-w-xl">
          <p>
            I enjoy connecting with people in IT audit, risk, and cyber
            governance—sharing thoughts on SOX, SOC, and how risk is evolving.
          </p>
          <p>
            I also mentor those building careers in IT audit, risk, and
            cybersecurity.
          </p>
          <p>Feel free to reach out.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            data-testid="contact-email-btn"
            href="mailto:manojkumar.adabala@gmail.com"
            className="cta-pill font-display font-bold text-[13px] tracking-[0.16em] px-8 py-4"
          >
            EMAIL ME →
          </a>
          <a
            data-testid="contact-linkedin-btn"
            href="#"
            onClick={(e) => e.preventDefault()}
            className="font-display font-bold text-[13px] tracking-[0.16em] px-8 py-4 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
        </div>
      </div>

      <div className="lg:col-span-6 lg:pl-16">
        <div className="border-l-2 border-[var(--brand-blue)] pl-8 space-y-8">
          <div>
            <p className="font-display text-[11px] tracking-[0.24em] font-bold text-[var(--muted-ink)] uppercase">
              Based In
            </p>
            <p className="mt-2 font-display text-[var(--ink)] text-xl font-extrabold">
              Hyderabad, India
            </p>
            <p className="font-body text-[var(--muted-ink)] text-sm">
              Open to conversations globally — remote &amp; in person.
            </p>
          </div>
          <div>
            <p className="font-display text-[11px] tracking-[0.24em] font-bold text-[var(--muted-ink)] uppercase">
              Email
            </p>
            <p className="mt-2 font-body text-[var(--ink)] text-lg">
              manojkumar.adabala@gmail.com
            </p>
          </div>
          <div data-testid="insights-block">
            <p className="font-display text-[11px] tracking-[0.24em] font-bold text-[var(--muted-ink)] uppercase">
              Insights
            </p>
            <p className="mt-2 font-body text-[var(--muted-ink)] text-[15px] leading-[1.7] max-w-md">
              Sharing practical perspectives from IT audit, risk, and
              governance—based on real-world scenarios and evolving challenges.
            </p>
            <a
              data-testid="my-blogs-btn"
              href="/blogs"
              className="mt-5 inline-block cta-pill font-display font-bold text-[13px] tracking-[0.16em] px-8 py-4"
            >
              MY BLOGS →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Footer ---------------- */
const Footer = () => (
  <footer
    data-testid="site-footer"
    className="bg-[var(--ink)] text-white/70 py-10"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-display text-white text-lg font-extrabold">
          Manoj Kumar
        </span>
        <span className="chevron-mark" aria-hidden="true">
          <span />
          <span />
        </span>
      </div>
      <p className="font-body text-sm">
        © {new Date().getFullYear()} Manoj Kumar · IT Risk, Audit &amp; Cyber
        Governance
      </p>
    </div>
  </footer>
);

/* ---------------- Page ---------------- */
const Home = () => {
  return (
    <div data-testid="home-page">
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
