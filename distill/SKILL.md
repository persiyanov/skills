---
name: distill
description: >-
  Contract-first entropy reduction. A contract is any promise someone relies on: an API shape, a
  schema, an invariant, an error code, a config key, a process rule. Distill asks whether each one
  should exist in its current form and proposes the smallest faithful contract. Targets: a diff,
  PR, or branch; an existing product, subsystem, component, or module; a spec, proposal, or plan
  before its design locks; or a pile of review findings that keeps growing.
  Use when the user says "distill", "recontract", "zoom out", "rethink the approach", "reduce
  entropy", "simplify the contract", "in an ideal world what do we do", says something is "too
  complex", "over-engineered", or "doesn't feel right", asks why review keeps finding new
  problems, or wants a design-level review. Unlike simplify (equivalence-preserving) it may
  propose behavior and requirement changes. Unlike code-review it hunts contracts, not bugs. Use
  zen-review when a change also needs correctness and shape review. Proposal-only: it never
  applies changes.
---

# /distill: the smallest faithful contract

A **contract** is any promise your system makes that someone relies on: an API shape, a schema,
an invariant, an error code, a request grammar, a config key, a process rule. A **consumer** is
anyone who relies on it: a caller, a client team, the next maintainer.

Question each promise, not the code under it. Polishing code or wording that keeps the same
promise is out of scope. Making a false promise true is in scope.

One test decides what to propose:

> Propose a change when the contract's goal still holds, what it states is true, and there is less
> to build and remember. A fix that makes a false contract true may add to it.

What you build is the machinery: code, states, tests. What you remember is everything a consumer
keeps in their head: the rules, the defaults, the exceptions, the gotchas. When one falls and the
other rises, state both and let the user decide.

**Count what a consumer cannot predict, not words.** A rule they can predict from the other rules
costs little. One they cannot predict must be memorized, however it is phrased. Wording that gets
shorter by hiding behavior adds to what they must remember.

Distill may weaken a contract, strengthen it, or delete it. That power is why distill is
**proposal-only**. The output is a decision-ready report. Apply nothing unless the user asks
afterwards.

## Targets

- A **diff, PR, or branch**: a design-level review of a change before it merges.
- A **product, subsystem, component, or module**: an audit of something that exists.
- A **spec, proposal, or plan**: forward mode. Run it before the design locks, while deletion is
  free. Consumers are the intended consumers, and "deletes" means code nobody ever writes.
- A **pile of review findings**: the entry for a review that stops converging. Before anything
  else, cluster the findings by the contract that generates them. Propose against the cluster,
  not the findings. If they share no contract, say so and return them to the fix loop.

## The four families

Ask four things of each detail: is it true (fidelity), is it used (economy), is it said once with
one meaning (coherence), and does the next named step land without breaking it (evolution)? File
each finding under the question that exposed it. That sets the evidence it needs.

The rules under each family are the usual ways a detail fails. They are recognition aids, not the
law. Expect to find new ones.

### Fidelity: does the contract state only what is true of the world?

- **A stated fact is the fact it claims to be.** A measurement is not the thing measured.
  Signatures: a time of recording posing as the time of the event, an identifier built from a
  pattern posing as one the source handed over, a default posing as a choice.
- **The contract admits only what the world allows.** Machinery that reconciles conflicting
  states after admitting them usually marks a missing invariant at admission. Refuse the state at
  the boundary and it becomes unrepresentable. The guards and their tests go with the state.
  The smaller contract is often a *stronger* one.
- **The model has the world's shape, not the pipeline's.** A fact lives on the thing it is a fact
  about, at that thing's cardinality. A model shaped like the data source, the build history, or
  the migration path fails this. A column null on all but a few rows belongs on the smaller object.
  A per-row value constant per tenant belongs on the tenant.

### Economy: does every element have a real producer and a real consumer?

- **Every element is reachable.** For each field, state, guard, error, flag, and unit of
  precision, name one real producer and one real consumer. Signatures: an enum with one
  reachable value, an error no input can raise, an invariant over a transition nothing performs,
  a flag with one value in every environment, a parameter with one value at every call site, a
  precision no consumer reads.
- **Scaffolding for a consumer that does not exist yet is unused today.** A "must not preclude X"
  requirement is met when nothing contradicts X. It is never met by building toward X.

### Coherence: one meaning, one form, one home?

- **One meaning, one representation.** Signatures: two request spellings for one operation,
  absent and null for one situation, two config keys for one behavior, a synonym in the
  project's vocabulary.
- **One name, one meaning.** Signatures: one object whose fields follow different hidden
  scopes, one term meaning different things on sibling surfaces.
- **One home per fact.** Two encodings of one fact are where representable-but-illegal states come
  from. Replay the domain's transitions (join and leave, connect and disconnect, upgrade and
  downgrade). One that must update two places to keep them agreeing has a place too many.
- **Uniform mechanism, unless reality is non-uniform.** Sibling cases share one grammar, one
  error shape, one lifecycle.

### Evolution: does the future land additively?

- **Nothing forces a rewrite at a named next step.** Walk each future step the contract is
  expected to survive and confirm it lands as an addition. If a step forces existing consumers to
  change, the fix is to stop precluding, today. Building the step early is not a fix.

## The standing rule: no exhibit, no finding

> Never propose against a problem you cannot exhibit. An exhibit is something real you can cite.

If you could not get the evidence, for example no access to production data, list the part under
**Not in this report** with what checking it needs. Do not count it clean.

The bar depends on the family:

- **Fidelity** needs *specimens*: samples of the real thing the contract mirrors, not the code
  that wraps it. Keep sampling until new specimens stop producing new shapes.
- **Economy** needs the search that found no producer, no consumer, or only one value, or the
  compensation or failure the detail forces: the guard, the probe, the test that re-checks what the
  type already guarantees, the crash. Cite where.
- **Coherence** needs an *existence* exhibit: the surface itself, cited. Two spellings of one
  operation are their own evidence. Where the two copies are code, diff them: drift is the
  exhibit, and a live bug.
- **Evolution** needs the *named future step* and the trace showing it forces existing consumers
  to change. A future nobody has named is not an exhibit.
- In **forward mode** nothing is built, so the exhibits are the spec's own use cases and traces.
  When the spec states its use cases, a requirement none of them exercises is a finding. When it
  states none, that gap is the first finding; ask for the use cases before judging the
  requirements. To delete a requirement a use case exercises, walk the trace and show it still
  completes.

Apply the rule to inherited claims too: audit notes, memory files, TODOs, scout reports. Verify
before ranking. When an exhibit refutes a recorded claim, say so and correct the record.

## The method

1. **Enumerate the surface.** List the contracts in scope before judging any of them. For an
   audit, that is the declared surface (wire objects, schemas, invariants, error codes, request
   grammars, config keys, flags, rules, screens). For a diff or a spec, the ones it adds or
   changes, stated or implied. For a pile of review findings, the ones its clusters point to. The
   report's coverage count comes from this list.
2. **Map the consumers.** Read consumers as well as the producer. The producer states what it
   offers. Only consumers reveal what they need and what they pay for the difference. Compensation
   code is the evidence: probes, guards before use, ignored returns, the same re-check in every
   caller, sentinels fished out of value channels. Build the table and read over-promises and
   under-promises straight off it:

   | Consumer | What it actually uses | At what cardinality and frequency | What it compensates for |
   |---|---|---|---|

3. **State the goal in one sentence.** Name the property this contract exists to protect for its
   consumers. If you cannot write the sentence and a user is present, ask. With no user, derive it
   from the consumers and state it as an assumption right after the verdict line.
4. **Run the four families: economy, coherence, fidelity, evolution.** Economy comes first because
   a detail you delete needs no specimens. For fidelity, when the contract mirrors something
   outside the system, first map what is true in the world, how the upstream models it, and what
   this contract states. List every deviation with what breaks, for whom, when. Before flagging
   anything, run the justified-redundancy list below: some consumers are not in the code.
5. **Propose.** For each change, name what disappears and what it costs. A fix that makes a false
   contract true may name what it adds instead of what disappears.
   - *Wins*: the machinery deleted (code, states, tests, failure modes; cite where and estimate)
     and the rules a consumer stops holding. In forward mode: the requirements that leave the spec
     and the code nobody writes.
   - *Costs*: migration, backfill, consumer breakage, and who pays.

   Design the destination as what you would build today, knowing everything you now know. Price
   the wart and the path to remove it separately; only the path is allowed to be expensive. This
   keeps distill from sliding into "too costly, keep the wart" on a mature surface.

## Justified redundancy: the false-positive discipline

Some duplication, asymmetry, and apparent dead weight is load-bearing. Before flagging a
candidate, check it against:

- **Deliberate double-entry**: two ledgers reconciled on purpose (accounting, at-most-once
  safety).
- **Operational materialization**: a derivable value stored for debuggability or query cost, with
  its derivation stated as the source of truth.
- **Stability commitment**: an external consumer for whom the wire shape itself is the value.
- **External obligation**: a consumer that is not in the code. A regulation, an audit, a safety
  or security rule. Cite the obligation, not the fear of one.
- **Asymmetric reality**: the world treats the siblings differently. Verify the world before you
  flag the asymmetry, and before you keep it.
- **Divergent evolution**: two similar copies whose consumers change for different reasons, at
  different cadences, or under different owners. Merging couples what the world keeps apart, and
  the merged form grows a parameter back per divergence. Name the two consumers and their change
  drivers. "Might diverge someday" justifies nothing.

A candidate none of these justifies becomes a finding only with an exhibit and a pass on the test
at the top of this skill. One they justify goes in **Verified clean**, with the justification
named.

## Output format

The report is the product. Its reader did not read this skill, is deciding what to approve, and
scans rather than reads. Every part of the report is built for that reader:

- **The target's own words.** Endpoints, screens, sections, tables, rules, whatever the target
  calls its parts. This skill's terms (contract, family names, exhibit, entropy) never appear in
  the report.
- **Every line stands alone.** A headline read out of context still says what to change. A
  section name says what the reader does with it. The verdict line answers the question that
  brought the reader here: is this too complex, and where.

**Line one is the verdict.** One bold line: "nothing to cut", or the best finding in one clause.
Then two or three plain sentences: what you audited and how much of it, in the target's
own terms ("9 of 12 endpoints", "all four sections of the spec", "every screen in the flow"), the
finding count, and how many parts checked out clean. Write it last, from the findings.

Coverage is mandatory. "Nothing to cut" over an unchecked surface is not a verdict. When the verdict
is "nothing to cut", the reader's feeling that something is wrong still needs an answer: Verified
clean becomes the body of the report, naming where the complexity comes from and which
justification makes it essential.

**Then the findings.** Each carries two ratings, named to match the Wins and Costs lines below:

- **Win**, what it removes or makes true. **L** removes a subsystem or a whole failure class. **M**
  removes a smaller piece of machinery, a memorized exception, or a duplicate home, or makes one
  false promise true.
- **Cost**, what applying it takes. **S** is a local edit. **M** crosses
  files, or migrates an unshipped surface. **L** breaks a shipped surface and needs its own plan.

Two sections, each named for what the reader does with it, numbered continuously so rank survives
grouping, ordered inside each by win descending then cost ascending:

- **Approve as a unit**: cost S, no behavior change.
- **Decide each**: cost M or L, or a behavior change. Every entry ends in "Your call" with a
  stated lean.

Each finding is a headline, one paragraph, and up to three trailing lines. The headline names the
proposed change in plain words, short enough to be a ticket title, followed by the two ratings.
The paragraph runs in reading order: what is promised today, the evidence with its citation (quote the key line; write "verified" only when you
re-checked the exhibit yourself), then the smaller promise. Rendered:

> **3. Only one active subscription per user, enforced at write** — win L · cost L
>
> The schema allows several active subscriptions per user, and every reader picks the newest
> (`billing/read.py:41`, `invoice/run.py:88`, `portal/view.ts:120` each sort by `started_at` and
> take the first, verified). The terms allow one (`docs/terms.md:12`). Production has 212 users
> with two active rows, all from the checkout retry (`checkout/retry.py:30`), and 40 of them were
> billed twice (ledger query, verified). Enforce uniqueness at write and reject the second, and
> the multi-active state cannot exist.
>
> - Wins: three re-checks, the "which one is current" question every reader answers, and the
>   double-billing failure class.
> - Costs: a backfill to close the 212 duplicates, and the write API now returns a conflict where
>   it used to succeed; API consumers must handle it.
> - Your call: a visible conflict replaces a silent second row. My lean: reject.

Findings that share one fix may fold into one block carrying every exhibit.

Close with two short sections:

- **Verified clean**: parts you checked that need no change, one line each with the
  justification named.
- **Not in this report**: real issues that belong elsewhere (bugs to code-review,
  behavior-preserving tidy to simplify), inherited claims you refuted, and parts you could not
  check, with what checking them needs.

## Working at scale

For a large surface, fan out parallel read-only scouts. Each carries the standing rule, the four
families, and the output format, and is told which known findings *not* to re-report. Scout claims
are claims: verify the load-bearing exhibit of every finding you report before presenting.

## Stopping

Stop when every part of the surface has been checked or listed as not checkable.

## Worked micro-examples

**Coherence, from a symptom pile.** A crash on a null index in one job, a key error in its
sibling, a review comment about duplicated filter logic. Clustered, the two jobs are forks of one
loop, and diffing them shows the filter drifted: one copy guards the index, the other does not.
Three symptoms were one contract stated twice. The proposal: one loop, parameterized by the single
real difference. Wins: the duplicated lines and the entire "fixed in one twin only" failure class.
The merge survives the divergent-evolution check because the drift is accidental, not two
consumers changing for different reasons.

**Coherence, from an audit, no code deleted.** A stats object whose `people` count is org-wide
while its `events` counts are caller-scoped. One object, two hidden scopes, documented in a footnote
every consumer must remember. The exhibit is the object's own doc sentence. The change: the object
takes the same `scope` parameter as every list read, and all fields follow it. Wins: one memorized
exception to the system's single scoping rule. Costs: one parameter to add, and `people` changes
value for existing callers, so it is a behavior change and the user's call.
