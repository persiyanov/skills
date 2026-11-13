# Journeys

Covers one person doing one job across pages and over time: arriving through a link, the first visit and its onboarding, prompts and messages that come and go, long processes done over several visits, failures halfway, waiting on other people, the end of a job, and doing the same job again. Not covered here: what one page shows, the words, how a control answers a press, and the product's model of things and their states.

Most checks walk the journey as a real person, on a real account: arrive where people arrive (an email, a notification, a shared link), go step by step, leave and come back, break it halfway, and do it again a week later. At each step, ask whether people will try the right thing, notice how to do it, connect it with their goal, and see that it worked (Wharton et al. 1994). Walk first use and repeat use separately: those questions judge first use, and repeat use counts the steps that could go.

The rules come in four groups: arriving, long processes, other people and the end, and doing a job again.

## Arriving

### 1. A link lands on the thing it is about

A link in a notification, an email or a message opens the screen for the thing it names, where people can act on it, not the home page. When people must sign in first, they go on to that screen afterwards. When the thing is gone, or they lost access, the link lands on a page that says so and offers a way on, such as the list it was in.

- **Why:** people follow a link to do something with what it names, and a link that drops them on the home page makes them search for it. Android asks that a tapped notification open a screen about that notification, where people can act at once, and Apple says people expect related content (Android Developers, "Notifications"; Apple, "Notifications"). Sign-in is a detour, not a new start: GOV.UK One Login takes people who resume a saved application through sign-in and back to it (GOV.UK One Login, "Save progress").
- **Applies when:** the product sends links in notifications, emails or messages, or people share links to its pages.
- **Check:** sign out, then follow a link from each kind of notification and email, and a shared link to each kind of page. Landing on the home page, or on a page that doesn't show the thing, fails. Delete the thing, or remove your access, and follow the link again: an error with no way on fails.
- **Fail:**
  - "Your report is ready" that opens the dashboard;
  - an invite email whose link, after sign-in, drops people on the home page.
- **Pass:**
  - the link opens the report; when the report was deleted, "This report was deleted" with a link to Reports;
  - "3 new comments" that opens the comments with the new ones marked;
  - a link to a private item, such as another team's project, that opens the same "not found" page as a missing one, where knowing it exists would itself reveal something; HTTP allows this (RFC 9110).

### 2. Onboarding is optional, and it ends

People start in the product, not in a tour. Setup the product can't work without comes first and stays short; the rest waits until people need it, with defaults that let them begin at once. Guidance appears where and when people need it, and a tour, when there is one, is short, three steps or fewer (default), and started by people themselves. A tour or tip people skip doesn't come back by itself, but stays easy to find, such as under Help. A setup checklist can be hidden at any time, goes away once setup is done, and keeps its progress when hidden half done.

- **Why:** tutorials interrupt people, are quickly forgotten and often skipped, while help that appears when people show a need works better (Laubheimer 2023, "Onboarding Tutorials vs. Contextual Help"). Apple asks products to put off setup that isn't needed and not to show a skipped tutorial again, while keeping it findable (Apple, "Onboarding"), and Atlassian keeps a tour to three steps or fewer (Atlassian, "Spotlight"). Setup that never goes away keeps taking space from the work: Shopify rejects apps that offer no way to remove onboarding once it is complete (Shopify, "Built for Shopify requirements"), yet only 7 of 24 products with a setup checklist showed a way to hide it (Mobbin survey, 2026, convention).
- **Applies when:** the product has a first run, a tour, tips or a setup checklist.
- **Check:** start as a new account and count the screens before people can do the main job: one that asks for setup the product could do without fails. Skip the tour, reload, and sign in again the next day: a tour or tip that comes back by itself fails, and so does one you can't find again. Finish setup, and on another account hide the checklist half done: a checklist that stays after setup, can't be hidden, or loses its progress when hidden fails.
- **Fail:**
  - a five-screen tour before the first screen of the product;
  - a "Get started" checklist that stays on the home page months after every step is done.
- **Pass:**
  - the product opens on an empty project with "Create your first invoice";
  - a checklist with Hide, which leaves by itself once every step is done and stays under Help afterwards;
  - a short first step the product can't work without, such as connecting a bank account to a budgeting app.

### 3. A closed prompt stays closed, and a warning about a live problem stays until the problem ends

A prompt, tip, announcement or promotion that people close or decline doesn't come back at their next visits; it may return only after a long, stated interval, such as a consent choice asked again after a year. A message about something that is still true, such as an outage, unsaved work or an error not yet fixed, stays in view until the problem ends: it may shrink to a smaller mark, but it doesn't go away while the problem lasts. A warning that protects people's work, such as one about unsaved changes, offers no "don't show again", since it couldn't be turned back on.

- **Why:** asking again after a "no" makes people refuse again at every visit. Primer stores a closed banner so it isn't shown again, Shopify rejects promotions that come back once dismissed, GOV.UK stores a cookie choice for a year, and browsers keep a permanent denial until people change it (Primer, "Banner"; Shopify, "Built for Shopify requirements"; GOV.UK, "Cookie banner"; Harbach and Steiner 2024). A warning people closed while its problem goes on hides a true state, so Atlassian's banners can't be closed and go only when they're no longer needed (Atlassian, "Banner"). A "don't show again" on a warning about unsaved changes can never be turned back on (Cloudscape, "Communicating unsaved changes").
- **Applies when:** the product shows banners, tips, announcements, promotions or requests.
- **Check:** close or decline each banner, tip and prompt, then reload, sign out and in, and come back the next day: one that comes back fails. Cause a live problem, such as going offline or leaving an error unfixed: a message about it that can be removed from view while the problem lasts fails, and so does one that stays after the problem ends.
- **Fail:**
  - "Try Pro" that returns at each sign-in after people closed it;
  - an outage banner people could close while the outage went on.
- **Pass:**
  - the promotion stays gone after Close;
  - the outage banner clears itself when service returns;
  - a cookie choice asked again after a year, with the interval stated;
  - a warning about unsaved changes with no "don't show again";
  - an outage banner that shrinks to a small "Service degraded" mark in the header when closed.

## Long processes

### 4. Progress through a long process is shown truly

A process of many steps, or one done over several visits, shows where people are: its parts and the status of each. A process of more tasks than people can take in at once, such as dozens, comes in a few phases rather than one long count, opens on the current phase, and keeps finished ones quiet. A count of steps shows only where it won't change: a form whose later questions depend on earlier answers shows the names of its steps, not "3 of 7". The product marks a step done itself when it can see it done, such as a bank account that connected; people mark "done" only where it is their own judgement. A step that waits on someone else shows as waiting, not as something people failed to tick.

- **Why:** a count that changes on the way misleads, so Carbon uses no step indicator when the number of steps can change, and GOV.UK shows a total only when it is reliable (Carbon, "Progress indicator"; GOV.UK, "Question pages"). A flat "10 / 47" overwhelms, while phases with the current one open show what to do now (Interface Craft, "Redesigning a Mobile Web App, Part 1" and "Part 2"). Finished tasks drawn as strongly as open ones make the open ones harder to spot, so GOV.UK keeps completed tasks plain (GOV.UK, "Task list"). A box people must tick for something the product already knows is a chore, and a false record when they forget, so Shopify's setup steps mark themselves complete (Shopify, "App home and onboarding").
- **Applies when:** a process has several steps or is done over several visits, such as an application, a setup or an onboarding checklist.
- **Check:** walk the process and take a branch that adds steps: a count that changes fails. Do each step outside the process, such as connecting the bank from settings, then return: a step the product could see done, still unticked, fails. Find each step that waits on someone else: one shown as an unticked task fails. Dozens of tasks in one flat list, with no phases and nothing open where people are, fail.
- **Fail:**
  - "Step 3 of 5" that becomes "Step 3 of 7" after an answer;
  - "Connect your bank" still unticked after the bank connected;
  - "10 of 47 tasks" in one list.
- **Pass:**
  - "Your details: Completed. Funding: In progress. Declaration: Cannot start yet, opens 1 April", with Funding open;
  - a two-step checkout with no step indicator.

### 5. A long process can be left and picked up again

Where people may not finish a process in one visit, they can save and leave at any point, with no checks on unfinished answers. They learn what was kept and for how long, and get a way back, such as an email with a link. Answers are kept for at least 20 hours without activity, or people are warned before they go.

- **Why:** GOV.UK asks long services done over several sessions to let people save and continue where they left off, and One Login puts "Save and complete later" on every page, with an email that gives the way back (GOV.UK, "Task list"; GOV.UK One Login, "Save progress"). Half-finished answers are still worth keeping, so Agriculture's design system saves without checking them (Agriculture Design System, "Multi-task form"). WCAG asks for a warning when data is kept for less than 20 hours without activity, and calls keeping it at least that long the best way to meet it (WCAG 2.2, Understanding 2.2.6, AAA).
- **Applies when:** people may not finish a process in one visit, such as an application, a long form or a setup.
- **Check:** start the process, fill half a page, and leave by saving or by closing the tab. Come back the next day, and, where the product has accounts or sends a link back, on another device: answers lost, no way back, or no word on how long they are kept, fails. Try to save a half-finished page: an error that blocks saving fails.
- **Fail:**
  - an application that keeps answers only for the browser session;
  - "Save" that refuses to save until every field on the page is valid.
- **Pass:** "Save and come back later" on each page, then "We've saved your application until 14 December" and an email with the link.

### 6. Coming back shows where people stopped

When people return to something they left, the product shows them where they were. A view keeps its place: the tab, the filters, the scroll position; filters it kept show that they are on, with a way to clear them. A long process opens on its overview, with the next part marked, and a part in progress opens where people stopped, with a visible mark saying so, such as "You stopped here last time".

- **Why:** after an interruption, people's first action took about twice the normal gap between actions, and a clear cue at the place they stopped shortened it, while a subtle cue helped no more than none (Altmann and Trafton 2004; Trafton et al. 2005). Apple restores the previous state so people continue where they left off (Apple, "Launching"), while GOV.UK and Agriculture's design system open a long process on its task list at each return, so people see what is done and what comes next (GOV.UK, "Complete multiple tasks"; Agriculture Design System, "Multi-task form").
- **Applies when:** people leave something and come back to it: a view, a draft, a long process.
- **Check:** set a view's tab, filters and scroll, open an item, and come back: a view that resets fails, and so do kept filters with no sign that they are on. Leave a long process in the middle of a part and return a day later: landing on its first step, or on the last page with no overview and no mark, fails.
- **Fail:**
  - a six-part application that reopens on its first page;
  - a filtered list that resets each time people come back from an item.
- **Pass:**
  - a workspace setup that opens on its checklist with "Connect calendar: in progress" marked as next; inside it, "You stopped here last time" above the first empty step;
  - an inbox that opens on what is new rather than on the old scroll position.

### 7. People check their answers before a submission they can't take back

Before people submit a process whose result is hard to take back, such as an application, an order or a claim, they see all their answers on one page, each with a way to change it. A change returns them to that page, not through every later step. Questions people skipped show as not given. The button that submits says what it does, such as "Send application".

- **Why:** a page of answers before the end gives people a second chance to notice and correct errors, and a change that sends them through the rest of the process again costs them the whole route (GOV.UK, "Check answers"). Cloudscape recommends a review step at the end of a multi-page process, and PatternFly includes one (Cloudscape, "Multipage create"; PatternFly, "Wizard"), and so did half of 28 application and setup flows seen, half of those with a way to change each section (Mobbin survey, 2026, convention). For legal or financial commitments, and changes to people's stored data, WCAG requires that a submission can be undone, is checked for errors with a chance to fix them, or can be reviewed and corrected before it is final (WCAG 2.2, 3.3.4), since otherwise a slip becomes a commitment people can't get out of.
- **Applies when:** a process ends in a submission that is hard to take back.
- **Check:** fill the process to its end. A submission that is hard to take back with no page of answers before it fails. Change one answer from the check page: being sent through every later step fails.
- **Fail:**
  - a loan application submitted from its last question, with no page to check the answers;
  - a change of address that sends people through all eight pages again.
- **Pass:**
  - "Check your answers", each with Change, then "Send application"; after a change, Continue returns to the check page;
  - a form of one question.

### 8. A failure halfway says what happened, and keeps the answers

When a process fails before it is done, such as a service that is down or a submit that times out, people learn what happened to what they entered and to anything they paid, and what to do now. Their answers are kept, so they can carry on when it works again. Before any retry that could charge them again, they learn whether a payment went through.

- **Why:** WCAG requires that what people typed stays when a step or a submit fails in the same visit, unless entering it again is essential, needed for security, or the earlier answer no longer holds (WCAG 2.2, 3.3.7), since otherwise they must recall and retype it. GOV.UK's error pages say what happened to people's answers in the middle of a transaction, and keep them for a reasonable time so people can carry on (GOV.UK, "There is a problem with the service pages"); in its research, people needed to know when the service would work again and how else to get done what they came for (GOV.UK, "Service unavailable pages"). A payment retried without knowing whether the first went through can charge people twice.
- **Applies when:** a process can fail before it is done.
- **Check:** block the request that submits each step, or turn the network off in the middle of the process. A message that says nothing about the answers fails. Answers gone after a failed step in the same visit fail, and so do answers gone after a reload, or when the service comes back later. Make a payment fail after it was sent: a retry that could charge again, offered before the product says whether the payment went through, fails.
- **Fail:**
  - "Something went wrong" after the last page of an application, with every field emptied;
  - "Payment failed. Try again" when the charge had gone through.
- **Pass:**
  - "Your basket is saved. The payment didn't go through, and you weren't charged. Try again, or pay another way.";
  - a password field emptied after a failed sign-in, for security.

## Other people and the end

### 9. A wait on someone else says on whom or what, and for how long

When a step can't go on until someone else acts or something else happens, the screen says whom or what it waits on, since when, and, as far as it is known, until when: "Waiting for approval from Dana Lee (finance), requested 3 March", "Opens 1 April". Where there is no one to name, such as a queue, or the name must stay private, as in a blind review, it says when to expect a result and what happens next.

- **Why:** people who see only "Pending" can't tell whether to wait, chase someone or act, so GOV.UK shows a task that can't start yet with the date it opens (GOV.UK, "Complete multiple tasks"), and a code review names the people it waits on (GitHub Docs, "About pull request reviews", convention). Signature tools name each signer, while 5 of 8 expense approvals seen showed only a status word, such as "Pending" or "Submitted" (Mobbin survey, 2026, convention).
- **Applies when:** a step waits on another person, a team, a queue or a date.
- **Check:** find each status that waits on someone or something, such as "Pending", "In review" or "Waiting". One that doesn't say whom or what it waits on and since when, or, where it is known, until when, fails.
- **Fail:**
  - "Pending" on an expense, with no name or date;
  - an invite list that shows "Invited" with no date sent.
- **Pass:**
  - "Waiting for approval from Dana Lee (finance), requested 3 March", with Remind;
  - "An officer will review your claim within 10 working days", where there is no name to give.

### 10. The end says what happens next, and leaves a record

When people finish a process they submitted, the last screen confirms it, gives a reference if there is one, says what happens next and when, and how to get help, and lets them keep a record, such as an email copy, a PDF, or the request kept in their account. The link to that page, opened later, still says something useful.

- **Why:** GOV.UK's confirmation pages give a reference, what happens next and when, contact details and a way to save a record, and some people bookmark the page as a receipt, so a later visit answers helpfully (GOV.UK, "Confirmation pages").
- **Applies when:** people finish a process they submitted, such as an application, an order or a request.
- **Check:** finish each process: a last screen without what happens next and when, or with no way to keep a record, fails. Open its link again a week later: an error or a blank form fails.
- **Fail:** "Success!" and a button back to the home page.
- **Pass:** "Application sent. Reference HDJ2123F. We'll reply by 14 March. A copy is in your email. Questions? Call 0300 …"

## Doing a job again

### 11. Repeat use gets faster

People who come back to a task often can do it faster than the first time: the product remembers their last choices, keeps views they set up, and offers shortcuts, without making the first time harder. A remembered choice is shown and easy to change, and is never applied unseen to an action that can't be undone.

- **Why:** shortcuts that newcomers never meet speed up frequent users (Nielsen 1994, heuristic 7), and setting the same filters on every visit is repetitive work, so Cloudscape saves sets of filters, with a default people can change (Cloudscape, "Saved filter sets"). A choice remembered and applied unseen can repeat a mistake, such as sending to everyone again.
- **Applies when:** people do the same task more than now and then.
- **Check:** do a main task twice, a week apart, as the same person: setting the same filters, picking the same options or walking the same steps again, when the product could remember them, fails. Look for remembered choices on actions that can't be undone: one applied without being shown fails.
- **Fail:**
  - a report builder that resets its dates and columns at every visit;
  - a transfer form that quietly reuses last month's amount.
- **Pass:** "Last used: Q3, by region" chosen and shown, with Change.

### 12. A job people repeat starts from last time and shows what changed

A job people come back to on a rhythm, such as a weekly review, a daily triage or a monthly close, opens where it is useful: the view they work from, what changed since they last did the job, and a queue that empties as they work through it. "Since last time" means since they last did this job, not since any visit.

- **Why:** people returning ask where they were and what happened while they were gone, so Nielsen recommends a short summary of what changed since their last visit (Nielsen 2025). Products mark what changed since people last looked, and let them clear what they handled: a mark on a file edited since you last opened it, and "Done", which takes a notification out of the inbox (Google Docs Editors Help, "Find what's changed in a file"; GitHub Docs, "Managing notifications from your inbox"; convention).
- **Applies when:** people repeat a job on a rhythm.
- **Check:** do the job, let a week of changes happen, and do it again: having to find what changed by hand, or a queue that doesn't shrink as items are handled, fails. A "new" count that resets at every visit, for a job done weekly, fails.
- **Fail:** a sales rep's weekly review that opens on all 240 accounts, with nothing marking the six that changed.
- **Pass:** "6 changed since your review last Monday", each marked, with Done on each, which takes it off the list.
