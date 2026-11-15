---
name: designing
description: Design or change product UI, from a new feature to an overhaul to polish, on a Paper canvas, cell by cell: one review and one frame per cell, which the user follows and steers. Use for "design X", "redesign Y", "improve", "polish" or "iterate on" a journey, page or component, for fixing what a design review found, for feedback on a design, a customer request that changes what users see, and the UI part of a spec, before it is approved. Skip it for copy-only edits and for UI bugs whose fix is known.
argument-hint: "<target> [levels] [layers] [guides]"
---

# Designing

When a step names a skill (/name), invoke it with the Skill tool at that step.

You own this design and its result: make each choice yourself, and be able to say why. "The user" is whoever asked for the design; "people" are those who use the product. Cells, levels, layers, guides and the order of the cells come from the /design-knowledge skill's `SKILL.md`.

Three things hold in every case:

- **What is the user's to decide stays theirs.**
- **You draw every frame yourself.** Subagents only review.
- **The design lives in one place:** on Paper until the user's yes, in code after it.

And two habits: judge what people will see by looking at it, since a change has effects nobody intended (Schön, 1983); and do less, and finish it: every element has a reason in the person's job, or it goes (Karri Saarinen, "10 rules for crafting products that stand out", 2025).

## Setup

When `design.md` exists, read it and go on from its "Where it is". When /brainstorming started the work, start from the spec and ask only what it leaves open. Otherwise put the work in `docs/specs/YYYY-MM-DD-<slug>/`, then:

1. **The problem.** A request often names a fix: find the cause behind it, whether it is real and who has it (Linear Method, "Manage design projects").
2. **The standards.** Write `standards.md` as design-knowledge says under "Product standards": the people, the product's qualities, the best products.
3. **Today, on Paper.** Pick the project's Paper file, or ask whether to create one. Its tokens match the product's theme on the main branch: compare with `get_tokens` and fix each difference with `set_tokens`. Draw today's screens from the values the running app renders, as token references, and compare them with a screenshot. A part that isn't HTML, such as a chart, can stay a picture. New work has no today. When a /design-review started the work, go on from its page.
4. **The cells,** for the target and what the user named, on the overview card.
5. **The user.** In one message, confirm the problem, the target, the cells and the canvas, and ask only what only they know: what customers said, a constraint, what must stay, and what would make a polished result still feel wrong (impeccable, "shape").

Then start `design.md`, in the format of `references/design.md`.

## The loop

Once for each cell, in order:

1. **Review.** A subagent reviews the cell with /design-review, since you know why each part was made and it doesn't. Keep one for each layer: a fresh one at the layer's first cell, then the same one asked "what about now?" at each later cell, with the new frame, what changed, and your reason for each gap left as is. If it is lost, start a fresh one.
2. **Fix and draw.** Fix each gap; leave it as is with a one-line reason; or, when it is the user's call, draw the options and go on with your pick. It is their call when the options differ in direction or scope, or change something they chose.
   - Reuse before you add: remove something, use what people know from other products (Nielsen, 2023), reuse the product's own component, token or word, correct a value, and only then add something new (interfaces plugin, "better-interface").
   - Fix to what the best products and established design systems do, not to the smallest step from today. A call never offers an option that convention already rules out.
   - A part that differs from the others doing the same job matches them, or the change goes to every place (zen-review, "conventions").
   - When the cell's question is open, such as what a page is for, draw 2–3 options that differ in structure, each from a different reference, with "change nothing" among them: the first idea is a familiar one (Jansson and Smith, 1991).
   - Must-haves such as contrast, target sizes, accessible names and focus order hold in every change.
   - Each bolder move the review brings goes to the user as a call, drawn beside what it would replace, with your view of it.
   - Record each choice people would notice in `design.md`.
   - Draw it as one frame, as "The canvas" says.
3. **Next.** Update the card, tell the user in two lines what changed and what waits on them, and go on to the next cell. The user can, at any time, say "again" for another iteration of the cell, answer a call, so the After takes their answer, or stop.

A gap whose cause is in an earlier cell is fixed there, and what depends on it is redrawn. Going above the target, or reopening a choice the user made, is their call.

## The user

The user's time goes to what only they can decide. What they say about the design is one of three things:

| They | Treat it as | Do |
| --- | --- | --- |
| Ask a question | A test of the design | Answer from `design.md`: the choice, the options it beat, and what decided it. Change nothing unless the question brings a fact, a constraint or a flaw the record lacks; then name it and change both. Never give a reason made up afterwards |
| Name a problem | Real, unless a fact says otherwise | Choose the fix yourself |
| Name a fix | A proposal | Find the problem behind it and test the fix against the other options. Where it loses, say so and why. The decision stays theirs |

Models give way when a person pushes back, even when they were right. What the user says is a sample of a kind of problem: find its cell, and fix it everywhere.

## Build

When the Paper cells are done, give the user `design.md`'s "For the user" list, and ask for their yes. When /brainstorming started the work, hand back to its approval instead. Then:

- **A change small enough for one branch:** build it from the frames, taking every value from Paper. Run the behavior cells in the running build, with the same loop: a value judged by feel gets a live control (Interface Craft, "Live Tuning"), and versions of a behavior sit behind a switch that shows one at a time (Emil Kowalski, "prototype"). Then have a fresh subagent check the build with /design-review, have the user try it, and ship.
- **A new feature or a larger change:** building it is the /planning skill's work, and the behavior cells run in its build.

After the build, each change shows on the canvas as a frame of screenshots of the changed part, before and after.

## The canvas

Every piece of work looks the same, so the user learns it once. Its page reads left to right, then down.

- **The page:** one for each piece of work in the project's Paper file, named after its target and the date it began.
- **The overview card,** at the top left: the target and the dates; the cells in order, with each one's frames and the one in progress; each call waiting on the user, named as the frame shows it, with your pick; and what comes next.
- **Before and after,** to the right of the card: each screen of the target as it was when the work began and as it is now, side by side, in the order people meet them.
- **The frames,** one per iteration, left to right in the order they were made, three to a row and 80 px apart:
  - **Name:** `<n> · <layer> × <level> · <note>`, such as `15 · Structure × Component · every part`.
  - **Before notes | Before | After | After notes:** the same screens, side by side, with each side's notes on its outer edge. The Before is the latest After, or today at the start; the After is a copy of it changed only by this iteration.
  - **Markers on the mockup,** numbered, beside what they point at, not over it (Ginns, 2006). On the Before each gap is red, its note saying what is wrong. On the After the same number is green where fixed, gray where left as is, or amber where it is the user's call, its note saying what changed or why not.
  - **Under the After,** each call shows its options side by side, each with its idea in a line, and your pick outlined.
- **Four colors, one meaning each:** red is still wrong, green is fixed, gray is left as is, amber waits on the user. When the user answers, the marker turns green.

Paper puts a new artboard wherever there is room: move each to its place, and name it when you create it, since renaming cuts a name to 50 characters.
