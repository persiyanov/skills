---
name: grilling
description: Question the user until you both understand a plan, decision, idea or design the same way, with nothing important assumed. Use when the user says grill or wants to stress-test their thinking, and when brainstorming, planning or a zen-review report need the user's judgement.
---

# Grilling

**Every skill named here is required.** When a step names one (/name), invoke it with the Skill tool at that step and follow it in full. Working from memory of a skill is not following it; after a compaction, read it again.

Interview the user relentlessly until you reach a shared understanding. Map what is being decided as a design tree: every decision branches into the decisions that hang off it.

**Think with /principles.** As each decision opens, read the principles that bear on it in full; your options and recommendations rest on them. Before you show a round, run each option through Common Sense: a plain question the user asks first is one you skipped.

## What to find, what to ask

**Understand first.** Read the code, docs and data, and run the cheap check (/principles: Know What Is True). Then think it through yourself: the real need behind the ask, what must be true for it to work, the options down to the simplest and doing nothing, and how each one fails.

Finding facts is your job, never the user's: the code, logs, CLIs, docs and live probes are yours to use. When a question needs a fact, dispatch a sub-agent to find it, and don't block on it: a running exploration is an unsettled prerequisite, so only the questions downstream of it wait. A fork the facts settle is not a question; it goes into the artifact with its source.

Ask what only the user holds: their values, their customers, their taste, context you can't look up, and every fork the facts don't settle.

**Use the words already in use**, the user's and the system's. A new word claims a new concept: say how it differs from the nearest existing one.

## Rounds

The frontier is every decision whose prerequisites are settled: the questions you can ask now without guessing at answers you haven't heard yet. Ask the whole frontier in one round, most consequential first: the most decisions hanging off it, hardest to undo, least understood. A question that depends on another one still open belongs to a later round.

Then wait for the answers. Each answered round reshapes the tree: rethink the whole, recompute the frontier, and ask the next round. A question about your recommendation is a challenge, not a verdict: defend it with its reasons, or change it and name the fact the question exposed.

Number questions across the session, so the user can answer "4 A, 5 B" and reopen Q4 later. A question the answers made moot is dropped with a one-line note; one they reshaped is asked again under a new number; one they skipped is asked again in the next round.

## Format

Show the artifact the questions live in with /show-me: the part of the spec, a flow, a schema, the user's own plan, as it is today and as proposed. A fork asked without the shape it changes can't be judged. Write the context for someone who missed your research: who it affects, and what each name means.

```
Round <n>: <theme>, <count> questions

<what you found since the last round, and any conflict or reopen>

<the artifact>

❓ **Q4** - **<label>**: <the context needed to decide>

Question: <the question>

A. <option, what it costs>
B. <option, what it costs>
C. <option, what it costs>

➡️ <your recommendation, and the fact that picks it over the runner-up>

---

❓ **Q5** - <same shape>

---
```

One decision per question, with real options. The label is never the question; the Question line states it outright. The recommendation is never a bare letter: name the fact, so the user can disagree with the reason rather than ask for it. If a question can't be answered in a minute, the context is missing, or it needs a dive.

## Moves

Either side can call a move; name the one you make and why.

| Move | When | What happens |
| --- | --- | --- |
| Find out | judgement can't settle it, evidence can | research or a throwaway spike, back with the evidence; a spike costs minutes, a debate costs rounds |
| Dive | a sub-problem is too big for one question | it gets its own rounds, then you return |
| Park | it isn't needed yet | record it with what would reopen it |
| Step back | answers conflict, every option looks bad, the user says "wrong question", or the user keeps overriding you in one area | your picture of their goals is wrong there; ask the question underneath |
| Reopen | a settled answer must change | name the fact, show what else it reopens, go on the user's yes |
| Scrap | evidence kills the whole design or plan | keep what was learned, restart from the framing |

## Done

The frontier is empty: every branch visited, nothing silently assumed. Don't act on the outcome until the user confirms you have reached a shared understanding.
