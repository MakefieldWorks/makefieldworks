# Makefield Works

A one-person software workshop.

Makefield Works is the **parent brand** that shelters four independent, local-first planning tools. Each product keeps its own name, domain, and identity; Makefield is the quiet endorsement in the footer ("a Makefield Works project") and the shared design DNA underneath.

## The family

| # | Product | Domain | Audience | Status |
|---|---------|--------|----------|--------|
| 01 | **FERSCalc** | ferscalc.com | Federal employees planning retirement under FERS | Public beta |
| 02 | **Visual Passage Planner 3 (VPP3)** | digwave.com | Offshore sailors planning ocean voyages | Desktop, v3 alpha |
| 03 | **Manifest** | github.com/rgehrsitz/Manifest | Developers managing structured projects | Open-source beta |
| 04 | **The Grunting Gardener** | thegruntinggardener.com | Home gardeners | Planned |

## Brand architecture

**Family resemblance**, not monolithic. Each product has:

- Its own **name and wordmark** (no "Makefield Calc" / "Makefield Plan").
- Its own **primary accent color** (see `colors_and_type.css` → `--mw-product-*`).
- The **shared design DNA**: Inter + Lora type, slate neutrals, brand-blue scale, emerald trust accent, generous whitespace, no-account / local-first posture.
- A small footer endorsement: *a Makefield Works project*.

The parent marketing site (**makefieldworks.com**) is the index — a quiet, editorial page that points visitors to each product. It does **not** compete for attention; the products are the destination.

## Why "Makefield Works"

- **Placeless but grounded.** "Makefield" is a real place (Lower Makefield, PA), but to most readers it reads as a workshop name. It stretches to sailing, retirement, gardening, dev tools without pulling toward any of them.
- **"Works"** signals a workshop — one person, multiple things, careful output. It also lets each product keep its noun ("FERSCalc", not "Makefield Retire").
- **No marine / financial / tech lock-in.** Unlike "Digital Wave," the name doesn't pre-commit the family to a category.

## Voice & tone

- **Warm and personal** — "built by someone who uses it."
- **Measured and precise** — "grounded," "clearer picture," never "revolutionary."
- **Plain-spoken** — no hype, no emoji, no exclamation marks, no growth-marketing tropes.
- Technical when the content warrants it, never jargon for its own sake.

Borrowed directly from FERSCalc's existing voice — this is the one thing that already works and should not be disrupted.

## Visual DNA (shared across all products)

Pulled from FERSCalc's `src/app.css` so adoption cost is zero for the anchor product:

- **Type:** Inter (sans, UI & body), Lora (serif, display), JetBrains Mono (metadata, code, labels)
- **Neutrals:** Tailwind slate 50 → 950
- **Brand scale:** deep blue 50 → 950, anchored at brand-700 (`#1d4ed8`) and brand-900 (`#1e3a5f`)
- **Accents:** emerald (trust / no-account), amber (caution), rose (warning)
- **Dark mode:** `html.dark` class toggle (matches FERSCalc's strategy)
- **Core shapes:** radius 12–28px on cards, pill buttons, thin rules
- **Grid:** `max-w-7xl` (1280px) page container, 24–32px gutters

See [`colors_and_type.css`](./colors_and_type.css) for the full token set.

## What's in this project

| File | Purpose |
|---|---|
| [`colors_and_type.css`](./colors_and_type.css) | Canonical design tokens — all products reference these |
| [`index.html`](./index.html) | Design-system landing page (cards linking to specimens & kit) |
| [`type.html`](./type.html) | Type specimen & scale |
| [`color.html`](./color.html) | Palette + usage rules |
| [`tokens.html`](./tokens.html) | Spacing, radii, shadow tokens |
| [`makefieldworks.html`](./makefieldworks.html) | Parent-brand marketing site template |
| [`directions.html`](./directions.html) | Original three-direction picker (history) |
| [`SKILL.md`](./SKILL.md) | Instructions for future AI-assisted design work |

## Applying the system to a new product

Start here:

1. **Import `colors_and_type.css`** into the product's global stylesheet.
2. **Pick a product accent** from `--mw-product-*` or from the brand scale.
3. **Use Inter for everything UI**; reach for Lora only on marketing display; mono for metadata kickers and numeric readouts.
4. **Add the footer endorsement**: `<footer>… <small>a Makefield Works project</small> …</footer>`.
5. **Read `SKILL.md`** before asking an AI to design anything new.

## Not in scope

- Product icons / full logo system — pending uploads from @rgehrsitz.
- Illustrations / iconography — deferred to first real product need.
- Marketing email templates — deferred.
