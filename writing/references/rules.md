# Writing rules

This file holds the concrete rules behind the principles in `SKILL.md`. Each rule gives its reason and an example. The sections go from the smallest unit, a word, to the largest, a whole document, and end with formatting and the AI tells.

Some rules remove words. Others add them, such as numbers, conditions, scope, and examples. Use a rule that adds words only where the reader would otherwise misread the text or get stuck, never to complete a checklist.

## Words

Use these rules to choose each word:

| Rule | Why | Instead of | Write |
| --- | --- | --- | --- |
| Use the word that the reader expects for this thing. | Readers predict the next word, and a predicted word is skipped more often and read faster (`evidence.md`, sections 1 and 3). Plain words also survive a translator (Google, "Write for a global audience"). | leverage, utilize, facilitate. Pick the people who fit. | use, help. Find the people who fit. |
| Use the reader's name for a thing, and give each thing one name. | A second name makes the reader wonder whether it's a second thing. | the endings sweep, then the cleanup job | the nightly cleanup |
| Use numbers instead of vague words. | A reader can check a number, but not an adjective. | a large gap, many users | a 56 px gap, 32 of 112 rows |
| Choose a specific verb. | Forms of "be," "occur," and "happen" hide the real action (Google, "Technical Writing One"). | The exception occurs when dividing by zero. | Dividing by zero raises the exception. |
| Cut words that don't change the meaning. | Filler words add emphasis without adding meaning. | simply, just, really, actually, very, truly, basically, literally, honestly | (delete them) |
| Cut "you can" when the sentence works without it. | It turns an instruction into a possibility (Microsoft, "Top 10 tips"). | You can open the file to see the logs. | Open the file to see the logs. |
| In instructions, leave out "easy," "simple," "quick," and "please." | The task might not be easy for the reader, and "please" overdoes politeness (Google, "Voice and tone"). | Simply click Save, please. | Click **Save**. |
| Avoid the words that mark text as AI-written. | Readers who notice them stop trusting the text. | delve, tapestry, realm, foster, robust, seamless, elevate, empower, streamline, cutting-edge, transformative, harness, paramount, intricate, meticulous | Use the plain word, or cut the sentence. |

## Sentences

Use these rules to build each sentence:

| Rule | Why | Instead of | Write |
| --- | --- | --- | --- |
| Put one idea in each sentence. | A sentence with several ideas makes the reader hold them all at once (Google, "Technical Writing One"). | The service, which we migrated in May after the outages, failed again. | The service failed again. We migrated it in May, after the outages. |
| Name who acts. If you can add "by someone" after the verb, the sentence is passive. | A passive sentence hides who did what. | The message was marked failed. | Grip marked the message failed. |
| Keep the subject and the verb close. | The distance between them is the main cost in a sentence. | The report, after three rounds of review by two teams, shipped. | The report shipped after three rounds of review by two teams. |
| Put a condition before its instruction, and put "not" and "unless" early. | Readers act on the first clause and skip small words like "not." | Read the file if it exists. | If the file exists, read it. |
| Address the reader as "you," and write instructions in the imperative. | It tells the reader who acts and what to do. | The review should be run. | Run the review. |
| Avoid sentences that start with "There is," "There are," or "It is." | They delay the real subject and verb. | There are three steps that you need to follow. | Follow these three steps. |
| Say what is, not what isn't, when you can. | A positive statement is easier to act on (Strunk). | He wasn't often on time. | He was usually late. |
| Don't split one idea into choppy fragments. | Fragments make the reader join the pieces themselves. A short sentence that holds a whole idea is not a fragment. | Previously this was manual. Now it's automatic. This saves time. | The task now runs automatically, which saves an hour a week. |

## Paragraphs and lists

Use these rules to group sentences:

| Rule | Why | Instead of | Write |
| --- | --- | --- | --- |
| Start each paragraph with its point, and keep it to that point. | Readers often read only the first sentence (Google, "Technical Writing One"). A paragraph is as long as its point needs, and one sentence can be a paragraph. | A paragraph that builds up to its point at the end | The point first, then the support |
| Put known information before new, and make each "this" point to the previous sentence. | The reader links each sentence to the last one. | A pronoun that points three sentences back | Repeat the noun. |
| Say what a list or a table holds before its items. | The reader needs to know what the items are before reading them (Google, "Lists"). A heading that names them is enough. | Bullets with nothing that says what they are | A heading that names them, or a lead-in such as "Alerts now come in two kinds:" |
| Keep the items of a list in the same grammatical form. | Items that look alike read as one set (Google, "Technical Writing One"). | Setup, configuring the server, and you deploy it | Set up, configure, and deploy |
| If a list item needs more than two sentences, start it with a bold run-in heading. | Scanners read the heading and decide whether to read on (Google, "Text-formatting summary"). | A five-sentence bullet with no heading | **Prove each gap.** Then the reason and the method |
| If the reader must read the items in order to make sense of them, write a paragraph. If a paragraph lists things, write a list. | A list drops "because" and "unless," and a paragraph hides separate items. | Bullets that build one argument | A short paragraph with "because" |
| List as many items as there really are. | Padding a list to three for rhythm adds an item that says nothing. | fast, simple, and powerful | fast |

## Documents

Use these rules to shape a whole text:

| Rule | Why | Instead of | Write |
| --- | --- | --- | --- |
| Answer the reader's question in the first line. | The first screen decides whether they read on. `conventions.md` lists the question for each kind of document. | Background first, the answer in the last section | The answer first, then the background |
| State the scope: what the text covers, what it leaves out, and what the reader must already know. | Readers stop looking for what isn't there (Google, "Technical Writing Two"). | No scope | "This guide covers X. It doesn't cover Y. It assumes Z." |
| Name each section's content in its heading, in the reader's terms, in sentence case. | Readers skip or read a section from its heading alone. Name the task, not the tool. | Details, Overview, Running carambola | Retry policy, Create the site |
| Put a line of text under each heading before any subheading, and use at most three heading levels. | The line tells the reader what the section holds. | A heading followed directly by a subheading | One line of text between them |
| Give things of one kind the same parts, in the same order, and make each part as long as its content. | The reader learns the shape once and then reads only the differences. A part padded to match its neighbors adds words with nothing in them. | Two endpoints documented in different orders, or every feature in a release given three sentences | One template for every endpoint, and a one-line feature next to a three-line one |
| Put each definition, example, and table next to the sentence that needs it, and say each thing once. | A reader who jumps away to find a definition loses their place. | A glossary at the end | The definition where the term first appears |
| Explain something new by something the reader knows. When a new kind of a thing joins one they already use, say when to use which. | "Like X, except Y" carries a new idea in one sentence. A reader who meets a second kind needs to know which one to reach for. | A paragraph that describes a queue from scratch, or a new kind of alert described on its own | It works like a print queue, except that jobs can expire. Use a digest to keep up, and an alert, like the ones you have, to act right away. |
| Follow each rule with an example, and add an anti-example if the mistake is common. | A reader can't apply a rule that they can't picture (Google, "Technical Writing Two"). | A rule on its own | The rule, then "Instead of" and "Write" |

Choose the form of each part by what the information is:

| The information | Its form |
| --- | --- |
| What this is, or what you decided | One sentence at the top |
| Steps in order | A numbered list, one action per step, with what the reader sees when it worked |
| Independent items | A bulleted list, one line each |
| Items compared on two or more attributes | A table, with the deciding column first |
| Fields, parameters, options, and errors | A table: name, type or default, and meaning |
| Reasons, trade-offs, and conditions | Short prose with "because," "so," and "unless" |
| A rule | The rule, then an example |
| A diagram or screenshot | One idea per picture, a caption that states the takeaway, and a mark on the part that matters. Write the caption first (Google, "Technical Writing Two"). |
| Commands, file names, paths, and code | Code font, or a code block, exactly as typed |

## Formatting

Use these rules for formatting:

| Rule | Why |
| --- | --- |
| Use bold only for run-in headings and the names of UI elements. | When everything is bold, nothing stands out (Google, "Text-formatting summary"). |
| Use code font for code, file names, commands, and field names. | It shows the reader exactly what to type. |
| Use sentence case for headings. | A heading then reads like a normal sentence, and both Google and Microsoft default to it (Microsoft, "Top 10 tips"). |
| Use the serial comma: "zones, regions, and multi-regions." | It prevents misreading a list (Google, "Commas"). |
| Don't use em dashes, and avoid semicolons. Use a period, a comma, or a colon. | Models overuse em dashes, and a period, a comma, or a colon always works instead. A semicolon usually joins two sentences that read better apart (Google, "Semicolons"). |
| Use colons for lists, labels, and quotes, not to reveal a point. | A colon reveal is a setup for drama. |
| Leave out exclamation points and emoji in headings. | They read as hype (Google, "Voice and tone"). |
| Write dates so that no reader can misread them: "Nov 15, 2026" or "2026-11-15." | "11/12" means two different days in the US and in Europe. |

## Tone and AI tells

The following patterns mark text as AI-written or as hype. Readers who notice them trust the text less, so remove each one:

| Pattern | Example | Fix |
| --- | --- | --- |
| Throat-clearing openers | Here's the thing: … It turns out … Let me be clear … | Start with the point. |
| Announcing importance | This matters because … The key insight is … plays a vital role | State the fact, and let the reader judge it. |
| Binary contrast | It's not X, it's Y. Not because X, but because Y. | State Y. |
| Negative listing | Not a tool. Not a platform. A partner. | State what it is. |
| Colon reveal | The best part: it learns. | It learns from each correction. |
| Dramatic fragments | That's it. That's the product. | Write complete sentences. |
| Rhetorical setups | What if …? Think about it: … Here's what I mean: | Make the point. |
| Trailing "-ing" significance | …, highlighting the team's commitment to quality. | Cut the clause, or state the real consequence. |
| Things acting like people | The data tells us … The decision emerged … | Name the person: "We read the data and decided …" |
| Synonym cycling | The agent … the assistant … the tool … | Repeat the clear word. |
| Fake-strong verbs | serves as, acts as, functions as, has the ability to | is, can |
| Unsourced authority | Studies show … Experts agree … | Name the source, or cut the claim. |
| Recap endings | In conclusion … Ultimately … | End on the last concrete point. |
| Pull-quote endings | A closing metaphor, or a slogan that states no fact | Delete it. A one-line fact is not one of these. |
| Slogan headings | What holds it together | Name the content: "Principles." |
| Every paragraph ends on a punch | Three short punchy closers in a row | Vary the endings, and end on substance. |
