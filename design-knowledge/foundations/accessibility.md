# Accessibility

Covers what screen readers, speech input, switches and other assistive technology get from a web interface: which element each part is, its name, states and values; text alternatives for images and media; structure in the code, and its order; instructions that don't rest on one sense; how forms tie labels, hints and errors to fields; landmarks and headings; and why a scanner or an overlay doesn't stand in for any of this. Not covered here: contrast and color as a cue, text size, spacing, zoom and reflow, target sizes, the keys, focus, announcements, time limits and view changes, sign-in without memory tests, processes that don't ask twice, ways to find a page and its help, how focus looks, content shown on hover, motion and flashing, consistent places and names, the page's language, and the words of labels, headings, links and errors.

- These rules are a floor: meeting them all makes a product well made, not yet good.
- **Every product:** holds even when popular products break it, and no product's own rules change it.
- **Current practice:** what research, the design systems of top products and strong designers recommend now. A product's own documented value replaces it.
- **Default:** a starting point for designing, taken from strong designers' practice: a review finding only when a harm can be named.
- **Fail and Pass:** examples. A Pass shows one way to meet the rule, not the only one.

Every product meets WCAG 2.2 Level A and AA, also the international standard ISO/IEC 40500:2025 (W3C, "WCAG 2.2 Approved as an ISO Standard"). Laws point to it or to its earlier versions: EU consumer services such as online shops and banking, except those run by microenterprises, since 28 June 2025, at WCAG 2.1 AA until the standard's WCAG 2.2 version, published in September 2026, is cited in the EU's Official Journal (Directive (EU) 2019/882; AccessibleEU, "EN 301 549 has been updated"); US state and local governments from 26 April 2027, or 2028 for smaller ones, at WCAG 2.1 AA (DOJ, "Extension of Compliance Dates"); UK public sector sites, monitored against WCAG 2.2 AA since October 2024 (Cox 2024).

The rules come in three groups: rules for every level, then rules for components (a form field and a media player) and pages (landmarks and headings).

## Every level

### 1. Each part is the element that does its job, and ARIA fills only the gaps

A button is a `<button>`, a link an `<a href>`, a choice of one a set of radio buttons or a `<select>`, and a modal dialog a `<dialog>` opened with `showModal()`. Browsers give these their role, states and keys for free. ARIA is for what HTML has no element for, such as tabs, a tree or a combobox that filters, and a part that takes an ARIA role gets its whole pattern: every state it can be in, kept up to date, and its keys. Site navigation is a list of links, not an ARIA menu. Nothing is inside `aria-hidden` while it has focus.

- **Why:**
  - A role promises its pattern's keys and states, so ARIA without them gives screen reader users a control that doesn't do what it announces: no ARIA is better than bad ARIA, and ARIA that conflicts with an element's own meaning is not allowed (WAI-ARIA APG, "Read Me First"; W3C, "ARIA in HTML"). 22% of the ARIA menus on home pages added barriers (WebAIM 2026, "The WebAIM Million"). Menus, tabs and dialogs that don't behave as expected were screen reader users' second biggest problem, after CAPTCHAs (WebAIM 2024). An ARIA menu copies an operating system's menu, not site navigation (Roselli 2023, "Be Careful Using 'Menu'").
  - A native dialog opened with `showModal()` makes the rest of the page inert, closes on Escape and returns focus to its opener (MDN, "<dialog>"; web.dev, "Learn HTML: Dialog").
  - A part that takes focus while hidden with `aria-hidden` confuses screen reader users, who reach something that isn't in the accessibility tree; the W3C's test for it assumes the attribute doesn't change as people use the page (W3C, ACT rule 6cfa84).
- **Kind:** Every product: every control exposes its name and role, and the states and values people can set, to assistive technology, and updates them when they change (WCAG 2.2, 4.1.2), since people using a screen reader, speech input or a switch otherwise can't tell what a part is, whether it is on, or how to use it. Native HTML controls used as specified meet this. Current practice: native buttons, links and form controls; ARIA only where HTML has none, with its whole pattern; no ARIA menus for site navigation.
- **Applies when:** always.
- **Check:** open the accessibility tree in the browser's developer tools and select each control: its role matches what it does, and its states change as you use it (expanded, selected, checked, pressed). A `<div>` or `<span>` that reacts to clicks fails. List every `role` attribute: a role on an element that a native button, link or form control could replace fails current practice, and so does a custom widget whose keys don't follow its W3C pattern. Run axe, then Tab to each element it reports as focusable inside `aria-hidden="true"`: one still hidden in the accessibility tree while it has focus fails. One that its script un-hides as it takes focus passes this check; whether a screen reader names it needs a screen reader test.
- **Fail:** a `<div onclick>` styled as a button. A disclosure button whose `aria-expanded` stays "false" when its panel opens. Top navigation marked up with `role="menu"` and `role="menuitem"`.
- **Pass:** a `<button aria-expanded="true">` that shows and hides its panel. Tabs with `role="tablist"`, `role="tab"` and `aria-selected`, moved with the arrow keys.
- **Not a fail:** ARIA that adds what HTML lacks, such as `aria-current="page"` on the link to the current page. A component library's dialog, menu or combobox that follows its W3C pattern. A toast's close button hidden from screen readers until it takes focus, when a screen reader names it as it does, while the toast's text is announced and Escape closes it.

### 2. Every control has a name, and it contains the words people see

A control's visible words are its name: a button's text, a field's label, a link's text. Where nothing visible can name a control, as with an icon-only button, a hidden name says what it does. A name longer than the visible words starts with them: a button that shows "Send" is named "Send" or "Send message", never "Submit". `aria-label` replaces the visible words for assistive technology, so it is kept for parts with no visible words, and it goes through translation with the rest of the product. A `title` attribute is never the only name.

- **Why:**
  - People using speech input say what they see, such as "click Send", so a name without the visible words can't be spoken, and WCAG advises putting them at the start of the name (Understanding 2.5.3).
  - Browsers take a name from `aria-label` before the element's own label or content, and from `title` only when nothing else gives one, so `aria-label` silently hides the visible words (W3C, "Accessible Name and Description Computation 1.2"); the W3C advises visible text first and not relying on `title` (WAI-ARIA APG, "Providing Accessible Names and Descriptions"). Browser translation missed `aria-label` values that were hidden or changed by script (Roselli 2025).
- **Kind:** Every product: every control and link has a name (WCAG 2.2, 4.1.2), and where it shows words, its name contains them (2.5.3), since people using a screen reader hear only the name, and people using speech input must say it. Current practice: the visible words as the name, at its start; `aria-labelledby` where visible words elsewhere can name the control, otherwise `aria-label` or visually hidden text; `aria-label` translated with the product; no `title` as the only name.
- **Applies when:** always.
- **Check:** in the accessibility tree, read the name of every button, link and field: an empty name fails, and so does one without the control's visible words. Each icon-only control's name says what it does ("Close", "Delete invoice"), not what it shows ("X", "trash can"). Search the code for `aria-label` on elements with visible text: a value without that text fails.
- **Fail:** a button that shows "Send" named "Submit message". An icon-only close button read only as "button". A link whose only name is its `title`.
- **Pass:** "Send message" as the name of a button that shows "Send". An icon-only button with `aria-label="Delete invoice"`.
- **Not a fail:** a bold button that shows "B" named "Bold", since a symbol isn't a label (WCAG 2.2, Understanding 2.5.3).

### 3. Every image has the text alternative its job calls for

An image that only decorates, or repeats the text beside it, has an empty alt (`alt=""`) or sits in CSS, so screen readers skip it. An image that informs has a short alt that says what it shows people, in its context. An image that is a link or a button names where it goes or what it does. A chart or diagram has a short alt that names it, with its figures or its point in text or a table on the page. Every `<img>` has an alt attribute: an empty one is a choice, a missing one a defect. Alt text written by AI is a draft a person checks.

- **Why:**
  - A screen reader reads the alt in place of the image, so decoration gets `alt=""`, an image in a link or button names the action or destination, and a complex image gets a long description, best visible to everyone (W3C WAI, "An alt Decision Tree"; "Complex Images"). 10.8% of alt texts on home pages were a file name, "image" or a repeat of nearby text (WebAIM 2026, "The WebAIM Million").
  - Blind and low-vision people rated descriptions written with the page's context higher than ones written from the image alone (Mohanbabu and Pavel 2024), and AI models described images with 70–91% accuracy while making up details in fluent text (Aljedaani et al. 2026).
- **Kind:** Every product: images and other non-text content that inform have a text alternative that serves the same purpose, those that are controls or links name their purpose, and decoration is hidden from assistive technology; a test, media or a sensory experience at least says what it is, and a CAPTCHA says what it is for and comes in a second form for another sense (WCAG 2.2, 1.1.1), since people who can't see the image otherwise miss what it says, or can't use the control. Current practice: alt written for the image's context; a chart's figures in text or a table; AI drafts checked by a person.
- **Applies when:** a page shows images, icons that carry meaning on their own, charts or diagrams.
- **Check:** list every `<img>`, meaningful `<svg>` and CSS image that carries meaning: a missing alternative fails. Read each alt with the text around it: one that names a file or says "image" fails (W3C, Failure F30), and one that repeats that text fails current practice. An image in a link or button whose alt describes the picture instead of the destination or action fails. For each chart, find its point in its alt or in text on the page: missing fails. Its figures missing from text or a table fails current practice. An `aria-label` or `aria-labelledby` on a `div` or `span` with no role is not an alternative: ARIA forbids naming an element with no role (WAI-ARIA 1.2, "generic"), and axe only lists it for review when the element holds text. Meaning held only there fails.
- **Fail:** a product screenshot with `alt="screenshot.png"`. A logo linking home with `alt="logo"`. A revenue chart whose only alternative is "Chart". Five star characters in a `<span aria-label="Rated 4 out of 5">`.
- **Pass:** `alt=""` on an illustration beside a heading that says the same. A linked logo with `alt="Acme home page"`. A revenue chart with `alt="Revenue by month, 2026"` and a table of the figures under "Show data". The same stars in `<span role="img" aria-label="Rated 4 out of 5">`.
- **Not a fail:** decorative icons with `aria-hidden="true"` beside text that says the same. An avatar with `alt=""` next to the person's name.

### 4. Headings, lists, tables, groups and states are in the code, not only in the look

What the look shows, the code says: a heading is a heading (`<h1>` to `<h6>`), a list is a list (`<ul>`, `<ol>`), a table of data has header cells (`<th>`, with `scope` where needed), a set of related fields sits in a `<fieldset>` with a `<legend>`, and states shown by style, such as required, selected, current or invalid, are set in the code too. Tables hold data, never layout.

- **Why:** A screen reader announces a list's length, a cell's headers, a group's name and a field's state only when the code holds them.
- **Kind:** Every product: headings, lists, tables, groups of fields and states that the look shows are also in the code or in text (WCAG 2.2, 1.3.1), since people using a screen reader otherwise hear a run of words with no structure, and can't tell which options belong together or which item is current. Current practice: the native element for each (`ul`, `table` with `th`, `fieldset` with `legend`), and ARIA states such as `aria-current` and `aria-required` where HTML has none.
- **Applies when:** a screen shows headings, lists, data tables, groups of fields, or states marked by style.
- **Check:** find each heading, list, table and group of fields in the accessibility tree: text styled as a heading but not marked as one fails, a list read as plain text fails, a data table with no header cells fails, and a group of radio buttons or checkboxes with no group name fails. For each state shown by style (an asterisk for required, a highlight for the current item, red for an error), find it in the tree: missing fails.
- **Fail:** a list of plans built from `<div>`s, read as one run of text. A required field marked only by an asterisk drawn in CSS, with no `required`, no `aria-required` and no text saying so. The current page in the navigation shown in bold, with no `aria-current`.
- **Pass:** a `<fieldset>` with `<legend>Billing period</legend>` around two radio buttons. `aria-current="page"` on the link to the current page.
- **Not a fail:** a grid of cards built from `<div>`s, when no relationship between them matters. A form that marks only its optional fields, in their labels, and marks nothing as required.

### 5. Instructions and controls don't rest on one sense, one orientation or one movement

Instructions never name a control only by its shape, size, place, color or sound: "Press the round button on the right" also names the button. The page works in portrait and landscape, unless one orientation is the point. Anything done by shaking or tilting the device also has a control, and the motion can be switched off.

- **Why:** People who are blind or have low vision need instructions that don't rely on seeing; some people have their device mounted in one orientation, such as on the arm of a power wheelchair; and some can't hold or move a device steadily (Understanding 1.3.3, 1.3.4 and 2.5.4).
- **Kind:** Every product: instructions don't rely only on shape, color, size, place, orientation or sound (WCAG 2.2, 1.3.3); the view and its use aren't locked to one orientation unless it is essential, as for a bank check, a piano app or slides for a projector (1.3.4); what device or body motion does, a control also does, and the motion can be turned off, unless it works through an accessibility feature or is essential (2.5.4); since otherwise people who can't see the screen, can't turn the device or can't move it steadily can't follow or use the page.
- **Applies when:** a page gives instructions, or runs on phones and tablets.
- **Check:** read every instruction and help text: one that names a control only by its shape, place, color, size or sound fails, unless a place such as "below" follows the reading order and can mean only one thing. Switch orientation on a device or in the browser's device emulation: a page that blocks or breaks in one orientation fails, unless that orientation is essential. Search the code for `deviceorientation` and `devicemotion` handlers: each without a control that does the same, and a way to switch the motion off, fails.
- **Fail:** "Click the green button to continue." A sign-up page that shows "Please rotate your device" in landscape. Shake to undo with no Undo control.
- **Pass:** "Select Continue, under the form."
- **Not a fail:** "the form below", when the form comes next in the reading order and nothing else could be meant (WCAG 2.2, Understanding 1.3.3). A video player that suggests landscape for full screen but works in portrait.

### 6. The code holds the content in the order people need it

The order of elements in the code is the order the content needs: what people need first comes first, a heading before its section, a label before its field. Keyboard and screen-reader users get the content in that order.

- **Why:** Keyboard and screen-reader users get the code order (WCAG 2.2, 1.3.2 Meaningful Sequence and 2.4.3 Focus Order).
- **Kind:** Every product: where the order changes the meaning or how things work, the code holds the content in an order that keeps it (WCAG 2.2, 1.3.2 and 2.4.3). Current practice: the code order is the content's order everywhere.
- **Applies when:** always. The content's order is the order the job needs: what people need first comes first.
- **Check:** read the page in the accessibility tree, or with styles turned off, from top to bottom. An order that changes the meaning, or puts what people need after what they don't, fails.
- **Fail:** a plan's price placed in the code after its Choose button, so a screen reader reaches the button before the price.
- **Pass:** each plan reads name, price, features, then the button, as the card shows them.

### 7. The page itself works with assistive technology; a scanner's score or an overlay doesn't stand in for it

Accessibility is built into the page and checked by using it: with the keyboard alone, with a screen reader, and at 400% zoom. The check covers what third parties put in the page, such as a cookie banner, a chat widget or a payment form, as people meet them on the way. An automated scan runs first and catches repeated mistakes, such as missing names, labels and language; passing it shows only that those are gone. No overlay or widget that promises to fix the page from outside is added: none makes the page meet these rules, and they can clash with people's own tools.

- **Why:**
  - Automated tools cover about a sixth of WCAG's success criteria (Fischer et al. 2025). On one page, a manual review found 37 failures where free tools found 0 to 5 (Roselli 2023, "Comparing Manual and Free Automated WCAG Reviews").
  - Overlays often make access worse for people using assistive technology (Überwachungsstellen des Bundes und der Länder 2025), and the FTC made an overlay vendor pay $1 million and stop claiming, without evidence, that its tool makes sites meet WCAG (FTC, accessiBe order, 2025).
  - The most used pairings are JAWS or NVDA with Chrome, and JAWS with Edge, on Windows, and VoiceOver on iPhone (WebAIM 2026, "Screen Reader User Survey #11").
- **Kind:** Current practice: keyboard, screen reader and zoom checks of the main tasks, with an automated scan as the first pass only; no overlay or accessibility widget.
- **Applies when:** always.
- **Check:** run axe or Lighthouse and fix what it finds. Then go through the main tasks with the keyboard alone, with a screen reader (NVDA or JAWS with Chrome on Windows, VoiceOver with Safari on a Mac or iPhone), and at 400% zoom. Include every third-party part on the way, such as a cookie banner, a chat widget or a payment form: WCAG judges the full page and every step of a process (WCAG 2.2, Conformance 5.2.2 and 5.2.3). Look for an overlay script or a floating accessibility widget from a third party: one present fails. A review with only a browser reports what needs a screen reader to confirm as "needs a screen reader test", never as passed.
- **Fail:** a floating "Accessibility" button added by an overlay script. A release checked only with Lighthouse's accessibility score.
- **Pass:** a release check with an axe run, a keyboard pass of sign-up and settings, and a VoiceOver pass on iPhone.
- **Not a fail:** the browser's and the system's own settings, such as zoom, text size and forced colors. A product's own settings for text size or theme.

## Component

### 8. A field's label, purpose, hint and error are tied to it in the code

Each field's visible label is its name, tied with `<label for>` or by wrapping the field (rule 2). Hints and errors are tied with `aria-describedby`, so they are read when the field gets focus, and a field with an error is marked `aria-invalid="true"` until it is fixed. Fields that ask for the person's own details, such as name, username, password, email, phone, address, birthday or card, carry their `autocomplete` value, so browsers and password managers can fill them. After a failed submit, focus moves to the first error, or to a summary at the top that links to each field.

- **Why:**
  - Some people with cognitive disabilities can't tell a field's purpose from its label alone, and fields the browser fills help people with memory difficulties and dyslexia (Understanding 1.3.5).
  - In tests, a message tied with `aria-describedby` was read reliably as people moved between fields, `aria-errormessage` mostly wasn't, and `aria-invalid` alone sometimes said there was an error but not what it was (Roselli 2023, "Exposing Field Errors"; Cerovac 2024).
  - GOV.UK moves focus to an error summary at the top after a failed submit, links each item to its field, and starts the page title with "Error:" (GOV.UK, "Error summary"; "Validation").
- **Kind:** Every product: each field's label is tied to it in the code (WCAG 2.2, 1.3.1 and 4.1.2); a field that collects the person's own details has its purpose in the code, for the purposes WCAG lists (1.3.5); a detected error identifies its field and is described in text (3.3.1); since people using a screen reader otherwise hear "edit text" with no label and miss the error, and people who find typing hard can't have the browser fill their details. Current practice: hints and errors tied with `aria-describedby`; `aria-invalid` while the error stands; focus on the first error or an error summary after a failed submit, with "Error:" at the start of the title.
- **Applies when:** a page has form fields.
- **Check:** in the accessibility tree, select each field: its name is its visible label, its description holds its hint and, after a failed submit, its error, and `aria-invalid` is true only while the error stands. For each field asking for the person's name, username, password, email, phone, address, birthday or card details, read its `autocomplete` value: missing, wrong or "off" fails. Submit the form empty: focus that moves neither to the first error nor to an error summary fails current practice.
- **Fail:** a label next to a field with no `for` and no wrapping. An error in red under a field that a screen reader doesn't read when it reaches the field. An email field with `autocomplete="off"`.
- **Pass:** `<label for="email">Work email</label>` with `<input id="email" type="email" autocomplete="email" aria-describedby="email-hint email-error">`.
- **Not a fail:** fields about someone else, or a search field, with no `autocomplete` value, since WCAG asks only for details about the person filling the form. A one-field form whose error returns focus to the field.

### 9. Video and audio carry captions and description, and sound never starts by itself

Recorded video with sound has captions that say who is speaking and include the sounds that matter. What the video shows that its sound doesn't say is described in the sound: in the narration ("Open Settings, then Billing") or in an audio description track. Recorded audio alone, such as a podcast, has a transcript, and silent video that informs has a description or transcript. Live video with sound, such as a webinar, has live captions. Automatic captions are corrected before they count. Sound that starts by itself and lasts more than 3 seconds can be paused, stopped or turned down on its own.

- **Why:** Where the sound already carries everything important the video shows, no separate description is needed (Understanding 1.2.5). Automatic captions usually need heavy editing (W3C WAI, "Captions/Subtitles"), description written into the script is easier and better than one added later (W3C WAI, "Making Audio and Video Media Accessible"), and the UK Home Office puts the transcript next to the video, or links to it clearly (Home Office, "Audio and video").
- **Kind:** Every product: captions for recorded and live video with sound (WCAG 2.2, 1.2.2 and 1.2.4); a transcript or an audio track for recorded audio-only or video-only content (1.2.1); audio description for recorded video, unless its sound already carries what it shows (1.2.3 and 1.2.5); none of these for media that is a labeled alternative to text on the page; sound that plays by itself for more than 3 seconds can be paused, stopped or turned down on its own (1.4.2); since people who are deaf or hard of hearing otherwise miss the sound, people who can't see miss what the video shows, and sound that starts by itself drowns out a screen reader. Current practice: description written into the narration; corrected captions; a transcript beside the video.
- **Applies when:** a page plays recorded or live video or audio.
- **Check:** play each video with captions on: no captions, or captions that miss speech or don't say who speaks, fail. Listen with the screen covered: information on screen that the sound never says, with no description track, fails. Find a transcript for audio-only content and live captions for live streams: missing fails. Load the page and wait: sound that starts by itself and runs past 3 seconds with no control to pause or turn it down fails.
- **Fail:** a product demo with steps shown on screen and only music, with no captions or description. A webinar with no live captions. Automatic captions published unchecked.
- **Pass:** a demo narrated as "Open Settings, then Billing", with corrected captions and a transcript beside it.
- **Not a fail:** a short, silent decorative loop that carries no information. A video labeled as the alternative to the text beside it.

## Page

### 10. Every page has a main region, headings and a way past repeated blocks

Each page has one `<main>`, and its header, navigation and footer in `<header>`, `<nav>` and `<footer>`; several navigation regions each get a name. Headings mark each section, under a first-level heading, normally one, that names the page, and each heading sits at most one level below the heading before it. People can skip what repeats on every page, such as a long navigation: landmarks and headings let screen reader users jump past it, and a "Skip to content" link, first in the tab order and visible on focus, serves keyboard users. A skip link that is there works.

- **Why:**
  - Landmarks, headings and a skip link each let people past blocks repeated across pages (Understanding 2.4.1), and a skip link does it as the first interactive item, shown at least on focus (W3C, Technique G1). The HTML standard asks for at least one first-level heading, allows several, and puts each heading at most one level below the one before it; the W3C asks for one main landmark and a name on each repeated landmark of one kind (WHATWG, "Headings and outlines"; WAI-ARIA APG, "Landmark Regions").
  - 67.8% of screen reader users first move by headings to find something on a long page, 3.4% first use landmarks, and 37.7% use skip links always or often, which also help sighted keyboard users (WebAIM 2026, "Screen Reader User Survey #11"). One in ten skip links on home pages was broken (WebAIM 2026, "The WebAIM Million").
- **Kind:** Every product: a way to skip blocks repeated across pages, through landmarks, headings or a skip link (WCAG 2.2, 2.4.1), since people using a keyboard or a screen reader otherwise go through the whole navigation on every page. Current practice: one `<main>`; header, navigation and footer landmarks, named when there are several of one kind; one first-level heading that names the page; no heading more than one level below the one before it; a skip link, first in the tab order and visible on focus, where the navigation is long.
- **Applies when:** a product has more than one page.
- **Check:** list the landmarks in the accessibility tree: no `main`, or two navigation regions without names, fails current practice. List the headings: no first-level heading, or a heading more than one level below the one before it (an h2 followed by an h4), fails current practice. Press Tab on a freshly loaded page: a skip link that appears must move focus to the main content, and one that doesn't fails current practice. Repeated navigation with no landmarks, no headings and no working skip link fails.
- **Fail:** an app whose content area is a `<div>`, with no `main` and no headings. A "Skip to content" link whose target can't take focus, so focus stays put. Two `<nav>` regions both read as "navigation".
- **Pass:** `<main>` with a first-level heading naming the page, `<nav aria-label="Main">` and `<nav aria-label="Account">`, and a skip link on the first Tab.
- **Not a fail:** no skip link on a page with landmarks and headings. A second first-level heading for the site's name. A heading that goes back up several levels, such as an h4 followed by an h2.
