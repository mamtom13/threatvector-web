export default function ThreatVectorIntelligenceWebsite() {
  const services = [
    {
      title: "Malware C2 Domain Reporting",
      description:
        "Evidence-driven reporting for malware command-and-control domains, with clear abuse narratives aligned to registrar and registry workflows.",
    },
    {
      title: "Threat Intelligence Research",
      description:
        "Focused analysis of suspicious infrastructure, domain patterns, hosting indicators, and abuse signals to support rapid mitigation.",
    },
    {
      title: "Abuse Evidence Preparation",
      description:
        "Structured evidence packaging for anti-abuse teams, including sandbox findings, technical indicators, and concise remediation requests.",
    },
    {
      title: "Brand & Infrastructure Monitoring",
      description:
        "Continuous visibility into suspicious domains, impersonation risks, and malicious infrastructure targeting brands and online ecosystems.",
    },
  ];

  const workflow = [
    "Collect technical indicators and sandbox evidence",
    "Validate DNS and infrastructure abuse patterns",
    "Map each assertion to source-backed evidence",
    "Prepare registrar/registry-ready abuse reports",
    "Track remediation and support escalation where needed",
  ];

  const stats = [
    { value: "24/7", label: "Threat monitoring mindset" },
    { value: "IOC", label: "Evidence-first reporting" },
    { value: "DNS", label: "Abuse-focused investigation" },
    { value: "C2", label: "Malware infrastructure focus" },
  ];

  const nav = ["Services", "Methodology", "About", "Contact"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-[0.25em] text-cyan-400">
              THREATVECTOR
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Intelligence
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
          >
            Request Review
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.15),transparent_22%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
                Cyber Threat Intelligence & Abuse Reporting
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Professional intelligence website for
                <span className="block text-cyan-400">threatvectorintelligence.com</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                ThreatVector Intelligence helps identify, document, and report malicious
                infrastructure with a focus on malware C2 domains, DNS abuse, and actionable
                evidence for anti-abuse response teams.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30">
                <div className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Core Capabilities
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <div className="text-2xl font-semibold text-white">{stat.value}</div>
                      <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">
                  Investigation Focus
                </div>
                <div className="grid gap-3 text-sm text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Malware command-and-control infrastructure</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Registrar and registry-ready abuse escalation</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Domain reputation, DNS abuse, and IOC validation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-400">Services</div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Focused solutions for abuse response and intelligence operations</h2>
            <p className="mt-4 text-slate-400">
              Built for a professional security brand presence, this layout highlights credibility,
              clarity, and technical specialization.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="methodology" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-400">Methodology</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Evidence-first workflow designed for real-world abuse mitigation</h2>
              <p className="mt-5 max-w-2xl text-slate-400 leading-8">
                ThreatVector Intelligence emphasizes concise, source-supported reporting that helps
                anti-abuse teams review malicious domain activity quickly and act with confidence.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="space-y-4">
                {workflow.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-300">
                      0{index + 1}
                    </div>
                    <div className="pt-1 text-sm leading-7 text-slate-300">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-400">About</div>
              <h2 className="mt-3 text-3xl font-semibold">A professional identity for a modern threat intelligence brand</h2>
              <p className="mt-5 text-slate-400 leading-8">
                This website concept is structured to present ThreatVector Intelligence as a serious,
                trustworthy cybersecurity operation. It combines a clean executive look with a strong
                technical tone suitable for clients, registrars, registry teams, and security partners.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-200">Why this design works</div>
              <div className="mt-5 space-y-4 text-sm leading-7 text-cyan-50/90">
                <p>Professional dark theme aligned with cybersecurity branding</p>
                <p>Clear service positioning for malware, DNS abuse, and reporting workflows</p>
                <p>Simple structure that can later expand into blog, case studies, and contact forms</p>
                <p>Suitable as a landing page for WordPress, React, Framer, or static hosting</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-slate-900/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-slate-900 to-slate-900 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</div>
                  <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ready to launch ThreatVector Intelligence online</h2>
                  <p className="mt-5 max-w-2xl text-slate-300 leading-8">
                    This draft gives you a professional homepage foundation. The next step is adding
                    your real logo, email, domain deployment, and optional sections such as case
                    studies, blog posts, reporting policy, and a submission form.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                  <div className="space-y-4 text-sm text-slate-300">
                    <div>
                      <div className="text-slate-500">Website</div>
                      <div className="mt-1 font-medium text-white">threatvectorintelligence.com</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Suggested email</div>
                      <div className="mt-1 font-medium text-white">contact@threatvectorintelligence.com</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Positioning</div>
                      <div className="mt-1 font-medium text-white">Threat Intelligence • DNS Abuse • Malware C2 Reporting</div>
                    </div>
                  </div>

                  <a
                    href="mailto:contact@threatvectorintelligence.com"
                    className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
                  >
                    Email ThreatVector Intelligence
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
