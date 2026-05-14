export function Navbar() {
  return (
    <nav className="mx-4 mt-4 flex items-center justify-between rounded-[2rem] bg-gradient-to-r from-dark-emerald to-emerald px-5 py-4 shadow-[0_10px_40px_-10px_rgba(1,50,32,0.4)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-dark-emerald/40">
          <span className="text-xl text-gold leading-none">⚕</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-display text-base text-white tracking-wide">FUTAMSA</span>
          <span className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-gold">
            HealthWeek'26
          </span>
        </div>
      </div>
      <button
        aria-label="Open menu"
        className="group flex h-10 w-10 flex-col items-end justify-center gap-[5px] rounded-full"
      >
        <span className="block h-[2px] w-7 bg-gold transition-all duration-300 group-hover:w-5" />
        <span className="block h-[2px] w-5 bg-gold transition-all duration-300 group-hover:w-7" />
        <span className="block h-[2px] w-7 bg-gold transition-all duration-300 group-hover:w-4" />
      </button>
    </nav>
  );
}
