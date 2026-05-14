const awards = [
  {
    title: "Outstanding Student Leader",
    icon: "✦",
    gradient: "linear-gradient(135deg,#D4AF37,#F5E7B2,#D4AF37)",
    desc: "Recognizing a visionary medical student leader who has demonstrated exceptional impact, integrity, and influence within the student community.",
  },
  {
    title: "Best Medical Outreach Volunteer",
    icon: "✚",
    gradient: "linear-gradient(135deg,#0D5B3E,#2E7D59,#0D5B3E)",
    desc: "Celebrating dedication to community health, outreach programs, humanitarian service, and public health advocacy.",
  },
  {
    title: "Academic Excellence & Innovation Award",
    icon: "❖",
    gradient: "linear-gradient(135deg,#0D5B3E,#D4AF37,#0D5B3E)",
    desc: "Awarded to a student who combines academic distinction with creativity, innovation, and transformative ideas in medicine.",
  },
];

export function AwardNominations() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 sm:px-10"
      style={{ backgroundColor: "#F8F5EF" }}
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-emerald/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      {/* Leaf line pattern */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
      >
        <defs>
          <pattern id="leafPattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
            <path
              d="M10 80 Q50 20 150 50"
              fill="none"
              stroke="#0d5b3e"
              strokeWidth="1"
            />
            <path
              d="M20 140 Q80 90 150 130"
              fill="none"
              stroke="#0d5b3e"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leafPattern)" />
      </svg>

      {/* Header */}
      <div className="relative mx-auto max-w-md text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-white px-4 py-1.5 font-body text-[0.65rem] uppercase tracking-[0.25em] text-light-emerald">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          HealthWeek Awards
        </span>
        <h2 className="mt-5 font-display text-5xl font-bold leading-tight md:text-6xl">
          <span className="text-emerald">Award</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#0d5b3e,#d4af37,#0d5b3e)",
            }}
          >
            Nominations
          </span>
        </h2>
        <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="mt-6 font-body text-base text-body-muted">
          Nominate the outstanding medical students who embody excellence, service,
          and innovation for HealthWeek 2026.
        </p>
      </div>

      {/* Award cards */}
      <div className="relative mx-auto mt-14 flex max-w-md flex-col gap-6">
        {awards.map((a, i) => (
          <div
            key={a.title}
            className="group animate-fade-up relative overflow-hidden rounded-[30px] border border-gold/15 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(13,91,62,0.25)] transition-transform duration-500 hover:-translate-y-1"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/5 to-emerald/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex items-start justify-between gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-[0_10px_25px_-10px_rgba(13,91,62,0.4)]"
                style={{ backgroundImage: a.gradient }}
              >
                {a.icon}
              </div>
              <span className="rounded-full border border-gold/40 bg-cream px-3 py-1 font-body text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-light-emerald">
                Featured
              </span>
            </div>
            <h3 className="relative mt-5 font-display text-2xl font-bold text-emerald">
              {a.title}
            </h3>
            <p className="relative mt-3 font-body text-sm leading-relaxed text-emerald/70">
              {a.desc}
            </p>
            <button
              className="relative mt-6 w-full rounded-full py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-emerald transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(212,175,55,0.25),rgba(13,91,62,0.15),rgba(212,175,55,0.25))",
              }}
            >
              Vote / Nominate
            </button>
          </div>
        ))}
      </div>

      {/* Countdown */}
      <div className="relative mx-auto mt-16 max-w-md">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-muted-gold">
            Voting Ends Soon
          </span>
          <span className="h-px w-10 bg-gold" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {["Days", "Hours", "Minutes"].map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-gold/40 bg-white p-4 text-center shadow-[0_15px_40px_-20px_rgba(13,91,62,0.3)]"
            >
              <div className="font-display text-4xl text-emerald">12</div>
              <div className="mt-1 font-body text-[0.6rem] uppercase tracking-[0.25em] text-body-muted">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
