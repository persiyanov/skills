`design.md` records why the design is the way it is, so that you can answer the user's questions from the record, and a later session can pick up the reasoning. The overview card at the top of the canvas shows your path and where the work stands, so this file doesn't repeat it. For a small change, fill in only the parts that the change touches.

```markdown
# <title>: Design

Status: Draft | Approved
Standards: `standards.md`
Canvas: <the Paper file and page>
Build: <the branch, how to run it, a login for each role, and how to reach each state> | not built yet

## Summary

- Problem: <one line>
- Design: <one line>
- Tradeoff: <what we give up for it>
- Biggest risk: <one line>

## Cases

- <a person and their job, or what varies and its extreme>: <the real data or value>, from <where it comes from>

## The trace

| Job | Evidence | Fact it needs | Parts that show it | Place |
| --- | --- | --- | --- | --- |
| <a person's job, in their words> | <who asked, where, and how often> or assumption | <the fact>: <what it means, its values, and what shows when there's none>, from <the code or the data> | <each part, at every place it appears> | <in view, only where it differs, one step away, later or gone>: <why> |

A need of the product, such as a legal line, takes its own row, with its source as the evidence.

## Choices

### C1. <the question> (<part>)

- State: open, because <what opened it> | settled by <what settled it>
- Options: <each in a few words>
- Pick: <option>, picked by the user on <date> | picked by you
- Why: <the facts that decided it, and why each other option lost>
- Changed on <date>: <the fact, constraint, or flaw that changed it>

## Findings

| Finding | Review | Check | Status | Note |
| --- | --- | --- | --- | --- |
| <the part: what's wrong> | <which review, and when> | confirmed / disproved / unproven | fixed / open / left / the user's decision | <the change, the proof, or the decision it rests on> |

- Check: confirmed when you reproduced it or its rule applies, disproved when the rule it cites doesn't apply (quote the proof), unproven when you can do neither.
- Status, for a confirmed finding: fixed (changed, and checked by the next review), open (not fixed yet), left (the user or this record already decided it), or the user's decision (a direction or scope call).

## Open items

- Still open: <the gap, and why no iteration settled it>
- Not checked: <what no review could check, and why>
- Assumptions: <each assumption from `standards.md`, and each job in the trace marked as one>
- Questions only real users can answer: <the question>: <the test, or "accepted as a risk">
```
