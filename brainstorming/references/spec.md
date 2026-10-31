At `docs/specs/YYYY-MM-DD-<slug>/spec.md`.

```markdown
# <title>

Status: Draft | Approved

## Summary
- Problem: <one line>
- Proposal: <one line>
- Tradeoff: <what we give up for it>
- Biggest risk: <one line>

## Problem
<What's broken or missing, for whom, with the evidence.>

## Non-goals
- <a thing we don't do, and why>

## Solution
<The approach and the key flows.>

<What each consumer meets, shown for real: an API's request and full response, a UI's screens in every state, a prompt's transcript, a refactor's module tree, a rule applied to past cases.>

### Data (when stored state or a data format changes)
<What changes. Existing data: how it gets there.>

### Contracts (when something this change can't update calls or reads it)
<Who breaks, and how they move.>

### Other systems (when it calls a vendor or another service)
<How it behaves, probed live.>

### Security and privacy (when it touches auth, other people's data, money or untrusted input)
<Who may do what. Whose data.>

## Undo
<How to roll back.>

## Verification
| # | Guarantee | Falsified by |
| --- | --- | --- |
| G1 | <what must hold> | <the case that would break it> |

## Decisions
1. <the pick>. Why: <reason>. Lost: <what lost>. <"My call." if the user didn't decide it>

## Open questions
- <question>
```
