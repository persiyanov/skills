---
name: distill
description: >-
  A contract is any guarantee someone relies on: an API shape, a schema, an invariant, an error code, a
  config key, a process rule. Distill asks whether each one should exist in its current form and
  proposes the smallest correct contract. Targets: a diff, PR, or branch; an existing product,
  subsystem, component, or module; a spec, proposal, or plan before its design is final; or a list
  of review findings that keeps growing.
  Use when the user says "distill", "recontract", "zoom out", "rethink the approach", "reduce
  entropy", "simplify the contract", "in an ideal world what do we do", says something is "too
  complex", "over-engineered", or "doesn't feel right", asks why review keeps finding new
  problems, or wants a design-level review. Unlike simplify (behavior-preserving) it may propose
  behavior and requirement changes. Unlike code-review it looks at contracts, not bugs. Use
  zen-review when a change also needs correctness and design review. Proposal-only: it never
  applies changes.
---

# /distill: the smallest correct contract

A **contract** is any guarantee someone relies on: an API shape, a schema, an invariant, an error code,
a request format, a config key, a process rule. A **consumer** is anyone who relies on it: a
caller, a client team, a maintainer.

Question each contract, not the code behind it. Refactoring or rewording that keeps the same
contract is out of scope.

One test decides what to propose:

> Propose a change only if the new contract is correct, every goal worth its cost still holds, and
> the change removes code, removes rules consumers must remember, fixes an incorrect contract, or
> unblocks a planned change.

Code includes states and tests. Rules include defaults, exceptions, and gotchas.

**Measure what a consumer cannot predict, not word count.** A rule they can predict from the other
rules costs little. One they cannot must be memorized, however it is phrased. Shorter wording that
hides behavior adds to what they must remember.

**Propose only.** Apply nothing until the user asks.

## Two targets with their own rules

- A **spec, proposal, or plan**: consumers include the intended ones, and a benefit is a
  requirement cut from the spec, plus the code nobody then writes.
- A **list of review findings**: for a review that keeps finding new problems. First group the
  findings by the contract that causes them. Propose a change to that contract, not a fix for each
  finding. If they share no contract, say so and fix them one by one.

## The four checks

Run four checks on each item, in this order: is it used (Unused), is it defined once with one
meaning (Inconsistent), is it true (Incorrect), and can each planned change be added without
breaking it (Future changes)? The check that finds a problem sets the evidence the finding needs.

The rules below are common ways an item fails, not the full list.

### Unused: does every item have a real producer and a real consumer?

For each field, state, guard, error, flag, and level of precision, name one real producer and one
real consumer. Examples: an enum with one reachable value, an error no input can raise, a rule
about a state change that never happens, a flag with one value in every environment, a parameter
with one value at every call site, a precision no consumer reads.

### Inconsistent: one meaning, one format, one source of truth?

- **One meaning, one format.** Examples: two request formats for one operation, absent and null for
  one situation, two config keys for one behavior, two words for one thing in the project's
  vocabulary.
- **One name, one meaning.** Examples: one object whose fields silently cover different scopes, one
  term meaning different things on related endpoints or screens.
- **One source of truth per fact.** Two copies of one fact can disagree. Walk through the state
  changes (join and leave, upgrade and downgrade). A state change that must update both means one
  copy is too many.
- **One mechanism for similar cases, unless they really differ.** They share one request format,
  one error format, one lifecycle.

### Incorrect: does the contract state only what is true of the real world?

- **A stated fact is what it claims to be.** Examples: a recording time used as the event time, an
  ID built from a pattern presented as one from the source, a default presented as a user's choice.
- **The contract allows only what the real world allows.** Code that reconciles conflicting states
  usually means an invariant is missing at the boundary. Reject the state there and it cannot occur.
  Its guards and their tests can go too.
- **The data model matches the domain, not the pipeline.** Store a fact on the object it describes,
  once per object. A model shaped like the data source, the build history, or the migration path
  fails this. Examples: a column null on all but a few rows, a per-row value constant per tenant.

### Future changes: can each planned change be added without breaking this?

Trace each planned change and confirm it can be added. If one forces existing consumers to change,
the fix is to remove the blocker now, not to build the change early.

## No evidence, no finding

> Propose only against a problem you can show: something real you can cite.

If you could not get the evidence, for example no access to production data, list the part under
**Not checked** with what checking it needs.

Each check needs its own evidence:

- **Unused** needs the search that found no producer, no consumer, or only one value. Cite the
  search and what it covered. If consumers can exist outside it, check usage logs or list the part
  under **Not checked**.
- **Inconsistent** needs a citation proving one of these: two formats do one job, one name means
  two things, two places hold one fact, or similar cases differ for no real reason. Where they are
  code, diff them.
- **Incorrect** needs *samples* of the real thing the contract describes, not the code that wraps
  it. First map what is true in the real world, how the source system models it, and what this contract
  states. Keep sampling until new samples show nothing new. List every mismatch with what breaks,
  for whom, and when.
- **Future changes** needs the *planned change* and the trace showing it forces existing consumers
  to change.
- For a **spec, proposal, or plan**, the spec's own use cases and traces replace only consumers
  that do not exist yet. Still sample any real thing that exists, and read existing consumers. When
  the spec states its use cases, a requirement none of them exercises is a finding. When it states
  none, ask for them before judging the requirements. With no user, derive them from the spec and
  state them as an assumption right after the conclusion.

Apply this rule to existing claims too: audit notes, memory files, TODOs, subagent reports.
Re-check any evidence you did not gather. When evidence disproves an existing claim, say so under
**Out of scope**.

## The method

1. **List the contracts in scope**, stated or implied, before judging any: every one when auditing
   something that exists, those added or changed for a diff or spec, those the groups point to for
   a list of review findings. Check each one or list it under **Not checked**. The coverage count
   comes from this list.
2. **Map the consumers.** Read consumers as well as the producer. Only consumers show what they
   need and what the mismatch costs them. Workarounds (extra checks before use, ignored return
   values, the same check in every caller, magic values treated as errors) show where to look and
   what the problem costs. They are not evidence. Note what each consumer uses, at what cardinality,
   and what it works around.
3. **State the goal in one sentence.** Name what this contract protects for its consumers. If you
   cannot, ask the user. With no user, derive it from the consumers and state it as an assumption
   right after the conclusion.
4. **Run the four checks in order.** Unused comes first because a deleted item needs no samples.
5. **Propose what you would build today.** To remove anything a consumer uses, trace that use
   through the new contract and show it still works.

## False positives

Some duplication, inconsistency, and apparently unused code is needed. Before flagging a possible
finding, check it against:

- **Double-entry**: two ledgers reconciled on purpose (accounting, at-most-once safety).
- **Denormalized value**: stored for debugging or query speed, with its source of truth stated.
- **Public API stability**: an external consumer relies on the exact wire format.
- **External requirement**: a consumer outside the code, such as a regulation, an audit, or a safety
  or security rule.
- **Emergency paths**: kill switches, fallbacks, and restore paths wait for incidents, so zero use
  proves nothing.
- **Real differences**: the cases really do differ. Confirm this before you flag the difference or
  keep it.
- **Copies that change for different reasons**: two similar copies whose consumers change for
  different reasons, at different rates, or under different owners. Merging couples them, and the
  merged form gains a parameter per difference. Name the two consumers and why each changes. "Might
  diverge someday" justifies nothing.

A false positive needs evidence too.

## Output format

The report's reader did not read this skill, is deciding what to approve, and scans. Write every
part for that reader:

- **Use the target's own words**: whatever it calls its parts (endpoints, screens, tables), never
  this skill's terms (contract, check names, entropy).
- **Titles, section names, and the conclusion stand alone.** A title read out of context still says
  what to change. A section name says what the reader does with it. The conclusion answers the
  question that brought the reader here: is this too complex, and where.

The report has these parts, in this order:

1. **Conclusion.** Line one, in bold: "nothing to cut", or the largest benefit in one clause. Then
   two or three plain sentences: what you audited and how much of it ("9 of 12 endpoints", "all
   four sections of the spec"), the finding count, and how many parts checked out clean. When the
   conclusion is "nothing to cut", Verified clean becomes the body of the report, naming where the
   complexity comes from and the evidence that it is needed.
2. **End result**, when the changes touch the same contracts or depend on each other: a diff of the
   contracts as they would be if the user accepts every recommendation, with the finding number on
   each changed line.
3. **Summary table**, at 4 or more findings: one row per finding with its number, change, ratings,
   and recommendation, so the user can answer in one message.
4. **Approve together**: findings with cost S, no behavior change, no dropped goal, no tradeoff
   between code and rules.
5. **Decide each**: every other finding.
6. **Not checked**: parts you could not check, with what checking them needs.
7. **Verified clean**: possible findings you cleared, one line each with the evidence that cleared
   them. Other checked parts appear only in the coverage count.
8. **Out of scope**: bugs (for code-review), cleanup that keeps every contract the same (for
   simplify), and existing claims you disproved.

Number findings continuously across Approve together and Decide each. Order each section by benefit
descending, then cost ascending. Merge findings that share one fix, keeping all their evidence.

Each finding carries two ratings:

- **Benefit**, what it removes, fixes, or unblocks. **L** removes a subsystem or a whole class of
  failures. **M** is anything smaller.
- **Cost**, the work to apply it. **S** is a local edit. **M** crosses files, or migrates something
  unshipped. **L** breaks something shipped and needs its own plan.

Each finding has these lines, in this order:

- **Title**: the change in plain words, short enough for a ticket title, then the two ratings.
- **Diff**: `-` the contract today, `+` the contract after. A deletion has only the `-` line.
- **Evidence**: one fact per line, each with its citation.
- **Still works**, when the change removes something a consumer uses: what that consumer does now.
- **Benefits**: what is deleted (code, states, tests, failure modes; cite where and estimate how
  much), the rules consumers no longer need to remember, and any contract fixed or change unblocked.
- **Costs**: migration, backfill, consumer breakage, and who does the work.
- **Decide**, in Decide each only: a yes-or-no question, then your recommendation.

Example. A real report gives every finding its block; this one shows two of the four:

````markdown
**Enforce one active subscription per user, which ends double billing.**

I audited 9 of 12 subscription endpoints and the `subscriptions` table. There are 4 findings, and
5 endpoints checked out clean.

```diff
- a user can hold several active subscriptions (3)
+ a user holds at most one active subscription (3)
- each reader decides which row is current (3, 4)
- a subscription can be in `trial` (2)
- every row carries `legacy_id` (1)
  cancel is idempotent
  invoices run monthly
```

| # | Change | Benefit | Cost | Recommend |
|---|---|---|---|---|
| 1 | Delete the unused `legacy_id` column | M | S | yes |
| 2 | Delete the `trial` status, which nothing sets | M | S | yes |
| 3 | One active subscription per user, enforced at write | L | L | yes |
| 4 | Delete `is_current` after 3 is done | M | M | yes |

Reply like this: approve 1-2, yes to 3, no to 4.

## Approve together

**1. Delete the unused `legacy_id` column** · benefit M · cost S

```diff
- every row carries `legacy_id`
```

- Nothing reads it: search of all 4 services

- Benefits: one column and its write (`signup/create.py:52`).
- Costs: one migration.

## Decide each

**3. One active subscription per user, enforced at write** · benefit L · cost L

```diff
- a user can hold several active subscriptions; each reader picks the newest
+ a user holds at most one; a second write gets a conflict
```

- The terms allow one: `docs/terms.md:12`
- 212 users have two active rows, all from the checkout retry: production query,
  `checkout/retry.py:30`
- 40 of them were billed twice: ledger query
- Three readers take the newest: `billing/read.py:41`, `invoice/run.py:88`, `portal/view.ts:120`

- Still works: the checkout retry treats the conflict as success.
- Benefits: three repeated checks, the "which one is current" question, and double billing.
- Costs: a backfill to close the 212 duplicates, a small retry change, and API consumers must
  handle the conflict.
- Decide: accept a visible conflict instead of a silent second row? Recommend: yes.

## Not checked

- The 3 partner endpoints: need the partner usage logs.

## Verified clean

- `ledger_entries` repeats invoice totals on purpose; a nightly job compares them
  (`ledger/reconcile.py:14`).

## Out of scope

- Invoice dates are one day off in UTC-8: a bug for code-review.
````
