---
name: writing
description: Write or edit anything that people or models read, including replies to the user, messages and emails sent on the user's behalf, cold outreach, docs, API references, READMEs, specs, PR descriptions, commit messages, skill files, prompts, landing pages, marketing emails, posts, and slides. Use it for any text longer than a line, when you edit someone's draft, and when the user says that the writing is unclear, too long, hard to read, or sounds like marketing or AI.
argument-hint: "[file or text]"
---

# Writing

Use this skill to write or edit any text that a person or a model reads. A good text changes what its reader knows or does, and the reader gets the message on the first pass, even if they only scan. Start from the reader's situation, follow the principles, and check the draft before you share it. For text inside a product's UI, also follow design-knowledge's `foundations/copy.md`.

## Read the situation

Before the first word, answer the following five questions, because together they set the text's length, order, and tone. The first three follow the rhetorical situation (Lloyd Bitzer, "The Rhetorical Situation," 1968):

| Question | Possible answers | What the answer changes |
| --- | --- | --- |
| Who reads it? | Someone who knows you and the context, a stranger, or a model | How much context you give, how much trust you build, and whether you give reasons |
| What should they do after reading? | Understand, act, decide, or agree | The shape: the answer first, numbered steps, options with your pick, or a claim with proof |
| How will they read it? | They scan it, read it once in full, or glance at it in an inbox or a feed | The length, what goes first, and the subject line or headings |
| Whose voice is it? | The user's, the product's, a neutral document's, or yours | The tone and the words |
| What does a mistake cost? | Little, a lot, or nobody can undo it once you send or publish it | Whether the user sees a draft before it goes out |

Then write the change that you want in the reader as one sentence. That sentence is the core message, and it goes first. If nothing changes for the reader, don't write the text (Larry McEnerney, "The Craft of Writing Effectively").

## Principles

Follow these principles in every text. Each one gives its reason, so that you can apply it to cases that it doesn't name.

- **Put the answer first.** Busy readers read the first line of a text and of each paragraph, and often stop there (Jakob Nielsen, 1997). Open with the conclusion, the request, or the result, and give the context after it.
- **Use the reader's words.** A term that you coined during the work is shorthand that only you can decode, and defining it doesn't help. Use the name that the reader uses every day, say what happens rather than how the system does it, and give each thing one name.
- **Make every claim true and checkable.** A wrong name, number, or promise costs more trust than the text earns. Use numbers instead of vague words, name the source of each fact, and never invent a quote, a statistic, or a detail about a person.
- **Make the skeleton carry the message.** Most readers scan: they read the headings, the first sentence of each paragraph, the run-in headings, and the tables (Jakob Nielsen, 1997). Choose each part's form by what the information is, so that the skeleton alone gives the whole message. `references/rules.md` matches each kind of information to its form.
- **Write plain sentences.** A sentence that needs a second read loses the reader. Put one idea in each sentence, name who acts, and use the everyday word (Google, "Technical Writing One").
- **Cut what doesn't move the reader.** Each extra sentence competes with the ones that matter. Remove warm-ups, recaps, hedges, and answers to questions that nobody asked. A text that's as long as the work behind it is usually too long.
- **Sound like a knowledgeable colleague.** Readers trust plain, direct text and distrust hype (Google, "Voice and tone"). Remove slogans, taglines, and phrases that announce importance, and remove the patterns that mark text as AI-written, which `references/rules.md` lists.

## Rules that agents break most

These rules apply to almost every text, so follow them without opening the references. `references/rules.md` gives each one's reason and example:

1. Put the answer, the request, or the result in the first line.
2. Put one idea in each sentence.
3. Name who acts: "Grip marked the message failed," not "The message was marked failed."
4. Put a condition before its instruction: "If the file exists, read it."
5. Use the reader's words, not terms that you coined during the work.
6. Use numbers instead of vague words: "56 px," not "a large gap."
7. Leave out taglines, slogans, and sentences that announce what comes next.
8. Use bold only for run-in headings and the names of UI elements.
9. Put anything that you compare on two or more attributes in a table.
10. Don't use em dashes, and avoid semicolons. Use a period, a comma, or a colon instead.

## Situations

The five questions cover most texts. The following situations add a few rules of their own:

- **Replying to the user in a chat.** The user knows the context and wants to act, so lead with the result and keep the reply short. Use plain English at about B2 level, and don't narrate your steps. If you need a decision, end with that one question.
- **Writing in the user's voice.** Before you draft a message, an email, or a post that the user will send, read three to five of their past messages to the same person or channel. Match the length, the greeting, and the language, and make one request per message. Show the user the draft, because nobody can take back a sent message.
- **Editing someone's text.** Keep every decision, fact, number, name, and open question, and keep the author's voice. Restructure freely, and list what you removed under the rewrite. If the original has a gap, ask about it instead of filling it.
- **Convincing someone.** Start from the reader's problem or goal, in their words. How much of the problem you state first depends on how aware of it the reader already is (Eugene Schwartz, *Breakthrough Advertising*, 1966). Back each claim with proof, such as a number, a customer, or a demo, and ask for one action. If the project has a positioning file (`.agents/positioning.md`, `POSITIONING.md`, or `.agents/product-marketing-context.md`), read it first. Never invent proof.
- **Instructing a model.** A skill file or a prompt is documentation for a model. Give the reason for each instruction, because a model that knows why a rule exists can apply it to cases that the text doesn't name (Anthropic, "Prompting best practices"). Describe the goal, and leave the method to the model, unless the method is a convention or a fact that it can't work out. Explain the cost of a mistake instead of writing ALWAYS or NEVER in capitals, and keep each instruction in one place.
- **Writing in another language.** Write in the reader's language. The principles hold in every language, but follow that language's own conventions for punctuation, formality, and word order.

## Check the draft

Before you share the text, check it in this order:

1. Read only the skeleton: the headings, the run-in headings, the first sentence of each paragraph and list item, and the tables. If the skeleton doesn't give the whole message, fix the structure before you fix any sentence.
2. Read each sentence once at speaking pace. If you need to read it twice, split it, or name its actor and its verb.
3. Read the text as the reader, who wasn't there when you did the work. Note what they'd understand and do, and whether they'd say "so what?" at any line.
4. Delete each sentence that doesn't move the reader toward the change that you named.
5. Check the text against the AI tells in `references/rules.md`.

## References

Read the following files when the text needs them:

| File | When to read it |
| --- | --- |
| `references/rules.md` | You write anything longer than a short message, or you check a draft. It holds every concrete rule, from words to whole documents, each with its reason and an example. |
| `references/conventions.md` | You write a format with fixed conventions, such as a commit message, a PR, an API reference, a README, release notes, an email, a cold message, a landing page, a post, or slides. |
| `references/examples.md` | You want to see a situation done well, as a before-and-after pair. |
| `references/evidence.md` | You need to defend a rule with research. |

## Sources

This skill draws on the following sources:

- Google, "Google developer documentation style guide," and the "Technical Writing One" and "Technical Writing Two" courses. https://developers.google.com/style and https://developers.google.com/tech-writing
- Jakob Nielsen, "How users read on the web" (NN/g, 1997). https://www.nngroup.com/articles/how-users-read-on-the-web/
- Microsoft, "Top 10 tips for Microsoft style and voice."
- Anthropic, "Prompting best practices."
- Lloyd Bitzer, "The Rhetorical Situation" (1968). Larry McEnerney, "The Craft of Writing Effectively." Eugene Schwartz, *Breakthrough Advertising* (1966). William Strunk Jr., *The Elements of Style* (1918).
- The skills merged into this one: readable, technical-writing, stop-slop (Hardik Pandya, MIT), writing-clearly-and-concisely (Jesse Vincent), and copywriting and marketing-psychology (Corey Haines, MIT).
