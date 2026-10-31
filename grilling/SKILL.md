---
name: grilling
description: Question the user until you both understand a plan, decision, idea or design the same way, with nothing important assumed. Use when the user says grill or wants to stress-test their thinking, and when brainstorming, planning or a zen-review report need the user's judgment.
---

# Grilling

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Working from memory of a skill is not following it; after a compaction, read it again.

Keep interviewing the user until you reach a shared understanding. Map what is being decided as a dependency tree: each decision leads to the decisions that depend on it.

**Use /principles.** As each decision opens, read the principles that apply to it in full; base your options and recommendations on them. Before you show a round, check each option against Common Sense: a plain question the user asks first is one you skipped.

## What to find, what to ask

**Understand first.** Read the code, docs and data, and run the cheap check (/principles: Know What Is True). Then think it through yourself: the real need behind the request, what must be true for it to work, the options down to the simplest and doing nothing, and how each one fails.

Finding facts is your job, never the user's: the code, logs, CLIs, docs and live checks are yours to use. When a question needs a fact, start a subagent to find it, and don't block on it: a running search is an unresolved dependency, so only the questions that depend on it wait. A choice the facts settle is not a question; it goes into the artifact with its source.

Ask what only the user knows: their values, their customers, their taste, context you can't look up, and every choice the facts don't settle.

**Use the words already in use**, the user's and the system's. A new word means a new concept: say how it differs from the nearest existing one.

## Rounds

The ready decisions are those whose dependencies are settled: the questions you can ask now without guessing at answers you haven't heard yet. Ask all of them in one round, most important first: the most decisions depending on it, hardest to undo, least understood. A question that depends on another one still open belongs to a later round.

Then wait for the answers. Each round of answers changes the tree: rethink all of it, find the ready decisions again, and ask the next round. A question about your recommendation is a challenge, not a decision: defend it with its reasons, or change it and name the fact the question exposed.

Number questions across the session, so the user can answer "4 A, 5 B" and reopen Q4 later. A question the answers made irrelevant is dropped with a one-line note; one they changed is asked again under a new number; one they skipped is asked again in the next round.

## Format

Show the artifact the questions are about with /show-me: the part of the spec, a flow, a schema, the user's own plan, as it is today and as proposed. A choice asked without the design it changes can't be judged. Write the context for someone who missed your research: who it affects, and what each name means.

```
Round <n>: <topic>, <count> questions

<what you found since the last round, and any conflict or reopened decision>

<the artifact>

❓ **Q4** - **<label>**: <the context needed to decide>

Question: <the question>

A. <option, what it costs>
B. <option, what it costs>
C. <option, what it costs>

➡️ <your recommendation, and the fact that favors it over the next best option>

---

❓ **Q5** - <same format>

---
```

One decision per question, with real options. The label is never the question; the Question line states it directly. The recommendation is never a bare letter: name the fact, so the user can disagree with the reason rather than ask for it. If a question can't be answered in a minute, the context is missing, or it needs its own rounds.

## Actions

Either side can call an action; name the one you take and why.

| Action | When | What happens |
| --- | --- | --- |
| Research | judgment can't settle it, evidence can | research or a throwaway spike, back with the evidence; a spike costs minutes, a debate costs rounds |
| Split out | a sub-problem is too big for one question | it gets its own rounds, then you return |
| Defer | it isn't needed yet | record it with what would reopen it |
| Step back | answers conflict, every option looks bad, the user says "wrong question", or the user keeps overriding you in one area | your understanding of their goals is wrong there; ask the underlying question |
| Reopen | a settled answer must change | name the fact, show what else it reopens, continue when the user says yes |
| Restart | evidence invalidates the whole design or plan | keep what was learned, restart from the problem statement |

## Done

No decisions are left: every branch visited, nothing silently assumed. Don't act on the outcome until the user confirms you have reached a shared understanding.
