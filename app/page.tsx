import Navbar from "./components/Navbar";
export default function Home() {
  return (
  <>
    <Navbar />
    <main className="min-h-screen bg-black pt-20 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-black to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,180,255,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(0,255,170,0.10),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
              Threat Intelligence • Malware C2 Tracking • DNS Abuse Reporting
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              ThreatVector Intelligence
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
              Cyber threat detection, malware infrastructure tracking, and
              evidence-driven DNS abuse reporting for malicious domains and C2
              operations.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#report"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Submit a Report
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Core Services
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built for cyber investigations and abuse response
          </h2>
          <p className="mt-4 text-zinc-400">
            A focused platform for identifying malicious infrastructure,
            supporting enforcement actions, and presenting findings clearly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Malware Analysis</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Review malware behavior, isolate network indicators, and document
              infrastructure used in malicious campaigns.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">C2 Infrastructure Tracking</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Monitor command-and-control endpoints, suspicious ports, and
              domain relationships tied to malware operations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">DNS Abuse Reporting</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Prepare concise evidence-based reports for registrars, registries,
              and abuse desks to support mitigation requests.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Threat Intelligence</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Turn raw indicators into structured findings that help defenders
              understand risks and act faster.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3 md:px-10">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm text-cyan-300">Focus Area</p>
            <h3 className="mt-2 text-2xl font-semibold">Evidence First</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Clear technical claims supported by verifiable artifacts, URLs,
              and investigation records.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-cyan-300">Workflow</p>
            <h3 className="mt-2 text-2xl font-semibold">Abuse Escalation</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Streamlined reporting structure for malware C2 and DNS abuse
              cases requiring urgent attention.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-cyan-300">Output</p>
            <h3 className="mt-2 text-2xl font-semibold">Actionable Reports</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Professional summaries designed for security teams, abuse desks,
              registrars, and registries.
            </p>
          </div>
        </div>
      </section>

      <section id="report" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Report Intake
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Submit suspicious domain or infrastructure details
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Use this form to provide a domain, port, threat type, and short
              technical summary for review.
            </p>
          </div>

          <form className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Domain / Host
                </label>
                <input
                  type="text"
                  placeholder="example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">Port</label>
                <input
                  type="text"
                  placeholder="4782"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Threat Type
                </label>
                <input
                  type="text"
                  placeholder="Malware C2 / DNS Abuse"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Technical Summary
                </label>
                <textarea
                  rows={5}
                  placeholder="Short summary of indicators, sandbox evidence, URLs, and affected infrastructure."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Send Report
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer
  id="contact"
  className="border-t border-white/10 px-6 py-8 text-sm text-zinc-500 md:px-10"
>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ThreatVector Intelligence. All rights reserved.</p>
          <p>Cyber Threat Detection • DNS Abuse Reporting • Threat Intelligence</p>
        </div>
      </footer>
       </main>
  </>
  );
}