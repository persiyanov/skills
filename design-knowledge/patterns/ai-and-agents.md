# AI and agents

Covers products where an AI answers people or acts for them: the input where people ask, the answer and its sources, what an AI writes among people's work, agents that act, and what an AI remembers. Read it for any chat or assistant, any feature that writes, summarizes or fills in with AI, and any agent. Not covered here: telling people an AI is answering and stopping an answer, waits, undo and confirmation, and what a product does on its own or in people's name in general, which other guides hold. The problem it solves: people who can't tell what an AI can do, trust answers they can't check, lose their own work to AI that writes over it, and meet agents that act without their go, or that they can't see, stop or undo.

The rules come in five groups: asking, answering, AI work among people's work, agents that act, and memory.

## Asking

### 1. The input says what the AI can do and see, and a suggestion goes into it to edit

Where people start, the product says in a sentence or a few topics what the AI can and can't do, and what it can see, such as the page or the files open. Suggestions come from what it can really do and from what people are looking at. A suggestion that guesses a specific request goes into the input for people to edit; one that is complete as written, such as "Make it shorter", may be sent at once.

- **Why:** people can use only the abilities they know about: a chatbot that could see the product on screen never said so, so one person pasted product names into it by hand, while an opening of "Ask me anything" set expectations a bot couldn't meet (Kenderova et al. 2026, "AI Chatbots"). Apple recommends curated suggestions for open-ended input, and Fluent asks products to state the AI's scope in the input's placeholder or a welcome card (Apple, "Generative AI"; Fluent 2, "Responsible AI"). A shortcut that sent a guessed order for noodles when a person tapped a milk tea category shows the cost of sending a guess (Liu and Rosala 2026), and Cloudscape fills the input, rather than sending, when people are likely to edit a suggestion (Cloudscape, "Generative AI chat").
- **Applies when:** people ask an AI in their own words.
- **Check:** open each place to ask the AI, as a new account. "Ask me anything" over an AI with a narrower scope, or no word on what it can see when it sees more than what people type, fails. Tap each suggestion: one that sends a request people haven't made fails.
- **Fail:**
  - "Ask me anything" over a bot that only answers questions about orders;
  - a "Food" shortcut that sends "Order a bowl of noodles".
- **Pass:**
  - "Ask about your orders, returns and delivery. I can see the order you're viewing," with three suggestions about that order;
  - a short placeholder such as "Ask anything" in a general assistant whose scope is that broad, or in a coding assistant for developers that says which files it can see.

### 2. Before an agent commits to a choice or starts long work, it checks what people want

When a task leaves open a choice that would change the result, such as the budget, the dates or who is coming, the agent asks about it before it commits to one. Before work that runs long or costs far more than a usual request, it confirms what people want, through those questions or a short plan people can change, with what it will use and touch. A short task with one obvious reading starts at once.

- **Why:** agents that run off without confirming what people want can lose their trust (Shome et al. 2026), as when an agent researched restaurants for six minutes without asking about budget, cuisine or guests (Sunwall 2025, "Initial Impressions of ChatGPT's Agent"). People edited plans before a run, mostly to add their own preferences (Mozannar et al. 2025). Taking part in a plan let people fix some flawed ones, but plausible plans also led them to trust agents that were wrong, and taking part added load (He et al. 2025), so a plan is one way to confirm, not a step every task needs.
- **Applies when:** an agent takes on a task given in people's words.
- **Check:** give the agent a task with an open choice, such as booking dinner: a step that commits to the open choice, such as a booking, or a long run, before any question about it fails. Start a task that runs for minutes or costs far more than a usual request: no question or plan to confirm it before it starts fails.
- **Fail:**
  - an agent that books a table without asking how many are coming;
  - a 20-minute research run that starts the moment the request is sent, with no question and no plan.
- **Pass:**
  - "How many people, and any dietary needs?" before it books;
  - for the research run, a five-step plan with the sites it will use, Edit and Start;
  - "Rename these files to lowercase", done at once.

## Answering

### 3. An answer leads with the answer, and each source sits next to its claim

An answer starts with what people asked for, together with any condition that changes it; background and the research behind it come after it, or one step away. Each source sits next to the sentence it supports, named by its title or publisher, and opens at the passage that supports it, or shows that passage, where the source allows; the full list is one step away. A source that doesn't support its sentence is worse than none.

- **Why:** in four AI search engines, only about half the generated sentences were fully supported by their citations (Liu et al. 2023), and sources lowered people's reliance on wrong answers (Kim et al. 2025). People rarely click citations, yet trust an answer for having them, so a citation that doesn't back its sentence lends trust to a claim it doesn't support; a source beside its claim, linked to the passage, lets people check a doubtful line (Chan 2025, "Explainable AI"). Interface Craft puts the research behind an answer one step away, for people who aren't experts (Interface Craft, "Redesigning a Mobile Web App, Part 1"), and NN/g asks site chatbots for the answer first, with only the caveats that keep it correct (Rosala et al. 2026). 16 of 18 assistants and AI search tools seen on the web showed sources with their answers (Mobbin survey, 2026, convention).
- **Applies when:** an AI answers a question.
- **Check:** read the first sentence of each answer: one that isn't the answer, when there is one, fails, and so does an answer whose deciding condition comes only later. Open three citations: a bare list of links at the end, or a citation that neither opens at the supporting passage nor shows it, where the source allows, fails, and so does a source that doesn't support its sentence.
- **Fail:**
  - three paragraphs of rules before "Yes, you can claim it";
  - "Sources (12)" at the end, as bare links.
- **Pass:**
  - "Yes, up to £1,000 a year, if you work from home." first;
  - "[2] Q3 board deck, slide 14" after the sentence it supports, opening at slide 14;
  - one source note on a summary of the single document people just uploaded.

### 4. While the AI works, it names the real step, and shows what it did rather than its thinking

A wait says what the AI is doing, such as "Searching 3 connected drives" or "Writing the summary", not a word such as "Thinking…". What it did, such as the searches it ran, the files it read and the tools it called, is shown and linked, so people can check it. Text the model writes about its own reasoning is folded away in a chat, and never presented as a record of how the answer was made. Screen readers hear when the work starts, when it ends and when it fails, not every step.

- **Why:** specific feedback reduces uncertainty, so Apple asks for a status that names the step, such as finding ingredient substitutes, rather than "Processing…" (Apple, "Generative AI"). Explanations raised people's reliance on right and wrong answers alike, while sources lowered it on wrong ones (Kim et al. 2025), and step-by-step reasoning text is often written after the fact (Chan 2025, "Explainable AI"); Cloudscape folds its thinking away by default in a chat (Cloudscape, "Thinking"). Screen reader users need to know when the AI starts, when the answer arrives and when it fails, or they can't tell whether it is working, done or stuck, and a status that doesn't take focus reaches them only through its role (Primer, "Copilot Accessibility Practices"; WCAG 2.2, 4.1.3), and Primer announces a group of loading parts once, not each part (Primer, "Loading").
- **Applies when:** an AI takes more than a moment to answer or act.
- **Check:** run a slow request and read each status: "Thinking…" or "Processing…" for more than about 10 seconds fails. Open what shows the work: reasoning text open by default in a chat, with no list of what the AI did, fails. With a screen reader, run a long request and make one fail: silence at the start, the end or the failure fails, and so does an announcement at every step.
- **Fail:**
  - "Thinking…" for 40 seconds;
  - an open "I thought carefully about your problem…" above every answer.
- **Pass:**
  - "Searching 3 connected drives", then "Writing the summary"; afterwards, a folded "Searched 4 sources, read 2 files", each linked;
  - a short "Still working" announced every few seconds during a long wait.

### 5. How sure the AI is shows only where it was measured, and warnings are specific

The product shows how sure the AI is only where that was checked against how often it is right, in words or a few levels, never as a rating the model gave itself. An answer that is unsure may say so plainly, in the first person ("I'm not sure, but…"). One plain notice per area says the AI can be wrong; a specific warning goes where a wrong answer would cost money, health or legal standing, or can't be undone, rather than the same line under every reply.

- **Why:** what a model says about its own certainty has been found poorly calibrated, worst where it claims to be sure (Kim et al. 2024, reviewing earlier work), and Apple asks teams to check that confidence values match the quality of results (Apple, "Machine learning"). Doubt said in the first person lowered how often people trusted wrong answers, even though the study showed it at random on right and wrong answers alike (Kim et al. 2024). A generic warning that is always on screen gets ignored, so warnings belong where a wrong answer matters (Laubheimer 2025); Chan asks for one plain notice near the input, paired with what to do, and Pajamas shows its notice once per context (Chan 2025, "Explainable AI"; GitLab Pajamas, "AI-human interaction").
- **Applies when:** an AI's answers can be wrong in ways that matter.
- **Check:** for each confidence label, ask how it was checked against real outcomes: none fails. Count the AI notices on one screen: the same generic notice under every reply fails, and so does a costly answer, such as a payment amount, with no specific warning.
- **Fail:**
  - "Confidence: High" that the model wrote about itself;
  - "AI can make mistakes" under every reply, and nothing more on a payment draft.
- **Pass:**
  - one line by the input;
  - "Check this amount before you pay" on the payment draft;
  - "Usually right for invoices like this (checked on 2,000)";
  - answers ranked by confidence, with no score shown;
  - a line on every output that a regulator requires, beside the specific warnings.

### 6. Asking again keeps the earlier answer

Regenerating an answer, or editing a request and sending it again, keeps the earlier answer one step away, such as behind "2 of 2" arrows, and says so when the visible conversation changes.

- **Why:** people read the first answer before they ask again, and may want it back, while a replaced answer can't be brought back. Apple suggests offering a choice of results, which gives people more control (Apple, "Generative AI"), while Cloudscape's regenerate replaces the original answer and removes what came after it (Cloudscape, "Response regeneration"), which loses what people may want back. Of 9 assistants seen regenerating an answer, 5 kept the earlier version (Mobbin survey, 2026, convention).
- **Applies when:** people can regenerate an answer or edit a request they sent.
- **Check:** regenerate an answer, then edit an earlier request and send it: an earlier answer gone for good fails.
- **Fail:** a regenerate that replaces the answer, with no way back to it.
- **Pass:**
  - "2 of 2" arrows on the reply;
  - "Editing starts a new branch. The earlier one stays.";
  - a one-off rewrite of a single field that Undo brings back.

## AI work among people's work

### 7. Fixing AI output costs less than doing it by hand, and a way without AI remains

Next to what the AI made sit the ways to change it: undo or discard for what it changed or added, edit and retry for what it wrote. A request the AI can't or won't do says so, and says how to ask differently where a different request could work. Where the task exists without AI, the way to do it without AI stays open; a support bot that can't help says so and offers a person, where the product has people who answer.

- **Why:** an AI that is sometimes wrong is worth using only where fixing its output costs less than doing the work. Apple asks for Edit, Undo, Retry or Adjust near generated content, a way without AI where possible, and coaching after a blocked request, and Pajamas asks for a path that doesn't rely on AI when confidence is low (Apple, "Generative AI"; GitLab Pajamas, "AI-human interaction"). NN/g asks for one chatbot that hands people over to staff and says plainly when it can't help (Kenderova et al. 2026, "AI Chatbots"; Rosala et al. 2026), and WCAG's advice for people with cognitive disabilities asks a chatbot to give a way to reach a person after three answers that don't help (Understanding 3.2.6).
- **Applies when:** an AI makes or changes something people use.
- **Check:** for each AI output, find the controls that fit it and the way to do the task without AI: one that is missing, where the task exists without AI, fails. Make the AI refuse a request it could meet if asked differently: a refusal with no next step fails. Ask a support bot what it can't answer: no plain word that it can't help, or no way to a person where the product has people who answer, fails.
- **Fail:**
  - a form filled by AI with no way to clear the fills;
  - "I can't help with that." to a request it could meet if asked another way;
  - a support bot that answers "I didn't understand" three times and offers nothing else.
- **Pass:**
  - "Undo AI fill" beside the filled form, and the empty form still usable;
  - "I can't help with refunds after 30 days. Chat with a person?";
  - an image generator with no way to make the image by hand, where retry and rewording carry the rule;
  - a refusal of a harmful request with no tips on rewording.

### 8. What the AI writes among people's work is a suggestion until accepted, and says what the AI did

AI text placed in a field looks different, and is a suggestion people accept, edit or discard; once people change it, it is theirs and loses the AI mark, with a way back to the AI version. The AI never writes over what a person entered without asking. Content the AI made, such as a summary, carries a label that names what the AI did, such as "Summarized by AI", and says who reviewed it, where someone did.

- **Why:** a bare "AI-generated" label lowered how accurate people judged headlines to be, whether they were true or false and whoever wrote them, because people assumed no person had checked them (Altay and Gilardi 2024), and Pajamas names the action, as in "Summarized by AI" (GitLab Pajamas, "AI-human interaction"). Carbon turns an AI field back into an ordinary one once people change it, with a way to restore the AI text (Carbon, "Carbon for AI").
- **Applies when:** AI writes into fields, documents or records that people also write in.
- **Check:** let the AI fill fields that already hold text: text written over without asking fails. Change an AI suggestion in a field: an AI mark that stays on what is now the person's value fails. Read each label on AI content: "AI-generated" on content a person reviewed fails.
- **Fail:**
  - AI that replaces a hand-written description;
  - "AI-generated" on a summary that Dana checked.
- **Pass:**
  - the AI version beside the person's text, with "Use this" and "Keep mine";
  - "Summarized by AI, reviewed by Dana";
  - a spelling fix people accept with one key, with no AI mark;
  - a message a person drafted with AI help and sent as their own, with no mark.

### 9. Feedback on an answer says what it sends

Feedback on an answer is the person's choice and quick, with room for detail, and says what it sends and what it is used for.

- **Why:** feedback that quietly sends a whole conversation shares what people never meant to share; Fluent asks products to say why feedback is collected, and Apple asks that feedback always be voluntary (Fluent 2, "Responsible AI"; Apple, "Generative AI"). 14 of 20 assistants seen on the web put thumbs up and down under each answer (Mobbin survey, 2026, convention).
- **Applies when:** people can give feedback on what an AI made.
- **Check:** give a thumbs down and read what follows: no word on what it sends fails, and so does feedback that sends the whole conversation without saying so.
- **Fail:** a thumbs down that sends the whole chat to the vendor without a word.
- **Pass:** "Sends this reply and your note to our team. Not used to train models."

### 10. An AI doesn't pass as a person

An AI has no photo or drawing of a person, and claims no feelings, consciousness or friendship. Next to people, as when an agent is assigned to a ticket, it shows as an agent, by its name, a label and its avatar. Its name isn't a common human name (default).

- **Why:** Fluent rules out suggesting that an AI has feelings, consciousness or social bonds, and presenting agents as human-like or as team members, and Atlassian says agents never pass as people (Fluent 2, "Responsible AI"; Atlassian, "AMP Patterns"). People who saw ChatGPT as having feelings took its advice slightly less, and those who saw it as intelligent took it more, so Sunwall advises against claimed feelings, human avatars and common human names (Sunwall 2025, "Prioritize Smarts over Sentience"). Practice is split on calling agents teammates: Atlassian and Pajamas do, and Fluent doesn't (Atlassian, "Rovo UI: Voice and tone"; GitLab Pajamas, "AI-human interaction").
- **Applies when:** an AI talks to people or appears next to them.
- **Check:** read 20 replies and the AI's profile: a photo or drawing of a person, or a claim of feelings such as "I'm so excited to help!", fails.
- **Fail:** "I'm so excited to help!" from "Emma", with a stock photo.
- **Pass:**
  - "Here are the 3 blockers," from "Support agent (AI)", with a square avatar;
  - an agent called a teammate in marketing copy, when nothing on screen dresses it as a person.

## Agents that act

### 11. An approval request says exactly what will happen, and its answer stays on record

An agent asks before an action that can't be undone, spends money, sends content or data to other people or to a record others share, or changes access, unless people, or someone with the right to, set it to run on its own. It runs routine work without asking, keeping a record of it. The request says what will happen, to what, at what cost, and whether it can be undone; for a risky action, the approve button isn't focused. The answer stays in the record. A request nobody answers ends without acting, and says so; one that ends within 20 hours warns before it does and can be extended.

- **Why:** an agent that doesn't ask does in people's name what they can't take back, but frequent approvals get skipped or resented: several of the 12 people in one study found the requests excessive, and many approvals mean each gets less thought (Mozannar et al. 2025; Shavit et al. 2023), while people wanted risky steps, such as payments, sign-ins and changes to personal data, flagged (Cheng et al. 2026, "Mapping the Design Space"). Cloudscape matches approval to risk, says before approval whether a change can be reversed, doesn't focus Approve for a risky action, keeps the decision in the conversation, and cancels and reports a request nobody answered (Cloudscape, "User authorized actions"). WCAG 2.2 requires a time limit that people can turn off, set to at least ten times its length, or extend after a warning that gives at least 20 seconds, at least ten times, unless it is a required part of a real-time event, essential, or longer than 20 hours (2.2.1); otherwise people who need more time lose their chance to answer. A price that rose at checkout with no reason left a person feeling misled (Liu and Rosala 2026). Of 17 products seen where an AI acts for people, 6 showed the action and asked first, as before changing a hotel booking, and 6 acted without asking, mostly on drafts and edits inside the product (Mobbin survey, 2026, convention).
- **Applies when:** an agent acts for people.
- **Check:** list each action the agent can take and whether it asks. One that can't be undone, spends money, or sends to other people or to a shared record, and runs without asking fails; approval asked before routine reads inside the task's scope fails. Read a request: one that doesn't say what will happen, to what, at what cost and whether it can be undone fails. Leave a request unanswered: one that acts after a timeout fails, and so does a time limit under 20 hours that can't be turned off, lengthened or extended after a warning, unless one of WCAG's exceptions applies.
- **Fail:**
  - an agent that asks before each file it reads in the project, and not before sending an email;
  - a deploy request that runs after a 10-minute timeout.
- **Pass:**
  - "Send this email to 14 people? It can't be unsent." with Send and Cancel, and Cancel focused; later, "Request expired. Nothing was sent.";
  - a routine step that runs without asking and shows in the run's record;
  - approval asked before reading a file outside the project, such as a file of passwords or keys.

### 12. People choose how much an agent may do alone, and can take it back

People choose how much an agent does without asking, such as every action, only risky ones, or nothing, for a task or a tool, and can change it during a task. The current level shows while the agent works. Lasting grants, such as "Always allow", are listed in one place where people can revoke them. A limit an admin set says so.

- **Why:** how much an agent does alone is a choice separate from what it can do (Feng et al. 2025). Cloudscape offers "Allow this time", "Allow for this chat" and "Always allow", and asks for permissions that are explicit and editable, not buried in setup (Cloudscape, "User authorized actions" and "Agent management"). Fluent fails a product that doesn't say when an agent is active and what it may do, and Primer asks that people choose how much autonomy Copilot has (Fluent 2, "Responsible AI"; Primer, "Copilot Accessibility Principles"). As people gained experience with a coding agent, they let it run with fewer approvals but stepped in more often, so oversight means being able to step in, not approving every action (Anthropic 2026).
- **Applies when:** an agent can act without asking each time.
- **Check:** during a run, find the current level; then find every "Always allow" granted earlier and revoke one. A level you can't see, or a grant you can't find once its dialog closed, fails.
- **Fail:** "Always allow" grants that can't be found once the dialog closes.
- **Pass:**
  - "Auto-approve: on" by the input, and an "Allowed tools" list with Remove;
  - a level an admin capped, shown with "Set by your admin".

### 13. Agent work shows where people look, and ends with what changed

Work an agent runs shows its state on the item it works on and, once the work outlives the screen that started it, in one list of all runs: queued, running, needs your input, paused, failed or done. "Needs your input" stands out and notifies people; ordinary progress doesn't. Stop stays in view while it runs; after it, the agent says what ran, what didn't, and what is left half done. A finished run leads with a short summary of what changed, each change linked, with the full record one step away; it says which changes can't be undone, and offers to undo the rest, or to go back to before the run where no one else has changed those items since.

- **Why:** Atlassian keeps an agent's status in view so people know where they must step in; Pajamas shows a run's state on the item, in a session panel, and as a to-do when it needs input, without notifying people of normal progress; and Microsoft keeps an agent's status visible at all times (Atlassian, "AMP Patterns"; GitLab Pajamas, "Agents and Flows"; Microsoft Design, "UX design for agents"). People should be able to stop an agent at any time, as a critical backstop (Shavit et al. 2023), and people who stopped one wanted to give a new instruction and go back a step (Cheng et al. 2026, "Mapping the Design Space"). Records were hard to read when the milestones were buried in uniform output, and short summaries were welcome (Shome et al. 2026; Mozannar et al. 2025). Pajamas and Fluent ask for a way to undo or reverse what an agent did (GitLab Pajamas, "AI-human interaction"; Fluent 2, "Responsible AI"). All 14 agents seen on the web showed their steps, and 9 offered Stop or a way to take over (Mobbin survey, 2026, convention).
- **Applies when:** an agent works for more than a moment.
- **Check:** start two runs and leave the page: no sign on the item, or no list of runs, fails. Stop a run mid-step: no word on what ran fails. Finish a run: a first screen of log lines with no summary fails, and so does a change that can't be undone with no word on it.
- **Fail:**
  - no sign on a ticket that an agent is working on it;
  - 300 log lines and no summary.
- **Pass:**
  - "Agent running" on the ticket;
  - "Needs your input: approve plan" in the to-do list;
  - "Changed 3 files, opened 1 pull request", each linked, with "View full log" and "Revert this run";
  - a one-minute task people watch in the chat, with no separate list.

### 14. An agent that deals with other people says it is AI and whom it acts for

An agent that writes to, books with or negotiates with other people tells them that it is an AI and on whose behalf it acts. In shared records, such as a history, a comment or a commit, its actions name the agent first and the person who started it second.

- **Why:** people dealing with an agent need to know it is a machine and who answers for it, or they deal with a machine they took for a person. In the EU, an AI system that interacts with people must tell them they are dealing with an AI, unless it is obvious (EU AI Act, Article 50(1)), and the European Commission reads this as asking agents to disclose both their artificial nature and the person they act for (European Commission, "Guidelines on Article 50", para. 31). Atlassian says agents never pass as people and always leads with the agent when it credits an action, with the person who started it shown smaller, and GitHub records the agent as a commit's author with the person as co-author (Atlassian, "AMP Patterns"; GitHub Docs, "Track Copilot sessions", convention).
- **Applies when:** an agent sends, books or speaks for someone, or acts in a shared record.
- **Check:** read an email the agent sent and the history of an item it changed. An email with no sign of AI, or of the person it acts for, fails, and so does a history entry under the person's name alone.
- **Fail:** an email signed "Alex", with no sign it came from an agent.
- **Pass:**
  - "Sent by Scheduling agent (AI) for Dana Lee";
  - in the history, "Triage agent, started by Sam".

## Memory

### 15. People can see and control what the AI remembers

One place lists what the AI remembers about people, by topic, where each item can be read, edited and deleted, all of it reset, and memory paused, turned off or kept out of one chat. A quiet mark says when something is saved, with a way to undo it, and an answer that used memory says so, with the items one step away. Where deleting a chat doesn't delete what was remembered from it, the delete says so, with a link to the list.

- **Why:** in one study, almost all memories were created by the system on its own, and over a quarter held personal data (Dash et al. 2026), and people held incomplete pictures of what was remembered and wanted it sorted by kind (Jones et al. 2025). Fluent asks that what is saved to memory, and how it will be used, be visible before and during use (Fluent 2, "Responsible AI"). Claude lists memories by topic with edit and delete, lets people pause or reset memory, and keeps what was remembered from a chat that is deleted (Anthropic Help, "Using Claude's chat search and memory", convention).
- **Applies when:** anything an AI learns carries over from one session to the next.
- **Check:** find the list of what is remembered, and the switch for one chat: none fails. Tell the AI a fact, then ask something it shapes: no mark when it was saved, or no sign on the answer that used it, fails. Delete a chat that created a memory: a memory kept with no word fails.
- **Fail:** memory that people can see only by asking the AI what it remembers.
- **Pass:**
  - Settings › Memory with topics, Edit and Delete;
  - "Saved: you work in UTC+2. Undo";
  - later, "Used 1 memory" under an answer, opening "You work in UTC+2".
