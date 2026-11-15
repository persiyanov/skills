`design.md` sits beside `standards.md`. It holds what the user needs to ask why, and what a later session needs to go on. A small change fills only the parts it touches.

```markdown
# <title>: Design

Status: Draft | Approved
Spec: `spec.md` | none
Standards: `standards.md`

## Summary
- Problem: <one line>
- Design: <one line>
- Tradeoff: <what we give up for it>
- Biggest risk: <one line>

## Where it is
- Cell: <layer × level>, frame <n>; next: <cell>
- Canvas: <the Paper file and page>
- Build: <branch; how to run it; a sign-in per role; how to reach each state> | not yet

## Choices

### C1. <the question> (<layer × level>)
- Options: <each in a few words, "change nothing" among them>
- Pick: <option>, the user's call on <date> | yours
- Why: <the facts and qualities that decided it, and why each other option lost>
- Changed on <date>: <the fact, constraint or flaw that changed it>

## For the user
- Still open: <the gap, and why no iteration settled it>
- Not checked: <what no review could check, and why>
- Assumptions: <from `standards.md`>
- Questions only real users can answer: <question>: <the test, or "accepted as a risk">
```
