`design.md` is the design's spec and record: what the design must do, settled with the user before drawing, and the forks and open questions that drawing adds. Every spec has the Summary, People and jobs, Places, Cases, The bar and Done when. For a small change, fill in the rest only where the change touches it.

````markdown
# <title>: Design

Status: Draft | Approved
Spec: <the product spec it belongs to> | none
Branch: <the branch, how to run it, and where the test login for each role comes from, never a password>
Explorations: <the Paper file and page> | none

## Summary

- Problem: <one line>
- Design: <one line: the idea>
- Tradeoff: <what we give up for it>
- Biggest risk: <one line>

## Problem

<Who can't do what today, with the evidence.> A link instead, when the product spec has it.

## People and jobs

| Person | When …, they want to …, so they can … | How often | Evidence |
| --- | --- | --- | --- |

A job without evidence is an assumption: mark it as one.

## Things

| Thing | Its name | What people need to know about it | What they can do with it |
| --- | --- | --- | --- |

<How the things relate, and the names of their states.>

## Places

<The breadboard: each place, what it shows and lets people do, what it opens on, where each action leads, and its empty, loading and error states. Then each place as a rough ASCII mockup with real data: what sits where, with its labels and values, and no styling.>

## Cases

- <a person and their job, or what varies and its extreme>: <the real data or value>, from <where it comes from>

## The bar

<As design-knowledge's `product-standards.md` describes: the people and the state they arrive in, the best products and what each does well, the products the user loves, and, when the work changes the look, the ranked qualities and what each best product decided.>

<Until the repo has UI rules: the ranked qualities, and the log of what the user said, one dated line each.>

## Non-goals

- <what this design doesn't do, and why>

## Done when

| # | Person | What they can do or know | Fails when |
| --- | --- | --- | --- |
| D1 | <who> | <what must hold> | <the case that would break it> |

## Decisions

1. <the decision>. Why: <reason>. Rejected: <the alternatives>. <"My decision." if the user didn't make it>

## Forks

| # | Part | Options | Picked, and why | What a switch changes |
| --- | --- | --- | --- | --- |

## Open questions

- <the question, whose it is, and the default answer in use>
````
