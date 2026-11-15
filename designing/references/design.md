`design.md` records why the design is the way it is, so that you can answer the user's questions from the record, and a later session can pick up the reasoning. The overview card on the canvas shows where the work stands, so this file doesn't repeat it. For a small change, fill in only the parts that the change touches.

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

## Choices

### C1. <the question> (<layer × level>)

- Options: <each in a few words, including "change nothing">
- Pick: <option>, picked by the user on <date> | picked by you
- Why: <the facts that decided it, and why each other option lost>
- Changed on <date>: <the fact, constraint, or flaw that changed it>

## Open items

- Still open: <the gap, and why no iteration settled it>
- Not checked: <what no review could check, and why>
- Assumptions: <each assumption from `standards.md`>
- Questions only real users can answer: <the question>: <the test, or "accepted as a risk">
```
