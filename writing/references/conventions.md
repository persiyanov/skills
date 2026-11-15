# Format conventions

This file holds the conventions for formats that readers expect in a fixed shape. Follow them, because readers find things faster where they expect them. If the project has its own convention, such as a commit style or a PR template, follow the project's instead.

## The reader's question, by document

Each document answers one question. Answer it in the first line:

| Document | The reader asks |
| --- | --- |
| Spec | What are we building, what did we decide, and what binds me? |
| Plan | What comes first, what blocks what, and where are we? |
| Ticket | What do I build, and what proves that it's done? |
| PR description | What changed, why, and what should I look at? |
| README or user guide | How do I do the thing, in five minutes? |
| Procedure or runbook | What do I do, in what order, and how do I know it worked? |
| API reference | What is it, what does it do, and what does a call look like? |
| Report | What did you find, and what should I do? |
| Message | What do you need from me, and by when? |

## Commit messages

Write the subject line as an imperative that completes "If applied, this commit will …," in about 50 characters, with a capital letter and no period. Leave a blank line, and then explain what changed and why in the body, wrapped at about 72 characters. The diff already shows how (Chris Beams, "How to write a Git commit message," 2014).

## Pull requests

Open with what changed and why, in one or two sentences. Then say what the reviewer should look at first, how you tested the change, and what you didn't test. Link the issue or spec.

## API references

Document every endpoint or function in the same shape, in this order:

1. One sentence that says what it does.
2. The request: method and path, or the signature.
3. A parameters table: name, type, whether it's required, the default, and the meaning.
4. An example request and its full response, and then an example of a common error.
5. An errors table: code, meaning, and what the caller should do.

## READMEs

Open with one line that says what the project is and who it's for. Then give the shortest path to a first result: install, run, and see it work. Put configuration in a table, and put links to deeper docs last.

## Procedures and runbooks

List the prerequisites first. Then write numbered steps, one action each, and say what the reader sees when the step worked. If a step can fail, say what to do next, right under that step.

## Reports and summaries

Open with the finding and what you recommend. Then give the evidence, strongest first. For a meeting summary, list the decisions, then each action with its owner and date, and send it soon after the meeting.

## Release notes and changelogs

Describe each change as the user sees it, in their words, and group the changes as added, changed, and fixed (Keep a Changelog). Link each change to its docs.

## Code comments and error messages

A comment says why the code does something, because the code already says what. An error message says what happened, why, and what the person can do next, in words that the person can act on.

## Emails and messages

Make the subject line name the topic and the request. Put the request in the first two lines, and if it needs a decision, say by when. Make one request per message. If you write in the user's voice, follow "Writing in the user's voice" in `SKILL.md`.

## Cold outreach

Give one reason for writing to this person, and base it on a real fact about them, such as their post, their role, or their company's news. Ask for one small next step. Keep the message short enough to read on a phone without scrolling. Each follow-up adds something new rather than asking again. Never invent a shared connection, a detail, or a result.

## Landing pages

Build the page from these sections, in this order, and leave out any section that you can't fill with real content:

1. Hero: a headline that names the outcome and for whom, a subheadline that says how, one primary call to action, and a picture of the product.
2. Proof: customer logos, a key number, or a short quote, from real customers.
3. Problem: the reader's problem, in their words, and what it costs them.
4. Solution: three to five benefits, each a headline, an explanation, and proof.
5. How it works: three or four numbered steps, each an action and its outcome.
6. Objections: answers to the questions that stop people from buying, such as price, setup effort, and risk.
7. Final call to action: the value restated in one line, the same primary action, and what removes the risk, such as a free trial.

Write benefits rather than features, specifics rather than claims, and the customer's words rather than the company's. Give each section one idea. Common headline patterns are "{Outcome} without {pain}" and "The {category} for {audience}."

## Marketing emails

Give each email one goal and one call to action. Write the subject line and the preview text together, because the reader sees both before opening the email. Lead with what the reader gets, and keep the email short enough to read on a phone.

## Posts

Make the first line give the reader a reason to read the second. Give the post one idea, and support it with a concrete story or number. End on that point, not on a slogan.

## Slides

Write each slide's headline as a full sentence that states the takeaway, and use the body as the evidence for it, such as a chart, a picture, or a number (Michael Alley, "assertion-evidence" slides). Give each slide one message.

## Persuasive text

Use the following tools of persuasion, and use only real material for each, because invented proof destroys trust when a reader checks it:

| Tool | Use it like this |
| --- | --- |
| Proof from others | Name real customers, numbers, and quotes. |
| Specifics | Write "Cut weekly reporting from four hours to 15 minutes," not "Save time." |
| Objections | Answer the doubt that stops the reader, near the point where it arises. |
| Cost of doing nothing | Show what the reader keeps losing, if it's true and you can show it. |
| Anchors | Compare the price with what the reader pays today for the same result. |
