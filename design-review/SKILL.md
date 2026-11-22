---
name: design-review
description: 'Review or critique a UI or a design, on Paper, in a running app, or in a build before it ships: run a part''s tests with fresh eyes, in a structure, style or behavior pass, and prove each failure. To change the design, use /designing.'
argument-hint: "<part> [structure|style|behavior]"
---

# Design review

Use this skill to check, with fresh eyes, whether a part of a design passes its tests, and to prove each failure. You report, and /designing changes the design. Run as a new session or a new subagent that had no part in making the design, for two reasons: the designer knows why each part is there, so it can't see the part the way a newcomer does, and it wrote its own tests, so it can't find the ones it didn't think of.

## What you get

- **The target:** a node, a node and everything under it, or the whole tree, as design-knowledge's "The tree" defines them, in every state and every place it appears. For a whole product with no tree yet, review a sample: every page of each main journey, one page of each kind, the most-visited pages, and a few pages at random (W3C, WCAG-EM 2.0).
- **The pass:** structure, style or behavior, as design-knowledge's "Layers and guides" defines them. With none named, review all three in order and report structure first, because the later layers rest on it.
- **The design:** the Paper frames while the design is on Paper, and otherwise a running app or a build, with a login for each role and a way to reach each state. If you have only code, ask for one of these, because code doesn't show what people see. On Paper, leave behavior to "Check a build", because a frame can't show how something responds and moves.
- **The record:** the product's UI rules and their log, and the work's `design.md`, with the bar, the tree, the jobs and their evidence, each node's brief, the cases and the baseline: the tree as it stood when the user approved the structure. If the work has no bar, review against the product's UI rules and the best products that you can find, and say in the report that the bar was missing. When the product's own rules and a guide conflict, follow design-knowledge's "When a product's rule differs from a guide".
- **A folder** outside the repo for screenshots and notes, so that each proof has a path.
- **Tools:** design-knowledge's `scripts/style-inventory.js` measures the styles that a page uses, and this skill's `scripts/layout-overlay.js` shows its alignment.

## Review

1. **Write your own tests first,** from the four places that design-knowledge's "A node's tests" lists, with the brief, cases and best products that the designer gave you. When the user runs the review, take them from `design.md`'s bar, jobs and cases, and read its Nodes section only after, because that's where the designer's tests are, and theirs mustn't shape yours. Then read the designer's tests, add any that you lacked, and note the ones that they lacked.
2. **Run every test the pass's way,** as "A node's tests" describes, and for behavior, as "Check a build" adds. Review a node at its own resolution: its own tests, and its children only as far as those tests reach, so that a small node gets a short review.
3. **Check the pass's limit** against the baseline, the tree and briefs in `design.md`'s Baseline and the canvas frames named `Baseline · <date>`. In style, that's any change to what a node holds, and in behavior, any change to the tree or the look.
4. **Run again each failure from the last review** that `design.md` marks fixed or left, or whose check it marks disproved, because fixes often break something else, and a reason for leaving a failure can be wrong. A fix that moves a part away from how the product and the best products do it is a failure that the fix introduced, unless its proof shows that their way fails here. A failure that the record already decided, such as one that the user left, comes back only with a fact or a proof that the record lacks.
5. **Return the report** that "What to return" describes. A node is done when you've run every test on every version that people meet, not when you run out of ideas (Moran and Gordon, NN/g, 2023).

## What to return

Return the following, in this order, so that the designer can act on the review without redoing your work:

1. **The verdict:** one line: the target passes, or how many tests fail, from how many causes, and whether each person can do their job. For example: "Fails: 5 tests, 2 causes. A first-time buyer can't tell which plan they're on."
2. **Failures, the earliest cause first.** A cause in an earlier pass, or in a node above the target, comes first, because its fix reopens everything after it. Then the rest, grouped by the decision that causes them, because one fix at the cause removes several failures. For each failure, give:
   - a number and a short title
   - the test it fails: yours, the designer's, a guide's rule (guide, number and title), or one of the product's UI rules
   - what happens: the case and the step where someone gets stuck, a measurement, or the rule's Fail line, and whom it hurts
   - the node and layer where its cause sits, which can differ from where it shows
   - for a change, whether the change introduced it or it was already there, judged on the version before it, because whoever decides what to fix now can't choose well if old problems look like new ones
   - the proof: the screenshot's path and the place on it, and the code's file and line

   Report a failure in a shared part once, and list every place it appears (interfaces plugin, "better-interface"). Describe the problem, and leave the fix to the designer, who weighs each fix against the whole design.
3. **Tests the designer lacked,** each with why it matters.
4. **Changes outside the pass:** each change that the pass's limit forbids, with the node and what changed.
5. **Not proven or not covered:** each item, with the test that would settle it, such as a usability test with five users (Nielsen, 2000).

## Principles

- **Judge what people will see.** Look at the screens, and treat the designer's notes as claims to check, because a note can be wrong and people never read it.
- **Look for what to prune.** A design can pass every rule and still carry parts that nobody needs. Find each part's place as design-knowledge's "A part's place" describes, with the jobs and their evidence. Report a part in the wrong place as a failure, whatever put it there, such as today's version, a spec, the API or a reference, because it costs attention and helps nobody. A part that only an assumption needs is the user's decision.
- **Look at the whole before the rules,** because the rules are a floor (Interface Craft skill, "Design Critique"). Note anything that looks wrong, even if no rule names it, and measure it, such as the width of an empty gap and how many rows have it, so that it becomes a failure with proof. Blur the screen to see what stands out first, which should be what the job needs first.
- **Look at each node at its own scale:** a page at its real size, and each component and primitive up close, where it meets its neighbors, because small defects disappear at page scale.
- **Compare with the rest of the product.** People learn a part once and expect it to work the same everywhere. Compare each part with the parts that do the same job on two or three similar pages, enough to show what the product usually does, and treat a difference with no reason in the record as a failure. List each kind of thing that the parts show, such as a person, a file, a state or an event, with each form it takes on our screens and in the best products, because a thing keeps one form wherever it appears (conceptual model rule 8), and each kind of thing is shown the way people recognize it (content rule 7).
- **Compare with the best products.** The rules only make a design correct, and the best products show what good looks like. Beyond the side-by-side that design-knowledge's "A node's tests" asks for, compare each kind of primitive as a set, such as the icons or the type, and measure the values on each product's own page. If the bar describes a product only in words, find screens of it first.
- **Prove each failure.** The designer can't tell a proven failure from a guess, and anyone can check a count, but nobody can check an adjective. Name the element, quote its text, and give one of the following proofs:
  - a step that you reproduced, where someone gets stuck
  - a measurement from the DOM or from Paper, because a screenshot's pixels depend on its scale
  - a rule that you read in full, with its "Applies when" and "Pass"
- **Question the assumptions.** A design built on an unquestioned assumption can improve only within it (Interface Craft, "Conceptual Range"). List what the design takes for granted, including decisions already made, and ask whether a smaller design could do the job, because a design that spreads across more places can pass every rule and still be the wrong design. When the design offers options, list what all of them share, because an assumption that every option keeps is one that nobody explored. Report an assumption that the evidence questions as a failing structure test, at the node where it sits, with evidence that the designer can check, because a weak one costs the designer a whole round of options (impeccable, "critique"). Leave the new design to the designer, because an idea handed over with the finding becomes the design before anyone explores others.

## When the user runs a review

If the user runs this skill directly, confirm the target and the pass once, and then review. For each node that fails, draw a frame of today's screens on the Paper canvas, named `<n> · <node> · review`, with a red numbered marker and a note for each failure. For the layout, see "Canvas" in designing's `SKILL.md`.

## Check a build

Run this check on the build that follows the user's style approval, before it ships. The frames are approved, so judge whether the build matches them, and what no frame can show, which is where the behavior pass is reviewed. Here a failure is a place where the build differs from its frame with no reason in the record, or a problem that no frame can show. Check the following:

- **Against the frames:** Compare each page with its frame at the same width, and check every page that uses a shared part that the build changed. Read the lines that the change deleted, because the result can't show what is gone: anything people relied on with nothing in its place is a failure, such as an accessible name, a focus style or a reduced-motion check (interfaces plugin, "interface-review").
- **What frames can't show:** Check the WCAG 2.2 A and AA criteria that design-knowledge's `scripts/wcag-index.py` lists. Run axe on every page and state, and then check the accessibility tree, 320 px width, 200% zoom, reduced motion, forced colors, each theme, and whether the styles match the product's tokens.
