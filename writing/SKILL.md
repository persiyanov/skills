---
name: writing
description: Write or edit anything that people or models read, including replies to the user, messages and emails sent on the user's behalf, cold outreach, docs, API references, READMEs, specs, PR descriptions, commit messages, skill files, prompts, landing pages, marketing emails, posts, and slides. Use it for any text longer than a line, when you edit someone's draft, and when the user says that the writing is unclear, too long, hard to read, or sounds like marketing or AI.
argument-hint: "[file or text]"
---

# Writing

A text works when its reader gets what they need on the first pass, and nothing else. Every word costs the reader attention, so the information decides what goes in, and its form and length follow from it. A template, a past text, or a sense of how long this kind of text runs never sets them. For text inside a product's UI, also follow design-knowledge's `foundations/copy.md`.

## Before you write

1. **Name the reader and the change.** Know who reads it, what they already know, and how they read it: they scan it, read it in full, or glance at it in an inbox. Write, in one sentence, what they should know or do afterward. That sentence goes first. If nothing changes for them, don't write the text. If nobody can take the text back once it's sent or published, show the user a draft first.
2. **List what they must learn.** Write the facts down before any prose, and put only these in the text. If only some readers need a fact, put it where those readers meet it, such as the product or a later message.
3. **Check each fact.** Confirm each claim at its source, and use a number where a vague word would hide one. Walk each instruction as the reader: if they can't do exactly what it says, it's wrong. If a claim needs a qualifier to stay true, narrow the claim or drop it first. Never invent a quote, a statistic, or a detail about a person.

## Principles

- **Give each fact the smallest form that carries it.** A fact that fits one line gets one line, even beside an item that needs three. Separate items go in a list, and items compared on two attributes go in a table. Write a paragraph only for facts that connect through "because," "so," or "unless." Things of one kind share the order of their parts, not their size. Give each topic its own section, so that two independent features never share a heading.
- **Use the word this reader expects.** Choose the word they would use for this thing here: "find people," not "pick people," and "use," not "leverage." Never use a term that you coined during the work, and give each thing one name. Say what happens, not how the system does it.
- **Start from what the reader already has.** Say what changed in the thing they use. If a new kind joins one they already use, say when to use each. If they asked for the change, say so.
- **Put the answer first**, in the text and in each paragraph. Readers scan the headings and first lines, and often stop there, so those alone must carry the message.
- **Write plain sentences.** Put one idea in each sentence, and name who acts. Put a condition before its instruction.
- **Sound like a colleague who knows the subject.** Leave out slogans, hype, sentences that announce what comes next, and the AI patterns in `references/rules.md`. Don't use em dashes, and avoid semicolons. Use bold only for run-in headings and the names of UI elements.

## Check the draft

Read the draft as the reader, who wasn't there when you did the work, and ask two questions:

1. Would this reader miss this sentence? If not, delete it.
2. Could this section be one line without losing a fact from your list? If it could, make it one line.

Then read the draft once at speaking pace, and split any sentence that you have to read twice. Last, read only the headings and first lines. If they don't give the whole message, fix the structure.

## Situations

- **Replying to the user in a chat.** Lead with the result, use plain English at about B2 level, and don't narrate your steps. If you need a decision, end with that one question.
- **Writing in the user's voice.** Read three to five of their past messages to the same person or channel, and match the greeting, the language, and the tone. Match their length only where they carried as much information. Make one request per message.
- **Editing someone's text.** Keep every decision, fact, number, name, and open question, and keep the author's voice. Restructure freely, and list what you removed. If the original has a gap, ask about it instead of filling it.
- **Convincing someone.** Start from the reader's problem, in their words. How much of the problem you state depends on how aware of it the reader already is. Back each claim with real proof, such as a number, a customer, or a demo, never invented, and ask for one action. If the project has a positioning file (`.agents/positioning.md`, `POSITIONING.md`, or `.agents/product-marketing-context.md`), read it first.
- **Instructing a model.** Give the reason for each instruction, so that the model can apply it to cases that the text doesn't name. Describe the goal, and leave the method to the model, unless the method is a convention or a fact that it can't work out. Explain the cost of a mistake instead of writing ALWAYS or NEVER, and keep each instruction in one place.
- **Writing in another language.** Write in the reader's language, and follow its conventions for punctuation, formality, and word order.

## References

| File | Read it when |
| --- | --- |
| `references/rules.md` | You check a draft, or you need a rule for words, sentences, structure, formatting, or AI patterns. |
| `references/conventions.md` | You write a format with fixed conventions, such as a commit, a PR, an API reference, release notes, an email, a landing page, or slides. |
| `references/examples.md` | You want to see a situation done well, as a before-and-after pair. |
| `references/evidence.md` | You need to defend a rule with research, or you want the sources. |
