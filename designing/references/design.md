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
- Depth: <structural / behavioral / visual>, <what is being worked on now>
- Canvas: <the Paper file, page and section>
- Prototype: <branch; how to run it; a sign-in per role; how to reach each state>

## Today
- Problems: <element: the harm it does, one per line>
- Keep: <what today's design does well>

## Directions
| Direction | What it is | What looking at it showed |
| --- | --- | --- |

- Pick: <direction>, because <the fact or quality that decided it>. <For each other direction, why it lost.>
- The user saw them on <date>: <what they said, and why> | not shown: <why>

## Choices

### C1. <the question> (<level>, <depth>)
- Options: <each in a few words, "change nothing" among them>
- Pick: <option>
- Why: <the facts and qualities that decided it, and why each other option lost>
- Changed on <date>: <the fact, constraint or flaw that changed it>

## Checks

### <depth, or the build>, <date>
Found <n>; fixed <n>; undone <n>. Left open:

| Gap | Why |
| --- | --- |
| <its number, and what it says> | <for the user / set aside: the fact that contradicts it> |

## For the user
- Decisions: <the decision, its options, the recommendation>
- Questions only real users can answer: <question>: <the test, or "accepted as a risk">
- Not checked: <what no review could check, and why>
```
