---
name: designing
description: Design or change product UI, from a new feature to an overhaul to polish, on a Paper canvas, in iterations the user can follow and steer. Use for "design X", "redesign Y", "improve", "polish" or "iterate on" a journey, page or component, for fixing what a design review found, for feedback on a design, a customer request that changes what users see, and the UI part of a spec, before it is approved. Skip it for copy-only edits and for UI bugs whose fix is known.
argument-hint: "[what to design or change: a journey, a page, a component or the details] [structure|style|behavior, or a guide such as copy or color] [number of iterations]"
---

# Designing

When a step names a skill (/name), invoke it with the Skill tool at that step.

You own this design and its result. Make each choice yourself, be able to say why, and find its problems before anyone else does. Here "the user" is whoever asked for the design, and "people" are those who use the product.

The steps below are the usual way to the best result, not a script. When a case calls for it, change, add or drop a step, keep what it was for, and tell the user what you changed and why: a small change, for example, starts with a few lines. Three things hold in every case: what is the user's to decide stays theirs; a fresh agent, not you, checks what you made; and the design is settled on Paper, so the product's code changes only after the user approves it, while a prototype lives on its own branch.

Designing is a search: for the real problem, then for the form of the answer (Karri Saarinen, "Design is more than code", 2025), then for how far that form can be pushed, since great work is rarely the first idea and most work stops once the plain problems are fixed (Interface Craft, "Conceptual Depth"). The design-knowledge guides are the floor: a design that meets them all is well made, not yet good.

The words come from the /design-knowledge skill's `SKILL.md`, "Levels, layers and guides": a **level** is the part the work looks at (journey, page, component or primitive), a **layer** is the kind of decision (structure, style or behavior), and a **guide** is the subject it is checked against; that section says which guides belong to each layer. Two habits run through all of it:

- **Judge what people will see by looking at it.** A change has effects nobody intended, and only looking finds them (Schön, 1983).
- **Do less, and finish it.** The simplest way to raise quality is to cut scope (Karri Saarinen, "10 rules for crafting products that stand out", 2025). Every element has a reason in the person's job, or it goes.

## 1. Start

When `design.md` already exists, read it and go on from its "Where it is". When /brainstorming started the work, start from the spec's problem, people and decisions, and ask only what they leave open.

Otherwise put the work in `docs/specs/YYYY-MM-DD-<slug>/`, next to the spec when there is one, and do these in order before any design.

1. **The problem.** A request often names a fix. Find the cause behind it (Linear Method, "Manage design projects"): is the problem real, who has it, and what happens if nothing is done (Saarinen, "Design is more than code")? Name its level and its layer.
2. **Today.** Walk the current UI as the people who have the problem, through every state the change touches, and read its code: the components, the tokens, and the data the product has. Write down what it does well, so the new design keeps it. Its gaps are the first review's to find, with proof.
3. **The canvas.** List the user's Paper files and pick this project's file; when none fits, ask whether to create one. Continue on the work's page, or start one as "The canvas" says. When a /design-review started this work, continue on its page: its frame shows today's design and its gaps, and they come first.
4. **The user.** In one message, confirm the problem as you understand it, the target and what is left out, where to start and the canvas, and ask only what only they know: what customers said, a constraint (Saarinen, "Design is more than code"), what must stay as it is, and what would make a polished result still feel wrong (impeccable, "shape").
5. **The standards.** Write `standards.md` as the /design-knowledge skill's `SKILL.md` describes under "Product standards".

Then start `design.md`, in the format of `references/design.md`.

## 2. Order

A design is settled one layer at a time, in order: structure, style, behavior.

Each piece of work answers a question, and is made in the medium and to the finish that answer it for whoever must judge it (Houde and Hill, 1997; Interface Craft, "Separation of Concerns"). Structure is words for the concepts and rough screens for each step of each flow. Style is screens at full size in Paper, with the product's primitives shown on their own when the work changes them. Behavior is drawn where it can be, such as a pressed or focused state, plus a running prototype, on its own branch and built from the product's real components, for responses and motion that have to be felt. In the prototype, a value judged by feel, such as motion timing or density, gets a live control (Interface Craft, "Live Tuning"), and versions of a behavior, such as two ways a panel opens, sit behind a switcher that shows one at a time, full size and in place, since stills can't compare them (Emil Kowalski, "prototype").

- **Start at the first layer with an open question,** or where the user says. Most new work has a structure question, however small: a "Last seen" column in a members table must first settle what "seen" means, and what the cell shows for a member who never signed in. Polish leaves structure as it is unless a gap's cause is there, and style starts from the product's own primitives, changing them only when the work calls for it.
- **Inside a layer, settle first what other parts depend on:** structure goes top-down, the whole before its parts; style and behavior go bottom-up, the shared primitives before what uses them.
- **The whole design goes through each layer together.**
- **One kind of part goes deep early:** a part the concept depends on and nothing existing shows, such as a new interaction. Give it a rough prototype of its own while the structure is being settled, to learn whether the direction is worth following.
- **Fix a problem where its cause is,** even in an earlier layer. When the pages show a fault in the flow, or the gaps stop falling from one iteration to the next, look for the cause in the flow or the concepts, change it there, then redo what that remakes. A finished layer, a choice the user made, or anything outside the target reopens only when they agree.

## 3. Iterations

An iteration settles one scope: a fresh review finds its gaps, you fix them all, and a second fresh review checks the result, so the user sees one whole change and whether it worked.

1. **Scope.** Take what the user named: a part, a level such as "the details", a layer or a guide. Fill in what they left out: the work's target, the first layer that isn't finished, and all its guides. When one frame can't show the whole target, take its parts one at a time, in the layer's direction.
2. **Review.** Run /design-review on the scope, unless the last check covered it and nothing in it has changed since. When there is a prototype, it is part of the input, with seed data that looks real and includes the worst cases, a sign-in for each role, and a reset for what happens only once. When the layer's question is open, the first iteration makes directions instead (below).
3. **Fix every gap** the review proved: fix it; decline it with a one-line reason, when it isn't real or its fix costs people more than it gains; or, when it is the user's call, draw the options and go on with your pick. It is their call when the options all meet the standards and differ in taste, direction or scope, or when it changes something they chose. A gap whose cause is outside the scope stays open in its cell on the card for a later iteration; one outside the target goes under "Still open" in `design.md`.
   - The before is each screen as it stands: its latest version on the canvas or, the first time, what people have today, even when a new direction replaces it. Draw that first one in Paper from the values the running page renders, so it can be measured and changed, and compare it with a screenshot of the page so it shows what people see. A part that isn't HTML, such as a chart or an embedded payment form, can stay a picture inside it. The after is a copy of the before changed only by this iteration.
   - When a rule says what right looks like, apply it. When a real choice is open, make 2–3 versions that differ in structure, side by side, and choose by looking. The first idea is a familiar one (Jansson and Smith, 1991), and versions of one idea are one option (Interface Craft, "Conceptual Range").
   - Reuse before you add: remove something; use what the browser provides or people know from other products, since they expect a part to work as it does in the products they already use (Nielsen, 2023); reuse the product's own component, token or word; correct a value; only then add something new (interfaces plugin, "better-interface").
   - Must-haves that need no design choice, such as contrast, target sizes, accessible names and focus order, never take an iteration of their own: every change follows them.
4. **Check.** Run /design-review on the after, with the same scope and the before, because you judge your own work too kindly to be its judge (Panickssery et al., 2024). Undo each change it finds worse, and earlier changes this one made unneeded. When it can't tell which is better, keep what a measurement favors or the simpler one, and bring a matter of taste to the user. What it still finds starts the next iteration.
5. **Show it.** Draw the frame and update the overview card. When the run ends, tell the user in two lines what changed, what is left, and what waits on them.

**Steering.** Between runs the user steers in plain words. A run is one iteration, unless they give a number or say to run until the layer is finished; their calls don't stop it, since the after uses your pick until they choose. Stop early when the layer is ready to finish (section 4), or when the gaps stop falling: their cause is likely in an earlier layer (section 2).

**Directions.** When a layer's question is open, such as the concept or the flow of new work, or the look of a redesign, its first iteration makes whole directions. First see how others solve the same job: search Mobbin's flows and screens by the job, not by this product's names, and open the products in `standards.md` and those you find. Look early, and look at several that differ: designers shown one example reuse its features (Jansson and Smith, 1991), and examples seen early and again while working led to more creative work than examples seen late (Kulkarni, Dow and Klemmer, 2014). Write down each distinct approach, where you saw it and what it costs people; the most common one is the conventional direction. Then explore freely, without judging yet whether an idea can be built or fits the product's parts (Linear Method), until at least three differ in structure. To get past the familiar: remove a constraint (what if the person did nothing, what if this were not a screen), turn the problem around, borrow from another field, or push one of the product's qualities as far as it goes (Interface Craft, "Conceptual Range"). Keep "change nothing" among them. Walk each as the person. Before you pick, check in the code that the product has what the direction needs, and test it on the simplest and the most complex real case. The frame shows each direction while it is still rough, with the references it came from and your pick, and the choice is the user's call: ask which one, and what you have missed about the problem (Linear Method). Showing several also gets honest criticism: people shown one design praise it more and criticize it less than people shown three (Tohidi et al., 2006).

**Choices.** A choice is important when people would notice it, when it is costly to undo, or when other pages will copy it. Record each in `design.md`: the question, the options, the pick, and why the others lost (MacLean et al., 1991). A choice copied from a component, a reference or today's screen isn't made until you have checked it in its new place, and a choice you can't give a reason for is a guess: make it, or remove what it produced.

## 4. Finish a layer

A layer passes when a review of all of it finds no gaps. That makes it well made, not yet good, so the iterations go on with what the review finds next: what the best existing work does better at the moments people remember, the first use, the hardest moment, the end, and the action they repeat most (Kahneman et al., 1993; Fessenden, 2022). Take each difference that fits the product's qualities, decline the rest with a reason, and bring close ones to the user side by side. Give the rare states the finish of the main path: the empty page, the error and the edge case are where care shows (Interface Craft, "Uncommon Care"). Delight never costs a more basic need: a product must do the job, work every time and be easy to use before it can please (Aarron Walter, 2011, through Fessenden, 2024).

When nothing more is worth taking, ask the user to move on. Their yes finishes the layer: it approves its frames and settles its open calls.

## 5. The user

The user's time goes to what only they can decide. Each frame brings them its calls, side by side with your pick, and waits for their OK; one OK can cover several frames. When they approve, bring "Before and after" up to date, with their picks.

What the user says about the design is one of three things:

| They | Treat it as | Do |
| --- | --- | --- |
| Ask a question | A test of the design | Answer from `design.md`: the choice, the options it beat, and what decided it. Change nothing, unless the question brings a fact, a constraint or a flaw the record lacks; then name it, and change the record and the design. When the record has no entry, say so, and make the choice now, as section 3 says, with what exists as one option. Never give a reason made up afterwards |
| Name a problem | Real, unless a fact says otherwise | Choose the fix yourself |
| Name a fix | A proposal | Find the problem behind it, then test the fix against the standards and the other options. Where it loses, say so, and why. The decision stays theirs |

Models give way when a person pushes back, even when they were right (Sharma et al., 2023). What the user says is a sample: it stands for a kind of problem at some level and layer. Find the kind and where it sits, and fix it everywhere. A change that remakes a journey or a whole page gets its layer checked again.

## 6. Build and hand over

When every layer is finished, finish `design.md` and give the user its list of what is still open, what no review could check, the assumptions in `standards.md`, and the questions only real users can answer, each with its cheapest test. When /brainstorming started the work, hand back to its approval, which covers the spec and the design together. Otherwise ask the user to approve the design, then:

- **A change to a UI that exists, small enough for one branch:** build it on a branch, the prototype's when there is one, taking every value from Paper. Then run /design-review on the build. Fix what it finds, and bring the user only what needs their decision.
- **A new feature or a larger change:** a prototype is not production code. Building it is the /planning skill's work, when the user asks for it.

## The canvas

Every piece of work looks the same on the canvas, so the user learns it once: a case may add to these conventions, never change them. Its page reads like text, left to right and then down. At the top, the overview card and "Before and after" show where the work stands, and only they change. The frames below them are its history.

- **The page:** each piece of work has its own page in the project's Paper file, named after its target and the date it began, and continues there until it is finished.
- **The overview card,** at the top left, says where the work is and what waits on the user, in as few words as it can:
  - the target and the dates;
  - a grid of the four levels against the three layers. Each level names its parts in the target in a few words, or "none". A layer is headed "now" while the work is in it, and "done" once the user's yes finishes it. A cell shows a green ✓ when the last review found no gaps there, a red count of the gaps still open, or nothing before any review, and an amber count of the calls waiting there;
  - what waits on the user, with how many in the heading: each frame to approve and each call, named as the canvas shows them, such as "Frame 7 · call 1", each with your recommendation;
  - what comes next, in a line.
- **Before and after,** to the right of the card: each screen of the target (a page, one of its states, or a step of a case it touches), as it was when the work began and as the user last approved it, side by side and named under it, in the order people meet them. A journey gets one row per step, with that step's states and widths left to right. A screen that didn't exist says so; the words for the concepts and changed primitives get rows of their own.
- **The frames,** one per iteration or review, go left to right in the order they were made, three to a row and 80 px apart, so the page keeps about the shape of a screen and reads as one. A frame stays as drawn: nothing is merged into it, redrawn, taken out or moved.
  - **Name:** the same parts in the same order, so the user learns the categories over time: `<n> · <what> · <level> · <layer> · <guide> · <note>`, such as `8 · Prompt · Component · Style · all guides · lighter weight`. n counts every frame of the work; what is the part, or the target when the frame covers all of it; "all layers" or "all guides" when nothing narrowed them; the note says in a few words what the frame did. Under the name: how many gaps were found, fixed, left as they are and left to the user, and how many are still open.
  - **Columns:** an iteration's screens before and after, side by side, the same screens in each, with changed primitives on their own and on one real page. The labels over the columns also say what kind of frame it is: "Before" and "After"; "Before" alone for a review that fixes nothing; "Today" and one column per direction; "Reference" beside them when comparing with the best work; "Approved" and "Build" for a build.
  - **Markers:** the gaps are numbered from 1 in each frame, each with a one-line title beside what it points at, not over it, so the eye doesn't travel between a note and the picture (Ginns, 2006). On the Before, every gap is red; on the After, it is green where it was fixed, gray where it was left as it is, amber where it waits on the user, and red where the check still finds it. A gap the check finds for the first time goes on the next frame's Before. A difference from the best work is marked like a gap.
  - **Beside the screens,** one line per gap: its level, the rule it breaks by guide and number or the reference, what was wrong, counted or measured, and what changed. Under the After, each call shows its options side by side, each with its idea in a line, and your pick.
- **Four colors, one meaning each,** on frames and on the card, and no other color means anything: red is still wrong, green is fixed, gray is left as it is (the reason is beside the screens), and amber is waiting on the user. Amber outlines each frame they haven't approved and marks each call, and the card lists both. It is the only thing that changes on a drawn frame: it comes off when they answer, and a call's marker turns green like the other changes in its frame.

Paper puts a new artboard wherever there is room, so move each one to its place after creating it. Name it when you create it: renaming cuts a name to 50 characters.
