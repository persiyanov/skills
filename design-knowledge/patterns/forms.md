# Forms

Covers how a form is put together and how it behaves as people fill it in: one page or several steps, how required fields are marked, how changes are saved, the keyboard a field brings up on a phone, and what a form asks, never twice. Read it for any form: sign-up and checkout, create and edit pages, settings forms and applications. Not covered here: labels, hints and error wording, when errors appear, the order and width of fields, what assistive technology gets, and long processes over several visits, which other guides hold. The problem it solves: forms that save some changes but not others, hide which fields they must fill, ask for the same thing twice, and fight the person typing on a phone.

### 1. A form's steps fit how well people know it

A form people don't know, or a long one they fill in rarely, asks one thing per page, or a few things that belong together. A form people fill in often, one about a subject they know, or one that edits something that already exists, puts its fields on one page, in titled sections when there are many. Each step's heading and page title name the step, by its question or its name, adding a count such as "Step 3 of 5" only where the total won't change. Back, the product's and the browser's, returns to the previous step with its answers; after a payment or a final submit, Back says it is done rather than offering the step again.

- **Why:** one question per page helps people understand what they are asked, and makes errors easy to spot and fix (GOV.UK, "Question pages"; Wang 2025, "Few Guesses, More Success"). GOV.UK groups questions where research shows people repeat and switch between tasks quickly, and Cloudscape and Shopify edit a record on one page, since people who only want to change one value would page through answers they only need to see (GOV.UK, "Question pages"; Cloudscape, "Page edit"; Shopify, "Forms and saving"). The W3C puts the step in the page title too (W3C WAI, "Multi-page Forms"). GOV.UK keeps the browser's Back button working, returning people to the page as they last saw it, except after an action they should do only once, such as a payment (GOV.UK, "Question pages"): a payment step that Back offers again lets people pay twice without meaning to. WCAG 2.2 requires a step's answers to come back with it, unless entering them again is essential, needed for security, or the answers no longer hold (3.3.7), since otherwise people must recall and type them again.
- **Applies when:** a form asks for more than a few things.
- **Check:** name how often people fill in each form, whether they know its subject, and whether it creates something or edits it. An unfamiliar form that asks many unrelated things on one long page fails, and so does an edit split into steps. Go forward two steps, then press the browser's Back: a step that comes back empty, or a jump out of the form, fails. Read each step's page title: one that doesn't name the step fails. Pay, then press Back: a payment step ready to be sent again fails.
- **Fail:**
  - editing a saved product forces people through three steps to change its price;
  - a first-time application that puts 40 questions on one page.
- **Pass:**
  - a first-time application, one question per page, each page titled by its question; editing it later, one page with sections;
  - "Step 3 of 5: Payment" in the heading and the tab of a checkout;
  - a form for creating a database, filled in rarely by engineers who know the subject, on one page with sections.

### 2. Each field shows whether it is needed, the same way across the product

People can tell at each field, before they type, whether they must fill it in. The product marks fields one way for each kind of form: "(optional)" or "(required)" after the label, or an asterisk on required fields explained once at the top, never one style in one settings form and another in the next. A note at the top on its own is enough only when every field is required. A form where every field is needed and people know it, such as signing in with an email and a password, needs no marks.

- **Why:** when the marking isn't clear, many people feel they must answer optional questions too (Wang 2025, "Few Guesses, More Success"). Systems disagree on the mark: GOV.UK writes "(optional)" and never uses asterisks; Atlassian, Material 3 and Fluent 2 put an asterisk on required fields, explained by a note; Carbon writes "(optional)" or "(required)" on whichever group is smaller, the same way at least in forms of one kind (GOV.UK, "Question pages"; Atlassian, "Form"; Material 3, "Text fields"; Fluent 2, "Field"; Carbon, "Forms"). Fluent 2 allows one instruction at the top when every field is required, and Primer leaves a sign-in form unmarked, since every field is expected (Primer, "Forms"). Of 51 forms of four or more fields seen, 9 used asterisks, 7 "(optional)", 2 both, 4 another mark, and 29 none, many of them sign-up forms (Mobbin survey, 2026, convention).
- **Applies when:** a form has fields that are required and fields that aren't.
- **Check:** open each form and find, at each field, whether it must be filled in: a field you can't tell about until an error fails. Compare forms of the same kind across the product: two styles fail. A form that marks its fields only with a note at the top fails, unless every field is required, and so does an asterisk that nothing explains.
- **Fail:**
  - two settings forms in one product, one with asterisks and one with "(optional)";
  - "All fields are required unless marked" above a form whose optional field has no mark.
- **Pass:**
  - "(optional)" after the label of each optional field, in every form of the product;
  - a sign-in form with an email and a password and no marks;
  - a short sign-up form marked with "(optional)" and a long configuration form marked with "(required)", each marking its smaller group, as Carbon does.

### 3. A form saves one way, chosen by what a change touches

A form either saves each change as people make it, or saves everything together with one Save button, never both in one form. Changes that apply at once suit switches and a person's own preferences, where any value they pass through on the way does no harm. Typed text in a form of several fields, groups of choices, and changes that touch money, security, privacy or other people wait for Save; one value edited in place may save when people confirm it or leave it. In a form that waits for Save, an on or off choice is a checkbox, since people expect a switch to act at once. Saving as people go keeps any failure in view until it saves, and for typed text it also shows that it is saving and when it saved.

- **Why:** a page that saves by itself looks the same as one that waits for Save, so people who met automatic saving on another page leave expecting a save that didn't happen (GitLab Pajamas, "Saving and feedback"). Primer never mixes the two in one form, and saves at once only controls such as switches; with radio buttons that save at once, the arrow keys apply every option they pass over, so a person browsing a notification setting sends changes they never chose (Primer, "Saving"). People expect a switch to act at once, even one that needs Save (Al-Jasim and Murano 2023). Pajamas keeps automatic saving off data with financial, security or privacy effects, saves a text field when people leave it, and keeps a failed save in view until a retry works, while Primer adds no "Saved" text to a switch, whose position already shows it (GitLab Pajamas, "Saving and feedback"; Primer, "Saving"). Pages with text fields had a Save button, pages of only switches had none, and 4 of 33 mixed the two (Mobbin survey, 2026, convention).
- **Applies when:** a form changes something that is saved.
- **Check:** list each control in a form and whether it saves at once or waits for Save: both in one form fails. Find each control that saves at once and ask whom it affects, and whether a value passed through on the way does harm: a group of options that saves while people arrow through it fails, and so does an instant change to something shared, paid for or about security. Turn the network off and change a field that saves by itself: no sign of the failure, or a value that looks saved but is gone on reload, fails.
- **Fail:**
  - a settings form whose switches save at once beside text fields that wait for Save;
  - a "Who can see this" radio group that saves as people arrow through it.
- **Pass:**
  - a personal preferences page whose switches save at once;
  - a team settings form with checkboxes and one Save;
  - "Couldn't save 1 change. Retry", which stays until it saves;
  - a document editor that saves as people type and shows "Saving…" and "Saved";
  - an issue's title edited in place that saves when people press Enter or click away.

### 4. Changes not yet saved show before people try to leave

In a form that saves with a Save button, the screen shows that something changed and isn't saved yet, from the first change: a bar with Save and Discard, or a mark on the Save button. Before people leave in a way that would lose the changes, the product asks, or keeps the changes for them; Cancel and Discard may discard without asking, since that is what they say. When nothing changed, it asks nothing.

- **Why:** a form that looks the same before and after a change gives people no way to know their change isn't kept until they leave, so Shopify shows a save bar with Save and Discard as soon as a value differs from where it started (Shopify, "Save bar"). Cloudscape asks before any action that would lose what people entered, whatever its size, but not when nothing changed, since needless friction frustrates people (Cloudscape, "Communicating unsaved changes").
- **Applies when:** a form saves with a Save button.
- **Check:** change one field and look for a sign that it isn't saved: none until people try to leave fails. Then leave by the navigation, the Back button and by closing the tab: changes lost with no question fail. Open the form, change nothing, and leave: a question then fails.
- **Fail:**
  - an edit page that looks the same after a change, and loses it when people click away;
  - "Discard changes?" on a form no one touched.
- **Pass:**
  - "Unsaved changes · Discard · Save" in a bar from the first edit;
  - a create page or a dialog, where nothing is saved until its button is pressed, that shows no bar but asks before leaving would lose what people typed;
  - Cancel that discards without asking.

### 5. Fields on phones bring up the right keyboard

Each field tells the phone what it expects, so the keyboard fits the answer: numbers for an amount or a code made only of digits, the email keyboard for an email, a phone pad for a phone number, and no automatic capitals or corrections in a username or a code. The return key says what it will do, such as Next, Search or Send. A code made only of digits, such as a US ZIP code or a one-time code, gets a number keyboard on a text field, not on a number field, which is meant for amounts people step up and down.

- **Why:** a full keyboard for a six-digit code slows people down, and a correction that turns a username into a word is a mistake people must spot and undo, so designers set each field's keyboard, capitals, corrections and return key (Emil Kowalski, "Feeling Native On Mobile"). Browsers choose the keyboard from the field's type and its `inputmode`, label the return key from `enterkeyhint`, and add no automatic capitals in email fields. A number field is meant for amounts people step up and down: it can change by accident and takes no pattern, so a code made only of digits gets a numeric keyboard on a text field (MDN, "<input type="number">", "inputmode", "enterkeyhint" and "autocapitalize").
- **Applies when:** a form can be filled in on a phone.
- **Check:** on a phone, or with a phone keyboard in the simulator, tap each field: a full letter keyboard for an amount, a phone number or a code made only of digits fails, and so does a capital or a correction added to a username, a code or an email. Type a code that starts with 0 and send it: a zero that disappears fails.
- **Fail:**
  - a sign-in code field that opens the full keyboard;
  - a username field that changes "jsmith" to "Smith".
- **Pass:**
  - a code field with a number keyboard and the code's leading zero kept;
  - an email field with the @ key and no capital at the start;
  - "Search" on the return key of a search field;
  - a full keyboard for a postal code in a country whose codes hold letters, such as SW1A 1AA.

### 6. A form asks only what the product needs now

Each question has a use the product makes of the answer now, at this step. What the product needs later is asked later, at the step that needs it. A question the product only wants, such as company size on a sign-up, goes, or becomes optional and says why it is asked.

- **Why:** every question costs people effort, and each one they don't see the point of makes some give up, so GOV.UK asks only for information the service really needs, Atlassian limits the number of fields, and NN/g asks for a reason behind every question and for asking later what isn't needed now (GOV.UK, "Question pages"; Atlassian, "Form"; Wang 2025, "Less Effort, More Completion").
- **Applies when:** a form asks people for information.
- **Check:** for each field, name what the product does with the answer at this step. A field with no use now fails: it moves to the step that needs it, or goes. An optional question with no word on why it is asked fails.
- **Fail:** a sign-up that asks for a phone number, a company size and a job title before people have seen the product.
- **Pass:**
  - a sign-up with an email and a password; the company name asked when people first invite their team;
  - a field the law requires at that step, such as a date of birth for an age check.

### 7. A process never asks for the same thing twice, and an error clears nothing

Within one process, such as sign-up, checkout or an application, what people already gave is filled in or offered to pick when it is needed again: "Billing address: same as delivery", a name carried to the next step. A failed submit keeps what people typed. People type something again only when retyping is the point, for security, or when the old answer no longer holds. Nothing people type is lost, and focus doesn't move, when the page redraws, such as when its scripts finish loading.

- **Why:** Some people with cognitive disabilities have trouble remembering what they entered before, and people who have to recall or retype an answer make mistakes. WCAG 2.2 requires earlier answers to be filled in or offered to pick, unless retyping is essential, needed for security, or the earlier answer is no longer valid (3.3.7). The browser's own autofill doesn't count, and a form that shows an error without clearing the card number people typed is WCAG's own example (Understanding 3.3.7). People who start typing before a page's scripts finish loading lose their text or their place when the page redraws the field, so Vercel asks for fields that keep their value and focus through it (Vercel, "Web Interface Guidelines").
- **Applies when:** a process has more than one step, or a form can fail on submit.
- **Check:** walk each process from start to end and list what each step asks: an answer asked again that isn't filled in or offered to pick fails, unless one of WCAG's exceptions applies. Submit each form with one error: fields that come back empty fail. Reload with the network and CPU slowed and start typing in the first field at once: text that disappears, or focus that leaves the field, as the page finishes loading fails.
- **Fail:**
  - a checkout that asks for the delivery address again at billing, with no "Same as delivery";
  - a sign-up form that clears every field because the email was taken;
  - a search box that empties itself when the page's scripts finish loading.
- **Pass:**
  - "Billing address: same as delivery", ticked by default, with the address shown;
  - "Confirm password" when creating a password, and a password field emptied after a failed submit, for security;
  - a new code sent by email.
