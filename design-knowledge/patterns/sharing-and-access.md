# Sharing and access

Covers how people let others into what they own, and how access is seen and changed: invitations, access levels, who else can open an item, access that comes from several places, the page people see without access and asking for it, removing someone, access that ends on a date, and moving ownership. Read it for any product where people share items or invite others. Not covered here: the wording of a no-access message, hiding or disabling a control a role can't use, confirming before access is removed, where a link lands, the dates on a wait, whom a setting changes, and handing over what people own before they delete their account, which other guides hold. The problem it solves: people who can't tell who can open their work, open it wider than they meant, lock themselves or others out, or remove someone without knowing what happens to their work.

- These rules are a floor: meeting them all makes a product well made, not yet good.
- **Every product:** holds even when popular products break it, and no product's own rules change it.
- **Current practice:** what research, the design systems of top products and strong designers recommend now. A product's own documented value replaces it.
- **Default:** a starting point for designing, taken from strong designers' practice: a review finding only when a harm can be named.
- **Fail and Pass:** examples. A Pass shows one way to meet the rule, not the only one.

The rules come in four groups: inviting, who can open what, without access, and changing access.

## Inviting

### 1. Pending invitations can be seen and managed

An invitation people haven't accepted yet shows in the members list, or beside it, with its role where roles differ, the date it was sent, and when it ends where it does. Until it is accepted, the people who manage members can change the role, send it again or withdraw it. An invite link that anyone can use shows when it ends, where it does, and can be turned off.

- **Why:** Slack's invitations last 30 days, and owners and admins can send them again; GitHub's end after seven days and can be edited or cancelled any time before they are accepted; and Notion lists a temporary member's pending invitation where people manage members (Slack Help, "Invite new members to your workspace"; GitHub Docs, "Inviting users to join your organization"; Notion Help, "Manage members & guests"; convention). Emil Kowalski tests a list with every status at once, such as invited and expired beside active (Emil Kowalski, "Breaking UI"). Of 48 members lists seen, 30 showed pending invitations somewhere, but only 3 showed the date sent and 3 an action such as Resend (Mobbin survey, 2026, convention).
- **Kind:** Current practice.
- **Applies when:** people invite others by name, email or link.
- **Check:** invite someone, then open the members list: an invitation that doesn't show, or shows with no date sent, fails, and so does one with no role where roles differ, or no end where it has one. As someone who manages members, try to change its role, send it again and withdraw it: one that can't be done fails. Open an invite link's settings: no way to turn it off fails, and so does an end date that doesn't show.
- **Fail:** an invitation that vanishes until accepted. "Invited" with no date and no way to resend.
- **Pass:** "dana@acme.com · Editor · Invited 3 March, ends 10 March · Resend · Withdraw".
- **Not a fail:** a two-person chat app with no members list, where the invitation shows in the chat until it is accepted. An invitation that never ends, with no end date shown.

### 2. An invitation says who, to what, as what and until when, and names the address it's for

An invitation, by email or in the product, names the person who invited, what it is for, the role offered where roles differ, when it ends where it does, and what accepting gives where that is wider than the item named, such as every file in a team. An invitation that only one address can accept names that address, and lets people switch account when they are signed in with another.

- **Why:** inviting to a Figma team gives access to every file and folder in it, so what people accept can be wider than the item the email names (Figma Learn, "Guide to sharing and permissions"; convention). The interfaces plugin's invitation message names who invited and to what (Jakub Krehel, interfaces "better-writing"). GitHub accepts an email invitation only from an account with that verified address, and Google reminds people with several accounts to sign in to the one a file was shared with (GitHub Docs, "Inviting users to join your organization"; Google Drive Help, "Learn more about access to Google files"; convention). An error that doesn't name the address leaves people guessing which account to use.
- **Kind:** Current practice.
- **Applies when:** people invite others to items, teams or workspaces.
- **Check:** read the invitation email and the page it opens, on their own: no inviter, no item, no role where roles differ, or no end date where it ends, fails. Open an invitation while signed in with another account: no word on which address it is for, or no way to switch, fails.
- **Fail:** "You've been invited to join Acme." "Something went wrong" after opening an invite in the wrong account.
- **Pass:** "Sam Lee invited you to edit the Q3 plan folder (12 files). This invite ends 10 March." "This invite is for dana@acme.com. You're signed in as dana@gmail.com. Switch account."
- **Not a fail:** an invite link that any signed-in person may use, which names no address.

### 3. An invite says before it is sent what it changes, and people from outside are marked

Before an invitation is sent, the product says when it adds a paid seat, or makes someone a full member rather than a guest. People from outside the organization are marked wherever they appear, in the share dialog, the members list and the people picker, and sharing with someone outside says so before it is sent.

- **Why:** GitHub needs a free seat before it invites a member on a per-person plan, Slack bills some guests as members, and Notion adds someone on the organization's domain as a member, and billed, rather than a guest, and shows before Invite how each person will be added when people hover over their name (GitHub Docs, "Inviting users to join your organization"; Slack Help, "Understand guest roles in Slack"; Notion Help, "Manage members & guests", "Sharing & permissions settings"; convention). Google marks files open to people outside the organization as External, and lets admins warn people before they share outside; Slack marks guests with a shape beside their names (Google Drive Help, "Share and manage access to files and folders in Google Drive"; Google Workspace Admin Help, "Manage external sharing"; Slack Help, "Understand guest roles in Slack"; convention).
- **Kind:** Current practice.
- **Applies when:** an invitation can change the bill or the kind of account, or a product has an organization with people outside it.
- **Check:** invite someone who would take a paid seat, and someone on the company's domain as a guest: no word before Send on the seat or the kind of account fails. Share with an address outside the organization: no mark in the dialog or the members list, or no word before Send, fails.
- **Fail:** the bill grows by one seat with no word. A partner's address added to a document with nothing to set it apart.
- **Pass:** "Adds 1 seat (€12 a month)" under the field. "dana@other.com · Outside Acme", and "This person is outside Acme" before Send.
- **Not a fail:** a product with a flat price and no organization, such as a family photo library.

## Who can open what

### 4. Each access level says what it allows, including whether it can share

Access levels are few, and each is named by what people can do, such as "Can view" or "Editor", or, where its name doesn't say, has a line on what it allows. Each says whether people with it can share the item or invite others.

- **Why:** Apple asks for few sharing choices, grouped so people understand them at a glance, including whether collaborators can add new people (Apple, "Collaboration and sharing"). Google lets editors share files with others unless the owner turns that off, while Notion lets only Full access share (Google Drive Help, "Share and manage access to files and folders in Google Drive"; Notion Help, "Sharing & permissions settings"; convention). Of 1,050 people's conflicts over shared cloud files, 44% came from sharing, and adding a new person was the most common action behind them (Alhelali et al. 2023), so whether a level can bring in others is a line people need. Of 18 invite dialogs with a visible list of roles, 11 gave a line for each (Mobbin survey, 2026, convention).
- **Kind:** Current practice.
- **Applies when:** a product has more than one access level.
- **Check:** open the list of levels or roles: a role whose name doesn't say what it allows, such as Admin or Maintainer, with no line on it, fails, and so does a level that doesn't say whether it can share or invite.
- **Fail:** "Admin, Maintainer, Member", with no lines.
- **Pass:** "Can edit: change the file and share it with others."
- **Not a fail:** two levels, "Can view" and "Can edit", in a product where neither can share.

### 5. Who else can open an item shows in plain words, narrowest by default, and widening says what it means

The share dialog shows, beside the people who have access, who else can open the item, in a plain phrase such as "Only people invited" or "Anyone at Acme with the link". The choices run from narrow to wide, and a new item starts at the narrowest reach of the place it is made in, unless an admin set another. When people widen access, the dialog says what it means: anyone who gets the link can open it, it can be forwarded, it may need no sign-in, and the product may not know who opened it.

- **Why:** Apple sums up who can do what in a short phrase that opens the options, and Google and Notion name the reach in plain words, from people given access to anyone with the link (Apple, "Collaboration and sharing"; Google Drive Help, "Share and manage access to files and folders in Google Drive"; Notion Help, "Sharing & permissions settings"; convention). OWASP gives each person only the access their work needs, and Microsoft lets admins set a narrower default link while people still choose wider ones (OWASP, "Authorization Cheat Sheet"; Microsoft Learn, "Change the default sharing link type for a site"); defaults shift what people choose (Jachimowicz et al. 2019). Of 1,050 people in a study of conflicts over shared files, 37% were unhappy that files holding private data had been opened to others, a loss that can't easily be undone (Alhelali et al. 2023). Microsoft's "Anyone" links need no sign-in, and their use can't be traced (Microsoft Learn, "How shareable links work in OneDrive and SharePoint"). Of 43 share dialogs seen, 31 showed the reach, and of 10 that looked new, 8 were narrow (Mobbin survey, 2026, convention).
- **Kind:** Every product: where an item is open to more people than those listed, such as anyone with the link or everyone in the workspace, the share dialog says so, since people otherwise open it wider than they meant, and what others have seen can't be taken back. Current practice: a plain phrase on who else can open it; choices from narrow to wide; a new item at the narrowest reach of its place; what widening means, said when people widen.
- **Applies when:** people can share an item with others or by link.
- **Check:** open Share on an item open to anyone with the link, or to the whole workspace: a dialog that doesn't say so fails. Create an item in a private place and open Share: no plain phrase on who else can open it, or a default open to anyone with the link, fails current practice. Widen access to the widest choice: no word on what that means fails current practice.
- **Fail:** a new file open to anyone with the link, with nothing in the dialog to say so.
- **Pass:** "Only people invited" under the people list, with wider choices one step away; after choosing "Anyone with the link", "Anyone with the link can view, without signing in. They can forward it."
- **Not a fail:** a publishing tool where a new post starts as a private draft, and publishing is the job. A new page in a team's shared space, open to the team from the start, with the dialog saying so.

### 6. Access that comes from several places shows where it comes from, and a move that changes it says who gains or loses

Where access comes from several places, such as the person, a group, a parent folder, the workspace or a link, the product shows each person's resulting access and where it comes from. A change that inherited access blocks says where to make it. Moving an item into or out of a shared place says, before the move, who will gain or lose access, and only when someone will.

- **Why:** in a test with 18 research assistants, 6 were unsure whether removing a person or a group took away the access it gave, and one said seeing access by group and by file helped them check for mistakes (Frazier et al. 2025). Notion gives each person the widest access they have from any source, and Google can't give someone less access to a file than they have to its folder, and sends people to the folder instead (Notion Help, "Sharing & permissions settings"; Google Drive Help, "Share and manage access to files and folders in Google Drive"; convention). Moving a file out of a shared drive can give or take away access, and moving a Notion page to the private section removes everyone else's access (Google Workspace Learning Center, "How file access works in shared drives"; Notion Help, "Sharing & permissions settings"; convention). People stop reading a warning they see often (Vance et al. 2018), so the warning names who gains or loses, and shows only when someone does.
- **Kind:** Current practice.
- **Applies when:** access can come from more than one place, or follows where an item sits.
- **Check:** give someone access through a group and directly, then open the list: two rows with different levels and no word on which applies fails. Try to lower access that comes from a folder: no word on where to change it fails. Move a shared item into a private place: no word on who loses access fails, and so does a warning on a move that changes nobody's access.
- **Fail:** three people lose access to a moved page with no word.
- **Pass:** "Can edit (from Design team)"; trying to lower it says "Change it in the Design team folder". "Moving this removes access for 3 people: Ana, Ben and Cy. Move anyway?"
- **Not a fail:** a product with one source of access, with no groups or folders.

## Without access

### 7. People without access can ask for it, from a page that shows their account

A person who opens something they can't see gets a page that says so, offers a way to ask someone who can grant access, best a Request access button, shows which account they are signed in with and a way to switch, or a way to sign in when they aren't, and says what happens after they ask. The request reaches someone who can grant it, says who asks with which account and for what, lets them choose the level, and the answer reaches the person who asked. An action people's role blocks, which they could get by asking, offers that request where they are. Where knowing that an item exists would itself reveal something, such as another team's private project, the page is the same as for an item that doesn't exist.

- **Why:** Google, Notion and Figma let people without access request it from the page, Notion also lets people who can only view or comment ask for edit access from the page, and Google reminds people with several accounts to sign in to the right one (Google Drive Help, "Learn more about access to Google files"; Notion Help, "Sharing & permissions settings"; Figma Learn, "Guide to sharing and permissions"; convention). Carbon suggests the steps to request access on a permissions page, and the UK Department for Education found its no-access pages didn't make it easy to find out how to get access, often after a link someone sent (Carbon, "Empty states"; UK Department for Education 2023). Google sends a request to the file's creator, and to managers when the creator can't share, and lets people be told the answer (Google Drive Help, "Learn more about access to Google files"; Google Workspace Learning Center, "How file access works in shared drives"; convention). HTTP lets a server answer "not found" to hide that a forbidden item exists, and GitHub does this for private repositories (RFC 9110; GitHub Docs, "Troubleshooting the REST API"). Of 10 no-access pages seen, 2 had a Request access button and 3 showed the account (Mobbin survey, 2026, convention).
- **Kind:** Current practice.
- **Applies when:** people can open links or items they may not have access to.
- **Check:** open a link you have no access to, signed in with a second account: no way to ask, no sign of the account or no way to switch fails; signed out, no way to sign in fails. Request access, then answer as the owner: a request that goes to someone who can't grant it, or no answer back to the person who asked, fails. Open another team's private project by its address, where its existence is private: a page that names the project fails.
- **Fail:** "Access denied." and nothing more. A request sent to an owner who left the company.
- **Pass:** "You need access. You're signed in as dana@gmail.com. Switch account · Request access", then "Request sent to Sam Lee. You'll get an email when they answer."
- **Not a fail:** a public service whose access is set by another body, where the page names whom to contact instead of a button.

## Changing access

### 8. A shared item says it is shared, and changes to its access are recorded

Where people work on a shared item, it shows that it is shared and with whom, and opens the list of who has access; an item people outside the organization can open is marked. Changes to who has access, such as someone added, removed or given another role, or a link widened, are recorded where the item's owners can see them.

- **Why:** Apple shows a collaboration button as soon as content is shared, which reminds people it is shared and with whom, and posts notices when the people in it change (Apple, "Collaboration and sharing"). Notion shows the faces of people with access at the top of a page, and Google marks files open outside the organization (Notion Help, "Sharing & permissions settings"; Google Drive Help, "Share and manage access to files and folders in Google Drive"; convention). Researchers asked for indicators and logs that show how data is shared and what changed (Frazier et al. 2025), and 15% of people in a study of conflicts over shared files said someone had acted without their consent, such as adding a person (Alhelali et al. 2023).
- **Kind:** Current practice.
- **Applies when:** people can share items.
- **Check:** open a shared item where people work on it: no sign that it is shared, or no way to the list of who has access, fails. Change someone's access, then look for a record of it as the owner: none fails.
- **Fail:** a document shared with 40 people that looks like a private one.
- **Pass:** three faces and "+37" beside Share, opening the list; "Ana gave Ben edit access, 3 March" in the item's history.
- **Not a fail:** a document shared with a whole company, which says "Everyone at Acme can view" instead of faces.

### 9. Removing someone says first what happens to their work

Before someone is removed, the product says what happens to their access, their work, what they own and the invitations they sent. Work that stays keeps their name. Where the product allows, a removal can be reversed for a stated time.

- **Why:** GitHub's help lists what removing a member does; GitHub cancels the invitations they sent, and keeps their membership for three months so they can be brought back; Slack keeps a removed member's messages and files and can reactivate them; Linear keeps suspended people in the members list beside the issues they made; and Google Workspace deletes a removed person's data unless an admin moves it first (GitHub Docs, "Removing a member from your organization"; Slack Help, "Deactivate a member's account"; Linear Docs, "Members and roles"; Google Workspace Admin Help, "Delete or remove a user from your organization"; convention). Of 23 removal dialogs seen, 4 said what happens to the person's work, and 13 said only that they lose access (Mobbin survey, 2026, convention).
- **Kind:** Current practice.
- **Applies when:** people can remove others from a workspace, a team or an item.
- **Check:** remove a member who made items and sent invitations: no word before removal on what happens to their work and their invitations fails, and so does work the product said would stay vanishing or losing their name afterwards.
- **Fail:** "Remove Dana?" and nothing more, after which her 12 documents disappear.
- **Pass:** "Dana loses access now. Her 12 documents stay, under her name, and 2 invitations she sent are withdrawn. You can restore her within 30 days."
- **Not a fail:** a one-line confirmation for removing a guest who only viewed one page. A sales tool that gives a leaver's records to the person taking over their accounts, and says so first.

### 10. Access that ends on a date shows the date, warns before it ends, and can be extended

Access, or a link, that ends on a date shows the date beside the person or the link, with the time and its zone, or in the reader's own zone, where people may be in another zone. People are reminded a few days before it ends, and the date can be changed.

- **Why:** Slack reminds a guest and the admin who set the date five days before the guest's account ends, and the date can be extended; Notion shows a temporary member's end date in the members list; and a Dropbox link ends at midnight in its creator's time zone, which people in another zone can misread (Slack Help, "Understand guest roles in Slack"; Notion Help, "Manage members & guests"; Dropbox Help, "How to set or change shared link permissions"; convention).
- **Kind:** Every product: an end time shown to people in another zone names its zone or is shown in theirs, since otherwise they act on the wrong day or hour. Current practice: the date beside the person or the link; a reminder before it ends; a way to change it.
- **Applies when:** access or links can end on a date.
- **Check:** give access that ends in a week, and read its end as someone in another zone: a time with no zone, and not in the reader's zone, fails. No date beside the person, no reminder before it ends, or no way to change it, fails current practice.
- **Fail:** a contractor's access that stops with no date shown and no warning.
- **Pass:** "Can view until 10 March, 18:00 CET · Change", and a reminder three days before.
- **Not a fail:** a link for a quick look that ends in an hour, with no reminder.

### 11. Ownership is never left empty, and moving it waits until it is done

What people own is never left with no one to run it: the last owner can leave, be removed or lose the owner role only once someone else is owner, the product names one by a rule it states, or an admin above it can still run it; otherwise the way out is to delete it. A change to one's own role, or leaving, says first what one will lose, and one's own row is marked. Moving ownership of an item keeps the old owner in a stated role, can be cancelled until it is done, waits for the new owner to accept unless the move stays inside one organization, and keeps links working.

- **Why:** GitHub recommends at least two owners, since projects with one can become unreachable, and Slack can't deactivate its primary owner until ownership moves (GitHub Docs, "Maintaining ownership continuity for your organization"; Slack Help, "Deactivate a member's account"; convention). Emil Kowalski tests a members list for the current person's "You" label and for actions that shouldn't apply to oneself (Emil Kowalski, "Breaking UI"). Google keeps the old owner as an editor after a move and lets a personal account's move be cancelled until the new owner accepts, while a work account moves ownership only to someone in its organization, with no acceptance step; GitHub waits for a personal account to accept a moved repository, and sends its old address on to the new one (Google Drive Help, "Make someone else the owner of your file"; GitHub Docs, "Transferring a repository"; convention).
- **Kind:** Every product: the last owner can't leave, be removed or lose the owner role unless someone else becomes owner, the product names one by a stated rule, someone above it can still run it, or what they own is deleted, since otherwise no one can run what is left. Current practice: a word on what one loses before changing one's own role; one's own row marked; a pending move that can be cancelled, waits for the new owner to accept unless it stays inside one organization, keeps the old owner in a role, and keeps links working.
- **Applies when:** a product has owners of workspaces or items.
- **Check:** as the only owner, with no admin above you, try to leave or make yourself an editor: a product that lets you, and leaves no owner, fails. Change your own role: no word on what you'll lose fails current practice. Move ownership of an item to a personal account: an item that moves at once, or an old owner locked out, fails current practice.
- **Fail:** the only owner leaves, and no one can change the billing or add people.
- **Pass:** "Make someone else owner before you leave." "Waiting for Dana to accept · Cancel"; afterwards, "You can edit".
- **Not a fail:** a move of a leaver's files to their manager inside the same organization, with no acceptance step. A group chat that makes another member admin when the last admin leaves, and says so.
