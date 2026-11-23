---
name: design-review
description: 'Review or critique a UI or a design in any medium, such as a running app or Paper frames, before or after it ships: fresh subagents look through ten lenses in four groups (concept, simplicity, functional, craft), each failure comes with its proof, and the report lists them in the order to fix them. Light mode (one subagent per group) unless you say "full". To change the design, use /designing.'
argument-hint: "<target> [full]"
---

# Design review

Use this skill to find, with fresh eyes, every way a design falls short of its bar, and to prove each failure. You report, and never change the design. Each lens runs as a fresh subagent that had no part in making the design, because the designer knows why each part is there and can't see it the way a newcomer does.

## The lenses

A lens is one way of finding problems: one question, with its own input, method and proof. The groups are listed in the order that fixes are made, because a fix higher up reopens what's below it. `references/lenses.md` defines each lens.

| Group | Lens | Question |
| --- | --- | --- |
| Concept | From scratch | How should this be done, from the problem alone? |
| Simplicity | Less | What can go? |
| Simplicity | Convention | Would a well-made product make each part this way, and do our other pages? |
| Functional | Walk | Can each person do each job, in every state? |
| Functional | Words | Is each word the one the reader expects? |
| Functional | Truth | Does every label, number and action match the data and what the product does? |
| Functional | Access | Can everyone see, read and use it? |
| Craft | Look | Does each screen read as one design, with what matters leading and a look that is the product's own? |
| Craft | Detail | Is every value exact and from the system, and does it hold in every state, with any data, window and setting? |
| Craft | Care | Do the moments people remember feel as considered as in the best products? |

## What you get

- **The target:** a part, a page, a journey or a whole product, as a tree of parts, as design-knowledge's "The tree" describes, in every state and every place it appears. For a whole product, review every page of each main journey, one page of each kind, the most-visited pages and a few at random (W3C, WCAG-EM 2.0).
- **The design:** a running app with a test login for each role and a way to reach each state, Paper frames, or another design medium, and, for a change, the version before it. Ask before anything that writes to a production app. Each lens checks more where the medium shows more, and what the medium can't show is not covered, never passed.
- **The record:** the work's spec, when it has one, for the problem, the jobs, the names, the places, the bar, and what the design must meet; and the product's UI rules and their log, as design-knowledge's `product-standards.md` describes. Without a spec, work from what the product and the user tell you, find the best products to compare with, and say in the report that there was no spec.
- **A findings file** outside the repo, such as in the session's scratchpad, written from the first finding, because a long review can lose its context, and the file is what survives.

## Review

1. **Scope:** name the target and its tree, its states, the medium, what the medium can't show, and the tasks that the design serves, by the names of design-knowledge's pattern guides.
2. **Find:** launch the finders in parallel, each a fresh subagent.
   - **Light mode,** the default: one finder per group, so four.
   - **Full mode,** when the caller says "full": one finder per lens.
   - The caller can leave lenses out, or name the only ones to run.
   - Give each finder the opening of `references/lenses.md` and its lens's section, the target, the medium, the tasks and the parts of the record that its lens names, and nothing else about the work: no reasons from the designer, and no other lens's findings.
   - From scratch gets only the problem, the people, their jobs and the data, and the design in a second message, after its own answer, because whatever it sees first shapes that answer.
   - In Claude Code, launch every subagent, finders and verifier alike, with model `opus` and effort `medium`.
3. **Merge:** wait for every finder. Merge findings that name the same element and the same cause, keeping the most concrete proof, and group the rest by the decision that causes them, because one fix at the cause removes several failures. In the findings file, quote each finder's problem and proof as it wrote them, with a status, and never a fix, because a later check that reads a fix checks the fix instead of the problem.
4. **Check** each finding by trying to reproduce it from its proof, and label it CONFIRMED, DISPROVED or UNPROVEN, quoting the proof. Unsure is UNPROVEN, never DISPROVED, and a finding stays even when it seems minor.
5. **Report,** as "What to return" describes.

## Verifying fixes

After the findings are fixed, a fresh subagent checks the fixes, as `references/verify.md` describes. Give it the fixed findings as the findings file quotes them, the design before and after, the record, and the Look and Detail sections of `references/lenses.md`, and never the fixer's description of the fixes.

## What to return

1. **The verdict,** in one line: the target passes, with no confirmed finding, or how many findings in which groups, from how many causes, and whether each person can do their job.
2. **The findings, in fix order:** Concept, Simplicity, Functional, Craft, and within a group, the cause that reaches most parts first. For each: a number, a short title and its lens; what happens, with the proof its lens asks for and where to see it (a screenshot and place, or a file and line); the part where its cause sits, which can differ from where it shows; and, for a change, whether the change brought it. Describe the problem, and leave the fix to the designer, who weighs each fix against the whole design. Report a failure in a shared part once, with every place it appears.
3. **Unproven findings,** each with what would prove or disprove it.
4. **Not covered:** what the medium couldn't show, the rules a finder couldn't check, and each question that only real users can answer, with the test that would settle it.

## When the user runs a review

Take the target as they named it, and ask only when it's unclear. Show each finding where it is, as a marked screenshot of a running app or a marked frame on Paper, and say where they are.
