---
name: designing
description: Design or change product UI, from a new feature to an overhaul to polish, on a Paper canvas, cell by cell. Each cell gets one review and one frame, which the user follows and steers. Use for "design X", "redesign Y", "improve", "polish" or "iterate on" a journey, page or component, for fixing what a design review found, for feedback on a design, a customer request that changes what users see, and the UI part of a spec before the user approves it. Skip it for copy-only edits and for UI bugs with a known fix.
argument-hint: "<target> [levels] [layers] [guides]"
---

# Designing

Use this skill to design or change a product's UI on a Paper canvas, one cell at a time: for each cell, you get a review, fix what it found, and draw one frame for the user. The user is whoever asked for the design. People are the people who use the product. For cells, levels, and layers, see design-knowledge's `SKILL.md`.

## Principles

Follow these principles at every step. Each one gives its reason, so that you can apply it to cases that it doesn't name.

- **Let the user decide direction and scope.** It's their product, so they make the decisions that change the direction or scope of the work, or that undo something they chose. You make the rest. For their decisions, draw the options with your pick, and keep working on your pick until they answer, so that the work doesn't wait on them. Offer only options that a strong designer would choose, because each option costs the user time.
- **Get a review from someone who didn't make the design.** You know why you made each choice, so you can't see the design the way people will, and if nobody reviews it, the user becomes the reviewer. Show the user only frames that a reviewer has checked. Have a subagent review each cell with /design-review. Keep the same subagent for all the cells in a layer: it remembers what it asked for, so checking your fixes stays quick. Your brief can point the reviewer at what worries you, but it can't leave anything out, such as the references, a role, or a frame, because what you leave out is what you can't see yourself.
- **Work through the cells in order.** Each decision depends on the ones before it, so the order that design-knowledge gives rarely sends you back. Before you start a cell, list every part in it, so that you don't skip any.
- **Look at references before you draw.** Designers who see examples early produce more creative work than designers who see them late (Kulkarni, Dow, and Klemmer, 2014), and the user can't judge your pick without seeing what else exists. Find what answers the cell's question:
  - If the product already has a part that does the same job well, follow it, because people already know how it works.
  - If the part is new, or if today's version is what you're changing, look at how the best products handle it. Put what you looked at on the canvas, next to your frame.
  - Follow the conventions that most good products share, but never take one product's look. When the work sets the product's look, such as a visual language or a restyle, write down what each reference decided, starting with the whole page, as "Product standards" in design-knowledge describes, and use that record to widen your options, because a look copied from one product makes ours pass for that one.
  - Aim as high as the best products, even when it's a big change from today, because small steps keep today's habits.
- **Design with real data and every version.** Draw every version that people will see, including the extremes of everything that varies: the shortest and longest data, one item and many, the narrowest and widest windows that people use, and the largest text size. A design that you draw only for the common case fails in use, and a design that you check only against rules is correct but not good.
- **Fix the cause of each finding.** A finding is a symptom, and one decision often causes several gaps (Kara Pernice and Rachel Krause, NN/g, 2024). Fixing each symptom separately adds weight and creates the next round's gaps. For the method, see step 2 in [Design each cell](#design-each-cell).
- **Explore before you refine.** When a cell decides what the design is, such as the concept or the flow of new work, draw two or three directions with different structures before you polish any of them, and let the user pick. Include the smallest change that fixes the cause, and "change nothing." First ideas tend to repeat what you've already seen (Jansson and Smith, 1991), and you won't feel unsure about your first idea when it's the only one you've drawn. When the user decides a choice about the look, name what most products do, then draw options from that default to the most unusual one that a strong designer would choose, each justified by one of the product's ranked qualities, because the user can pick only what you drew.
- **Remove what people wouldn't miss.** Every element takes attention from the rest of the screen (Jakob Nielsen, 1994). A reason for an element isn't enough, because you can find a reason for almost anything. Ask instead whether people would do their job worse without it. Fixes add weight one at a time, so after each change, look at the whole design and check what you can remove (Schön, 1983).
- **Show the user what changed and what to decide.** The user steers by looking, so put every change on the Paper canvas, next to what was wrong before, together with the open calls and where the work stands. For a layout to start with, see [Canvas](#canvas).
- **Keep the design in one place.** Keep it on Paper until the user approves it, and in code after that. Two copies drift apart, and then nobody knows which one is right. Take the values on Paper from the running app and the product's tokens, because the build copies them. Draw the product's screens as layers bound to tokens, not as screenshots, so that they can be measured and changed. Paper's tokens apply to the whole file, so to try new values, add a set of tokens for the work and bind only the new frames to it, which leaves earlier frames and other pages as they were.
- **Record each choice and why.** Write each choice that people would notice in `design.md`, with its options and why the others lost. Add each verdict that the user gives on the look to `standards.md`, in their words, so that the next designer and reviewer start from it. If the user asks why, answer from the record. Change your answer only if they show you a fact that you missed, because models tend to give in when someone pushes back, even when they were right.

## Before you start

If the work already has a `design.md`, continue from it and from the overview card on the canvas, which shows where the work stands. Otherwise, do the following:

1. Find the problem behind the request. Users often ask for a fix instead of describing the problem (Linear Method, "Manage design projects").
2. Write `standards.md`. For what goes in it, see "Product standards" in design-knowledge. Each reviewer starts with no context, so this file tells it who the people are and which products set the bar. Write it before you design, so that nobody adjusts it to fit the design.
3. Draw today's screens on Paper from the values that the running pages render.
4. Start `design.md` from `references/design.md`, in the same folder as `standards.md`.
5. Send the user one message. Confirm the problem, the target, the cells, and where to keep the files. Ask only for what the user alone knows, such as what customers said and what must stay the same.

## Design each cell

For each cell, in order, do the following:

1. Get the review.
2. Turn the findings into changes:
   1. Group the findings by cause.
   2. Fix each cause where it starts: in an earlier cell, in every place where the same part appears, or in every problem of the kind that the user pointed out.
   3. For each cause, choose the change that adds the least: remove something, reuse what exists, follow the best products, or, if none of these works, invent something. Where the product and the best products all do a part one way, keep that way and fix the cause elsewhere, because people already know it.
   4. Check what the change breaks elsewhere.
   5. If you disagree with a finding, leave it, and tell the reviewer why.
3. Draw one frame.
4. Tell the user in two sentences what changed and what's waiting for them.
5. Go to the next cell.

The user steers while you work, so keep going until they stop you or an unanswered call blocks the next cell. The user can ask for another iteration of any cell.

## Design the look itself

When the target is the product's look itself, such as a visual language or a restyle of every page, decide it from the top down before the style cells, because a value makes sense only once you know what it's for:

1. Take the qualities ranked in `standards.md`, and what each best product decided, from the same file.
2. List the choices that the look needs, starting with the whole page, such as size and density, weights, softness, surfaces and color, and then the form of each kind of thing that the product shows most, such as a person, a file, a state and an event, at each size it needs. Treat each as a question with options and the qualities that decide it (MacLean, Young, Bellotti and Moran, 1991).
3. For each choice, draw options from the default to something unusual, and let the user pick.
4. Name the roles, such as the page, a card, each text level, and the job of each color, and then give each role its value.
5. Draw the picks on one sheet of real parts, and then on real screens, including the densest screen and an empty one.
6. Have the reviewer put each screen beside the best products at the same size, and judge it as a whole against design-knowledge's `foundations/visual-language.md`.

## Build the design

When the Paper cells are done, build the design in the following steps:

1. Give the design and its open items to whoever asked for it, and get their approval.
2. Build a small change from the frames on a branch. For a larger change, use /planning.
3. Work through the behavior cells in the running build, because still images can't show how something responds and moves. For values that people judge by feel, add a live control (Interface Craft, "Live Tuning"). To compare versions of a behavior, add a switch (Emil Kowalski, "prototype").
4. Have a new subagent check the build with /design-review, and have it check your fixes again before the user tries the build, because a fix can break something else.
5. Let the user try the build, and then ship it.

After you ship, the design lives in code, so show later changes on the canvas as before-and-after screenshots of the build.

## Canvas

Lay out every piece of work the same way, so that the user knows where to look without reading the canvas first. Change the layout only when the user asks.

- **Page:** Create one page per piece of work in the project's Paper file, and name it after the target and the start date. Arrange the page left to right, then top to bottom.
- **Overview card:** In the top-left corner, show the target, the dates, the cells in order with their frames and whether a reviewer checked each one, the current cell, the open calls with your pick, and what's next.
- **Before and after:** To the right of the card, show each screen as it was at the start and as it is now, side by side, at every width you design, in the order that people see them. Update it and the card after every change, because they're the only place where the user sees the current design.
- **Frames:** Each frame is one artboard, so that its screens, notes and markers stay together. It records one step of the work: what the review found, what you changed, and the user's comments on it, so the user can follow the work one step at a time. Start a new frame for each review, and for each round of the user's comments on the current design, not for each comment. Once the next frame starts, leave the earlier frames as they are, because they're the record of each step. Place the frames left to right, three per row, 80 px apart. Name each frame `<n> · <layer> × <level> · <note>`, for example `15 · Structure × Component · every part`.
- **Frame layout:** Inside the frame, place the Before notes, the Before, the After, and the After notes in a row, and the references under them. Show each screen at 1:1: a page whole, and a component or a primitive cropped to the part that changed, with enough around it to see where it sits. The Before is the previous After, or today's screens at the start. The After contains only this iteration's changes. When the step offers directions, the After holds each one side by side, at the same size, with your pick outlined.
- **Markers:** Mark the exact area each note is about. Outline the element, or the empty spot where something is missing, in the marker's color, and put the number on the outline's corner, outside the element so that it covers nothing. People connect a note to its part only when the two sit together (Ginns, 2006), and a marker in a margin or beside a whole section makes the user search for what it means. A note about several places gets its number on each. Use the same number for a gap on the Before and its fix on the After. In each side's notes, say what was wrong or what changed. Then check the screenshot: each number touches the outline of the element its note names.
- **Calls:** Under the After, show the options side by side, one line each, and outline your pick.
- **References:** Under the frame's row, show the screenshots that informed the step. Under each one, give its source and what it means for this design.
- **Colors:** Use red for still wrong, green for fixed, gray for left as is, and amber for the user's call. When the user answers a call, change its marker to green.
- **Paper:** Paper places new artboards wherever there's space, so move each one into place. Name each artboard when you create it, because renaming truncates names to 50 characters.
