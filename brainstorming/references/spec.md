# The spec

One per change, at `docs/specs/YYYY-MM-DD-<slug>/spec.md`. Write as much as the risk needs. A section that carries no risk is one line.

```markdown
# <title>

Status: Draft | Approved · Updated: YYYY-MM-DD

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

## Terminology
<Each new term, or existing term whose meaning changes: what it is, in one line. If none: "No new
terms.">

## Solution
<The approach in one paragraph.>

| Part | Its one job | Guarantees | Needs from others |
| --- | --- | --- | --- |
| <name> (new, changed or existing) | <job> | <what it promises> | <what it relies on> |

<The key flows, one line per step, in a text block. For code, the module tree and key types in a
code block.>

<What each consumer meets, as they will meet it. For an API, a real request and its full
response. For a UI, the screens in every state (empty, loading, error, partial). For a prompt, a
transcript. Prose about the wire is not the wire.>

<Optional sections, for where a mistake costs most. Add each one whose condition holds, or one line on why it doesn't apply.>

### Data (when stored state or a data format changes)
<Today, from the code: each entity the change touches, its fields, states and invariants, and
what enforces each. New: what changes, marked. Existing data: how it gets there, how that's
checked, how it's reversed.>

### Contracts (when something this change can't update calls or reads it)
<What callers can rely on, errors and limits included. Who breaks, and how they move.>

### Other systems (when it calls a vendor or another service)
<How it actually behaves, probed live: payloads, limits, failures. What happens when a call fails
halfway or repeats. Spend at expected volume. The way out if it changes or goes away.>

### Security and privacy (when it touches auth, other people's data, money, secrets or untrusted input)
<Who may do what, and where that's enforced. Whose data, which class, how long it's kept.
Abuse cases.>

## Failure modes
| What breaks | How far it spreads | How we detect it | How we recover |
| --- | --- | --- | --- |
| <failure> | <blast radius> | <signal> | <recovery> |

## Rollout
1. <the thinnest end-to-end slice>. Next stage when <signal>.
2. <the next stage>. Next stage when <signal>.

Undo: <how to roll back>

Told: <who hears about it, and where: docs, changelog, support>

## Verification
| # | Guarantee | Falsified by |
| --- | --- | --- |
| G1 | <what must hold> | <the case that would break it> |

<For probabilistic output (an LLM, ranking, matching), the check is an eval set with a baseline.>

Metrics: <what says it works after launch, baseline → target>

## Decisions
1. <the pick>. Rests on <fact>. Lost: <what lost>. (Q4 | call)

Scrapped: <design>, because <fact>

## Notes for planning
- <a fact the build must honor that changes no decision>

## Open questions
- <question>. Reopen when <trigger>.
```
