import { useEffect, useState } from "react";

type EventItem = {
  day: string;
  date: string;
  time: string;
  title: string;
  desc: string;
  side: "left" | "right";
  venue: string;
  activities: string[];
};

const events: EventItem[] = [
  {
    day: "Sunday",
    date: "July 19",
    time: "4:00 PM",
    title: "Awareness Rally and Bonfire",
    desc: "A powerful public awareness about the Health Week and increase FUTAMSA's visibility within the university.",
    side: "left",
    venue: "FUTA Campus",
    activities: [
      "Awareness walk around strategic campus locations",
      "Health Week Publicity and announcements",
      "Bonfire gathering",
      "Games and Interactive activities",
      "Light refreshments",
      "Networking and Social engagements",
      "Media coverage and content creation",
    ],
  },
  {
    day: "Monday",
    date: "July 20",
    time: "9:00 AM",
    title: "Medical Outreach: Timeless Illnesses, Timely Action",
    desc: "A community-based intervention aimed at addressing common and timeless health challenges.",
    side: "right",
    venue: "Oja Oba, Akure",
    activities: [
      "Blood Pressure screening",
      "Blood Glucose screening",
      "Visual Acuity Test",
      "Body Mass Index (BMI) Assessment",
      "Health Education and Public sensitization",
      "Medical Consultation and referral",
      "Distribution of oral care kit",
    ],
  },
  {
    day: "Tuesday",
    date: "July 21",
    time: "4:00 PM",
    title: "Symposium, Quiz and Debate",
    desc: "Platform to discuss the impact of innovation and health policy on modern medical practices.",
    side: "left",
    venue: "T.I Francis Hall, FUTA",
    activities: [
      "Panel Discussion Session",
      "Quiz Competition",
      "Debate Competition",
      "Keynote Address",
    ],
  },
  {
    day: "Wednesday",
    date: "July 22",
    time: "12:00 PM",
    title: "Picnic",
    desc: "An opportunity for relaxation, and social bonding across different classes and levels.",
    side: "right",
    venue: "Open field along T.I Francis road",
    activities: [
      "Tug of war",
      "Freeze Dance",
      "Complete the lyrics / Guess the artist",
      "Mental Health advocacy session",
      "Scavenger Hunt",
      "Games and Social activities",
    ],
  },
  {
    day: "Thursday",
    date: "July 23",
    time: "9:00 AM",
    title: "Sports Day",
    desc: "An opportunity for members to participate in physical activities that encourage healthy lifestyles and strengthen social bonds.",
    side: "left",
    venue: "FUTA Sport Complex",
    activities: [
      "Volleyball competition",
      "Football competition",
      "Chess",
      "Scrabbles",
      "Ludo",
      "Whot",
    ],
  },
  {
    day: "Friday",
    date: "July 24",
    time: "6:00 PM",
    title: "Dinner and Awards Night",
    desc: "A celebration of excellence, and recognition of contributions within the association and the conclusion of Health Week activities.",
    side: "right",
    venue: "FUTA Multipurpose Hall",
    activities: [
      "Reception and Red Carpet",
      "Games and Competition",
      "Awards and Recognition",
      "Raffle Draw",
      "Entertainment",
      "Photo Booth",
      "Dinner Service",
    ],
  },
];

function EventCard({ event, onOpen }: { event: EventItem; onOpen: () => void }) {
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
      <button
        onClick={onOpen}
        className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-gold/15 px-5 py-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-muted-gold transition-transform duration-300 hover:scale-105"
      >
        Explore Event <span>→</span>
      </button>
    </div>
  );
}

function EventModal({ event, onClose }: { event: EventItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-6 animate-fade-in"
      style={{ backgroundColor: "rgba(1,50,32,0.6)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-white/95 p-8 shadow-[0_30px_80px_-20px_rgba(212,175,55,0.45)]"
        style={{ animation: "modalIn 0.35s ease-out forwards" }}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold transition-transform duration-300 hover:rotate-90"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-muted-gold">
          {event.day} · {event.date} · {event.time}
        </span>
        <h3 className="mt-3 pr-10 font-display text-3xl text-emerald">{event.title}</h3>

        <div className="mt-5">
          <div className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-muted-gold">
            Venue
          </div>
          <div className="mt-1 font-body text-base text-emerald">{event.venue}</div>
        </div>

        <div className="mx-auto my-6 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

        <h4 className="font-display text-xl font-semibold text-emerald">Activities</h4>
        <ul className="mt-3 space-y-2">
          {event.activities.map((a) => (
            <li key={a} className="flex items-start gap-3 font-body text-sm text-body-muted">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export function EventSchedule() {
  const [active, setActive] = useState<EventItem | null>(null);

  return (
    <section
      id="event-schedule"
      className="relative overflow-hidden px-6 py-24 sm:px-10"
      style={{ backgroundColor: "#F8F4EE" }}
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-light-gold/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-light-emerald/20 blur-3xl" />

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

      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/40 via-emerald/40 to-gold/40 md:block" />
        <div className="space-y-10">
          {events.map((event) => (
            <div
              key={event.title}
              className={`relative md:flex md:items-center ${
                event.side === "left" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="md:w-[46%]">
                <EventCard event={event} onOpen={() => setActive(event)} />
              </div>
              <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold bg-cream md:block" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-[36px] bg-gradient-to-br from-dark-emerald via-emerald to-dark-emerald p-10 text-center shadow-[0_30px_80px_-20px_rgba(1,50,32,0.5)]">
        <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-gold/10" />
        <div className="pointer-events-none absolute top-10 left-10 h-24 w-24 rounded-full border border-gold/15" />
        <h3 className="relative font-display text-4xl md:text-5xl">
          <span className="text-white">Join The</span>
          <span className="text-cream"> Emergence</span>
        </h3>
        <p className="relative mx-auto mt-4 max-w-xl font-body text-sm text-white/75">
          Be part of a transformative week dedicated to learning, leading and healing.
          Reserve your spot in this year's defining event.
        </p>
        <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#ticket-experience"
            className="rounded-full bg-gold px-8 py-3 font-body text-xs font-bold uppercase tracking-[0.18em] text-dark-emerald transition-transform duration-300 hover:scale-105"
          >
            Register Now
          </a>
          <a
            href="#event-schedule"
            className="rounded-full border border-white/60 px-8 py-3 font-body text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10"
          >
            View Full Schedule
          </a>
        </div>
      </div>

      {active && <EventModal event={active} onClose={() => setActive(null)} />}
    </section>
  );
}
