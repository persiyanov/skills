---
name: brainstorming
description: Agree with the user on what to build and why, by grilling them. Use whenever a change has an open design, a choice the facts don't settle, even when the user doesn't say "spec": "let's add X", "how should we build Y", "I want Z to work differently", "design this". Skip it when the facts force the design: a mechanical edit, a bug with a known cause, a decision the user already made.
---

# Brainstorming

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Following a skill from memory does not count. After a compaction, read it again.

The spec is how you and the user agree on what to build and why. It settles every choice the user needs to make or would want a say in, and leaves no big gap in the design. /planning takes it from there, and the details of how it's built live in the plan.

## 1. Size

Skip the spec when the change is easy to undo, affects one component or one team, and follows a pattern you've built before. Settle the open choices with the user through /grilling, or in plan mode if you have one, then build it and record the decisions in the PR. Everything else gets a spec (`references/spec.md`) and the steps below.

Schemas, public contracts, data formats, vendor commitments, prices customers have seen, a hire and anything announced are hard to undo. Code behind a flag is easy.

If in doubt, start without a spec and write one when you find more risk.

## 2. Ground

Start from what the user gave you: the problem, why now and the must-haves. Before your first question, find out what is true (/principles: Know What Is True). Send three subagents in parallel, one angle each:

- **What the change touches,** and how it got this way: the code, data, docs, past cases and history, and the words people use for them.
- **What sits next to it:** features, flows and policies that already do part of the job or constrain it.
- **Outside:** prior art, conventions and best practices, with sources.

Read what they point to yourself. Then check which of the template's optional sections apply: data, contracts, other systems, security. Each one that applies gets its own rounds.

## 3. Grill

Run /grilling to reach the understanding and build the spec. Follow grilling guidelines, and work from the top of the spec template to the bottom.

The first round is alignment on the problem. First spec draft is written once there's an understanding of the Problem, Goals and Non-goals.

Then sketch the whole solution from two ends. One end is what each person the change touches will see and use. The other is what you already have: the parts of your system, plus the vendors, platform and conventions you build on. Look for the smallest change that connects the two. It can add, change or remove a part, or change nothing. For every part you add or change, show how it fits the rest and which goal it serves.

Show both ends on the cheapest real artifact you can make:

| Work | What people meet | What you have today |
| --- | --- | --- |
| API, data | each consumer's call and its full response, in every state | the entities, rules and endpoints it builds on |
| UI | the screens side by side, in every state | the components, states and data behind them |
| Prompt, skill, agent | a draft run on a real task, with its transcript | the tools it calls, what code enforces and what the AI decides |
| Refactor, infra | the new module tree, call tree or deploy diagram, with one real next change made in it | today's structure and the contracts that must not move |
| Policy, process, pricing | the new rule applied to real past cases | the rules, steps, tools and people in place today |

As the sketch takes shape, name the hard part: biggest problems and risks that decide whether this works. Test them with a quick spike when debate can't settle it.

Default to build only what the user asked for. You can suggest the scope changes as part of grilling process if that's what genuinely leads to better target state for the one who experiences the problem, the user, consumer, maintainer, future you, etc. Ask about every choice the user would want a say in.

Ideal spec is when it ensures alignment between you and the user, and the one that leads to roughly the same plan via /planning. That's the perfect balance, not too abstract, not too detailed, with user expressing their opinion everywhere they might have one.

After each round of grilling, write the spec delta settled by this round. The user reads the delta diff to check you agree.

Rely on /principles often. Think, but don't overthink. Strive for clean and simple systems with fewest rules, fewest assumptions. That serve the consumer while not making life of maintainer miserable.

As part of the grilling process, regularly zoom out. It's normal to scrap the design and start exploring a different route. By truly thinking through the solution space, the truth is elicited.

## 4. Review

Ask three fresh no-edits subagents to review the spec. They haven't seen the conversation, so they can catch what you and the user both missed.

Give each one its role, the spec's path and the code. Do not bias them. They are independent opinion. Don't nudge them towards the answer you expect.

- **The user:** takes each real person the change touches and tries it the way they would: writes the request and reads the full response, clicks through the screens, runs the prompt, applies the rule to a real case. Reports where it breaks, confuses or gets in the way.
- **The builder:** walks one real case through the design, end to end, and checks every claim the spec makes about how things work today. Reports where the design fails, where it's wrong, and where something smaller or more standard would do the job.
- **The pragmatist:** are we solving the right problem? for a given scope, is there a simpler, cleaner, more elegant solution to the problem? is there a simpler, cleaner, more elegant solution if we change the scope? is this truly lowest entropy, lowest complexity target state? is this principled /principles? Ask these questions at different altitudes of the spec, from the highest level to the lowest level. Small details are as important as the big picture.

Each reports, most serious first, only what would change a decision, block building, or cause real harm, such as lost data, a broken flow, lost money or a safety risk. A finding against a decision names the fact the decision missed.

Test each finding. If it holds and changes what the user decided or asked for, ask them in a new round. Otherwise fix the spec yourself, or note it for planning. Run the review again only when a round changed a decision the user made, or the hard part.

## 5. Gate

- Every section is settled. Every optional section is settled or ruled out in one line.
- The user answered every choice they'd want a say in.
- Nothing in the spec goes beyond what the user asked for or agreed to.
- Every outside fact names its source.
- Where the design disagrees with what grounding found, the user settled it in a round.
- No open question blocks building.

The user has already seen each round's diff, so show only what's new to them: the summary, the calls you made, and what review changed. When they approve, set the status to Approved and move on to /planning. If an approved decision changes later, set the spec back to Draft and pass this gate again.

## Writing the spec

Write the spec for the user who approves it (/principles: Write for the Reader), with /readable and /writing-clearly-and-concisely.

- **Only what the user needs to agree on.** Keep what people will see and use, the shape of the data, the risks and the decisions. Leave mechanics like retry counters and internal columns to the plan.
- **Open each section with its answer.** Then show it with a flow, a payload, a screen or a diagram (/show-me), and add prose only where the picture needs it.
- **Write each decision on one line:** the pick, the fact it rests on, what lost, and the question that settled it, or "call" if you made it yourself. Keep the debate in the rounds.
- **Say each thing once.** After that, point to it.
