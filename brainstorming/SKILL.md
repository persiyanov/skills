---
name: brainstorming
description: Figure out with the user what to build and why. Use when a change has a choice the facts don't settle: "how should we build Y", "I want Z to work differently", "design this". Skip it when the facts force the design: a mechanical edit, a bug with a known cause.
---

# Brainstorming

## 1. Spec or not

Skip the spec when being wrong is cheap: the change is small and easy to undo. Settle the open choices through /grilling, then build it. If grilling shows it isn't cheap, start the spec.

Everything else gets a spec (`references/spec.md`) and the steps below.

Hard to undo means reverting doesn't put things back: what it did to data, money or anyone outside stays done.

A roadmap stays a short ordered list of outcomes. Spec only the next one, because building it will change the rest.

## 2. Grill

Run /grilling. After each round, write what it settled into the spec and show the diff. Write only what the user needs to agree on. Leave mechanics like retry counters and internal columns to the build. The approval below replaces grilling's confirmation.

## 3. Review

Ask three fresh subagents to review the spec. Give each only its job, the spec's path and the code.

- One takes each consumer and tries the design the way they would.
- One walks one real case through the design and checks every claim the spec makes about how things work today.
- One asks whether there is a simpler or more standard solution.

Each reports only what would change the design or block building.

Test each finding. If it changes what the user decided or asked for, ask them. Otherwise fix the spec.

## 4. Approve

Show only the summary, the calls you made and what review changed. When they approve, set the status to Approved and move on to /planning. If you return to an approved spec, set it back to Draft and get approval again.
