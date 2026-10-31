---
name: planning
description: Plan and build an approved spec, or a request whose design is settled, into merge-ready PRs. Use when the user says build it, implement the spec or plan the work. Also use it when they pick up a spec marked Approved, or when work of several deploys (code, ops or infra) starts without a plan.
---

# Planning

When a step names a skill (/name), invoke it with the Skill tool at that step and follow it in full.

## 1. Read first

Pull the latest main and merge it into the branch. Then read the spec, the repo's policies for the paths it changes, and the code itself, in this session (/principles). Find every caller and consumer of the code that changes.

Plan from an approved spec. With no spec, plan from the user's request, and read "the spec" below as that request. If the spec is still a Draft or the design is open, stop and run /brainstorming.

## 2. Split into tickets

Split the work into tickets, numbered in build order:

- **Riskiest first,** so little is built on it if it fails.
- **End-to-end behaviors,** so each ticket proves something works.
- **Few tickets.** Work that one proof covers is one ticket.
- **You do the work.** Every step you can run is yours: CLIs, QA, and live checks the user's rules allow. Leave to the user only decisions that need their judgment and what only they hold.

**One PR per repo.** Split only where production must change before the next part can ship.

## 3. Write and show

Write the plan in the shape under Files. Before you show the plan, check that every spec requirement falls under a ticket.

Then show the plan in chat. With an approved spec, start building. Without one, wait for approval.

## 4. Build

Build the tickets in order without waiting for replies. Build only what the spec asks for. When you find other work, raise it in your next report and keep building. Build each ticket yourself, and use subagents only for research and review.

For each ticket:

1. Build it with its tests.
2. Run its proofs, mark it Done, and report it.

## 5. Ship

When a PR's linters and affected tests pass, run /zen-review on the full PR diff.

The PR description says how it was validated and links the spec.

Delivery is done when the spec's goals hold and every PR is merge-ready.

## When the spec or plan is wrong, or the code shows a simpler way

- **A decision the user made must change, or a new one is needed:** return to /brainstorming with the fact before you build around it. A workaround makes the spec false, and the next change trusts it.
- **Anything else:** change it and tell the user.

## Tests

A proof shows it working the way its user meets it: for code, a scenario through the public entry point (/principles: Test Behavior, Not Implementation).

- **Choose the failure cases relevant to the behavior:** invalid input, a double run, the empty and the huge case, a failure halfway, a concurrent write.
- **Mock only what the test cannot run.** Base fakes of outside services on observed behavior.
- **A narrower test** names the fact the scenario cannot check: pure logic with many branches, a race, a vendor's wire format.

## Files

`plan.md` goes beside the spec, or in a new `docs/specs/YYYY-MM-DD-<slug>/` folder when there is none.

A ticket says what will be true and how you'll know, never how to get there.

`plan.md`:

```markdown
# <Feature>: Plan

Delivers the sibling `spec.md`, or without one, <the request in one line>.

## Delivery
<With more than one PR: each PR's repo, tickets and deploy point. Any wait production or a person forces.>

## Tickets
| Ticket | Delivers | Proved by | Status |
| --- | --- | --- | --- |
| 01: <name> | <what will be true> | <spec guarantees, or a check the spec doesn't list> | <Planned or Done> |
| 02: <name> | <what will be true> | <proof> | Planned |
```
