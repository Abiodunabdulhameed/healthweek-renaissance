const TICKET_URL = "https://forms.gle/fEBSk99ggGBfpaAr9";

const tickets = [
  {
    badge: "Most Popular",
    name: "REGULAR",
    price: "₦6,000",
    subLabel: "",
    desc: "Standard access to all HealthWeek core experiences and sessions.",
    features: [
      "One delicious meal",
      "Standard refreshments",
      "Standard seating",
      "Access to the Dinner & Awards Night",
    ],
    border: "border-gold",
  },
  {
    badge: "Best Value",
    name: "COUPLE",
    price: "₦14,000",
    subLabel: "",
    desc: "Bring someone along and experience HealthWeek together.",
    features: [
      "Two meal selections",
      "Standard + extra refreshments",
      "Side menu",
      "Reserved couple seating",
    ],
    border: "border-cream",
  },
  {
    badge: "Premium",
    name: "PREMIUM TABLE",
    price: "₦45,000",
    subLabel: "Table for 5",
    desc: "Priority seating, premium access, and exclusive event privileges.",
    features: [
      "Three meal selections",
      "Premium refreshments with selected wine",
      "Premium side menu",
      "Exclusive front-row table",
    ],
    border: "border-gold border-2",
  },
];

export function TicketExperience() {
  return (
    <section
      id="ticket-experience"
      className="relative overflow-hidden px-6 py-24 sm:px-10"
      style={{ backgroundColor: "#FDFBF7" }}
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" />
      <svg
        aria-hidden
        className="pointer-events-none absolute left-6 top-10 hidden h-32 w-32 text-gold/30 md:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M20 80 Q40 30 80 20" />
        <path d="M30 70 Q35 55 50 50" />
        <path d="M50 50 Q65 45 70 30" />
      </svg>

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-muted-gold">
          Secure Your Spot
        </span>
        <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl">
          <span className="text-emerald">HealthWeek'26</span>
          <br />
          <span className="italic text-gold">Ticket Experience</span>
        </h2>
        <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="mx-auto mt-6 max-w-xl font-body text-base text-body-muted">
          Choose the experience that fits you best. Every ticket unlocks a week of
          learning, leadership and healing.
        </p>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
        {tickets.map((t, i) => (
          <div
            key={t.name}
            className={`group animate-fade-in-up relative overflow-hidden rounded-[2rem] ${t.border} border bg-white/70 p-8 shadow-[0_25px_70px_-25px_rgba(13,91,62,0.35)] backdrop-blur transition-all duration-500 hover:-translate-y-16 hover:shadow-[0_40px_90px_-20px_rgba(13,91,62,0.5)]`}
            style={{ animationDelay: `${0.2 + i * 0.2}s` }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-dark-emerald to-emerald opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-gold bg-cream px-4 py-1 font-body text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-gold">
                {t.badge}
              </span>
              <h3 className="mt-5 font-display text-3xl text-emerald transition-colors duration-500 group-hover:text-white">
                {t.name}
              </h3>
              <div className="mt-2 font-display text-5xl text-gold">{t.price}</div>
              {t.subLabel && (
                <div className="mt-1 font-body text-xs text-gold">{t.subLabel}</div>
              )}
              <div className="mt-5 flex items-center gap-3 text-gold">
                <span className="h-px flex-1 bg-gold/50" />
                <span>✦</span>
                <span className="h-px flex-1 bg-gold/50" />
              </div>
              <p className="mt-5 font-body text-sm leading-relaxed text-body-muted transition-colors duration-500 group-hover:text-white/90">
                {t.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 font-body text-sm text-body-dark transition-colors duration-500 group-hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block w-full rounded-full bg-gradient-to-r from-dark-emerald to-emerald py-3 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-300 group-hover:bg-gold group-hover:from-gold group-hover:to-gold group-hover:text-dark-emerald"
              >
                Get Ticket
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom banner */}
      <div className="relative mx-auto mt-24 max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-dark-emerald via-emerald to-dark-emerald p-10 shadow-[0_30px_80px_-20px_rgba(1,50,32,0.5)] md:flex md:items-center md:justify-between md:gap-10">
        <div className="pointer-events-none absolute -top-16 -right-10 h-60 w-60 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-gold/15" />
        <div className="relative">
          <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold">
            FUTAMSA HealthWeek'26
          </span>
          <h3 className="mt-2 font-display text-4xl text-white md:text-5xl">
            Learn. Lead. Heal.
          </h3>
          <p className="mt-3 max-w-md font-body text-sm text-white/80">
            Join hundreds of medical students for a week-long emergence of ideas,
            service and celebration.
          </p>
        </div>
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-6 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-dark-emerald transition-transform duration-300 hover:scale-105 md:mt-0"
        >
          Reserve Your Seat →
        </a>
      </div>
    </section>
  );
}
