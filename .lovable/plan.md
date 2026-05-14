# FUTAMSA HealthWeek '26 — Build Plan

A mobile-first single-page React site built with TanStack Start + Tailwind CSS, matching the supplied design system (emerald/gold/cream) and hero reference.

## Scope
Single route at `/` containing 5 stacked sections. No additional pages, no backend, no extra features beyond the spec.

## Files to create / modify

1. **`index.html`** — add Google Fonts `<link>` for Playfair Display (400–800 + italic) and Lato (300/400/500/700).
2. **`src/styles.css`** — add:
   - Brand color CSS variables (emerald, dark-emerald, light-emerald, gold, light-gold, muted-gold, cream, body-dark, body-muted) registered under `@theme inline` so Tailwind utilities like `bg-emerald`, `text-gold` work.
   - Font family tokens (`--font-display: "Playfair Display"`, `--font-body: "Lato"`) → `font-display`, `font-body` utilities; set body default to Lato.
   - Keyframes + utilities: `fadeUp`, `fadeIn`, `fadeInUp`, `float` (6s), `shimmer` (5s), pulse for the concentric ring.
3. **`src/routes/index.tsx`** — replace placeholder; renders the 5 sections in order.
4. **`src/components/site/`** — one component file per section for clarity:
   - `Navbar.tsx` (used inside Hero)
   - `Hero.tsx`
   - `EventSchedule.tsx`
   - `GlanceCarousel.tsx`
   - `TicketExperience.tsx`
   - `AwardNominations.tsx`
5. **`src/routes/__root.tsx`** — update `head()` meta: title "FUTAMSA HealthWeek '26 — The Renaissance", matching description and OG tags.

No new packages required (Tailwind + plain React + CSS keyframes cover everything).

## Section build notes

**Hero** — cream bg, two blurred glow blobs, dark-emerald gradient pill navbar with gold caduceus ⚕ + FUTAMSA/HealthWeek'26 wordmark + animated hamburger. Eyebrow row (gold line + "LEARN. LEAD. HEAL." + ❦), three-line Playfair stack with mixed emerald/gold coloring, centered ❤ divider, body copy, two stacked pill CTAs (emerald gradient primary, white/gold-border secondary). Floating ⚕ block with two concentric rings (one pulsing) + rotated leaf SVG, infinite float. Bottom dark-emerald `rounded-t-[50%]` shape with gold top border + dot grid overlay. Staggered fadeUp delays 0.8s→1.6s.

**Event Schedule** — `#F8F4EE` bg, two corner blobs, centered pill badge + "Event Schedule" heading (emerald + gold). Desktop: vertical center gradient line with alternating L/R cards + gold center dots. Mobile: full-width stack. Cards = white/80, gold border, gold glow shadow, shimmer sweep, radial dot bg, day-pill + gold time, title, description, "Explore Event →" gold pill. Six events exactly as listed. Bottom dark-emerald CTA banner with decorative ring outlines and two pill CTAs.

**FUTAMSA In A Glance** — `#F9F7F2` with faint emerald dot pattern. Two-column on `lg`, stacked on mobile. Left: eyebrow, "Moments That / Defined Impact." heading, body, "Explore Archive" pill + 3 dots. Right: horizontal snap-scroll carousel (`overflow-x-auto snap-x` with hidden scrollbar utility), 4 image cards (Unsplash URLs from spec), frosted year badge, gradient overlay, white title/desc, frosted arrow on `lg` hover, image scales to 110%. Below carousel: progress dots + "Swipe to explore". Bottom emerald gradient fade.

**Ticket Experience** — `#FDFBF7` with gold/emerald blobs + top-left leaf SVG (hidden mobile). Centered heading "Secure Your Spot" eyebrow, "HealthWeek'26 / Ticket Experience" Playfair stack, gradient divider, body. Three cards (Regular ₦5k / Couples ₦11k / VIP ₦7k) with badges (Most Popular/Best Value/Premium), Playfair name, gold price, ✦ ornament divider, description, 3 gold-dot bullets, dark-emerald "Get Ticket" pill. Hover: lift -4rem, gradient overlay, text recolors to white. fadeInUp stagger 0.2s. Bottom dark-emerald banner with decorative rings + "Reserve Your Seat →" gold pill.

**Award Nominations** — `#F8F5EF` with two blobs + 5%-opacity SVG leaf line pattern (two Bezier paths in `<pattern>`). Header: white pill with pulsing gold dot + "HEALTHWEEK AWARDS", "Award / Nominations" heading (second line emerald→gold→emerald `bg-clip-text`), gradient divider, body. Three vertically stacked cards (`max-w-md` centered) each with gradient icon box (✦ gold / ✚ emerald / ❖ emerald-gold), Featured badge, Playfair title, description, full-width gradient "Vote / Nominate" pill. fadeUp stagger 0.15s. Countdown row: "VOTING ENDS SOON" between gold lines, three white cards each showing `12` Playfair emerald + Days/Hours/Minutes label.

## Design system implementation

In `src/styles.css`:
```css
@theme inline {
  --color-emerald: #0D5B3E;
  --color-dark-emerald: #013220;
  --color-light-emerald: #2E7D59;
  --color-gold: #D4AF37;
  --color-light-gold: #F5E7B2;
  --color-muted-gold: #C89B2C;
  --color-cream: #F8F6F1;
  --color-body-dark: #31443A;
  --color-body-muted: #45675A;
  --font-display: "Playfair Display", serif;
  --font-body: "Lato", sans-serif;
}
```
All section components use these tokens via `bg-emerald`, `text-gold`, `font-display`, etc. — no hex literals scattered through JSX.

## Animations
All defined as CSS keyframes in `styles.css` and exposed as utility classes (`animate-fade-up`, `animate-float`, `animate-shimmer`, etc.) with inline `style={{ animationDelay }}` for stagger.

## Out of scope
No routing beyond `/`, no auth, no Lovable Cloud, no extra sections, no color/font/layout deviations from spec.
