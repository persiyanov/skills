---
name: design-review
description: Judge a UI or a design with fresh eyes, cell by cell, and never change it. It returns gaps with proof, worst first. Works on a Paper design, a running UI or a build. Use when the user says "review this", "design review", "UX review", "audit", "what's wrong with", "second opinion" or "check the build". To have the gaps fixed, use /designing.
argument-hint: "<target> [levels] [layers] [guides]"
---

# Design review

A review finds where a design falls short and proves it. It never edits the design: fixing is /designing's work. The reviewer had no part in the design, so it sees it as people will, not as its author meant it: a session that starts with this review, or a fresh agent. Cells, levels, layers, guides and the order of the cells come from the /design-knowledge skill's `SKILL.md`.

## Set up

- **The target and its cells:** what the user named, in every state and where it appears, and the cells design-knowledge gives for it. For the whole product, take a sample: every page of each main journey, one page of each kind, the pages most people see, and a few at random (W3C, WCAG-EM 2.0).
- **The input:** the frames on the Paper canvas while the design is made there, a running UI (a URL or a branch, a sign-in for each role, a way to reach each state), or a build. Code alone can't show what people see: without one of these, ask.
- **The standards:** `standards.md` from the caller, or written now as design-knowledge says under "Product standards".
- **A folder** outside the repo for screenshots and notes. Capture each state of a running UI once, at each width, with the DOM behind it, and open it again only to operate or measure.

## Review a cell

List the cell's rules as design-knowledge says, then:

- **What each part is for,** before how it's done. Walk it as each person in `standards.md`, with their real case, from where they start. At each step, will they know what to do, notice the control, connect it with what they want, and see that it worked (Wharton et al., 1994)? What did they come for that isn't there? A part kept only because it was there is a gap.
- **Every state:** operate it, or find its frame. Empty, loading, partial, error, no access, each role, one item and ten times the real count, 360 and 1440 px wide, each theme, and the worst data each value allows (Emil Kowalski, "break-ui"); a second click during a save, Back, a reload halfway.
- **See it:** blur it and list what stands out, in order: it should be what the job needs first. Count what competes with design-knowledge's `scripts/style-inventory.js`, and check alignment with this skill's `scripts/layout-overlay.js`.
- **Each rule of the cell, one at a time:** read it in full and run its Check on every part it applies to. The cell is reviewed when every rule is checked, not when nothing more comes to mind (Moran and Gordon, NN/g, 2023).
- **The same parts elsewhere:** names, components, tokens, type, icons, placement and behavior, against the parts that do the same job on two or three pages of the same kind. A difference with no reason in `standards.md` is a gap.
- **The best products** in `standards.md`: the same part side by side at the same size, their values measured in their own pages, and used where they can be, since feel doesn't show in screenshots.
- **What it assumes:** name what the design and the decisions behind it take for granted, and ask what would be much better without it, such as why people need this step at all (Interface Craft, "Conceptual Range").

**Proof.** A gap needs proof you saved: a step where the person can't go on, reproduced; a measurement from the DOM or Paper's styles, never from a screenshot; or a rule read in full, with its "Applies when" and "Pass". Count instead of judging: "four background colors", not "too many". Name the place: the element and its words. Conflicting standards are settled as design-knowledge says.

**Asked again,** for the next cell or a new frame: first judge each fix since your last look (better, no different or worse) and each reason given for a gap left as is (accepted, or why it still fails), then review the cell.

## On its own

When the user calls this skill, confirm the target and its cells once, then review each cell in order. Draw each cell's gaps on the Paper canvas, as designing's `SKILL.md` says under "The canvas": a frame of the screens as they are, named `<n> · <layer> × <level> · review`, with red numbered markers on the mockup and a note beside each. /designing can start from it.

## Checking a build

Before shipping a build made from approved frames. It doesn't reopen the design: a gap is where the build differs from its frame, or what a frame can't show.

1. **Against the frames:** each page at the same width; every page that uses a shared part the build changed; and the lines the change removed, where a lost name, focus style or reduced-motion guard is a gap (interfaces plugin, "interface-review").
2. **What a frame can't show:** WCAG 2.2 A and AA, from design-knowledge's `scripts/wcag-index.py`: an axe scan of every page and state, the keyboard alone, the accessibility tree, 320 px wide and 200% zoom, reduced motion, forced colors and each theme, and the styles in use against the product's tokens.

## What to return

1. **The judgment,** in a few sentences: can each person do their job, and where is the cell weakest?
2. **The last fixes and reasons,** when asked again.
3. **Every gap you can prove,** worst first: what most separates it from the best products leads. Each has a number, a title of a few words, the part, the rule (guide, number and title) or the step where a person can't go on or the place that does it differently, what is wrong (counted, measured or quoted, and who it costs what), and the proof (the screenshot's path and the place on it, the code's file and line). A gap whose cause is in another cell names that cell. A gap in a shared part is reported once, with where it shows (interfaces plugin, "better-interface"). A gap names the problem, never its fix.
4. **Bolder moves,** up to three, apart from the gaps because they are proposals, not proven faults: a different design that could be much better, even where it reopens a settled decision or goes beyond the target. Each names the assumption it questions, the move, the evidence and how strong it is (a product that does it, a fact about the people, a number), what it would reopen and cost, and the cheapest check, such as one frame. Write none rather than a weak one (impeccable, "critique").
5. **What held up:** what a change could easily lose.
6. **What's unproven or not covered,** each with what would settle it, such as a usability test with five users (Nielsen, 2000).
