---
name: design-review
description: Judge a UI or a design with fresh eyes, cell by cell, and never change it. It returns gaps with proof, worst first. Works on a Paper design, a running UI or a build. Use when the user says "review this", "design review", "UX review", "audit", "what's wrong with", "second opinion" or "check the build". To have the gaps fixed, use /designing.
argument-hint: "<target> [levels] [layers] [guides]"
---

# Design review

Find where a design falls short, and prove it. Don't edit the design. Fixing it is /designing's job.

You need fresh eyes, so run as a new session or a new subagent that had no part in making the design. design-knowledge's `SKILL.md` defines cells, levels and layers.

## Set up

- **Target and cells:** what the user named, in every state and every place it appears, and its cells. For the whole product, review a sample: every page of each main journey, one page of each kind, the most-visited pages, and a few at random (W3C, WCAG-EM 2.0).
- **Input:** the Paper frames while the design is on Paper. Otherwise a running app (a URL or a branch, a login for each role, a way to reach each state) or a build. Code alone won't show you what people see, so if you have none of these, ask.
- **Standards:** `standards.md` from whoever called you, or write it now. "Product standards" in design-knowledge says what goes in it.
- **Folder:** one outside the repo for screenshots and notes. Capture each state of a running app once, at each width, with its DOM. Go back to the app only to use or measure something.

## Review a cell

List the cell's parts and rules, as design-knowledge describes. Then check:

- **Purpose.** Ask what each part is for before you ask how it works. Walk through it as each person in `standards.md`, with their real case, starting where they start. At each step, will they know what to do, notice the control, connect it with their goal, and see that it worked (Wharton et al., 1994)? Note anything they came for and can't find. A part that exists only because it was there before is a gap.
- **States.** Use it, or find the frame, in every state: empty, loading, partial, error, no access, each role, one item and ten times the real number, 360 and 1440 px wide, each theme, and the worst data each field allows (Emil Kowalski, "break-ui"). Click twice during a save, press Back, and reload halfway through a change.
- **Look.** Blur the screen and list what stands out, in order. The first thing should be what the job needs first. Count competing sizes and colors with design-knowledge's `scripts/style-inventory.js`, and check alignment with this skill's `scripts/layout-overlay.js`.
- **Rules.** Read each of the cell's rules in full and run its Check on every part it applies to. Stop when you've checked every rule, not when you run out of ideas (Moran and Gordon, NN/g, 2023).
- **Consistency.** Compare names, components, tokens, type, icons, placement and behavior with the parts that do the same job on two or three similar pages. A difference with no reason in `standards.md` is a gap.
- **Best products.** Put the same part from each best product in `standards.md` next to ours, at the same size, and measure its values on its own page. Use the product yourself if you can, because screenshots don't show how it feels.
- **Assumptions.** List what the design takes for granted, including decisions already made, and ask how much better it could be without each one. Why do people need this step at all, for example (Interface Craft, "Conceptual Range")?

**Proof.** Every gap needs proof: a step you reproduced where the person gets stuck, a measurement from the DOM or from Paper (never from a screenshot), or a rule you read in full, with its "Applies when" and "Pass". Count, don't judge: "four background colors", not "too many". Name the element and quote its text. If standards conflict, follow design-knowledge.

**When the designer asks again** about the next cell or a new frame, first say whether each fix since your last look made things better, worse or no different, and whether you accept each reason for leaving a gap. Then review the cell.

## On its own

When the user runs this skill directly, confirm the target and cells once, then review each cell in order. For each cell, draw a frame of today's screens on the Paper canvas, named `<n> · <layer> × <level> · review`, with a red numbered marker and a note for each gap. "The canvas" in designing describes the layout. /designing can start from these frames.

## Checking a build

Run this before a build of approved frames ships. Don't reopen the design. Here, a gap is a place where the build doesn't match its frame, or a problem no frame can show.

1. **Against the frames:** compare each page with its frame at the same width, and check every page that uses a shared part the build changed. Read the lines the change deleted. A lost accessible name, focus style or reduced-motion check is a gap (interfaces plugin, "interface-review").
2. **What frames can't show:** the WCAG 2.2 A and AA criteria that design-knowledge's `scripts/wcag-index.py` lists. Run axe on every page and state, then check keyboard-only use, the accessibility tree, 320 px width, 200% zoom, reduced motion, forced colors, each theme, and whether the styles match the product's tokens.

## What to return

1. **Verdict:** a few sentences on whether each person can do their job, and where the cell is weakest.
2. **Last fixes:** when the designer asked again, your view of each fix and each reason for leaving a gap.
3. **Gaps:** every gap you can prove, worst first, starting with what most separates the cell from the best products. For each, give:
   - a number and a short title
   - the part
   - the rule it breaks (guide, number and title), the step where someone gets stuck, or the other place that does it differently
   - what's wrong, counted, measured or quoted, and who it hurts
   - the proof: screenshot path and location, and the code's file and line

   If the cause is in another cell, say which. Report a gap in a shared part once, with every place it shows up (interfaces plugin, "better-interface"). Describe the problem, not the fix.
4. **Bolder moves:** up to three, kept apart from the gaps because they're proposals, not proven faults. A bolder move is a different design that could be much better, even if it reopens a decision or goes beyond the target. For each, give the assumption it questions, the idea, the evidence and how strong it is (a product that does it, a fact about the people, a number), what it would reopen and cost, and the cheapest way to test it, such as one frame. If none is strong, list none (impeccable, "critique").
5. **What held up:** each part with no gaps, so it's clear you covered every part, and anything a change could easily break.
6. **Not proven or not covered:** each item with the test that would settle it, such as a usability test with five users (Nielsen, 2000).
