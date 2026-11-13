# Controls

Covers which control people get and what they can count on from it: nothing reachable only by hover or right-click, controls that look alike acting alike, when a control is disabled, which control fits a choice, what a field accepts, whether an icon-only control can be understood, a changed value that never takes people somewhere else, a click or tap for whatever a drag or gesture does, undo and confirmation, time limits people can extend, and content that moves or updates by itself that people can pause. Not covered here: what looks usable and how each state looks, how a control answers a press, its keys, its size, and the words on it.

The rules come in three groups: rules for every level, then rules for primitives (a single control: when it is disabled, which control a choice gets, what a field accepts, an icon-only control, what changing a value does) and components (dragging and gestures, undo and confirmation, time limits, and content that moves or updates by itself).

## Every level

### 1. Nothing is reachable only by hover or right-click

Hover can show a row's less-used actions, a tooltip or a preview, and right-click can open a menu, but each is a second way to reach something. Whatever appears on hover also appears when keyboard focus reaches it, and can be reached on a touch screen, which has no hover. Actions people need often stay in view. Content that appears on hover or focus stays open while the pointer moves onto it, and until the pointer or focus leaves, people dismiss it, or it is no longer true; Escape closes it. Content that only shows an input error or covers nothing, and the tooltip the browser draws from `title`, may behave otherwise. A submenu that opens on hover stays open while the pointer moves toward it, across other items on the way. A tooltip waits a moment before it opens, about 600 ms to 1.5 s (default), so a pointer passing over it shows nothing; once one is open, the next opens at once and without animation as the pointer moves along; and keyboard focus opens a tooltip at once.

- **Why:** Touch screens have no hover and keyboards no pointer, so what only hover reveals is out of their reach, and hover content that can't be dismissed or moved onto hides the page from people using magnification (WCAG 2.2, 2.1.1, 1.4.13). Nothing shows that a context menu exists, and people find and use its actions less (Kaplan, "Designing Effective Contextual Menus", 2025). Tooltips that open at once flash over the content as the pointer crosses a toolbar, and a pause before every one makes scanning a toolbar slow, so Base UI and React Aria wait before the first tooltip, about 600 ms and 1.5 s, and open its neighbors at once, and both show a tooltip on keyboard focus at once (Base UI, "Tooltip"; React Aria, "Tooltip"; Emil Kowalski, "Design Engineering").
- **Applies when:** something appears or changes on hover, or a context menu exists.
- **Check:** hover over rows, cards, icons, avatars and cut-off text, and note what appears. Tab to the same places: anything that appeared on hover that the keyboard can't reach, on focus or another way, fails; anything that doesn't appear on focus fails. With touch emulated in a phone-sized window (DevTools device mode), or on a phone, try to reach each action and each piece of needed information: one you can't reach, in place or another way, fails. Open each tooltip and hover card, move the pointer onto it, then press Escape: one that closes as the pointer moves onto it fails; one that stays open after Escape fails, unless another key closes it, or it only shows an input error or covers nothing. Move the pointer diagonally from a menu item to its submenu, across the items below: a submenu that closes on the way fails. Right-click where the product offers a context menu, and find each item somewhere visible: an item found nowhere else fails. Sweep the pointer across a toolbar: tooltips that open as the pointer merely passes fail, and so does a new pause before each neighbor once one tooltip is open. Tab to a control with a tooltip: one that waits before it shows fails.
- **Fail:**
  - a row's Delete button that appears only under the mouse;
  - a tooltip holding a link that closes as the pointer moves to the link;
  - Rename only in a right-click menu;
  - a submenu that closes when the pointer crosses the next item on its way there;
  - tooltips that flash open one after another as the pointer crosses a toolbar.
- **Pass:**
  - row actions that appear on hover and when focus is in the row, stay visible on touch screens, and are also in the row's ⋯ menu;
  - a desktop list that hides less-used row actions until hover, when they also appear on focus, can be reached on touch screens (always shown there, or shown when the row is tapped) and are in a menu.

### 2. Controls that look alike act alike everywhere

Controls that look alike also act alike everywhere: a click on a row opens it in every such list, or selects it in every one.

- **Why:** People who learned what a control does in one place expect the same of every control that looks like it, and wonder whether a difference means something (Nielsen 1994, heuristic 4).
- **Applies when:** controls or rows that look alike appear in more than one place.
- **Check:** click a row in each list and table: rows that look alike but open in one list and select in another fail.
- **Fail:** a click on a row that opens the invoice in one table and only selects it in another that looks the same.
- **Pass:** rows that open their item in every table.

## Primitive

### 3. A control is disabled only when people can tell why

A submit button stays enabled: pressing it shows what's missing. A control is disabled only while it can't work right now, and the screen shows why next to it, or the reason is plain from what's on screen. A reason in a tooltip counts only when keyboard and touch can open it, which they can't on a natively disabled control. What the person can never use is hidden rather than disabled. A read-only value is not disabled: it stays readable, selectable and copyable, and so does other text people copy, such as an error code, an ID or an address.

- **Why:** Without a reason, people can't tell what to change to use a disabled control they need, and are stuck. A natively disabled button takes no focus, so screen-reader users moving through a form miss it, and GOV.UK, Primer and Atlassian keep submit buttons enabled and show errors instead (GOV.UK, "Button"; Primer, "Button", "Saving"; Atlassian, "Button"). Keyboard and touch can't open a tooltip on a natively disabled control (Atlassian, "Button"); Carbon hides what people lack permission for (Carbon, "Disabled states"), and a read-only field still takes focus (MDN, "HTML attribute: readonly").
- **Applies when:** a control is disabled, inactive or read-only.
- **Check:** find every disabled control: in the Elements panel, search for `disabled` and `aria-disabled="true"`. For each, find the reason on screen, or judge whether what's on screen makes it plain: neither fails. A reason only in a tooltip on a control with the `disabled` attribute fails. A submit button disabled until the form is complete fails: it should stay enabled and, when pressed, show errors at the fields that need them. A read-only value that can't be selected or copied fails, and so does an error code, ID or address people would copy.
- **Fail:**
  - Create project grayed out until every field is filled, with nothing saying which one is missing;
  - Delete grayed out, with the reason in a tooltip only the mouse can open;
  - an API key in a disabled field that can't be selected;
  - an error ID that can't be selected, so people retype it for support.
- **Pass:**
  - Create project always enabled; pressed with an empty name, it shows an error under Name and moves focus there;
  - "Stop the running export to delete this project" under a disabled Delete button;
  - Previous disabled on the first page;
  - a dialog's confirm button disabled until the choice it confirms is made, with the choice on screen (Material 3, "Dialogs");
  - a busy button during its request.

### 4. The control fits the choice

Choose the control by what the choice does and how many options it has. A switch turns one setting on or off at once; a checkbox is for a choice saved with a button, or for picking several options. Radio buttons show up to about five or six options; a select holds a longer fixed list; past about ten options that people know by name, a field filters the list as they type. A segmented control switches between two to five short options that apply at once, such as views. A link takes people somewhere; a button does something. A segmented control, a button group, a toolbar or a row of tabs stays on one line: what doesn't fit scrolls or goes into a menu. Other rows of buttons, such as a form's actions, may wrap.

- **Why:** People expect a switch to act at once: 17 of 20 did even when it needed Save (Al-Jasim and Murano 2023). Systems use radio buttons for up to five or six options (Material 3, "Radio button"; Apple, "Toggles"; Fluent 2, "Radio group"; Primer, "RadioGroup"; Geist, "Radio"), a drop-down for 5 to 10 (Söderlund 2025), typing to filter past about 10 (Geist, "Select"), 2 to 5 segments (Primer, "SegmentedControl"; Apple, "Segmented controls"), and button groups, toolbars and tabs that don't wrap (Material 3, "Button groups"; Fluent 2, "Toolbar"; Kumo, "Tabs").
- **Applies when:** a screen asks people to choose, switch a view or go somewhere.
- **Check:** list each choice with what it does (applies at once, waits for a Save button, switches the view below, goes to another page), how many options it has, and its control. Each of these fails: a switch whose change waits for a Save button; radio buttons for more than about six options; a select for two to four options; more than about ten options that people know by name, with no way to type; a segmented control with more than five options; a button that goes to another page; a row of options or tabs that wraps onto a second line at any width.
- **Fail:**
  - a switch for "Email me a weekly summary" in a form with a Save button;
  - a select with Yes and No;
  - nine sort options as a segmented control that wraps onto two lines;
  - a "View invoice" button that can't be opened in a new tab.
- **Pass:**
  - a switch that saves at once and shows Saved;
  - radio buttons for three plans;
  - a field that filters countries as people type;
  - a segmented control for List and Board views;
  - a segmented control in a form, built on radio buttons, as coss ui and Kumo build it;
  - seven tabs on one line that scroll sideways at narrow widths, with part of the next tab showing at the edge so people can tell there are more.

### 5. A field takes any clear form of its value

A field accepts the forms people commonly type or paste for its value: capital or small letters, spaces, hyphens and brackets, a symbol the field already shows, and the usual ways of writing it, such as "9am", "9:00" and "09:00" for a time. It ignores spaces at the ends, never blocks typing or paste, and shows what it took in its own format. It refuses only a value that can't be right or could mean two things, and says why.

- **Why:** A field that refuses a clear value makes people stop, read an error and type again, for something the product could read itself. GOV.UK accepts any format that isn't ambiguous, such as postcodes in either case and phone or card numbers with spaces or hyphens (GOV.UK, "Validation"; "Phone numbers"; "Payment card details").
- **Applies when:** a field takes a value with a format, such as a time, a date, a phone number, a postcode, an amount or a code.
- **Check:** type three real forms of each value, with different case, spaces and separators, and paste one with spaces at the ends. A clear value refused fails, and so do keys that do nothing and blocked paste. Type a value that can be read two ways, such as "1/2/26": one taken silently in one reading fails.
- **Fail:**
  - a time field that refuses "9am" with "Use HH:MM";
  - a card number field that refuses spaces.
- **Pass:**
  - "9am" shown back as 09:00;
  - a postcode typed as "sw1a 2aa" saved as SW1A 2AA;
  - 25:00 refused, with a message that says a time runs to 23:59.

### 6. People can tell what an icon-only control does before they press it

Icon-only controls are normal in toolbars, rows and dense panels. Each one has a name that screen readers announce, such as `aria-label`, and the name includes what the icon shows, such as the count on a badge. Sighted people get the name in one of three ways, depending on the icon:
- an icon people know in the place they expect it, such as close, search, back, the ⋯ menu or copy, needs no visible name;
- an unclear icon whose press is harmless and explains itself, such as one that opens a menu of named items or shows "Copied", may show its name in a tooltip;
- an unclear icon whose press does something, such as recording, sending, deleting or changing a setting, shows its name before the press: in a tooltip on hover and focus, or as a visible label. A touch screen has no hover, so there it shows a visible label, unless the platform has made the icon standard.

Whether people know an icon is judged for each market the product ships to: an object or gesture known in one region, such as a US mailbox for mail, is unclear in others. Navigation items and tabs show a text label. An icon that stands for a word people read, such as a column header, keeps the word unless the icon is one people know.

- **Why:** Screen readers get a control's name, and what its icon shows, such as a count, only from the code (WCAG 2.2, 4.1.2 and 1.3.1). People misread icons even when they know the object: a ribbon was taken for a keyhole (Kaplan, "Icon Usability", 2024). Systems split on tooltips: Carbon, Primer, Atlassian, Material 3 and Fluent 2 show one on every icon button, Kumo, Geist and coss on none (Carbon, "Tooltip"; Primer, "IconButton"; Atlassian, "Icon button"; Material 3, "Icon buttons"; Fluent 2, "Tooltip"; Kumo, "Button"; Geist, "Tooltip"; coss ui, "Button"), so what decides it is whether pressing to find out is safe. Navigation keeps its words (Material 3, "Applying icons"; Apple, "Tab bars").
- **Applies when:** an icon is a control or a link, or stands for a word people read.
- **Check:** for each icon-only control, read its name in the browser's accessibility tree: no name fails, and so does a name that leaves out a count or dot the icon shows. Then ask: would someone new, in each market the product ships to, know what it does from the icon and where it sits? If not, is pressing it harmless, with a result that explains itself? A control that is neither, and shows no name on hover, focus or screen, fails. A navigation item or tab with no visible text fails.
- **Fail:**
  - a delete button with only an icon and no `aria-label`;
  - a sidebar of icons with no text;
  - a bell with a red "3" named "Notifications";
  - a microphone in a message box with no name on hover, where pressing it may start dictation or a voice call;
  - a US-style mailbox with a raised flag as the only sign for Inbox, in a product used across Europe and Asia.
- **Pass:**
  - a ⋯ button named "More actions for Avery Owner";
  - a bell named "Notifications, 3 unread";
  - a microphone with the tooltip "Dictate";
  - sidebar items with an icon and a label;
  - a ⋯ menu or a copy button with no tooltip: people know these icons, the menu names its items, and the copy confirms itself;
  - an icon next to a text label that names it, hidden from screen readers.

### 7. Changing a value never takes people somewhere else

Changing a value, such as choosing an option, ticking a box or typing a character, never submits a form, opens a page or window, or moves focus, unless the page says so before the control. A change of context comes from pressing a button.

- **Why:**
  - Opening a page or window, moving focus and changing the meaning of the page are changes of context (WCAG 2.2, 3.2.2), and submitting a form when its last field is filled, or opening a window when an option changes, fails (W3C, Failures F36 and F37). With the keyboard, moving through a select's options or a group of radio buttons changes the value at each step (W3C, Technique H84; Failure F37).
  - Screens that change unexpectedly were screen reader users' fourth biggest problem (WebAIM 2024).
- **Applies when:** a page has selects, radio buttons, checkboxes or fields.
- **Check:** change each select, radio group, checkbox and field with the keyboard, including the arrow keys through a select's options: a change that submits, opens a page or window, or moves focus, with no text before the control saying it will, fails.
- **Fail:**
  - a language select that reloads the page as soon as the arrow key reaches the next option;
  - a code field that submits and moves to the next page when the sixth digit is typed, with nothing saying so.
- **Pass:**
  - a language select with a "Change language" button;
  - "Enter the 6-digit code. We'll continue as soon as all 6 digits are in." above the code field;
  - a filter that updates the results below without moving focus;
  - a switch that saves its setting at once;
  - suggestions under a search field;
  - a select that changes which fields follow, with focus staying on it.

## Component

### 8. Whatever dragging or a gesture does, a click or tap can do

Anything done by dragging can also be done with single clicks or taps: move up and down buttons, a "Move to…" menu, a click on a slider's track. Swipes and pinches have buttons too. Only a drag whose path is the point, as on a signature pad, needs none. A drag shows what can be grabbed and where the item will land, and puts the item back if it is dropped where it can't go. A drag or gesture that is cut off leaves the control at rest and ready for the next press, and a swipe across a slider or carousel in the direction the page scrolls scrolls the page. What people drag stays under the pointer at the point where they grabbed it, with no lag; the drag goes on when the pointer leaves the item; and a quick flick counts like a long drag. Dragging an item near the edge of a list, board or panel that scrolls makes it scroll, so people can drop the item somewhere out of view. Holding a control, as in hold to record, doesn't select its label.

- **Why:** Some people can't drag, or make a gesture with several fingers or a path, and a keyboard way doesn't help those who use a pointer (WCAG 2.2, 2.5.7, 2.5.1). Atlassian shows a handle and a line where the item will land, and Apple moves an item back when a drop fails (Atlassian, "Pragmatic drag and drop"; Apple, "Drag and drop"). An item that trails the finger, jumps to its center when grabbed, or drops when the pointer slips off it feels broken, and sheets on phones close on a flick, so one that needs a long drag feels stuck (Emil Kowalski, "Apple Design" and "Design Engineering"). On phones, holding a control can select its label instead of acting (Emil Kowalski, "Feeling Native On Mobile"). Apple scrolls the place people drag over as they near its edge, and Atlassian's drag and drop scrolls a list or board by itself as an item nears its edge (Apple, "Drag and drop"; Atlassian, "Pragmatic drag and drop").
- **Applies when:** something can be dragged, swiped or pinched, except the scrolling and panning the browser does.
- **Check:** list what moves by dragging, swiping or pinching: sortable lists, boards, sliders, carousels, maps, panels that resize. For each, find a way to get the same result with clicks or taps only: none fails. Drag an item to a place it can't go: one that doesn't return fails. On a phone, start a drag on each slider, carousel and sortable item, then scroll, add a second finger, or switch apps: a control stuck in its dragging state fails. Swipe up and down across each slider and carousel: a page that doesn't scroll fails. Drag each custom item fast and slow: one that trails the pointer, jumps to its center when grabbed, or drops when the pointer leaves it fails. Flick each sheet or drawer: one that needs a long drag to close fails. On a phone, hold each control people hold: a label that gets selected fails. Drag an item to the far end of a long list, and a card to a board column off screen: an area that doesn't scroll fails.
- **Fail:**
  - cards that move between board columns only by dragging;
  - a carousel that moves only by swiping;
  - a panel that resizes only by dragging its edge;
  - a card that lags behind the cursor while it is dragged;
  - a bottom sheet that ignores a quick flick and closes only after a long drag;
  - a board whose off-screen columns a dragged card can't reach.
- **Pass:**
  - each card's ⋯ menu has "Move to…";
  - a carousel with previous and next buttons;
  - a slider that jumps to where its track is clicked.

### 9. Undo what can be undone; confirm only what can't

Common actions that can be reversed, such as archiving, removing from a list or moving to trash, happen at once and offer Undo. A confirmation is kept for what can't be undone or costs a lot when done by mistake: deleting for good, sending, paying, removing someone's access. It names what will happen to what, and the safe choice has focus. Typing a name to confirm is kept for the rare, widest losses, such as deleting a workspace. Closing a panel or leaving a page with unsaved changes keeps them, or asks first. In an editor or a board, Cmd or Ctrl+Z undoes the person's last actions one at a time and shows what came back. An Undo stays until it is used, or the item can be restored somewhere else. Whatever else applies, an action that changes or deletes people's saved data, commits them legally, moves their money or submits their answers to a test can be undone, has its input checked with a chance to correct it, or can be reviewed and corrected before it is final.

- **Why:** WCAG asks that an action that changes or deletes saved data, commits people legally, moves their money or submits test answers be reversible, checked for input errors, or confirmed before it is final (WCAG 2.2, 3.3.4), since otherwise one slip loses data or money people can't get back. People stop reading a warning they see often: after three weeks they followed an unchanging security warning 55% of the time, down from 87% (Vance et al. 2018), and the same happens to confirmations shown too often (Nielsen 2018). Typing the key detail kept attention but cost time (Bravo-Lillo et al. 2013), so Primer keeps it for the widest damage, names what is affected and skips confirmation for what can be undone (Primer, "Delete"); the W3C puts focus on the least destructive choice, and Apple asks before closing loses work (WAI-ARIA Authoring Practices, "Dialog (Modal) Pattern"; Apple, "Modality").
- **Applies when:** an action deletes, sends, pays, removes access or submits test answers, a confirmation exists, or a panel or page holds changes that aren't saved yet.
- **Check:** list each action that deletes, sends, pays, removes access or submits test answers, and how it is protected: undo, a check of what people entered with a chance to correct it, a confirmation, or nothing. One that deletes the person's data, pays, commits them or submits test answers with none of these fails. A confirmation for a common action that can be undone fails. In each confirmation, check that it names the item and the result, and which button has focus: one that names neither, or puts focus on anything but the safe choice, fails. Check that each Undo stays reachable: a toast that holds it stays until it is used, or the item can be restored somewhere else (Material 3, "Snackbar"): an Undo that goes before people can use it fails. Edit a form, then leave it each way: Escape, a click outside, the close button and the browser's Back. Losing the edits without a word fails; Cancel may discard them. In an editor or board, make three changes, then press Cmd or Ctrl+Z three times outside a text field: a press that does nothing, stops after one step, or changes something off screen without showing it, fails.
- **Fail:**
  - Delete project acts at once, with no undo and no confirmation;
  - "Are you sure?" before archiving an email that can be restored;
  - typing the name to remove one tag;
  - a settings panel that closes on a click outside and loses its edits;
  - a board where Cmd+Z after moving three cards does nothing.
- **Pass:**
  - Archive acts at once, offers Undo, and the item stays in Archive;
  - "Delete 3 projects and their 240 issues? This can't be undone." with Delete projects and Cancel, and focus on Cancel;
  - typing the workspace name to delete a workspace;
  - a confirmation before sending an email to 5,000 people, which can't be recalled.

### 10. Time limits warn and can be extended; content that moves or updates by itself can be paused

A session or a step that times out warns people before it ends and lets them extend it with one simple action, or people can turn the limit off or lengthen it. Content that updates itself on a timer beside other content, such as a live feed, a log, a ticker or figures that refresh every minute, can be paused, stopped or hidden, or set to update less often. Motion that starts by itself, or on hover, on focus or as it scrolls into view, and runs longer than five seconds beside other content, such as a carousel, a ticker, a looping animation or a background video, has a visible control to pause, stop or hide it. Stopping only while the pointer or focus stays on it is not enough. A small icon button is enough: a name that says what it does, and a target of at least 24 by 24 px. One control can stop all the motion on a page.

- **Why:**
  - People who read, type or move slowly need more time, and content that keeps changing can't be read (Understanding 2.2.1 and 2.2.2). So each time limit can be turned off, adjusted to at least ten times its length, or extended at least ten times after a warning that gives at least 20 seconds, unless it is a required part of a real-time event such as an auction, essential because more time would spoil the activity, or longer than 20 hours (WCAG 2.2, 2.2.1); and content that updates or moves by itself beside other content can be paused, stopped or hidden, unless the updating or motion is essential (2.2.2). Anything that updates at a preset interval, such as weather, news or stock prices, counts as updating itself, with no five-second allowance (Understanding 2.2.2).
  - Continuous movement distracts people with attention deficits, so WCAG asks for a way to pause, stop or hide motion that starts by itself, lasts more than 5 s and sits beside other content (WCAG 2.2, 2.2.2).
  - HMRC warns 2 minutes before a 15-minute sign-out, with one button to stay signed in and Escape doing the same, tested with users, screen readers and magnifiers (HMRC, "Service timeout").
- **Applies when:** a product has sessions or steps that expire, or content that updates or moves by itself.
- **Check:** list every time limit the product sets: session timeouts, expiring holds, timed steps. Let each run out: no warning with a way to extend, and no setting to turn it off or lengthen it, fails, unless an exception applies. For each region that updates itself on a timer (a feed, figures or a list that refresh, a chat log), look for pause, stop or a setting for how often it updates: missing fails. Load the page and wait without touching anything, then scroll each part into view, and hover and focus each card and image. For each thing still moving 5 s after it started, look for a pause, stop or hide control: none, and no documented shortcut, fails. Use the control, then move the pointer and focus away: motion that starts again fails.
- **Fail:**
  - a session that signs people out after 15 minutes with no warning, losing a half-filled form;
  - an activity feed that inserts new items at the top while people read, with no way to pause;
  - a row of customer logos that scrolls forever with no pause control;
  - a background video with no control.
- **Pass:**
  - at 13 minutes, a dialog "For your security, we'll sign you out in 2 minutes", with "Stay signed in";
  - a feed that collects new items behind a "3 new items" button;
  - a carousel with a pause button;
  - a 32 px pause icon in the corner of a background video, named "Pause background video";
  - a sign-out after more than 20 hours;
  - a live auction's countdown;
  - a time-based sign-in code that expires, which WCAG says can be considered essential (Understanding 2.2.1);
  - a loading animation that is the only thing on the page, which WCAG doesn't count as beside other content (Understanding 2.2.2).
