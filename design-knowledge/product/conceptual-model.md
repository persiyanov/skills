# Conceptual model

Covers the product as people must understand it to use it: the kinds of things they work with in it (its concepts, such as a project, a contact or a trash), what each holds, the states it passes through, the actions on it, how the kinds relate, what each is for, and what the product does on its own, in people's name, or decides for them. Not covered here: the words themselves, what one page shows and in what order, how a control answers a press, and how a task runs across steps and visits.

Most checks start from the model written down, as rule 1 describes. The rules come in two groups: the model itself, then what the product does by itself.

## The model

### 1. Every concept is one the job needs

A product is built from a few concepts: the kinds of things people work with (a project, a message, a contact), what each holds, the states it passes through, the actions on it, and how the kinds relate. Most come from the task people already know. One the product invents is added only when the job needs it and nothing people already know will do: people who want to repeat a payment repeat a past one, rather than first making a "template". How the system is built, such as its queues, jobs and indexes, never becomes something people must manage. A concept hidden from the screens but still acted on by the product is still there, and still costs.

- **Why:** a concept people don't know from their task is one more thing to learn, and one more to combine with every other (Johnson and Henderson 2002); hidden, it still acts on their work. The limit is the job: Atlassian tells teams to keep only the Jira statuses they need, since each adds complexity for everyone who works with it (Atlassian, "Best practices for workflows in Jira", convention).
- **Applies when:** the product keeps things people create, change or track over time, except a one-screen tool with nothing to keep.
- **Check:** write the model down: before the screens in a design, or from the screens, the product's docs and its data in a review. List each kind of thing people work with, what it holds, its states, the actions on it, how it relates to the others, and its name, counting every concept the product acts on, shown or not. For each concept, say in people's words what they would lose without it. One with no answer, or whose only answer is how the system is built, fails; so does an invented concept where one people already know, from their task or elsewhere in the product, would do.
- **Fail:**
  - an invoicing tool that makes people create a "template" before they can send the same invoice again;
  - a CRM where new contacts reach search only after someone presses "Rebuild index".
- **Pass:**
  - "Send again" on a sent invoice, which copies it into a new draft, so repeating needs no new concept;
  - a concept that takes learning because the job needs it, such as layers in an image editor or branches in a code tool;
  - queues, jobs or indexes in a tool whose users run them, such as a developer or operations console.

### 2. Each concept meets one need, and each need has one concept

Each concept meets one need people have, said in their words: a trash lets people take back a deletion; an alert tells them when a keyword appears. Two features that meet the same need with the same result are one concept, so the product merges them rather than keeping and naming both. A concept that meets two needs at once is split, so people can have one without the other. When two features seem alike or share a word, this is decided first, and the names follow.

- **Why:** people need to know what a feature is for before they can use it (Jackson 2023). Two features for one need make people learn both and guess which to use; one feature for two needs makes every use do both, as when an angry reaction to a post also counts as approval and shows the post in more feeds (Jackson 2023).
- **Applies when:** always.
- **Check:** beside each concept in the model (rule 1), write the one need it meets, in people's words. Two concepts with the same need and result fail: they are one. A concept whose need joins two with "and", when people may want one without the other, fails: it is two. For two features that seem alike or share a word, compare what each is for and what it gives people before judging their names.
- **Fail:**
  - "Favorites", "Pinned" and "Saved", each keeping a shortcut to an item in its own list;
  - one "Monitor" for both finding who engages with a company's posts and following what chosen people post, which meet different needs and give different results.
- **Pass:**
  - one "Saved" list for shortcuts;
  - the two monitoring features as two concepts, each with a name of its own: "Engagers" lists who engaged with a company's posts, and "Following" shows what chosen people post;
  - one concept with types that share its actions and results, such as "Integrations", with one entry per connected tool.

### 3. A thing with a lifecycle has a few named states, the moves between them, and a way back

When a thing's state changes what people or the product can do with it (a draft or a published page, a paused or a running campaign, an open or a closed request), it has a few named states and clear moves between them. Each state changes what people or the product can do, or who acts next; two states that don't are one. From a state people may regret, a move leads back where one can exist: a paused campaign resumes, an archived project is restored, an invitation is withdrawn, a cancelled plan is renewed before it ends. The current state shows wherever people decide what to do with the thing: on its own page, and on its row in a list, where a thing in an unusual state is marked and the usual state may go unmarked.

- **Why:** when one action does different things in different states, people who can't see the state act as if the thing were in another, and the risk grows with every state whose feedback is weak (Sarter and Woods 1998). A state people can't leave keeps their work there for good. Each state is one more thing to learn, so teams keep only those they need (Atlassian, "Best practices for workflows in Jira", convention). Most products seen put a record's state near its title (9 of 14), and in 9 of 10 paused or archived records, the way back, such as Resume or Restore, was on the page (Mobbin survey, 2026, convention).
- **Applies when:** a thing's state changes what people or the product can do with it, such as drafts and published pages, campaigns, requests, subscriptions, automations and invoices.
- **Check:** draw the thing's states and the moves between them from the screens. For each state, find where people see it and every move out of it. A state that changes what an action does, but doesn't show where people take that action, fails. These fail: a state people can enter but not leave when a way back could exist; two states that differ neither in what people or the product can do nor in who acts next; an unusual state that shows only once the thing is opened.
- **Fail:**
  - a page editor that looks the same for a draft and a published page, though Save makes changes live on one and not the other;
  - a campaign that can be paused but not resumed, only copied;
  - a list of automations where a paused one looks like a running one until it is opened.
- **Pass:**
  - campaigns that are Draft, Scheduled, Live, Paused or Archived, with Resume on a paused one and Restore on an archived one; "Live" beside the title in the editor, and "Update live campaign" on its button; paused and failed campaigns marked in the list, live ones unmarked;
  - a state that can't be left by its nature, such as Sent for an email that has left the product.

### 4. Every action ends the way the screen leads people to expect

What the screen shows before an action lets people predict what the action does to what they care about: what is kept or lost, who can see it, what is sent and to whom, and what it costs. That includes its effect on related things, such as what deleting a project does to its tasks, or whether moving a file into a shared folder shares it. A rule that changes the outcome, such as a sync that skips large files, shows where people act, not only in help pages. The screen may tell a simpler story than how the product works, as long as the outcome people predict from it comes true.

- **Why:** people build their picture of a product only from what it shows and how it behaves, so a screen that doesn't make the design clear leaves them with the wrong one (Norman 1988), and an outcome they didn't predict is one they didn't choose. In a class action over what was collected during private browsing, Google agreed to change its Incognito screen to make clear that websites, and the services they use, including Google, still collect data (Brown v. Google, 2024 settlement).
- **Applies when:** an action keeps, deletes, shares, sends or charges for something, directly or through related things.
- **Check:** for each such action, write what the screen leads people to expect, including for related things, then take the action in a test account and compare. A difference fails, and so does a rule that changes the outcome but shows only in help pages or after the action.
- **Fail:**
  - moving a file into a shared folder, which gives everyone in it access, with no word before;
  - "Leave project" that also deletes the person's comments in it;
  - a sync folder that skips files over 2 GB without saying so.
- **Pass:**
  - "Move to "Design"? 14 people will get access to this file." before the move;
  - a simpler story than how it works, when it predicts the outcome: "Message sent. Undo" while the message waits a few seconds before it leaves.

### 5. A familiar concept behaves the familiar way

People bring concepts from the products they already use: a trash they can restore from, a folder that holds each file once, a like that others can see, a draft only they can see. A product that reuses a familiar concept, by its name or its look, keeps that concept's behavior. Where the behavior differs, the concept gets a name of its own, and the screen says how it differs where it matters. Where the difference changes what is kept, seen, sent or paid, it also breaks rule 4.

- **Why:** people spend most of their time in other products, so they expect yours to work like those (Nielsen 2023), and what they know well sticks even when it no longer helps (Chan 2024, "Mental Models"). A familiar name on different behavior misleads more than a new name: a public figure took Twitter's "favorite" for a private save, but anyone could see it (Jackson 2023).
- **Applies when:** a feature borrows a concept's name or look from other products, such as a trash, a folder, a star, a like, a draft or an inbox.
- **Check:** for each feature, name the familiar concept it borrows, by its name or its look, and list how that concept behaves elsewhere: whether it can be undone, who sees it, whether one item can be in two places. A difference the screen doesn't show fails.
- **Fail:**
  - a "Favorite" that others can see;
  - "Move to Trash" that deletes the file for good at once;
  - "Folders" that one email can sit in several of, so deleting it in one deletes it from all.
- **Pass:**
  - "Save" for a private bookmark, and "Like" for public approval;
  - "Labels" for tags that one email can carry several of;
  - a familiar concept extended without breaking what people expect of it, such as a trash that also keeps deleted comments.

### 6. Every count says what it counts, and its items are one step away

A number that counts things people may act on, such as a badge, a "needs attention" total or the count on a button, counts one concept from the model: unread messages, chats not yet pushed, overdue invoices. People can tell what it counts from its label, its place or the list it opens, and reach the counted items in one step. A count on an action lets people see which items the action covers, or the rule that picks them, before they press it. One mark means one thing across the product; a mark that counts something else looks different. A count changes as its items do, so it never points at items already handled.

- **Why:** a count people can't trace can't be acted on or trusted: they can't tell which items an action will touch, or whether a badge means new or needs them. Apple keeps badges for unread notifications only and updates them as soon as people open them (Apple, "Notifications"); Slack bolds a conversation with unread activity and adds a number only for activity aimed at the person, such as a mention or a direct message, so two meanings get two marks (Slack Help, "Guide to Slack notifications", convention).
- **Applies when:** a screen shows a count of things people may act on: a badge, a total of items that need attention, or a count on an action.
- **Check:** for each such number, say what it counts using only what the screen shows, then open it. A number whose concept can't be named from the screen, or whose items take more than one step to reach, fails; so does one mark that means two things in two places. Before each action with a count, find which items it covers or the rule that picks them: neither to be found fails.
- **Fail:**
  - "Push 4 chats" with no way to see which four;
  - a red number on a sidebar item that counts unread messages in one place and mentions in another.
- **Pass:**
  - "4 chats not yet pushed", which opens the list of those four, each with a checkbox, and "Push 4 chats" that drops to 3 when one is cleared;
  - "12 tickets waiting on you", which opens those twelve;
  - a total whose items are the list right under it, such as "128 contacts" above the contacts table;
  - a capped count such as "99+".

### 7. A screen shows how things relate as they really do

Where a screen shows one thing with another it relates to, such as a column naming a link's edition or a label naming a task's project, it shows the relation the model has: one or many, current or past. A link that can appear in many editions isn't shown beside one edition as if it had only that one, and a file that sits in several folders isn't shown in one.

- **Why:** people read a column as a fact about each row, so a single value beside a thing that has many leads them to wrong conclusions, such as that a link belongs only to the one edition shown (Interface Craft, "Refining Presscut").
- **Applies when:** a screen shows a thing together with another it relates to.
- **Check:** for each column, label or path that names a related thing, look up the relation in the model (rule 1). A relation to many shown as a single value fails, unless its label says which one it is, and so does a past relation shown as current, or a current one as past.
- **Fail:**
  - an "Edition" column on a list of links, when one link can appear in many editions;
  - a path above a file that shows one folder when the file sits in several;
  - a deal that shows the contact's current company, when the deal was with their last one.
- **Pass:**
  - "First sent in: Issue 42", or "3 editions", which opens the list of them;
  - a column that names one of many on purpose and says so, such as "Latest edition".

### 8. A thing keeps its name, states and rules wherever it appears

A thing people work with keeps the same name, the same states and the same rules wherever it appears: on every screen, in emails and notifications, in exports and imports, in the API, and in what an agent reads or writes about it. Each place may show it in its own form, since an email can't hold a badge and a file has no buttons, but a state or a rule never changes with the place. Where one place has to follow a different rule, it says so there. Where the difference changes what is kept, seen, sent or paid, it also breaks rule 4.

- **Why:** people learn a thing once and expect it to work the same wherever they meet it, so the model's names hold across the product and everything written about it (Johnson and Henderson 2002), and people shouldn't have to wonder whether different words or situations mean the same thing (Nielsen 1994, heuristic 4). A place that quietly follows another rule surprises people where they can't see it: HubSpot merges duplicate companies added through imports and forms, but not those created through its API (HubSpot, "Deduplicate records in HubSpot", convention).
- **Applies when:** a thing appears in more than one place: screens, emails, notifications, exports, imports, an API or an agent's answers.
- **Check:** follow one thing through every place it appears: its screens, the emails and notifications about it, an export, an import, the API and an agent's answer about it. A different name or state for the same thing fails; so does a rule that changes with the place and isn't stated in that place.
- **Fail:**
  - an invoice that is "Overdue" in the app and "Unpaid" in the reminder email;
  - duplicate contacts merged when added in the app, but not when imported through the API, with nothing said on the import screen or in the API docs.
- **Pass:**
  - the import screen and the API docs both say "Records added through the API aren't checked for duplicates.";
  - a place that shows a thing in its own form, such as a plain-text status in an email where the app shows a colored badge.

## What the product does by itself

### 9. What the product can do reliably, it does itself

Before asking people to do something by hand, the product asks whether it could do it itself, reliably: back up every photo instead of asking which ones, fill in what it already knows, file what it can file without doubt. Where it can, it does, by default, and people keep a way to choose for themselves; where the work uses their personal data in a new way, such as copying their photos to a server, they agree to it once first. Their part shrinks to the choices only they can make. Work that reaches other people, spends money or can't be undone stays the person's to start.

- **Why:** the better design often removes a task rather than polishing its screen, as when photos back up by themselves (Interface Craft, "Conceptual Range"). A task people must remember is one they can forget, and some losses, such as photos never backed up, can't be undone. The limit is reliability: a task the product gets wrong now and then becomes a check people must make every time.
- **Applies when:** people do a task by hand that the product has the data and the means to do.
- **Check:** list what people do by hand in the flow. For each, ask whether the product already has what it needs, and how often it would get it wrong. A task it could do reliably but leaves to people fails; so does one it took over and gets wrong often enough that people must check each result.
- **Fail:**
  - a photo app that asks each day which new photos to back up;
  - a form that asks for a country the product already has from the billing address.
- **Pass:**
  - "Back up all photos?" asked once at setup, then every new photo backed up as it is taken, with a setting to leave out some albums;
  - a choice only the person can make, such as which photos to share;
  - a message the product drafts and waits for the person to send.

### 10. What the product does on its own can be seen, stopped and undone, and waits before what can't be

Whatever the product does without a press from the person, such as syncing, importing, sending reminders, matching records, or an agent working through a task, can be seen, stopped and undone. Its current state is one step away from wherever people meet its results: on, paused or failing, and what it is doing now. What it did is kept in a record one step away, each entry with what it touched and, where the action can be reversed, a way to undo it. People can pause it or turn it off from where they see it. Before an action that can't be undone, spends money, or sends content or data to other people or to a record others share, it waits for the person and shows exactly what will happen, unless the person, or someone with the right to, set that action to run on its own. A failing automation never shows as working. Everything else goes ahead and is recorded, so people aren't asked to approve what they could simply undo.

- **Why:** people supervising automation ask what it is doing now, how it got into that state and how to stop it, and surprises come most often when it acts with no direction just before and with weak feedback (Sarter and Woods 1998). Approving everything wears out each approval: several of the 12 people in one study found the requests excessive (Mozannar et al. 2025), so what is reviewed only after the fact has to be the easier to reverse (Shavit et al. 2023). Apple asks products to get permission before tasks that can't be reversed, and not to automate destructive actions or ones that are hard to undo, such as a purchase on a person's behalf (Apple, "Generative AI"), since otherwise the product does in people's name what they can't take back. An automation that looks fine while it fails leads people to act on what isn't so.
- **Applies when:** the product acts without a press from the person: syncs, imports, scheduled sends, automatic matching or sorting, rules people set up, and agents, except work whose results people never meet, such as refreshing a cache.
- **Check:** list everything the product does on its own. For each, from where people meet its results: find its current state, find the record of what it did and undo an entry, and pause it. Then find each of its actions that can't be undone, spends money, or sends content or data to other people or to a shared record: one that runs without the person's go, when no one with the right to set it to run on its own, fails. Make it fail: a state that still looks fine fails. These fail: no record; no way to pause or stop it; an approval asked for an action that could simply be undone.
- **Fail:**
  - chats copied into a shared CRM in the background as they arrive, with no list of what was copied;
  - a calendar sync that says "Connected" while it has failed for a week;
  - an agent that asks for approval before each web search it runs.
- **Pass:**
  - new chats listed, each with the contact it matched, and "Push 6 chats"; afterwards, a history of pushes, each with Undo;
  - a list of automations where each shows On, Paused or Failing and its last run, with a switch to pause it;
  - a rule the person, or an admin, set up to send a weekly report, going out each week without asking;
  - a status signal people are told about and can turn off, such as a read receipt.

### 11. Acting in a person's name is their choice, visible to them, and reversible

When the product acts in a person's name (sends from their account, posts as them, logs their conversations where others can see them, joins a meeting for them) or uses their personal data for something they didn't directly ask for, other than providing or securing the service, it is their choice: off until they turn it on, unless it is the very thing they asked for. Before they turn it on, they see what it will do, with which data, and who will see the result. Afterwards they can see what it did in their name, and turn it off from there. Personal data shows why it is used at the moment it appears, and each step uses only the data it needs.

- **Why:** people want to keep control when they feel responsible for the outcome or the stakes are high, and hand it over for tasks that are tedious or that they can't do (PAIR, "Feedback + Control"); either way, the choice is theirs. Data that appears where people don't expect it feels like a breach: when an agent showed participants' full home address as soon as they had connected a store account, one said the address had been "leaked" (Liu and Rosala 2026). Apple asks for permission before using personal information, then the least data needed, with a clear way to opt out (Apple, "Generative AI").
- **Applies when:** the product acts in a person's name, or uses their personal data for something they didn't directly ask for, other than providing or securing the service.
- **Check:** turn the feature on as a new account. Before it starts, find what it will do, with which data, and who will see the result. Afterwards, find what it did in your name, and turn it off from there. An action toward other people that starts before you turned it on, or goes on after you turned it off, fails. Personal data that appears with no word on why fails, and so does a use of their data they didn't ask for, such as training models on their chats, that is on before they turned it on.
- **Fail:**
  - a meeting assistant that joins every call on the calendar from the day the account is made;
  - a shopping agent that shows the full home address as soon as an account is connected;
  - an assistant that trains its models on people's chats from the first message, said only in the terms.
- **Pass:**
  - "Join your calls and share notes with attendees?" with Turn on and Not now, then a list of the calls it joined, each with Stop joining;
  - "Using your postcode to find nearby shops" before any address appears;
  - an action that is itself what the person asked for, such as sending the email they just wrote;
  - a status signal people are told about and can turn off, such as a read receipt or online status.

### 12. An automatic decision people act on shows the evidence it used

When the product decides something people then act on, such as flagging a duplicate, matching a message to a contact, blocking a payment or ranking leads people work through, it shows the evidence it used: the fields it compared and their values, the sources it drew on, or the rule it applied, in a form people can check against the record. Where people may disagree, it offers a way to correct the decision. It shows the evidence itself; a generated account of its reasoning is not evidence.

- **Why:** an explanation helps only as far as it lets people check the result (Fok and Weld 2024): explanations raised reliance on right and wrong answers alike, while sources lowered reliance on wrong ones (Kim et al. 2025), and step-by-step reasoning text is often written after the fact (Chan 2025, "Explainable AI"). For decisions made solely by machine with legal or similarly significant effects, the GDPR gives people meaningful information about the logic involved and, where the decision rests on a contract or on consent, a person's review and the right to contest (GDPR, Articles 15(1)(h) and 22(3)).
- **Applies when:** the product decides something people act on: a match, a flag, a block, an approval or a refusal, or a ranking people work through.
- **Check:** open each automatic decision and look for its evidence: the fields compared and their values, the sources, or the rule applied. None, or only a score or a generated reason, fails; so does no way to correct it. For an EU decision with legal or similarly significant effects, no way to ask for the logic fails, and so does, where the decision rests on a contract or on consent, no way to get a person's review or to contest it.
- **Fail:**
  - "Possible duplicate" with no word on what matched;
  - a payment blocked as "risky", with no reason and no way to appeal;
  - "Why this result?" answered with a paragraph the AI wrote about its own reasoning.
- **Pass:**
  - "Possible duplicate: same email and phone; company differs ("Acme" and "Acme Inc.")" with Merge and Not a duplicate;
  - a score shown beside the evidence behind it;
  - a fraud or abuse decision that keeps its exact rule back, when it says what people can do and offers a way to appeal.
