interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const items = [
  { label: "Hero", id: "hero" },
  { label: "Event Schedule", id: "event-schedule" },
  { label: "Ticket Experience", id: "ticket-experience" },
  { label: "Award Nominations", id: "award-nominations" },
  { label: "FUTAMSA In A Glance", id: "glance" },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-emerald/40 px-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-gold/20 shadow-[0_40px_100px_-20px_rgba(1,50,32,0.6)]"
        style={{ backgroundColor: "#F8F6F1" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #0D5B3E, transparent 60%)",
          }}
        />

        {/* Header */}
        <div
          className="relative overflow-hidden rounded-b-[2.5rem] pb-16 pt-6"
          style={{
            background:
              "linear-gradient(135deg,#0D5B3E,#063C2A,#021D14)",
          }}
        >
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative px-6">
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-white/5 backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white/10"
            >
              <span className="relative block h-4 w-4">
                <span className="absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold" />
                <span className="absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gold" />
              </span>
            </button>
          </div>

          {/* Cream elliptical clip curve */}
          <div
            className="absolute -bottom-1 left-0 right-0 h-10"
            style={{
              backgroundColor: "#F8F6F1",
              clipPath: "ellipse(70% 100% at 50% 100%)",
            }}
          />
        </div>

        {/* Body */}
        <div className="relative px-6 pb-6 pt-10" style={{ backgroundColor: "#F8F6F1" }}>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/40" />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-gold">
              Navigation
            </span>
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <ul className="mt-8 flex flex-col gap-3">
            {items.map((it, i) => (
              <li key={it.id} style={{ opacity: 0, animation: `fadeSlideUp 0.5s ease-out ${i * 0.08}s forwards` }}>
                <button
                  onClick={() => handleNav(it.id)}
                  className="menu-item group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-emerald/10 bg-white/70 px-5 py-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-[0_15px_40px_-15px_rgba(13,91,62,0.35)]"
                >
                  <span
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-0 transition-all duration-500 group-hover:h-full"
                    style={{
                      background:
                        "linear-gradient(180deg,#0D5B3E,#0A4D35,#0D5B3E)",
                    }}
                  />
                  <span className="relative flex items-center gap-4">
                    <span className="font-display text-base text-emerald transition-colors duration-300 group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-emerald transition-colors duration-300 group-hover:text-white" style={{ fontSize: "1.2rem" }}>
                      {it.label}
                    </span>
                  </span>
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-muted-gold transition-all duration-300 group-hover:translate-x-1 group-hover:border-white group-hover:text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom accent strip */}
        <div
          className="relative h-16"
          style={{
            background:
              "linear-gradient(90deg,#063C2A,#0D5B3E,#021D14)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
