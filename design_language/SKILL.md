# SKILL.md — Designing for Makefield Works

*Read this before you design anything new for Makefield Works or any of its products.*

---

## 1. What you're working on

You're designing for **Makefield Works** — a one-person software workshop that ships a small family of local-first planning tools. You are almost certainly designing one of:

- **The parent site** (`makefieldworks.com`) — an editorial index. Not a landing page.
- **FERSCalc** — federal retirement calculator. Highest-polish product, voice benchmark.
- **Visual Passage Planner 3 (VPP3)** — offshore sailing software.
- **Manifest** — dev-tool project snapshots.
- **The Grunting Gardener** — home gardening planner (future).

Each product keeps its own identity. Makefield is the *quiet* endorsement, not the headline.

## 2. Read these first (in order)

1. `README.md` — architecture and the why.
2. `colors_and_type.css` — canonical tokens. Everything else is derived from here.
3. `type.html`, `color.html`, `tokens.html` — the foundation cards, with usage rules.
4. `makefieldworks.html` — the reference implementation of the parent voice.

If you start designing before reading these, you will invent tokens that already exist.

## 3. Voice — the one thing you must not break

Every Makefield product writes like one thoughtful person explaining something carefully to another adult.

**Do:**
- "A local-first FERS retirement income calculator."
- "Built by a federal employee, for federal employees."
- "Your data stays in your browser."
- "Takes about 10 minutes."

**Don't:**
- "Revolutionize your retirement!" — hype.
- "Unleash your financial future" — cringe.
- "🎉 Welcome to FERSCalc 🎉" — emoji (not part of the brand).
- "The #1 FERS calculator" — superlatives / unearned claims.
- Exclamation marks, ever.

If a line sounds like a SaaS growth-team wrote it, rewrite it.

## 4. Visual DNA — the shared rules

**Type**

- **Inter** for ~95% of typography (UI, body, forms, tables, cards).
- **Lora** for display moments only — hero headlines, pull-quotes, occasional feature titles.
- **JetBrains Mono** for kickers (uppercase, tracking `0.18em`), numeric readouts, and code. Never body.
- Display weights max out at 500 (medium). Bold is for emphasis inside body, not for headlines.
- Display tracking: `-0.02em`. Leading: `1.05–1.15`.

**Color**

- Slate is the default for *everything*. If a surface can be slate, it should be.
- `brand-700` (`#1d4ed8`) for interactive elements, `brand-900` (`#1e3a5f`) for marks and italic accents.
- Emerald = trust (free / no-account / positive deltas). Amber = caution. Rose = warning / destructive only.
- Each product gets **one** accent from `--mw-product-*`. Used on wordmark dot, active nav, one-off moments — not every button.
- **No gradients.** Anywhere. One color per surface.
- Parent-brand "paper" (`#fafaf7`) is ONLY for `makefieldworks.com` and the design-system docs. Products stay on white or slate-950.

**Shape & spacing**

- 4px base spacing scale. No 7px / 13px one-offs.
- Radius vocabulary: `sm 4` · `md 8` · `lg 12 (default cards)` · `xl 20 (marketing)` · `2xl 28 (hero)` · `pill 999`.
- Prefer `border-1 + var(--mw-rule)` over shadows. Shadows are reserved.
- Dark mode via `html.dark` class toggle. Mirror FERSCalc's strategy.

**Layout**

- Page container max-width: 1200px (marketing) or 1280px (app surfaces).
- Generous whitespace. When in doubt, more padding.
- Grids are visible on the parent site; subtle or invisible inside products.

## 5. Do's and don'ts

**Do**
- Use tokens. Every new CSS file starts with `@import url('colors_and_type.css');` or Tailwind `@theme` mapped to the same vars.
- Add the footer endorsement on every product: `a Makefield Works project`.
- Use real copy from the FERSCalc site as your voice reference when writing new product copy.
- Show mono kickers above section titles — it's a signature pattern.
- When you add a new product accent, use an existing hue scale from the tokens. Don't introduce a new family.

**Don't**
- Don't write `.btn-primary { background: #1d4ed8; }` — use `var(--mw-brand-700)`.
- Don't invent new radii (no `border-radius: 10px`). Pick from the scale.
- Don't use two display faces on one page. Pick Inter or Lora for the headline — not both.
- Don't stack accent colors. One meaningful color moment per surface.
- Don't add icons, illustrations, or emoji unless they earn their place.
- Don't design a "features" section for a product unless the product actually has distinct features worth listing. One strong block beats four weak ones.

## 6. When the brief is ambiguous

Ask these questions before building:

1. Which product is this for — FERSCalc, VPP3, Manifest, Gardener, or the parent?
2. Is it an in-app screen, a marketing page, or documentation?
3. What's the one thing this surface must communicate? (If there are three, the design is wrong.)
4. Is there real copy, or should I hold with voice-appropriate placeholders?
5. What's the audience's expertise level? (FERS users ≠ VPP users ≠ dev-tool users.)

## 7. When you add a new product

1. Name it with its own noun. Not "Makefield X."
2. Give it one accent color from the existing scales.
3. Footer endorsement: `a Makefield Works project`.
4. Import `colors_and_type.css`. Don't redeclare tokens.
5. Voice test: does it sound like FERSCalc? If not, revise.

## 8. Last thing

When in doubt, make it quieter. Makefield's whole premise is restraint — local-first, no accounts, no hype. The design should match.
