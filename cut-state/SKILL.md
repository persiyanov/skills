---
name: cut-state
description: >-
  Find state in a codebase that doesn't earn its place, read the worst parts until you understand
  them, and remove it. Use for /cut-state, and whenever the user says too much state, reduce state,
  state audit, "this state makes no sense", or wants a net-diff cut driven by what the code stores,
  even if they only point at a module. Not for bug hunts or tidying a diff.
---

# Cut state

Every stored fact is a promise that each later change must keep true. Remove the ones that don't earn it. The measure is the maintainer's cognitive load. A net-diff target (-500 unless the user names one) only says how far to keep looking, so never pad it.

Prefer, in order:

1. Delete the state.
2. Derive it from state that stays, or fold two facts into one.
3. Make its invalid combinations unrepresentable.

## Find the target

Start from the tables and other long-lived stores, not the biggest files. For each piece of state, list who writes it and who reads it. Search every name it goes by: the code's name, the stored name raw queries use, runbooks, dashboards, infra. A search under one name makes live state look dead.

Shapes worth suspecting:

- Written and never read, or read only by a log
- A finished job: a table nothing inserts into anymore
- A timestamp only read as yes or no, or two only read as "the latest of"
- A flag that always matches another field being empty
- A second counter or clock kept for a rare case
- State that only orders a race whose wrong outcome corrects itself

Go where the most state meets the most decisions. Removing small things that sit alone changes the diff and little else.

## Understand it

Read the target end to end: writers, readers, tests, docs. For each piece, ask what would disappear without it, then ask how this part could work with less state at all.

Odd state often has a real reason. Name it and check that it still holds. Then try the cut and read what fails, because a failing test may be that reason showing up. If it is, keep the state and write down why.

Where you can read production safely, count: how often the rare path runs, what rows remain, what a removal would lose. These numbers often settle what reading can't.

## Cut

Read public docs and API promises first, since a promise decides what counts as a behavior change. Apply what keeps every promise, and run the tests of what you touched.

Bring each behavior change as a decision: what people see today, in which situation, what they'd see instead, what it frees, and your recommendation. Anything that loses data for good is always a decision.

After each cut, search the whole repo for every name and rule you removed, docs included. Types and tests won't catch a stale promise in prose.

Moved code and renames aren't cuts.

## Report

- Net diff, split into production and tests
- What went, why, and what replaced it
- What people would see differently
- What you tried and kept, with the reason, so nobody repeats it
- What you didn't read
- The decisions, each with your recommendation

Mark estimates as estimates. When an earlier claim turns out wrong, say so first.
