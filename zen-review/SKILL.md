---
name: zen-review
description: >
  Review a change for correctness (does it work, and is what it says true) and
  for shape (is this the smallest system that does the job), then fix and verify
  every fix with a fresh verifier. Use for review, code review, review my changes,
  hunt bugs, prove it with tests, check it holds at real data volumes, check it
  does what the spec asks, simplify, cleanup, boyscout, or challenge what an API
  or tool surface promises. Works mid-implementation, before a PR, on a branch, on
  a PR, or on code with no diff at all. Fixes by default unless you say "report
  only" or "review only". Full find (one finder per angle) unless you say "light"
  or "light mode": then one finder for all applicable correctness angles, one for
  all applicable shape angles. Not for UI layout or visual craft, though frontend
  code is in scope.
---

# Zen Review

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Working from memory of a skill is not following it.

A system's description is its code plus everything a consumer must hold in their head to use it. Correctness makes the description true. Shape makes it smaller. Review, fix, and verify autonomously. In report-only or review-only mode, make no edits.

## 1. Scope

`request -> target: the files under review, the base, the spec`

List the files under review: `git diff <base>` (uncommitted: HEAD; branch: merge base; PR: fetch it) plus untracked files, which `git diff` never shows; or the named paths when there is no diff. Note the spec, ticket, or plan if one is named. Name unrelated dirty files and leave them.

## 2. Find

`finders -> raw findings -> deduped findings = working set`

This run looks at the target as it stands now. Carry nothing from earlier runs; the repo's own history stays readable. Rerunning after fixes is the normal loop. Use the same target and the same finder prompts each run: a prompt shaped by the last run's findings steers finders, and an unchanged one makes a shrinking list a real signal. Within a run, the fix diff goes to Verify, not back here.

1. Launch general purpose finders in parallel. Full (default): one finder per applicable angle. Light (user said light or light mode): one finder for all applicable correctness angles, one for all applicable shape angles. Always: lines, removed, callers, spec, tests, reuse, simplify, ownership, conventions, contract. Also, when the diff touches them: load, boundaries, time, efficiency, model, surface. When in doubt whether an angle applies, include it.
2. Give each only the target's root, the base ref, the file list from Scope, the spec path, the family file (`references/correctness.md` or `references/shape.md`), the assigned angle name(s), and the repo's rule files that govern the changed paths: CLAUDE.md, AGENTS.md, rule files in their ancestor directories, and the policies those files name. Put this in the prompt:
   - A governing rule's "Not a finding" list is binding: a candidate it names is not returned.
   - List coverage first: every changed file and every definition the change adds or removes. Then work through all of it. A full diff is longer than one command shows; what an added function duplicates is usually unchanged and outside the diff.
   - Work each assigned angle to the end. Return up to ten candidates per angle, strongest first: `file:line`, the angle name, one line on what is wrong, and the failure scenario (correctness) or the better form (shape).
   - Never edit, never start subagents, read history only with `git show`, `git log`, and `git diff`.
3. Wait until every finder has returned, gather ALL the raw findings.
4. Dedup findings on the same line or mechanism, keeping the most concrete. Then group them by root cause: the rule, mechanism, or missing model fact behind them.
5. Communicate result of Find to the user – mode, how many finders launched, which angles skipped, and most importantly, raw findings count (grouped correctness / shape), final deduped counts (also grouped), and the number of root causes with one line each. This is a working findings set.

## 3. Check

`working set -> each finding is labeled CONFIRMED, UNPROVEN or REFUTED`

Regardless of mode, light or full, work through EVERY finding in the working set.

1. Go through EVERY finding in the working set and try to confirm or break it in the code. Assign one of CONFIRMED, UNPROVEN or REFUTED statuses to each finding. REFUTED is a false positive: quote the line that proves it, or the governing rule that lists it as not a finding. Unsure is UNPROVEN, never REFUTED. Do not refute or drop findings based on importance or severity.
2. Communicate result of Check to the user – total number of findings in the working set, and how many got confirmed, refuted or unproven.

## 4. Fix

`fix all CONFIRMED findings`

Regardless of mode, light or full, work through EVERY finding in the confirmed set.

1. Fix ALL confirmed findings, correctness first, then shape. For a bug, write the failing test first: it must fail for the predicted reason, then pass. It is a row in the scenario or table that walks the bug's path; a new test only where none walks it. Several solutions: choose by /principles and by the standard Verify will apply from `references/verify.md`. Before fixing, group confirmed findings by the rule that produces them. Two or more on one rule, in this run or across runs, question the rule first (the contract angle's question); when the smaller contract changes a requirement, it goes to Needs your call and its findings wait on the answer.
2. Never patch in code a finding that changes a definition or a promise. Send it back to the spec through /brainstorming, which grills again from the artifact it changes; its findings wait.
3. Leave a genuine fork unfixed when /principles cannot settle it. It goes to Needs your call.

No laziness, no half-measures. Intelligent boyscout mode. Do not skip shape findings. Shape is equally important as Correctness.

## 5. Verify

1. Give a fresh subagent only the target's root, the base ref, the spec path, the findings, the fix diff, `references/verify.md`, and `references/correctness.md`. Not why a fix was chosen. Not a request to confirm — a verifier asked to confirm confirms. Ask it to break each fix in its place in the system and to name a better form where one exists.
2. Rerun the repo's tests and checks; quote failures. Repair here, without restarting Find, and verify again. Apply a better form when /principles settle it; otherwise Needs your call. A confirmed finding still unfixed is open. When a second round of fixes fails on the same premise, stop fixing: read Attack the Premise, name the premise, and take it back to the spec.
3. A change made after this run's verification (a decision from the spec, a bot finding, a merge) gets its own verifier before the work is reported ready.

## 6. Report

Write it with /readable in the shape of `references/report.md`. No praise. Needs your call is the report's /grilling round, on the code each call changes; after the answers, Fix and Verify.
