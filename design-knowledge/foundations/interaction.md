# Interaction

Covers how an interface answers use, from moment to moment: when each state of a control shows; the answer to a press, from the first change on screen to a long wait; what focus may do; announcements; keyboard, pointer and touch; messages that appear on their own; changes that show at once; when a form shows its errors; edits in a table; shortcuts; and what follows a view change in a single-page app. Not covered here: what looks usable and how each state looks, where an action's result appears, what changing a value may do, which control fits a choice, disabled controls, undo and confirmation, time limits, target sizes and the space between targets, and how things animate.

The rules come in four groups: rules for every level, then rules for primitives (what a press does), components (a widget, a form or a table: its keys, its messages, changes that show at once, a form's errors, edits in a table) and pages (shortcuts across a product, and view changes in a single-page app).

## Every level

### 1. Every press gets an answer at once, and every wait shows it is working

Within a fifth of a second of a click, tap or key press, and ideally within a tenth, something visible changes: the pressed look, the result itself, or a busy mark on the control. When the result takes longer than about a second, the screen shows that work is going on, where the result will appear; a shorter wait shows no spinner. Past about ten seconds, it shows how far along the work is, and people can keep working or cancel. Screen readers learn of the wait too. Work that has no side effects starts as soon as the need for it is known, such as an upload that starts when the file is picked, so the wait is often over before people ask; a step is never made longer to hide a wait.

- **Why:** Until something changes, people can't tell whether the press worked, so they press again or leave. Perception, a response people haven't prepared for and a small task have limits of about 0.1 s, 1 s and 10 s (Card et al. 1991), people notice a tap's delay from 69–96 ms (Deber et al. 2015), and Google counts 200 ms to the next frame as good (web.dev, "Interaction to Next Paint"). A spinner under 1 s only flashes and distracts, and past 10 s people need progress and a way to keep working or cancel (Primer, "Loading"; Apple, "Progress indicators"; Myers 1985). The best wait is one people never see: work started early, such as a font library sorted while people read the first steps, is done by the time they arrive (Interface Craft, "Perceived Performance"). A busy state or progress that appears without moving focus reaches screen readers only through a live region (WCAG 2.2, 4.1.3).
- **Applies when:** a click, tap or key press does something.
- **Check:** slow the network (DevTools, "Slow 4G") and the CPU (4×), then press each control that does something and watch: no visible change within about a second fails. For the main actions, read Interaction to Next Paint in the DevTools Performance panel: over 200 ms fails. For a wait over about 10 s, look for progress and a way to leave or cancel: either missing fails. Pick a file, or reach a step that needs slow work: work that starts only at the next press, when it could have started earlier with no side effect, fails. In the accessibility tree, check that the busy state or the progress is announced through a live region (`role="status"` or `aria-live`); a `progressbar` alone isn't announced when it changes (WCAG technique ARIA25). A busy state or progress outside a live region fails.
- **Fail:**
  - Send invite that shows nothing for three seconds and then closes the dialog;
  - an export that shows a spinner for a minute, with no progress and no way to keep working;
  - an upload that starts only when people press Submit, a minute after they picked the file.
- **Pass:**
  - Send invite turns busy at once, and the dialog closes when the invite is sent;
  - a large export that runs in the background, with a progress bar and a notice when it's done;
  - a Save button that shows its pressed look at once and finishes in 300 ms with no spinner: the result is the answer;
  - a payment or a message that waits for its button: work with side effects starts only when people choose it.

### 2. A state shows only while it's true

A control shows a state only while the state holds: hover only under a pointer that can hover, never left behind after a tap; the pressed look while the control is pressed; the focus ring wherever keyboard focus is; and a switch, checkbox or saved mark only once its real value is known.

- **Why:** A state shown when it isn't true tells people something false. Touch screens fake mouse events after a tap, so `:hover` styles stick (React Aria, "useHover").
- **Applies when:** always.
- **Check:** with touch emulated, or on a phone, tap a button and lift: a hover look that stays fails. Move focus with the keyboard and with the pointer: a ring left on a control focus has left fails. Reload with the network slowed: a switch, checkbox or saved mark that shows a state before its real one is known, then flips, fails.
- **Fail:**
  - a row that stays highlighted after a tap on a phone;
  - a switch that shows Off while its real state loads, then flips to On.
- **Pass:** hover styles inside `@media (hover: hover)`.

### 3. Focus never takes people somewhere else

Focusing a control never opens a page, a window or a dialog, and never moves focus.

- **Why:**
  - Opening a page or window, moving focus and changing the meaning of the page are changes of context (WCAG 2.2, 3.2.1).
  - Keyboard and screen reader users reach controls one step at a time, so focus that starts a change takes them somewhere they didn't choose. Screens that change unexpectedly were screen reader users' fourth biggest problem (WebAIM 2024).
- **Applies when:** a page has anything that takes focus.
- **Check:** Tab through the page: anything that opens, submits or moves focus when it merely gets focus fails.
- **Fail:** a tab that opens its page as soon as keyboard focus reaches it.
- **Pass:**
  - tabs that open their page only when pressed;
  - a tooltip that shows when its control gets focus.

### 4. Changes people need to know about are announced, once and politely

A change that happens without moving focus, such as a saved state, a count of results, a finished upload or an error that appears, reaches screen readers through a status region. A change shown in place, such as a count or a badge that turns to "Paused", is a status message too: it needs no extra message on screen, but it reaches screen readers. The region is in the page, empty, before the message goes in, and the message is short and said once. Most messages are polite and wait until the screen reader finishes; only an urgent error interrupts. A long wait announces its start and its end, not every step. A message that matters also stays on the screen, since an announcement can't be heard again.

- **Why:**
  - A message that appears without taking focus is lost to screen reader users unless a role or property passes it on. This covers results, waits, progress and errors, and text that stays on the page and changes, such as a cart count going from "0 items" to "3 items" (WCAG 2.2, definition of "status message"; Understanding 4.1.3).
  - A message put into a live region already on the page was read in almost every pairing of the main browsers and screen readers, while a region added together with its content mostly wasn't (TetraLogical 2024). An announcement can't be heard again, support for `aria-atomic`, `aria-relevant` and `aria-busy` is uneven, and assertive messages are for critical ones (Soueidan 2024). Primer announces when work starts and when it ends or fails, once for a group of loading parts (Primer, "Loading").
- **Applies when:** a page changes without moving focus.
- **Check:** list the changes that appear without moving focus. Find each in the accessibility tree: no `role="status"`, `role="alert"`, `role="log"` or `aria-live` fails. In the code, check that the region exists, empty, when the page loads: a region added together with its message fails, and so does `role="alert"` on a message that isn't an urgent error. Whether a screen reader actually reads it needs a screen reader test.
- **Fail:**
  - "Saved" that appears beside a form with no status role;
  - a cart count that changes from "0 items" to "3 items" with nothing announced;
  - a results count announced at every keystroke;
  - every message marked `role="alert"`.
- **Pass:**
  - a status region in the app's frame that says "12 results" when typing stops;
  - "Upload complete" in a status region, with the file also listed on screen;
  - a Copy button whose label turns to "Copied" while a status region says "Reference copied" once (MoJ Design System, "Copy button").

## Primitive

### 5. A press acts on release, and a second press never repeats the action

A click or tap acts when it is released over the control, so sliding off cancels it. While an action is under way, its control shows that it's busy and ignores more presses, and the server treats a repeated request as one. The busy control keeps its size, its place and keyboard focus.

- **Why:** An action on press takes away the chance to slide off and cancel a slip. WCAG 2.2 accepts one only when the release undoes it, as when holding a button shows a password, or when acting on press is the point, as on an on-screen keyboard, and accepts an action that runs on slide-off when it can be undone (2.5.2). People click twice from habit, on slow connections or because of tremors, so GOV.UK also asks the server to treat a repeat as one (GOV.UK, "Button"); a busy button set to native `disabled` drops focus, so Primer and React Aria keep it focusable ("Button" in both). A busy control that grows or shrinks pushes the controls beside it, and people press the wrong one.
- **Applies when:** a control starts an action that takes time or changes something.
- **Check:** with the network slowed, click each submit, send and pay button twice quickly, then five times: a second request in the Network panel, or a duplicate result, fails. Press each button and menu item, slide off and release: an action that runs fails. While a button is busy, check that it kept its width and that focus stayed on it (`document.activeElement`), and press Enter: a change of width, an action that runs again, or focus that left it fails.
- **Fail:**
  - Pay now that charges twice when double-clicked on a slow connection;
  - a menu item that runs on `pointerdown`, so a slip can't be cancelled;
  - a busy Save button set to `disabled`, which drops keyboard focus.
- **Pass:**
  - Save turns busy at once, keeps its width, label and focus, ignores more presses, and the server ignores a repeat of the same request;
  - Refresh or Copy run again on a second press: they are safe to repeat;
  - keys of an on-screen keyboard that act on press;
  - a button that shows the password while held and hides it on release.

## Component

### 6. Keys work the way people expect

Everything a pointer can do also works from the keyboard, without holding a key down or pressing keys within a set time, except what depends on the pointer's path, such as freehand drawing. Focus can leave every part with Tab, the arrow keys or Escape, or with a key the page tells people about. Tab moves from one control to the next. Inside a group such as tabs, a menu, a radio group, a list or a grid, the arrow keys move and Tab leaves the group. Enter or Space presses a focused button, Enter follows a link, Space ticks a checkbox, and Enter in a text field submits its form. Escape closes the top layer, such as a menu, a popover or a dialog, and puts focus back on what opened it, and so does every other close request the platform has, such as the back gesture on Android. When a dialog opens, focus moves into it, and while a modal one is open, Tab stays inside it, and scrolling inside it or over its backdrop never moves the page behind; when an item is deleted or a panel closes, focus moves to the nearest sensible place, never back to the top of the page.

- **Why:** Keyboard users can use only what keys reach, and focus that gets stuck or lost stops them: when a dialog closes and focus doesn't go back, they must Tab through the page to find their place. WCAG 2.2 requires that everything works from the keyboard, except what depends on the pointer's path; that focus can leave every part, with a standard key or one the page names; and that an opened dialog or menu takes focus or is reached by the next Tab, and that closing it puts focus back on what opened it, or in a logical place when that is gone (2.1.1, 2.1.2, 2.4.3, F85). The other keys follow browsers and the W3C's patterns (HTML Standard, "Implicit submission"; MDN, "Using the Popover API"; WAI-ARIA Authoring Practices, "Developing a Keyboard Interface", "Menu and Menubar Pattern", "Dialog (Modal) Pattern").
- **Applies when:** always.
- **Check:** put the mouse away and Tab from the top of the page: a control Tab never reaches, or one that can't be used with Enter, Space or the arrows, fails, and so does one that acts only after a key is held down; so does a place focus can't leave with Tab, the arrows or Escape, unless the page says which key leaves it. With a menu open inside a dialog, press Escape once: a dialog that closes along with the menu fails. Scroll inside each open modal past its end, and over its backdrop, on a phone too: a page that moves behind it fails. In tabs, menus, radio groups and lists, arrows that don't move, or Tab that doesn't leave, fail. Open each menu, popover and dialog from the keyboard and close it with Escape: focus that doesn't land back on what opened it fails. Delete an item with the keyboard, and close each panel: focus left on the page itself (`document.activeElement` is `body`) fails.
- **Fail:**
  - a custom select that opens only on click;
  - a dialog that closes and leaves focus at the top of the page;
  - a menu that Escape doesn't close;
  - Delete account that runs only after its button is held down for two seconds.
- **Pass:**
  - a menu button: Enter opens it, arrows move through it, Escape closes it and focus returns to the button;
  - deleting a row moves focus to the next row;
  - native `select` and `dialog` elements, which bring their own keys;
  - Tab that cycles inside an open modal dialog that Escape and its buttons close;
  - arrow keys in a menu that wrap from the last item to the first, or stop there: the menu pattern allows both;
  - an in-page link that jumps to a section: focus stays on the page, but the browser starts the next Tab at that section.

### 7. A message that appears on its own keeps focus in place, reaches screen readers and stays long enough

A message that appears on its own, such as a toast or a status, never takes focus from what people are doing, and every result and error message reaches screen readers. Keyboard users can jump to the toasts with one key. A toast that disappears stays at least 5 s, and pauses while hovered or focused, or while the tab is hidden.

- **Why:** A toast sits at the end of the page's code, so its Undo is many key presses away: React Aria and Base UI reach the toasts with F6, Radix with F8 and Sonner with Alt+T (React Aria, "Toast"; Base UI, "Toast"; Radix Primitives, "Toast"; Emil Kowalski, "Working With Sonner"). Adobe and Fluent 2 keep toasts without an action up 5 to 7 s, paused on hover (Adobe, "Toast"; Fluent 2, "Toast"), and a toast that expires in a hidden tab is never seen, so Sonner stops its timer there (Emil Kowalski, "Design Engineering"). Result and error messages that don't take focus reach screen readers only through a live region (WCAG 2.2, 4.1.3).
- **Applies when:** a message appears on its own, such as a toast or a status.
- **Check:** in the accessibility tree, check that each result and error message that appears without taking focus is in a live region (`role="status"`, `role="alert"`, `role="log"` or `aria-live`): one that isn't fails. Note where focus is before and after each message appears: focus moved to a toast or status fails. With the keyboard only, reach a toast's action: no key that jumps to the toasts fails. Start an action that ends in a toast, switch to another tab, and come back: a toast that expired while hidden fails.
- **Fail:** a "Saved" toast that takes focus away from the form.
- **Pass:**
  - a "Saved" status that screen readers read out while focus stays in the form;
  - a dialog that needs an answer, such as a warning that the session is about to end, taking focus.

### 8. Small changes show at once, and a failed one visibly goes back

Small, frequent changes that almost always succeed, such as renaming, starring, reordering or moving a card, show their result at once, before the server confirms. If the server rejects one, the item returns to its true state where the person can see it, with a message saying what failed. Changes that wait for a connection show that they are waiting. Payments, sending, and anything that can't be undone wait for the server: people act on a result they see, and putting the screen back can't undo what they did next.

- **Why:** A change that looks saved when it isn't makes people act on, or leave, something false. A change made on the device can show within one frame, well under the 69–96 ms at which people notice a tap's delay (rule 1). On failure, React and Vercel put back the confirmed value and tell the person (React, "useOptimistic"; Vercel, "Web Interface Guidelines"), and Linear counts the changes waiting to sync (Linear, "Download Linear", convention).
- **Applies when:** the product shows a change before the server confirms it.
- **Check:** in the Network panel, block the requests (or go offline), then make each small change: a change that stays as if saved, with no message and no sign that it's waiting, fails. Reload: the screen should show the server's state.
- **Fail:** a renamed file keeps its new name after the request failed, and the old name comes back on reload.
- **Pass:**
  - a card moves to Done at once; when the server rejects the move, the card goes back to In progress with "Couldn't move: you no longer have access" and Retry;
  - changes made offline, kept with a visible count of waiting changes and sent when the connection returns;
  - a payment that waits for the server behind a busy button.

### 9. Errors wait until people finish an answer, and clear as soon as it is right

No field shows an error before people have finished their first answer: not when they first move into it, and not on the first key press. A field is checked when people leave it, whether they typed in it or skipped a required one, or when they submit. On a page of one question, the check runs on Continue. Once a field shows an error, it checks again as people type, so the error goes the moment the answer is right. Errors that appear without a submit reach screen readers too.

- **Why:** checks at the field help people fix answers while they are still fresh in mind, and draw attention to required fields people skipped, but an error before people finish an answer interrupts them, and one that stays after the fix makes them think the fix failed (Scott 2024, "Inline Form Validation"; Wang 2025, "Few Guesses, More Success"). Cloudscape shows no field as checked on a first visit, flags a required field left empty, and checks again on each key press while people fix it (Cloudscape, "Validation"). GOV.UK checks only on submit, since early checks trouble people who type slowly and are hard to announce reliably (GOV.UK, "Recover from validation errors"); on a page of one question, the button sits right under the field, so nothing is lost by waiting. An error that appears without moving focus is a status message, which screen readers get only through its role (WCAG 2.2, 4.1.3), so without it people who can't see the error go on unaware.
- **Applies when:** a form checks its answers.
- **Check:** open the form and move into the first field: an error then fails. Type the first letter of an email address: an error then fails. Type a wrong value, leave the field, then fix it: an error that stays after the fix until people leave the field fails. With a screen reader, leave a field with a wrong value: an error that isn't announced fails.
- **Fail:**
  - "Enter a valid email" from the first letter typed;
  - "Required" shown as soon as people click into an empty field.
- **Pass:**
  - "Enter an email address like name@example.com" after people leave a field with "anna@", gone the moment they type the rest;
  - a password checklist that ticks off each rule as people type;
  - a count of characters left, or an error once text goes over the limit, as people type;
  - "This username is taken", shown after a short pause in typing.

### 10. An edit in a table keeps the row where it is

A value edited in a table cell shows it can be edited, saves when people confirm it or move on, and the row stays where it is until people refresh, even when the new value no longer matches the filter or the sort. Edits of more than one simple value go to a dialog or the record's page.

- **Why:** a row that jumps away, or disappears from a filtered list, the moment its value changes leaves people unsure the change saved and where the row went, so Cloudscape keeps changes displayed until the person refreshes the table and stops sorting when a cell changes, and Atlassian moves complex edits to a dialog or a page (Cloudscape, "Inline edit"; Atlassian, "Dynamic table").
- **Applies when:** people edit values in a data table's cells, except spreadsheet-like grids, where every cell can be edited.
- **Check:** sort and filter a table, then edit a cell so the row no longer matches: a row that moves or disappears before a refresh fails. Look for the sign that a cell can be edited: none fails.
- **Fail:** a task whose status is changed to Done in a list filtered to Open, which vanishes at once.
- **Pass:** the row stays, its status now Done, until people refresh or change the filter.

## Page

### 11. Shortcuts are easy to find and hard to press by accident

A product people use every day gives its frequent commands keyboard shortcuts, shows each next to its command (in the menu item, the tooltip, the command palette), and lists them all in one place, often under ?. A shortcut never takes a key the browser or the system uses for something else. A shortcut that is a single letter, number or symbol can be turned off or given a modifier key, or works only while its part of the page has focus.

- **Why:** A single-key shortcut fires when people mistype, or when people controlling the computer by voice speak a word (WCAG 2.2, 2.1.4). People rarely learn shortcuts shown only in menus, but used them for 94–99% of selections when all showed while the modifier was held (Grossman et al. 2007; Malacria et al. 2013), and GitHub and Linear list them under ? (GitHub, "Keyboard shortcuts"; Linear, "Navigating Linear"; convention). Apple keeps shortcuts for frequent commands, and a shortcut on a key the browser, the system or assistive technology uses breaks that key (Apple, "Keyboards"; WAI-ARIA Authoring Practices, "Developing a Keyboard Interface").
- **Applies when:** the product has keyboard shortcuts, or people use it every day.
- **Check:** open the shortcut list (try ? and Cmd or Ctrl+K) and the menus. For each single-key shortcut, look for a setting that turns it off or adds a modifier key to it, or check that it works only when its area has focus: a shortcut with none of these fails. Press the browser's own keys (Cmd or Ctrl with L, R, D, F): one that does something else in the product fails.
- **Fail:**
  - pressing D in a list deletes the selected row, and nothing turns single-key shortcuts off;
  - Cmd+D duplicates a row instead of bookmarking the page;
  - shortcuts listed only in a help article.
- **Pass:**
  - ? opens the shortcut list, menu items show their shortcuts, and a setting turns single-key shortcuts off;
  - Ctrl+F opening the product's own search over a long list that the browser's find can't search, which keeps the key's job;
  - Cmd or Ctrl+K opening a command menu, the common key in work tools, where people can change it.

### 12. When an app changes view without loading a page, its title, focus and announcement follow

In a single-page app, each view has its own title, which says its topic or purpose, set when the view changes, as a page load would. Focus then moves either into the new view, to its first heading or its main region, which take focus without joining the tab order (`tabindex="-1"`) and are read when they do, or back to the top, with the new title announced in a status region (rule 4), as after a page load. A heading or region that takes focus needs no announcement as well, so nothing is read twice. Focus never stays on a link that is gone.

- **Why:**
  - When a view changes without a page load, screen reader users hear nothing and focus can stay on a link that is gone, unless the app moves focus or announces the new title; some frameworks announce the title by default, and others leave both to the app (Next.js, SvelteKit and React Router, "Accessibility"; Nuxt, "NuxtRouteAnnouncer").
  - Angular asks for focus where people can go straight into the new content, such as its heading, not on the page itself, while SvelteKit puts focus on the page itself and announces the title, as a page load does (Angular, "Accessibility in Angular"; SvelteKit, "Accessibility"). WCAG counts a resource at its own address as a page, so a view with its own address needs its own title (WCAG 2.2, definition of "web page"; 2.4.2): people using a screen reader or many tabs otherwise can't tell where they are.
- **Applies when:** a page changes its main content without a full page load, except a widget, such as tabs, that changes the panel below it.
- **Check:** move between views with the keyboard. A browser tab title that stays the same, for a view at its own address, fails. Focus should land on the new view's heading or main region, or return to the top with the new title announced, and the next Tab should go into the new view or on from the top: anything else fails. In the code, find the framework's route announcer or the app's own focus handling: an app with neither fails. Whether a screen reader reads the new view's name needs a screen reader test.
- **Fail:**
  - an app whose title stays "Dashboard" on every view;
  - after choosing "Settings" in the sidebar, focus is lost with the removed link and nothing is announced.
- **Pass:**
  - "Billing · Settings · Acme" as the new title, and focus on the heading "Billing";
  - focus sent to the top with the new title announced, as a page load does.
