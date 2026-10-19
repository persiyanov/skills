---
name: thebar
# The drift tells in this description are load-bearing: self-firing can only key on text
# loaded before invocation, and only the description is. Shorten anything here before the tells.
description: >-
  A universal frame reset: a compact frame for judging work against the ideal end state, and
  the one operation that installs it. Invoke /thebar when the agent is deep in the weeds and
  drifting: overthinking, overengineering, or cutting corners. The reset re-derives the ideal
  fresh (what are we building, for whom, what is their ideal end state, what is the cleanest,
  fewest-moving-parts implementation that works), then points it backward (collide with the
  whole current path, plan included), sideways (the verdict rule over review findings: a
  finding is valid exactly when the ideal implementation would not contain the flaw it
  names), or forward (at the start of a slice, the derived ideal itself is the output). Fits
  when the user says "boil the ocean", "raise the bar", "ideal end state", "from first
  principles", "no half-measures", or "hold the line". Fire it on yourself, unasked, when you
  notice the drift tells in your own work: a third consecutive fix to the same spot, a guard
  for a state with no nameable example, sleep or retry loops appearing, a "for now" in a
  comment, special cases piling up around one seam. Self-sufficient: it depends on no other
  skill and proposes no contract changes. It names the divergence, and the session rebuilds
  from there.
---

# /thebar: the frame, and the reset that installs it

Two parts. The frame is four questions and four laws, small enough to hold while building.
The reset installs it: derive the ideal fresh, point it at a target, deliver a verdict,
anchor the result.

Assume the invocation is earned. Find the gap between the work and the ideal. Do not defend
the path. The reset is bounded: one derivation, one comparison, one verdict. Re-deriving
ideals is more pleasant than building, and an unbounded reset is the overthinking it exists
to cure.

## The frame

Four questions, in order. Each answer bounds the next.

- **What are we building?** The intent, in one sentence, traceable to the user's words or the
  governing spec, never to the current plan.
- **Who consumes it, and what is their ideal end state?** Write the demo, not the abstract
  answer: the consumer's best moment, in their native medium. A person: what they type, what
  comes back, why they smile. An API: the calling code, clean. A refactor: the next change
  landing small. An investigation: the one-paragraph root cause. No demo means no consumer.
  Ask why the work exists.
- **What are the genuine options and tradeoffs?** Others solved this problem before you. Name
  the strongest prior art you know, argue against your shape and for the best alternative,
  then descend. If the argument wins, it saved you. If you argued for only one option, you
  defaulted instead of choosing. The industry's common shape is the consumer's expectation.
  Each deviation spends their learning budget. Spend it only where the product differs. This
  question is a check on defaulting, not a license to research.
- **What is the cleanest, fewest-moving-parts implementation that works?** Measure cleanest
  on the end state, never on the effort to reach it: simple, not easy. Comprehensive in
  coverage, dumb in shape. For each moving part, name what dies if you delete it: a moment
  the demo shows, or a named invariant with a nameable failure. "Might need it" names
  nothing. Delete any part without an answer.

Four laws, for building and judging alike.

- **Sunk work has no weight.** Five thousand lines down a wrong path argue for nothing.
  Reverting is a legal move. You will not grant yourself permission, so consider it granted.
- **Distance to the ideal has no weight.** Never trade the end state down because reaching it
  from here costs more. Rewrites, refactors, and reverts cost nothing at judgment time.
- **Facts cross a reset. Commitments do not.** Facts hold for a fresh team starting today:
  the API really rate-limits, the library really lacks the hook, the wall is really there.
  Commitments are only true of your path: the half-built shape, the workaround for a failure
  you caused, the pattern you would rather not unwind. Facts feed every derivation.
  Commitments are the drift.
- **The verdict rule.** A part, a line, a finding is justified exactly when the ideal
  implementation would contain it. A valid finding licenses movement toward the ideal, not
  necessarily the patch it proposes. "Vaguely toward the ideal" justifies everything and
  decides nothing.

## The reset

Run it once, in order.

**Collect the facts.** List what the session discovered that passes the fresh-team test:
facts about the world, never decisions about the path. This list is all the session may hand
the derivation.

**Derive the ideal, fresh.** Answer the four questions from three inputs only: the intent
verbatim (a paraphrase smuggles the path into the framing), the facts, and the tree. The
judge must not be the drifted party. When a fresh context is available, hand it those three
inputs and nothing else, let it derive, and compare against its answer instead of your own.
With no fresh context, write the full derivation before looking at the work again, and
strike any clause that is a commitment wearing a fact's clothing. Every reset derives fresh.
A previous reset's output is a snapshot, not a reference. Facts accumulate, and that is why
resets converge instead of churning.

**Point it at the target.**

- *Backward: the work so far.* Hold the ideal against the whole path, plan included, measured
  from the intent. Drift often enters at the plan, not the last hour. Give each divergence
  that changes what ships one line: "justified, because…", where the because cites a demo
  moment, a spec line, or a nameable failure. A justification that cites nothing is the drift
  talking. Name which link broke: parts the end state never asked for is overengineering,
  "done" redefined as "the error is gone" is corner-cutting, options compared forever without
  descending is overthinking. Fix downward from the break. Before asking what falls short,
  ask what should not exist. If the comparison produced no deletions, distrust it. Naming and
  style deltas do not change what ships: note them and leave them out.
- *Sideways: a pile of findings.* The verdict rule is the triage. Derive the ideal before
  reading the findings, then judge each against it. Every finding leaves with a verdict,
  valid or invalid with one line of why. A triage that drops findings silently has not
  judged them.
- *Forward: a slice about to start.* There is nothing to collide with. The derived ideal is
  the output: write the anchor and build down from it.

**Deliver the verdict.** One of three. The path survived: say so plainly. A reset that
confirms the path is a cheap success, and it answers the tells that fired it. The work
diverged: say what to cut and how to rebuild to the ideal from here, reverting included.
Checkpoint the cut (a commit, a stash) so the revert grant destroys nothing when taken. The
gap is a scope change: hand it to the user. Never change scope silently.

**Anchor it.** Write one paragraph into the conversation: what we are building, for whom,
the ideal end state, the facts that bound it, the divergence you found, and the path from
here. Make it self-contained, readable with nothing above it: a session deep enough to need
a reset is deep enough to be summarized, and the paragraph may be all that survives.
Re-approach from it. Do not resume where you left off.
