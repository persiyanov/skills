`design.md` records the tree and why the design is the way it is, so that you can answer the user's questions from the record, and a later session can carry on where the work stands. For a small change, fill in only the parts that the change touches.

````markdown
# <title>: Design

Status: Draft | Structure approved | Style approved
Product rules: <the file where the repo keeps its UI rules, and their log>
Canvas: <the Paper file and page>
Build: <the branch, how to run it, a login for each role, and how to reach each state> | not built yet

## Summary

- Problem: <one line>
- Design: <one line>
- Tradeoff: <what we give up for it>
- Biggest risk: <one line>

## The bar

Written before the first node, as design-knowledge's `product-standards.md` describes, with a source for each line.

- The people: <who, what they know, the job they come to do, the state they arrive in>, from <the evidence> or assumption
- The best products: <each product, with screens or links, what it does well and whether it suits this product>
- What each decided: <only when the work sets the look>
- Until the repo has UI rules: <the ranked qualities, and the log of what the user said, one dated line each>

## The tree

Each node with its state in each pass (open, settled or complete), the node you're on, and each question that waits on the user.

```text
<root>                      structure settled · style open
├─ <node>                   structure complete
│  └─ <node>                structure open        ← <question for the user>
└─ <node>                   structure open        ← you are here
```

## Jobs

| Job | Evidence | Fact it needs | Nodes that show it |
| --- | --- | --- | --- |
| <a person's job, in their words> | <who asked, where, and how often> or assumption | <the fact>: <what it means, its values, and what shows when there's none>, from <the code or the data> | <each node, at every place it appears> |

A need of the product, such as a legal line, takes its own row, with its source as the evidence.

## Cases

- <a person and their job, or what varies and its extreme>: <the real data or value>, from <where it comes from>

## Nodes

### <node>

- Brief: <its job, what it must show, where it sits and how much room it has>
- Tests:
  - <what must be true>: passes | fails, <why>
- Decisions: <the choice, the options it beat and the facts that decided it>, picked by the user on <date> | picked by you
- Changed on <date>: <the fact, constraint or flaw that changed it>
- Open: <a question, and whose it is>

## Findings and reopens

| Node | Layer | Finding or reopen | From | Status | Note |
| --- | --- | --- | --- | --- | --- |
| <the node> | <structure, style or behavior> | <what's wrong, or what changed> | <a review and when, the user, or your own look> | open / fixed / left / the user's decision | <the change, the proof, or the decision it rests on> |

- Check each finding before you give it a status: confirmed when you reproduced it or its rule applies, disproved when the rule it cites doesn't apply (quote the proof), unproven when you can do neither.
- Status, for a confirmed finding: fixed (changed, and checked by the next review), open (not fixed yet), left (the user or this record already decided it), or the user's decision (a call on direction, scope or cost).

## Baseline

Copied when the user approved the structure, on <date>, with the canvas frames `Baseline · <date>`. The style pass and the build are checked against both.

```text
<the tree as it stood, each node with its brief>
```

## Open items

- Still open: <the failure, and why no node's work settled it>
- Not checked: <what no review could check, and why>
- Assumptions: <each assumption in the bar, and each job marked as one>
- Questions only real users can answer: <the question>: <the test, or "accepted as a risk">
````
