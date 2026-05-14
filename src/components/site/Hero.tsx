import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 -left-32 h-96 w-96 rounded-full bg-emerald/20 blur-3xl" />

      {/* Faint leaf accents */}
      <svg
        aria-hidden
        className="pointer-events-none absolute top-32 right-6 h-40 w-40 text-gold/20"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M50 10 Q70 40 50 90 Q30 40 50 10 Z" />
        <path d="M50 30 L50 90" />
      </svg>

      <Navbar />

      <div className="relative z-10 px-6 pt-12 pb-40 sm:px-10">
        {/* Eyebrow */}
        <div
          className="animate-fade-up flex items-center gap-3"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="h-px w-10 bg-gold" />
          <span className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-muted-gold">
            Learn. Lead. Heal.
          </span>
          <span className="text-gold text-base">❦</span>
        </div>

        {/* Heading stack */}
        <div className="mt-8 space-y-1">
          <h1
            className="animate-fade-up font-display text-[4.2rem] leading-[0.95] text-emerald"
            style={{ animationDelay: "1s" }}
          >
            FUTAMSA
          </h1>
          <h2
            className="animate-fade-up font-display text-[3.3rem] leading-[1] text-emerald"
            style={{ animationDelay: "1.1s" }}
          >
            Health<span className="text-gold">Week'26:</span>
          </h2>
          <h3
            className="animate-fade-up font-display text-[3rem] italic leading-[1.05] text-emerald"
            style={{ animationDelay: "1.2s" }}
          >
            The Renaissance.
          </h3>
        </div>

        {/* Divider */}
        <div
          className="animate-fade-up mt-8 flex items-center gap-3"
          style={{ animationDelay: "1.3s" }}
        >
          <span className="h-px w-16 bg-gold" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold text-gold text-xs">
            ❤
          </span>
          <span className="h-px w-16 bg-gold" />
        </div>

        {/* Body */}
        <p
          className="animate-fade-up mt-6 max-w-md font-body text-base leading-relaxed text-body-muted"
          style={{ animationDelay: "1.4s" }}
        >
          A new era of growth, discovery and impact—where knowledge flourishes,
          compassion leads, and futures are transformed.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up mt-8 flex max-w-xs flex-col gap-4"
          style={{ animationDelay: "1.5s" }}
        >
          <a
            href="#schedule"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-dark-emerald to-emerald px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream shadow-[0_15px_40px_-15px_rgba(1,50,32,0.6)]"
          >
            Explore Events
            <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#tickets"
            className="inline-flex items-center justify-center rounded-full border border-gold bg-white/70 px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-emerald transition-colors duration-300 hover:bg-gold hover:text-dark-emerald"
          >
            Get Involved
          </a>
        </div>

      </div>
    </section>
  );
}
