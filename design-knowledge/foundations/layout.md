# Layout

Covers grouping, alignment, spacing, grids and page regions, reading order, density, and how all of these hold up across widths, zoom, content length and right-to-left languages.

- These rules are a floor: meeting them all makes a product well made, not yet good.
- **Every product:** holds even when popular products break it, and no product's own rules change it.
- **Current practice:** what research, the design systems of top products and strong designers recommend now. A product's own documented value replaces it.
- **Default:** a starting point for designing, taken from strong designers' practice: a review finding only when a harm can be named.
- **Fail and Pass:** examples. A Pass shows one way to meet the rule, not the only one.

The rules come in four groups: rules for every level, then rules for primitives (the spacing scale and single controls), components (a part made of controls or of other components, such as a card, a form field, or a list with its toolbar) and pages.

## Every level

### 1. More space between groups than inside them

Space alone shows what belongs together: the gap around a group is clearly larger than the gaps inside it. A heading sits closer to what it introduces than to what is above it. A label sits closer to its own field than to the field before it.

- **Why:** People group things by how the gaps compare, not by their size: the closer grouping wins about 79% of the time when one gap is 1.2 times the other, and about 96% at 1.5 times (Wertheimer 1923; Kubovy et al. 1998).
- **Kind:** Every product: the gap around a group is larger than every gap inside it. Current practice: at least 1.5 times larger. No study gives designers a minimum, and the often-repeated "at least 2×" has no source.
- **Applies when:** space is what shows the group. A shared border or background groups items whatever the gaps (Palmer 1992), and so does a strong shared color (Quinlan and Wilton 1998).
- **Check:** look first. Blur a screenshot until the text can't be read, or squint: the shapes that remain should match the groups in the content. Then measure each group you see, between what is drawn (letters, icon shapes, visible edges), not between boxes. The smallest gap between the group and anything around it should be at least 1.5 times the largest gap between its own items.
- **Fail:** a label 16 px below the field before it and 16 px above its own input. A section heading with equal space above and below. A button whose icon sits 12 px from its label inside 8 px of padding.
- **Pass:** the label 6 px above its input and 24 px below the field before it.
- **Not a fail:** cards 8 px apart with 16 px of padding inside: their borders do the grouping.

### 2. Group with space first; add a box or a line only where space can't do it

Use a border, a background or a divider for:
- an item people act on as one unit: they select, drag or open it, or use its own actions;
- parts of different kinds side by side;
- dense tables and long lists, where space would cost too much.

Siblings of one kind share one container, not a box each. Never use a box and a large gap for the same group.

- **Why:** A shared border or background groups as strongly as space and can override it (Palmer 1992), so space can do the job without adding marks. Every box adds edges, and the share of a screen's pixels that are edges predicted how long people took to find things (r = .83; Rosenholtz et al. 2007). Material 3 keeps a card for content and actions about one subject ("Cards").
- **Kind:** Current practice.
- **Check:** hide the boxes: add `*{border-color:transparent!important;background-color:transparent!important;box-shadow:none!important}` to the page and take a screenshot. For a dialog or side panel, put its selector before `*`, so it keeps its own background. If the groups show as clearly as before, the boxes are extra. If a group disappears, its box is doing the grouping, which fails except in the uses listed above. Then count the boxes inside boxes.
- **Fail:**
  - four metrics in a row, each in its own card (Interface Craft, "Refining Presscut");
  - a card inside a card inside a card;
  - a toolbar wrapped in a container that does nothing for it (Interface Craft, "Refining Today").
- **Pass:** the four metrics in one container, separated by space.
- **Not a fail:** selectable rows, each with its own background on hover and selection: the box marks the unit people act on.

### 3. Gaps at the same level are equal

The gaps between sections match each other, and the gaps between the items of a list match.

- **Why:** People read a smaller gap as a closer tie (rule 1), so unequal gaps between equal things suggest groups that aren't there (Material 3, "Grids & spacing").
- **Kind:** Current practice. A difference of 1 to 4 px between gaps meant to be equal is an accident; it gets fixed too.
- **Applies when:** the items are at the same level of the structure. Gaps between levels differ on purpose (rule 1).
- **Check:** measure the gaps between items at the same level, from what is drawn. Gaps meant to be equal match to the pixel.
- **Fail:** 32 px between a chart and the tables below it, but 16 px between the two tables (Interface Craft, "Refining Presscut"). List rows 12 px apart, except one pair 14 px apart.
- **Pass:** one gap between all sections of the page, and one between all rows.

### 4. Things of one kind are laid out the same way

Every card, row or tile of one kind puts the same part in the same place, with the same spacing. People can then compare items and find a part by where it sits. Leading thumbnails, avatars and icons line up, and cards in a row share a height. Inside a row, what tells the items apart comes first, and actions sit at the trailing end.

- **Why:** Once people learn where a part sits, they find it by position, and stable positions beat moving ones (Scarr et al. 2013). Material 3 lines up leading elements, gives similar elements the same spacing, and orders a row by importance, with supplementary actions at the trailing end ("Grids & spacing"; "Lists").
- **Kind:** Current practice.
- **Applies when:** the items are of one kind. Measure a part's position from the edge it belongs to. A part people compare across items, such as a status, a meter, a price or an action, stays the same distance from that edge even when the text above it is longer.
- **Check:** look at the siblings side by side. Measure the part's distance from its item's edge in the shortest item and in the longest.
- **Fail:** a usage meter right under the name on short cards, and lower down on cards with a long description. One list with dividers next to a sibling list without them (Interface Craft, "Refining Today").
- **Pass:** the meter on the bottom edge of every card, with descriptions clamped to two lines.
- **Not a fail:** a grid of photos of different heights, where no part is compared across items.

### 5. Few alignment lines, shared exactly by neighbors and by parts with one role

Alignment makes a screen read as one order: edges on a shared line read as related, and fewer lines read as simpler. Put edges on a few shared lines (left edges, center lines, baselines), at two scales:
- **Up close:** inside a component and between neighbors, an edge meant to sit on a line sits on it to the pixel. Measure what is drawn (text by its letters, icons by their shapes), not the boxes around them. Align a heading with the visible edge of the field below it, not with the text inside the field (Interface Craft, "Layout & Alignment").
- **Across the screen:** parts with the same role share a line, however far apart: the header rows of panes side by side, the tops of content areas, headings of one level, the leading edge of a column's items, with or without icons, and the trailing edge of its counts, badges and chevrons.

Parts that share no role don't need to share a line.

- **Why:** People take aligned items as related, and poor alignment slowed search on screens (Apple, "Layout"; Parush et al. 1998). Between nearby edges people see an offset far smaller than a pixel (Hu et al. 2021), but the farther apart two edges are, the larger an offset must be before anyone sees it (Burbeck 1987). Interface Craft counts the lines across a whole screen and cuts four to two ("Refining Today").
- **Kind:** Current practice: as few lines, and as few ways of aligning, as the content allows on one screen (Interface Craft, "Layout & Alignment"). Between neighbors, an edge 1 to 4 px off a shared line is a mistake: an offset that small looks like an accident, not a choice. Between parts with one role, a miss fails once it shows in the screenshot.
- **Applies when:** every screen, panel and dialog. A few pixels between unrelated parts far apart is not a finding.
- **Check:** draw the lines on a screenshot of the whole window, through every pane. Up close, mark each edge 1 to 4 px off a line it shares with a neighbor. Across the screen, list the parts with one role and mark any that miss the line the others share. Then count the lines: lines close together, such as 8 px apart, are the first to merge.
- **Fail:**
  - list icons 2 px left of the heading's text;
  - icon buttons of different widths lined up by their boxes on one edge, so their icons miss one center line;
  - the left edges of two columns of fields 8 px apart, with no reason for the step;
  - a header padded 20 px, a list 14 px and a footer 24 px, all in one column;
  - one centered block inside a left-aligned list (Interface Craft, "Layout & Alignment");
  - one pane's title 25 px lower than the titles and tabs of the panes beside it;
  - a list item without an icon whose text starts where the other items' icons are;
  - counts and badges at the end of rows that end 12 px before the chevrons above them.
- **Pass:** one leading edge for the column, with nested content indented by one spacing step.
- **Not a fail:**
  - a box moved 1 px so the shape inside it looks aligned;
  - a centered empty state that stands alone in its area;
  - a centered block inside its own border or background, in a left-aligned list: the box makes it a region of its own;
  - a 2 px difference between a sidebar icon and a chart axis across the screen: they share no role.

### 6. Controls sit next to what they act on

Buttons for one item sit on or beside that item. Filters and view options sit right above the content they change. An error sits next to its field. A control at the end of a row reads as part of that row when it sits closer to the row's content than to the control above it, or when lines or backgrounds mark the rows. Otherwise space groups it with the controls above and below it (rule 1).

- **Why:** People take a control placed near content as acting on it, and a nearby control is faster to reach, since the time to reach a target grows with its distance (Material 3, "Grids & spacing"; Fitts 1954). Lines or a background around each row make the row one region, which can override space (rule 2).
- **Kind:** Current practice.
- **Applies when:** the control acts on one item or one section. Actions for the whole page sit in the page header.
- **Check:** for each control, name what it changes. Then check how far apart they are, and whether anything unrelated sits between them. For a control at the end of a row, compare its distance from the row's content with its distance from the control above it.
- **Fail:** an Edit button in the page header that changes one card further down the page. A filter bar separated from its list by a summary panel. A button at the end of each row, further from its row's content than from the button above it, with no lines or backgrounds marking the rows: the buttons read as one column.
- **Pass:** Edit on the card it changes, and the filters directly above the list. Buttons at the end of rows separated by lines.

### 7. What people see keeps the code's order

People read a screen from the top and from the leading edge, and the keyboard and screen readers follow the order in the code. So what people see comes in the code's order: nothing is moved away from it by CSS.

- **Why:** Keyboard and screen-reader users get the code order (WCAG 2.2, 1.3.2 Meaningful Sequence and 2.4.3 Focus Order).
- **Kind:** Every product: where the order changes the meaning or how things work, what people see follows the code order (WCAG 2.2, 1.3.2 and 2.4.3). Current practice: what people see follows the code order everywhere.
- **Applies when:** always.
- **Check:** press Tab from the top of the page, and compare the order focus moves in with the order on screen. Look for CSS that moves things away from their code order: `order`, `row-reverse` and `column-reverse`, grid placement, absolute positioning.
- **Fail:** `row-reverse` shows Cancel then Save, while Tab reaches Save first.
- **Pass:** the code order is Cancel, Save, and that is what people see.

### 8. Things sit where people expect them, and stay there

Use the places the product already uses, then the platform's, then the ones common to products of the same kind. Navigation, the page header with its actions, and side panels sit in the same place on every page.

Buttons that end a dialog sit on the trailing side, with the main one last; buttons that end a form on a page sit on its leading edge, with the main one first. Windows puts the main button first in dialogs too. A product keeps one side and one order for each, everywhere.

- **Why:** People look for things where they found them before and where similar products put them; people who magnify part of the screen rely on it most (WCAG 2.2, Understanding 3.2.3; Nielsen 2023; Tuch et al. 2012). The order of buttons is what most systems do (Apple, "Alerts"; Material 3, "Dialogs"; Carbon; Atlassian; Primer; GOV.UK, "Button"), with Windows the exception (Microsoft, "Dialog controls").
- **Kind:** Every product: navigation that repeats across pages keeps the same order, unless the user changes it (WCAG 2.2, 3.2.3). Current practice: everything else, and the product's own places come first.
- **Applies when:** a convention exists. In right-to-left languages the places mirror.
- **Check:** compare the target with two other screens of the product, and with two products of the same kind. Compare the ends of every dialog and form: one side and one order for each.
- **Fail:** page actions top right on every page but one, where they sit at the bottom.
- **Pass:** the title on the leading side and the page actions on the trailing side, in one header row, on every page. On a phone, the main action in a bar at the bottom, on every page that has one.

### 9. Nothing moves while the page loads or a control changes state

Reserve the space for content that arrives later. A control keeps its size when its label or state changes.

- **Why:** Content that moves after it appears makes people lose their place or press the wrong thing; a Cumulative Layout Shift of 0.1 or less counts as good (web.dev, "Optimize Cumulative Layout Shift").
- **Kind:** Every product: controls never move unless the user moved them: content that arrives later doesn't push them, and a control that changes doesn't push its neighbors. Current practice: nothing else moves either.
- **Applies when:** something visible moves that the user didn't ask to move. The content below a section the user opens moves on purpose and doesn't count; a button pushed aside when the button next to it changes its label does.
- **Check:** compare the screenshots of the loading and loaded states, and of the rest and hover states, for elements that moved. In the browser, a `PerformanceObserver` on `layout-shift` entries (ignoring those with `hadRecentInput`) reports shifts as they happen.
- **Fail:** rows jump when an image without `width` and `height` loads. A button grows when its label changes to "Saving…" and pushes the button beside it.
- **Pass:** images with `width` and `height` or an `aspect-ratio`; a skeleton the size of the content it stands for; a button that keeps its width.

### 10. Nothing overlaps, gets cut off, hides under something or scrolls sideways

Every layout holds:
- at every supported width, down to 320 CSS px, and 256 CSS px high for content that scrolls sideways by design, such as vertical Japanese text;
- at 200% and 400% zoom;
- with very short and very long content (names, translations, numbers);
- with the text spacing of WCAG 1.4.12: line height 1.5 times the font size, 2 times the font size after paragraphs, letter spacing 0.12 times and word spacing 0.16 times;
- with the on-screen keyboard open: the field being typed in stays in view.

Text cut short with an ellipsis is allowed only when people can still reach the full text with the keyboard and by touch.

- **Why:** Content that is cut off or covered is lost. WCAG 2.2 requires it at 200% text size, except in captions and images of text (1.4.4), at 320 CSS px wide (1.4.10) and with larger text spacing (1.4.12); text cut short passes only with a way to reveal the rest (Understanding 1.4.10). Translations are usually longer, most of all short ones: text of up to 10 characters can grow 200–300% (W3C Internationalization, "Text size in translation"). A field hidden under the on-screen keyboard means typing blind.
- **Kind:** Every product. Current practice: with the keyboard open, the button that sends the form stays in view too.
- **Applies when:** always. Data tables (though not their single cells), maps, code and toolbars that must stay in view may scroll in two directions (the 1.4.10 exception), but the page around them still reflows. A language or script that doesn't use one of the 1.4.12 spacings in writing is tested with only the ones it uses.
- **Check:** take screenshots:
  - at each supported width, down to 320 px;
  - at 200% and 400% zoom;
  - with the longest real values and one long unbroken string;
  - with the 1.4.12 spacing applied;
  - on a phone or a phone simulator with the keyboard open, each field focused in turn.

  In each, look for text cut off, things that overlap, and anything that scrolls sideways. Text cut short with an ellipsis fails when its full text can't be reached with the keyboard and by touch, such as text whose full value is only in a hover tooltip.
- **Fail and pass:** the code below causes most of these failures.

| In the code | What goes wrong | Instead |
|---|---|---|
| a fixed `height` on a box that holds text | the text is cut off when it wraps, at zoom, or in a longer language | `min-height`, or `max-height` with `overflow-y: auto` |
| a `1fr` grid track or a flex child that holds long text | the track won't shrink below its content and pushes the page wider | `minmax(0, 1fr)`; `min-width: 0` on the flex child |
| `width: 100vw` | it includes the scrollbar, so the page scrolls sideways on desktop | `width: 100%` |
| `height: 100vh` on a phone | the browser's bars cover the bottom | `100svh`, which always fits; `100dvh` only where the area must follow the bars as they move, because it resizes content while the user scrolls (CSS Values and Units 4) |
| a bar or button fixed to the bottom of a phone screen | the on-screen keyboard covers it; `100dvh` doesn't help, because the keyboard doesn't change viewport units (web.dev, "The large, small, and dynamic viewport units") | keep it in the page's flow, or move it above the keyboard while the keyboard is open |
| a menu or tooltip inside a box with `overflow: hidden` | the menu is cut off at the box's edge | render it outside the box, in a portal or the top layer |
| a dialog taller than the screen | its buttons fall below the screen | a `max-height` on the dialog, a body that scrolls, and the buttons outside the scrolling part |
| controls and text at the screen's edge on a phone with a notch | the notch or the home bar covers them | keep them inside `env(safe-area-inset-*)`, which needs `viewport-fit=cover` in the viewport meta |
| a fixed `width` on a button | a longer label is cut off | let the padding set the width, and let the row wrap |
| an icon, avatar or badge in a flex row beside long text | it is squeezed into an oval, or the badge wraps, because flex items shrink by default | `flex-shrink: 0` on the fixed-size part, `min-width: 0` on the text |
| `container-type: inline-size` on a box sized by its content | the box shrinks to nothing, because containment stops it from taking its size from its children | put containment on a box whose width comes from its parent |

- **Not a fail:** a data table that scrolls sideways at 320 px, inside a page that reflows.

## Primitive

### 11. One spacing scale, and every gap comes from it

Every gap and padding is a step on the product's scale. A product without one uses the steps most systems share: 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48 and 64.

- **Why:** A scale makes equal things equal by construction, and choices fast. Material 3, Carbon, Atlassian, Primer, Fluent 2 and Polaris all have 2, 4, 8, 12, 16, 24, 32, 40 and 48, and all but Carbon add 6 and 20. No study shows that one unit works better than another, and Apple publishes no scale.
- **Kind:** Current practice. The product's scale comes first.
- **Applies when:** always. A value off the scale is a problem only when it breaks rule 1, 3 or 5.
- **Check:** list every gap and padding the target uses, from the computed styles, and compare them with the product's tokens.
- **Fail:** 15 px of padding on one card and 16 px on its sibling (rule 3).
- **Not a fail:** an 18 px gap between every pair of list rows in a product whose scale has no 18. It is consistent, and it groups correctly.

### 12. Center the shape people see, not its box

Icons, arrows and letters sit in boxes larger than their visible shapes. Center and align the visible shape:
- move an icon until it looks centered;
- trim the space above and below the letters when it makes the padding look uneven.

- **Why:** Icons are drawn in square boxes, but their visible shapes differ, so a play triangle centered by its box looks off center. A line of text has space above the capitals and below the baseline, so equal padding around its box looks uneven (Interface Craft, "Layout & Alignment" and "Typography Details").
- **Kind:** Current practice.
- **Applies when:** a visible shape is lopsided in its box, or text is the only content of a control.
- **Check:** look at a screenshot at 2×, and judge the visible shape, not the box.
- **Fail:** a play icon centered by its box in a round button. A button label that sits 1 px low because of the font's line box.
- **Pass:** the icon moved until it looks centered. The label trimmed with `text-box: trim-both cap alphabetic` where the browser supports it, or its padding adjusted.

## Component

### 13. Padding looks even on every side

Measure padding from the visible content to the container's visible edge. A container that starts with a title needs less top padding than its other sides, because the title's line box adds space above the letters (rule 12).

- **Why:** Interface Craft, "Layout & Alignment" (containers).
- **Kind:** Current practice.
- **Check:** measure the padding on each side, from the visible content to the visible edge; for a title, from the top of its capitals. Sides meant to be equal that differ by 1 px or more fail.
- **Fail:** a card with 20 px of padding on every side, whose title looks further from the top than from the left, for example because the title is centered on a taller button beside it. Padding of 15 px on the left and 16 px on the right. Text touching a container's visible border or background edge.
- **Pass:** top padding reduced until the space above the title's capitals looks the same as the space on the left.

### 14. Side items in a list share one vertical alignment

Status labels, toggles and chevrons in a list whose rows vary in height all follow one rule: they are centered on rows of one or two lines, not set on the first line. In rows of three lines or more they may sit at the top, level with the first line.

- **Why:** It is rule 4 for the parts of a row. Material 3 centers side items in short rows and sets them at the top from three lines ("Lists"), Carbon sets them at the top, and Fluent 2 on iOS keeps them centered; Interface Craft centers them ("Layout & Alignment").
- **Kind:** Current practice.
- **Check:** look at a list with one-line and two-line rows together.
- **Fail:** toggles set on the first line of each row, so they zigzag down a list of one- and two-line rows.
- **Pass:** every toggle centered on its row.
- **Not a fail:** a checkbox or radio set on the first line of its label: it reads as part of the label.

### 15. Controls side by side read as separate, and their hit areas are large enough and don't overlap

- **Why:** Controls that touch read as one, and overlapping hit areas cause wrong presses. WCAG 2.2, 2.5.8 asks for targets of at least 24 by 24 CSS px, or spacing that keeps a 24 px circle on each target clear of the others. Fingers need more: Apple's default is 44 by 44 pt, with 28 as the minimum, and Android asks for 48 by 48 dp, allowing smaller targets for mouse and trackpad (Apple, "Accessibility"; Android Developers, "Make apps more accessible").
- **Kind:** Every product: hit areas don't overlap, and targets smaller than 24 by 24 px keep the spacing 2.5.8 asks for. Current practice: on touch screens, hit areas of at least 44 by 44 px, or 48 by 48 dp on Android. Text and icon buttons without a border need more space between their visible shapes than bordered buttons, because their padding doesn't show.
- **Check:** measure the gaps between the visible shapes, and between the hit areas. With touch input (a coarse pointer, or touch emulation), measure each hit area at any width: under 44 by 44 px fails current practice; under 24 by 24 px without the spacing 2.5.8 asks for fails.
- **Fail:** two borderless icon buttons whose icons are 4 px apart. A 28 px close button on a phone.
- **Pass:** 8 px between two bordered buttons; a 20 px icon inside a 44 px hit area on a phone.
- **Not a fail:**
  - a 32 px button in a desktop toolbar used with a mouse;
  - what WCAG 2.5.8 exempts: a link inside a sentence; a small target whose action a full-size one on the page also offers; a control the browser draws and the page doesn't restyle; a size that is legally required or essential to the information.

### 16. In lists and tables, text shares one edge and numbers line up by their digits

- Text in a column aligns to the leading edge.
- Numbers people compare by size align to the trailing edge and have the same number of decimals. Their header aligns the same way.
- Identifiers that happen to be numbers (IDs, phone numbers, postal codes) and dates align like text.
- Icons of different shapes center on one vertical line, and the text after them shares one edge.

- **Why:** Right-aligned numbers put units under units, so a longer number is visibly a larger one. Left-aligned text scans best, numbers with the same rounding compare best, and a header follows its column (EU Data Visualisation Guide 2023); Cloudscape right-aligns only the numbers people compare ("Table"). Tabular figures (`font-variant-numeric: tabular-nums`) give every digit the same width. Icons: Interface Craft, "Layout & Alignment".
- **Kind:** Current practice.
- **Check:** for each column of numbers, check its alignment, its decimals and its header. For icons, draw their center lines and the text edge on a screenshot.
- **Fail:** centered prices with zero, one or two decimals. A row whose larger icon pushes its text off the column's text edge.
- **Pass:** prices right-aligned, each with two decimals, under a right-aligned header.

### 17. A form is one column, and each field is as wide as its answer

Fields follow each other in one column. Only two or three short fields that belong to one thing share a row:
- day, month and year;
- first and last name;
- city, state and postal code;
- card expiry and security code.

A field for an answer of fixed length, such as a postcode, a year or a two-digit limit, is as wide as that answer; fields for answers of varying length share one default width instead of stretching to fill the space.

- **Why:** In Baymard's checkout studies, people skipped and misread fields in forms with several columns; two or three fields of one thing on a row caused no problems (Scott, "Avoid Extensive Multicolumn Layouts", 2023). A field's width tells people how long an answer is expected (Wang 2025; GOV.UK, "Text input"; Carbon, "Text input").
- **Kind:** Every product: one column, apart from short fields that belong to one thing. Current practice: each field as wide as its answer.
- **Applies when:** a form of several rows that people fill in from top to bottom, such as the checkout forms Baymard studied.
- **Check:** look for fields of different values side by side, and compare each field's width with its longest likely answer.
- **Fail:** a two-column form with Name and Company in the first row, and Email and Phone in the second. A two-digit daily limit in a field half the panel wide.
- **Pass:** one column, with city and postal code sharing a row.
- **Not a fail:** a one-row form, such as an invite with an email field, a role and a Send button. A filter bar.

### 18. Content past an edge shows that it's there

When a row scrolls sideways, something at its edge shows that there is more: by default, part of the next item.

- **Why:** With nothing at the edge, nothing tells people the rest exists, so they can't reach it; a partly visible item tells them there is more (Feldman et al. 2023).
- **Kind:** Every product: when hidden content matters for the job, something at the edge shows that it's there. Current practice: part of the next item.
- **Applies when:** the hidden content matters for the job.
- **Check:** in the screenshots at each width, look for a scrolling row that ends exactly at the edge with nothing that shows there is more.
- **Fail:** a row of cards that ends exactly at the container's edge, with four more cards off screen.
- **Pass:** part of the next card showing at the edge.

## Page

### 19. A page has a grid and fixed margins

The main content's edges sit on a few columns, and every page keeps the same margins at a given width. Margins, and the gaps between large regions, may grow at wider window classes, as the product's tokens set them; padding inside components stays the same at every width. Text people read gets a maximum width: about 45 to 75 characters a line, never more than 80, and paragraphs never run narrower than about 40. On wide screens, the extra width goes to margins or side panels, not to longer lines. Backgrounds, images and full-width lists may run to the screen's edge; text and controls stay inside the margins.

- **Why:** Rule 5 at the scale of a page. Systems change margins by window class and keep the padding inside components fixed: Material 3 uses 16 dp margins on compact windows and more space on larger ones, and Carbon keeps its padding at 16 px at every breakpoint (Material 3, "Breakpoints" and "Grids & spacing"; Carbon, "2x Grid"). No system scales every gap by one factor. People understood 55-character lines better than 100-character ones (Dyson and Haselgrove 2001).
- **Kind:** Current practice.
- **Check:** draw the alignment lines at each width, and compare the margins of two pages at the same width. Count the characters in a full line of each paragraph people read: over 80 fails, and so does under 40.
- **Fail:** 24 px margins on the list page and 32 px on the settings page at the same width. A paragraph that stretches to 1,800 px on a wide screen.
- **Pass:** the same margins on every page, and reading text capped in width.

### 20. The layout changes with the window, and each part with its own width

The number of panes and the kind of navigation change at the window classes. A component changes when its own container gets too narrow for it, not at a device width. A row of logos or marks fits its container on one line, or wraps into rows of about equal length, never leaving one alone on a line. Breakpoints are set in `rem` or `em`, so people who set a larger text size in the browser get the narrow layout sooner.

One pane is flexible and takes the width left over; side panes keep a fixed width, and a pane people resize stops where its content still fits. When panes stack into one column, the main pane comes first, and supporting content follows it or opens in a sheet.

- **Why:** Material 3 uses one pane below 600 dp, one from 600 to 839 dp (two are possible, but never for dense information) and two from 840 dp; one pane is flexible beside fixed ones, and a supporting pane stacks below the main one ("Breakpoints"; "Canonical layouts"; "Pane layouts"; "Supporting pane"). Breakpoints inside a page belong where the content stops fitting (LePage and Andrew, web.dev). In media queries, `rem` and `em` follow the browser's text-size setting, not the page's styles (Media Queries 4).
- **Kind:** Current practice.
- **Check:** resize from 320 to 1920 px and note every width where something breaks or looks cramped; a row of logos or marks that leaves one alone on a line fails. Then take screenshots at 320, 390, 768, 1024, 1280, 1440 and 1920 px.
- **Fail:** a card that switches to its narrow layout at a viewport width, so it breaks inside a narrow sidebar on a wide screen. Five agent logos in a narrow middle column that wrap four and one.
- **Pass:** `@container (width < 400px)` on the card.

### 21. Density follows how the page is used

A tool people work in all day can show more at once. A page people visit rarely or briefly shows less and explains more. When space is tight, keep the groups visible with lines or backgrounds (rule 2), not by making every gap equal. A compact density tightens space, not type: text keeps its sizes, and help, alerts and error messages keep the normal spacing.

- **Why:** Higher density suits products where people scan and compare a lot of information; lower density suits pages with less information or one message (Material 3, "Grids & spacing"; Cloudscape, "Content density"). Many people who use a tool every day never become experts and still need labels and help (Kaplan, "Supporting 'Power Users' Isn't Enough", 2025). No study sets a best density. Compact modes tighten padding and rows but keep body text at its size, and leave messages at the comfortable spacing so they still stand out (Cloudscape, "Content density").
- **Kind:** Current practice.
- **Check:** name how often and for how long people use the page. Compare its density with the product's other pages of that kind. Switch to the compact density, if there is one: smaller text, or help and error messages squeezed with the rest, fails.
- **Fail:** a table people monitor all day with 64 px rows, showing nine rows per screen. A compact mode that drops body text to 12 px.
- **Pass:** that table at 32 px rows, with its header, toolbar and pagination sized to match. IBM Carbon's data table offers rows from 24 to 64 px and uses 40 px by default ("Data table").

### 22. Sticky areas never cover what the user is on

A sticky header or footer leaves room for the element in focus, and for the target of a link within the page. At 320 px wide and at 400% zoom, sticky bars stop sticking, or people can hide them.

- **Why:** An element in focus is never entirely hidden by the page's own content (WCAG 2.2, 2.4.11); W3C's technique C43 uses `scroll-padding` for this. At small sizes sticky bars leave little room to read, and W3C strongly suggests making them static there (Understanding 1.4.10; technique C34).
- **Kind:** Every product: nothing in focus is entirely hidden. Two cases don't count (2.4.11's notes): content the user moved, and content the user opened and can close without moving focus. Current practice: the element in focus, and a link's target, fully in view; sticky bars stop sticking at small sizes.
- **Applies when:** the page has sticky or fixed areas.
- **Check:** Tab through the page and follow the links within it: an element in focus that a sticky area hides entirely fails; one partly hidden, or a link's target hidden, fails current practice. At 320 px and at 400% zoom, see how much of the height the sticky bars take.
- **Fail:** a 64 px sticky header with no `scroll-padding`, so the field the user tabs to sits under it.
- **Pass:** `html { scroll-padding-block-start: 64px }`, or the header's height; `scroll-padding-block-end` for a sticky footer.

### 23. In right-to-left languages, the layout mirrors

In Arabic, Hebrew, Persian and Urdu, the whole layout mirrors: reading starts at the top right, navigation and panes swap sides, and the order of controls and steps reverses. Some things don't mirror: logos, check marks, media controls and their progress bar, clocks, charts, numbers, phone numbers, URLs and code.

- **Why:** Apple, Human Interface Guidelines, "Right to left"; Material 3, "Bidirectionality & RTL"; Wikimedia Codex, "Bidirectionality".
- **Kind:** Current practice, for a product that ships a right-to-left language.
- **Check:** set `dir="rtl"` on the page and take the screenshots at each width. Search the CSS for physical properties such as `left`, `right` and `margin-left` where a logical one (`inline-start`, `inline-end`) belongs, and for `translateX` and `background-position`, which have no logical form and need a mirrored value.
- **Fail:** `margin-right: 8px` on a list icon. In Hebrew the icon moves to the right of the text, the margin moves to its outer side, and the icon touches the text.
- **Pass:** `margin-inline-end: 8px`, or a `gap` on the row.

### 24. A short screen keeps its content in one group

When a screen's content is shorter than the window, it stays together as one group, and the leftover space goes around the group, never inside it.
- A screen that does one thing, such as sign-in or a confirmation, centers the group side to side. Top to bottom, the group sits centered in the window or a fixed distance below the top; on a phone it starts near the top or is centered, with the main button right under the content.
- An error page or an empty state starts a short distance below the header, or below the top of its area.

- **Why:** A line split from its group reads as a group of its own (rule 1). Of 12 products' sign-in pages (surveyed November 2026), all centered the group side to side; on desktop, 7 centered it top to bottom and 4 set it a fixed distance from the top; on phones, 8 of 11 started it near the top, and none pinned the main button to the bottom. Their 404 pages and empty states started just below the header or the top of their area. Carbon centers its login page; Atlassian, Primer and GOV.UK use a fixed distance from the top. No study favors one vertical position.
- **Kind:** Every product: the group stays together (rule 1). Current practice: where it sits.
- **Applies when:** a screen, or an area, whose content is shorter than the window.
- **Check:** take screenshots at 1440 by 900 and at 390 by 844. Measure the gaps inside the group and the space around it, and note where the group sits.
- **Fail:** at 360 px, the title and buttons at the top, the terms line alone in the middle of the screen, and empty space below it.
- **Pass:** the terms line right under the buttons, with the group centered in the window on desktop and near the top on a phone.
- **Not a fail:** empty space below an empty state that sits under its area's heading.
