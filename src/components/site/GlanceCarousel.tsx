import { useState, useEffect, useCallback } from "react";
import img1 from "@/assets/glance/2025081812243833.jpg.asset.json";
import img2 from "@/assets/glance/2025081813172252.jpg.asset.json";
import img3 from "@/assets/glance/A88_8788.jpg.asset.json";
import img4 from "@/assets/glance/A88_8820.jpg.asset.json";
import img5 from "@/assets/glance/A88_8797.jpg.asset.json";
import img6 from "@/assets/glance/2025081812291519.jpg.asset.json";
import img7 from "@/assets/glance/IMG_5066.JPG.asset.json";
import img8 from "@/assets/glance/20250814_052647.jpg.asset.json";
import img9 from "@/assets/glance/20250814_052623.jpg.asset.json";
import img10 from "@/assets/glance/IMG_5062.JPG.asset.json";
import img11 from "@/assets/glance/A88_0245.jpg.asset.json";
import img12 from "@/assets/glance/A88_9933.jpg.asset.json";
import img13 from "@/assets/glance/A88_9913.jpg.asset.json";
import img14 from "@/assets/glance/A88_0055.jpg.asset.json";
import img15 from "@/assets/glance/A88_0029.jpg.asset.json";
import img16 from "@/assets/glance/A88_0020.jpg.asset.json";

const gallery = [
  img1.url,
  img2.url,
  img3.url,
  img4.url,
  img5.url,
  img6.url,
  img7.url,
  img8.url,
  img9.url,
  img10.url,
  img11.url,
  img12.url,
  img13.url,
  img14.url,
  img15.url,
  img16.url,
];

function ArchiveOverlay({ onClose }: { onClose: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    [],
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      } else if (lightbox !== null) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col animate-[fadeIn_400ms_ease]"
      style={{ backgroundColor: "rgba(1, 50, 32, 0.95)", backdropFilter: "blur(12px)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Header */}
      <div
        className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10"
        style={{ background: "linear-gradient(90deg, #013220, #0D5B3E)" }}
      >
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl text-gold">⚕</span>
          <div className="leading-tight">
            <div className="font-display text-base text-white sm:text-lg">
              FUTAMSA HealthWeek'25
            </div>
            <div className="font-body text-[0.6rem] uppercase tracking-[0.25em] text-gold">
              In A Glance
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:rotate-90 hover:bg-white/20"
        >
          <span className="relative block h-4 w-4">
            <span className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold" />
            <span className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gold" />
          </span>
        </button>
      </div>
      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Grid */}
      <div className="relative z-10 flex-1 overflow-y-auto px-4 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {gallery.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 text-left shadow-[0_30px_70px_-30px_rgba(13,91,62,0.7)] opacity-0"
              style={{
                animation: `fadeInUp 600ms ease forwards`,
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <div className="relative h-[320px] overflow-hidden sm:h-[380px]">
                <img
                  src={src}
                  alt={`HealthWeek '25 moment ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-emerald/90 via-dark-emerald/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-body text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  2025
                </span>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="mb-2 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
                  <h3 className="font-display text-2xl text-white">HealthWeek '25</h3>
                  <p className="mt-1 font-body text-sm text-white/80">
                    Celebrating growth, reflection, service and new horizons.
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)", animation: "fadeIn 300ms ease" }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={gallery[lightbox]}
            alt={`HealthWeek '25 moment ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl object-contain"
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              animation: "scaleIn 300ms ease",
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            aria-label="Close image"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:rotate-90 hover:bg-white/20"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold" />
              <span className="absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gold" />
            </span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-white/10 text-gold backdrop-blur-sm transition hover:bg-white/20 sm:left-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-white/10 text-gold backdrop-blur-sm transition hover:bg-white/20 sm:right-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export function GlanceCarousel() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="glance"
      className="relative overflow-hidden px-6 py-24 sm:px-10"
      style={{ backgroundColor: "#F9F7F2" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0d5b3e 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-muted-gold">
              FUTAMSA HealthWeek'25 In A Glance
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            <span className="text-emerald">FUTAMSA HealthWeek'25</span>
            <br />
            <span className="text-gold">In A Glance.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-body-muted">
            From outreach campaigns to grand celebrations, every Health Week has left
            a lasting imprint on our community. Revisit the stories that shaped us.
          </p>
          <div className="mt-7 flex items-center gap-5">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full bg-gradient-to-r from-dark-emerald to-emerald px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-[0_15px_40px_-15px_rgba(1,50,32,0.5)] transition hover:opacity-90"
            >
              Explore Archive
            </button>
            <div className="flex items-center gap-2">
              <span className="h-2 w-6 rounded-full bg-gold" />
              <span className="h-2 w-2 rounded-full bg-emerald/30" />
              <span className="h-2 w-2 rounded-full bg-emerald/30" />
            </div>
          </div>
        </div>

        {/* Right carousel */}
        <div className="-mr-6 sm:-mr-10 lg:mr-0">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pr-6 sm:pr-10 lg:pr-0">
            {gallery.map((src, i) => (
              <article
                key={i}
                className="group relative min-w-[82%] snap-start overflow-hidden rounded-[2rem] border border-gold/40 bg-white shadow-[0_30px_70px_-30px_rgba(13,91,62,0.5)] sm:min-w-[65%] lg:min-w-[360px]"
              >
                <div className="relative h-[420px] overflow-hidden lg:h-[500px]">
                  <img
                    src={src}
                    alt={`HealthWeek '25 moment ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-emerald/90 via-dark-emerald/30 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-body text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    2025
                  </span>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-2xl text-white">HealthWeek '25</h3>
                    <p className="mt-1 font-body text-sm text-white/80">
                      Celebrating growth, reflection, service and new horizons.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between pr-6 sm:pr-10 lg:pr-0">
            <div className="flex flex-wrap items-center gap-1.5">
              {gallery.map((_, i) => (
                <span
                  key={i}
                  className={
                    i === 0
                      ? "h-1.5 w-8 rounded-full bg-gold"
                      : "h-1.5 w-3 rounded-full bg-emerald/30"
                  }
                />
              ))}
            </div>
            <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-body-muted">
              Swipe to explore
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-emerald/10" />

      {open && <ArchiveOverlay onClose={() => setOpen(false)} />}
    </section>
  );
}
