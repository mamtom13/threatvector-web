export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="text-lg font-bold text-cyan-400">
          ThreatVector Intelligence
        </a>

        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#report" className="transition hover:text-white">
            Report
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}