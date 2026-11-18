---
name: design-review
description: Judge a UI or a design with fresh eyes, cell by cell, and never change it. It returns gaps with proof, worst first. Works on a Paper design, a running UI or a build. Use when the user says "review this", "design review", "UX review", "audit", "what's wrong with", "second opinion" or "check the build". To have the gaps fixed, use /designing.
argument-hint: "<target> [levels] [layers] [guides]"
---

# Design review

Use this skill to find where a design falls short and to prove it, one cell at a time, as design-knowledge's `SKILL.md` describes. Don't edit the design. You need fresh eyes, so run as a new session or a new subagent that had no part in making the design.

## Principles

Follow these principles in every review. Each one gives its reason, so that you can apply it to cases that it doesn't name.

- **Judge what people will see.** Look at the screens, and treat the designer's notes as claims to check, because a note can be wrong and people never read it.
- **Start with what each part is for.** Ask this before you ask how a part works. Walk through the design as each person in `standards.md`, with their real case, starting where they start. At each step, ask whether they know what to do, notice the control, connect it with their goal, and see that it worked (Wharton et al., 1994). A part that exists only because it was there before is a gap, because it costs attention and helps nobody.
- **Look at the whole before the rules.** A design can pass every rule and still look wrong, because the rules are a floor (Interface Craft skill, "Design Critique"). Note anything that looks wrong, even if no rule names it. Measure it, such as the width of an empty gap and how many rows have it, so that it becomes a gap with proof. Blur the screen to see what stands out first, which should be what the job needs first.
- **Cover the whole cell.** Gaps hide where nobody looked, so check every part, every version that people will meet, and every rule. Versions include empty, loading, and error states, each role, and the extremes of everything that varies: the shortest and longest data, one item and many, the narrowest and widest windows that people use, and the largest text size (Emil Kowalski, "break-ui"). Look at each part at the scale of its level: a page at its real size, and each component and primitive up close, where it meets its neighbors, because small defects disappear at page scale. Read each rule in full and run its check. Stop when you've checked every rule, not when you run out of ideas (Moran and Gordon, NN/g, 2023).
- **Compare with the rest of the product.** People learn a part once and expect it to work the same everywhere. Compare each part with the parts that do the same job on two or three similar pages, and treat a difference with no reason in `standards.md` as a gap.
- **Compare with the best products.** The rules only make a design correct, and the best products show what good looks like. Put the same part from each best product in `standards.md` beside ours, at the same size, and measure its values on its own page. Use the products yourself where you can, because a screenshot can't show how something feels. If `standards.md` describes a product only in words, find screens of it first.
- **Prove each gap.** The designer can't tell a proven gap from a guess, and anyone can check a count, but nobody can check an adjective. Name the element, quote its text, and give one of the following proofs:
  - a step that you reproduced, where someone gets stuck
  - a measurement from the DOM or from Paper, not from a screenshot, because a screenshot's pixels depend on its scale
  - a rule that you read in full, with its "Applies when" and "Pass"
- **Say which gaps a change introduced.** For a change, check the version before it, and say whether each gap is new or was already there. The user decides which gaps to fix now, and they can't choose well if old problems look like new ones.
- **Question the assumptions.** A design built on an unquestioned assumption can improve only within it (Interface Craft, "Conceptual Range"). List what the design takes for granted, including decisions already made, and ask how much better it could be without each assumption. Report what you find as bolder moves, apart from the gaps, because they're proposals without proof. A bolder move can remove or merge parts, not only add them. Ask what the smallest design that does the job would be, because a design that spreads across more places can pass every rule and still be the wrong design.
- **Check the last fixes first.** When the designer asks again about the next cell or a new frame, judge each fix since your last look, and each reason for leaving a gap, before you review the cell. Fixes often break something else, and you remember what you asked for, so you're best placed to check them. A fix that moves a part away from the way the product and the best products do it is a gap that the fix introduced, unless its proof shows that this way fails here.

## Set up

Before the first cell, gather the following:

- **Target and cells:** what the user named, in every state and every place it appears, and its cells. For the whole product, review a sample: every page of each main journey, one page of each kind, the most-visited pages, and a few pages at random (W3C, WCAG-EM 2.0).
- **Input:** the Paper frames while the design is on Paper, and otherwise a running app or a build, with a login for each role and a way to reach each state. If you have only code, ask for one of these, because code doesn't show what people see.
- **Standards:** `standards.md` from whoever called you. If there's none, write it as "Product standards" in design-knowledge describes. When the product's own rules and a guide conflict, follow design-knowledge.
- **Folder:** a folder outside the repo for screenshots and notes, so that each gap's proof has a path.
- **Tools:** design-knowledge's `scripts/style-inventory.js` measures the styles that a page uses, and this skill's `scripts/layout-overlay.js` shows its alignment.

## When the user runs a review

If the user runs this skill directly, confirm the target and its cells once, and then review each cell in order. For each cell, draw a frame of today's screens on the Paper canvas, named `<n> · <layer> × <level> · review`, with a red numbered marker and a note for each gap. For the layout, see "Canvas" in designing's `SKILL.md`.

## Check a build

Run this check before a build of approved frames ships. Don't reopen the design. Here, a gap is a place where the build differs from its frame, or a problem that no frame can show. Check the following:

- **Against the frames:** Compare each page with its frame at the same width, and check every page that uses a shared part that the build changed. Read the lines that the change deleted, because a lost accessible name, focus style, or reduced-motion check is a gap (interfaces plugin, "interface-review").
- **What frames can't show:** Check the WCAG 2.2 A and AA criteria that design-knowledge's `scripts/wcag-index.py` lists. Run axe on every page and state, and then check keyboard-only use, the accessibility tree, 320 px width, 200% zoom, reduced motion, forced colors, each theme, and whether the styles match the product's tokens.

## What to return

Return the following, in this order, so that the designer can act on the review without redoing your work:

1. **The whole:** Unless you're checking a build, put each screen of the cell beside the same screen of the best products, at the same size, and give the path to that picture. In a style cell, also count each component's text sizes, weights, text colors and surface styles, measured from the frame or the page rather than judged by eye. These are the proof for hierarchy rule 4, surfaces rule 1 and the visual-language guide, and they catch a component whose parts are each correct but which looks cluttered as a whole. In a structure cell, list each kind of thing the cell names, such as a person, a file, a state or an event, with each form it takes on our screens and in the best products. This is the proof for the conceptual model's rule 8 and the content guide's rules 7 and 8, and it catches a screen that writes as text what the best products draw.
2. **Verdict:** In a few sentences, say whether each person can do their job, and where the cell is weakest.
3. **Last fixes:** When the designer asked again, give your judgment of each fix and of each reason for leaving a gap.
4. **Gaps:** List every gap that you can prove, worst first, so that the designer fixes what matters most first. Put first the gaps that most separate the cell from the best products. For each gap, give the following:
   - a number and a short title
   - the part
   - the rule it breaks (guide, number, and title), the step where someone gets stuck, or the other place that does it differently
   - what's wrong, as a count, a measurement, or a quote, and whom it hurts
   - for a change, whether the change introduced the gap or it was already there
   - the proof: the screenshot's path and the place on it, and the code's file and line

   If the cause is in another cell, name that cell. Report a gap in a shared part once, and list every place it appears (interfaces plugin, "better-interface"). Describe the problem, and leave the fix to the designer, who weighs each fix against the whole design.
5. **Bolder moves:** List up to three. For each, give the assumption it questions, the idea, the evidence and how strong it is, what it would reopen and cost, and the cheapest way to test it, such as one frame. If none is strong, list none, because a weak one wastes the user's time (impeccable, "critique").
6. **What held up:** List each part with no gaps, so that the designer can see you covered every part, and anything that a change could easily break.
7. **Not proven or not covered:** List each item, with the test that would settle it, such as a usability test with five users (Nielsen, 2000).
