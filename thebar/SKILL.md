---
name: thebar
# Keep the warning signs in this description: self-triggering can only use text
# loaded before invocation, and only the description is. Shorten anything else first.
description: >-
  A universal reset: a short checklist for judging work against the ideal end state, and the
  one operation that applies it. Invoke /thebar when the agent is deep in details and off
  track: overthinking, overengineering, or cutting corners. The reset works out the ideal
  from scratch (what are we building, for whom, what is their ideal end state, what is the cleanest
  implementation with the fewest moving parts that works), then applies it backward (compare it
  with the whole current approach, plan included), sideways (the validity rule over review
  findings: a finding is valid exactly when the ideal implementation would not contain the flaw it
  names), or forward (at the start of a slice, the ideal itself is the output). Use
  when the user says "boil the ocean", "raise the bar", "ideal end state", "from first
  principles", "no half-measures", or "hold the line". Run it on yourself, unasked, when you
  notice these warning signs in your own work: a third consecutive fix to the same spot, a guard
  for a state with no concrete example, sleep or retry loops appearing, a "for now" in a
  comment, special cases piling up around one boundary. Self-contained: it depends on no other
  skill and proposes no contract changes. It names the differences, and the session rebuilds
  from there.
---

# /thebar: the checklist, and the reset that applies it

Two parts. The checklist is four questions and four rules, small enough to remember while
building. The reset applies it: work out the ideal from scratch, apply it to a target, give a
decision, write a summary.

Assume there is a real reason for this run. Find the gap between the work and the ideal. Do not defend
the current approach. The reset is limited: one analysis, one comparison, one decision. Redoing
the analysis is more pleasant than building, and an unlimited reset is the overthinking it exists
to fix.

## The checklist

Four questions, in order. Each answer limits the next.

- **What are we building?** The intent, in one sentence, traceable to the user's words or the
  governing spec, never to the current plan.
- **Who consumes it, and what is their ideal end state?** Write the demo, not the abstract
  answer: the consumer's best moment, in the form they use. A person: what they type, what
  comes back, why they are happy. An API: the calling code, clean. A refactor: the next change
  being small. An investigation: the one-paragraph root cause. No demo means no consumer.
  Ask why the work exists.
- **What are the real options and tradeoffs?** Others solved this problem before you. Name
  the strongest existing solution you know, argue against your design and for the best alternative,
  then move on. If the argument wins, it saved you. If you argued for only one option, you
  defaulted instead of choosing. The industry's common design is what the consumer expects.
  Each deviation is more for them to learn. Deviate only where the product differs. This
  question is a check on defaulting, not a license to research.
- **What is the cleanest implementation with the fewest moving parts that works?** Measure cleanest
  on the end state, never on the effort to reach it: simple, not easy. Complete in
  coverage, simple in design. For each moving part, name what is lost if you delete it: a moment
  the demo shows, or a named invariant with a concrete failure. "Might need it" names
  nothing. Delete any part without an answer.

Four rules, for building and judging.

- **Ignore sunk cost.** Five thousand lines down a wrong path argue for nothing.
  Reverting is allowed. You will not give yourself permission, so consider it given.
- **Ignore the distance to the ideal.** Never accept a worse end state because reaching the ideal
  from here costs more. When judging, count rewrites, refactors, and reverts as free.
- **Keep facts. Drop earlier decisions.** Facts hold for a new team starting today:
  the API really has a rate limit, the library really lacks the hook, the limit is really there.
  Earlier decisions are only true of your approach: the half-built design, the workaround for a
  failure you caused, the pattern you would rather not undo. Use facts in every analysis.
  Earlier decisions are what went off track.
- **The validity rule.** A part, a line, or a finding is justified exactly when the ideal
  implementation would contain it. A valid finding allows a change toward the ideal, not
  necessarily the patch it proposes. "Vaguely toward the ideal" justifies everything and
  decides nothing.

## The reset

Run it once, in order.

**Collect the facts.** List what the session found that a new team would also find true:
facts about the world, never decisions about the approach. This list is all the session may pass
to the analysis.

**Work out the ideal from scratch.** Answer the four questions from three inputs only: the intent
word for word (a paraphrase brings the current approach in), the facts, and the tree. The
judge must not be the one who went off track. When a fresh context is available, give it those
three inputs and nothing else, let it do the analysis, and compare against its answer instead of
your own. With no fresh context, write the full analysis before looking at the work again, and
remove any clause that is an earlier decision presented as a fact. Every reset starts from
scratch. A previous reset's output is a snapshot, not a reference. Facts accumulate, which is why
resets converge instead of going in circles.

**Apply it to the target.**

- *Backward: the work so far.* Compare the ideal with the whole approach, plan included, starting
  from the intent. Going off track often starts in the plan, not the last hour. Give each difference
  that changes what ships one line: "justified, because…", citing a demo
  moment, a spec line, or a concrete failure. A justification that cites nothing is a sign of being off track.
  Name which step failed: parts the end state never asked for is overengineering,
  "done" redefined as "the error is gone" is cutting corners, options compared forever without
  moving on is overthinking. Fix from that step down. Before asking what falls short,
  ask what should not exist. If the comparison produced no deletions, distrust it. Naming and
  style differences do not change what ships: note them and leave them out.
- *Sideways: a list of findings.* Use the validity rule for triage. Work out the ideal before
  reading the findings, then judge each against it. Mark every finding
  valid or invalid, with one line of why. Triage that drops findings silently has not
  judged them.
- *Forward: a slice about to start.* There is nothing to compare with. The ideal is
  the output: write the summary and build from it.

**Give the decision.** One of three. The approach is right: say so plainly. A reset that
confirms the approach is a cheap success, and it answers the warning signs that triggered it. The
work is off track: say what to cut and how to rebuild to the ideal from here, reverting included.
Save the work first (a commit, a stash), so a revert destroys nothing. The
difference is a scope change: hand it to the user. Never change scope silently.

**Write the summary.** Write one paragraph into the conversation: what we are building, for whom,
the ideal end state, the facts that limit it, the differences you found, and the approach from
here. Make it self-contained, readable with nothing above it: a session long enough to need
a reset is long enough to be summarized, and the paragraph may be all that survives.
Start again from it. Do not resume where you left off.
