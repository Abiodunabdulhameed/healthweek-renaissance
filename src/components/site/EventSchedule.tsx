const events = [
  {
    day: "Sunday",
    date: "May 25",
    time: "4:00 PM",
    title: "Awareness",
    desc: "A powerful awareness campaign focused on health education, advocacy and community engagement.",
    side: "left",
  },
  {
    day: "Tuesday",
    date: "May 27",
    time: "9:00 AM",
    title: "Symposium",
    desc: "Insightful discussions and keynote sessions exploring innovation, leadership and the future of healthcare.",
    side: "right",
  },
  {
    day: "Wednesday",
    date: "May 28",
    time: "4:00 PM",
    title: "Picnic",
    desc: "An evening of relaxation, bonding and memorable experiences with colleagues and friends.",
    side: "left",
  },
  {
    day: "Thursday",
    date: "May 29",
    time: "12:00 PM",
    title: "Sports Day",
    desc: "A vibrant showcase of teamwork, energy and healthy competition through exciting sporting activities.",
    side: "right",
  },
  {
    day: "Friday",
    date: "May 30",
    time: "9:00 AM",
    title: "Medical Outreach",
    desc: "Delivering compassionate healthcare services and awareness initiatives to the wider community.",
    side: "left",
  },
  {
    day: "Saturday",
    date: "May 31",
    time: "6:00 PM",
    title: "Dinner Night",
    desc: "A grand closing celebration filled with elegance, recognition, entertainment and unforgettable moments.",
    side: "right",
  },
] as const;

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-gold/40 bg-white/80 p-6 shadow-[0_20px_60px_-20px_rgba(212,175,55,0.4)] backdrop-blur transition-transform duration-300 hover:-translate-y-2">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(13,91,62,0.25) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="shimmer-overlay" />
      <div className="relative flex items-center justify-between">
        <span className="rounded-full bg-gradient-to-r from-dark-emerald to-emerald px-4 py-1.5 font-body text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream">
          {event.day} · {event.date}
        </span>
        <span className="font-body text-sm font-semibold text-gold">{event.time}</span>
      </div>
      <h3 className="relative mt-5 font-display text-3xl text-emerald">{event.title}</h3>
      <p className="relative mt-3 font-body text-sm leading-relaxed text-body-muted">
        {event.desc}
      </p>
      <button className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-gold/15 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-muted-gold transition-transform duration-300 hover:scale-105">
        Explore Event <span>→</span>
      </button>
    </div>
  );
}

export function EventSchedule() {
  return (
    <section
      id="schedule"
      className="relative overflow-hidden px-6 py-24 sm:px-10"
      style={{ backgroundColor: "#F8F4EE" }}
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-light-gold/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-light-emerald/20 blur-3xl" />

      {/* Header */}
      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/60 px-4 py-1.5 font-body text-[0.65rem] uppercase tracking-[0.25em] text-muted-gold backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          FUTAMSA HealthWeek '26
        </span>
        <h2 className="mt-5 font-display text-5xl leading-tight md:text-7xl">
          <span className="text-emerald">Event</span>
          <span className="text-gold"> Schedule</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/40 via-emerald/40 to-gold/40 md:block" />
        <div className="space-y-10">
          {events.map((event, idx) => (
            <div
              key={event.title}
              className={`relative md:flex md:items-center ${
                event.side === "left" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="md:w-[46%]">
                <EventCard event={event} />
              </div>
              <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold bg-cream md:block" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div className="relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-[36px] bg-gradient-to-br from-dark-emerald via-emerald to-dark-emerald p-10 text-center shadow-[0_30px_80px_-20px_rgba(1,50,32,0.5)]">
        <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-gold/10" />
        <div className="pointer-events-none absolute top-10 left-10 h-24 w-24 rounded-full border border-gold/15" />
        <h3 className="relative font-display text-4xl md:text-5xl">
          <span className="text-white">Join The</span>
          <span className="text-cream"> Renaissance</span>
        </h3>
        <p className="relative mx-auto mt-4 max-w-xl font-body text-sm text-white/75">
          Be part of a transformative week dedicated to learning, leading and healing.
          Reserve your spot in this year's defining event.
        </p>
        <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#tickets"
            className="rounded-full bg-gold px-8 py-3 font-body text-xs font-bold uppercase tracking-[0.18em] text-dark-emerald transition-transform duration-300 hover:scale-105"
          >
            Register Now
          </a>
          <a
            href="#schedule"
            className="rounded-full border border-white/60 px-8 py-3 font-body text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10"
          >
            View Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
