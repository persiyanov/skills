# Layout

Covers where each part sits: the same part in the same place across items of one kind, controls next to what they act on, the places people expect, a form's column, where an action's result appears, the page's grid and margins and how wide text people read runs, how the layout changes with the window, density, sticky areas, where a short screen's content sits, and one modal at a time. Not covered here: grouping by space, gaps, the spacing scale, alignment, padding, hit areas, and what a screen does as it loads, overflows or mirrors.

The rules come in three groups: rules for every level, then rules for components (a form, and where an action's result appears) and pages (the grid, widths, density, sticky areas, short screens and modals).

## Every level

### 1. Things of one kind are laid out the same way

Every card, row or tile of one kind puts the same part in the same place, with the same spacing. People can then compare items and find a part by where it sits. Leading thumbnails, avatars and icons line up, and cards in a row share a height. Inside a row, what tells the items apart comes first, and actions sit at the trailing end. A part people compare across items, such as a status, a meter, a price or an action, stays the same distance from the edge it belongs to, even when the text above it is longer.

- **Why:** Once people learn where a part sits, they find it by position, and stable positions beat moving ones (Scarr et al. 2013). Material 3 lines up leading elements, gives similar elements the same spacing, and orders a row by importance, with supplementary actions at the trailing end ("Grids & spacing"; "Lists").
- **Applies when:** the items are of one kind.
- **Check:** look at the siblings side by side. Measure the part's distance from the edge it belongs to, in the shortest item and in the longest.
- **Fail:**
  - a usage meter right under the name on short cards, and lower down on cards with a long description;
  - one list with dividers next to a sibling list without them (Interface Craft, "Refining Today").
- **Pass:**
  - the meter on the bottom edge of every card, with descriptions clamped to two lines;
  - a grid of photos of different heights, where no part is compared across items.

### 2. Controls sit next to what they act on

Buttons for one item sit on or beside that item. Filters and view options sit right above the content they change. An error sits next to its field. A control at the end of a row reads as part of that row when it sits closer to the row's content than to the control above it, or when lines or backgrounds mark the rows. Otherwise space groups it with the controls above and below it, since people group things by the gaps between them (Wertheimer 1923).

- **Why:** People take a control placed near content as acting on it, and a nearby control is faster to reach, since the time to reach a target grows with its distance (Material 3, "Grids & spacing"; Fitts 1954). Lines or a background around each row make the row one region, which can override space (Palmer 1992).
- **Applies when:** the control acts on one item or one section, except actions for the whole page, which sit in the page header.
- **Check:** for each control, name what it changes. Then check how far apart they are, and whether anything unrelated sits between them. For a control at the end of a row, compare its distance from the row's content with its distance from the control above it.
- **Fail:**
  - an Edit button in the page header that changes one card further down the page;
  - a filter bar separated from its list by a summary panel;
  - a button at the end of each row, further from its row's content than from the button above it, with no lines or backgrounds marking the rows: the buttons read as one column.
- **Pass:**
  - Edit on the card it changes, and the filters directly above the list;
  - buttons at the end of rows separated by lines.

### 3. Things sit where people expect them, and stay there

Use the places the product already uses, then the platform's, then the ones common to products of the same kind. Navigation, the page header with its actions, and side panels sit in the same place on every page, and navigation that repeats across pages keeps the same order, unless the user changes it.

Buttons that end a dialog sit on the trailing side, with the main one last; buttons that end a form on a page sit on its leading edge, with the main one first. Windows puts the main button first in dialogs too. A product keeps one side and one order for each, everywhere. In right-to-left languages, the places mirror.

- **Why:** People look for things where they found them before and where similar products put them; people who magnify part of the screen rely on it most, so WCAG requires repeated navigation to keep its order (WCAG 2.2, 3.2.3; Understanding 3.2.3; Nielsen 2023; Tuch et al. 2012). The order of buttons is what most systems do (Apple, "Alerts"; Material 3, "Dialogs"; Carbon; Atlassian; Primer; GOV.UK, "Button"), with Windows the exception (Microsoft, "Dialog controls").
- **Applies when:** a convention exists.
- **Check:** compare the target with two other screens of the product, and with two products of the same kind. Repeated navigation in another order, not set by the user, fails; anything else in a place the product, the platform and products of its kind don't use fails. Compare the ends of every dialog and form: more than one side or order for either fails.
- **Fail:** page actions top right on every page but one, where they sit at the bottom.
- **Pass:**
  - the title on the leading side and the page actions on the trailing side, in one header row, on every page;
  - on a phone, the main action in a bar at the bottom, on every page that has one.

## Component

### 4. A form is one column, and each field is as wide as its answer

Fields follow each other in one column. Only two or three short fields that belong to one thing share a row:
- day, month and year;
- first and last name;
- city, state and postal code;
- card expiry and security code.

A field for an answer of fixed length, such as a postcode, a year or a two-digit limit, is as wide as that answer; fields for answers of varying length share one default width instead of stretching to fill the space.

- **Why:** In Baymard's checkout studies, people skipped and misread fields in forms with several columns; two or three fields of one thing on a row caused no problems (Scott, "Avoid Extensive Multicolumn Layouts", 2023). A field's width tells people how long an answer is expected (Wang 2025; GOV.UK, "Text input"; Carbon, "Text input").
- **Applies when:** a form of several rows that people fill in from top to bottom, such as the checkout forms Baymard studied.
- **Check:** look for fields of different values side by side, and compare each field's width with its longest likely answer. Fields side by side that aren't short parts of one thing fail; a field whose width doesn't fit its answer fails.
- **Fail:**
  - a two-column form with Name and Company in the first row, and Email and Phone in the second;
  - a two-digit daily limit in a field half the panel wide.
- **Pass:** one column, with city and postal code sharing a row.

### 5. The result appears where the action happened

The result of an action shows where the person is looking: the item changes in place, a message appears next to the control or field, or the view moves to the new item. When the change itself is visible, no message is needed. A toast is for the result of something done in the background or out of view. A toast that closes by itself never holds the only way to an error or an action, and a toast with an action stays until it is used or closed (default).

- **Why:** People need to see what their action did (Nielsen 1994), and a toast far from it can fall outside the area people magnify and reaches screen readers far from its cause, so Primer adds no message when the change shows (Primer, "Accessible notifications and messages"; "Notification messaging"). Material 3 keeps a toast with an action until it is used (Material 3, "Snackbar"). WCAG lets a message that disappears on its own hold information or an action people can't find elsewhere only when people can turn its timer off, make it at least ten times longer, or are warned before it closes and can extend it with a simple action (WCAG 2.2, 2.2.1), since people who read slowly or look away lose it.
- **Applies when:** an action has a result people need to know: saved, sent, failed, or done in the background.
- **Check:** do each main action and note where its result appears: a result shown only far from the action, when it could show in place, fails. Let each toast expire: one that held an action, such as Undo, Retry or View, or an error, that can't be found anywhere else fails.
- **Fail:**
  - a Save error shown only in a toast that closes after 4 s;
  - "Deleted. Undo" in a toast that closes after 5 s, with no other way to restore the item;
  - "Saved" in a corner toast while the edited field shows nothing.
- **Pass:**
  - "Saved" next to the Save button;
  - an error under the field that caused it;
  - "Export ready" with a View link, in a toast that stays until closed, and the export also listed on the Exports page;
  - "Archived. Undo" in a toast that closes after 5 s, when the item can also be restored from the archive;
  - a switch that turns on with no message: the switch shows the result;
  - a disappearing toast that repeats what the page already shows.

## Page

### 6. A page has a grid and fixed margins

The main content's edges sit on a few columns, and every page keeps the same margins at a given width. Margins, and the gaps between large regions, may grow at wider window classes, as the product's tokens set them; padding inside components stays the same at every width. Text people read gets a maximum width: about 45 to 75 characters a line, never more than 80, and at most about 40 in Chinese, Japanese and Korean; paragraphs never run narrower than about 40 characters in other languages. On wide screens, the extra width goes to margins or side panels, not to longer lines. Backgrounds, images and full-width lists may run to the screen's edge; text and controls stay inside the margins.

- **Why:** People take aligned items as related, and poor alignment slowed search on screens (Apple, "Layout"; Parush et al. 1998). Systems change margins by window class and keep the padding inside components fixed: Material 3 uses 16 dp margins on compact windows and more space on larger ones, and Carbon keeps its padding at 16 px at every breakpoint (Material 3, "Breakpoints" and "Grids & spacing"; Carbon, "2x Grid"). No system scales every gap by one factor. On screens, people read long lines as fast as short ones, but they understood a 55-character line better than a 100-character one, and they prefer about 50 to 70 (Dyson and Haselgrove 2001; Dyson 2023). Systems range from Material 3's 40 to 60, with up to 120 on large screens, to the U.S. Web Design System's 45 to 90 and Primer's 80 or less (Material 3, "Lists"; USWDS, "Typography"; Primer, "Typography"); WCAG asks for a way to get lines of 80 characters or fewer, or 40 for Chinese, Japanese and Korean (1.4.8, AAA), and Japanese typesetting keeps lines to about 40 characters (W3C, JLREQ).
- **Check:** draw the alignment lines at each width, and compare the margins of two pages at the same width. Count the characters in a full line of each paragraph people read, or compare the block's width with the font's `ch` unit: over 80 fails, and so does under 40.
- **Fail:**
  - 24 px margins on the list page and 32 px on the settings page at the same width;
  - a paragraph that stretches to 1,800 px on a wide screen.
- **Pass:** the same margins on every page, and reading text capped in width.

### 7. The layout changes with the window, and each part with its own width

The number of panes and the kind of navigation change at the window classes. A component changes when its own container gets too narrow for it, not at a device width. A row of logos or marks fits its container on one line, or wraps into rows of about equal length, never leaving one alone on a line. Breakpoints are set in `rem` or `em`, so people who set a larger text size in the browser get the narrow layout sooner (default).

One pane is flexible and takes the width left over; side panes keep a fixed width, and a pane people resize stops where its content still fits. When panes stack into one column, the main pane comes first, and supporting content follows it or opens in a sheet.

- **Why:** Material 3 uses one pane below 600 dp, one from 600 to 839 dp (two are possible, but never for dense information) and two from 840 dp; one pane is flexible beside fixed ones, and a supporting pane stacks below the main one ("Breakpoints"; "Canonical layouts"; "Pane layouts"; "Supporting pane"). Breakpoints inside a page belong where the content stops fitting (LePage and Andrew, web.dev). In media queries, `rem` and `em` follow the browser's text-size setting, not the page's styles (Media Queries 4).
- **Check:** resize from 320 to 1920 px and note every width where something breaks or looks cramped; a row of logos or marks that leaves one alone on a line fails. Then take screenshots at 320, 390, 768, 1024, 1280, 1440 and 1920 px.
- **Fail:**
  - a card that switches to its narrow layout at a viewport width, so it breaks inside a narrow sidebar on a wide screen;
  - five agent logos in a narrow middle column that wrap four and one.
- **Pass:** `@container (width < 400px)` on the card.

### 8. Density follows how the page is used

A tool people work in all day can show more at once. A page people visit rarely or briefly shows less and explains more. When space is tight, keep the groups visible with lines or backgrounds, which group as strongly as space (Palmer 1992), not by making every gap equal. A compact density tightens space, not type: text keeps its sizes, and help, alerts and error messages keep the normal spacing.

- **Why:** Higher density suits products where people scan and compare a lot of information; lower density suits pages with less information or one message (Material 3, "Grids & spacing"; Cloudscape, "Content density"). Many people who use a tool every day never become experts and still need labels and help (Kaplan, "Supporting 'Power Users' Isn't Enough", 2025). No study sets a best density. Compact modes tighten padding and rows but keep body text at its size, and leave messages at the comfortable spacing so they still stand out (Cloudscape, "Content density").
- **Check:** name how often and for how long people use the page. Compare its density with the product's other pages of that kind. Switch to the compact density, if there is one: smaller text, or help and error messages squeezed with the rest, fails.
- **Fail:**
  - a table people monitor all day with 64 px rows, showing nine rows per screen;
  - a compact mode that drops body text to 12 px.
- **Pass:**
  - that table at 32 px rows, with its header, toolbar and pagination sized to match;
  - IBM Carbon's data table, which offers rows from 24 to 64 px and uses 40 px by default ("Data table").

### 9. Sticky areas never cover what the user is on

A sticky header or footer leaves room for the element in focus, and for the target of a link within the page, unless the user moved content over it, or opened content they can close without moving focus. At 320 px wide and at 400% zoom, sticky bars stop sticking, or people can hide them.

- **Why:** An element in focus is never entirely hidden by the page's own content, except content the user moved there or opened and can close without moving focus (WCAG 2.2, 2.4.11, and its notes); W3C's technique C43 uses `scroll-padding` for this. At small sizes sticky bars leave little room to read, and W3C strongly suggests making them static there (Understanding 1.4.10; technique C34).
- **Applies when:** the page has sticky or fixed areas.
- **Check:** Tab through the page and follow the links within it: an element in focus that a sticky area hides entirely fails; one partly hidden, or a link's target hidden, fails. At 320 px and at 400% zoom, see how much of the height the sticky bars take.
- **Fail:** a 64 px sticky header with no `scroll-padding`, so the field the user tabs to sits under it.
- **Pass:** `html { scroll-padding-block-start: 64px }`, or the header's height; `scroll-padding-block-end` for a sticky footer.

### 10. A short screen keeps its content in one group

When a screen's content is shorter than the window, it stays together as one group, and the leftover space goes around the group, never inside it.
- A screen that does one thing, such as sign-in or a confirmation, centers the group side to side. Top to bottom, the group sits centered in the window or a fixed distance below the top; on a phone it starts near the top or is centered, with the main button right under the content.
- An error page or an empty state starts a short distance below the header, or below the top of its area.

- **Why:** A line split from its group reads as a group of its own, since people group things by the gaps between them (Wertheimer 1923; Kubovy et al. 1998). Of 12 products' sign-in pages (surveyed November 2026), all centered the group side to side; on desktop, 7 centered it top to bottom and 4 set it a fixed distance from the top; on phones, 8 of 11 started it near the top, and none pinned the main button to the bottom. Their 404 pages and empty states started just below the header or the top of their area. Carbon centers its login page; Atlassian, Primer and GOV.UK use a fixed distance from the top. No study favors one vertical position.
- **Applies when:** a screen, or an area, whose content is shorter than the window.
- **Check:** take screenshots at 1440 by 900 and at 390 by 844. Measure the gaps inside the group and the space around it, and note where the group sits. Leftover space inside the group fails; a group away from the place set out above fails.
- **Fail:** at 360 px, the title and buttons at the top, the terms line alone in the middle of the screen, and empty space below it.
- **Pass:**
  - the terms line right under the buttons, with the group centered in the window on desktop and near the top on a phone;
  - empty space below an empty state that sits under its area's heading.

### 11. One modal at a time: a short confirmation may open over it, never a second task

One modal dialog or sheet shows at a time. A short confirmation or alert may open over it; a second task, such as a form, never does.

- **Why:** Apple and Atlassian show one modal at a time, while Material 3 and Fluent 2 allow a short confirmation over one (Apple, "Modality"; Atlassian, "Modal dialog"; Material 3, "Dialogs"; Fluent 2, "Drawer").
- **Applies when:** a dialog or a sheet can open another layer.
- **Check:** from each dialog and sheet, follow every action that opens another layer: a second modal with a task of its own, such as a form, fails.
- **Fail:** a profile form that opens over the navigation drawer, which stays open behind it.
- **Pass:**
  - the drawer closes before the profile form opens;
  - a "Discard changes?" confirmation over a full-screen dialog.
