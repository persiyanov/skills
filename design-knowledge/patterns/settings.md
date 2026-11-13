# Settings

Covers the settings area of a product: what belongs in it, how it is grouped and found, whom each setting changes, where settings that can break things for others go, and how people pick colors for what they own. Read it for any product with settings or preferences. Not covered here: whether a change saves at once or waits for Save, defaults, a control people can't use and why, a theme or motion setting that follows the system, notification settings, deleting an account, and the wording of a confirmation, which other guides hold. The problem it solves: people who can't find a setting, change it for everyone when they meant only themselves, or break something for others without warning.

### 1. Settings hold what people change rarely, and work with the system's own settings

The settings area holds general options people change rarely, and opens the way the platform expects, such as Command-Comma on a Mac, even when people are signed out. Options for the screen people are on, such as filters, sort or the columns shown, are on that screen, and an action people take often is never only in settings. Where settings sit on many pages, a feature links straight to its own section. A setting the system already offers, such as text size or reduced motion, isn't repeated in the product unless the product adds to it, and then it starts from the system's choice. A setting that a system setting blocks, such as alerts the phone has turned off, says so and opens that system setting.

- **Why:** Apple puts general settings people change rarely in the settings area, keeps options that show, hide, sort or filter the current view in the screens they affect, asks for as few settings as possible, and notes that people open settings with Command-Comma (Apple, "Settings"). Android keeps frequent actions out of settings, beside the feature they affect, avoids repeating what the device's own settings offer, keeps settings reachable when people are signed out, and explains a setting that depends on a system setting, with a way to that setting (Android Developers, "Settings"). Pajamas links from a feature's page to its settings, so people find them (GitLab Pajamas, "Settings management").
- **Applies when:** a product has settings or preferences.
- **Check:** list every setting. One that changes only the current view and is found only in settings, an action people take every day found only there, or a copy of a system setting that ignores the system's choice, fails. Where settings sit on many pages, open each feature that has settings of its own: no link to its section fails. Turn off a permission in the system, such as alerts, and open the product's setting for it: a setting that still says On with no word on why fails.
- **Fail:**
  - the columns of a table chosen only under Settings › Display;
  - "Export" for a report people send every week, only inside Settings;
  - a text-size slider that starts at its own default and ignores the phone's text size.
- **Pass:**
  - "Columns" on the table itself;
  - on a project's page, "Project settings" opening the right section;
  - "Alerts are off for this app on your phone. Open phone settings";
  - a language setting in the product that starts from the system's language and, on a phone, stays in step with the language the system sets for the app.

### 2. Settings are grouped under plain headings, show their values, and can be searched when they sit deep

Settings are grouped under headings that say what each group holds, in people's words; a group whose heading doesn't make plain what it controls says so in a line. A first group whose items name themselves may go without a heading. Where a setting opens a page of its own, the list shows its current value, and the label that opens the page matches its title. Where settings sit more than one level deep, they can be searched. Splitting settings into pages from about 15 is the default.

- **Why:** Android shows the most used settings with their values, splits 15 or more settings into subscreens, adds search for settings that sit deep, and leaves out a second line where the label says enough; Microsoft groups related settings under one heading, and tucks settings people rarely use into one expandable group (Android Developers, "Settings"; Microsoft, "Guidelines for app settings"). Shopify gives each group a heading and a line on what it controls (Shopify, "Settings"). A value hidden behind a page has to be opened to be known. A heading that names its topic lets people find what they want (WCAG 2.2, 2.4.6). Of 14 business products seen, 3 had search inside their settings (Mobbin survey, 2026, convention).
- **Applies when:** a product has settings or preferences.
- **Check:** open the settings: a heading that doesn't describe its group fails, and so does a catch-all such as "Other" that holds settings with a clearer home; one in the product's internal words fails. In a list that opens onto pages, a setting whose value doesn't show, or a label that doesn't match the page it opens, fails. Where settings sit more than one level deep, find one by its name: no search fails only when the setting can't be found from the headings.
- **Fail:**
  - a group headed "General" that holds only billing;
  - a list that reads "Language ›" and opens a page titled "Localization", with no sign that the language is French.
- **Pass:**
  - "Language: French ›", opening "Language";
  - a search that finds "Week starts on" under "Calendar";
  - six settings on one page with no search;
  - an "Advanced" group that holds only settings people rarely use.

### 3. Each setting shows whom it changes

Before people change a setting, they can tell whether it changes things only for themselves, for a group they belong to, or for everyone in the workspace. Personal settings and shared settings sit in separate, labeled areas. A shared setting says whether it is a default people can change for themselves or a rule they can't, and a setting set somewhere else shows its value, says where it was set, and says whether it can be changed here.

- **Why:** people who can't tell that a setting changes things for others change it for everyone when they meant only themselves. GitLab gives each level its own settings area, and Pajamas asks whether a setting sets a default or enforces one, says when a setting can be overridden, and says when an inherited one can't be changed and why, so people never wonder why they can't change something (GitLab Pajamas, "Settings management"). VS Code keeps personal and workspace settings apart, with workspace settings overriding personal ones (Visual Studio Code, "Settings", convention). Of 14 business products seen, 10 kept personal settings apart from workspace settings, usually under headings such as "Account" and "Workspace" (Mobbin survey, 2026, convention).
- **Applies when:** a product has settings that change things for more than one person.
- **Check:** for each setting, say whom it changes from the screen alone: one that changes things for others and doesn't say so fails. Find a setting an admin set: no word on where it was set, or on whether people can change it for themselves, fails.
- **Fail:** one "Notifications" page that mixes the workspace's defaults with the person's own choices, with no label.
- **Pass:**
  - "Your preferences" and "Workspace settings" in separate parts of the menu;
  - "Default branch: main. Set by your workspace admin", as text, with no control to press;
  - in a family photo library, "Changes this for everyone in the family".

### 4. Settings that can break things for others sit apart, and say what they break

Settings that delete, transfer, make public, or change the address of a whole workspace or project sit together, apart from routine settings, usually low on the page. Each says what it will break, for whom, and whether it can be undone, before people use it, and one that deletes saved data can be undone or asks first. An action on one item in a list, such as removing a member, may sit on that item's row, and still says what it breaks.

- **Why:** Cloudscape asks for extra confirmation where a resource can't be recreated or deleting it could break other systems, and asks the dialog to state the knock-on effects (Cloudscape, "Delete with additional confirmation"). Primer confirms changes with destructive results, and offers a way to undo a risky change after saving (Primer, "Saving"). GitHub keeps deleting a repository in a "Danger Zone" section low on its General settings page (GitHub Docs, "Deleting a repository", convention), and of 27 products seen, 21 put deleting a workspace at the end of a settings page (Mobbin survey, 2026, convention). A new web address breaks the links people saved, unless the old address sends people on to the new one. Deleting saved data with no way back and no question lets one slip lose what people can't get back (WCAG 2.2, 3.3.4).
- **Applies when:** a product has settings that delete, transfer, publish or change addresses.
- **Check:** find every setting that deletes, transfers or makes public a whole workspace or project, or changes an address that old links won't follow: one among routine settings, or one that doesn't say what it breaks and whether it can be undone, fails. Press each one that deletes saved data: one that deletes at once, with no undo and no question, fails.
- **Fail:**
  - "Make workspace public" as a switch among display options;
  - "Change URL" with no word that old links will stop working.
- **Pass:**
  - a last section of the page, set apart, where "Change workspace URL" says "Links people saved will stop working" and asks first;
  - a switch that makes the person's own account public, which first says who will see what and asks;
  - "Remove" beside each member in a members list.

### 5. A color people pick comes from a few chosen options, shown on the thing it changes

Where people who aren't designers pick a color, or a pattern the product draws, for something they own, such as a card, a calendar or a profile, the product offers a few options chosen to work well, shown on the thing itself as people pick, rather than a full picker that lets them make something that looks broken. At most one simple control adjusts the options within limits chosen to look good (default). Text on any color people can pick has a contrast of at least 4.5:1 on the lightest and the darkest choice, or the product sets the text color to keep it.

- **Why:** Interface Craft gave up on a full color picker for cards: even with the text set dark or light by itself, people could make cards that looked bad. It settled on a carousel of chosen color pairs shown on the cards themselves, plus one control that shifts hue, saturation and lightness together, within limits chosen to look good (Interface Craft, "Designing Library Cards"). Text on a color people pick has to keep its contrast on every color they can pick (WCAG 2.2, 1.4.3), or people can make their own text unreadable.
- **Applies when:** people who aren't designers pick colors or drawn patterns for things they own.
- **Check:** open each place where people pick a color: measure text on the lightest and the darkest color they can pick, and a ratio below 4.5:1 fails. A full color picker with no chosen options, for something people see every day, fails.
- **Fail:** a free color picker for a profile header, where white text vanishes on a pale yellow people picked.
- **Pass:** eight chosen color pairs, shown on the card as people swipe, and one "lighter or darker" slider.
