---
name: designing
description: 'Design or change product UI, built in the running product on a branch, with a Paper canvas for explorations: new work, a redesign, polish, a new look, a part the user names (such as "redesign the account card"), fixes from a review or from feedback, or a spec that changes what users see. It settles a short design spec with the user, builds the whole design alone, has it reviewed, and shows the finished design with every fork. For copy alone, use /writing, and fix a UI bug with a known cause directly.'
argument-hint: "<target>"
---

# Designing

Use this skill to design or change a product's UI. You settle a short design spec with the user, build the whole design alone on a branch, have it reviewed and fix what the review finds, and then show them the finished design with every fork. The user looks twice: at the spec, and at the finished design. The user is whoever asked for the design, and people are the people who use the product.

Read design-knowledge's `SKILL.md` first: it defines the tree of parts, how to make a part, and where the rules are.

## 1. Grill

Run /grilling to elicit the requirements, treating the user as the product's user, who relays the need as best they can, and as its owner, who can give direction. Ask about the job through real situations: what they're trying to get done, what they do today, what gets in the way, and what matters and what doesn't. Take their direction as decisions. For a new look, also ask which products they love and the qualities the look should have, unless the product's UI rules hold them. The result is the requirements and the design's broad shape: which places exist, what each one is for, and the well-known product each is closest to. Design options aren't questions, because you build them.

When /brainstorming runs this skill, its grilling already settled the problem and the scope, so ask only what it left open about what people see.

## 2. Write the spec

Write `design.md` from `references/design.md`, next to the product spec when there is one. Keep it high level: the places, what each is for and must let people do, and how they connect, with no copy and no layout, because the build decides those.

## 3. Review the spec

Ask a fresh subagent to review the spec with common sense: how the best products solve the same job, other ways to do it, a simpler one included, and what the spec assumes about today's product that isn't so. It reports only what would change the design. Fix the spec, and ask the user when a finding changes what they decided.

## 4. Approve the spec

Show, in one message: the summary; a map of the places with /show-me, each with what it's for and the well-known product it's closest to; and the decisions that change what people get. When the user approves, set its status to Approved. It's their last look before the finished design.

## 5. Build the whole design

Build the target and every part inside it, alone, on a branch, in the running product, as `references/build.md` describes, because a build uses the product's own parts, shows every state by using it, and can be measured. Use Paper, as `references/paper.md` describes, only to explore: a new look's directions, and forks worth seeing side by side.

Decide from the top down, the least certain part first, because a question deep in the tree costs least while little depends on it, and build from the shared parts up, because pages are made of them. When the target is a page or a journey, start with each page and how its parts sit. When it's a part, such as a card, build it in each place where it appears, with the page around it as it is. Make each part as design-knowledge's "Making a part" describes, and keep refining it until your own look at it, on its whole page, finds nothing more.

- **When the work is the look itself,** the tree is the design system's. When the look is set and the work is to make it consistent, name the roles from what the product's pages already use, measured with design-knowledge's `scripts/style-inventory.js`. When the look is open, draw two or three complete directions on Paper, on the screens where people start their jobs, each a different set of the few choices that design-knowledge's visual-language guide names, and pick one. The others come back as a fork. Then name the look's roles, such as its text styles and color roles, give each role its value as a token, and build the system's parts and every screen in scope with them.
- **A fork** is two or three options where all of these hold: each meets the spec and the bar, nothing in the rules or the best products makes one clearly better, and people would notice the difference. Pick one, say why in a line, build on it, and keep the others as variants behind a switch for the end. When the facts or the usual form settle the choice, it isn't a fork: the options that lost go into Decisions, with why they lost.
- **A question for the user,** as "Rules that always hold" defines it, goes to them at once, with your default answer, and their answer updates the spec. Keep building everything that doesn't depend on it. If they don't answer, the default stands, and the finished design lists it as your decision.

## 6. Review and fix

Keep a copy of the design as reviewed, as the medium's file describes, then run /design-review in full mode on the running design. Fix each confirmed finding in the review's order, at the part where its cause sits, and in every place that uses a shared part that you change. Make each fix as design-knowledge's "Making a part" makes a part: a fix that takes a part away or uses the usual form beats one that adds a part, a word or a sentence, which needs a reason that you write down. List each unproven finding as open, with what would settle it, and each finding that you leave, with why. When your reason and the finding's proof both hold, the choice is a fork. A finding that needs the user goes to them, as in step 5.

Then have /design-review verify the fixes, and repair what the verifier finds, until it says that every fix holds. If two rounds of fixes fail on one cause, stop and question what they assumed.

## 7. Show the finished design

Show the user, in one message, where to look:

- the branch, how to run it, and the address and steps that reach each state;
- screenshots of the design as it is now, in each state that people meet, beside today's version when there is one, with every control in use, such as a select open, so that each part can be judged without asking what it does;
- every fork: its variants behind their switch, with screenshots side by side, the pick marked, a line on the trade-off, and what switching it would change;
- the decisions you made, what review changed, each finding you left and why, and what's still open.

When they switch a fork, rebuild what depends on that choice beside the old version, review what changed, and show both, so that they compare one whole design with another. When /brainstorming runs this skill, this is its approval.

## 8. The last mile

The user comments on the running page. Read their comments where they leave them, as `references/build.md` describes, and answer each one there, as "What the user says" describes. A comment that changes the places or the data, such as a new column, changes the spec too: update it, and say so in your reply. Answer comments in batches: after each batch of fixes, run a light review of the changed screens and have the fixes verified, as in step 6.

The last mile ends when the user approves. Before the branch goes to review as code, take out the fork switches and live controls, and replace each mock with the API or keep it on the list of API changes. Then send it to /zen-review and a PR for a change that fits one PR, or to /planning for a larger one. Nothing merges before their approval.

## What the user says

What the user says about the design, at any step, is a question, a problem or a fix.

- **A question is a check of the design.** Answer it from the record: the choice, the options it beat and what decided it. Change your answer or the design only when the question shows a fact, a constraint or a flaw that you missed, and name it, because models tend to give in when someone pushes back, even when they were right.
- **A problem is a finding.** Find the part where its cause sits, fix it there, and recheck what depends on it. When it's a verdict on the design, not a bug, record it as design-knowledge's `product-standards.md` describes.
- **A fix is a proposal.** Find the problem behind it, and try the fix against the rest of the spec. Where another fix works better, say so, and the decision stays theirs.

## Rules that always hold

- **Ask the user only what they alone can answer and a wrong guess would change in more than one part,** or what changes a decision they made. Everything else is yours to settle, because every other question makes them steer the work. Design options are never questions: you build them, and the user picks between forks in the finished design.
- **The user sees only reviewed work,** because you can't see your own design the way people will.
- **Show designs as they look:** the running build, screenshots of it, or frames, and use the chat only to say where to look and the one thing that you need, because people judge a design by looking at it, and words make them imagine it.
- **You build and look yourself.** Subagents only review, because the work needs the job and the record that you hold.

## The record

- **`design.md`:** the spec, the branch, the forks and what's open, so that a later session, or this one after a compaction, carries on where the work stands.
- **The product's UI rules and their log,** in the repo, as design-knowledge's `product-standards.md` describes.
- **An older record:** keep it as it is, copy what still holds into the new sections, and go on from the first step that it hasn't done.
