# Creating, editing and deleting

Covers how people make, change and remove the things a product holds: where creating happens and what follows it, drafts and unpublished changes, editing in place, two people editing the same thing, version history, copies, and deleting, from the trash to deleting for good. Read it for any product where people create, edit or delete things. Not covered here: one page or steps for a form, how a form saves, unsaved changes, asking only for what's needed, defaults, undo and confirmation, focus after a deletion or when a dialog closes, named states with a way back, what an action does to related things, editing in a table, and settings that delete a whole workspace, which other guides hold. The problem it solves: people who can't find what they just made, lose work they thought was kept, overwrite each other, or can't get back what they deleted.

- These rules are a floor: meeting them all makes a product well made, not yet good.
- **Every product:** holds even when popular products break it, and no product's own rules change it.
- **Current practice:** what research, the design systems of top products and strong designers recommend now. A product's own documented value replaces it.
- **Default:** a starting point for designing, taken from strong designers' practice: a review finding only when a harm can be named.
- **Fail and Pass:** examples. A Pass shows one way to meet the rule, not the only one.

The rules come in four groups: creating, drafts, editing, and deleting.

## Creating

### 1. Creating happens where it fits, and ends on what was made

Where people create something depends on how much they enter and what they need to see. A field or two is created in place, and a handful of fields that people fill without looking elsewhere, in a dialog. A short form for which people need the page behind it goes in a side panel, and a long form, a weighty choice, or work that should survive a refresh gets a page of its own. Where defaults cover everything and the new item is cheap to throw away, creating takes one click. Afterwards, people see what they made: a create on a page opens the new thing, a create in place puts focus on the new item, and after a dialog or a panel the new item is in view, or a message names it, with a link. A dialog that just closes isn't enough.

- **Why:** Primer creates in place when a field or two is enough, in a dialog for a handful of fields, and on a page for consequential choices or work that should survive a refresh. It takes people to what they made, or shows it in place and puts focus on it, never lets a dialog closing be the only sign it worked, and offers one-click creation where defaults cover everything and the item is cheap to throw away (Primer, "Create"). Carbon keeps dialogs for short tasks and sends people to a page when they need information outside the dialog, and Cloudscape fills a create form with good defaults, so people can create without changing anything (Carbon, "Dialogs"; Cloudscape, "Single page create"). Agriculture adds a record in a side drawer for a short form and a side page for a longer one, then returns people to the table with the record in it and a success message above it (Agriculture Design System, "Create, read, update and delete data in tables"). Of 19 products seen creating a project, 10 used a dialog and 9 a page (Mobbin survey, 2026, convention).
- **Kind:** Current practice. Default: a dialog for up to a handful of fields; a page beyond that.
- **Applies when:** people create things in a product.
- **Check:** for each create action, note how many fields it has, and whether people need the page behind it or should keep their work through a refresh. Then create one of each and watch where the new thing appears and where focus goes: a dialog that closes with no sign of the new item, or a new item sorted out of view with no message, fails.
- **Fail:** a 20-field "New customer" in a dialog that closes on a click outside it. A "New task" dialog that closes and leaves the board unchanged in view, with the task sorted to the bottom.
- **Pass:** "New label" as a row in place; "New project" on its own page, opening the project; "New task" in a side panel beside the board, then "Task created: Fix login · View" above the board.
- **Not a fail:** a quick-add field in a list that adds the item where people typed it, with no message. A form for adding many items in a row, such as with "Create more" turned on, that clears itself and says what was made, with a link to it. An email that closes on Send, with "Message sent · View message".

## Drafts

### 2. Work worth keeping is kept as a draft, and people can find and resume it

While people create or edit something that takes more than a moment, the product keeps their work as a draft without a Save. People can find their drafts in one place. Opening an item that has a draft of changes offers to resume the draft or discard it, and says when it was saved; opening the draft itself just opens it. A new item people never changed is dropped when they leave, since it holds no work and would fill lists with empty items, and an item with no name yet carries a placeholder that says so, such as "Untitled".

- **Why:** Apple asks products to keep people's work unless they cancel or delete it, saving as they go rather than waiting for Save, and names a new document "Untitled" until people name it (Apple, "File management"). SAP saves a draft every 20 seconds and keeps it if an edit is interrupted. People who open a record that has a draft are asked whether to resume or discard it, with the date it was saved, while opening the draft itself goes straight to editing, and discarding a draft people never changed deletes it without asking (SAP Fiori, "Draft Handling"). Confluence lists each person's drafts in one place (Atlassian Support, "Create, edit, and publish a page", convention).
- **Kind:** Current practice.
- **Applies when:** people create or edit things that take more than a moment, such as documents, posts, messages or long records.
- **Check:** start a long item, close the tab, and come back through the item's link and through the list: work that is gone, or kept but nowhere to be found, fails. Edit a live item, leave, and open the item again: no choice to resume or discard the draft fails. Open a new item and leave it untouched: an empty item left behind in the list fails.
- **Fail:** a half-written post lost when the browser closed. A list full of empty "Untitled" items made by mistake.
- **Pass:** "Draft from 9 Nov, 14:20 · Continue · Discard", and a Drafts list.
- **Not a fail:** a rename field, or a two-minute form, that keeps no draft. A document that saves every change to itself, with no separate draft.

### 3. A draft shows who can see it, and changes to something live wait, marked, until published

A draft says who can see it, and a personal draft, such as a post or a message, starts private to its author until they share or publish it. Where people edit something already live, such as a published page or an email template in use, their changes wait until they publish. The item shows that it has unpublished changes, in its editor and in lists, and people can preview the result, see what changed, publish, or discard the changes and go back to the live version.

- **Why:** a new Confluence draft is visible only to its author, but unpublished changes to a published page are visible to every editor of it. People who assume those changes are private can leave half-written text where colleagues read it (Atlassian Support, "Create, edit, and publish a page", convention). Writers often prefer to work in private first and share later (McKelvey et al. 2023), while in team content tools such as Contentful and WordPress, drafts are open to everyone with access to the space or the right role (Contentful, "Entry editor sidebar overview"; WordPress Documentation, "Post Status"; convention). SAP shows a switch between the draft and the live version beside the title, and asks before it discards all changes (SAP Fiori, "Draft Handling"); Contentful marks an entry with unpublished changes as Changed, in a status column that can't be hidden from lists (Contentful, "Create content views", convention).
- **Kind:** Every product: a draft, or unpublished changes, that others can see says so where people write it, and an editor where Save doesn't make changes live shows that they wait for Publish, since otherwise people show others what they didn't mean to, or take for live what isn't. Current practice: a personal draft private at first; the mark in lists; preview, see what changed, and discard the changes.
- **Applies when:** a product keeps drafts, or keeps a live version and a pending one of the same thing.
- **Check:** from a draft's screen alone, say who can see it now: one that can't be told fails. Edit a live page: an editor that doesn't show that the changes wait for Publish fails. Leave it, then open its list: a page shown as plainly "Published", or no way to drop the changes other than undoing each one, fails current practice.
- **Fail:** unpublished edits to a published help page that every editor sees, with no word on the page.
- **Pass:** "Draft · Only you can see this" beside the title; in the list, "Published · Unpublished changes"; in the editor, "View changes", "Publish" and "Discard changes".
- **Not a fail:** a shared document where every edit is live at once, with no published version. A team's content tool whose drafts every editor sees, and which says so.

## Editing

### 4. An edit in place is one at a time, and Cancel puts back the old value

On a page where people edit several things one by one, only one edit is open at a time. An edit that waits for Save has a visible Cancel that restores the previous value, and Escape does the same; throwing away an edit people have put work into asks first.

- **Why:** Primer allows one edit open at a time on a page where people edit several things separately. It gives every edit a visible Cancel that restores the previous value, with Escape doing the same, and asks before it throws away an edit people have put work into, since otherwise the only way out is to save and undo, or reload (Primer, "Edit").
- **Kind:** Current practice.
- **Applies when:** people edit values in place, outside a table or a spreadsheet.
- **Check:** open two edits in place on one page: both open at once fails. Change a value and press Cancel; change another and press Escape: a half-typed value that stays fails. Type a paragraph into an edit and press Escape: work thrown away without asking fails.
- **Fail:** three open fields on a profile, each with its own Save. Cancel that keeps the half-typed title.
- **Pass:** opening a second edit closes the first, keeping its value or asking; Cancel puts the old title back.
- **Not a fail:** a spreadsheet, where every cell is open to edit at once. A field that saves on Enter or click-away and can be undone, such as an issue's title.

### 5. Two people editing the same thing never overwrite each other without a word

Where two people can edit the same thing, a save never writes over someone else's newer change without telling them. A product does this one way or another: everyone edits live and sees each other's changes as they type; one person holds a lock that others can see, with its holder's name and since when; or a save checks whether the thing changed since it was opened, and if it did, shows both versions and keeps the person's input. People see who else is in the thing now, near its title or Share. In an editor several people use at once, Undo undoes the person's own last change, not anyone's.

- **Why:** HTTP's conditional requests exist to stop one person overwriting another's work (RFC 9110). SAP locks a record while one person edits it, shows the lock with the holder's name, warns whoever takes it over, and tells the first person when they next save; WordPress names who is editing a post and asks before people take over; MediaWiki detects a conflict at save and shows both versions; and Dropbox keeps a second version as a conflicted copy named with its author (SAP Fiori, "Draft Handling"; WordPress Developer Resources, "_admin_notice_post_locked()", convention; MediaWiki, "Help:Edit conflict", convention; Dropbox Help, "What's a conflicted copy?", convention). In a study of 14 people working in a shared notebook, 13 couldn't find that a collaborator's change caused their wrong result, and 12 blamed themselves (Wang et al. 2024), so people need to see who else is working there. Confluence shows the people editing a page now in color, and those who edited and left in gray (Atlassian Support, "Create, edit, and publish a page", convention), and Apple places the button that shows who shares a document next to Share (Apple, "Collaboration and sharing"). Of six shared editors surveyed, five undo only the person's own changes (Stewen and Kleppmann 2024).
- **Kind:** Every product: a save never writes over someone else's newer change without telling at least one of them, since otherwise people lose work they think is saved. Current practice: who else is in the item shown near its title or Share; a lock that names its holder and since when; Undo that undoes the person's own change.
- **Applies when:** more than one person can edit the same thing.
- **Check:** open one record in two accounts, change the same field in both, and save both: the second save replacing the first with no word fails. Open a shared item in two accounts: no sign of the other person fails current practice. In a shared editor, make a change in each account, to different things, and press Undo in one: the other person's change undone fails current practice.
- **Fail:** two people edit a customer's address at once, and the second save silently wins.
- **Pass:** "Ana changed this record at 14:02 after you opened it", with both values, "Keep mine" and "Keep Ana's". "Locked by Ana since 14:02 · Take over".
- **Not a fail:** a product with one person per account, where no one else can edit.

### 6. Version history shows who changed what and when, and a restore keeps the later versions

A thing people edit over time keeps its versions, each with when it was made, by whom where more than one person edits, and what changed. People can name a version, view it, copy from it and restore it. A restore adds the old version as the newest one, so later versions stay and the restore can be undone. History says how far back it goes, where it has a limit, since people who can't see the limit believe older versions are still there, and a restore says before it runs what it won't bring back.

- **Why:** Notion highlights what changed and who changed it, previews what a restore will affect, and keeps history for 7, 30 or 90 days by plan; Figma shows each version's main contributor and makes restoring non-destructive; and Google Docs restores a version, makes a copy of it, or names it (Notion Help, "Delete & restore content"; Figma Help, "View a file's version history"; Google Docs Editors Help, "Find what's changed in a file"; convention). Of 22 version histories seen, 17 showed who made each version and 17 had Restore, while 3 marked what changed (Mobbin survey, 2026, convention).
- **Kind:** Current practice.
- **Applies when:** people edit documents, designs, pages or other things over time.
- **Check:** restore an old version, then look for the version you were on: gone fails, and so do versions shown with only a time where several people edit. On a plan with a limit, look for how far history goes: no word fails. Restore something whose restore brings back only part of it: no word before it runs fails.
- **Fail:** a restore that deletes every later version. Versions older than 7 days silently missing.
- **Pass:** "Ana · 9 Nov 14:20 · 3 changes", with the changes marked; after a restore, a new entry "Restored version from 2 Nov", and the earlier one still listed. "History goes back 30 days on your plan."
- **Not a fail:** a record such as a contact, edited one field at a time, with a log of field changes instead of versions. A personal notes app whose versions show only times, since one person makes them all.

### 7. A copy is named as a copy, and says what it leaves out

"Duplicate" makes an independent copy, named or placed so it can't be mistaken for the original, such as "Copy of Q3 plan". Where a copy leaves things out, such as comments, sharing or history, it says so before people make it.

- **Why:** Figma names a duplicated page with "Copy of", and a copy of a past version leaves out comments and history, as does a copy made from the trash, which also leaves out sharing; Google Docs asks for a name and a place for a copy and offers to copy comments (Figma Learn, "Create and manage pages"; Figma Help, "View a file's version history", "Delete and restore files"; Google Docs Editors Help, "Create, view, or download a file"; convention). Of 9 copies whose names could be seen, 5 were "Copy of X" (Mobbin survey, 2026, convention).
- **Kind:** Current practice.
- **Applies when:** people can duplicate named things, such as files, pages or projects.
- **Check:** duplicate a shared file with comments: a copy that can't be told from the original, or that drops sharing or comments with no word, fails.
- **Fail:** two files called "Q3 plan", one of which lost its sharing.
- **Pass:** "Copy of Q3 plan" beside the original, and "Comments and sharing aren't copied" in the dialog.
- **Not a fail:** a duplicated row in a table of line items, which is simply a second line. A fork under another owner, or a duplicated layer on a canvas, which keeps the name.

## Deleting

### 8. Deleted things wait in a trash for a stated time, and come back where they were

Deleting most things moves them to a trash people can find, with Restore and Delete forever, which asks first. The trash keeps things for a stated time, or until people delete them, as it says, and shows for each item where it came from and, where the time is limited, when it will be gone. Restore puts it back where it was, with its sharing and history, and where that place is gone, says where it will go. A delete dialog for something that goes to the trash says it can be restored, not that it can't be undone. Where people delete to protect their privacy, deleting for good says what the product still keeps, such as backups, and for how long. Thirty days in the trash is the default.

- **Why:** Google Drive, Gmail, Apple Photos, Notion and Linear keep deleted items for 30 days, Figma keeps them until someone restores them or deletes them for good, and Pajamas's delete dialog says until when a project can be restored; Dropbox restores files to the folder they came from, and Figma restores a file with its sharing, comments and history (Google Drive Help, "Delete files in Google Drive"; Gmail Help, "Delete or recover deleted Gmail messages"; Apple Support, "How to recover deleted photos on your iPhone, iPad, Mac, or Apple Vision Pro"; Notion Help, "Delete & restore content"; Linear Docs, "Delete and archive issues"; GitLab Pajamas, "Destructive actions"; Dropbox Help, "How to restore or recover deleted files or folders in Dropbox"; Figma Help, "Delete and restore files"; convention). Of 20 smart-speaker users interviewed, 16 wanted more information about a deletion, such as what was kept or how it was deleted (Cheng and Ramokapane 2025). Of 25 trash views seen on the web, 12 said how long items stay and 2 when each would go; of 22 delete dialogs, 15 said the deletion couldn't be undone and 3 mentioned a trash (Mobbin survey, 2026, convention), so many say it can't be undone where a trash may stand behind them.
- **Kind:** Current practice. Default: 30 days in the trash.
- **Applies when:** people can delete things they or others may want back.
- **Check:** delete an item from inside a folder, then look for where it went: no trash, or a trash that says neither when items go nor that they stay until deleted, fails. Restore it: an item that comes back somewhere else, or without its sharing, with no word, fails. Read the delete dialog for something that goes to the trash: "This can't be undone" fails. Delete something for good where people delete to protect their privacy: no word on what is still kept fails.
- **Fail:** "Delete this page? This can't be undone." for a page that goes to a trash for 30 days.
- **Pass:** "Moved to Trash. You can restore it for 30 days"; in the trash, "From: Marketing / Q3 · Deleted for good on 9 Dec"; after Restore, the page back in Q3 with its sharing. On a phone, "Recently Deleted · 29 days left" under a photo.
- **Not a fail:** a leaked API key or a message sent by mistake, deleted at once and for good, since keeping it keeps the harm.

### 9. Remove and Delete say which they are, and who loses the thing; Archive keeps it, Trash doesn't

"Remove" takes a thing out of one place, or out of the person's own view, while it still exists. "Delete" takes it away, to the trash or for good: for everyone, or, where each person has their own copy, as with email, for that person. On something shared, the action says whether others lose it too. Archiving keeps a thing on purpose and out of the way. An archived thing is hidden from default views, and often from search, but stays reachable by its link, can be restored, and is never deleted by a timer; the trash holds a thing for a time and then deletes it. A product never calls one by the other's name.

- **Why:** Primer says "Remove" when a thing still exists elsewhere and "Delete" when it is destroyed, and Carbon warns that removing can be mistaken for deleting (Primer, "Delete"; Carbon, "Common actions"). Google Drive lets people with access keep a trashed file until it is deleted for good, while Figma's trash removes a file for every collaborator at once (Google Drive Help, "Delete files in Google Drive"; Figma Help, "Delete and restore files"; convention), so the word "Trash" alone doesn't tell people who loses it. Notion keeps an archived page out of search with its links still working, Contentful's archived content never expires, and Slack keeps an archived channel's history, searchable on paid plans, while it deletes a deleted channel for good (Notion Help, "Delete & restore content"; Contentful, "Entry editor sidebar overview"; Slack Help, "Archive or delete a channel"; convention).
- **Kind:** Every product: on something shared, the action says whether others lose it too, since otherwise people take away others' work without meaning to. Current practice: Remove, Delete and Archive each used for what it does; an archive never emptied by a timer.
- **Applies when:** a product has actions that remove, delete or archive things.
- **Check:** on a shared item, read each action and say whether others keep it: one that doesn't say fails. Archive an item, wait past the trash's time, and look for it, then follow an old link to it: gone fails current practice.
- **Fail:** "Delete" that only takes a file out of my list. "Move to Trash" that removes a file for 14 people with no word. "Archive" that deletes after 30 days.
- **Pass:** "Remove from my files (others keep access)"; "Move to Trash · 14 people will lose access". An "Archived" banner with Unarchive, and the item's link still working.
- **Not a fail:** a personal notes app with no sharing, where "Delete" moves a note to the trash.

### 10. After deleting the thing a page is about, people land where it was listed

When people delete the thing the current page is about, they land on the list or the place it belonged to, where it is gone, with a way to undo or to find it in the trash, and the result reaches screen readers. Where people delete one item after another from a detail view, as in an email client, the next item may open instead.

- **Why:** Primer sends people to the parent page, such as the list, when a deletion removes the page's own item, always announces the result to screen readers, and offers a window to undo what can be reversed rather than a prompt up front; Carbon returns people to the page that lists the deleted data (Primer, "Delete"; Carbon, "Common actions"). A result that appears without moving focus reaches screen readers only when it is announced (WCAG 2.2, 4.1.3).
- **Kind:** Every product: a result message that appears without taking focus reaches screen readers (WCAG 2.2, 4.1.3), since otherwise people who can't see it don't know the deletion worked. Current practice: landing on the list or place the item belonged to, with a way to undo or to find it in the trash.
- **Applies when:** people can delete an item from its own page.
- **Check:** delete an item from its own page: a result that screen readers don't hear fails. A blank page, an error or "Not found" fails current practice.
- **Fail:** "404: page not found" right after deleting a project.
- **Pass:** the projects list, without the project, and "Deleted 'Q3 plan'. Undo".
- **Not a fail:** an email client that opens the next message after a deletion.
