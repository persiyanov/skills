# Accessibility

Covers what screen readers, speech input, switches and other assistive technology get from a web interface: which element each part is, its name, states and values; text alternatives for images and media; structure in the code, and its order; the page's language and the direction of text people enter; instructions that don't rest on one sense; how forms tie labels, hints and errors to fields; landmarks and headings; and why a scanner or an overlay doesn't stand in for any of this. Not covered here: contrast and color as a cue, text size, spacing, zoom and reflow, target sizes, the keys, focus, announcements, time limits and view changes, sign-in without memory tests, processes that don't ask twice, ways to find a page and its help, how focus looks, content shown on hover, motion and flashing, consistent places and names, and the words of labels, headings, links and errors.

Every product meets WCAG 2.2 Level A and AA, also the international standard ISO/IEC 40500:2025 (W3C, "WCAG 2.2 Approved as an ISO Standard"). Laws point to it or to its earlier versions: EU consumer services such as online shops and banking, except those run by microenterprises, since 28 June 2025, at WCAG 2.1 AA until the standard's WCAG 2.2 version, published in September 2026, is cited in the EU's Official Journal (Directive (EU) 2019/882; AccessibleEU, "EN 301 549 has been updated"); US state and local governments from 26 April 2027, or 2028 for smaller ones, at WCAG 2.1 AA (DOJ, "Extension of Compliance Dates"); UK public sector sites, monitored against WCAG 2.2 AA since October 2024 (Cox 2024).

The rules come in three groups: rules for every level, then rules for components (a form field and a media player) and pages (landmarks and headings).

## Every level

### 1. Each part is the element that does its job, and ARIA fills only the gaps

A button is a `<button>`, a link an `<a href>`, a choice of one a set of radio buttons or a `<select>`, and a modal dialog a `<dialog>` opened with `showModal()`. Every control gives assistive technology its name and role, and the states and values people can set, and updates them as they change; browsers give native elements their role, states and keys for free. ARIA is for what HTML has no element for, such as tabs, a tree or a combobox that filters, and a part that takes an ARIA role gets its whole pattern: every state it can be in, kept up to date, and its keys. Site navigation is a list of links, not an ARIA menu. Nothing is inside `aria-hidden` while it has focus.

- **Why:**
  - WCAG requires every control to expose its name, role, states and values and keep them up to date, and native HTML controls used as specified do (WCAG 2.2, 4.1.2); otherwise people using a screen reader, speech input or a switch can't tell what a part is, whether it is on, or how to use it.
  - A role promises its pattern's keys and states, so ARIA without them gives screen reader users a control that doesn't do what it announces: no ARIA is better than bad ARIA, and ARIA that conflicts with an element's own meaning is not allowed (WAI-ARIA APG, "Read Me First"; W3C, "ARIA in HTML"). 22% of the ARIA menus on home pages added barriers (WebAIM 2026, "The WebAIM Million"). Menus, tabs and dialogs that don't behave as expected were screen reader users' second biggest problem, after CAPTCHAs (WebAIM 2024). An ARIA menu copies an operating system's menu, not site navigation (Roselli 2023, "Be Careful Using 'Menu'").
  - A native dialog opened with `showModal()` makes the rest of the page inert, closes on Escape and returns focus to its opener (MDN, "<dialog>"; web.dev, "Learn HTML: Dialog").
  - A part that takes focus while hidden with `aria-hidden` confuses screen reader users, who reach something that isn't in the accessibility tree; the W3C's test for it assumes the attribute doesn't change as people use the page (W3C, ACT rule 6cfa84).
- **Applies when:** always.
- **Check:** open the accessibility tree in the browser's developer tools and select each control: its role matches what it does, and its states change as you use it (expanded, selected, checked, pressed). A `<div>` or `<span>` that reacts to clicks fails. List every `role` attribute: a role on an element that a native button, link or form control could replace fails, and so does a custom widget whose keys don't follow its W3C pattern. Run axe, then Tab to each element it reports as focusable inside `aria-hidden="true"`: one still hidden in the accessibility tree while it has focus fails. One that its script un-hides as it takes focus passes this check; whether a screen reader names it needs a screen reader test.
- **Fail:**
  - a `<div onclick>` styled as a button;
  - a disclosure button whose `aria-expanded` stays "false" when its panel opens;
  - top navigation marked up with `role="menu"` and `role="menuitem"`.
- **Pass:**
  - a `<button aria-expanded="true">` that shows and hides its panel;
  - tabs with `role="tablist"`, `role="tab"` and `aria-selected`, moved with the arrow keys;
  - ARIA that adds what HTML lacks, such as `aria-current="page"` on the link to the current page;
  - a component library's dialog, menu or combobox that follows its W3C pattern;
  - a toast's close button hidden from screen readers until it takes focus, when a screen reader names it as it does, while the toast's text is announced and Escape closes it.

### 2. Every control has a name, and it contains the words people see

A control's visible words are its name: a button's text, a field's label, a link's text. Words visible elsewhere name a control through `aria-labelledby`; where nothing visible can name it, as with an icon-only button, a hidden name (`aria-label` or visually hidden text) says what it does. A name longer than the visible words starts with them: a button that shows "Send" is named "Send" or "Send message", never "Submit". `aria-label` replaces the visible words for assistive technology, so it is kept for parts with no visible words, and it goes through translation with the rest of the product. A `title` attribute is never the only name.

- **Why:**
  - People using a screen reader hear only a control's name, so every control and link needs one (WCAG 2.2, 4.1.2). People using speech input say what they see, such as "click Send", so a name without the visible words can't be spoken (WCAG 2.2, 2.5.3), and WCAG advises putting them at the start of the name (Understanding 2.5.3).
  - Browsers take a name from `aria-label` before the element's own label or content, and from `title` only when nothing else gives one, so `aria-label` silently hides the visible words (W3C, "Accessible Name and Description Computation 1.2"); the W3C advises visible text first and not relying on `title` (WAI-ARIA APG, "Providing Accessible Names and Descriptions"). Browser translation missed `aria-label` values that were hidden or changed by script (Roselli 2025).
- **Applies when:** always.
- **Check:** in the accessibility tree, read the name of every button, link and field: an empty name fails, and so does one without the control's visible words. Each icon-only control's name says what it does ("Close", "Delete invoice"): one that says what it shows ("X", "trash can") fails. Search the code for `aria-label` on elements with visible text: a value without that text fails.
- **Fail:**
  - a button that shows "Send" named "Submit message";
  - an icon-only close button read only as "button";
  - a link whose only name is its `title`.
- **Pass:**
  - "Send message" as the name of a button that shows "Send";
  - an icon-only button with `aria-label="Delete invoice"`;
  - a bold button that shows "B" named "Bold", since a symbol isn't a label (WCAG 2.2, Understanding 2.5.3).

### 3. Every image has the text alternative its job calls for

An image that only decorates, or repeats the text beside it, has an empty alt (`alt=""`) or sits in CSS, so screen readers skip it. An image that informs has a short alt that says what it shows people, in its context. An image that is a link or a button names where it goes or what it does. A chart or diagram has a short alt that names it, with its figures or its point in text or a table on the page. Every `<img>` has an alt attribute: an empty one is a choice, a missing one a defect. Alt text written by AI is a draft a person checks. A test, media or a sensory experience at least says what it is, and a CAPTCHA says what it is for and comes in a second form for another sense. An avatar with no name beside it is named for screen readers, never only in a tooltip.

- **Why:**
  - WCAG requires a text alternative that serves the same purpose for non-text content that informs, a name for one that is a control or link, and decoration hidden from assistive technology (WCAG 2.2, 1.1.1), since people who can't see the image otherwise miss what it says, or can't use the control.
  - A screen reader reads the alt in place of the image, so decoration gets `alt=""`, an image in a link or button names the action or destination, and a complex image gets a long description, best visible to everyone (W3C WAI, "An alt Decision Tree"; "Complex Images"). 10.8% of alt texts on home pages were a file name, "image" or a repeat of nearby text (WebAIM 2026, "The WebAIM Million").
  - Blind and low-vision people rated descriptions written with the page's context higher than ones written from the image alone (Mohanbabu and Pavel 2024), and AI models described images with 70–91% accuracy while making up details in fluent text (Aljedaani et al. 2026).
  - Primer, Atlassian and Fluent 2 pair an avatar with a name that is shown or announced (Primer, "Avatar"; Atlassian, "Avatar"; Fluent 2, "Avatar").
- **Applies when:** a page shows images, icons that carry meaning on their own, charts or diagrams.
- **Check:** list every `<img>`, meaningful `<svg>` and CSS image that carries meaning: a missing alternative fails. Read each alt with the text around it: one that names a file or says "image" fails (W3C, Failure F30), and one that repeats that text fails. An image in a link or button whose alt describes the picture instead of the destination or action fails. For each chart, find its point in its alt or in text on the page: missing fails. Its figures missing from text or a table fails. An `aria-label` or `aria-labelledby` on a `div` or `span` with no role is not an alternative: ARIA forbids naming an element with no role (WAI-ARIA 1.2, "generic"), and axe only lists it for review when the element holds text. Meaning held only there fails. An avatar whose name is neither shown beside it nor announced by screen readers fails, and so does a name shown only in a tooltip on an avatar that can't take focus, since keyboard users never see it (Atlassian, "Avatar").
- **Fail:**
  - a product screenshot with `alt="screenshot.png"`;
  - a logo linking home with `alt="logo"`;
  - a revenue chart whose only alternative is "Chart";
  - five star characters in a `<span aria-label="Rated 4 out of 5">`;
  - a row of avatars with no names anywhere.
- **Pass:**
  - `alt=""` on an illustration beside a heading that says the same;
  - a linked logo with `alt="Acme home page"`;
  - a revenue chart with `alt="Revenue by month, 2026"` and a table of the figures under "Show data";
  - the same stars in `<span role="img" aria-label="Rated 4 out of 5">`;
  - decorative icons with `aria-hidden="true"` beside text that says the same;
  - an avatar with `alt=""` next to the person's name.

### 4. Headings, lists, tables, groups and states are in the code, not only in the look

What the look shows, the code says: a heading is a heading (`<h1>` to `<h6>`), a list is a list (`<ul>`, `<ol>`), a table of data has header cells (`<th>`, with `scope` where needed), a set of related fields sits in a `<fieldset>` with a `<legend>`, and states shown by style, such as required, selected, current or invalid, are set in the code too. Tables hold data, never layout.

- **Why:** A screen reader announces a list's length, a cell's headers, a group's name and a field's state only when the code holds them (WCAG 2.2, 1.3.1), so people using one otherwise hear a run of words with no structure, and can't tell which options belong together or which item is current.
- **Applies when:** a screen shows headings, lists, data tables, groups of fields, or states marked by style.
- **Check:** find each heading, list, table and group of fields in the accessibility tree: text styled as a heading but not marked as one fails, a list read as plain text fails, a data table with no header cells fails, and a group of radio buttons or checkboxes with no group name fails. For each state shown by style (an asterisk for required, a highlight for the current item, red for an error), find it in the tree: missing fails.
- **Fail:**
  - a list of plans built from `<div>`s, read as one run of text;
  - a required field marked only by an asterisk drawn in CSS, with no `required`, no `aria-required` and no text saying so;
  - the current page in the navigation shown in bold, with no `aria-current`.
- **Pass:**
  - a `<fieldset>` with `<legend>Billing period</legend>` around two radio buttons;
  - `aria-current="page"` on the link to the current page;
  - a grid of cards built from `<div>`s, when no relationship between them matters;
  - a form that marks only its optional fields, in their labels, and marks nothing as required.

### 5. Instructions and controls don't rest on one sense, one orientation or one movement

Instructions never name a control only by its shape, size, place, orientation, color or sound: "Press the round button on the right" also names the button. The page works in portrait and landscape, unless one orientation is the point. Anything done by shaking or tilting the device also has a control, and the motion can be switched off, unless it works through an accessibility feature or the motion is the point.

- **Why:** People who are blind or have low vision need instructions that don't rely on seeing; some people have their device mounted in one orientation, such as on the arm of a power wheelchair; and some can't hold or move a device steadily (WCAG 2.2, 1.3.3, 1.3.4 and 2.5.4), so otherwise they can't follow or use the page.
- **Applies when:** a page gives instructions, or runs on phones and tablets.
- **Check:** read every instruction and help text: one that names a control only by its shape, place, color, size or sound fails, unless a place such as "below" follows the reading order and can mean only one thing. Switch orientation on a device or in the browser's device emulation: a page that blocks or breaks in one orientation fails, unless that orientation is essential. Search the code for `deviceorientation` and `devicemotion` handlers: each without a control that does the same, and a way to switch the motion off, fails.
- **Fail:**
  - "Click the green button to continue.";
  - a sign-up page that shows "Please rotate your device" in landscape;
  - shake to undo with no Undo control.
- **Pass:**
  - "Select Continue, under the form.";
  - "the form below", when the form comes next in the reading order and nothing else could be meant (WCAG 2.2, Understanding 1.3.3);
  - a video player that suggests landscape for full screen but works in portrait.

### 6. The code holds the content in the order people need it

The order of elements in the code is the order the content needs: what people need first comes first, a heading before its section, a label before its field. Keyboard and screen-reader users get the content in that order.

- **Why:** Keyboard and screen-reader users get the code order (WCAG 2.2, 1.3.2 Meaningful Sequence and 2.4.3 Focus Order).
- **Applies when:** always.
- **Check:** read the page in the accessibility tree, or with styles turned off, from top to bottom. An order that changes the meaning, or puts what people need after what they don't, fails.
- **Fail:** a plan's price placed in the code after its Choose button, so a screen reader reaches the button before the price.
- **Pass:** each plan reads name, price, features, then the button, as the card shows them.

### 7. The page says its language, and text people enter keeps its own direction

The page states its language, and so does any passage in another language. A name or other text people enter, shown inside the interface's own text, keeps its own direction, so the words and numbers around it stay in place.

- **Why:** The language in code lets screen readers pronounce the text and browsers show the right characters and hyphenate it (WCAG 2.2, Understanding 3.1.1; MDN, "hyphens"). WCAG requires the page's language and each passage in another language in the code, except proper names, technical terms, words of no clear language and words borrowed into the surrounding language (WCAG 2.2, 3.1.1 and 3.1.2). Text whose direction isn't known needs `dir="auto"` or `<bdi>`, or a number after a Hebrew or Arabic name moves to the wrong side of it (W3C Internationalization, "Inline markup and bidirectional text in HTML").
- **Applies when:** always for the page's language; text direction when the product shows names or content people enter in other scripts.
- **Check:** read `lang` on `<html>` and on text in other languages. Put an Arabic name into a row with a count after it, such as "- 5 reviews", and check that the count stays after the name.
- **Fail:**
  - a French quote in an English page with no `lang="fr"`;
  - a Hebrew shop name followed by "- 5 reviews", with the 5 shown before the name.
- **Pass:**
  - `lang="en"` on the page and `lang="fr"` on the quote;
  - a product name, or "café" in an English sentence, with no `lang`.

### 8. The page itself works with assistive technology; a scanner's score or an overlay doesn't stand in for it

Accessibility is built into the page and checked by using it: with the keyboard alone, with a screen reader, and at 400% zoom. The check covers what third parties put in the page, such as a cookie banner, a chat widget or a payment form, as people meet them on the way. An automated scan runs first and catches repeated mistakes, such as missing names, labels and language; passing it shows only that those are gone. No overlay or widget that promises to fix the page from outside is added: none makes the page meet these rules, and they can clash with people's own tools.

- **Why:**
  - Automated tools cover about a sixth of WCAG's success criteria (Fischer et al. 2025). On one page, a manual review found 37 failures where free tools found 0 to 5 (Roselli 2023, "Comparing Manual and Free Automated WCAG Reviews").
  - Overlays often make access worse for people using assistive technology (Überwachungsstellen des Bundes und der Länder 2025), and the FTC made an overlay vendor pay $1 million and stop claiming, without evidence, that its tool makes sites meet WCAG (FTC, accessiBe order, 2025).
  - The most used pairings are JAWS or NVDA with Chrome, and JAWS with Edge, on Windows, and VoiceOver on iPhone (WebAIM 2026, "Screen Reader User Survey #11").
- **Applies when:** always.
- **Check:** run axe or Lighthouse and fix what it finds. Then go through the main tasks with the keyboard alone, with a screen reader (NVDA or JAWS with Chrome on Windows, VoiceOver with Safari on a Mac or iPhone), and at 400% zoom. Include every third-party part on the way, such as a cookie banner, a chat widget or a payment form: WCAG judges the full page and every step of a process (WCAG 2.2, Conformance 5.2.2 and 5.2.3). Look for an overlay script or a floating accessibility widget from a third party: one present fails. A review with only a browser reports what needs a screen reader to confirm as "needs a screen reader test", never as passed.
- **Fail:**
  - a floating "Accessibility" button added by an overlay script;
  - a release checked only with Lighthouse's accessibility score.
- **Pass:**
  - a release check with an axe run, a keyboard pass of sign-up and settings, and a VoiceOver pass on iPhone;
  - the browser's and the system's own settings, such as zoom, text size and forced colors;
  - a product's own settings for text size or theme.

## Component

### 9. A field's label, purpose, hint and error are tied to it in the code

Each field's visible label is its name, tied with `<label for>` or by wrapping the field (rule 2). Hints and errors are tied with `aria-describedby`, so they are read when the field gets focus, and a field with an error is marked `aria-invalid="true"` until it is fixed. Fields that ask for the person's own details, such as name, username, password, email, phone, address, birthday or card, carry their `autocomplete` value, so browsers and password managers can fill them. After a failed submit, focus moves to the first error, or to a summary at the top that links to each field, and the page title starts with "Error:".

- **Why:**
  - WCAG requires each field's label tied to it (WCAG 2.2, 1.3.1 and 4.1.2), the purpose of fields for the person's own details in the code (1.3.5), and a detected error that names its field in text (3.3.1); otherwise people using a screen reader hear "edit text" with no label and miss the error, and people who find typing hard can't have the browser fill their details.
  - Some people with cognitive disabilities can't tell a field's purpose from its label alone, and fields the browser fills help people with memory difficulties and dyslexia (Understanding 1.3.5).
  - In tests, a message tied with `aria-describedby` was read reliably as people moved between fields, `aria-errormessage` mostly wasn't, and `aria-invalid` alone sometimes said there was an error but not what it was (Roselli 2023, "Exposing Field Errors"; Cerovac 2024).
  - GOV.UK moves focus to an error summary at the top after a failed submit, links each item to its field, and starts the page title with "Error:" (GOV.UK, "Error summary"; "Validation").
- **Applies when:** a page has form fields.
- **Check:** in the accessibility tree, select each field: a name that isn't its visible label fails; a description without its hint or, after a failed submit, its error, or `aria-invalid` true when no error stands, fails. For each field asking for the person's name, username, password, email, phone, address, birthday or card details, read its `autocomplete` value: missing, wrong or "off" fails. Submit the form empty: focus that moves neither to the first error nor to an error summary fails.
- **Fail:**
  - a label next to a field with no `for` and no wrapping;
  - an error in red under a field that a screen reader doesn't read when it reaches the field;
  - an email field with `autocomplete="off"`.
- **Pass:**
  - `<label for="email">Work email</label>` with `<input id="email" type="email" autocomplete="email" aria-describedby="email-hint email-error">`;
  - fields about someone else, or a search field, with no `autocomplete` value, since WCAG asks only for details about the person filling the form;
  - a one-field form whose error returns focus to the field.

### 10. Video and audio carry captions and description, and sound never starts by itself

Recorded video with sound has captions that say who is speaking and include the sounds that matter. What the video shows that its sound doesn't say is described in the sound: in the narration ("Open Settings, then Billing") or in an audio description track. Recorded audio alone, such as a podcast, has a transcript, and silent video that informs has a description or transcript. Live video with sound, such as a webinar, has live captions. Automatic captions are corrected before they count. Sound that starts by itself and lasts more than 3 seconds can be paused, stopped or turned down on its own.

- **Why:** WCAG requires captions for recorded and live video with sound (WCAG 2.2, 1.2.2 and 1.2.4), a transcript or an audio track for recorded audio-only or video-only content (1.2.1), audio description for recorded video unless its sound already carries what it shows (1.2.3 and 1.2.5), none of these for media that is a labeled alternative to text, and a way to pause, stop or turn down sound that plays by itself for more than 3 seconds (1.4.2); otherwise people who are deaf or hard of hearing miss the sound, people who can't see miss what the video shows, and sound that starts by itself drowns out a screen reader. Where the sound already carries everything important the video shows, no separate description is needed (Understanding 1.2.5). Automatic captions usually need heavy editing (W3C WAI, "Captions/Subtitles"), description written into the script is easier and better than one added later (W3C WAI, "Making Audio and Video Media Accessible"), and the UK Home Office puts the transcript next to the video, or links to it clearly (Home Office, "Audio and video").
- **Applies when:** a page plays recorded or live video or audio.
- **Check:** play each video with captions on: no captions, or captions that miss speech or don't say who speaks, fail. Listen with the screen covered: information on screen that the sound never says, with no description track, fails. Find a transcript for audio-only content and live captions for live streams: missing fails. Load the page and wait: sound that starts by itself and runs past 3 seconds with no control to pause or turn it down fails.
- **Fail:**
  - a product demo with steps shown on screen and only music, with no captions or description;
  - a webinar with no live captions;
  - automatic captions published unchecked.
- **Pass:**
  - a demo narrated as "Open Settings, then Billing", with corrected captions and a transcript beside it;
  - a short, silent decorative loop that carries no information;
  - a video labeled as the alternative to the text beside it.

## Page

### 11. Every page has a main region, headings and a way past repeated blocks

Each page has one `<main>`, and its header, navigation and footer in `<header>`, `<nav>` and `<footer>`; several navigation regions each get a name. Headings mark each section, under a first-level heading, normally one, that names the page, and each heading sits at most one level below the heading before it. People can skip what repeats on every page, such as a long navigation: landmarks and headings let screen reader users jump past it, and a "Skip to content" link, first in the tab order and visible on focus, serves keyboard users. A skip link that is there works.

- **Why:**
  - Landmarks, headings and a skip link each let people past blocks repeated across pages (WCAG 2.2, 2.4.1; Understanding 2.4.1), where otherwise people using a keyboard or a screen reader go through the whole navigation on every page, and a skip link does it as the first interactive item, shown at least on focus (W3C, Technique G1). The HTML standard asks for at least one first-level heading, allows several, and puts each heading at most one level below the one before it; the W3C asks for one main landmark and a name on each repeated landmark of one kind (WHATWG, "Headings and outlines"; WAI-ARIA APG, "Landmark Regions").
  - 67.8% of screen reader users first move by headings to find something on a long page, 3.4% first use landmarks, and 37.7% use skip links always or often, which also help sighted keyboard users (WebAIM 2026, "Screen Reader User Survey #11"). One in ten skip links on home pages was broken (WebAIM 2026, "The WebAIM Million").
- **Applies when:** a product has more than one page.
- **Check:** list the landmarks in the accessibility tree: no `main`, or two navigation regions without names, fails. List the headings: no first-level heading, or a heading more than one level below the one before it (an h2 followed by an h4), fails. Press Tab on a freshly loaded page: a skip link that appears must move focus to the main content, and one that doesn't fails. Repeated navigation with no landmarks, no headings and no working skip link fails.
- **Fail:**
  - an app whose content area is a `<div>`, with no `main` and no headings;
  - a "Skip to content" link whose target can't take focus, so focus stays put;
  - two `<nav>` regions both read as "navigation".
- **Pass:**
  - `<main>` with a first-level heading naming the page, `<nav aria-label="Main">` and `<nav aria-label="Account">`, and a skip link on the first Tab;
  - no skip link on a page with landmarks and headings;
  - a second first-level heading for the site's name;
  - a heading that goes back up several levels, such as an h4 followed by an h2.
