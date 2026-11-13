---
name: design-review
description: Judge a UI or a design with fresh eyes, and never change it. It returns gaps with proof, on the Paper canvas and in chat. Works on a running UI, a Paper design or a build. Use when the user says "review this", "design review", "UX review", "audit", "what's wrong with", "second opinion" or "check the build". To have the gaps fixed, use /designing.
argument-hint: "[what to review: a journey, a page, a component or the details] [structure|style|behavior, or a guide]"
---

# Design review

A review judges and never edits: it finds where a design falls short, proves it, and shows it. Fixing is /designing's work.

The steps below are the usual way to a judgment the user can trust and act on, not a script. When a case calls for it, change, add or drop a step, keep what it was for, and say what you changed and why. Three things hold in every case: the review never edits, the look comes from agents that had no part in the design, and every gap has proof.

The look comes from agents that didn't make the design and have none of its author's reasons or its owner's opinions, because models rate their own work above others' (Panickssery et al., 2024) and drift toward what the person they talk to believes (Sharma et al., 2023). A session that starts with the review, before the user has said what they think of the design, is such an agent. The words come from the /design-knowledge skill's `SKILL.md`, "Levels, layers and guides".

## 1. Set up

- **The target:** what the user named and what is inside it, in every state, where it appears, such as a dialog over its page. For the whole product or one quality across it, such as empty states, take a sample: every page of each journey, one page of each kind, the pages most people see, and a few at random (W3C, WCAG-EM 2.0).
- **The input:** a running UI (a URL, or a branch and how to run it, with a sign-in for each role and a way to reach each state), a static design such as a Paper frame, or a build with the canvas it was built from. For a change, also the version before it. Code alone can't show what people see: without a running UI or a design, ask.
- **The standards:** `standards.md` from the caller, or written now as the /design-knowledge skill's `SKILL.md` describes under "Product standards".
- **The scope:** the whole target, or the level, layer or guide the user or the caller names. Its guides are those of its layers, and each pattern guide whose page or task the target includes (design-knowledge's `SKILL.md`, "Levels, layers and guides").
- **The canvas:** the caller's page, when /designing called this skill. Otherwise list the user's Paper files and pick this project's file and the work's page, as designing's `SKILL.md` says under "The canvas", or ask whether to create one.
- **A folder** for the run, outside the repo, for screenshots and notes.
- **The states:** every state of the target at each width it is judged at, captured once into the folder, each screenshot with the DOM or Paper's styles behind it. Finders work from these and open the UI only to operate it or to measure what the captures don't show: finders working at once on one app change each other's state, as when viewing a page marks it seen.

When the user called this skill, confirm this with them once. When /designing called it, its framing is the confirmation.

## 2. Look

Start one finder for each guide in the scope, on Sonnet at high effort unless the user asked for another, because a short list run rule by rule misses less than a long one held in mind: models follow fewer instructions the more they are given at once (Jaroslawicz et al., 2025). Give each only this file's "How to look" and "What to return", its guide, the target and the input, the captured states, `standards.md`, the folder, and the canvas to judge, never why anything on it was made. When the finders find no gaps, start one more for the best work. For a build, start the two finders under "Checking a build" instead.

When this session is itself such an agent, as the top of this file says, look yourself instead, one guide at a time, as "How to look" says.

Merge what the finders return: gaps in the same place with the same cause are one, and the most concrete stays.

## 3. Post

Draw the review as designing's `SKILL.md` says under "The canvas". When /designing called this skill, mark the frame it names: the gaps on its Before, or, for a check, the result of each change on its After. Otherwise add a frame of the screens as they are, under the label "Before", with the note "review, no fixes", on the work's page, or on a new page with the overview card when the work has none. Each gap and each difference from the best work is a red marker with its number and one-line title on the screen where it shows. The open gaps go in the overview card's grid, by level and layer.

In chat, give the same list in the same shape, short. When the user called this skill, end with the next step: /designing takes the review as its start. When /designing called it, return the list to it.

## How to look

- **Use it.** Open a running UI in a real browser (/agent-browser, in a session of your own). A model that uses a UI finds more than one that reads screenshots (Mishra et al., 2026). The canvas may show a change the running UI doesn't have yet: judge that change on the canvas.
- **Walk it** as each person in `standards.md`, with their real case, from where they start: a link, the navigation, an empty account. At each step, will they know what to do, notice the control that does it, connect it with what they want, and see that it worked (Wharton et al., 1994)? What did they come for that isn't there? You know more than they do, so first write what someone who knows only what `standards.md` says would try, and try that. For a part, ask what it is for on its page, who reads it and what they need from it.
- **Operate** every control in every state, including a second click during a save, Back, and a reload halfway through a change. Reach each condition: empty, loading, partial, error and no access; each role; a slow, offline or failing network; one item and ten times the real count; 360 and 1440 px wide; each theme. Take the worst data from what each value allows, not from typical data: the limit its schema or column sets, and its longest, shortest and oddest real forms (Emil Kowalski, "break-ui"). Run each motion forward, backward and interrupted.
- **See it:** blur the page until the text can't be read, and list what stands out, in order: it should be what the job needs first. Count what competes: type sizes, colors, radii (design-knowledge's `scripts/style-inventory.js`). Check alignment with `scripts/layout-overlay.js`. Go over each page region by region at 2x.
- **Every rule of your guide, one at a time,** after using it: list the rules at the target's levels, as design-knowledge's `SKILL.md` says, then read each in full and run its Check on every part it applies to, such as each entry's controls side by side. Write down for each rule: fails (where), passes, or doesn't apply. The look is done when every rule has an answer, not when nothing more comes to mind. This is a heuristic evaluation's second pass, which checks each element against the list (Moran and Gordon, NN/g, 2023).
- **Consistency** with the rest of the product: the same names and concepts as other pages, the same action working the same way, the same components, tokens and scales.
- **The best work,** the job of its own finder: at the moments people remember (the first use, the hardest moment, the end, the action they repeat most), compare it with the references in `standards.md`, side by side at the same size, with their values measured in their own pages (design-knowledge's `scripts/style-inventory.js`).

**Proof.** Noticing is not a finding. A gap needs proof you saved: a step where the person can't go on, reproduced; a measurement from the DOM or Paper's styles, never from a screenshot (Xiang et al., 2026); or a rule read in full, with its "Applies when" and "Not a fail". Count instead of judging: "four background colors", not "too many". Name the place: the element and its words. For a change, reproduce the gap on the version before it, and say whether the change brought it. A screenshot is proof only when it shows the state, width and theme it claims, after motion has stopped.

**When standards conflict,** a rule marked Every product holds whatever the product chose. The product's own rules come before current practice, and a value marked "default" is a starting point: departing from either is a gap only when you can name the harm.

## Checking a build

The check before shipping, of a build made from an approved design. It doesn't reopen the design: a gap is where the build differs from its approved screen, or what the canvas couldn't show. Two finders look, each with "How to look", "What to return" and the captured states:

1. **Against the canvas:** each page against its approved screen, at the same width; every other page that uses a shared part the build changed, such as a component or a token; and the lines the change removed, where a lost name, focus style or reduced-motion guard is a gap (interfaces plugin, "interface-review").
2. **What the canvas can't show,** with the accessibility guide and the rules behind each check:
   - an accessibility scan (axe) of every page and state;
   - the keyboard alone;
   - what a screen reader gets, in the accessibility tree;
   - 320 px wide and 200% zoom;
   - reduced motion, forced colors and every theme;
   - the styles in use against the product's tokens (design-knowledge's `scripts/style-inventory.js`).

## What to return

1. **The judgment,** in a few sentences: can each person do their job, and where is the design weakest?
2. **Each change on the canvas:** better, no different, worse or too close to call, in the whole around it, with a line of evidence. Say too close rather than guess: on close pairs, models pick the better design only slightly above chance (Wu et al., 2024; Luera et al., 2025).
3. **Every gap you can prove:** a step where a person in `standards.md` can't go on, a rule of the guides or of `standards.md` that the design breaks, or a place where it differs from the rest of the product. List them by layer (structure, then style, then behavior), worst first within each and numbered through. Don't stop at a number: one look finds under half of what expert inspectors find (Campos et al., 2025). Each gap has:
   - a number and a title of a few words;
   - one level, the part that falls short, and one layer: when a gap shows in two layers, the earliest its cause is in, because each layer builds on the one before;
   - the rule it breaks, by guide, number and title; the step where the person can't go on; or the place in the product that does it differently;
   - what is wrong, counted, measured or quoted, and who it costs what;
   - the proof: the screenshot's path, the gap's place on it, and the code's file and line when you found it.

   A gap in a shared part, such as a component, a token or a guideline, is reported once, at that part, with the places it shows (interfaces plugin, "better-interface"). A gap names the problem, never its fix.
4. **What the best work does better:** each difference, numbered on from the gaps, with its level, the reference and where to see it, and what it does better, measured where it can be.
5. **What held up,** a line for each guide checked: what meets its rules and a change could easily lose, so /designing keeps it.
6. **Unproven items,** each with what would prove it.
7. **What you didn't cover,** and why.
8. **Questions only real users can answer,** each with its cheapest test, such as a usability test with five users (Nielsen, 2000).
