---
name: technical-writing
description: Write in the plain, direct style of good technical documentation, structured for readers who scan, based on Google's developer documentation style guide. Use it for skill files, prompts, docs, READMEs, specs, commit messages, and replies, and when the user says that the writing sounds like marketing, slogans, or AI, or that it's hard to read.
argument-hint: "[file or text]"
---

# Technical writing

Use this skill to write text that a reader can find their way through and act on, such as documentation, skill files, prompts, specs, commit messages, and replies. The rules come from Google's developer documentation style guide and the other guides in [Sources](#sources). They serve one goal: the reader gets the message on the first pass, even if they only scan.

## Before you write

Settle three things before the first sentence:

1. Name the reader and what they need to know or do after reading. Write for that reader only.
2. Decide the scope: what the text covers, what it leaves out, and what the reader must already know. When you review the draft, delete anything outside the scope (Technical Writing Two, "Organizing large documents").
3. Write the main point as one sentence. It becomes the first line of the text.

## Structure for readers who scan

Most readers scan instead of reading. In one study, 79% of users scanned a new page, and only 16% read it word by word (Nielsen, "How users read on the web," 1997). They read the headings, the first words of each paragraph and list item, and anything set apart, such as tables and code. Build the text so that this skeleton alone gives the whole message.

To build that skeleton, follow these rules:

- Put the conclusion first, in the first line of the text and of each section.
- Name the content of each section in its heading, in the reader's terms. Name the task they're doing, not the tool: "Create the site," not "Run carambola." Use sentence case.
- Put a line of text under each heading before any subheading.
- Give each paragraph or list item one idea, and state it in the first sentence.
- Put the rule first, then its reason, then the details. A reader who stops after the first sentence still has the rule (Nielsen, 1997).
- Introduce each term next to the instruction that needs it. Break walls of text into lists, tables, and headings (Technical Writing Two, "Organizing large documents").
- If a list item needs more than two sentences, start it with a bold run-in heading that names it. Google allows bold only for UI elements and run-in headings (Google, "Text-formatting summary").
- Say each thing once, where the reader needs it. Elsewhere, point to it.
- Introduce each list and each table with a full sentence.

Choose the form by what the information is:

| The information | The form |
| --- | --- |
| Steps in order | A numbered list, one action per step |
| Independent items | A bulleted list, with every item in the same grammatical form |
| Items compared on several attributes | A table |
| Reasons, trade-offs, and conditions | Short prose with "because," "so," and "unless" |
| A rule | The rule, then an example, and an anti-example if the mistake is common |
| A diagram or screenshot | One idea per picture, a caption that states the takeaway, and a mark on the part that matters. Write the caption first (Technical Writing Two, "Illustrating"). |
| Commands, file names, and code | Code font, or a code block |

## Sentences

To make each sentence clear on the first read, follow these rules:

- Put one idea in each sentence. If a sentence holds several ideas, split it, or turn it into a list (Technical Writing One, "Short sentences").
- Name who acts. A passive sentence hides the actor: if you can add "by someone" after the verb, rewrite the sentence with the actor as its subject.
- Address the reader as "you," and write instructions in the imperative: "Run the review," not "The review should be run."
- Choose a specific verb. Forms of "be," "occur," and "happen" often hide the real action, and so do sentences that start with "There is" or "There are" (Technical Writing One, "Clear sentences").
- Put a condition before its instruction: "If the file exists, read it," not "Read the file if it exists."
- Use the everyday word. Write "use," not "leverage," and "for example," not "e.g."
- Use numbers instead of vague words. Write "56 px," not "a large gap."
- Cut words that don't change the meaning, such as "simply," "just," "really," and "very." If a sentence works without "you can," cut that too (Microsoft, "Top 10 tips").

## Tone

Write the way a knowledgeable colleague explains something: friendly and direct, without jokes or hype (Google, "Voice and tone"). To keep that tone, follow these rules:

- State facts. Remove taglines, slogans, and phrases that announce importance, such as "the key insight" or "the most powerful."
- Start with the content. Remove sentences that announce what comes next.
- Leave out "easy," "simple," and "quick" in instructions, because the task might not be easy for the reader.
- Leave out "please" in instructions.

## Instructions for an agent

A skill file or a prompt is documentation for a model, so the rules above apply. Four more rules apply:

- Give the reason for each instruction. When a model knows why a rule exists, it can apply the rule to cases that the text doesn't name (Anthropic, "Prompting best practices").
- Describe the goal and its reason, and leave the method to the agent. Specify the method only when it's a convention that must stay the same every time, or a fact that the agent can't work out.
- Explain the cost of a mistake instead of writing ALWAYS or NEVER in capitals.
- Keep each instruction in one place. When two files say the same thing, they drift apart.

## Examples

The following pairs show the rules applied:

| Instead of | Write |
| --- | --- |
| The exception occurs when dividing by zero. | Dividing by zero raises the exception. |
| What holds it together | Principles |
| Make it easy for the user to follow and decide. | Show the user what changed and what they need to decide, so that they can steer the work. |
| A list item of five sentences that mixes a rule, its reason, a definition, and a method | **Prove each gap.** The designer can't tell a proven gap from a guess. Count, measure, or quote, so that anyone can check it. |

## Check the draft

Before you share the text, check it in this order:

1. Read only the skeleton: the headings, the run-in headings, the first sentence of each paragraph and list item, and the tables. If the skeleton doesn't give the whole message, fix the structure before you fix any sentence.
2. Read each sentence once at speaking pace. If you need to read it twice, split it, or name its actor and its verb.
3. Find each passive sentence, and rewrite it with the actor as the subject.
4. Delete each sentence that doesn't help the reader you named at the start.
5. Read the text aloud. If you wouldn't say a sentence to a colleague, rewrite it.

## Sources

This skill draws on the following guides:

- Google, "Google developer documentation style guide": highlights, voice and tone, procedures, lists, and the text-formatting summary. https://developers.google.com/style
- Google, "Technical Writing One": clear sentences, short sentences, paragraphs, and documents. https://developers.google.com/tech-writing/one
- Google, "Technical Writing Two": organizing large documents, illustrating, and creating sample code. https://developers.google.com/tech-writing/two
- Jakob Nielsen, "How users read on the web" (NN/g, 1997). https://www.nngroup.com/articles/how-users-read-on-the-web/
- Microsoft, "Top 10 tips for Microsoft style and voice." https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice
- Anthropic, "Prompting best practices": add context to improve performance. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- William Strunk Jr., *The Elements of Style* (1918): use the active voice, and omit needless words.
- The readable skill in this repository: the skeleton test, and choosing the form by what the information is.
