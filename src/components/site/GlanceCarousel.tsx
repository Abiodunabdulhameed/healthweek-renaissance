const gallery = [
  {
    title: "Health Outreach",
    year: "2024",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Medical Workshop",
    year: "2023",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Community Impact",
    year: "2022",
    img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Student Engagement",
    year: "2021",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
  },
];

export function GlanceCarousel() {
  return (
    <section
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
              FUTAMSA In A Glance
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            <span className="text-emerald">Moments That</span>
            <br />
            <span className="text-gold">Defined Impact.</span>
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-body-muted">
            From outreach campaigns to grand celebrations, every Health Week has left
            a lasting imprint on our community. Revisit the stories that shaped us.
          </p>
          <div className="mt-7 flex items-center gap-5">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-dark-emerald to-emerald px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-[0_15px_40px_-15px_rgba(1,50,32,0.5)]"
            >
              Explore Archive
            </a>
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
            {gallery.map((g) => (
              <article
                key={g.title}
                className="group relative min-w-[82%] snap-start overflow-hidden rounded-[2rem] border border-gold/40 bg-white shadow-[0_30px_70px_-30px_rgba(13,91,62,0.5)] sm:min-w-[65%] lg:min-w-[360px]"
              >
                <div className="relative h-[420px] overflow-hidden lg:h-[500px]">
                  <img
                    src={g.img}
                    alt={g.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-emerald/90 via-dark-emerald/30 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-body text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {g.year}
                  </span>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-2xl text-white">{g.title}</h3>
                    <p className="mt-1 font-body text-sm text-white/80">
                      A defining moment from FUTAMSA HealthWeek.
                    </p>
                  </div>
                  <span className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1 lg:flex">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between pr-6 sm:pr-10 lg:pr-0">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-gold" />
              <span className="h-1.5 w-3 rounded-full bg-emerald/30" />
              <span className="h-1.5 w-3 rounded-full bg-emerald/30" />
              <span className="h-1.5 w-3 rounded-full bg-emerald/30" />
            </div>
            <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-body-muted">
              Swipe to explore
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-emerald/10" />
    </section>
  );
}
