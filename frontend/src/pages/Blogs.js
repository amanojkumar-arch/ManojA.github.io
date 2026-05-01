import React from "react";

const POSTS = [
  {
    slug: "sox-itgc-in-a-cloud-first-world",
    date: "Nov 2025",
    tag: "SOX · ITGC",
    title: "SOX ITGCs in a cloud-first world: what actually changes",
    excerpt:
      "Lift-and-shift vs. re-platforming completely changes the control narrative. A practitioner's look at where ITGCs need to be redesigned instead of re-scoped.",
  },
  {
    slug: "soc-2-readiness-beyond-the-checklist",
    date: "Oct 2025",
    tag: "SOC 2",
    title: "SOC 2 readiness: what the checklist doesn't tell you",
    excerpt:
      "Trust Services Criteria is the floor, not the ceiling. The questions auditors really ask, and the control evidence teams consistently fumble on.",
  },
  {
    slug: "third-party-risk-that-actually-scales",
    date: "Sep 2025",
    tag: "TPRM",
    title: "Third-party risk that actually scales",
    excerpt:
      "Tier every vendor, sure — but tier them on what? A simpler model for inherent risk, residual risk and continuous monitoring that survives audit.",
  },
  {
    slug: "mentoring-new-it-auditors",
    date: "Aug 2025",
    tag: "Mentoring",
    title: "What I tell new IT auditors in their first 90 days",
    excerpt:
      "Workpapers, walkthroughs, and the art of asking the second question. A short field guide for anyone starting out in IT audit and risk.",
  },
  {
    slug: "nist-csf-2-for-indian-regulated-entities",
    date: "Jul 2025",
    tag: "Cyber Governance",
    title: "Mapping NIST CSF 2.0 for Indian regulated entities",
    excerpt:
      "How CSF 2.0's Govern function maps cleanly to RBI and SEBI expectations — and where it doesn't. A working crosswalk for GRC teams.",
  },
  {
    slug: "risk-registers-people-actually-use",
    date: "Jun 2025",
    tag: "Risk",
    title: "Designing risk registers people actually use",
    excerpt:
      "Most enterprise risk registers die in a spreadsheet. A few ownership and cadence choices that keep them alive — and useful at the board.",
  },
];

const goHome = () => {
  window.location.href = "/";
};

const BlogsHeader = () => (
  <header
    data-testid="blogs-header"
    className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-[#e5e9f0]"
  >
    <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
      <button
        data-testid="blogs-brand"
        onClick={goHome}
        className="flex items-center gap-3"
      >
        <span className="font-display text-[var(--ink)] text-2xl font-extrabold tracking-tight">
          Manoj&nbsp;Kumar
        </span>
        <span className="chevron-mark ink" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <button
        data-testid="back-home-btn"
        onClick={goHome}
        className="font-display font-bold text-[13px] tracking-[0.16em] px-6 py-3 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white transition-colors"
      >
        ← BACK HOME
      </button>
    </div>
  </header>
);

export default function Blogs() {
  return (
    <div data-testid="blogs-page" className="min-h-screen bg-white">
      <BlogsHeader />

      {/* Hero */}
      <section className="bg-[var(--ink)] py-20 md:py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-4 top-1/3 opacity-[0.12] pointer-events-none"
        >
          <div className="relative w-[240px] h-[240px]">
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

        <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative">
          <p className="kicker text-[#5fc0ea]">Insights</p>
          <h1 className="mt-5 font-display text-white font-extrabold text-[40px] md:text-[60px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
            Notes from the <span className="text-[#5fc0ea]">audit</span> and{" "}
            <span className="text-[#5fc0ea]">risk</span> trenches.
          </h1>
          <p className="mt-6 font-body text-white/70 text-lg leading-relaxed max-w-2xl">
            Sharing practical perspectives from IT audit, risk, and
            governance—based on real-world scenarios and evolving challenges.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p, i) => (
              <article
                key={p.slug}
                data-testid={`blog-card-${i}`}
                className="card-lift bg-white border border-[#e5e9f0] rounded-sm p-8 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[var(--brand-blue)] font-extrabold text-[12px] tracking-[0.2em] uppercase">
                    {p.tag}
                  </span>
                  <span className="font-body text-xs text-[var(--muted-ink)]">
                    {p.date}
                  </span>
                </div>
                <h2 className="mt-5 font-display font-extrabold text-[var(--ink)] text-[22px] leading-[1.2] tracking-[-0.01em]">
                  {p.title}
                </h2>
                <p className="mt-4 font-body text-[15px] text-[var(--muted-ink)] leading-[1.7] flex-grow">
                  {p.excerpt}
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="mt-6 font-display text-[13px] font-bold tracking-[0.16em] text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)] inline-flex items-center gap-2"
                >
                  READ MORE →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-20 border-t border-[#e5e9f0] pt-10 text-center">
            <p className="font-body text-[var(--muted-ink)]">
              More posts coming soon. In the meantime, feel free to{" "}
              <a
                href="mailto:manojkumar.adabala@gmail.com"
                className="text-[var(--brand-blue)] font-semibold hover:underline"
              >
                drop a note
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--ink)] text-white/70 py-10">
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
    </div>
  );
}
