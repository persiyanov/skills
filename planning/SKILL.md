---
name: planning
description: Plan and build an approved spec, or a request whose design is settled, into merge-ready PRs. Use when the user says build it, implement the spec or plan the work. Also use it when they pick up a spec marked Approved, or when work of several deploys (code, ops or infra) starts without a plan.
---

# Planning

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Following a skill from memory does not count.

## 1. Read first

Pull the latest main and merge it into the branch. Then read the spec, the repo's policies for the paths it changes, and the code itself, in this session (/principles). Trace each entry point to the code that changes, so you know every caller and consumer.

Plan from an approved spec. With no spec, plan from the user's request, and read "the spec" below as that request. If the spec is still a Draft or the design is open, stop and run /brainstorming.

## 2. Split into tickets

Split the work into tickets, numbered in build order:

- **Riskiest first,** so little is built on it if it fails.
- **End-to-end behaviors,** so each ticket proves something works.
- **Few tickets.** Work that one proof covers is one ticket.
- **You do the work.** Every step you can run is yours: CLIs, QA, and live checks the user's rules allow. Leave to the user only decisions that need their judgment and what only they hold, and list these when you show the plan.

**One PR per repo.** Split only where production must change before the next part can ship: data the later part reads, a deploy it needs, or a rollout it waits for. Never split for size, for reviewers, or because one part is ready first.

Build only what the spec asks for. When two approaches would both work, take the one with less to build and maintain.

## 3. Write and get approval

Write the plan and tickets in the shapes under Files. Before you show the plan, check that:

- Every spec requirement appears in a ticket.
- You read every file, function and test the tickets cite, in this session.

Then show the Delivery section and the ticket table in chat. Wait for approval.

## 4. Build

Approval covers every ticket. Build them in order without waiting for replies, and stop only for a decision that is the user's (When the spec is wrong). When you find work the spec doesn't ask for, raise it in your next report and keep building. Build each ticket yourself, and use subagents only for research and review.

For each ticket:

1. Build it with its tests.
2. Run its proofs, mark it Done, and report it.

## 5. Ship

Before a PR goes to review, its linters and affected tests pass. Only then run /zen-review on the full PR diff.

The PR description states the problem, the resulting behavior and how it was validated. It links the spec.

Delivery is done when every ticket is Done and every PR is merge-ready: zen-review's findings fixed and verified, and the decisions it left to the user answered.

## When the spec is wrong

- **A fact was wrong, or a decision you made is wrong or costlier than needed, and the user's decisions and every promise still hold:** fix the spec and tell the user in the same reply.
- **A decision the user made must change, or a new one is needed:** return to /brainstorming with the fact before you build around it. A workaround makes the spec false, and the next change trusts it.

## Tests

A proof is a scenario through the public entry point, or a case in one (/principles: Test Behavior, Not Implementation).

- **Failure cases belong to the scenario that covers their path,** not to tests of their own. Choose the ones relevant to the behavior: invalid input, a double run, the empty and the huge case, a failure halfway, a concurrent write.
- **Test the real code,** and mock only what the test cannot run. Base fakes of outside services on observed behavior, or on their documented contract where you cannot observe.
- **A narrower test** names the fact the scenario cannot check: pure logic with many branches, a race, a vendor's wire format.

## Files

`plan.md` goes beside the spec, or in a new `docs/specs/YYYY-MM-DD-<slug>/` folder when there is none. With one ticket, its details go in the plan. Otherwise each ticket gets `tickets/NN-<name>.md`.

- **Each fact is written once:** design in the spec, order in the plan, proof in the ticket.
- **Name the file, never the line.** A ticket that repeats one pattern across many files describes it once and lists a few example paths.

`plan.md`:

```markdown
# <Feature>: Plan

Delivers the sibling `spec.md`, or without one, <the request in one line>.

## Delivery
<One line per PR: its repo and what it changes for users. With more than one PR, each PR's deploy point. The waits production or a person forces.>

## Tickets
| Ticket | Delivers | Status | PR |
| --- | --- | --- | --- |
| 01: <name> | <outcome> | <Planned or Done> | <PR name> |
| 02: <name> | <outcome> | Planned | <PR name> |
```

Ticket:

```markdown
# NN: <name>

## Acceptance
- <observable outcome> -> <the test or command that proves it>
- <spec guarantee N> -> <named test>

## Plan
1. <file, function, pattern to copy, nearest test.>
```
