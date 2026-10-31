---
name: brainstorming
description: Agree with the user on what to build and why, by grilling them. Use whenever a change has an open design, a choice the facts don't settle, even when the user doesn't say "spec": "let's add X", "how should we build Y", "I want Z to work differently", "design this". Skip it when the facts force the design: a mechanical edit, a bug with a known cause, a decision the user already made.
---

# Brainstorming

When a step names a skill (/name), invoke it with the Skill tool at that step and follow it in full.

## 1. Spec or not

Skip the spec when the change is easy to undo. Settle the open choices with the user through /grilling, then build it and record the decisions in the PR. Everything else gets a spec (`references/spec.md`) and the steps below.

Schemas, public contracts, data formats, vendor commitments, prices customers have seen and anything announced are hard to undo.

## 2. Ground

Before your first question, find out what is true (/principles: Know What Is True). Send three subagents in parallel, one angle each:

- **What the change touches:** the code, data, docs, past cases and history.
- **What sits next to it:** features, flows and policies that already do part of the job or constrain it.
- **Outside:** prior art, conventions and best practices, with sources.

Read what they point to yourself.

## 3. Grill

Run /grilling to reach the understanding and build the spec.

Sketch the smallest change that takes what you have (your system, vendors, platform, conventions) to what each person the change touches will see and use.

Show what people meet on the cheapest real artifact you can make:

| Work | What people meet |
| --- | --- |
| API, data | each consumer's call and its full response |
| Refactor, infra | the new module tree, call tree or deploy diagram, with one real next change made in it |
| Policy, process, pricing | the new rule applied to real past cases |

After each round of grilling, write the spec delta settled by this round. The user reads the delta diff to check you agree.

## 4. Review

Ask two fresh no-edits subagents to review the spec.

Don't tell them the answer you expect.

- **The builder:** walks one real case through the design, end to end, and checks every claim the spec makes about how things work today. Reports where the design fails and where it's wrong.
- **The pragmatist:** are we solving the right problem? Is there a simpler or more standard solution, at this scope or a different one?

Each reports only what would change a decision, block building, or cause real harm. A finding against a decision names the fact the decision missed.

Test each finding, and drop one that doesn't hold. If it changes what the user decided or asked for, ask them in a new round. Otherwise fix the spec yourself. Run the review again only when the hard part changed.

## 5. Gate

- Nothing in the spec goes beyond what the user asked for or agreed to.
- Every outside fact names its source.
- No open question blocks building.

Show only the summary, the calls you made and what review changed. When they approve, set the status to Approved and move on to /planning. If an approved decision changes later, set the spec back to Draft and pass this gate again.

## Writing the spec

Write only what the user needs to agree on, with /readable and /writing-clearly-and-concisely. Leave mechanics like retry counters and internal columns to the build.
