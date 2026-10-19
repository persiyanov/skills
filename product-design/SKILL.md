---
name: product-design
description: >
  The one skill for UI and UX work: designing or building screens, landing pages,
  dashboards, components, design systems, redesigns, visual polish, frontend/CSS styling,
  typography, color, spacing, motion, icons, accessibility, product copy, conversion, and
  anti-AI-slop. Research-first: every design is grounded in real references before
  implementation, synthesized into a reference lock and decision ledger, then built and
  checked against the lock. Use it whenever a task has a visual or product-design
  component, even when the user only says "make it look better", "polish", "landing
  page", "dashboard", "design system", or "why does this look AI-generated".
---

# Product Design

Design like a senior product designer: research real references, choose one direction and
keep its sharp traits, map every decision to a source, then build and verify against the
lock. Never design from vibe memory. The bundled references hold the craft; load only the
ones the task needs.

> Always ask: "If I showed this to 10 users tomorrow, what would they remember?"

## Non-Negotiables

- **Research before design.** Every design is grounded in references before implementation. Do not rely on generic design taste.
- **Do not copy one reference.** Study several strong references and synthesize a new direction for this product.
- **Do not average references into a safe middle.** When references conflict, choose one dominant direction and preserve its sharp traits. Secondary references add narrow details only.
- **Do not change token meanings.** If a reference uses a color, font, radius, shadow, gradient, or component for a specific role, use it only for that role or omit it.
- **Respect imagery roles.** If a direction depends on photography, illustration, product shots, or graphics, preserve the media role with real, generated, or stock assets, or an intentional placeholder with art direction. Never fake complex imagery with weak CSS, text, or decorative boxes.
- **Research output is specific.** Name the references, describe concrete choices, say what will be adapted.
- **Synthesize before implementation.** Turn research into a concept, token direction, and decision ledger before drawing or coding.
- **A brief is not a build target.** Lock a user-provided visual source, an existing product or design-system target, a selected mockup, or an approved reference-locked direction before building.
- **Image generation only when it changes the outcome.** Use it for visual exploration, mockups, imagery, textures, and hard assets. Skip it for small fixes, obvious production edits, or code-native UI.
- **Validate after building.** Compare the rendered implementation against the locked target before handoff and fix drift.

## Discovery

Form a short brief first. Ask only for missing information that would materially change the result; otherwise assume and proceed.

Clarify: what is being designed, platform (web, iOS, both), audience and technical level, primary user goal and success metric, desired feeling, the job the screen does ("help me decide", "convince me", "get me started"), objections to overcome ("is it worth it?", "is it legit?", "will it work?"), what users should remember, constraints (brand, framework, deadline, accessibility, content), and the path.

```text
Designing [WHAT] for [WHO] on [PLATFORM].
Goal: [PRIMARY USER GOAL].
Tone: [DESIRED FEELING].
Main objection/risk: [OBJECTION].
Must remember: [HOOK OR DISTINCTIVE IDEA].
Constraints: [CONSTRAINTS].
Research needed: [visual direction / product patterns / journey logic].
Path: [direct build / visual exploration / audit / asset generation].
```

## Workflow Routing

Choose the lightest workflow that produces a high-quality result.

- **Direct build:** small UI fixes, clear production edits, existing design-system work, or a concrete source to match. Research, lock the direction, then code.
- **Visual exploration:** variants, a new visual language, a major redesign, a landing page, or another high-visibility surface with several plausible directions. Default to three reference-locked options and ask the user to choose. See [references/visual-workflow.md](references/visual-workflow.md).
- **Audit:** capture screenshots of the current UI as evidence before critique.
- **Asset generation:** generated imagery only when the reference lock needs bitmap media that code, icons, or existing assets cannot provide. See [references/visual-workflow.md](references/visual-workflow.md).

## Research

Sources, in order of authority: references the user provides, the product's existing UI and design system, real products opened in a browser (competitors, best-in-class, known brands), and the bundled craft references. Research is understanding why choices work, not copying what everyone does. "Safe" usually means "forgettable".

Research three things. Use all that apply.

### Visual direction

Look at strong references from three to five angles: one broad aesthetic ("editorial monochrome SaaS", "premium fintech with restrained typography", "playful creator tool with vivid accents"), one domain or category, and one known brand or strong product when relevant. From each, extract:

- visual thesis and mood
- typography personality and type scale
- color roles and accent discipline
- spacing density and rhythm
- layout system, section rhythm, composition
- card, button, and surface treatments; borders, shadows, radius, elevation
- imagery, illustration, or product-screenshot treatment, and the media strategy behind it
- do/don't rules
- one memorable visual move to adapt

Be specific. "Linear: 13px/20px body, -0.01em tracking, 48px section gaps, #5E6AD2 accent at 8% opacity on hover", not "Linear: clean design".

### Product patterns

For a specific screen type, component, or state (pricing toggle, comparison table, dashboard empty state, cancellation modal, 2FA setup, data-table filters, destructive confirmation), study how real products solve it. Extract layout structure, information hierarchy, component choices, CTA patterns, copy patterns, states and edge cases, trust and conversion tactics.

### Journey logic

For anything multi-step (onboarding, signup, checkout, subscription changes, cancellation, deletion, password reset), study real flows. Extract entry and exit states, step count, decisions the user makes, friction reducers, required confirmations, save and recovery states, error handling, persuasion moments, and the system response at each step.

### Depth

| Task | Depth |
|------|-------|
| Quick visual improvement | 2-3 references, one short synthesis |
| Landing page, brand direction, major redesign | 3-5 angles, 3-4 strong references, screen research for key sections, a clear direction before code |
| Product workflow | references for visual language, screens for key states, flows for sequencing |
| High-stakes or ambiguous | several angles, unusual as well as strong references, tradeoffs written down before designing |

## Synthesis

Primary reference sets mood, density, and structure. Secondary references contribute one or two specific details each. User context adapts everything. Never the intersection of all references: if one is dark, one is acid, and one is serif, the answer is not warm cream plus muted orange plus polite serif.

Write the reference lock before implementation:

```text
Primary reference/direction: [one dominant source]
Preserve: [3-5 traits that must survive: canvas, type, accent, layout, density, media]
Borrow only: [1-2 specific secondary details]
Role rules: [source token/component meanings to preserve, e.g. CTA-only, code-only, decorative-only]
Media strategy: [real/generated/stock/code-native/placeholder, with aspect ratio and art direction]
Reject: [defaults/averages that would collapse the direction]
Token commitments: [background, type, accent, radius, border/shadow, imagery treatment, with roles]
```

Each source gets a bounded job: one may own canvas and type, another the code-window treatment, another the primary CTA. A token never leaves its source role. If the primary direction is image-led, do not collapse it to text-only; keep the slot with stable dimensions, alt text, and an art-direction note. If implementation drifts from the lock, stop and correct it rather than softening distinctive traits into safer colors, fonts, radius, or layouts.

For non-trivial tasks, give the user a short research summary before designing: references reviewed, visual direction with the traits to preserve and details borrowed, product patterns, journey decisions, and the recommendation. Then the decision ledger:

| Decision | Source | Source rule / role | Why |
|----------|--------|--------------------|-----|
| [palette/type/layout/media/content choice] | [reference / user constraint / craft rule] | [token/component/media role to preserve] | [specific rationale] |

A major choice with no source is not a design decision. Research more, tie it to a constraint, or remove it.

## Craft

Define tokens before implementation: type scale, colors, spacing, radius, shadows. Keep accessibility and responsive behavior in the design, not as a late pass. Full guides are in `references/`; the numbers below are the defaults to reach for.

### Typography

Scale ratio 1.2 (minor third), 6-8 sizes: Display 48-64px, H1 36-48, H2 24-32, Body 16-18, Small 13-14, Caption 11-12. Leading: large text tight (1.0-1.2), body loose (1.5-1.7). Line length 50-75 characters (`max-width: 65ch`). At most two fonts. `text-wrap: balance` on headings and short display text, `pretty` on prose only, never on nav, buttons, tables, or dense labels. Check breakpoints for orphan words.

| Text | Letter-spacing |
|------|----------------|
| Body 14-18px | `0` |
| Small 11-13px | `0.01-0.02em`, required |
| UI labels, buttons | `0.02em`, required |
| ALL CAPS | `0.06-0.1em`, always |
| Headings 32px+ | `-0.01` to `-0.02em` |
| Display 48px+ | `-0.02` to `-0.03em` |

### Color

Four layers: neutrals 70-90%, one primary accent 5-10%, semantic (success, warning, danger), effects rarely. Primary has a 50-950 scale: 600 default, 700 hover, 800 active. Contrast 4.5:1 body, 3:1 large text. Dark theme is not an inversion: background `#0f0f0f` not `#000`, text `#f0f0f0` not `#fff`, its own neutral scale. Name tokens by purpose (`--primary`), not hue. No indigo or violet unless the brand requires it.

### Spacing

Base unit 4px or 8px; everything multiplies from it (4, 8, 12, 16, 24, 32, 48, 64, 96). Proximity is relationship: closer means connected. Density follows context: dashboards 8-12px padding, product UI 16-24, marketing 24-32. On mobile, structural spacing scales down 0.5-0.75x; internal component spacing stays fixed.

### Motion

Motion gives feedback (it worked), continuity (where it went), or hierarchy (look here). If it does none, remove it. Instant (hover, press, toggle) 90-150ms; state change (accordion, tabs) 160-240ms; large transition (modal, drawer) 240-360ms. Enter ease-out, exit ease-in, change ease-in-out. `prefers-reduced-motion` always. Nothing over 500ms in product UI. Never `transition: all`.

### Icons

One style per product, outline or solid, one library. Geometric center is not visual center: arrows and chevrons shift 0.5-1px. `currentColor` by default, semantic color only for status. Action icons get `aria-label`, hit area 44x44px minimum. Lucide for SaaS, Heroicons with Tailwind, Material Symbols, SF Symbols on Apple.

### Copy and persuasion

Real product evidence drives copy, trust signals, objection handling, and section order. Fill this before writing code for any surface that has to convince:

| Element | Answer |
|---------|--------|
| Hook (first 3 seconds) | Hero headline plus visual |
| Story arc | Problem, solution, proof, action |
| Objection killers | 1. 2. 3. |
| Trust signals | Social proof, guarantee, security, specifics (two or more) |
| Urgency or scarcity | Or "N/A" |
| The memorable thing | What will they screenshot? |

If the table cannot be filled, the work is decoration, not persuasion. Full guide: [references/copywriting.md](references/copywriting.md).

### Soul

About 80% proven patterns, 20% unique choices: one bold visual move (color, type treatment, illustration style), voice in the copy, a micro-interaction that surprises, one detail users remember. Test: "If someone screenshots this, would they know it is from this product?"

### Avoiding AI slop

The tells, in order: indigo/violet, cards everywhere, dark mode by default, calm editorial serif on autopilot (a display or italic word swap in a heading, ivory canvas, olive or terracotta palette), emoji as icons, left accent stripes, reference averaging, token role drift, fake graphics or text-only collapse. Do not default to hero, features grid, pricing, FAQ, CTA; ask what this product needs added, removed, or reordered. Full guide with litmus tests: [references/anti-ai-slop.md](references/anti-ai-slop.md).

## Quality Gate

Before delivery, every answer is yes:

| Category | Check |
|----------|-------|
| Research | Several references studied, none copied, none averaged into a centroid? Every major choice traceable to a reference, constraint, or craft rule, and written in the ledger? |
| Lock | Primary reference's signature traits preserved? Token and component roles kept, not repurposed? Imagery roles honored with real assets, honest primitives, or intentional placeholders? |
| Functional | Primary action obvious? Error and empty states? Works on mobile? |
| Visual | Squint test passes? Spacing rhythm? Typography intentional? No orphaned words? Icons aligned? |
| Persuasion | Hook in 3 seconds? Two or more trust signals? Objections addressed? |
| Slop | No AI defaults? No decorative serif or italic word swaps without a reason? Fits this product, audience, and constraints? |

For substantial visual work, run the visual QA pass in [references/visual-workflow.md](references/visual-workflow.md): source truth, implementation evidence, viewport and state, issues by severity P0-P3. Do not hand off with unresolved P0-P2 unless blocked, and say what is blocking.

## Reference Files

| Guide | What's inside |
|-------|---------------|
| [typography.md](references/typography.md) | Scale, pairing, weight, line-height, letter-spacing, text-wrap, responsive type, tokens |
| [color.md](references/color.md) | Palette structure, neutrals, primary and semantic colors, dark theme, OKLCH, tokens, the indigo rule |
| [spacing.md](references/spacing.md) | Spacing scale, component patterns, density, proximity, responsive adjustments |
| [motion.md](references/motion.md) | Micro-interactions, timing, easing, reduced motion, animation tokens |
| [icons.md](references/icons.md) | Grid, optical corrections, accessibility, icon and text pairing, libraries |
| [craft-details.md](references/craft-details.md) | Focus states, forms, images, touch, performance, accessibility, navigation |
| [copywriting.md](references/copywriting.md) | Copy order, living words, microcopy, hero sections, proof over hype, product UI copy, banned words |
| [anti-ai-slop.md](references/anti-ai-slop.md) | The nine tells, litmus tests, safe vs intentional |
| [visual-workflow.md](references/visual-workflow.md) | Image generation, three visual directions, visual target gate, generated assets, visual QA |
