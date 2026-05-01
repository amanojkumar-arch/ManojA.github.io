import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Search,
  ClipboardCheck,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  FileCheck2,
  ScrollText,
  Building2,
  Briefcase,
  FlaskConical,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Blogs from "./pages/Blogs";

/* ----- Reveal-on-scroll: applies .reveal-in once each .reveal element enters viewport ----- */
const useRevealOnScroll = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ----- Scroll spy for active nav highlight ----- */
const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);
  return active;
};

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_home-builder-55/artifacts/5s1va9u3_20260425_115304-IMG_STYLE.jpg";

const NAV_LINKS = [
  { label: "Profile", id: "about" },
  { label: "Scope of Work", id: "services" },
  { label: "Expertise", id: "expertise" },
  { label: "Work Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------- Header ---------------- */
const Header = () => {
  const active = useActiveSection([
    "about",
    "services",
    "expertise",
    "experience",
    "contact",
  ]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header
      data-testid="site-header"
      className="absolute top-0 left-0 right-0 z-30"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between gap-8">
        {/* LEFT CLUSTER: brand + nav */}
        <div className="flex items-center gap-10 xl:gap-14 min-w-0">
          <button
            data-testid="brand-logo"
            onClick={() => scrollTo("top")}
            className="flex items-center gap-3 group flex-shrink-0"
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

          <nav
            data-testid="primary-nav"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {NAV_LINKS.map((n) => (
              <button
                key={n.id}
                data-testid={`nav-${n.id}`}
                onClick={() => handleNav(n.id)}
                data-active={active === n.id}
                className="nav-link font-display text-white/85 hover:text-white text-[17px] font-semibold whitespace-nowrap"
              >
                {n.label}
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT: CTA + mobile hamburger */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            data-testid="lets-connect-btn"
            onClick={() => scrollTo("contact")}
            className="cta-pill font-display font-bold text-[13px] tracking-[0.14em] px-6 md:px-7 py-3 md:py-3.5"
          >
            LET'S CONNECT
          </button>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-white border border-white/30 rounded-md hover:bg-white/10 transition"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden mx-6 mt-3 rounded-lg bg-[var(--ink)] border border-white/10 overflow-hidden shadow-2xl"
        >
          <ul className="divide-y divide-white/10">
            {NAV_LINKS.map((n) => (
              <li key={n.id}>
                <button
                  data-testid={`mobile-nav-${n.id}`}
                  onClick={() => handleNav(n.id)}
                  data-active={active === n.id}
                  className="w-full text-left px-6 py-4 font-display text-white/90 hover:text-white text-[16px] font-semibold flex items-center justify-between"
                >
                  {n.label}
                  {active === n.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
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
            Risk Management Professional with experience across{" "}
            <span className="text-[#5fc0ea]">IT audit</span>,{" "}
            <span className="text-[#5fc0ea]">technology risk</span>, and{" "}
            <span className="text-[#5fc0ea]">control environments</span>.
          </h1>
          <p
            data-testid="hero-sub"
            className="rise delay-2 mt-6 max-w-xl font-body text-white/75 text-base md:text-lg leading-relaxed"
          >
            Focused on executing audits, assessing control effectiveness, and
            supporting risk-informed decisions across financial services,
            consulting, and manufacturing environments.
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
              GET IN TOUCH →
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

/* ---------------- Profile (formerly Who I Am) ---------------- */
const About = () => (
  <section
    id="about"
    data-testid="about-section"
    className="bg-white py-24 md:py-32"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <p className="kicker">Profile</p>
        <div className="mt-6 h-[3px] w-14 bg-[var(--brand-blue)]" />
      </div>
      <div className="lg:col-span-8 reveal">
        <div className="space-y-5 font-body text-[var(--muted-ink)] text-[19px] leading-[1.75] max-w-3xl">
          <p>
            I&apos;m{" "}
            <strong className="text-[var(--ink)]">Manoj Kumar</strong>, a Risk
            Management and IT Audit professional with experience across
            consulting, pharma manufacturing, and financial services
            environments. My work focuses on executing IT audits, assessing
            control effectiveness, and supporting risk-informed decision
            making.
          </p>
          <p>
            I have worked across ITGC, ITAC, SOX, and regulatory audits—
            partnering with business, technology, and risk teams to identify
            control gaps and improve control clarity. My approach is practical
            and evidence-driven, focused on strengthening governance without
            adding unnecessary complexity.
          </p>
          <p>
            Alongside my core work, I run{" "}
            <strong className="text-[var(--ink)]">Zyaan Edge</strong>, an
            initiative focused on mentoring and guiding early-career
            professionals in IT audit, risk, and cybersecurity.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Zyaan Edge ---------------- */
const ZyaanEdge = () => (
  <section
    id="zyaan-edge"
    data-testid="zyaan-edge-section"
    className="bg-white pb-24 md:pb-32"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10">
      <div className="border-t border-[#e5e9f0] pt-16 md:pt-20 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <p className="kicker">Initiative</p>
          <div className="mt-6 h-[3px] w-14 bg-[var(--brand-blue)]" />
        </div>
        <div className="lg:col-span-8 reveal">
          <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] font-extrabold text-[var(--ink)] leading-[1.1] tracking-[-0.02em]">
            Zyaan Edge
          </h2>
          <p className="mt-6 font-body text-[var(--muted-ink)] text-[19px] leading-[1.75] max-w-2xl">
            An initiative focused on mentoring and guiding early-career
            professionals in IT audit, risk, and cybersecurity.
          </p>
          <a
            data-testid="zyaan-edge-learn-more"
            href="#"
            onClick={(e) => e.preventDefault()}
            className="mt-8 inline-block cta-pill font-display font-bold text-[13px] tracking-[0.16em] px-8 py-4"
          >
            LEARN MORE →
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Services ---------------- */
const SERVICES = [
  {
    title: "IT Risk & Control Assessment",
    body: "Support risk assessments and evaluate control design and effectiveness.",
  },
  {
    title: "IT Audit Execution",
    body: "Perform audit planning, walkthroughs, control testing, and documentation.",
  },
  {
    title: "Cyber & Technology Risk",
    body: "Assess risks across identity, access, and cloud environments.",
  },
  {
    title: "Regulatory & Compliance",
    body: "Support regulatory audits through structured testing and documentation.",
  },
  {
    title: "Third-Party Risk Review",
    body: "Evaluate vendor risk exposure and control environments.",
  },
  {
    title: "Control Testing & Remediation",
    body: "Identify control gaps and support remediation tracking.",
  },
];

const Services = () => (
  <section
    id="services"
    data-testid="services-section"
    className="bg-[var(--paper-soft)] py-24 md:py-32 relative overflow-hidden"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10">
      <div className="max-w-2xl reveal">
        <h2 className="font-display text-[40px] md:text-[58px] font-extrabold text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
          Scope of Work
        </h2>
        <p className="mt-6 font-body text-[19px] md:text-[20px] text-[var(--muted-ink)] leading-[1.7]">
          Work focused on audit execution, control assessment, and risk
          evaluation across technology environments.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            data-testid={`service-card-${i}`}
            style={{ "--stagger": i * 80 }}
            className="reveal card-lift bg-white border border-[#e5e9f0] rounded-sm p-9 relative"
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
            <h3 className="mt-7 font-display font-extrabold text-[var(--ink)] text-[24px] leading-tight tracking-[-0.01em]">
              {s.title}
            </h3>
            <p className="mt-4 font-body text-[17px] text-[var(--muted-ink)] leading-[1.7]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Risk Capability Map (Expertise) ---------------- */
const LIFECYCLE = [
  { label: "Risk Assessment", Icon: Search },
  { label: "Control Design Evaluation", Icon: FileCheck2 },
  { label: "Control Testing (ITGC / ITAC)", Icon: ClipboardCheck },
  { label: "Issue Identification", Icon: AlertTriangle },
  { label: "Remediation Tracking", Icon: Wrench },
];

const AUDIT_CAPS = [
  { label: "ITGC / ITAC Testing", Icon: ClipboardCheck },
  { label: "SOX / ICFR", Icon: ShieldCheck },
  { label: "Internal Audit", Icon: FileCheck2 },
  { label: "Regulatory Audits", Icon: ScrollText },
  { label: "Risk Assessment", Icon: Search },
];

const INDUSTRIES = [
  { label: "Financial Services", note: "3+ years", Icon: Building2 },
  { label: "Consulting", note: "2+ years", Icon: Briefcase },
  { label: "Pharma Manufacturing", note: "2+ years", Icon: FlaskConical },
];

const FRAMEWORKS = ["NIST CSF", "ISO 27001", "COBIT", "COSO"];

const Expertise = () => (
  <section
    id="expertise"
    data-testid="expertise-section"
    className="bg-white py-24 md:py-32 relative"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10">
      {/* Header row */}
      <div className="grid lg:grid-cols-12 gap-12 items-end reveal">
        <div className="lg:col-span-8">
          <h2
            data-testid="expertise-headline"
            className="font-display text-[44px] md:text-[64px] font-extrabold text-[var(--ink)] leading-[1.05] tracking-[-0.02em]"
          >
            Risk Capability Map
          </h2>
          <p className="mt-6 font-body text-[19px] md:text-[21px] text-[var(--muted-ink)] leading-[1.7] max-w-2xl">
            A structured view of how I operate across the audit and risk
            lifecycle—focused on execution, control evaluation, and risk
            visibility.
          </p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <div
            className="inline-flex items-center gap-5 px-7 py-5 bg-[var(--ink)] text-white"
            data-testid="expertise-stat"
          >
            <span className="font-display text-[var(--brand-blue)] text-5xl font-extrabold leading-none">
              7+
            </span>
            <span className="font-display text-[13px] tracking-[0.2em] uppercase text-white/80 max-w-[150px] leading-snug">
              Years in Audit &amp; Risk
            </span>
          </div>
        </div>
      </div>

      {/* BLOCK 1 — Risk Lifecycle */}
      <div
        data-testid="lifecycle-block"
        className="reveal mt-20 md:mt-24 bg-[var(--paper-soft)] border border-[#e5e9f0] p-8 md:p-14"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-display text-[13px] tracking-[0.24em] font-bold text-[var(--brand-blue)] uppercase">
            Block 01 · Risk Lifecycle
          </p>
          <p className="font-body text-[15px] text-[var(--muted-ink)] hidden md:block">
            How a typical engagement moves end-to-end.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap md:flex-nowrap items-start justify-between gap-y-12">
          {LIFECYCLE.map((step, i) => {
            const { Icon } = step;
            return (
              <React.Fragment key={step.label}>
                <div
                  data-testid={`lifecycle-${i}`}
                  className="lifecycle-step group flex flex-col items-center text-center w-1/2 md:flex-1 md:min-w-0 px-2 cursor-default"
                >
                  <span className="icon-pop w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-[var(--brand-blue)] flex items-center justify-center shadow-[0_10px_28px_-12px_rgba(28,163,224,0.55)]">
                    <Icon
                      strokeWidth={1.6}
                      className="w-12 h-12 md:w-14 md:h-14 text-[var(--brand-blue)]"
                    />
                  </span>
                  <p className="mt-6 font-display font-bold text-[16px] md:text-[18px] text-[var(--ink)] leading-snug max-w-[170px]">
                    {step.label}
                  </p>
                </div>
                {i < LIFECYCLE.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden md:flex items-center justify-center pt-11 flex-shrink-0"
                  >
                    <ChevronRight
                      strokeWidth={2.5}
                      className="w-9 h-9 text-[var(--brand-blue)]"
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* BLOCK 2 — Audit & Control Capabilities */}
      <div className="mt-20 md:mt-28">
        <div className="flex items-baseline justify-between flex-wrap gap-4 reveal">
          <div>
            <p className="font-display text-[13px] tracking-[0.24em] font-bold text-[var(--brand-blue)] uppercase">
              Block 02 · Audit &amp; Control Capabilities
            </p>
            <h3 className="mt-4 font-display text-[28px] md:text-[40px] font-extrabold text-[var(--ink)] tracking-[-0.01em]">
              Where the day-to-day work sits.
            </h3>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIT_CAPS.map((cap, i) => {
            const { Icon } = cap;
            return (
              <div
                key={cap.label}
                data-testid={`audit-cap-${i}`}
                style={{ "--stagger": i * 80 }}
                className="reveal card-lift group bg-white border border-[#e5e9f0] p-9 md:p-10 flex items-start gap-6"
              >
                <span className="icon-pop flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-md bg-[var(--brand-blue)]/10 flex items-center justify-center">
                  <Icon
                    strokeWidth={1.6}
                    className="w-11 h-11 md:w-13 md:h-13 text-[var(--brand-blue)]"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </span>
                <div className="pt-2">
                  <h4 className="font-display font-extrabold text-[var(--ink)] text-[22px] md:text-[24px] leading-tight tracking-[-0.01em]">
                    {cap.label}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BLOCK 3 — Industries */}
      <div className="mt-20 md:mt-28">
        <div className="reveal">
          <p className="font-display text-[13px] tracking-[0.24em] font-bold text-[var(--brand-blue)] uppercase">
            Block 03 · Industries
          </p>
          <h3 className="mt-4 font-display text-[28px] md:text-[40px] font-extrabold text-[var(--ink)] tracking-[-0.01em]">
            Sectors I&apos;ve worked across.
          </h3>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const { Icon } = ind;
            return (
              <div
                key={ind.label}
                data-testid={`industry-${i}`}
                style={{ "--stagger": i * 100 }}
                className="reveal card-lift group bg-[var(--paper-soft)] border border-[#e5e9f0] p-12 text-center"
              >
                <span className="icon-pop inline-flex w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border border-[var(--brand-blue)]/30 items-center justify-center">
                  <Icon
                    strokeWidth={1.6}
                    className="w-12 h-12 md:w-14 md:h-14 text-[var(--brand-blue)]"
                  />
                </span>
                <h4 className="mt-7 font-display font-extrabold text-[var(--ink)] text-[22px] md:text-[24px] tracking-[-0.01em]">
                  {ind.label}
                </h4>
                <p className="mt-2 font-body text-[15px] text-[var(--muted-ink)] tracking-[0.06em]">
                  {ind.note}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* BLOCK 4 — Tools */}
      <div className="mt-20 md:mt-28">
        <div className="reveal">
          <p className="font-display text-[13px] tracking-[0.24em] font-bold text-[var(--brand-blue)] uppercase">
            Block 04 · Tools
          </p>
          <h3 className="mt-4 font-display text-[28px] md:text-[40px] font-extrabold text-[var(--ink)] tracking-[-0.01em]">
            Day-to-day tooling.
          </h3>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl">
          <div
            data-testid="tool-acl"
            className="reveal card-lift bg-white border border-[#e5e9f0] p-10 flex items-center justify-center min-h-[170px]"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display font-extrabold text-[60px] md:text-[70px] text-[var(--ink)] leading-none tracking-[-0.04em]">
                ACL
              </span>
              <span className="font-display text-[13px] tracking-[0.24em] uppercase text-[var(--brand-blue)] font-bold">
                Analytics
              </span>
            </div>
          </div>
          <div
            data-testid="tool-alteryx"
            style={{ "--stagger": 100 }}
            className="reveal card-lift bg-white border border-[#e5e9f0] p-10 flex items-center justify-center min-h-[170px]"
          >
            <img
              src="/logos/alteryx.svg"
              alt="Alteryx"
              className="h-16 md:h-20 w-auto"
            />
          </div>
        </div>
      </div>

      {/* FRAMEWORKS — subtle row */}
      <div className="mt-20 md:mt-24 border-t border-[#e5e9f0] pt-10 reveal">
        <p className="font-display text-[12px] tracking-[0.24em] font-bold text-[var(--muted-ink)] uppercase">
          Frameworks
        </p>
        <div
          data-testid="frameworks-row"
          className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3"
        >
          {FRAMEWORKS.map((f, i) => (
            <React.Fragment key={f}>
              <span className="font-display font-bold text-[20px] md:text-[22px] text-[var(--ink)] tracking-[-0.01em]">
                {f}
              </span>
              {i < FRAMEWORKS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)]"
                />
              )}
            </React.Fragment>
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
      "Executed IT audits across infrastructure, applications, and cyber domains, covering ITGC and ITAC controls. Contributed to risk-based audit planning and performed control testing to support regulatory assurance.\n\nIdentified control gaps and supported remediation discussions with technology and risk teams. Participated in risk assessments and ongoing monitoring to highlight emerging risks.",
  },
  {
    period: "Feb 2021 — Mar 2023",
    role: "Experienced Associate (incl. Netherlands Secondment)",
    org: "PwC",
    location: "Hyderabad",
    logo: "/logos/pwc.svg",
    body:
      "Executed SOX and ICFR IT audits, including walkthroughs, control testing, and documentation.\n\nIdentified control deficiencies and supported remediation. Used ACL and Alteryx for data analysis and improving audit efficiency. Contributed to internal quality control testing during secondment.",
  },
  {
    period: "Feb 2019 — Jan 2021",
    role: "Internal Auditor (Consultant)",
    org: "Granules India Limited",
    location: "Hyderabad",
    logo: "/logos/granules.png",
    body:
      "Supported execution of internal audits in a pharma manufacturing environment, including process reviews and ICFR testing.\n\nEvaluated control effectiveness, documented findings, and tracked remediation actions with management.",
  },
  {
    period: "Aug 2017 — Jun 2018",
    role: "Associate Consultant",
    org: "Infosys",
    location: "Bengaluru",
    logo: "/logos/infosys.svg",
    body:
      "Supported management reporting and financial analysis, including revenue tracking and variance analysis.\n\nImproved reporting accuracy and supported operational and financial decision-making.",
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
      <h2 className="mt-5 font-display text-[40px] md:text-[58px] font-extrabold text-white leading-[1.05] tracking-[-0.02em] max-w-3xl">
        Roles, responsibilities, and where the work happened.
      </h2>

      <div className="mt-16 relative">
        <div className="absolute left-[7px] top-3 bottom-3 w-[2px] timeline-line hidden md:block" />
        <div className="space-y-14">
          {EXPERIENCE.map((e, i) => (
            <div
              key={i}
              data-testid={`experience-${i}`}
              style={{ "--stagger": i * 80 }}
              className="reveal relative grid md:grid-cols-12 gap-6 md:gap-10"
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
                        className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-white p-2 flex-shrink-0"
                      >
                        <img
                          src={e.logo}
                          alt={`${e.org} logo`}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                        />
                      </span>
                    )}
                    <div>
                      <p className="font-display text-white text-lg font-semibold leading-tight">
                        {e.org}
                      </p>
                      {e.location && (
                        <p className="mt-1 font-body text-white/55 text-sm">
                          {e.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-white text-[26px] md:text-[30px] font-extrabold tracking-[-0.01em] leading-tight">
                  {e.role}
                </h3>
                <div className="mt-4 space-y-4 max-w-2xl">
                  {e.body.split("\n\n").map((para, idx) => (
                    <p
                      key={idx}
                      className="font-body text-white/75 text-[17px] leading-[1.75]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
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
      <div className="lg:col-span-6 reveal">
        <p className="kicker">Let's Connect</p>
        <h2 className="mt-5 font-display text-[40px] md:text-[60px] font-extrabold text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
          Working on something interesting in audit, risk, governance, or cyber these days?
        </h2>
        <div className="mt-7 space-y-4 font-body text-[19px] text-[var(--muted-ink)] leading-[1.75] max-w-xl">
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
            href="https://www.linkedin.com/in/manoj-kumar-a-3a9663177"
            target="_blank"
            rel="noopener noreferrer"
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
  useRevealOnScroll();
  return (
    <div data-testid="home-page">
      <Hero />
      <About />
      <ZyaanEdge />
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
