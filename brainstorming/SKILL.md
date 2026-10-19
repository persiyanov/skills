---
name: brainstorming
description: Turn a problem into an approved spec with its solution design, by grilling the user. Use whenever a change has an open design, a choice the facts don't settle, even when the user doesn't say "spec": "let's add X", "how should we build Y", "I want Z to work differently", "design this". Skip it when the facts force the design: a mechanical edit, a bug with a known cause, a decision the user already made.
---

# Brainstorming

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Working from memory of a skill is not following it; after a compaction, read it again.

The goal is a spec that a fresh agent can plan and build from without asking anything. /planning takes it from there.

## 1. Size

Three questions; the riskiest answer sets the tier:

- How hard is this to undo? Schemas, public contracts, data formats and vendor commitments are hard; code behind a flag is easy.
- How far does damage spread if it's wrong? One component, one system, several systems, or users and money.
- How uncertain are we? A pattern we've built before, or new ground.

| Tier | When | Write |
| --- | --- | --- |
| Note | easy to undo, one component | no spec: grill the open forks, record problem, decisions and test in the PR; build it |
| Spec | harder to undo, or more than one component | the spec; a section or module that doesn't carry the risk is one line |

In doubt, start with a Note and promote it when the thinking finds more risk.

## 2. Kickoff

Alignment on the problem. The user gives the problem, why now, the rationale, must-haves etc. Ground first (/principles: Know What Is True).

By default, ground with three subagents in parallel, one angle each:

- **What the change touches,** and how it got this way: the code, data, docs and history, and the words they use.
- **What sits next to it:** features, flows and policies that already do part of the job or constrain it.
- **Outside:** the prior art, conventions and best practices, with sources.

Then read what they point at yourself, and check each module's trigger in the spec template (`references/spec.md`): one that fires gets its section and its own rounds. Then the first /grilling round, on the problem; the spec starts with its answers.

## 3. Grill

/grilling on the spec until the gate passes; the gate's approval is grilling's confirmation, not a second stop. Whenever an answer changes the design, check the module triggers again.

Ask on the cheapest real artifact the work allows, from what its consumer meets to how it is built:

| Work | Artifacts, outside in |
| --- | --- |
| API, data | each consumer's flow in every state → the data and its rules → the wire and schema diff → each part's contract |
| UI | rendered screens side by side, in every state → the states and data behind them → components |
| Prompt, skill, agent | a draft run as the user's agent, and its transcript → what the AI decides and what code enforces → the tools it calls |
| Refactor, infra | today's structure and the new one: module tree, call tree, deploy diagram → the contracts that must not move |
| Policy, process | the rule applied to real past cases |

After each round, write only that round's answers into the spec, so the diff is exactly what was settled and the user can check you agree. Draft the next layer of detail as the next round's artifact; it enters the spec once answered. The spec, not the conversation, is what survives compaction and what planning reads.

On a scrap, the dead design goes into Decisions with why it died; the next design shouldn't repeat it.

## 4. Review

Two fresh subagents that haven't seen the conversation read the spec and the code, changing nothing; you can't see the blind spots you share with the user.

Each prompt holds the seat, the spec's path and the code, and nothing of yours: no summary, no risks you suspect, no decisions to leave alone, no answer you expect. Your words aim them at what you already saw.

Each builds before judging, because a reviewer who reads only prose judges only prose:

- **The user's seat:** takes each real consumer and writes what they would write against the result: the request and its full response, the handler, the agent's prompt, the click path. Then reports where it breaks, where it rubs, what's missing, and where it surprises someone used to the common products.
- **The engineer's seat:** walks one real case through the code, end to end; checks each claim about how things work today against the code; puts the design next to how the best products built the same thing; asks how it fails, whether it is correct, and whether a smaller or more standard design does the job.

Each reports everything it finds, most serious first. Test each finding; one that holds goes back through a round. When a round after review changes a decision, run the review again.

## 5. Gate

- Every section is settled, and every module is settled or ruled out in one line.
- Every layer of the artifact table was shown in a round and settled, down to how it's built.
- Every fork the facts don't settle was answered by the user.
- The hard part is de-risked by a spike, or the user accepted the risk.
- No open question blocks building.

The user has seen each round's diff, so show only what is new to them: the summary, your calls, and what review changed. They approve that. Status: Approved. Then /planning. A change to an approved decision sets it back to Draft and through this gate again.

## Writing the spec

Write every change with /readable, for two readers: the user approving it and the agent building it (/principles: Write for the Reader).

- **Each section opens with its answer.** The rest supports it.
- **A decision is one line:** the pick, the fact it rests on, what lost, and the question that settled it, or "call" when the facts did. The debate stays in the rounds.
- **Say each thing once.** A second mention is a pointer.
