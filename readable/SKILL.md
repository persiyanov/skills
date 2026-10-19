---
name: readable
description: >
  Present information so a reader can find it and use it: specs, plans,
  design docs, tickets, READMEs, user guides, runbooks, API and system
  descriptions, PR descriptions, reports, long messages. Use whenever the user
  says readable, optimize this doc, make it scannable, restructure, or hands
  over a draft, and whenever you are about to write anything longer than a
  screen, because agents default to long prose and readers do not read prose.
  Preserves key information. Word choice is stop-slop and
  writing-clearly-and-concisely, not this.
---

# Readable

Readers do not read. They scan the skeleton (title, opening, headings, first sentences, bold, tables, code), decide in the first screen whether to stay, read a paragraph until it stops paying, and hold about four ideas at once. They remember what was signaled and forget what sat mid-paragraph. The documents people find easy (GCP docs, Python PEPs, the Stripe API reference) are built for that reader: predictable shape, one job per unit, each kind of information in the form that fits it, prose only where something needs explaining. `references/evidence.md` has the studies when a rule needs defending.

Writers have the opposite problem. A writer who just did the work knows too much: the mechanism, the history, the names invented along the way. Left alone, the writer compresses all of that into shorthand that only the writer can decode, and explains how things work when the reader asked what happened. Prose is what an agent produces by default and the last thing a reader wants. Structure is the default here. Prose has to earn its place.

## The reader's question

Deciding what to say comes first: who reads it, what should change for them, and what they need to hear (/principles: Write for the Reader). This skill shapes what you decided to say.

Every document exists to answer one question. Name it before writing, and put the answer in the first line:

| Document | The reader asks |
| --- | --- |
| Spec | What are we building, what was decided, what binds me? |
| Plan | What is first, what blocks what, where are we? |
| Ticket | What do I build, what proves it done? |
| PR | What broke, what changed, what do I look at? |
| README, user guide | How do I do the thing, in five minutes? |
| Instructions, runbook | What do I do, in what order, and how do I know it worked? |
| API or system description | What is it, what does it do, show me? |
| Report | What did you find, what should I do? |
| Message | What do you need from me, by when? |

Everything that does not serve that question is demoted or cut.

## What to say

**Events, not mechanisms.** Say what happens, with the real actors: who did what to what, and what the reader can see. How the code gets there is the reader's business only when they must operate it. A reader can picture "LinkedIn rejected the send and Grip marked the message failed"; they cannot picture "an answer about the account ended whichever Action it landed on."

```
Bad:  An answer about the account ended whichever Action it landed on.
Good: LinkedIn said "account restricted". Grip marked the message failed
      and moved on.
```

**Then the cost.** A fact the reader cannot act on is noise. A problem is what happens and who pays. A decision is what was chosen and what it rules out. A rule is what it forbids and one example. A number is what it changes.

```
Bad:  Grip marked the message failed and moved on.
Good: Grip marked the message failed and moved on. The recipient never got
      it and nobody retried. 30 rows on prod.
```

**No words born in the work.** A name coined during the task ("the endings sweep", "the pair's answer", "hands the slot back") is shorthand to the reader. Use the name the reader uses daily, or say the plain thing. Defining a coined term does not fix it. One name per thing.

**The out-loud test.** Say the sentence to a colleague at the whiteboard who was not in the room. If you would say it differently, write that. If they would answer "so what?", add the cost. If they would ask "meaning?", it is not written yet.

## The skeleton test

Strip the body. What remains (title, opening line, headings, bold lead-ins, first sentence of each paragraph, tables, code) must give the true picture: what this is, what it decides, what it costs, what to do. If the skeleton is wrong or generic, fix it before touching a sentence. Skeleton and body never disagree.

## Shape

**Open with the answer.** First line: what this is and what it concludes or asks. Then one line of scope: what it covers and what it leaves out. Context after, and only what is needed to act. A template's section order stays; the answer goes in one line above the first heading.

**Same kind of thing, same shape.** Every endpoint, option, ticket, or section of one kind uses the same layout in the same order. The reader learns the shape once and then reads only the differences.

**Headings name what is in the section, specifically.** "Retry policy", not "Details". "Create a bucket", not "Usage". A reader skips a section from its heading alone, and other documents point at it, so headings stay short and stable. At most three levels. Text under every heading, never a heading straight into a subheading. No heading over two sentences.

**Each paragraph does one job, stated in its first sentence.** Three to five sentences. Old information before new. Every "this" and "the X" points at the previous sentence.

**Things live where they are used.** A definition, example, table, or diagram sits next to the sentence that needs it. Say each thing once at full length. A second mention is a pointer.

**Explain the new by the known.** "Like X, except Y" carries a new idea in one sentence where a fresh description takes a paragraph.

## Form

Pick the form from the job the information does. Uniform formatting (heading, intro, six bullets, repeat) tells the reader nothing about what is a claim, what is a fact, and what is a caveat.

| The information is | Its form |
| --- | --- |
| What this is, what was decided | One sentence at the top |
| Fields, parameters, options, config, errors | Table: name, type or default, meaning |
| Alternatives compared | Table, decisive column first |
| Numbers that relate | Table, never a sentence of numerals |
| A procedure | Numbered steps, one action each, what you see when it worked |
| A set of independent facts | Bulleted list, parallel grammar, one line each |
| Transitions, timelines, rule sets | Text block, one line per step, in order |
| Commands, paths, code, errors, examples | Code block, exactly as typed |
| A rule or abstraction | The rule, then an example right under it |
| A definition | One sentence where the term first appears, term in bold |
| A caveat | The sentence next to what it qualifies |
| Reasoning, a trade-off, a why | Short prose with "because", "so", "unless" |

**Prose only for reasoning.** A list strips "because" and "unless". If bullets must be read in order to make sense, they are a paragraph. If a paragraph lists things, it is a list or a table. A paragraph that describes what the system does is a list of facts wearing prose; cut it into the list.

```
Bad:  - Redis adds a network hop
      - p99 spikes correlate with GC pauses on the Redis host
      - In-process cache has no hop
Good: The p99 spikes track GC pauses on the Redis host, so any fix that
      keeps the network hop keeps the spikes. An in-process cache removes it.
```

**Every rule gets an example.** An abstraction the reader cannot picture is not understood. GCP puts a sample under every task. Stripe puts an example next to every field. Sample code is minimal and runs as shown: the common case first, then the error case, with one sentence before saying what it shows and one after saying what to notice.

**Two or more things on two or more attributes is a table.** A prose comparison makes the reader build the table in their head. A cell holds at most two sentences, or the content belongs in another form.

**One line introduces a list or table.** It says what the items are, ends in a colon, and is not a paragraph.

## Length

**As short as complete allows.** Every word tells, or it goes. Cut before you format: restatements, warm-ups, recaps, hedges, and the reasons behind things the reader did not ask about. A fact fits in a bullet of ten words; a sentence of twenty is explaining something nobody asked.

```
Bad:  Editing a campaign's message text now updates queued Actions in
      place, under the same lock the sender uses, so an edit and a send
      never cross. An Action a worker has already picked up cannot be
      edited and answers 409 too_late.
Good: Editing campaign text updates queued Actions in place. Already-
      claimed ones answer 409 too_late.
```

**Derived facts go.** If the reader can compute it from what is already on the page, do not write it.

**Length follows the question, not the work.** A week of work with a one-line answer gets a one-line answer and a link to the log.

## Sentences

**Subject, verb, then the rest.** Distance between subject and verb is the main cost in a sentence.

```
Bad:  The service, which had been migrated three months earlier after
      several escalated latency incidents, was unavailable.
Good: The service was unavailable. It had been migrated three months
      earlier after several escalated latency incidents.
```

**Active voice, concrete nouns.** Someone does something. "Grip failed the message", not "the message was failed". No noun made from a verb when the verb will do: "LinkedIn rejected it", not "LinkedIn's rejection of it".

**One idea per sentence.** Split when a sentence carries two conditions or a nested clause. Keep the connective.

**Conditions and prohibitions first.** "not", "if", "unless" are the words readers skip. "Do not run this on prod", not "Run this, unless on prod".

## Emphasis

Bold is for two things: the one line a scanner must not miss, and a lead-in that names its paragraph. Nothing else. Five bolded lines equal none. No italics or caps for running text.

## Rewriting

Restructure freely: move the answer up, turn a bullet pile into an argument or a paragraph of facts into a table, demote history below the main line. Keep every decision and its reason, every rejected alternative, guarantee, number, constraint, exception, name, and open question. Key information is what any reader will need, including the one who opens the doc in two months to ask why. Drop only restatements, warm-ups, recaps, hedges, and mechanism the reader does not operate. When in doubt, demote. List what was removed under the rewrite. Do not add and do not invent. A gap in the original becomes an open question, not a fill.

## Quick checks

- Which question is this document answering? Not in the first line? Swap.
- Skeleton alone tells a wrong or generic story? Fix it first.
- Would a colleague who was not in the room understand the sentence out loud? No? Rewrite it as you would say it.
- Would they say "so what?" Add who pays or what it changes.
- A word coined during the work? Replace it with the reader's word or the plain event.
- Paragraph describes how it works? Say what happens instead, in a list.
- Heading is "Details", "Overview", "Notes"? Name the contents.
- Two sections of one kind laid out differently? Same shape.
- Paragraph lists things? Table or list. Bullets need reading in order? Prose.
- Rule without an example? Add one.
- Heading straight into a subheading? Put a line of text between. List or table without a line saying what it is? Add it.
- Comparison in prose? Table. Numerals in a sentence? Table.
- Bold on more than a line or two per screen? Un-bold.
- Subject and verb apart? Close them. Condition mid-sentence? Put it first. Passive? Name the actor.
- Definition or example far from its use? Move it.
- Twenty words where ten would do? Cut. Closing recap? Delete.
- Rewrite longer than the original? Cut. Anything from the original missing? Restore.
