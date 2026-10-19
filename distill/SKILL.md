---
name: distill
description: >-
  Contract-first entropy reduction. A contract is any promise someone relies on: an API shape, a
  schema, an invariant, an error code, a config key, a process rule. Distill asks whether each one
  should exist in its current form and proposes the smallest faithful contract: fewer details
  first, then each survivor exact. Targets: a diff, PR, or branch; an existing product,
  subsystem, component, or module; a spec, proposal, or plan before its design locks; a pile of
  review findings that keeps growing; or a scheduled sweep of a mature surface with no symptom.
  Use when the user says "distill", "recontract", "zoom out", "rethink the approach", "reduce
  entropy", "simplify the contract", "in an ideal world what do we do", says something is "too
  complex", "over-engineered", or "doesn't feel right", asks why review keeps finding new
  problems, or wants a design-level review. Unlike simplify (equivalence-preserving) it may
  propose behavior and requirement changes. Unlike code-review it hunts contracts, not bugs.
  Proposal-only: it never applies changes.
---

# /distill: the smallest faithful contract

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill
tool at that step and follow it in full. Working from memory of a skill is not following it.

A **contract** is any promise your system makes that someone relies on: an API shape, a schema,
an invariant, an error code, a request grammar, a config key, a process rule. A **consumer** is
anyone who relies on it: a caller, a client team, the next maintainer.

Software work runs in two loops. The inner loop is implement, review, fix. It converges only when
the contract under the code is right. When review keeps finding new problems in the same area, you
rarely have that many separate bugs. You have one wrong contract producing many symptoms, and every
symptom-level fix adds code for the next pass to flag. Distill is the outer loop, where you
question the contracts themselves.

One criterion decides every proposal:

> Change a contract when the change shrinks the system's total description: the machinery that
> implements the contract, plus the theory a consumer must hold to use it.

Machinery is code, states, tests, and migrations. Theory is everything a consumer keeps in their
head: the rules, the defaults, the exceptions, the gotchas.

Three guards keep the criterion honest:

- **Count exceptions, not words.** One rule plus a memorized special case is a longer description
  than two plain rules. Wording that gets shorter by hiding behavior makes the description longer.
  Silent behavior counts as theory: a rule the system applies without telling the consumer is
  discovered and memorized eventually. A named rejection is usually the shorter description.
- **Fidelity floors everything.** The description can never shrink below what the world requires.
  When reality is asymmetric, a faithful model is asymmetric too. Forcing symmetry onto it
  produces a lie, not a simplification.
- **Measure over the contract's lifetime, not today's snapshot.** Merging two things whose
  consumers will diverge looks like shrinkage today and is growth once the re-fork is priced in.
  Scaffolding for a consumer that does not exist yet is growth too. Duplication is cheaper than
  the wrong abstraction.

**Subtract first, then perfect.** First cut the number of details. Then make each survivor exact.
Polish spent on a detail that should die is wasted, and one contract change can delete code that
later passes would otherwise keep improving. Distill owns the subtraction. Perfecting the
survivors belongs to simplify and code-review.

Distill may weaken a contract, strengthen it, or delete it. That is where order-of-magnitude
deletions come from, and that power is why distill is **proposal-only**. The output is a
decision-ready report. Apply nothing unless the user asks afterwards.

## Neighbors

- **code-review** finds bugs under the current contract.
- **simplify** tidies code within the current contract, preserving behavior.
- **zen-review** reviews a change for correctness and shape; its contract angle asks distill's
  question of each rule the change builds. Use zen-review when the change also needs correctness and shape reviewed. Use
  distill when the contract is the whole question, or the target is a surface or a spec rather
  than a change.
- **brainstorming** turns a problem into a spec. Run distill in forward mode on that spec before
  its design locks.
- **thebar** resets an implementation that drifted from its ideal. Distill questions what the
  ideal promises.

## Targets

- A **diff, PR, or branch**: a design-level review of a change before it merges.
- A **product, subsystem, component, or module**: an audit of something that exists. Start at
  method step 0 and enumerate its surface.
- A **spec, proposal, or plan**: forward mode. Run it before the design locks, while deletion is
  free. Consumers are the intended consumers, and "deletes" means code nobody ever writes.
- A **pile of review findings**: the entry for a review that stops converging. Before anything
  else, cluster the findings by the contract that generates them. N findings are usually one
  contract asked N times. Propose against the cluster, not the findings.
- **A sweep**: the audit above, on a schedule, with no symptom. Entropy accumulates without
  failing a test, and the sweep finds it before it hardens into a memorized exception.

## The four families

The criterion compares each detail of a contract against four things: the world it describes,
the consumers who use it, the rest of the contract, and the lifetime it is measured over. A detail
is excess when it fails one of those comparisons. So there are four families: a detail can be
**wrong** (fidelity), **unused** (economy), **stated twice** (coherence), or **early**
(evolution). File each finding under the comparison that exposed it. When two comparisons expose
the same detail, file it once and name the other. A finding no comparison exposes has no exhibit
yet.

The rules under each family are the usual ways the comparison fails. They are recognition aids,
not the law. Expect to find new ones.

### Fidelity: does the contract state only what is true of the world?

- **Model the world, not the pipeline.** Every contract names the reality it represents. The
  deepest entropy source is a model shaped like the data source, the build history, or the
  migration path. When the contract wraps an upstream, map three layers (what is true in the
  world, how the upstream models it, what this contract states) and list every deviation as a
  **named simplification with its backfire**: what breaks, for whom, when.
- **A stated fact is the fact it claims to be.** A measurement is not the thing measured.
  Signatures: a time of recording posing as the time of the event, an identifier built from a
  pattern posing as one the source handed over, a default posing as a choice.
- **The contract admits only what the world allows.** Machinery that reconciles conflicting
  states after admitting them usually marks a missing invariant at admission. Refuse the state at
  the boundary and it becomes unrepresentable. The guards and their tests go with the state.
  The smaller contract is often a *stronger* one.
- **The model has the world's shape.** A fact lives on the thing it is a fact about, at that
  thing's cardinality. A column null on all but a few rows belongs on the smaller object. A
  per-row value constant per tenant belongs on the tenant.
- **A fact the contract cannot state truthfully is absent, and the absence is counted.** A
  missing fact costs an opportunity, a fabricated one costs trust. Count every drop, because a
  silent filter is where the next bug class hides.

### Economy: does every element have a real producer and a real consumer?

- **Every element is reachable.** For each field, state, guard, error, flag, and unit of
  precision, name one real producer and one real consumer. Signatures: an enum with one
  reachable value, an error no input can raise, an invariant over a transition nothing performs,
  a flag with one value in every environment, a parameter with one value at every call site, a
  precision no consumer reads.
- **Enforce where the data enters.** One check at the boundary beats the same check in N
  consumers. The N re-checks are the exhibit.

### Coherence: one meaning, one form, one home?

- **One meaning, one representation.** Signatures: two request spellings for one operation,
  absent and null for one situation, two config keys for one behavior, a synonym in the
  project's vocabulary.
- **One name, one meaning.** Signatures: one object whose fields follow different hidden
  scopes, one term meaning different things on sibling surfaces.
- **One home per fact.** A fact that depends on mutable state is computed at read time from
  ground truth, never also stored. Two encodings of one fact are where representable-but-illegal
  states come from. The test is the **lifecycle walk**: replay the domain's transitions (join and
  leave, connect and disconnect, upgrade and downgrade). Any transition that forces stored data to
  be rewritten reveals a fact at the wrong home. Derived facts flip for free.
- **Uniform mechanism, unless reality is non-uniform.** Sibling cases share one grammar, one
  error shape, one lifecycle. Keep an asymmetry exactly when the world is asymmetric. Verify the
  world before you flag the asymmetry, and before you keep it.

### Evolution: does the future land additively?

- **A door left open is the absence of a wall.** A "must not preclude X" requirement is met when
  nothing contradicts X. It is never met by building toward X. Scaffolding for a consumer that
  does not exist yet is unused today and shaped by a guess about tomorrow.
- **Nothing forces a rewrite at a named next step.** Walk each future step the contract is
  expected to survive and confirm it lands as an addition. If a step forces existing consumers to
  change, the fix is to stop precluding, today. Building the step early is not a fix.

## The standing rule: no exhibit, no finding

Active at every step, not a phase you pass through once.

> Never propose against a problem you cannot exhibit. An exhibit is something real you can cite.
> No exhibit means the problem does not exist for this analysis.

The bar depends on the family:

- **Fidelity** needs *specimens*: samples of the real thing the contract mirrors, not the code
  that wraps it. Keep sampling until new specimens stop producing new shapes; the anomalies in the
  last batch are usually the finding. A discriminator derived from documentation alone is a guess.
- **Economy** needs a *compensation or failure* exhibit: the guard, the probe, the test that
  re-checks what the type already guarantees, the crash, the parameter with one value at every
  call site. Cite where. A test that cannot fail is an exhibit: its contract governs nothing.
- **Coherence** needs an *existence* exhibit: the surface itself, cited. Two spellings of one
  operation are their own evidence. Where the two copies are code, diff them: drift is the
  exhibit, and a live bug.
- **Evolution** needs the *named future step*: the scaffolding built for it, cited, or the trace
  showing the step forces existing consumers to change. A future nobody has named is not an
  exhibit.
- In **forward mode** nothing is built, so the exhibits are the spec's own use cases and traces.
  When the spec states its use cases, a requirement none of them exercises is a finding. When it
  states none, that gap is the first finding; ask for the use cases before judging the
  requirements. To delete a requirement a use case exercises, walk the trace and show it still
  completes.

The rule is load-bearing because distill amplifies whatever you feed it. Feed it a verified fact
and you delete subsystems. Feed it an unverified fear and you build well-tested machinery against
a phantom, which the next review flags, and the loop continues. You have crossed the line when a
proposed hardening introduces a **new state that needs more code to reconcile**. Stop building the
reconciler and verify the premise.

Apply the rule to inherited claims too: audit notes, memory files, TODOs, scout reports. Verify
before ranking. When an exhibit refutes a recorded claim, say so and correct the record. A refuted
fear is worth as much as a confirmed finding.

## The method

0. **Audits and sweeps: enumerate the surface.** List the declared contract surface (wire
   objects, schemas, invariants, error codes, request grammars, config keys, flags, rules,
   screens) before judging any of it. The report's coverage count comes from this list. A diff
   or a spec already names its surface.
1. **State the goal in one sentence.** Name the property this contract exists to protect for its
   consumers. Judge every proposal against it. If you cannot write the sentence and a user is
   present, ask. In a sweep, derive it from the consumers and open the report with it as a stated
   assumption.
2. **Map the layers** when the contract mirrors something outside the system: the world, the
   upstream's model, this contract, with deviations listed as named simplifications. Skip only
   when the contract grounds itself.
3. **Map the consumers.** Read consumers, not the producer. The producer states what it offers.
   Only consumers reveal what they need and what they pay for the difference. Compensation code is
   the evidence: probes, guards before use, ignored returns, the same re-check in every caller,
   sentinels fished out of value channels. Build the table and read over-promises and
   under-promises straight off it:

   | Consumer | What it actually uses | At what cardinality and frequency | What it compensates for |
   |---|---|---|---|

4. **Run the four families, cheapest lever first: economy, coherence, fidelity, evolution.**
   Economy leads because its question deletes the most for the least work and is the most often
   skipped. Before deleting anything as unused, run the justified-redundancy list below: some
   consumers are not in the code.
5. **Propose, at most three changes per contract.** Each carries its family and passes the
   **net-description gate**: name what disappears and what it costs.
   - *Wins*: the machinery deleted (code, states, tests, failure modes; cite where and estimate)
     and the rules a consumer stops holding. In forward mode: the requirements that leave the spec
     and the code nobody writes.
   - *Costs*: migration, backfill, consumer breakage, and who pays.

   Design the destination as what you would build today, knowing everything you now know. Price
   the wart and the path to remove it separately; only the path is allowed to be expensive. This
   keeps distill from sliding into "too costly, keep the wart" on a mature surface. Anything that
   changes behavior gets the trade-off stated plainly and a "Your call" line. The human always
   decides.

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
- **Asymmetric reality**: the world treats the siblings differently.
- **Divergent evolution**: two similar copies whose consumers change for different reasons, at
  different cadences, or under different owners. Merging couples what the world keeps apart, and
  the merged form grows a parameter back per divergence. Name the two consumers and their change
  drivers. "Might diverge someday" justifies nothing.

A candidate that survives none of these is a finding. One that survives goes in **Verified
clean**, with the justification named.

## Output format

The report is the product. Its reader did not read this skill, is deciding what to approve, and
scans rather than reads. Every part of the report is built for that reader:

- **The target's own words.** Endpoints, screens, sections, tables, rules, whatever the target
  calls its parts. This skill's terms (contract, family names, exhibit, net-description gate,
  entropy) never appear in the report.
- **Every line stands alone.** A headline read out of context still says what to change. A
  section name says what the reader does with it. The verdict line answers the question that
  brought the reader here: is this too complex, and where.
- **Short by omission.** More than about ten findings means a generating contract is still
  unclustered. Cluster again before writing.

**Line one is the verdict.** One bold line: the verdict phrase, then the best finding in one
clause. Then two or three plain sentences: what you audited and how much of it, in the target's
own terms ("9 of 12 endpoints", "all four sections of the spec", "every screen in the flow"), the
finding count, and how many parts checked out clean. Write it last, from the findings. If it says
something the findings do not support, the findings are incomplete.

The verdict phrase: take the highest win tier present, then the worst family within it, in this
order.

| Worst family present | Verdict phrase |
|---|---|
| none | **nothing to cut** |
| coherence | **says one thing several ways** |
| evolution | **built for a future nobody asked for** |
| economy | **carries what nobody uses** |
| fidelity | **promises what is not true** |

Coverage is mandatory. "Nothing to cut" over an unswept surface is not a verdict. When the verdict
is "nothing to cut", the reader's feeling that something is wrong still needs an answer: Verified
clean becomes the body of the report, naming where the complexity comes from and which
justification makes it essential.

**Then the findings.** Each carries two ratings, anchored so two runs over the same surface rank
the same way, and named to match the Wins and Costs lines below:

- **Win**, what it removes. **L** deletes machinery or a whole failure class. **M** removes a
  memorized exception or a duplicate home. **S** is precision only: a name, a term, a default
  made explicit.
- **Cost**, what applying it takes. **S** is a local edit no consumer notices. **M** crosses
  files, or migrates an unshipped surface. **L** breaks a shipped surface and needs its own plan.

Four sections, each named for what the reader does with it, numbered continuously so rank
survives grouping, ordered inside each by win descending then cost ascending:

- **Approve as a unit**: win L or M, cost S, no behavior change.
- **Decide each**: win L or M, and either cost M or L or a behavior change. Every entry ends in
  "Your call" with a stated lean.
- **Polish**: win S, cost S. Take or leave.
- **Only on request**: win S, cost M or L. Say what your lean is.

Each finding is a headline, one paragraph, and up to three trailing lines. The headline names the
proposed change in plain words, short enough to be a ticket title, followed by the plain family
word (wrong, unused, stated twice, early), the two ratings, and "your call" when behavior
changes. The paragraph runs in reading order: what is promised today, the evidence with its
citation (quote the key line; write "verified" only when you re-checked the exhibit yourself),
then the smaller promise. Rendered:

> **3. Only one active subscription per user, enforced at write** — wrong · win L · cost L · your call
>
> The schema allows several active subscriptions per user, and every reader picks the newest
> (`billing/read.py:41`, `invoice/run.py:88`, `portal/view.ts:120` each sort by `started_at` and
> take the first, verified). The business allows one. Enforce uniqueness at write and reject the
> second, and the multi-active state cannot exist.
>
> - Wins: three re-checks, the "which one is current" question every reader answers, and the
>   double-billing failure class.
> - Costs: a backfill to close historical duplicates, and the write API now returns a conflict
>   where it used to succeed; API consumers must handle it.
> - Your call: a visible conflict replaces a silent second row. My lean: reject.

**Wins** covers both halves of the gate: machinery deleted and rules no longer held. **Costs**
names the breakage and who pays. **Your call** appears exactly when behavior changes. A finding
that changes only wording may drop Wins and Costs. Never drop the headline, the paragraph, or its
evidence, and never replace the findings with a summary table. Findings that share one fix may
fold into one block carrying every exhibit.

Close with two short sections:

- **Verified clean**: parts you checked that need no change, one line each with the
  justification named. "The state machine is single-writer and healthy" is as decision-relevant
  as any finding, and it makes the report trustworthy rather than a complaint list.
- **Not in this report**: real issues that belong to the neighbors (bugs to code-review,
  behavior-preserving tidy to simplify, prose to the docs bar), and inherited claims you refuted,
  so the reader knows you drew the boundary on purpose.

## Working at scale

For a large surface, fan out parallel read-only scouts. Each carries the standing rule, the four
families, and the output format, and is told which known findings *not* to re-report. Then:

- **Convergence is a confidence boost.** Two scouts independently landing on the same finding is
  the strongest trust signal available. Promote convergent findings.
- **Scout claims are claims.** Spot-verify the load-bearing exhibit of every finding you promote
  before presenting. Expect to catch overclaims ("zero callers" that has twelve in tests).
  Catching one means the verification step is doing its job.

## Stopping, and what follows

Stop when no remaining proposal shrinks the description: nothing more deletes machinery, nothing
more removes an exception. Do not keep finding. You always can, and the residue belongs to the
neighbors. The second phase then begins outside this skill: make each surviving detail exact, with
precise semantics, verified discriminators, one home per fact, and prose at the project's bar.

## Worked micro-examples

**Coherence, from a symptom pile.** A crash on a null index in one job, a key error in its
sibling, a review comment about duplicated filter logic. Clustered, the two jobs are forks of one
loop, and diffing them shows the filter drifted: one copy guards the index, the other does not.
Three symptoms were one contract stated twice. The proposal: one loop, parameterized by the single
real difference. Wins: the duplicated lines and the entire "fixed in one twin only" failure class.
The merge survives the divergent-evolution check because the drift is accidental, not two
consumers changing for different reasons.

**Coherence, from a sweep, zero lines.** A stats object whose `people` count is org-wide while its
`events` counts are caller-scoped. One object, two hidden scopes, documented in a footnote every
consumer must remember. The exhibit is the object's own doc sentence. The change: the object takes
the same `scope` parameter as every list read, and all fields follow it. It deletes no code. The
win is one memorized exception to the system's single scoping rule, and that trade, zero lines for
one exception, is exactly what the coherence family exists to rank.

**Economy, from a consumer map.** An error code the API documents and every client handles, with a
retry branch each. No code path raises it; an earlier invariant made the condition impossible.
Wins: the branch in every client, and the rule "this call can fail with X" from every consumer's
theory. Costs: none. Removing a promise no input can trigger breaks nobody.
