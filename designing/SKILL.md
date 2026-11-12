---
name: designing
description: Design or change product UI, from a new feature to an overhaul to polish, on a Paper canvas, in small iterations the user can follow and steer. It finds the problem behind the request, tries several directions when the answer is open, then works depth by depth (structural, behavioral, visual), one level and one guide per iteration, with each important choice recorded and defended. Before each depth locks, /design-review checks it with fresh eyes. Small approved changes to an existing UI are built on a branch; larger ones go to planning. Use for "design X", "redesign Y", "improve", "polish" or "iterate on" a journey, page or component, for fixing what a design review found, for feedback on a design, a customer request that changes what users see, and the UI part of an approved spec. Skip it for copy-only edits and for UI bugs whose fix is known.
argument-hint: "[what to design or change] [structural|behavioral|visual] [number of iterations]"
---

# Designing

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Working from memory of a skill is not following it.

You own this design. Make each choice yourself, be able to say why, and find its problems before anyone else does: the user should never have to point out a problem that a review would find. Here "the user" is whoever asked for the design, and "people" are those who use the product.

Designing is a search: for the real problem, then for the form of the answer (Karri Saarinen, "Design is more than code", 2025), then for how far that form can be pushed, since great work is rarely the first idea and most work stops once the plain problems are fixed (Interface Craft, "Conceptual Depth"). The design-knowledge guides are the floor: a design that meets them all is well made, not yet good.

The words come from the /design-knowledge skill's `SKILL.md`, "Levels and depths": a **level** is the part (journey, page, component or primitive), a **depth** is the question (structural, behavioral or visual), and that section says which guides serve each depth. Two habits hold through every step:

- **Judge what people will see by looking at it.** A change counts once you have looked at its result, because a change has effects nobody intended, and only looking finds them (Schön, 1983). A concept can be weighed in words. A page can't.
- **Do less, and finish it.** The simplest way to raise quality is to cut scope (Karri Saarinen, "10 rules for crafting products that stand out", 2025). Every element has a reason in the person's job, or it goes. Remove before you add.

## 1. Frame

When `design.md` already exists, read it and go on from its "Where it is". Feedback on a design goes to step 5.

Otherwise put the work in `docs/specs/YYYY-MM-DD-<slug>/`, next to the spec when there is one, and do these in order before any design. A small change, such as polish of something that exists, gets a frame of a few lines.

1. **The problem.** A request often names a fix. Find the cause behind it (Linear Method, "Manage design projects"): is the problem real, who has it, and what happens if nothing is done (Saarinen, "Design is more than code")? Name its level and its depth, and check one level up that an answer fits there (Eliel Saarinen, quoted in *Time*, 1956).
2. **Today.** Walk the current UI as the people who have the problem, through every state the change touches. List its problems, each with the element and the harm it does, and what it does well, so the new design keeps it. Read its code: the components, the tokens, and the data the product has.
3. **The user.** Tell them the problem as you understand it, and ask only what only they know: the customer, what was said, a constraint, their taste (Saarinen, "Design is more than code"), and what would make a polished result still feel wrong (impeccable, "shape").
4. **The standards.** Write `standards.md` as the /design-knowledge skill's `SKILL.md` describes under "Product standards".
5. **The canvas.** List the user's Paper files and pick this project's file and the page this work belongs on; when none fits, ask whether to create one. The work gets one dated section below everything already on the page. When a /design-review board started this work, continue in its section, below the board, and take its gaps first.

Then start `design.md` in the format of `references/design.md`, and confirm with the user once: the problem, the target and what is left out, where to start, and where the canvas is.

## 2. Top down

A design is settled one depth at a time, in order: structural, behavioral, visual. Each depth settles what costs more to change later than the next.

| Depth | Settles | Made in |
| --- | --- | --- |
| Structural | What the thing is: its concepts, the steps of each journey, what each page and part holds and why, in the real words | Words for the concepts; a rough board for each step of the flow |
| Behavioral | How each part answers, in every state and condition: presses, waits, failures, undo, what each motion is for and which way it goes, and what a keyboard and assistive technology get | Boards for the states. For behaviour that has to be felt, a running prototype on its own branch, built from the product's real components |
| Visual | How each page and part looks: what leads, where things sit, type, color, surfaces, and the timing of motion, which follows the sizes set here | Boards at full size in Paper; motion timing in the prototype |

- **Start at the first depth with an open question,** or where the user says. Most new work has a structural question, however small: a "Last seen" column in a members table must first settle what "seen" means, and what the cell shows for a member who never signed in. Polish of something whose structure stands starts later.
- **The whole design passes each depth together,** and each part is judged in its next larger context: a component on its page, a page in its journey. A finished part may be cut when what is around it changes (Brad Frost, *Atomic Design*, 2016).
- **Once a direction is chosen, what the product already has comes in finished:** its components, tokens and names. A new part needs a reason the existing ones can't meet.
- **One kind of part goes deep early:** a part the concept depends on and nothing existing shows, such as a new interaction. Give it a rough prototype of its own while the structure is being settled, to learn whether the direction is worth following.
- **Before each piece of work, name the question it must answer,** and work in the medium and to the finish that answer it for whoever must judge it (Houde and Hill, 1997; Interface Craft, "Separation of Concerns"). Build a prototype when behaviour has to be felt to be judged, or the user asks for one; otherwise the work ends on the boards.
- **Go back when a depth teaches something.** A problem is fixed where its cause is: when the pages show a fault in the flow, change the flow, then redo what that remakes.

## 3. Iterations

At every depth the work goes in iterations small enough for the user to follow. One iteration:

1. **Pick.** In the current depth, take the highest level that isn't done. Look at it as the people in `standards.md` meet it, with the rule headings of the depth's guides in mind, and choose the guide whose rules it breaks worst; say why in one line. Read that guide in full and take its 1–3 worst gaps: those that cost the most people the most. Gaps below the bar, where the design fails people or its detail is unfinished, come before gaps to the best work. Where nothing is drawn yet, the first version of the part is the iteration's work: start from the product's own component for it, or else the platform's standard one, since people expect a part to work as it does in the products they already use (Nielsen, 2023), and depart from it only where a gap or one of the product's qualities calls for it. Tick a guide at a level on the overview once nothing worth fixing is left under it; a level is done when all its guides are ticked.
2. **Make it on Paper.**
   - The before is the part as it stands: the last after or, the first time, a screenshot of the running UI or a copy of the Paper frame. The after is a copy of it changed only by this iteration; when the before is a screenshot, draw the part in Paper from the values in its code.
   - When a rule says what right looks like, apply it. When a real choice is open, make 2–3 versions that differ in structure, side by side, and choose by looking. The first idea is a familiar one (Jansson and Smith, 1991), and versions of one idea are one option (Interface Craft, "Conceptual Range").
   - Behavior is drawn as its states, labeled. What can't be drawn, such as what a screen reader says, is written on the board.
   - Fix a gap where its cause is. When the cause sits in a locked depth or outside the target, stop and ask.
   - Reuse before you add: remove something; use what the browser provides; reuse the product's own component, token or word; correct a value; only then add something new (interfaces plugin, "better-interface"). Name anything new on the board.
   - Must-haves that need no design choice, such as contrast, target sizes, accessible names and focus order, never take an iteration of their own: every change follows them.
3. **Look** at the result, and at the whole it sits in, as the person in `standards.md` would meet it, with their real case. Note where you hesitate, where you expected something else, and what you looked for and didn't find (Interface Craft, "Noticing"). /design-review's "How to look" has the full method and the proof a gap needs.
   - Structural: walk it step by step. At each step, will they know what to do, notice the control that does it, and see that it worked? Read every word as they would.
   - Behavioral: operate each part in every state and condition.
   - Visual: each page at full size, then blurred until the text can't be read. What stands out first should be what the job needs first.
4. **Keep or go back.** Compare the after with the before, as a whole, and keep the better one. Undo earlier changes that this one made unneeded. When you can't tell which is better, don't decide by eye: keep what a measurement favors, or the simpler one, and hold a matter of taste for the user.
5. **Show it.** Add the iteration's artboard, update the overview, and stop. Tell the user in two lines what changed and what the next iteration would be.

**Steering.** Between iterations the user steers in plain words, such as "go", "5 more", "only copy", "do the empty state", "lock it" or "back to structural". Given a number, or told to run it through, go on without stopping, make the choices yourself, and list them for the user at the end.

**Directions.** When the concept or the flow is open, the options are whole directions. First see how others solve the same job: search Mobbin's flows and screens (its MCP) by the job, not by this product's names, and open the products in `standards.md` and those you find, using them where you can. Look early, and look at several that differ: designers shown one example reuse its features (Jansson and Smith, 1991), and examples seen early and again while working led to more creative work than examples seen late (Kulkarni, Dow and Klemmer, 2014). Write down each distinct approach, where you saw it and what it costs people; the most common one is the conventional direction. On the board, each direction shows the references it came from. Then explore freely, without judging yet whether an idea can be built or fits the product's parts (Linear Method), until at least three differ in structure. To get past the familiar: remove a constraint (what if the person did nothing, what if this were not a screen), turn the problem around, borrow from another field, or push one of the product's qualities as far as it goes (Interface Craft, "Conceptual Range"). Name the conventional direction as such, and keep "change nothing" among them. Walk each as the person. Before you pick, check in the code that the product has what the direction needs, and test it on the simplest and the most complex real case. Then show the user the directions (step 5) before you lay out the flow. A question inside a settled concept is a choice, not a set of directions.

**Choices.** A choice is important when people would notice it, when it is costly to undo, or when other pages will copy it. Record each in `design.md`: the question, the options, the pick, and why the others lost (MacLean et al., 1991). A choice copied from a component, a reference or today's screen isn't made until you have checked it in its new place, and a choice you can't give a reason for is a guess: make it, or remove what it produced.

**First what is wrong, then what would be best.** When nothing at a depth is plainly wrong, go to the moments people remember: the first use, the hardest moment, the end, and the action they repeat most (Kahneman et al., 1993; Fessenden, 2022). At each, ask what the best version would do, with the product's qualities and the best existing work as the measure. Then give the rare states the finish of the main path: the empty page, the error and the edge case are where care shows (Interface Craft, "Uncommon Care"). Delight never costs a more basic need: a product must do the job, work every time and be easy to use before it can please (Aarron Walter, 2011, through Fessenden, 2024).

**When an iteration doesn't help,** don't stop there. Give one thing all your attention, as if it were the only thing. Remove something. Say what isn't working, even before you know the fix. Look at the best existing work again. Make several versions and choose (Interface Craft, "Conceptual Depth"). When none of this improves the whole, the direction has reached its limit: go back to an earlier depth.

## 4. Lock a depth

A depth is ready to lock when the user says so or, when you run on your own, when every level in it is done and further iterations stop making it better.

You judge your own work too kindly to be its last judge, so before a depth locks, run /design-review on it, scoped to that depth. Give it the target, the input, `standards.md`, the depth and the boards, and, for a change to something that exists, the version before it. When there is a prototype, it is part of the input, with seed data that looks real and includes the worst cases, a sign-in for each role, and a reset for what happens only once. Never give it your reasons, or what the user said about the design. Its board goes into this section. Then:

- undo each change it found worse;
- fix the must-haves and inconsistencies it found on one artboard, "Lock · <depth>", and lock the depth;
- a design gap keeps the depth open: take it as the next iteration, or bring it to the user.

Never reopen a locked depth without asking. A small change that is easy to undo, such as a new column, a count or one state, needs one check, when it is finished.

When the iterations stop making the whole better, don't go on fixing: ask whether the cause sits at an earlier depth, in the flow or the concepts, and go back there if it does. If that was the user's decision, bring it to them.

## 5. The user

The user's time goes to what only they can decide. Besides each iteration, bring them:

- **The directions, while they are rough,** side by side, with your pick and the problem as you understand it. Ask which direction, and what you have missed about the problem (Linear Method). Show several: people shown one design praise it more and criticize it less than people shown three (Tohidi et al., 2006).
- **A close call that later work rests on,** as soon as it comes up, with the versions side by side, never one after another. A close call nothing rests on waits for the finished design.
- **The finished design,** after its last depth is locked.

When nobody can answer, as in an unattended run, take your pick and write that you did. In a prototype, a value judged by feel, such as motion timing or density, gets a live control, so whoever judges it feels the difference at once (Interface Craft, "Live Tuning"), when the repo has a tool for it or the user agrees to add one. Versions of a behaviour, such as two ways a panel opens, can't be compared as stills: build them in the prototype behind a switcher that shows one at a time, full size and in place, with a key for each version and one to replay (Emil Kowalski, "prototype").

What the user says about the design is one of three things:

| They | Treat it as | Do |
| --- | --- | --- |
| Ask a question | A test of the design | Answer from `design.md`: the choice, the options it beat, and what decided it. Change nothing, unless the question brings a fact, a constraint or a flaw the record lacks; then name it, and change the record and the design. When the record has no entry, say so, and make the choice now, as step 3 says, with what exists as one option. Never give a reason made up afterwards |
| Name a problem | Real, unless a fact says otherwise | Choose the fix yourself |
| Name a fix | A proposal | Find the problem behind it, then test the fix against the standards and the other options. Where it loses, say so, and why. The decision stays theirs |

Models give way when a person pushes back, even when they were right (Sharma et al., 2023). Before you change anything, learn why they said it: the design may be wrong, or they may have a different problem in mind (Linear Method). What the user says is a sample: it stands for a kind of problem at some level and depth. Find the kind and where it sits, and fix it everywhere. A change that remakes a journey or a whole page gets its depth checked again.

## 6. Build and hand over

When every depth is locked, add a last board to the section with:

- the choices made for the user, and the decisions that are theirs, each with your recommendation;
- what is still open, and what was never checked;
- the assumptions in `standards.md`;
- what the work added to the product: components, tokens, names;
- the questions only real users can answer, each with its cheapest test, such as a usability test with five users (Nielsen, 2000).

Finish `design.md` to match, and ask the user to approve the boards. Then:

- **A change to a UI that exists, small enough for one branch:** build it on a branch, in the codebase's own conventions, taking every value from Paper (`get_jsx`, `get_computed_styles`), never from a screenshot. Then run /design-review on the build: it compares each page with its board and checks what boards can't show. Fix what it finds, and bring the user only what needs their decision.
- **A new feature or a larger change:** a prototype is not production code. Building it is the /planning skill's work, when the user asks for it. If the design shows that the spec itself is wrong, tell the user before anything is built on it.

## The canvas

Every piece of work looks the same on the canvas, so the user learns it once:

- **The overview** is the section's first artboard, kept current: the target and date; a grid of the target's levels against the three depths, with each cell's guides marked done ✓, now ● or not yet ·; which depths are locked; what the work added to the product; the questions waiting.
- **One artboard per iteration,** below the last, named `<n> · <level> · <depth> · <guide>`, such as `5 · Page · Visual · Layout`:
  - on the left, a note 400 px wide: why this guide now, in one line; each gap, numbered, as what is wrong (counted, measured or quoted) and what changed; anything new it added; what comes next;
  - on the right, the before and the after, side by side at the same size, with the gaps' numbers as markers on both. A choice shows today, when there is one, and each version, each with its idea in one line, and the pick or "Your call".
- **/design-review's boards, "Lock · <depth>" and the last board** use the same note.
