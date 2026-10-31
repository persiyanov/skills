---
name: zen-review
description: >
  Review a change for correctness (does it work, and is what it says true) and
  for design (is this the smallest system that does the job), then fix and verify
  every fix with a fresh verifier. Use for review, code review, review my changes,
  hunt bugs, prove it with tests, check it holds at real data volumes, check it
  does what the spec asks, simplify, cleanup, boyscout, or challenge what an API
  or tool surface offers. Works mid-implementation, before a PR, on a branch, on
  a PR, or on code with no diff at all. Fixes by default unless you say "report
  only" or "review only". Light mode (one reviewer for all applicable correctness
  areas, one for all applicable design areas) unless you say "full" or "full
  mode": then one reviewer per area. Not for UI layout or visual design, though
  frontend code is in scope.
---

# Zen Review

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Working from memory of a skill is not following it.

A system's description is its code plus everything a consumer must remember to use it. Correctness makes the description true. Design makes it smaller. Review, fix, and verify autonomously. In report-only or review-only mode, make no edits.

## 1. Scope

`request -> target: the files under review, the base, the spec`

List the files under review: `git diff <base>` (uncommitted: HEAD; branch: merge base; PR: fetch it) plus untracked files, which `git diff` never shows; or the named paths when there is no diff. Note the spec, ticket, or plan if one is named. Name unrelated dirty files and leave them.

## 2. Find

`reviewers -> raw findings -> deduped findings = finding list`

This run looks at the target as it stands now. Carry nothing from earlier runs; the repo's own history stays readable. Rerunning after fixes is the normal loop. Use the same target and the same reviewer prompts each run: a prompt changed by the last run's findings biases reviewers, and an unchanged one makes a shorter list a real signal. Within a run, the fix diff goes to Verify, not back here.

1. Launch general purpose reviewers in parallel. Light (default): one reviewer for all applicable correctness areas, one for all applicable design areas. Full (user said full or full mode): one reviewer per applicable area. Always: lines, removed, callers, spec, tests, reuse, simplify, ownership, conventions, contract. Also, when the diff touches them: load, boundaries, time, efficiency, model, surface. When in doubt whether an area applies, include it. In Claude Code, launch each reviewer with model `opus` and effort `medium`.
2. Give each only the target's root, the base ref, the file list from Scope, the spec path, the reference file (`references/correctness.md` or `references/design.md`), the assigned area name(s), and the repo's rule files that govern the changed paths: CLAUDE.md, AGENTS.md, rule files in their ancestor directories, and the policies those files name. Put this in the prompt:
   - A governing rule's "Not a finding" list is binding: a possible finding it names is not returned.
   - List coverage first: every changed file and every definition the change adds or removes. Then work through all of it. A full diff is longer than one command shows; what an added function duplicates is usually unchanged and outside the diff.
   - Finish each assigned area. Return up to ten possible findings per area, strongest first: `file:line`, the area name, one line on what is wrong, and the failure scenario (correctness) or the better version (design).
   - Never edit, never start subagents, read history only with `git show`, `git log`, and `git diff`.
3. Wait until every reviewer has returned, gather ALL the raw findings.
4. Dedup findings on the same line or mechanism, keeping the most concrete. Then group them by root cause: the rule, mechanism, or missing model fact behind them.
5. Communicate result of Find to the user – mode, how many reviewers launched, which areas skipped, and most importantly, raw findings count (grouped correctness / design), final deduped counts (also grouped), and the number of root causes with one line each. This is the finding list.

## 3. Check

`finding list -> each finding is labeled CONFIRMED, UNPROVEN or DISPROVED`

Regardless of mode, light or full, work through EVERY finding in the finding list.

1. Go through EVERY finding in the finding list and try to confirm or break it in the code. Assign one of CONFIRMED, UNPROVEN or DISPROVED statuses to each finding. DISPROVED is a false positive: quote the line that proves it, or the governing rule that lists it as not a finding. Unsure is UNPROVEN, never DISPROVED. Do not disprove or drop findings based on importance or severity.
2. Communicate result of Check to the user – total number of findings in the finding list, and how many got confirmed, disproved or unproven.

## 4. Fix

`fix all CONFIRMED findings`

Regardless of mode, light or full, work through EVERY finding in the confirmed set.

1. Fix ALL confirmed findings, correctness first, then design. For a bug, write the failing test first: it must fail for the predicted reason, then pass. It is a row in the scenario or table that covers the bug's path; a new test only where none covers it. Several solutions: choose by /principles and by the standard Verify will apply from `references/verify.md`. Before fixing, group confirmed findings by the rule that produces them. Two or more on one rule, in this run or across runs, question the rule first (the contract area's question); when the smaller contract changes a requirement, it goes to Needs your decision and its findings wait on the answer.
2. Never patch in code a finding that changes a definition or a contract. Send it back to the spec through /brainstorming, which runs /grilling again on the artifact it changes; its findings wait.
3. Leave a real choice unfixed when /principles cannot settle it. It goes to Needs your decision.

Do not cut corners. Use judgment to leave the touched code cleaner than you found it. Do not skip design findings. Design is as important as correctness.

## 5. Verify

1. Give a fresh subagent only the target's root, the base ref, the spec path, the findings, the fix diff, `references/verify.md`, and `references/correctness.md`. Not why a fix was chosen. Not a request to confirm — a verifier asked to confirm confirms. Ask it to break each fix in its place in the system and to name a better solution where one exists. In Claude Code, launch it with model `opus` and effort `medium`.
2. Rerun the repo's tests and checks; quote failures. Fix here, without restarting Find, and verify again. Apply a better solution when /principles settle it; otherwise Needs your decision. A confirmed finding still unfixed is open. When a second round of fixes fails on the same premise, stop fixing: read Attack the Premise, name the premise, and take it back to the spec.
3. A change made after this run's verification (a decision from the spec, a bot finding, a merge) gets its own verifier before the work is reported ready.

## 6. Report

Write it with /readable in the format of `references/report.md`. No praise. Needs your decision is the report's /grilling round, on the code each decision changes; after the answers, Fix and Verify.
