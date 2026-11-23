---
name: designing
description: 'Design or change product UI in any medium, such as a Paper canvas or a running build: new work, a redesign, polish, a new look, a part the user names (such as "redesign the account card"), fixes from a review or from feedback, or a spec that changes what users see. It settles a design spec with the user, draws the whole design alone, has it reviewed, and shows the finished design with every fork. For copy alone, use /writing, and fix a UI bug with a known cause directly.'
argument-hint: "<target>"
---

# Designing

Use this skill to design or change a product's UI. You settle a design spec with the user, draw the whole design alone, have it reviewed and fix what the review finds, and then show them the finished design with every fork. The user looks twice, at the spec and at the finished design, and answers only the questions that "Rules that always hold" lets through. The user is whoever asked for the design, and people are the people who use the product.

Read design-knowledge's `SKILL.md` first: it defines the tree of parts, how to make a part, and where the rules are.

## 1. Grill

Run /grilling on what the spec holds, and on nothing below it: the problem, the people and their jobs, the scope, including whether the work ends in code, the things and their names, the places, and the bar. Ask only as "Rules that always hold" says. Facts are yours to find: read the code, the data and the product's pages, find how to run it locally, with a test login for each role from the repo's seed or example files, asking only when they aren't there, and find the best products for the bar yourself. Taste is theirs: ask which products they love and, when the look is in play, the ranked qualities, unless the product's UI rules already hold them, and propose a UI rules file in the same round if the repo has none. Design options are never questions, because you draw them.

When /brainstorming runs this skill, its grilling already settled the problem, the people and the scope. Ask only what it left open about what people see, in one round, and link the product spec instead of repeating it.

## 2. Write the spec

Write `design.md` from `references/design.md`, next to the product spec when there is one, and otherwise in a new folder where the repo keeps its specs. Write it at the level that Shape Up calls rough, solved and bounded (Singer, *Shape Up*, 2019): rough, with no visual design, so that drawing still has room; solved, with the main parts worked out and connected, and the risky unknowns gone; and bounded, saying what's out of scope. Write the places as a breadboard: each place, what people can see and do there, and where each action leads. Add a rough sketch only where the arrangement itself is the idea.

## 3. Review the spec

Run /design-review on the spec with only the From scratch, Walk and Truth lenses: one works out the design from the problem alone, one walks each person through the places, and one checks every claim that the spec makes about today's product and data. Fix the spec for each finding you confirm, and ask the user as "Rules that always hold" says. When a fix changes the places, run the three lenses again on what changed.

## 4. Approve the spec

Show the summary, the places as a breadboard with /show-me, the decisions and what review changed, in one message. When the user approves, set its status to Approved. It's their last look before the finished design, also when /brainstorming runs this skill.

## 5. Draw the whole design

Draw the target and every part inside it, alone, from the top down, the least certain part first, because a question deep in the tree costs least while little depends on it. When the target is a page or a journey, start with each page and how its parts sit. When it's a part, such as a card, draw it in each place where it appears, with the page around it as it is. Make each part as design-knowledge's "Making a part" describes, with real data from the product, and keep refining it until your own look at it, on its whole page, finds nothing more.

- **When the work is the look itself,** the tree is the design system's. When the look is set and the work is to make it consistent, name the roles from what the product's pages already use, measured with design-knowledge's `scripts/style-inventory.js`. When the look is open, draw two or three complete directions on the screens where people start their jobs, each a different set of the few choices that design-knowledge's visual-language guide names, and pick one. The others come back as a fork. Then name the look's roles, such as its text styles and color roles, give each role its value, draw the system's parts with them on one sheet, and then every screen in scope.
- **A fork** is two or three options where all of these hold: each meets the spec and the bar, nothing in the rules or the best products makes one clearly better, and people would notice the difference. Pick one, say why in a line, build on it, and keep the others drawn for the end. When the facts or the usual form settle the choice, it isn't a fork: the options that lost go into Decisions, with why they lost.
- **A question for the user,** as "Rules that always hold" defines it, goes to them at once, with your default answer. An answer that changes the approved spec counts as their approval of that change. Keep drawing everything that doesn't depend on it. If they don't answer, the default stands, and the finished design lists it as your decision. Every other question is yours to settle.

## 6. Review and fix

Run /design-review in full mode on the whole design, without From scratch, which ran on the spec. Keep a copy of the design as reviewed, as the medium's file describes, so that the verifier can compare before and after. Fix each confirmed finding in the review's order, at the part where its cause sits, and in every place that uses a shared part that you change. List each unproven finding as open, with what would settle it. A finding that needs the user goes to them, as in step 5.

Then have /design-review verify the fixes, and repair what the verifier finds, until it says that every fix holds. If a second round of fixes fails on the same cause, stop fixing: write down what the fixes assumed, such as a job, a place or a choice in the parent, and test that instead, because another fix on the same assumption fails the same way. When the assumption is the user's to settle, ask them, and otherwise change it and review again.

## 7. Show the finished design

Show the user, in one message, where to look:

- the design as it is now, in each state that people meet, beside today's version when there is one;
- every fork in its place: the options side by side, the pick marked, a line on the trade-off, and what switching it would change;
- the decisions you made, what review changed, and what's still open.

When they switch a fork, rebuild what depends on that choice as a new version beside the old one, review what changed, and show both, so that they compare one whole design with another. When /brainstorming runs this skill, this is its approval.

## 8. Build

When the work includes the code, their approval starts the build: on a branch for a change that fits one PR, and otherwise with /planning. Take every value from the design's source, such as Paper's `get_jsx` and `get_computed_styles`, because a screenshot's pixels depend on its scale. From then on the design lives in the code, because two copies drift apart. Before it ships, run /design-review in full mode on the running product, without From scratch, and fix and verify what it finds, as in step 6. The frames stay as the record of what was approved.

## What the user says

What the user says about the design is a question, a problem or a fix.

- **A question is a check of the design.** Answer it from the record: the choice, the options it beat and what decided it. Change your answer or the design only when the question shows a fact, a constraint or a flaw that you missed, and name it, because models tend to give in when someone pushes back, even when they were right.
- **A problem is a finding.** Find the part where its cause sits, fix it there, and recheck what depends on it. Record it as design-knowledge's `product-standards.md` describes: in "Done when", and in the product's log.
- **A fix is a proposal.** Find the problem behind it, and try the fix against the rest of "Done when". Where another fix works better, say so with the evidence, and the decision stays theirs.

## Rules that always hold

- **Ask the user only what they alone can answer and a wrong guess would change in more than one part,** or what changes a decision they made. Everything else is yours to settle, and you record why, because every other question makes them steer the work. Design options are never questions: you draw them, and the user picks between forks in the finished design.
- **The design shows the product as it is:** the real people, data and behavior, and values from the running app and its tokens. Where the design changes what the product does, it says so and what the change costs, because a design that shows a fact the product doesn't have misleads the people who rely on it.
- **The user sees only reviewed work,** because you can't see your own design the way people will.
- **Show designs as drawings,** in the medium or as screenshots, and use the chat only to say where to look and the one thing that you need, because people judge a design by looking at it, and words make them imagine it.
- **You draw and look yourself.** Subagents only review, because the work needs the job and the record that you hold.

## The medium

The steps are the same in every medium, and only the tools change. On a Paper canvas, follow `references/paper.md`. In a running build, follow `references/build.md`.

## The record

- **`design.md`:** the spec, the forks and what's open, so that a later session, or this one after a compaction, carries on where the work stands.
- **The product's UI rules and their log,** in the repo, as design-knowledge's `product-standards.md` describes.
- **An older record,** with a tree of statuses, tests per node or a baseline: keep it as it is, copy its problem, people, jobs, cases, bar and decisions into the new sections, read its tests as lines for "Done when", and go on from the first step that it hasn't done.

## Examples

- **"Redesign the account card":** a short spec, with what the card is for, what people need from it, where it appears and the extreme cases. The card is the focus, so it gets options in the places where it appears, a pick and refining. The review checks it in each place, and an option as strong as the pick comes back as a fork.
- **"A new visual language":** the spec holds the ranked qualities and the products that the user loves. Two or three directions on the key screens and a pick, then the look's roles and values, the system's parts, and every screen in scope. A direction as strong as the pick comes back as a fork on the key screens.
