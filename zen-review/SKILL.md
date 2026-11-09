---
name: zen-review
description: >
  Review a change for correctness (does it work, and is what it says true) and
  for shape (is this the smallest system that does the job), then fix what it
  finds and have a fresh verifier check every fix. Use for review, code review,
  review my changes, hunt bugs, prove it with tests, check it holds at real data
  volumes, check it does what the spec asks, simplify, cleanup, boyscout, or
  challenge what an API or tool surface offers. Works mid-implementation, before
  a PR, on a branch, on a PR, or on code with no diff at all. Fixes by default
  unless you say "report only" or "review only". Light mode (one finder for all
  applicable correctness angles, one for all applicable shape angles) unless you
  say "full" or "full mode": then one finder per angle. Not for UI layout or
  visual design, though frontend code is in scope.
---

# Zen Review

Review, fix, and verify without stopping to ask. In report-only or review-only mode, make no edits.

## 1. Scope

1. List the files under review. With a diff, they are the files in `git diff <base>` plus the untracked files, which `git diff` does not show. With no diff, they are the paths the user named.
2. Note the spec, ticket, or plan if the user named one.
3. Name the changed files that are not part of the target, and leave them alone.

## 2. Find

1. Launch general-purpose finders in parallel.
   - Light mode (default): one finder for the correctness angles that apply and one for the shape angles that apply.
   - Full mode (the user says full or full mode): one finder for each angle that applies.
   - The mode changes only the number of finders. Check, Fix, and Verify are the same in both.
   - These angles always apply: lines, removed, callers, spec, tests, reuse, simplify, ownership, conventions, contract.
   - These apply when the diff touches their subject: load, boundaries, time, efficiency, model, surface. When you are unsure, include the angle.
   - In Claude Code, launch each finder with model `opus` and effort `medium`.
2. Give each finder these and nothing else: the target's root, the base ref, the file list from Scope, the spec path, its reference file (`references/correctness.md` or `references/shape.md`), the names of its angles, and the repo's rule files that cover the changed paths. The rule files are CLAUDE.md, AGENTS.md, CONTRIBUTING, any rule file in a directory above a changed file, and the policies those files name. Put these instructions in the prompt:
   - A rule file's "Not a finding" list is binding. Do not return a candidate it names.
   - First list what you must cover: every changed file and every definition the change adds or removes. Then work through the whole list. A full diff is often longer than one command's output shows, so read it in parts.
   - Finish each of your angles. Return every candidate that meets the reference file's definition, strongest first. For each, give `file:line`, the angle name, and one line on what is wrong.
   - Never edit files and never start subagents. Read history only with `git show`, `git log`, and `git diff`.
3. Wait until every finder has returned, then gather every candidate.
4. Merge candidates that name the same line or the same mechanism, and keep the most concrete one. The result is the finding list. Group its findings by root cause: the rule, the mechanism, or the fact missing from the model behind them.
5. Write the finding list to a file outside the repo, with each finding's evidence and status. Update the file at every later step and work from it.

## 3. Check

1. Check every finding in the list. Try to confirm it or break it in the code, and test it against its angle's definition of a candidate in the reference file.
2. Label each finding CONFIRMED, DISPROVED, or UNPROVEN. A DISPROVED finding is a false positive. Quote the proof: the line of code, the rule file that lists it as not a finding, or the sentence in the reference file that says it is not a candidate. Unsure is UNPROVEN, never DISPROVED.
3. Do not disprove or drop a finding because it seems unimportant or minor.

## 4. Fix

Every confirmed finding ends as fixed, left, or your decision. Fix in two passes: correctness first, then shape after Verify has passed the correctness fixes. Change only what a finding names.

Each pass needs its own diff, so save the tree before the pass and after it. This command prints a tree id and changes neither the index nor the working tree:

```bash
(export GIT_INDEX_FILE=$(mktemp -u); git add -A && git write-tree)
```

`git diff <before> <after>` then shows the pass alone.

Load /principles. For each finding, ask first what would make the problem impossible: a deleted path, a single owner, a type or a constraint, a smaller rule. Use that when it exists. Patch only when nothing removes the cause.

1. When two or more confirmed findings come from one rule, in this run or across runs, question the rule first, as the contract angle does. If the smaller contract changes a requirement, it goes to Needs your decision, and its findings wait for the answer.
2. In each pass, start with the fixes that delete code, because a bug in deleted code needs no fix.
3. For a bug, write the failing test first. It must fail for the reason you predicted, and then pass.
4. When several fixes would work, choose by /principles.

Some confirmed findings are not fixed:

- Mark a finding left when the spec or the user's answer in this session already decided it. Quote the decision and do not ask again.
- Send a finding to Needs your decision when it changes a definition or a contract, or when it is a real choice that /principles cannot settle. Never patch such a finding in code.

## 5. Verify

1. After each pass, start a fresh subagent as the verifier. Give it these and nothing else: the target's root, the base ref, the spec path, the findings the pass fixed, the two tree ids, `references/verify.md`, and `references/correctness.md`. Do not describe the fixes, and do not say why you chose them. In Claude Code, launch it with model `opus` and effort `medium`.
2. Rerun the repo's tests and checks, and quote any failure.
3. Repair a BROKEN correctness fix here, without going back to Find, and have a fresh verifier check the repair.
4. Revert a BROKEN shape fix and mark its finding left.
5. When a second round of fixes fails on the same premise, stop fixing. Read Attack the Premise in /principles, name the premise, and take it back to the spec.
6. Give any change made after this run's verification (a decision from the spec, a bot finding, a merge) its own verifier before you report the work ready.

## 6. Report

Write the report from the findings file, with /readable, in the format of `references/report.md`. No praise. After the user answers Needs your decision, run Fix and Verify on those findings.
