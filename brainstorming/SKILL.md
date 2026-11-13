---
name: brainstorming
description: 'Figure out with the user what to build and why. Use when a change has a choice the facts don''t settle: "how should we build Y", "I want Z to work differently", "design this". Skip it when the facts force the design: a mechanical edit, a bug with a known cause, or a change only to what people see, which is /designing''s.'
---

# Brainstorming

## 1. Spec or not

Skip the spec when being wrong is cheap: the change is small and easy to undo. Settle the open choices through /grilling, then build it. If grilling shows it isn't cheap, start the spec.

Everything else gets a spec (`references/spec.md`) and the steps below.

Hard to undo means reverting doesn't put things back: what it did to data, money or anyone outside stays done.

A roadmap stays a short ordered list of outcomes. Spec only the next one, because building it will change the rest.

## 2. Grill

Run /grilling. After each round, write what it settled into the spec and show the diff. Write only what the user needs to agree on. Leave implementation details like retry counters and internal columns to the build, and screens, their states and their words to /designing. The approval below replaces grilling's confirmation.

## 3. Review

Ask three fresh subagents to review the spec. Give each only its task, the spec's path and the code.

- One takes each consumer and tries the design the way they would.
- One traces one real case through the design and checks every claim the spec makes about how things work today.
- One gets the Problem section instead of the spec's path, so the Solution can't shape its answer, and works out how it should've been done from day one, the simplest and most standard way. Each difference from the Solution is a finding.

Each reports only what would change the design or block building.

Verify each finding. If it changes what the user decided or asked for, ask them. Otherwise fix the spec.

## 4. Design

When the change alters what people see, run /designing on the reviewed spec. Its record, `design.md`, goes in the spec's folder, and its canvas lives on Paper. Together they are the spec's account of what people see: the Solution links them instead of describing screens. When the design shows the spec is wrong, fix the spec as review does: ask the user when it changes what they decided.

## 5. Approve

Show only the summary, the decisions you made, what review changed and, with a design, its overview card and "Before and after". One approval covers the spec and its design. When they approve, set the status to Approved and move on to /planning. If you return to an approved spec, set it back to Draft and get approval again.
