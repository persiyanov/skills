---
name: design-review
description: 'Review or critique a UI or a design in any medium, such as Paper frames, a running app or its code, before or after it ships: fresh subagents look through ten lenses in four groups (concept, simplicity, functional, craft), each failure comes with its proof, and the report lists them in the order to fix them. Light mode (one subagent per group) unless you say "full". To change the design, use /designing.'
argument-hint: "<target> [full]"
---

# Design review

Use this skill to find, with fresh eyes, every way a design falls short of its bar, and to prove each failure. You report, and never change the design. Each lens runs as a fresh subagent that had no part in making the design, because the designer knows why each part is there and can't see it the way a newcomer does.

## The lenses

A lens is one way of finding problems: one question, with its own input, method and proof. One topic needs several lenses: of a label, Truth asks whether it's true, Words whether it's the reader's word, Less whether it's needed, and Convention whether it's what good products call it. The groups run in the order that fixes are made, because a fix higher up reopens what's below it: polishing a page that's the wrong thing is wasted, and a part that goes needs no other fix. `references/lenses.md` defines each lens.

| Group | Lens | Question |
| --- | --- | --- |
| Concept | From scratch | How should this be done, from the problem alone? |
| Simplicity | Less | What can go? |
| Simplicity | Convention | Would a well-made product make each part this way, and do our other pages? |
| Functional | Walk | Can each person do each job, in every state? |
| Functional | Words | Is each word the one the reader expects? |
| Functional | Truth | Does every label, number and action match the data and what the product does? |
| Functional | Access | Can everyone see, read and use it? |
| Craft | Look | Does the whole hold up next to the best products? |
| Craft | Detail | Is every edge, gap, value and timing right? |
| Craft | Care | Do the moments people remember feel as considered as in the best products? |

## What you get

- **The target:** a part, a page, a journey or a whole product, in every state and every place it appears. List every part in it, down to its primitives, so that no lens misses one (Brad Frost, "Interface Inventory", 2013). For a whole product, review every page of each main journey, one page of each kind, the most-visited pages and a few at random (W3C, WCAG-EM 2.0).
- **The design, in any medium:** a spec's places in words, Paper frames, a running app with a test login for each role and a way to reach each state, or its code. Change data only in a test account or a local or staging build, and ask before anything that writes to a production app. Each lens asks its question in every medium and checks more where the medium shows more. Anything the medium can't show is not covered, never passed. A state that the medium could show but the design doesn't, such as a control that is never shown open, is a finding.
- **The record:** the work's spec, when it has one, for the problem, the people and their jobs, the things and places, the cases, the bar, and what the design must meet; and the product's UI rules and their log, as design-knowledge's `product-standards.md` describes. Without a spec, write the problem and the jobs from the product's docs, data and support threads rather than from the page under review, find the best products for the bar yourself, take the ranked qualities from the product's UI rules, mark each as your reading, and say in the report that the spec was missing.
- **A findings file** outside the repo, such as in the session's scratchpad, written from the first finding and updated at every step, because a long review can lose its context, and the file is what survives.

## Review

1. **Scope:** name the target, its states, the medium, what the medium can't show, and the tasks that the design serves, by the names of design-knowledge's pattern guides, so that each finder lists the right rules.
2. **Run the scripts first:** in a running build, open each screen and state with agent-browser, and run `scripts/layout-overlay.js` (scrolling, since it covers the viewport), design-knowledge's `scripts/style-inventory.js`, and axe-core in the page. Save each output in the review folder, named by screen and state, because a script covers every element and a finder's eyes don't.
3. **Find:** launch the finders in parallel, each a fresh subagent.
   - **Light mode,** the default: one finder per group, so four.
   - **Full mode,** when the caller says "full": one finder for each lens's unit, as `references/lenses.md` names it, such as one screen for Detail or one person's job for Walk. When the target is smaller than a unit, such as a card, the unit is the target in each place where it appears. A finder that holds more than it can finish samples its search instead of finishing it, and stops at about ten findings whatever it holds.
   - The caller can leave lenses out of either mode, or name the only ones to run, which then run as in full mode, such as From scratch, Walk, Truth and Words on a spec.
   - From scratch gets only the problem, the people, their jobs, the cases and the data, as extracts, never the record itself. Send it the design in a second message, after it has returned its own answer, so it never shares a finder.
   - Give each finder the opening of `references/lenses.md` and its lens's section, the target, the medium, the tasks, the parts of the record that its lens names, the scripts' output for its unit, and nothing else about the work: no reasons from the designer, and no other lens's findings. It reads whatever files and skills its lens names.
   - Each finder writes its answers to its own file in the review folder: every rule of its lens, for every part of its unit, as passes, fails, doesn't apply, or not covered and why, so that what nobody looked at shows. A lens with no rules, such as From scratch or Care, lists the items of its unit instead.
   - In full mode, a finder that returns ten findings or more probably stopped early. Keep its findings, split its unit into smaller units of the same kind, such as a screen into its regions or a job into its stages, and run a fresh finder on each, told which findings are already in. Split once, because a unit that still returns ten has that many problems.
   - In Claude Code, launch each finder with model `opus` and effort `medium`.
4. **Merge:** wait for every finder. Merge findings that name the same element and the same cause, keeping the most concrete proof. Group the rest by the decision that causes them, because one fix at the cause removes several failures. In the findings file, quote each finder's problem and proof as it wrote them, with a status, and never a fix, because a later check that reads a fix checks the fix instead of the problem.
5. **Check** every finding by trying to reproduce it from its proof, because the designer can't tell a proven failure from a guess. Label each one CONFIRMED, DISPROVED or UNPROVEN, and quote the proof. A Less finding is disproved when another lens shows that someone loses something without the part. Unsure is UNPROVEN, never DISPROVED, and a finding stays even when it seems minor.
6. **Report,** as "What to return" describes. A rule fails wherever any finder found it failing, and every rule answered "not covered", or not answered at all, goes under Not covered.

## Verifying fixes

After the findings are fixed, a fresh subagent checks the fixes, as `references/verify.md` describes. Give it the findings that were fixed, as the findings file quotes them, the design before and after, the record, `references/verify.md` and the Look and Detail sections of `references/lenses.md`, and never the fixer's description of the fixes, because it would check the description instead of the design. In Claude Code, launch it with model `opus` and effort `medium`.

## What to return

1. **The verdict,** in one line: the target passes, with no confirmed finding, or how many findings in which groups, from how many causes, and whether each person can do their job.
2. **The findings, in fix order:** Concept, Simplicity, Functional, Craft, and within a group, the cause that reaches most parts first. For each finding, give:
   - a number, a short title and its lens
   - what happens: the person, the case and the step where they get stuck, a measurement, or the rule's Fail line
   - the part where its cause sits, which can differ from where it shows
   - the proof, as its lens defines it, with the screenshot's path and place, or the file and line
   - for a change, whether the change brought it or it was there before

   Describe the problem, and leave the fix to the designer, who weighs each fix against the whole design. Report a failure in a shared part once, with every place it appears.
3. **Unproven findings,** each with what would prove or disprove it.
4. **Not covered:** what the medium couldn't show, and each question that only real users can answer, with the test that would settle it, such as a usability test with five users (Nielsen, 2000).

## When the user runs a review

Take the target as the user named it, in light mode unless they say "full", and ask only when the target is unclear. Mark each finding where the user will see it: in a running app, a screenshot of its place with a numbered marker, saved in the review folder; on Paper, a frame of today's screens for each part that fails, named `<n> · <part> · review`, with a numbered marker and a note for each finding. Say where they are.
