---
name: planning
description: Plan and build an approved spec, or a request whose design is settled, into merge-ready PRs. Use when the user says build it, implement the spec or plan the work. Also use it when they pick up a spec marked Approved, or when work of several deploys (code, ops or infra) starts without a plan.
---

# Planning

## 1. Read first

Work on a branch that has the latest main. Then read the spec, the repo's policies for the paths it changes, and the code itself. Find every caller and consumer of the code that changes, and what already does part of the job.

Plan from an approved spec. With no spec, plan from the user's request, and treat that request as the spec. If the spec is still a Draft or the design is undecided, stop and run /brainstorming.

## 2. Split into tickets

A ticket is one self-contained change: it does one thing, leaves the system working, and has an acceptance check. Number them in build order:

- **Riskiest first,** so little is built on it if it fails. Then what matters most, so stopping early loses least.
- **End-to-end behaviors,** so each ticket proves something works.
- **Keep independent changes separate,** like a refactor and the feature that needs it.
- **Stop splitting** when the next split leaves a partial behavior, or needs scaffolding that costs more than the check is worth.

Default to one PR per plan. If multi-repo, one PR per repo. Unless there's a strong reason to have multi-PR deployment, like a change that can't ship at once. Then ship it in stages: add the new, migrate to it, remove the old.

## 3. Write and show

With one ticket, skip this step and start building.

Otherwise write the plan in the format under Files, and check that everything the spec asks for falls under a ticket. Then /show-me the plan and what each ticket changes, as it is today and as proposed. Ask for plan approval.

## 4. Build

Build the tickets in order without waiting for replies. Build only what the spec asks for. When you find other work, mention it in your next report and keep building. Build each ticket yourself, and use subagents only for research and review.

Every step you can run is your job: CLIs, QA, and live checks the user's rules allow. Leave to the user only decisions that need their judgment and what only they have.

For each ticket, before you start the next:

1. Build it with its tests
2. Run its acceptance checks
3. Mark it Done and report it

When a PR's last ticket is Done, get the PR merge-ready. Start a later PR on the previous PR's branch if that one isn't merged yet.

If an acceptance check or the next ticket needs a merge, a deploy or a person, stop there and tell the user what has to happen. The ticket isn't Done until its acceptance check passes.

## 5. Get it merge-ready

When a PR's linters and affected tests pass, run /zen-review on its full diff.

The PR description says how it was validated and links the spec.

You're done when every ticket's acceptance check passes and every PR is merge-ready.

## When the spec or plan is wrong, or the code shows a simpler way

- **A decision the user made must change, or a new one needs their judgment:** return to /brainstorming with the fact before you build around it. A workaround makes the spec false, and the next change relies on it.
- **Anything else:** change it and tell the user.

## Tests

An acceptance check shows it working the way its user uses it: for code, a scenario through the public entry point (/principles: Test Behavior, Not Implementation).

- **Choose the failure cases relevant to the behavior:** invalid input, a duplicate run, the empty and the huge case, a partial failure, a concurrent write.
- **Mock only what the test cannot run.** Base fakes of external services on observed behavior.
- **Add a narrower test** only for what the scenario can't check: pure logic with many branches, a race, a vendor's wire format.

## Files

`plan.md` goes next to the spec, or in a new `docs/specs/YYYY-MM-DD-<slug>/` folder when there is none.

A ticket says what will be true and how to verify it, never how to build it.

`plan.md`:

```markdown
# <Feature>: Plan

Implements `spec.md` in this folder, or without one, <the request in one line>.

## Delivery
<Anything that forces a wait between tickets, like a production deploy or a person. With more than one repo, each ticket's repo.>

## Tickets
| Ticket | Outcome | Verified by | Status |
| --- | --- | --- | --- |
| 01: <name> | <what will be true> | <spec guarantees, or a check the spec doesn't list> | <Planned or Done> |
```
