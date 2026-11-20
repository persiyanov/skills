---
name: design-review
description: Review or critique a UI or a design, on Paper, in a running app, or in a build before it ships, and prove each gap. To change the design, use /designing.
argument-hint: "<part> [aspects]"
---

# Design review

Use this skill to find where a design falls short and to prove it, one part at a time, as design-knowledge's `SKILL.md` describes. You report, and /designing changes the design. You need fresh eyes, so run as a new session or a new subagent that had no part in making the design.

## Set up

Before you start, gather the following:

- **Target and its parts:** what the user named, in every state and every place it appears, and every part inside it, as design-knowledge's "Scope" lists them. For the whole product, review a sample: every page of each main journey, one page of each kind, the most-visited pages, and a few pages at random (W3C, WCAG-EM 2.0).
- **Directions:** if the design offers directions, review each one only at its own level, because only the pick's inner parts get refined.
- **Input:** the Paper frames while the design is on Paper, and otherwise a running app or a build, with a login for each role and a way to reach each state. If you have only code, ask for one of these, because code doesn't show what people see. On Paper, review structure and style, and leave behavior to the build check, because a frame can't show how something responds and moves.
- **Standards:** `standards.md` from whoever called you, and the trace in the work's `design.md`, which ties each part to a job and its evidence. If there's no `standards.md`, write it as design-knowledge's `product-standards.md` describes. When the product's own rules and a guide conflict, follow design-knowledge.
- **Folder:** a folder outside the repo for screenshots and notes, so that each gap's proof has a path.
- **Tools:** design-knowledge's `scripts/style-inventory.js` measures the styles that a page uses, and this skill's `scripts/layout-overlay.js` shows its alignment.

## Review

1. **Check the last fixes.** Judge each finding that the work's `design.md` marks fixed, left or disproved since the last review, because fixes often break something else, and a reason for leaving a gap can be wrong. A fix that moves a part away from the way the product and the best products do it is a gap that the fix introduced, unless its proof shows that this way fails here.
2. **Review the target and each part inside it,** from the whole down. Check each part as design-knowledge's "Check a part" describes, and judge it by the principles below. A part is done when you've checked every version that people meet and every rule, not when you run out of ideas (Moran and Gordon, NN/g, 2023).
3. **Return the report** that "What to return" describes.

## What to return

Return the following, in this order, so that the designer can act on the review without redoing your work:

1. **The result:** one line with how many parts in scope pass, how many gaps you found and from how many causes, and whether each person can do their job. For example: "9 of 12 parts pass. 7 gaps from 3 causes. A lead can't tell which account needs them."
2. **Parts:** every part in scope, indented down from the target, each with "passes" or the number of its gaps and the worst one. A part passes when you find no new gap in it, and beside the best products, at the same size, it is as good as the best of them, or you can say why ours is right. A finding that the record marks fixed, left or disproved isn't new: judge it under Last fixes, and raise it again only with a fact or a proof that the record doesn't have. Give each direction its own line. These lines show what you covered, and they're the designer's progress.
3. **The whole:** Unless you're checking a build, give the path to each picture that "Compare with the best products" makes. When the scope includes style guides, also count each component's text sizes, weights, text colors and surface styles, measured from the frame or the page rather than judged by eye. These are the proof for hierarchy rule 4, surfaces rule 1 and the visual-language guide, and they catch a component whose parts are each correct but which looks cluttered as a whole. When it includes structure guides, list each kind of thing that the parts show, such as a person, a file, a state or an event, with each form it takes on our screens and in the best products. This is the proof for the conceptual model's rule 8 and the content guide's rules 7 and 8, and it catches a screen that writes as text what the best products draw.
4. **Last fixes:** your judgment of each fix and each reason for leaving a gap since the last review, as the record lists them.
5. **Gaps, grouped by cause:** Group every gap that you can prove by the decision that causes it, and put first the cause that most separates the design from the best products, because one fix at the cause removes several gaps. For each cause, name it and the /designing action it calls for:

   | The cause | The action it calls for |
   | --- | --- |
   | Sits in this part, and can be fixed here | Converge |
   | A part in the wrong place: nothing is lost without it, another part shows the same, or it's in view when only some people need it | Prune |
   | Sits in another part | Zoom out or Zoom in, to that part, named |
   | Runs across the part, in one aspect or in every part of one kind | Focus, on that aspect or kind, named |
   | The job is wrong or missing | Frame |
   | The concept fails the job | Diverge |
   | Falls short of the best products, with no clear fix | Find references |

   Under each cause, list its gaps, and give each one:
   - a number and a short title
   - the part
   - the rule it breaks (guide, number, and title), the step where someone gets stuck, or the other place that does it differently
   - what's wrong, as a count, a measurement, or a quote, and whom it hurts
   - for a change, whether the change introduced the gap or it was already there
   - the proof: the screenshot's path and the place on it, and the code's file and line

   Report a gap in a shared part once, and list every place it appears (interfaces plugin, "better-interface"). Describe the problem, and leave the fix to the designer, who weighs each fix against the whole design.
6. **Bolder moves:** List up to three. For each, give the assumption it questions, the evidence against it and how strong it is, what dropping it would reopen, and the cheapest way to test it, such as one frame drawn with and without it. Each calls for Frame, Diverge or Prune, such as a whole job cut from a first release. List only strong ones, because a weak one costs the designer a whole round of directions (impeccable, "critique").
7. **Not proven or not covered:** List each item, with the test that would settle it, such as a prototype in the running app, or a usability test with five users (Nielsen, 2000).

## Principles

- **Judge what people will see.** Look at the screens, and treat the designer's notes as claims to check, because a note can be wrong and people never read it.
- **Start with what each part is for.** Ask this before you ask how a part works. Walk through the design as each person in `standards.md`, with their real case, starting where they start, and with each case that the work's `design.md` lists. At each step, ask whether they know what to do, notice the control, connect it with their goal, and see that it worked (Wharton et al., 1994).
- **Look for what to prune.** A design can pass every rule and still carry parts nobody needs. Find each part's place as design-knowledge's "Check a part" and "A part's place" describe, with the trace's jobs and their evidence. Report a part in the wrong place as a gap, whatever put it there, such as today's version, a spec, the API or a reference, because it costs attention and helps nobody. A part that only an assumption needs is the user's decision.
- **Look at the whole before the rules,** because the rules are a floor (Interface Craft skill, "Design Critique"). Note anything that looks wrong, even if no rule names it. Measure it, such as the width of an empty gap and how many rows have it, so that it becomes a gap with proof. Blur the screen to see what stands out first, which should be what the job needs first.
- **Cover the whole part.** Gaps hide where nobody looked. The versions that people meet include empty, loading, and error states, each role, each kind of place where a shared part that the work changed appears, and the extremes of everything that varies: the shortest and longest data, none, one and the most it will hold after long use, the narrowest and widest windows that people use, and the largest text size (Emil Kowalski, "break-ui"). Look at each part at the scale of its level: a page at its real size, and each component and primitive up close, where it meets its neighbors, because small defects disappear at page scale.
- **Compare with the rest of the product.** People learn a part once and expect it to work the same everywhere. Compare each part with the parts that do the same job on two or three similar pages, and treat a difference with no reason in `standards.md` as a gap.
- **Compare with the best products.** The rules only make a design correct, and the best products show what good looks like. Put each page and component beside the same part from each best product in `standards.md`, at the same size, and each kind of primitive as a set, such as the icons or the type, and measure the values on each product's own page. Use the products yourself where you can, because a screenshot can't show how something feels. If `standards.md` describes a product only in words, find screens of it first.
- **Prove each gap.** The designer can't tell a proven gap from a guess, and anyone can check a count, but nobody can check an adjective. Name the element, quote its text, and give one of the following proofs:
  - a step that you reproduced, where someone gets stuck
  - a measurement from the DOM or from Paper, because a screenshot's pixels depend on its scale
  - a rule that you read in full, with its "Applies when" and "Pass"
- **Say which gaps a change introduced.** For a change, check the version before it, and say whether each gap is new or was already there, because whoever decides what to fix now can't choose well if old problems look like new ones.
- **Question the assumptions.** A design built on an unquestioned assumption can improve only within it (Interface Craft, "Conceptual Range"). List what the design takes for granted, including decisions already made, and ask how much better it could be without each assumption, including whether a smaller design could do the job, because a design that spreads across more places can pass every rule and still be the wrong design. When the design offers directions, list what all of them share, because an assumption that every direction keeps is one that nobody explored. Report each assumption that the evidence questions as a bolder move, apart from the gaps. Name the assumption and the evidence, and leave the design to the designer, because an idea handed over with the finding becomes the design before anyone explores others.

## When the user runs a review

If the user runs this skill directly, confirm the target once, and then review it and each part inside it. For each part with gaps, draw a frame of today's screens on the Paper canvas, named `<n> · <part> · review`, with a red numbered marker and a note for each gap. For the layout, see "Canvas" in designing's `SKILL.md`.

## Check a build

Run this check before a build of approved frames ships. The frames are settled, so judge whether the build matches them, and what no frame can show. Here, a gap is a place where the build differs from its frame, or a problem that no frame can show. Check the following:

- **Against the frames:** Compare each page with its frame at the same width, and check every page that uses a shared part that the build changed. Read the lines that the change deleted, because the result can't show what is gone: anything people relied on with nothing in its place is a gap, such as an accessible name, a focus style or a reduced-motion check (interfaces plugin, "interface-review").
- **What frames can't show:** Check the WCAG 2.2 A and AA criteria that design-knowledge's `scripts/wcag-index.py` lists. Run axe on every page and state, and then check keyboard-only use, the accessibility tree, 320 px width, 200% zoom, reduced motion, forced colors, each theme, and whether the styles match the product's tokens.
