---
name: designing
description: 'Design or change product UI on a Paper canvas, one part at a time, in a structure, style or behavior pass: new work, a redesign, polish, fixes from a review or from feedback, a spec that changes what users see, or a part the user names, such as "work the filters" or "zoom in on the table". For copy alone, use /writing, and fix a UI bug with a known cause directly.'
argument-hint: "<part> [structure|style|behavior] [alone]"
---

# Designing

Use this skill to design or change a product's UI on a Paper canvas. The design is a tree of parts, worked in three passes: structure, then style, then behavior. You work one node at a time and make it pass its tests, and the user looks at each node before you go on, unless they ask you to work alone. The user is whoever asked for the design. People are the people who use the product.

## Start

1. **Read design-knowledge's `SKILL.md`.** It defines the tree, the layers, the scope and a node's tests, which every step below uses.
2. **The canvas:** find the project's Paper file, or ask whether to create one. At the start of every session, make its tokens match the product's theme on the main branch, because other work may have changed them: compare them with `get_tokens`, and fix each difference with `set_tokens`, leaving the work's own set of new values as it is.
3. **The record:** read the product's UI rules and their log, and the work's `design.md` if it has one. Before the first node, write the work's bar in `design.md`, as design-knowledge's `product-standards.md` describes. A small change writes only the lines of the bar that it touches.
4. **The tree:** build it.
   - For new work, start from the root's jobs, each with its evidence, such as who asked, in what words and how often, and the facts it needs, read from the product's code and data, because jobs come from people and facts from the code.
   - For a feature, add its nodes under the ones that exist.
   - To change what exists, read the tree off today's screens: on the canvas, or drawn from the values that the running pages render.
5. **Then work the target,** from its top node. A small change is a tree of one node: its tests, a review and one stop.

## The tree

- **Where you are is one node.** Zooming in moves to a child, and zooming out to its parent.
- **The root's brief is the request,** with the problem behind it, because people often ask for a fix instead of describing the problem (Linear Method, "Manage design projects").
- **Each node has a state in each pass:** open, then settled when its tests pass and its review is closed, as step 7 of "Working a node" says, then complete when it and every node under it are settled. A reopen sets it back to open. Bring the tree up to date after every node, at the top of `design.md` and on the overview card.
- **The target is the user's choice,** as design-knowledge's "Scope" defines it, so ask before you change anything above it.
- **What has shipped starts complete,** and reopens only where the request or a cause sits. So does a design-system part used as it is: it gets no tests, review or stop of its own, and its parent tests it in place, with the longest value it must hold.

## The passes

Each pass may change only its own layer, as design-knowledge's "Layers and guides" sets out: structure the tree, style the values, and behavior what happens over time. The limit binds your own changes, not the user's requests.

| Pass | It ends when |
| --- | --- |
| Structure | The root is complete in structure, a review of the whole tree passes, and the user approves the structure |
| Style | The root is complete in style, a review of the whole tree passes beside the best products, and the user approves the style |
| Behavior | A review of the build passes, and the user has tried it |

- **Draw structure with the design system's parts and values as they are,** and with real data, so that it already looks nearly finished. Note each idea about the look for the style pass. Without a design system, use plain defaults.
- **What the user approves in structure is the baseline** that the later passes are checked against. When they approve, copy the tree with each node's brief into `design.md`'s Baseline, and duplicate the frames of the work as it is now, named `Baseline · <date>`, because the tree alone doesn't show what each node holds. Work that starts in style copies today's tree and screens the same way, at the start.
- **A structure change in a later pass reopens structure at that node.** Work it as structure, have it reviewed, and send it to the user, because they approved the structure as it was. That node and what depends on it wait, and the rest goes on. When the user approves the change, update the baseline for those nodes.
- **The user's style approval starts the build,** on a branch, or with /planning for a larger change. Take every value from the Paper frames with `get_jsx` and `get_computed_styles`, because a screenshot's pixels depend on its scale. From then on the design lives in the code, because two copies drift apart: a flaw that the build shows is fixed there, at its node and layer, and the user hears about it if it changes what they approved.

## Working a node

Working a node means making it pass its tests, at its resolution, within what the pass may change. The user's must-haves and shouldn'ts are tests, and their nice-to-haves break ties.

1. **Write the node's tests before you draw,** from the four places that design-knowledge's "A node's tests" lists, because nobody can judge a design without knowing what it must do, for whom and in which cases. They're complete when each thing the brief asks for, and each case and rule that bears on what this node decides, has a test. Mark a job without evidence as an assumption, which is a question for the user too. Send each test that needs a fact only the user has to them in words, before you draw, because a question costs them a moment and a drawing made before the answer is redone. While you wait, work on what doesn't depend on the answer.
2. **Find what already does the job.** Search the product's pages and component code for it. Reuse before you add: take something away, use what people know from other products, use the product's own part, token or word, correct a value, and only then add something new (interfaces plugin, "better-interface"). When the product's part almost fits, extend it so that every place can use the extension, because a second part for one job is one more to learn and keep alike.
3. **Study how the best products do this node,** such as a date picker or a pricing table, on their own pages or on Mobbin, because examples seen early lead to better work than examples seen late (Kulkarni, Dow and Klemmer, 2014). The parent's references often show it already. Study each one down to the details at this node's level: which parts it has and which it leaves out, and each part's names, order and states. You're done when the References artboard holds every best product in the bar that answers this node's question, and at least two examples in all, with strong ones from elsewhere when the bar has fewer, because one example can't show a choice, each with one line on what it decided.
4. **Draw the simplest design that could pass,** with real data. Follow what most of the best products share, because people already know it, keep the product's own look, and aim as high as the best of them, even when that's a big change from today, because small steps keep today's habits. Draw the children only as far as this node's tests need: that's its resolution.
5. **Run every test the pass's way,** as "A node's tests" describes. Fix first the failure that the most depends on: one whose cause sits in an earlier pass or a higher node, then the one that hurts people most. Fix it where it starts, and run all the tests again.
   - A cause in a shared thing is fixed in every place that uses it, and a cause above this node goes up. Tell the user as "When to write to the user" says.
   - Give each fact the smallest form that people already know, because every element takes attention from the rest of the screen (Nielsen, 1994). Look at the whole after each change, because a change has effects nobody intended (Schön, 1983).
6. **When every test passes, give each part its place,** as design-knowledge's "A part's place" describes: take it away, and drop it if the tests still pass. Parts that overlap become fewer that combine, such as one Status filter instead of a filter for each state.
7. **Have fresh eyes review the node:** a subagent that had no part in the design runs /design-review on the node in this pass. Give it the node, the pass, the node's brief and cases, the best products for this node, where the work and its record are, and what changed, and keep your tests and reasons out of it, because whatever your brief decides for it is what you can't see yourself. A review catches many failures but not all, since two reviews of one design find different ones, which is one reason the user sees each node. Read the rule behind each failure in full before you accept it, add the tests that it found you lacked, and fix what you confirm. Then have the same reviewer re-check those fixes and what they touch, as design-review's step 4 does. The review is closed when the re-check confirms every fix and finds nothing that the fixes broke.
8. **Record the node:** its tests, decisions and reasons in `design.md`, and a brief for each child.

**When the tests leave more than one good design,** or the user rejected one, explore before you pick. Name what most products do, so that the user knows the default. Draw two or three designs that differ in substance, each from the job and a different reference, because first ideas repeat what you've already seen (Jansson and Smith, 1991). Each answers everything that this node decides, so designs that differ in one detail are one design. Put them side by side on the same content, each with one line on what it's best at and what it gives up, because people judge several designs more honestly than one (Tohidi et al., 2006). Pick by the job, and write down why the others lost (MacLean et al., 1991). A choice in scope, cost or direction is the user's: have each option reviewed, show them at the node's stop with your pick, and work the node with your pick until then.

**When you're stuck:** if a test still fails after two different fixes, or two re-checks in a row find something that your fixes broke, stop fixing. Write down what the fixes assumed, such as the brief, the job or a choice in the parent, and test that instead, because another fix on the same assumption fails the same way. If the test still fails, tell the user what's left.

## The order

- **After a node, work all its children at their own resolution, then one child's subtree at a time,** the least certain child first: the one with the most open questions, or with no part in the product or the best products that already does its job. The parent placed its children together, so what's left are the conflicts that show only at a child's own resolution, and a deep question costs least while little depends on it. In studies of expert engineering and software designers, the first pass is breadth-first, and the hard parts then go depth-first (Ball and Christensen, 2019).
- **In style, work each node that has children twice:** first the choices that hold across its children, such as density and the type scale, which go to them in their briefs. Then, after its children, judge the whole beside the best products, which settles it, because a look is judged whole. Put a change to a shared part in every place that uses it, or nowhere.
- **When the work is the look itself,** the tree is the design system's, as design-knowledge's "The tree" describes. The root's options are two or three complete visual languages, drawn on the whole screens where people start their jobs, as design-knowledge's `foundations/visual-language.md` frames them, and the pick is the user's. After they pick, name the look's roles, give each role its value, and draw the product's parts with them on one sheet.
- **Behavior is settled in the running build,** each part through every input that it takes. Give a value that people judge by feel a live control (Interface Craft, "Live Tuning"), and put versions of a behavior behind a switch that shows one at a time (Emil Kowalski, "prototype").
- **By default, stop after each node that you designed or changed in structure or style.** A stop waits for the user, and the node is approved when their reply has nothing to change. In behavior, they try the build once. When the user says "work this subtree" or "work the whole tree", go on alone in the same order: each node still needs its review, and you write only at an approval, or for a question or a reopen that's theirs.
- **Do what the user asks, even out of order.** If they ask you to polish a node whose structure is still open, polish it, say in one line which structure questions are open, and keep the node open in structure in the record.

## What the user says

What the user says about the design is a question, a problem or a fix.

- **A question is a check of the design.** Answer it from the record: the choice, the options it beat, and what decided it. Change your answer or the design only when the question shows a fact, a constraint or a flaw that you missed, and name it, because models tend to give in when someone pushes back, even when they were right.
- **A problem is a failing test on a node.** Find the node and layer where its cause sits, which can be another node or an earlier pass, fix it there, and reopen what depends on it: the children whose brief changed, and every node that uses a shared thing that you changed. Add it to the node's tests with the cause you found, and log it as an observation, as design-knowledge's `product-standards.md` describes.
- **A fix is a proposal.** Find the failing test behind it, and try the fix against the others. Where another passes better, say so with the evidence, and the decision stays theirs.

## When to write to the user

The user decides direction, scope and cost, and you decide everything else, such as the wording, the layout and the values, and record why. Write to them at these points only, because every other question makes them steer the work, and say in a few lines where to look and what you need:

- **At each stop:** the name of the node's frame, which shows the node in its parent with its tests and its children's briefs, then what changed and any choice that's theirs.
- **A question only they can answer,** such as what a customer said, a cost, or a cut of a job that has evidence, in words, as soon as it comes up.
- **A change above the target, or to a shared part that reaches beyond it,** with the places it reaches, before you make it.
- **A reopen of a node that they approved,** with the change.
- **A test that still fails** after you tested what its fixes assumed, with what's left.
- **The approvals:** the whole tree after structure, and again after style, each with the review of the whole tree that passed and the open items.
- **The build,** for them to try before it ships.

## Rules that always hold

- **The design shows the product as it is:** the real people, data and behavior, and values from the running app and its tokens. Where the design changes what the product does, it says so and what the change costs, because a design that shows a fact the product doesn't have misleads the people who rely on it.
- **The user sees only reviewed work,** because you can't see your own design the way people will.
- **You draw and look yourself.** Subagents only review, because the work needs the job and the record that you hold.

## The record

Every step reads the record and writes to it, so that a later session, or this one after a compaction, carries on where the work stands.

- **The product's UI rules and their log,** in the repo: its ranked qualities, its rules, and what the user has said about designs, as design-knowledge's `product-standards.md` describes.
- **`design.md`,** started from `references/design.md`: the bar, the tree with each node's state, the cases, each node's brief, tests and decisions, the baseline, and what's open. An older record works too: build the tree from it and from the canvas, with each part as a node, its choices under it, and its open items as open questions. An older work's `standards.md` belongs to that record: read its people and references, and its verdicts as observations, never as rules.
- **The canvas,** as [Canvas](#canvas) lays it out.

## Examples

These are typical paths, not recipes.

- **"Design the checkout":** a journey at the root, with its steps as pages: cart, address, payment and confirmation. The journey, then a stop. Its pages together, with a stop after each. Then the least certain page's subtree, say payment, then the others. The structure approval, the style pass from the whole down, the style approval, then the build and its behavior.
- **"Polish the settings sidebar":** the target is the sidebar, the pass is style, and its structure starts complete. Two items turn out to say the same thing, which is structure, so the sidebar reopens in structure and goes to the user before its style goes on.
- **"The message list looks busy":** a problem on the list. Its cause is likely what each row holds, so work the row in structure: write its tests from the jobs, give each part its place, and stop for the user.
- **"Work the whole tree alone":** the same order and the same review for each node, and a message only at each approval or for a question that's the user's.

## Canvas

Use one page per piece of work, named after the target and the start date, laid out so that the user knows where to look without reading anything:

- **Top:** the overview card, which shows where the work stands: the tree as an indented list, one row per node, with a column for each pass that says open, settled or complete. The node you're on is highlighted, and a node with a question for the user is marked in amber, with the question in a few words. Design-system parts used as they are fold into their parent's row. Under the card, the work as it is now, at full size and side by side, in each state that people meet, with today's version on the left. It's the one place the user needs to look, so keep it current.
- **Below:** one frame per stop, named `<n> · <node> · <pass> · <change>`: the node in its parent, before and after on the same content, its tests beside it, and a numbered marker on each spot that changed, with one line each. People connect a note to its part only when the two sit together (Ginns, 2006). Leave earlier frames as they are, because they're the record. After the build ships, show each later change as before-and-after screenshots of the build.
- **References:** one artboard, with each screenshot's source and one line on what it decided.
- **Paper:** move each new artboard into place, and name it when you create it, because renaming truncates names to 50 characters. Paper drops some styles without an error, such as `left` and `top` on a new artboard, the base color of a `background` shorthand, camelCase properties in `write_html`, and an SVG's `stroke-opacity`, so read the result back with `get_computed_styles`. Draw screens as layers bound to tokens, so that they can be measured. To try new values in the style pass, add a set of tokens for the work and bind only the new frames to it, which leaves earlier frames and other pages as they were. Nest the frames as the groups that people should see, with padding inside a box and gaps between its children (Figma Learn, "Guide to auto layout"; Braid, "Layout").
