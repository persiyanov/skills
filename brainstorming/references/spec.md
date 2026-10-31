# The spec

One per change, at `docs/specs/YYYY-MM-DD-<slug>/spec.md`. Write as much as the risk needs.

```markdown
# <title>

Status: Draft | Approved

## Summary
- Problem: <one line>
- Proposal: <one line>
- Tradeoff: <what we give up for it>
- Biggest risk: <one line>

## Problem
<What's broken or missing, for whom, and why now, with the evidence. What happens if we do nothing.>

## Goals and non-goals
Goals:
- <an outcome, with a baseline and a target where it can be measured>

Non-goals:
- <a plausible thing we deliberately don't do, and why>

## Constraints
- <a hard limit: scale, latency, budget, deadline, platform, compliance>
- Assumption: <what we assume> → checked by <how, when>

## The hard part
<The one or two problems that decide success, why they're hard, and how they're de-risked.>

## Solution
<The approach in one paragraph.>

<The key flows, one line per step, in a text block.>

<What each consumer meets, as they will meet it.>

<Optional sections, for where a mistake costs most. Add each one whose condition holds.>

### Data (when stored state or a data format changes)
<Today, from the code: each entity the change touches, its fields, states and invariants. New:
what changes, marked. Existing data: how it gets there, how that's checked, how it's reversed.>

### Contracts (when something this change can't update calls or reads it)
<What callers can rely on, errors and limits included. Who breaks, and how they move.>

### Other systems (when it calls a vendor or another service)
<How it actually behaves, probed live: payloads, limits, failures. Spend at expected volume.>

### Security and privacy (when it touches auth, other people's data, money, secrets or untrusted input)
<Who may do what, and where that's enforced. Whose data, which class, how long it's kept.
Abuse cases.>

## Failure modes
| What breaks | How far it spreads | How we detect it | How we recover |
| --- | --- | --- | --- |
| <failure> | <blast radius> | <signal> | <recovery> |

## Rollout
<Who gets it when, and the signal that moves it to the next stage.>

Undo: <how to roll back>

## Verification
| # | Guarantee | Falsified by |
| --- | --- | --- |
| G1 | <what must hold> | <the case that would break it> |

## Decisions
1. <the pick>. Rests on <fact>. Lost: <what lost>. (Q4 | my call)

## Open questions
- <question>. Decide when <trigger>.
```
