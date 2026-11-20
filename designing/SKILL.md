---
name: designing
description: Design product UI on a Paper canvas, for new work, a redesign, polish, fixes from a review or from feedback, and a spec that changes what users see, or to run one of its actions by name, such as zoom in, focus, diverge, prune or converge. For copy alone, use /writing, and fix a UI bug with a known cause directly.
argument-hint: "[action] <part> [aspects]"
---

# Designing

Use this skill to design or change a product's UI on a Paper canvas. A design is parts inside parts, and you work on one part at a time with twelve actions, taken in whatever order the record allows, until you reach the goal. When the user names a goal, such as "design the account card", keep acting until you reach it. When the user names an action and a part, such as "zoom in on the filters", take that action, then carry on toward the goal. The user is whoever asked for the design. People are the people who use the product.

## The design and where you are

- **The design** is parts inside parts: the journey, which is the flow across pages and can branch and loop, then pages, components and primitives, as design-knowledge's levels name them. Some parts are shared, such as a chip or a button, and appear in many places, and the look and the voice run through all of them.
- **The target** is the part that the user named for the work. **The scope** is the target and every part inside it, as design-knowledge's "Scope" sets it. Paper shows what is there and how it looks, so behavior is judged in the running build.
- **Where you are** is the current part, which starts as the target, and an optional focus inside it. The overview card on the canvas shows both.

## The record

Every action reads the record and writes its result to it. That's what lets the actions combine in any order, and what lets a later session, or this one after a compaction, carry on from where the work stands.

- **`standards.md`:** the bar. It holds the people, the product's ranked qualities, the best products for the job and what each decided, and the user's verdicts, as design-knowledge's `product-standards.md` describes.
- **`design.md`:** started from `references/design.md`, or continued if the work already has one. It holds the job, the cases, the trace from each job to the facts it needs, the parts that show them and each part's place, each choice with why the others lost, and every finding with its status, the open ones first and the worst on top, so that the worst gap in scope is always in view.
- **The canvas:** the overview card, which shows your path and where you are, the work as it is now, today's version, the references, and one small frame per change, as [Canvas](#canvas) lays out.

## The goal

You're done when a Review passes every part in scope, as design-review defines a pass, in each state that people meet. A pass asks for more than no findings: each part earns its place, and beside the best products, at the same size, each part is as good as the best of them, or the review says why ours is right. design-knowledge's rules are only the floor. If one part reaches 35 changes before it passes, counting its directions but not the parts inside it, stop work on it and tell the user what's left.

## When to write to the user

The user decides direction and scope, and you decide everything else, such as the wording, the layout and the values, and record why. Write to the user at the following points, and otherwise only to ask for a fact that only they know, such as what a customer said, because every other question makes them steer the work. Each message says where to look and what you need, in a few lines.

- **The job,** with the jobs that rest on assumptions, which Frame sends without waiting for an answer.
- **A cut of a job that has evidence,** such as for a first release, because scope is theirs.
- **Directions for the target,** or for any part where they asked for directions, for them to choose, because direction is theirs, and any directions that would change the product's look, because the look holds on every page.
- **A change to a part above the target,** before you make it, because the target is their choice.
- **A part that reaches the goal's cap,** with what's left.
- **The design before Ship,** for their approval, and **the build,** for them to try before it ships.
- **The result of an action that they named.**

## Rules that always hold

- **The design shows the product as it is:** the real people, data and behavior, and values from the running app and its tokens, because a design that shows a fact the product doesn't have misleads the people who rely on it.
- **Every part earns its place:** a job in the trace, or a need of the product with a source, such as the law, needs what it shows, because a part that serves no job costs attention and blurs what the others mean. Prune decides where each part sits.
- **The user sees only reviewed work,** because you can't see your own design the way people will.
- **Paper holds the design until Ship,** and a prototype is a throwaway probe, because two copies of a design drift apart.
- **The record holds every reason.** Answer the user's questions from it, and let a question change your answer or the design only when it shows a fact, a constraint or a flaw that you missed, because models tend to give in when someone pushes back, even when they were right.
- **You draw and look yourself.** Subagents only review, because the work needs the job and the record that you hold.

## Actions

Any action can follow any other when what it needs is in the record. That's the only order.

| Action | Use it when | It needs | It leaves in the record |
| --- | --- | --- | --- |
| Zoom out | You need the part that holds this one: to see it where it lives, to find a cause that sits higher, or to check the whole after close work | A current part | The holding part, as the current part |
| Zoom in | The work needs one part inside this one | A current part | That part, as the current part |
| Focus | One aspect, or every part of one kind, needs attention across the current part | A current part | The focus, or the whole part again |
| Frame | The job isn't in the record, or evidence says it's wrong, such as two failed fixes to one spot | Nothing | The job, the cases and each fact's meaning in `design.md`, and today's screens on the canvas |
| Find references | Before you draw anything new, or whenever a part or an aspect falls short or needs ideas | The job | References on the canvas, each with what it decided |
| Diverge | The current part's choice is open | The job and the references | Three directions side by side, at this part's level, each with the assumption it rests on |
| Choose | Two or more directions or options are alive | Each one passed by a review | The pick, and why the others lost |
| Prune | Before you polish a part, after a pick, when a review finds a part in the wrong place, and before a release | The trace | Each part's place in the trace, and why |
| Converge | The current part's form has gaps, known or suspected | One design or direction of the part | One frame per change |
| Review | Converge is done, and before Choose | Something drawn since the last review | Findings with their status, the parts that passed, and the open gaps, worst first |
| Prototype | A still image can't show what you need to judge, such as feel, motion or density | A design to try | A throwaway build to judge it in, and what you learned |
| Ship | A Review on Paper passes every part in scope | The user's approval of the design and its open items | A running build, and its findings |

### Zoom out, Zoom in and Focus

These set where every other action works: references for an icon set when you're on the icons, and for whole flows when you're on the journey. Zoom in moves to one part inside the current one, such as the card's status icon. Focus stays on the current part and narrows to a slice across it: one aspect, such as its color or its copy, as design-knowledge's guides cover them, or every part of one kind, such as all its icons. A part is right only in what holds it, and a whole is only as good as its parts, so move up and down as the work needs, and use design-knowledge's "What depends on what" to see which decisions shape which. Whatever the focus, judge each change on the whole part, because aspects such as color, type and spacing work only together.

### Frame

Find the problem behind the request, because people often ask for a fix instead of describing the problem (Linear Method, "Manage design projects"). Write the trace before you draw: each person's jobs, each with its evidence, such as who asked, in what words and how often; the facts each job needs, with what each means, its values and what shows when there's none, read from the product's code and data; and the parts that show each fact. Jobs come from people, and facts from the code and data. A job without evidence is an assumption: mark it, including one written for a part that already exists. List the cases to walk through: each person with their real job and data, starting where they start, the extremes of everything that varies, as design-review's "Cover the whole part" lists them, and where the job goes next. If the work has no `standards.md`, write it first, so that nobody bends the bar to fit the design. Draw today's screens from the values that the running pages render. Then send the user the job in a few lines, the questions that the design answers and what it will and won't show, and carry on without waiting, but change course if they correct you, because a wrong job is the most expensive mistake that working alone allows. When you frame again, write down the assumption that failed.

### Find references

If another part of the product already does the same job well, follow it, because people already know it. Otherwise, look for references at whatever level and focus you're at, and as often as the work needs them: whole products and flows, one page, a single part such as a filter menu or a chip, a set of icons, type, motion, or imagery for a mood board. Take them from wherever the best examples are, such as the products' own pages, Mobbin or Pinterest, because they show what's really there, and study each one down to the details that matter at that level, such as which parts it has and which it leaves out, and each part's names, order and states. Follow what most of the best examples share, keep the product's own look, and aim as high as the best of them, even when it's a big change from today, because small steps keep today's habits. Examples seen early lead to more creative work than examples seen late (Kulkarni, Dow and Klemmer, 2014). You're done when the References artboard answers the current part's question with every best product in `standards.md` that answers it, or with at least two strong examples from elsewhere when none does, each with one line on what it decided.

### Diverge

A choice is open for new work, a redesign, a design that the user rejected, or a concept that a review found failing, and what today's version does settles nothing. Name what most products do, so that the user knows the default. Then draw three directions that differ in substance, each from the job and not from today's version, because first ideas repeat what you've already seen (Jansson and Smith, 1991). Each direction answers everything that the current part decides, so designs that differ in one detail are one direction. Draw each one finished at the current part's level, in what holds it, and leave the parts inside it as rough as the choice allows, because only the pick's insides get refined. Converge and Review work on a direction at this level only. When the choice is the look, each direction is a complete visual language: one idea of how the product should feel, carried through every choice that the look needs, from those that hold on every page to the form of each kind of thing that the product shows most, at each size it needs, as design-knowledge's `foundations/visual-language.md` frames it. Draw it on the whole screens where people start their jobs, because a lone value or part can't show a look.

### Choose

At the points that "When to write to the user" names, the user chooses. Put the directions side by side on the same content, each with one line on what it's best at and what it gives up, and mark your pick, because designers who make several designs at once make better ones (Dow et al., 2010), and people judge three designs more honestly than one (Tohidi et al., 2006). You choose everything else, on the evidence: the walk, the review and the comparison with the best products. Either way, write down why the others lost (MacLean, Young, Bellotti and Moran, 1991). Add each verdict from the user to `standards.md`, as design-knowledge's `product-standards.md` describes. After the user picks a look, name its roles, then give each role its value, and draw the product's parts with them on one sheet.

### Prune

Prune decides where each part sits, at any level: a journey's steps, a page's sections and filters, a component's lines, and a primitive's values. Check each part's place as design-knowledge's "Check a part" begins, using the trace, and ask what scope hammering asks: is it a must-have, could you ship without it, how likely is its case, and who sees it (Singer, *Shape Up*). Then give each part a place from design-knowledge's "A part's place", or **Later**: a job with evidence needs it, but it costs more than the release can carry, in attention, in confusion with another part or to build. The release's limit comes from the user or the spec, and the cut is theirs. Parts that overlap become fewer that combine, such as one Status filter in place of a filter for each state. A part that only an assumption needs stays marked until the user confirms or cuts it. Record each place and why in the trace. Cutting scope isn't cutting quality: what stays is made as good as the best products (Singer).

### Converge

Converge refines the form of the parts that stay: you tighten and polish them yourself. Repeat these steps, one change at a time, so that each change can be seen and undone:

1. Assess the part against `standards.md`, every reference beside it at the same size, every design-knowledge guide that applies to it, and every case. Pick the worst gap that the assessment finds. A part in the wrong place outranks any gap in form, and calls for Prune.
2. Fix its cause where it starts, in every place where the same part appears, with the change that adds the least: reuse what exists, follow the best products, or invent something, and Prune what the fix should take away. One decision often causes several gaps (Kara Pernice and Rachel Krause, NN/g, 2024).
3. Give each fact the smallest form that people already know, because every element takes attention from the rest of the screen (Jakob Nielsen, 1994). Fixes add weight one at a time, so look at the whole after each change and Prune what it made unneeded (Schön, 1983).
4. Walk the changed part through the cases.

Converge is done when a full assessment finds nothing that would fail a pass, as the goal defines it, or when the part reaches the goal's cap.

### Review

Have fresh eyes, a subagent that had no part in the design, review the current part and every part inside it with /design-review. Tell it only what it can't find itself, such as where the work and its record are, and what you changed, because whatever your brief decides for it is what you can't see yourself. For each finding, read the rule it cites in full, then mark the finding confirmed, disproved with the proof, or unproven. Give each confirmed finding a status: fixed, open, left because the user or the record already decided it, or the user's decision. The review names the action that each cause calls for.

### Prototype

Make the part real in the running app when a still image can't show what you need to judge, such as how a palette feels across screens, how a panel moves, or how dense a table reads with real data. Add a switch to compare it with today's version (Emil Kowalski, "prototype"), and a live control for values that people judge by feel (Interface Craft, "Live Tuning"). Write what you learned in `design.md`, and carry it back to Paper, because the prototype is thrown away.

### Ship

Give the user the design, its open items and what the trace puts later, and build once they approve: on a branch, or with /planning for a larger change. Settle the behavior in the running build, with the same switch and live controls as Prototype. Have fresh eyes check the build with /design-review, and ship after the user tries it. After you ship, show later changes as before-and-after screenshots of the build.

## Examples

These are typical paths, not recipes.

- **"Design the account card":** Frame, Zoom out to the Accounts page to see where the card lives, Zoom in to the card, Find references, Diverge, Review, Choose with the user, Prune, Converge, then Zoom in to each part of the card that falls short, Find references and Converge, then Zoom out to the card, Review, and Ship.
- **"Polish the filters":** Zoom in to the filters, Find references, Converge, Review.
- **"The card looks busy":** Prune, Converge, Review.
- **"What's the smallest first version?":** Prune against the release's limit, send the user the cut, Converge, Review.
- **"The card's icons look off":** Focus on the icons, Find references for icon sets, Converge, Review.
- **A review finds that the concept fails:** Frame, Find references, Diverge.
- **"Converge the card," named by the user:** Converge, Review, a note of what changed, and on toward the goal.
- **"Try the new palette in the app":** Prototype, then Converge on Paper with what you learned.

## Canvas

Use one page per piece of work, named after the target and the start date, laid out so that the user knows where to look without reading anything:

- **Top:** an overview card that shows your path, so that the user can follow and steer the work. It holds the target, the parts that a review has passed, and the parts you've worked on as a path through the tree, each with its actions and counts, such as "Card: Frame · Find references · Diverge 3 · Review · Choose B · Prune 4 · Converge 14 · Review passes › Card head: Find references · Converge 6", then the current part, its focus and what's next. Bring it up to date after every action. Under it, the work as it is now, at full size and side by side, in each state that people meet: today's version on the left, then the directions or the one design. It's the only place the user needs to look, so keep it current.
- **Below:** one row per part that you've worked on, with one small frame per change, named `<n> · <part> · <change>`: the part that changed, before and after on the same content, a numbered marker on the exact spot, and one line. People connect a note to its part only when the two sit together (Ginns, 2006). Leave earlier frames as they are, because they're the record.
- **References:** one artboard, with each screenshot's source and one line on what it decided.
- **Paper:** move each new artboard into place, and name it when you create it, because renaming truncates names to 50 characters. Paper drops some styles without an error, such as `left` and `top` on a new artboard, the base color of a `background` shorthand, camelCase properties in `write_html`, and an SVG's `stroke-opacity`, so read the result back with `get_computed_styles`. Draw screens as layers bound to tokens, not as screenshots, so that they can be measured. To try new values, add a set of tokens for the work and bind only the new frames to it, which leaves earlier frames and other pages as they were. Nest the frames as the groups that people should see, with padding inside a box and gaps between its children (Figma Learn, "Guide to auto layout"; Braid, "Layout").
