---
name: planning
description: Plan and build an approved spec into merge-ready PRs, in ordered, verifiable tickets. Use when the user says build it, implement the spec, plan the work, ship it, or picks up a spec marked Approved. Design decisions stay in the spec; a missing or wrong one goes back to brainstorming.
---

# Planning

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Working from memory of a skill is not following it.

You own the outcome, not the documents: the spec's problem solved, as simply as the facts allow. The spec is the best design known when it was approved, the plan is the order, and the log is what changed on the way.

## 1. Ground

Read the spec and the code it touches, this session (/principles), as the spec's next reviewer: the code knows things the spec didn't. Trace the path from each entry point to the code that changes, so every caller and consumer is known. Find what already exists to reuse, and the nearest tests: their fixtures and naming are the floor. When the touched surface is uncertain, send read-only Explore subagents for breadth (callers, prior similar changes, tests), and read the touched files yourself.

Ground ends with the touched files, the reuse candidates and the nearest tests; tickets cite them. No approved spec, or a missing or contradictory decision: stop and run /brainstorming.

## 2. Slice

Divide delivery into verifiable tickets, in dependency order:

- **Deepest uncertainty first,** dependencies permitting, so if it fails little was built on it.
- **Complete end-to-end behaviors,** so each ticket proves something works.
- **One fresh context window** per ticket. A small change is one ticket. A prerequisite is its own ticket only when landing it alone is safer, or settles an unknown the later tickets depend on.
- **Outcome first.** For each ticket, name the observable outcome and its proof, then include only the implementation needed to deliver it.
- **Replacing a surface:** audit it behavior by behavior against the new before deleting it.

Decide the repo and PR boundaries and the merge and deploy order. One PR per repo, unless one part is ready while another's design is still open. A dependency on a merge or a deploy is not met when a ticket is done; name it.

Resolve delivery choices from the code and the approved spec. When two implementation approaches are plausible and the difference is material (extend an existing unit or add one, migrate or adapt), name both in the ticket's Plan with the reason, and take the one with less machinery. Ask the user when a choice needs their preference or changes scope, risk, or an external commitment. Record unknowns that depend on the implementation as triggers.

## 3. Write

Write the plan and tickets with /readable, in the shapes under Files, with the complete roadmap table in the plan.

## 4. Approve

Check first:

- every spec requirement lands in a ticket;
- every cited file, function and test was read this session;
- proposed additions are marked as such;
- nothing is built that no criterion exercises.

Then show the full roadmap table in chat, with a short delivery summary, and wait. The user often reshuffles tickets: redo the order and show it again. Mark the plan Approved when the user approves it.

## 5. Build

Take the first unfinished ticket whose dependencies are satisfied and mark it In progress. Before you build it, and whenever the code resists, ask whether the design is still the simplest way to the spec's goals (/principles: Radical Simplicity). Build it with its tests, with the relevant /principles as guidance. Fill in its Evidence, mark it Done, report it with the log entries since the last report, and take the next. A fresh session reads the plan and starts only from an approved one.

## 6. Ship

Before each PR, make it review-ready: the linters and the affected tests are green, and you have reread every changed line and believe it ships as is. Only then run /zen-review on the full PR diff; reviewing a change you already know is unfinished spends the review on what you could have found yourself.

Squash the PR's migrations, unless a database you cannot rewrite has run one. The PR description says the problem, the resulting behavior, how it was validated, and what to look at first; links the spec; and includes only the log decisions relevant to reviewing this PR.

Delivery is done when every ticket is Done and every PR is merge-ready: zen-review's findings fixed and verified, its calls answered by the user.

## When the spec is wrong

A spec you follow against the facts is a spec you didn't own.

- **A factual correction, every decision and promise stands:** edit the spec, log it, and tell the user in the same turn.
- **A call that the code shows is wrong, or costlier than it needs to be:** change it the same way. You made it, so you own it.
- **A decision the user made must change, or a new one is needed:** return to /brainstorming with the fact and the simpler option before you build around it. Rewrite the spec in place, get it re-approved, log it. A workaround makes the spec lie, and the next change builds on the lie.
- **Anything else that changes the plan:** log it.

## Tests

Tests ship inside the ticket, and every criterion names its proof: a scenario through the public entry point, or a row in one (/principles: Test Behavior, Not Implementation).

- **Failure cases are rows** of the scenario that walks their path, not tests of their own. Choose the ones relevant to the behavior: invalid input, the double run, the empty case and the huge one, the failure halfway, the concurrent write.
- **Exercise the real artifact;** mock only what the test cannot own. Ground external fakes in observed behavior, or in the documented contract where you cannot observe. Use synthetic cases for failures and boundaries.
- **A narrower test** names the fact the scenario cannot carry: branch-dense pure logic, a race, a vendor's wire.
- **Evals or live runs** for model judgment.

The repo's testing policy, where one exists, overrides this.

## Files

`plan.md` sits beside the spec. Ticket detail lives in the plan when there is one ticket, and in `tickets/NN-<name>.md` otherwise.

- **One home per fact:** design in the spec, order in the plan, change in the log, proof in the ticket. Cite the spec; never restate it.
- **Name the file, never the line.** A ticket that repeats one pattern across many files describes it once and lists a few representative paths.

The roadmap has one row per ticket, in dependency order. Columns: Ticket, Delivers, Depends on, Status, PR, Repo. Omit Repo for a single repo and PR for a single PR, and name them in the delivery summary instead. Use proposed PR labels until real links exist; a ticket spanning repos pairs each repo with its PR. Status is Planned, In progress, Blocked, or Done. Keep cells short: acceptance criteria and implementation detail stay in the tickets.

`plan.md`:

```markdown
# <Feature>: Plan

Status: Proposed

Delivers the sibling `spec.md`. <One line of delivery context when the spec's Problem is not it.>

## Delivery
<Repos/branches, reason for any PR split, merge and deploy order. Keep it short.>

## Tickets
Tickets in dependency order:

| Ticket | Delivers | Depends on | Status | PR | Repo |
| --- | --- | --- | --- | --- | --- |
| 01: <name> | <outcome> | — | Planned | <PR label> | <repo> |
| 02: <name> | <outcome> | 01 | Planned | <PR label> | <repo> |

## Triggers
- If <evidence>, then <change>.

## Log
- <date>: initial plan.
- <date>: <trigger> -> <decision> -> <where it landed: spec section, ticket, code>.
```

Ticket:

```markdown
# NN: <name>

**Delivers:** <the behavior, from the consumer's side>

## Acceptance
- [ ] <observable outcome> -> <the test or command that proves it>
- [ ] <spec guarantee N> -> <named test>

## Plan
1. <file, function, pattern to copy. Riskiest first.>

## Evidence
<filled when done: commands and their signal, review outcome>
```
