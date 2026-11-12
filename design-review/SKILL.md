---
name: design-review
description: Judge a UI or a design with fresh eyes, and never change it. A fresh agent looks at the target as the people who use it, against the design-knowledge guides and the product's standards, and returns gaps with proof; they go on the Paper canvas as one findings board, and in chat as a short list. Works on a running UI, a static design such as a Paper frame, a change to either, or a build checked against its boards, on the whole target or one level or depth. /designing calls it before each depth locks and on a build. Use when the user says "review this", "design review", "UX review", "audit", "what's wrong with", "second opinion" or "check the build". To have the gaps fixed, use /designing.
argument-hint: "[what to review] [structural|behavioral|visual] [journey|page|component|primitive]"
---

# Design review

A review judges and never edits: it finds where a design falls short, proves it, and shows it. Fixing is /designing's work.

The look comes from a fresh agent that didn't make the design and gets none of its author's reasons or its owner's opinions, because models rate their own work above others' (Panickssery et al., 2024) and drift toward what the person they talk to believes (Sharma et al., 2023). The words come from the /design-knowledge skill's `SKILL.md`, "Levels and depths".

## 1. Set up

- **The target:** what the user named and what is inside it, in every state, where it appears, such as a dialog over its page. For the whole product or one quality across it, such as empty states, take a sample: every page of each journey, one page of each kind, the pages most people see, and a few at random (W3C, WCAG-EM 2.0).
- **The input:** a running UI (a URL, or a branch and how to run it, with a sign-in for each role and a way to reach each state), a static design such as a Paper frame, or a build with the boards it was built from. For a change, also the version before it. Code alone can't show what people see: without a running UI or a design, ask.
- **The standards:** `standards.md` from the caller, or written now as the /design-knowledge skill's `SKILL.md` describes under "Product standards".
- **The scope:** the whole target, or the level or depth the user or the caller names.
- **The canvas:** the caller's section, when /designing called this skill. Otherwise list the user's Paper files and pick this project's file and the page this work belongs on, or ask whether to create one, and start a dated section below everything already on the page.
- **A folder** for the run, outside the repo, for screenshots and notes.

When the user called this skill, confirm this with them once. When /designing called it, its framing is the confirmation.

## 2. Look

Start a fresh agent with no history, on Sonnet at high effort unless the user asked for another. Give it only this file's "How to look" and "What to return", the target and the input, `standards.md`, the scope, the folder, and any boards to judge, never why anything on them was made. Within the scope, it looks for:

- gaps below the bar, where the design fails people or its detail is unfinished, and then gaps to the best work;
- every rule marked Every product in the scope's guides and in accessibility;
- consistency with the rest of the product: the same names and concepts as other pages, the same action working the same way, the same components, tokens and scales;
- on boards, each change against what it replaced: better, no different or worse, in the whole around it;
- on a build, each page against its board at the same width; every other page that uses a shared part the build changed, such as a component or a token; and the lines the change removed, where a lost name, focus style or reduced-motion guard is a gap (interfaces plugin, "interface-review"); then what boards can't show:
  - an accessibility scan (axe) of every page and state;
  - the keyboard: Tab through each page; every action is reachable, focus is visible and follows the visual order, nothing traps it, and Escape closes an overlay and returns focus;
  - what a screen reader gets: each control's name, role and state, in the accessibility tree;
  - 320 px wide and 200% zoom: nothing clipped, overlapping or scrolling sideways;
  - reduced motion, forced colors and every theme;
  - the styles in use against the product's tokens (design-knowledge's `scripts/style-inventory.js`).

## 3. Post

Add one board to the canvas, named `Review · <scope>`, such as `Review · Visual` or `Review · Build`. On the left, the note, 400 px wide as on /designing's boards: the scope and the judgment in a line or two, then the gaps under a heading for each depth, each as its number, what is wrong, its level, and the rule or reference behind it. On the right, the screenshots, with each gap's number as a marker where it shows.

In chat, give the same list in the same shape, short. When the user called this skill, end with the next step: /designing takes the board as its start. When /designing called it, return the list to it.

## How to look

- **Use it.** Open a running UI in a real browser (/agent-browser, in a session of your own), and reach every state through the app: seed data, each role's sign-in. A model that uses a UI finds more than one that reads screenshots (Mishra et al., 2026). In a Paper design, take values from `get_computed_styles`, never from pixels. A board shows a change that the running UI doesn't have yet: judge the change on its board.
- **Structural:** walk it as each person in `standards.md`, with their real case, from where they start: a link, the navigation, an empty account. At each step, will they know what to do, notice the control that does it, connect it with what they want, and see that it worked (Wharton et al., 1994)? What did they come for that isn't there? You know more than they do, so first write what someone who knows only what `standards.md` says would try, and try that. For a part, ask what it is for on its page, who reads it and what they need from it.
- **Behavioral:** operate every control in every state, including a second click during a save, Back, and a reload halfway through a change. Reach each condition: empty, loading, partial, error and no access; each role; a slow, offline or failing network; one item and ten times the real count; very long and missing text; 360 and 1440 px wide; each theme. Take the worst data from what each value allows, not from typical data: the limit its schema or column sets, and its longest, shortest and oddest real forms, such as a name in another script or an emoji built from joined characters (Emil Kowalski, "break-ui"). Save that data as seed data, so the next check uses it. Run each motion forward, backward and interrupted.
- **Visual:** blur the page until the text can't be read, and list what stands out, in order: it should be what the job needs first. Count what competes: type sizes, colors, radii (design-knowledge's `scripts/style-inventory.js`). Check alignment with `scripts/layout-overlay.js`, whose header says how. Go over each page region by region at 2x.
- **The best work,** once a part has nothing below the bar: at the moments people remember (the first use, the hardest moment, the end, the action they repeat most), compare it with the references in `standards.md`. Look at the reference itself, never your memory of it.

**Proof.** Noticing is not a finding. A gap needs proof you saved: a step where the person can't go on, reproduced; a measurement from the DOM or Paper's styles, never from a screenshot (Xiang et al., 2026); or a rule read in full, with its "Applies when" and "Not a fail". Count instead of judging: "four background colors", not "too many". Name the place: the element and its words. For a change, reproduce the gap on the version before it, and say whether the change brought it. A screenshot proves something only when it shows what it should: take it after motion has finished, and check that it shows the state, width and theme its name says.

**When standards conflict,** a rule marked Every product holds whatever the product chose. The product's own rules come before current practice, and a value marked "default" is a starting point: departing from either is a gap only when you can name the harm.

## What to return

1. **The judgment,** in a few sentences: can each person do their job, and where is the design weakest?
2. **Each change on the boards:** better, no different or worse, with a line of evidence.
3. **Every gap you can prove,** by depth (structural, then behavioral, then visual), worst first within each and numbered through. Don't stop at a number: one look finds under half of what expert inspectors find (Campos et al., 2025). Each gap has:
   - a number;
   - one level, the part that falls short, and one depth: when a gap shows at two depths, the earliest its cause is in, because depths are fixed in that order;
   - the rule it breaks, by guide, number and title, or the reference that does more;
   - what is wrong, counted, measured or quoted, and who it costs what;
   - the proof: the screenshot's path, the gap's place on it, and the code's file and line when you found it.

   A gap names the problem, never its fix.
4. **What held up,** a line for each guide checked: what meets its rules and a change could easily lose, so /designing keeps it.
5. **Unproven items,** each with what would prove it.
6. **What you didn't cover,** and why.
7. **Questions only real users can answer,** each with its cheapest test, such as a usability test with five users (Nielsen, 2000) or a five-second test (Perfetti, 2005).
