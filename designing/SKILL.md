---
name: designing
description: Design or change product UI, from a new feature to an overhaul to polish, on a Paper canvas, cell by cell. Each cell gets one review and one frame, which the user follows and steers. Use for "design X", "redesign Y", "improve", "polish" or "iterate on" a journey, page or component, for fixing what a design review found, for feedback on a design, a customer request that changes what users see, and the UI part of a spec before the user approves it. Skip it for copy-only edits and for UI bugs with a known fix.
argument-hint: "<target> [levels] [layers] [guides]"
---

# Designing

When a step names a skill, invoke it with the Skill tool.

You own the design. Make each choice yourself and be ready to explain it. "The user" is whoever asked for the design. "People" are the people who use the product. design-knowledge's `SKILL.md` defines cells, levels and layers.

Three rules always apply:

- The user makes the decisions that are theirs.
- You draw every frame. Subagents only review.
- Work on Paper until the user approves the design, then in code.

Look at the result of every change, because changes have side effects nobody planned (Schön, 1983). Do less, and finish what you do. Remove anything the person doesn't need for their job (Karri Saarinen, "10 rules for crafting products that stand out", 2025).

## Setup

If `design.md` exists, read it and pick up where it says the work stands. If /brainstorming started the work, start from its spec. Otherwise create `docs/specs/YYYY-MM-DD-<slug>/`, then:

1. **Find the problem.** Users often ask for a fix. Find out what problem it should solve, whether that problem is real, and who has it (Linear Method, "Manage design projects").
2. **Write `standards.md`:** the people, the product's qualities, and the best products to compare with. "Product standards" in design-knowledge says what goes in it.
3. **Draw today's screens on Paper.** Use the project's Paper file, or ask to create one. First make the file's tokens match the product's theme, with `get_tokens` and `set_tokens`. Then draw each screen with the values the running app renders, using the tokens, and check it against a screenshot. A chart or another part that isn't HTML can stay an image. Skip this for new work. If a /design-review started the work, continue on its page.
4. **List the cells** for the target, and put them on the overview card.
5. **Send the user one message.** Confirm the problem, the target, the cells and the canvas. Ask only what they alone know: what customers said, constraints, what must stay, and what would make a polished result still feel wrong (impeccable, "shape").

Then start `design.md` from `references/design.md`.

## The loop

For each cell, in order:

1. **Review.** Have a subagent review the cell with /design-review. It doesn't know why you made each choice, so it sees the design as people will. Use one subagent per layer. Start a new one at the first cell of a layer, and at each later cell ask the same one "what about now?" Send it the new frame, what changed, and why you left any gap unfixed. If it's gone, start a new one.
2. **Fix and draw.** Fix each gap, or leave it and say why in one line. If a fix is the user's call, draw the options and carry on with your pick. It's their call when the options differ in direction or scope, or when one would change something they chose.
   - Reuse before you add. Remove something, use a pattern people know from other products (Nielsen, 2023), reuse the product's own component, token or word, or fix a value. Add something new only if none of that works (interfaces plugin, "better-interface").
   - Follow what the best products and design systems do, even when that means a big change. Don't offer the user an option that convention already rules out.
   - If a part works differently from others that do the same job, make it match them, or change all of them (zen-review, "conventions").
   - If you're not sure what a part should be, such as what a page is for, draw two or three options with different structures. Base each on a different reference, and include "change nothing". First ideas tend to copy what you've already seen (Jansson and Smith, 1991).
   - Keep contrast, target sizes, accessible names and focus order right in every change.
   - Draw each bolder move the reviewer suggests next to what it would replace, and give it to the user as a call, with your opinion.
   - Record in `design.md` each choice people would notice.
   - Draw one frame with every part of the cell, in each state the reviewer named. "The canvas" below says how.
3. **Next.** Update the card, tell the user in two lines what changed and what they need to decide, and go to the next cell. At any point the user can stop you, ask for another iteration of the same cell, or answer a call. When they answer, redraw the After to match.

If a gap comes from an earlier cell, fix it there and redraw what depends on it. Ask the user before you go beyond the target or reopen something they decided.

## The user

Spend the user's time only on what they alone can decide. When they comment on the design, they're asking a question, naming a problem or proposing a fix.

| They | It is | You |
| --- | --- | --- |
| Ask a question | A test of the design | Answer from `design.md`: the choice, the options it beat, and why. Change nothing unless the question shows a fact, a constraint or a flaw you missed. If it does, say what you missed and update the design and the record. Never invent a reason after the fact |
| Name a problem | Real, unless you have facts against it | Choose the fix yourself |
| Propose a fix | A suggestion | Find the problem behind it and compare the fix with other options. If another one is better, say so and why. The user decides |

Models tend to give in when someone pushes back, even when they were right. Keep your choice unless you learn a new fact. Treat each comment as an example of a wider problem: find the cell it belongs to and fix it everywhere.

## Build

When the Paper cells are done, give the user the "For the user" list from `design.md` and ask them to approve. If /brainstorming started the work, go back to it instead, because it approves the spec and the design together.

- **A small change, on one branch:** build it from the frames, taking every value from Paper. Then work through the behavior cells in the running app with the same loop. For values people judge by feel, such as animation timing, add a live control (Interface Craft, "Live Tuning"). To compare versions of a behavior, add a switch that shows one at a time (Emil Kowalski, "prototype"). Then have a new subagent check the build with /design-review, let the user try it, and ship.
- **A new feature or a larger change:** build it with /planning, and work through the behavior cells in that build.

After the build, show each change on the canvas as before-and-after screenshots.

## The canvas

Every piece of work uses the same layout, so the user only has to learn it once. Each page reads left to right, then down.

- **Page:** one per piece of work in the project's Paper file, named after the target and the start date.
- **Overview card,** top left: the target, the dates, the cells in order with their frames and the current one, open calls with your pick, and what's next. Name each call the way its frame does.
- **Before and after,** right of the card: each screen of the target as it was at the start and as it is now, side by side, in the order people see them.
- **Frames:** one per iteration, left to right in the order you made them, three per row, 80 px apart.
  - Name each one `<n> · <layer> × <level> · <note>`, such as `15 · Structure × Component · every part`.
  - Lay it out as Before notes, Before, After, After notes, so the two screens sit side by side. The Before is the last After, or today's screens at the start. The After is a copy of the Before with only this iteration's changes.
  - Number the markers and put each next to what it points at, never on top of it (Ginns, 2006). On the Before, each gap is red, with a note on what's wrong. On the After, the same number is green if fixed, gray if left as is, or amber if it's the user's call, with a note on what changed or why not.
  - Put calls under the After: the options side by side, one line each, with your pick outlined.
- **Colors:** red means still wrong, green fixed, gray left as is, and amber the user's call. When the user decides, the marker turns green.

Paper drops new artboards wherever there's room, so move each one into place. Name artboards when you create them, because renaming cuts names to 50 characters.
