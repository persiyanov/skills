# Help

Covers how people get help inside a product and from it: info tips and tooltips, help panels and links to the documentation, reaching a person, asking for help with what the product already knows, support chats, feedback, and telling people what changed. Read it for any product that offers help, support, feedback or announcements. Not covered here: where help sits on the page, field hints and limits, a link's words and the new tab it opens, tooltips on hover and focus, error messages, the no-access message, tours and closed prompts, waits and the end of a request, AI notices, a support bot that offers a person when it can't help, feedback on AI answers, the shortcut list, and the weight of promotions, which other guides hold. The problem it solves: people who miss what a tip hid, lose their work to a help link, can't reach a person, type again what the product knew, or can't find what changed or where it went.

The rules come in four groups: help on the screen, asking for help, feedback, and what changed.

## Help on the screen

### 1. An info tip adds what only some people need, right after what it explains

Most questions are answered by the words on the screen: headings, labels, descriptions and the hints under fields. An info tip, behind an "i" or a "?", adds what only some people need, such as what a term means, why something is asked, or where to find a value. It never holds what everyone needs to act or to choose, such as a rule, a limit, a legal term or what tells options apart, and never repeats what the screen already says. It sits right after what it explains, such as a field's label or a heading.

- **Why:** Kaplan advises assuming that most people never open an info tip, and those who open one are stuck or unsure, so a rule, a limit, a legal term or a long instruction hidden in one is missed, and hiding it there can even deceive; a tip that repeats the screen sends people looking for something that isn't there. People read "i" as more information and "?" as help, and either works for one field when it sits close to it (Kaplan 2026). Carbon, Material 3 and PatternFly keep what people need to finish a task out of tips (Carbon, "Tooltip"; Material 3, "Tooltips"; PatternFly, "Popover"), and Cloudscape and Pajamas start help in the words on the screen, adding more only as people need it (Cloudscape, "Help system"; GitLab Pajamas, "Contextual help and info"). Of 25 business forms seen, 15 gave field help only as text on the screen, 6 used an "i" and 2 a "?" (Mobbin survey, 2026, convention).
- **Applies when:** a screen has info tips or help icons.
- **Check:** open every "i" and "?" on a screen and read each tip against the screen. A tip that holds a rule, a limit, a legal term, or what people need to choose between options fails, and so does one that repeats the label or the text beside it. An icon away from what it explains, such as at the end of a row of fields, fails.
- **Fail:**
  - a password rule shown only in a tip beside the field;
  - a "?" beside "Paper type" that says "Choose your paper type".
- **Pass:**
  - the password rule under the field;
  - an "i" beside "Date of birth" that says "We use this to check your age. Others can't see it.";
  - a tip in a tool for specialists that defines a term most of them know.

### 2. An info tip opens in place, and one with a link works by keyboard and touch

An info tip opens next to what it explains, without covering what people are filling in, and never as a dialog or a new page. A tooltip, which opens on hover and focus, holds a name or one short fact of about 60 to 75 characters (default), and nothing to press. A tip with a link or a button, or more than a sentence, is a small popover that people open with a click, a tap or the keyboard, not by hover alone. It stays open while people move into it and use it, and Escape closes it.

- **Why:** a tip that closes as the pointer or focus leaves its icon can't hold a link: keyboard users can't reach it, and touch screens have no hover. WCAG 2.2 requires a tip that holds a link or a button to open with the keyboard, stay open while people move into it, and close without moving away, such as with Escape (2.1.1 and 1.4.13). Carbon keeps tooltips free of anything to press and moves links and buttons into a toggletip, which opens on click or Enter and stays open until people close it. PatternFly names things with tooltips and describes them in popovers, opened on click, of one to three sentences (Carbon, "Tooltip", "Toggletip"; PatternFly, "Popover"). Pajamas opens a help popover, which may hold a link, on hover or keyboard focus, and Material 3 lets a rich tooltip hold buttons and links, opening one that stays on a click or tap (GitLab Pajamas, "Contextual help and info", "Popover"; Material 3, "Tooltips"). The W3C's pattern builds a hover layer that holds anything focusable as a dialog that doesn't block the page (WAI-ARIA Authoring Practices, "Tooltip Pattern"). A tip that opens a dialog or a new page takes people away from what they were comparing (Kaplan 2026). Apple keeps tooltips to about 60 to 75 characters (Apple, "Offering help").
- **Applies when:** a screen has tooltips or info tips.
- **Check:** open each tip that holds a link with the keyboard and on a touch screen, move into it, then press Escape: one that won't open, closes before the link can be pressed, or stays after Escape, fails. Press each "i" and "?": a dialog, a new page, or a tip that covers the field people are filling in, fails. Hover over each tooltip: one that holds a link, a button or more than a sentence fails.
- **Fail:**
  - an "i" beside "About payment options" that replaces the screen with an article;
  - a tooltip that opens only on hover and ends in "Learn more".
- **Pass:**
  - a "?" beside "Billing contact" that opens a small popover on click, "Gets every invoice by email. Change it in billing settings", with the link, closed by Escape or ×;
  - a tooltip that names an icon-only button and its shortcut, such as "Bold (⌘B)";
  - a help popover that opens on hover and on keyboard focus, stays open while the pointer moves into it, and opens on a tap;
  - on a phone, a short sheet from the bottom that leaves the field in view and closes back to it.

### 3. Help that needs more room opens beside the work, never in its place

Help too long for a tip opens beside the page, in a help panel or drawer, or in the documentation, and never replaces the page people are working on. A help panel shows help for the page by default, and help for a section once people press that section's help link, under a title that matches the section's heading; closed and opened again on the same page, it shows what it showed. It holds reading, not actions, ends with a few links to the documentation, and in a process of several steps is there at every step. A link to the documentation says what it answers, often as a question, such as "Who can approve invoices?". One that would take people away from work in progress, such as a form they have typed in, opens in a new tab and says so.

- **Why:** Cloudscape gives help in steps, each holding more: the words on the screen, a panel beside the page, then the documentation, and Pajamas adds a popover before its drawer (Cloudscape, "Help system"; GitLab Pajamas, "Contextual help and info"). Cloudscape's help panel shows the page's help by default, switches to a section's help when people press its Info link, keeps what it showed when closed and opened again on the same page, matches its title to the page or section, ends with links to the documentation, and stays in every step of a create flow (Cloudscape, "Help system"). Pajamas puts no buttons that act in help drawers, since the page behind keeps its actions, ties each drawer to one task, and phrases links to the documentation as questions (GitLab Pajamas, "Contextual help and info"). WCAG advises against new windows in general, but opens help in a new one from the middle of a form, so that nothing typed is lost, with a warning before the click (WCAG 2.2, G200, G201), and Primer opens links from its feature messages in a new tab for the same reason (Primer, "Feature onboarding").
- **Applies when:** a product has help longer than a tip: a help panel or drawer, or links to its documentation.
- **Check:** type into a form, then follow each help link: one that replaces the form or loses what was typed fails, and so does a new tab the link didn't announce. Open the help panel from two sections in turn: the same text for both, a title that doesn't match the section, or a button that changes something, fails. Close it and open it again on the same page: help that went back to the page's default fails. Where a process of several steps has a help panel, a step without it fails. A link to the documentation that reads only "Learn more" fails.
- **Fail:**
  - "Learn more" in the middle of a setup form that opens the documentation in the same tab, after which the form comes back empty;
  - a help panel titled "Help" that shows the same text on every page.
- **Pass:**
  - an Info link beside "Retention period" that opens a panel titled "Retention period", with two short paragraphs and links to "How retention works" and "Choosing a retention period";
  - "Who can approve invoices? (opens in new tab)" under a form;
  - a phone app whose help opens as a sheet over the screen, with the form and what was typed kept beneath it;
  - a small product whose help is the words on the screen and a link to the documentation.

## Asking for help

### 4. A way to reach a person sits in help itself, and says when it is open and how soon people answer

Where a product has people who answer, help shows a way to reach them in help itself, with no articles, menus or long form in front of it. A bot may answer first, as long as people who ask for a person are offered one at once, and the bot offers one when it can't help. Each way to reach a person, such as chat, email, phone or a form, says when it is open, with exceptions such as holidays, and how soon people usually answer, before people choose. Where no person answers, and no law asks for one, help says so. A service offered to people in the EU that stores or passes on what they provide gives a point of contact that people reach electronically, not only through automated tools, with its details easy to find.

- **Why:** the W3C's guidance for people with cognitive disabilities asks that people can find a person from any page or step of a process, in as few steps as possible, such as a form of two fields, an email address or a phone number. It warns against long contact forms and menus of several levels in front of a person (W3C, "Making Content Usable for People with Cognitive and Learning Disabilities"). Where no person is available, self-help should say so (Understanding 3.2.6). Chatbots manage simple questions but fail as problems grow complex, and people get caught in loops with no way to a person (Consumer Financial Protection Bureau 2023). Intercom's bot hands over at once when people clearly ask for a person (Intercom Help, "Manage Fin AI Agent's escalation guidance and rules", convention). GOV.UK tells people when each channel will answer, so they can choose one, with opening hours, their exceptions and any charges (GOV.UK, "Contact a department or service team"). The Ministry of Justice gives the response time before its contact form and after it is sent (Ministry of Justice Design System, "Get help"). The EU's Digital Services Act covers services offered to people in the EU that store or pass on what they provide, such as files, posts or messages, wherever the company is. Such a service gives a point of contact that people reach directly and quickly, electronically, by a means they choose, and that doesn't rely only on automated tools, with its details easy to find (Digital Services Act, Articles 2 and 12). Of 18 support forms seen on the web, 3 gave a reply time or hours (Mobbin survey, 2026, convention).
- **Applies when:** a product offers help or has people who answer questions, or stores or passes on what people provide, for people in the EU.
- **Check:** for people in the EU, on a service that stores their files, posts or messages, look for a way to reach someone: contact only through a bot, or details that are hard to find, fails. From the help menu or page, find a way to reach a person: articles, menus of several levels or a long form to get past first fails. Ask a support bot for a person in its first message: a bot that keeps answering instead fails. Read each channel before choosing it: no hours or usual reply time fails.
- **Fail:**
  - "Contact us" that leads through three pages of articles to a bot that answers "I didn't understand" three times;
  - "Email us" with no word on when anyone answers.
- **Pass:**
  - in the help menu, "Chat · Mon–Fri 9:00–17:00 CET, usually within 5 minutes" and "Email · we reply within 1 working day";
  - an offline app with no support staff whose help says that no one answers messages;
  - a usual reply time, where answers vary;
  - a support chat where a bot answers first, with "Talk to a person" in view from its first message.

### 5. Asking for help starts from where people are, and shows what it sends

Help opened from a page starts with that page's topic, with search for the rest. A request for help, such as a contact form, a chat or a problem report, carries what the product already knows, such as the page, the item it is about, the time and any error, so people don't type it again. An error people can't fix themselves offers a way to get help, and the help carries the error. A request shows what it attaches, such as a screenshot, logs, device details or a conversation with a bot. People can see each part, remove it, or hide part of a screenshot, and logs or other private data go only once people allow it.

- **Why:** the Ministry of Justice sends the page address and the time with every request (Ministry of Justice Design System, "Get help"), and GOV.UK's page for a service that failed gives contact details where they help (GOV.UK, "There is a problem with the service pages"). One person in a study thought a chatbot couldn't see the product on screen, and typed its name in again (Kenderova et al. 2026, "AI Chatbots"). Google's feedback forms take a screenshot that people can remove or partly hide, and add device logs only once people allow it, and Canada.ca removes personal details from a comment and shows people what will be sent (Gmail Help, "Send feedback in Gmail"; Google Chat Help, "Send feedback in Google Chat"; convention; Canada.ca, "GC Feedback"). An attachment people don't know about can carry what they never meant to share, such as a private document on the screen. Of 18 support forms seen on the web, 7 attached or chose the item people came from (Mobbin survey, 2026, convention).
- **Applies when:** people can ask for help, report a problem, or meet errors they can't fix.
- **Check:** open help, the contact form and the problem report from an item's page and from an error: one that asks for the page, the item or the error people came from fails. Cause an error you can't fix, such as a server error: no way to get help, or help that doesn't carry the error, fails. Read each request before sending it: an attachment that isn't shown or can't be removed fails, and so do logs sent without asking.
- **Fail:**
  - a blank form that asks for the order number shown on the page behind it;
  - "Report a problem" that sends logs and a screenshot with no word.
- **Pass:**
  - "About order 4821 · This page and error 7F3A are included · Remove";
  - a screenshot preview with "Hide parts", and "Include logs" off until people turn it on;
  - on a phone, "Report a problem" with the screenshot shown and "Hide parts" under it;
  - a question asked from the home page, with no item to attach.

### 6. A support chat stays with people across pages, and says who is answering

A support chat keeps its conversation as people move around the product: on a wide screen it stays open beside the pages, and wherever people close it, in one action, it opens again where it was. People can save or copy what it said, and, where they are signed in, find a past conversation later. It shows who is answering, and when a person takes over from a bot, the conversation says so, with the earlier messages still there.

- **Why:** people stop using a chat that vanishes when they change page, and an answer they can't keep is gone when they leave, so NN/g asks that a chat follow people and that what it says can be saved or shared (Kenderova et al. 2026, "AI Chatbots"). The W3C's advice for people with cognitive disabilities asks that a chatbot can be closed in one action and called back with a link or button (Understanding 3.2.6). Intercom posts a message in the conversation when a person joins, and keeps past conversations and requests within reach (Intercom Help, "Updates to the Messenger", convention); all 6 chats seen where a person answered marked the moment they joined (Mobbin survey, 2026, convention).
- **Applies when:** a product has a support chat, answered by a bot, by people or by both.
- **Check:** start a chat, then move to another page: a chat that starts over or loses the conversation fails. Close it and open it again: a conversation that is gone fails. Ask for a person: no message when the person takes over, or earlier messages gone, fails. Look for a way to save or copy an answer, and, signed in, for last week's conversation: none fails.
- **Fail:**
  - a chat that starts over on every page;
  - a person who takes over with no word in the chat, so people go on writing as if to the bot.
- **Pass:**
  - "Dana from Support joined the chat", with the bot's messages still above, and "Email me this conversation";
  - a chat in its own page or window, which people keep open beside the product;
  - a phone app's chat on its own screen that keeps the conversation when people come back;
  - a public service's chat with no sign-in that offers a copy by email instead of a history.

## Feedback

### 7. The product asks for feedback after a task, briefly, and says whether anyone replies

A way to give feedback sits in one place that stays, such as the help menu or the end of each page, so people can give it when they are ready. When the product asks, it asks after people finish a task, never when they arrive, during onboarding, or in a dialog over a task in progress. A request people closed or declined doesn't come back at their next visits, and requests come at least a week or two apart (default). Feedback the product asks for starts with one choice, such as Yes or No, that is sent on its own; optional questions follow, with free text last and its length limit shown. The form says why it asks and whether anyone will reply, and where no one will, points people who need an answer to support, where there is any.

- **Why:** people asked the moment they arrive, or midway through a task, dismiss the request or give poor answers. So Kaley asks for feedback once people finish a task, through a small link that is always there, in about a minute, with the open question last; in NN/g's research, surveys of 2 to 3 minutes were too long (Kaley 2023). The W3C asks that people can give feedback from every place they get stuck (W3C, "Making Content Usable for People with Cognitive and Learning Disabilities"). Apple asks for ratings only after people have used the app, at a natural break, never at first launch or in onboarding, leaves at least a week or two between requests, and prefers the system's own prompt (Apple, "Ratings and reviews"). Carbon avoids pop-ups the system opens while people work, such as Net Promoter Score surveys (Carbon, "Dialogs"). Cloudscape sends a thumbs up or down on its own, before any form (Cloudscape, "Collect user feedback"). GOV.UK, in a component still in trial, puts its feedback link at the end of as many pages as it can, says why it asks and what happens to the answers, and suggests saying how long it takes and that feedback isn't a way to get support (GOV.UK, "Feedback"). Canada.ca asks Yes or No, says no one will reply, offers a contact link for urgent help, and limits comments to 300 characters (Canada.ca, "GC Feedback"). Of 22 feedback forms seen on phones, 6 said whether a reply would come (Mobbin survey, 2026, convention).
- **Applies when:** a product asks people for feedback, ratings or answers to a survey.
- **Check:** watch when the product asks for feedback: on arrival, during onboarding, or in a dialog over a task in progress fails, and so does a request that comes back at the next visit after people closed it. Open a request for feedback the product makes: one that can't send a single choice on its own, or opens on a large text field, fails. Read it before sending: no word on whether anyone replies fails.
- **Fail:**
  - a survey dialog in the middle of checkout;
  - "Tell us what you think" as an empty text box, first.
- **Pass:**
  - at the end of a help article, "Was this page helpful? Yes · No", then "No one replies to feedback. Need an answer? Contact support", and an optional comment of up to 300 characters;
  - a request at the end of a one-time process, such as a tax return, the only moment to ask;
  - a small team that answers every note and says "We may reply";
  - the platform's own rating prompt, shown at a natural break after a task;
  - a "Send feedback" form people open themselves to describe a problem or an idea, which starts with a text box.

## What changed

### 8. A new feature is announced where it lives, once, and the list of changes stays findable

A new feature is announced where it lives, such as with a mark or a short feature tip beside it, to people who haven't used it, in a sentence or two with no promotion, and people can close it. Each announcement shows once to each person, and marks such as "New" end after a set time, about 30 days (default). Messages about the state of people's work, such as an outage, come before announcements, few announcements show at once, and none opens by itself over the work, except once for a change to how people work. A list of what changed stays findable, such as under Help, not only in a dialog at sign-in.

- **Why:** NN/g describes a dialog of changes, shown at sign-in, that gets closed unread, after which people can't find the list (Laubheimer 2023, "Onboarding Tutorials vs. Contextual Help"). Apple shows a feature tip only to people who haven't used the feature, in one or two sentences with no promotion, for a feature of no more than about three actions (Apple, "Offering help"). Primer places a message close to where the feature will stay, ends every announcement campaign, and shows no more than two alerts at a time (Primer, "Feature onboarding"). Pajamas shows each promotion once per person, lets one people never answered end after 30 to 90 days, opens no popover or drawer when a page loads, and keeps a prominent notice for a change that could confuse people or alter how they work (GitLab Pajamas, "Feature discovery", "Popover"). Cloudscape puts status messages before feature messages and ends its "New" labels after 30 days (Cloudscape, "Announcing new features"). Of 22 announcements seen in web apps, in a search that favored ones already open, 21 were dialogs, and 6 showed a way to a full list of changes (Mobbin survey, 2026, convention).
- **Applies when:** a product announces new features or changes, except a list, panel or feed of news that people look at themselves, such as on a home page.
- **Check:** find the latest announcement: one that opens by itself over the work, other than once for a change to how people work, fails, and so does a feature tip or mark shown away from its feature, or to people who already use the feature. Close it, then look for the list of changes a week later: none fails. Look for "New" on features released months ago: a mark that never ends fails.
- **Fail:**
  - a "What's new" dialog at every sign-in, with no list of changes anywhere else;
  - a "New" badge on a feature from last year.
- **Pass:**
  - a small "New" mark beside "Saved views" with a one-line feature tip that closes for good, and "What's new" under Help, listing each change by date;
  - a change people must act on, such as a new security step, shown as a step they take rather than an announcement;
  - a change that alters how people work, told once in a dialog and kept in the list of changes.

### 9. A change to how people work is told first, and the old place says where things went

Before a change alters how people do their regular work in a tool they use often, such as by moving, renaming or removing something, the product tells them, ahead of time where the change allows it. After something people use often moves, the old place says where it went, with a link, for a stated time, since people look for it where they found it before. A large change to how people work may let them keep the old way for a stated time.

- **Why:** people who have used a complex tool for years, without becoming fast at it, worry less about change than about working slower, so Kaplan asks for changes told early and clearly, and for the old views or ways of working kept during a transition (Kaplan 2025, "Supporting 'Power Users' Isn't Enough"). In NN/g's example, people who closed a list of changes and then found their tools moved had nowhere to look (Laubheimer 2023, "Onboarding Tutorials vs. Contextual Help"). Among 22 announcements seen, one said where moved data now lives, and one offered to keep the old version (Mobbin survey, 2026, convention).
- **Applies when:** a product moves, renames or removes something people use often.
- **Check:** after a change that moved something people use often, go where it used to be: an empty place, or no word on where it went, fails. For a planned change to how people do their regular work, look for word of it before it happened: none fails.
- **Fail:** "Reports" gone from the sidebar one morning, with nothing in its place.
- **Pass:**
  - a notice a week before, then "Reports moved to Analytics › Reports", with a link, in the old place for 30 days;
  - in a command-line tool, typing the old command `deploy` prints "`deploy` is now `ship`";
  - an urgent removal for security, with no notice before, which says afterwards what was removed and why.
