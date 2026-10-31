---
name: planning
description: Plan and build an approved spec, or a request whose design is settled, into merge-ready PRs. Use when the user says build it, implement the spec or plan the work. Also use it when they pick up a spec marked Approved, or when work of several deploys (code, ops or infra) starts without a plan.
---

# Planning

## 1. Read first

Work on a branch that has the latest main. Then read the spec, the repo's policies for the paths it changes, and the code itself. Find every caller and consumer of the code that changes.

Plan from an approved spec. With no spec, plan from the user's request, and read "the spec" below as that request. If the spec is still a Draft or the design is open, stop and run /brainstorming.

## 2. Split into tickets

A ticket is one self-contained change: it does one thing, leaves the system working, and has a proof. Number them in build order:

- **Riskiest first,** so little is built on it if it fails. Then what matters most, so stopping early loses least.
- **End-to-end behaviors,** so each ticket proves something works.
- **Keep apart what can stand alone,** like a refactor and the feature that needs it.
- **Stop cutting** when the next cut leaves half a behavior, or needs scaffolding that costs more than the check is worth.

**One PR per ticket.** Stage what can't land at once: add the new, move to it, remove the old.

## 3. Write and show

With one ticket, skip this step and start building.

Otherwise write the plan in the shape under Files, and check that everything the spec asks for falls under a ticket. Then show it in chat. With an approved spec, start building, unless they asked only for the plan. Without one, wait for approval.

## 4. Build

Build the tickets in order without waiting for replies. Build only what the spec asks for. When you find other work, raise it in your next report and keep building. Build each ticket yourself, and use subagents only for research and review.

Every step you can run is yours: CLIs, QA, and live checks the user's rules allow. Leave to the user only decisions that need their judgment and what only they hold.

For each ticket, before you start the next:

1. Build it with its tests, on the previous ticket's branch if that isn't merged yet.
2. Run its proofs and get its PR ship-ready.
3. Mark it Done and report it.

## 5. Get it ship-ready

When a PR's linters and affected tests pass, run /zen-review on its full diff.

The PR description says how it was validated and links the spec.

You're done when every ticket's proof passes and every PR is merge-ready.

## When the spec or plan is wrong, or the code shows a simpler way

- **A decision the user made must change, or a new one needs their judgment:** return to /brainstorming with the fact before you build around it. A workaround makes the spec false, and the next change trusts it.
- **Anything else:** change it and tell the user.

## Tests

A proof shows it working the way its user meets it: for code, a scenario through the public entry point (/principles: Test Behavior, Not Implementation).

- **Choose the failure cases relevant to the behavior:** invalid input, a double run, the empty and the huge case, a failure halfway, a concurrent write.
- **Mock only what the test cannot run.** Base fakes of outside services on observed behavior.
- **Add a narrower test** only for what the scenario can't check: pure logic with many branches, a race, a vendor's wire format.

## Files

`plan.md` goes beside the spec, or in a new `docs/specs/YYYY-MM-DD-<slug>/` folder when there is none.

A ticket says what will be true and how you'll know, never how to get there.

`plan.md`:

```markdown
# <Feature>: Plan

Delivers the sibling `spec.md`, or without one, <the request in one line>.

## Delivery
<Any wait production or a person forces between tickets. With more than one repo, each ticket's repo.>

## Tickets
| Ticket | Delivers | Proved by | Status |
| --- | --- | --- | --- |
| 01: <name> | <what will be true> | <spec guarantees, or a check the spec doesn't list> | <Planned or Done> |
```
