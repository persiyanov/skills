# Notifications

Covers what a product tells people when they may not be looking at it: which channel each kind of notice takes, what a push or an email says, bursts and repeats, the notification center, badges, asking to send notifications, and the settings for them. Read it for any product that notifies people. Not covered here: results and messages shown where people act, toasts, the look of each level of urgency, banners about a live problem, where the notification center sits, what a count counts, and where a link in a notice lands, which other guides hold. The problem it solves: people who miss what matters among notices that don't, can't tell what a notice is about, get the same thing again and again, or can't stop what they never wanted.

The rules come in three groups: sending, the list and badges, and people's choices.

## Sending

### 1. Each kind of notice takes the channel its urgency calls for

Each kind of notice goes where people will meet it in time, chosen by how urgent it is, whether people must act, and whether they are in the product at that moment. News people can read when they like goes in the product, or in an email that keeps a record; what they must see soon while away goes by push; a text message, or a dialog that stops their work, is only for what is critical, meaning what would harm people's safety, money, access or work if they missed it now. Something critical never goes only by a channel people may not see in time, such as an email or an entry in the product's list. A notice is marked no more urgent than it is; one that isn't urgent doesn't break through Focus or Do Not Disturb; and nothing is sent about what people are already looking at.

- **Why:** NN/g keeps push for what can't wait, the product for what people can read when they like, email for a lasting record, and text messages for critical alerts, and finds that too many alerts lead people to ignore or turn them off and miss what matters (Kenderova and Neusesser 2026). Notices that need action are often urgent and should interrupt, while passive ones are easily missed (Flaherty 2024), and Carbon keeps a dialog for messages that are critical and need attention at once (Carbon, "Notifications"). Apple asks for urgency stated truly, lets a Time Sensitive notice break through a Focus only for an event happening now or within the hour, and doesn't notify about a new message in a mailbox people are viewing, since the message already shows (Apple, "Managing notifications"; Apple, "Notifications"). NN/g also never sends a safety alert by a channel people may not see in time, such as email alone (Kenderova and Neusesser 2026).
- **Applies when:** a product sends notices by push, email or text message, or shows them in the product.
- **Check:** list each kind of notice with its channel and its urgency. Something people can read later, sent by push or text at the urgency of a failure, fails; something critical sent only as an email or a list entry fails. Turn on Focus or Do Not Disturb: a notice that breaks through it for an event more than an hour away fails. Open the thing a notice is about, then cause the event again: a push about what is on the screen fails.
- **Fail:**
  - "Weekly tips" sent as a push, at the same level as "Payment failed";
  - a sale sent as a Time Sensitive notification;
  - a tax deadline reminder sent as an urgent push a month early.
- **Pass:**
  - "Payment failed" in the product and by email at once;
  - tips in a weekly email people chose;
  - a chat app that pushes every direct message, which is what people use it for;
  - a dialog that warns a session is about to end, since people would lose their work.

### 2. A notice read away from the product says what happened, to what, and what to do

A notice people may read away from the product, such as a push or an email, names the event and the item, and says what people need to do and by when. Where others may see it, as on a locked screen, it says only as much as privacy allows, and when previews are hidden it still says what kind of notice it is. Its buttons do the action, rather than only opening the product, and it doesn't ask people to remember a task for later.

- **Why:** a notice read later needs more context than feedback on an action people just took (Flaherty 2024; Carbon, "Notifications"), and NN/g asks notices to say what happened, what action is needed and by when, without people having to open the app (Kenderova and Neusesser 2026). Apple keeps sensitive, personal or confidential information out of notifications, gives a plain description for when people hide previews, avoids a button that only opens the app, and avoids telling people to do something in the app later, which they find hard to remember (Apple, "Notifications"). The App Store asks apps not to send sensitive personal information by push (App Store Review Guidelines, 4.5.4).
- **Applies when:** a product sends notices people may read outside it.
- **Check:** read each push and each email on its own, away from the product: one that doesn't name the event and the item fails. On a locked screen, a test result or an account detail shown by default fails, and so does a notice that says nothing about its kind when previews are hidden. Tap each button on a notice: one that only opens the app fails.
- **Fail:**
  - "You have updates.";
  - "Open the app to review your invoice."
- **Pass:**
  - "Invoice 1042 from Acme is due Friday: €480", with "Pay now";
  - on a locked screen, "Your test results are ready", without the results;
  - a short notice for something people started a minute ago, such as "Your export is ready";
  - a chat app that shows the message on a locked screen, where people choose previews in the system's settings.

### 3. Many alike become one, a notice isn't sent again unchanged, and it ends with its cause

A burst of similar events that people don't answer one by one, such as 30 comments in an hour, becomes one notice that says how many; an event that needs its own answer, such as a direct message or a failed attempt to unlock a door, gets its own. A notice people haven't answered isn't sent again unchanged, though an alarm about a danger that lasts may repeat until answered, and a reminder may come again, more urgent, as a deadline or a risk nears. A notice read on one device is cleared on the others. When its cause is resolved, the notice goes away, and when something recovers without people's doing, a notice says it works again.

- **Why:** Apple and Carbon ask products not to send the same notification again when people haven't answered it, and Carbon groups notices by source or urgency (Apple, "Notifications"; Carbon, "Notifications"). Fluent folds similar processes into one toast that says how many, and Android groups notifications that arrive together (Fluent 2, "Toast"; Android Developers, "Notifications"). NN/g notifies each separate event, such as each failed unlock, at once, uses thresholds for conditions that go on, resends a reminder with rising urgency where it prevents a failure, and asks alerts to expire once their issue is resolved and to say when a device recovers by itself (Kenderova and Neusesser 2026). Linear sends a notice to the desktop app or browser people are active in (Linear Docs, "Notifications"; convention).
- **Applies when:** a product can send many notices of one kind, notices about a state that can end, or notices to more than one device.
- **Check:** cause the same kind of event 30 times in a few minutes: 30 separate notices, not grouped by the product or the system, fail, unless each needs its own answer. Leave a routine notice unanswered for a day: a second copy fails. Read a notice on the desktop: the same notice still sounding on the phone fails. Cause a warning, then fix its cause: a warning that stays fails, and so does no word when something recovered by itself.
- **Fail:**
  - "Motion detected" 99 times in one night;
  - a "Server down" entry still in the inbox after the server came back.
- **Pass:**
  - "30 new comments on Q3 plan";
  - "Camera back online at 09:42", after the outage notice;
  - a reminder people set themselves, sent again as they asked;
  - a glucose monitor's urgent-low alarm that repeats every few minutes until answered.

## The list and badges

### 4. A notification center keeps what people may need again, and never the only copy of what needs action now

A product that sends many notices, or whose notices people come back to, keeps them in one list, newest first within each group, with unread ones marked. Each entry opens its item and can be marked done, and a cleared or done entry can still be found. Something that needs action now never waits only in the list: it also shows where people are working.

- **Why:** Carbon suggests a notification panel, in guidance it calls provisional, for people who get many system notices or need to look back at them, in time order (Carbon, "Notifications"). PatternFly lists notices newest first, keeps unread ones marked until people act on them, clears an entry from the drawer without deleting it from the system, and never uses its drawer as the only place for events that need action now (PatternFly, "Notification drawer"). GitHub's Done takes a notice out of the inbox and keeps it for three months (GitHub Docs, "Managing notifications from your inbox"; convention).
- **Applies when:** a product sends many notices, or notices people come back to.
- **Check:** open the list: entries out of time order within their group, unread ones not marked, or no way to mark one done, fails. Clear an entry: no way to find it again fails. Cause an event that needs action now: one found only in the list fails.
- **Fail:** "Payment failed: update your card" only in the inbox, while people keep working in the editor.
- **Pass:**
  - the same notice as a banner above the editor, and as an inbox entry that opens the billing page;
  - a bank app whose list of payments already keeps what each notice was about.

### 5. Badges go only on what needs people, and never carry the only warning

A badge, a dot or a count on a tab, a bell or an item marks only what is new to people or needs them, such as unread notices or tasks waiting on them, never a routine total. A badge is never the only way people learn something important.

- **Why:** Apple uses badges only for unread notifications, keeps them for information that matters so they keep their meaning, and warns that people can turn badges off, so a message carried only by a badge can be missed (Apple, "Notifications"; Apple, "Tab bars"). PatternFly finds that an unread mark that is there most of the time stops working (PatternFly, "Notification badge"), and NN/g finds that people can't tell what matters when every alert looks the same (Kenderova and Neusesser 2026).
- **Applies when:** a product shows badges, dots or counts on tabs, icons or items.
- **Check:** list every badge on the main screens: one on a routine total, such as the number of reports, fails. For each important event, find where else it shows: one shown only as a badge fails.
- **Fail:**
  - badges on Settings, Help and Reports;
  - a card about to expire shown only as a dot on the avatar.
- **Pass:**
  - one number on the inbox;
  - the expiring card also in a banner on the billing page and in an email;
  - an unread count on each conversation in a chat app, where people go by those counts.

## People's choices

### 6. Asking to send notifications comes when people want them

The product asks for permission to notify only when people turn on, or start to use, something that needs it, and says first what it will send. It never asks on first launch or on page load, before people reach anything that needs it; in a product whose main job is to alert, such as a doorbell camera or a glucose monitor, setting up the alerts is that moment, and it says why first.

- **Why:** a browser keeps a permanent "no" until people change it themselves, so web.dev asks products to request a permission after a user action, with the reason clear, and never on page load (Harbach and Steiner 2024). Apple asks during onboarding only for what the app needs before it can work, and shows why first (Apple, "Onboarding"), and the App Store doesn't let an app require push notifications in order to work (App Store Review Guidelines, 4.5.4).
- **Applies when:** a product sends push or browser notifications.
- **Check:** open the product fresh, as a new account: a permission prompt before any action fails, unless setting up alerts is the product's first step. Turn on a feature that notifies: no word on what it will send, before the system's prompt, fails.
- **Fail:** the browser's "Allow notifications?" on the first page load of a blog.
- **Pass:**
  - after checkout, "We'll tell you when your order ships", then the system's prompt;
  - a doorbell camera that asks while people set it up, after saying it can't alert them otherwise.

### 7. People choose what they are told, and where, inside the product

Inside the product, people choose which kinds of notice they get and on which channel, and can pause any that isn't critical. By default, the product sends only what it is for. Marketing is its own kind, off until people turn it on. An email that gathers notices holds only what people haven't seen in the product yet.

- **Why:** Apple asks for notification settings inside the app, and for explicit agreement before marketing notifications (Apple, "Managing notifications"). The App Store allows promotions by push only after people opt in on the app's own screen, with a way there to opt out (App Store Review Guidelines, 4.5.4). NN/g sends by default only alerts about the product's core purpose, and found that a participant couldn't separate sales alerts from motion alerts (Kenderova and Neusesser 2026). Carbon asks for notification preferences, and Android puts every notification in a channel people can change at any time (Carbon, "Notifications"; Android Developers, "Notification channels"). Linear sets each channel separately, and sends an email digest only for what wasn't read in the app (Linear Docs, "Notifications"; convention). WCAG's AAA level lets people postpone or turn off interruptions, except in emergencies (Understanding 2.2.4). In the EU, marketing by email or text message goes to private persons only if they agreed first, except a business's own customers about its similar products, who can refuse when their address is collected and in every message, free and easily; for companies, each EU country sets its own rule (ePrivacy Directive, Article 13). Without that, people receive what they never chose.
- **Applies when:** a product sends notices by more than one channel, or sends marketing.
- **Check:** as a new account, open the notification settings from inside the product: no choice per kind or per channel, or no way to pause what isn't critical, fails. Look at the defaults: marketing on, or in the same kind as product notices, fails; in the EU, marketing email to a private person without a yes, outside the exception for a business's own customers, fails. Read a notice in the product, then wait for the email digest: the same notice in the email fails.
- **Fail:**
  - only "Unsubscribe from all" at the bottom of emails;
  - product news on by default, in the same kind as "Payment failed".
- **Pass:**
  - Settings › Notifications with a row per kind and a column per channel, marketing in its own row, off;
  - a notice the law, the account or people's safety requires, such as a sign-in from a new device, a change to a bank's terms or a glucose monitor's urgent-low alarm, that people can't turn off.
