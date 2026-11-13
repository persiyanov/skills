# Spacing and alignment

Covers how space and alignment finish a screen: grouping by space, gaps, the spacing scale, alignment lines, centering, padding, side items in a list, the room between controls and their hit areas, the edges of text and numbers, and that nothing moves while a page loads, overlaps, gets cut off, scrolls sideways or shows out of the code's order, across widths, zoom, content length and right-to-left languages. Not covered here: where each part sits, a form's column, the page's grid, density and sticky areas.

The rules come in four groups: rules for every level, then rules for primitives (the spacing scale and single shapes), components (a card, a list's rows, controls side by side, text and numbers in a column) and pages (right-to-left languages).

## Every level

### 1. More space between groups than inside them

Space alone shows what belongs together: the gap around a group is at least 1.5 times the largest gap inside it. A heading sits closer to what it introduces than to what is above it. A label sits closer to its own field than to the field before it.

- **Why:** People group things by how the gaps compare, not by their size: the closer grouping wins about 79% of the time when one gap is 1.2 times the other, and about 96% at 1.5 times (Wertheimer 1923; Kubovy et al. 1998). No study gives designers a minimum, and the often-repeated "at least 2×" has no source.
- **Applies when:** groups that space alone shows, except items grouped by a shared border or background, which group whatever the gaps (Palmer 1992), or by a strong shared color (Quinlan and Wilton 1998).
- **Check:** look first. Blur a screenshot until the text can't be read, or squint: the shapes that remain should match the groups in the content. Then measure each group you see, between what is drawn (letters, icon shapes, visible edges), not between boxes. The smallest gap between the group and anything around it should be at least 1.5 times the largest gap between its own items: one less than 1.5 times larger fails.
- **Fail:**
  - a label 16 px below the field before it and 16 px above its own input;
  - a section heading with equal space above and below;
  - a button whose icon sits 12 px from its label inside 8 px of padding.
- **Pass:** the label 6 px above its input and 24 px below the field before it.

### 2. Group with space first; add a box or a line only where space can't do it

Use a border, a background or a divider for:
- an item people act on as one unit: they select, drag or open it, or use its own actions;
- parts of different kinds side by side;
- dense tables and long lists, where space would cost too much.

Siblings of one kind share one container, not a box each. Never use a box and a large gap for the same group.

- **Why:** A shared border or background groups as strongly as space and can override it (Palmer 1992), so space can do the job without adding marks. Every box adds edges, and the share of a screen's pixels that are edges predicted how long people took to find things (r = .83; Rosenholtz et al. 2007). Material 3 keeps a card for content and actions about one subject ("Cards").
- **Check:** hide the boxes: add `*{border-color:transparent!important;background-color:transparent!important;box-shadow:none!important}` to the page and take a screenshot. For a dialog or side panel, put its selector before `*`, so it keeps its own background. If the groups show as clearly as before, the boxes are extra. If a group disappears, its box is doing the grouping, which fails except in the uses listed above. Then count the boxes inside boxes.
- **Fail:**
  - four metrics in a row, each in its own card (Interface Craft, "Refining Presscut");
  - a card inside a card inside a card;
  - a toolbar wrapped in a container that does nothing for it (Interface Craft, "Refining Today").
- **Pass:**
  - the four metrics in one container, separated by space;
  - selectable rows, each with its own background on hover and selection: the box marks the unit people act on.

### 3. Gaps at the same level are equal

The gaps between sections match each other, and the gaps between the items of a list match. A difference of 1 to 4 px between gaps meant to be equal is an accident, and it gets fixed too.

- **Why:** People read a smaller gap as a closer tie (rule 1), so unequal gaps between equal things suggest groups that aren't there (Material 3, "Grids & spacing").
- **Applies when:** the gaps between items at one level of the structure, except gaps between levels, which differ on purpose (rule 1).
- **Check:** measure the gaps between items at the same level, from what is drawn. Gaps meant to be equal match to the pixel.
- **Fail:**
  - 32 px between a chart and the tables below it, but 16 px between the two tables (Interface Craft, "Refining Presscut");
  - list rows 12 px apart, except one pair 14 px apart.
- **Pass:** one gap between all sections of the page, and one between all rows.

### 4. Few alignment lines, shared exactly by neighbors and by parts with one role

Alignment makes a screen read as one order: edges on a shared line read as related, and fewer lines read as simpler. Use as few lines, and as few ways of aligning, as the content allows on one screen, and put edges on those shared lines (left edges, center lines, baselines), at two scales:
- **Up close:** inside a component and between neighbors, an edge meant to sit on a line sits on it to the pixel. Measure what is drawn (text by its letters, icons by their shapes), not the boxes around them. Align a heading with the visible edge of the field below it, not with the text inside the field (Interface Craft, "Layout & Alignment").
- **Across the screen:** parts with the same role share a line, however far apart: the header rows of panes side by side, the tops of content areas, headings of one level, the leading edge of a column's items, with or without icons, and the trailing edge of its counts, badges and chevrons. A miss here counts once it shows in a screenshot.

Parts that share no role don't need to share a line.

- **Why:** People take aligned items as related, and poor alignment slowed search on screens (Apple, "Layout"; Parush et al. 1998). Between nearby edges people see an offset far smaller than a pixel (Hu et al. 2021), so an edge 1 to 4 px off a line it shares with a neighbor looks like an accident, not a choice, but the farther apart two edges are, the larger an offset must be before anyone sees it (Burbeck 1987). Interface Craft counts the lines across a whole screen and cuts four to two ("Layout & Alignment"; "Refining Today").
- **Applies when:** every screen, panel and dialog, except a few pixels between unrelated parts far apart.
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
- **Pass:**
  - one leading edge for the column, with nested content indented by one spacing step;
  - a box moved 1 px so the shape inside it looks aligned;
  - a centered empty state that stands alone in its area;
  - a centered block inside its own border or background, in a left-aligned list: the box makes it a region of its own.

### 5. What people see keeps the code's order

People read a screen from the top and from the leading edge, and the keyboard and screen readers follow the order in the code. So what people see comes in the code's order: nothing is moved away from it by CSS.

- **Why:** Keyboard and screen-reader users get the code order. WCAG 2.2 requires what people see to follow it where the order changes the meaning or how things work (1.3.2 Meaningful Sequence, 2.4.3 Focus Order).
- **Applies when:** always.
- **Check:** press Tab from the top of the page, and compare the order focus moves in with the order on screen. Look for CSS that moves things away from their code order: `order`, `row-reverse` and `column-reverse`, grid placement, absolute positioning. An order on screen that differs from the code's fails.
- **Fail:** `row-reverse` shows Cancel then Save, while Tab reaches Save first.
- **Pass:** the code order is Cancel, Save, and that is what people see.

### 6. Nothing moves while the page loads or a control changes state

Nothing moves unless the user moved it: reserve the space for content that arrives later, and a control keeps its size when its label or state changes.

- **Why:** Content that moves after it appears makes people lose their place or press the wrong thing; a Cumulative Layout Shift of 0.1 or less counts as good (web.dev, "Optimize Cumulative Layout Shift").
- **Applies when:** something visible moves that the user didn't ask to move, such as a button pushed aside when the button next to it changes its label, except the content below a section the user opens, which moves on purpose.
- **Check:** compare the screenshots of the loading and loaded states, and of the rest and hover states, for elements that moved. In the browser, a `PerformanceObserver` on `layout-shift` entries (ignoring those with `hadRecentInput`) reports shifts as they happen. Anything that moves without the user moving it fails.
- **Fail:**
  - rows jump when an image without `width` and `height` loads;
  - a button grows when its label changes to "Saving…" and pushes the button beside it.
- **Pass:**
  - images with `width` and `height` or an `aspect-ratio`;
  - a skeleton the size of the content it stands for;
  - a button that keeps its width.

### 7. Nothing overlaps, gets cut off, hides under something or scrolls sideways

Every layout holds:
- at every supported width, down to 320 CSS px, and 256 CSS px high for content that scrolls sideways by design, such as vertical Japanese text;
- at 200% and 400% zoom;
- with very short and very long content (names, translations, numbers);
- with the text spacing of WCAG 1.4.12: line height 1.5 times the font size, 2 times the font size after paragraphs, letter spacing 0.12 times and word spacing 0.16 times, or only those of them a language or script uses in writing;
- with the on-screen keyboard open: the field being typed in, and the button that sends the form, stay in view.

Data tables (though not their single cells), maps, code and toolbars that must stay in view may scroll in two directions, as WCAG 1.4.10 allows, while the page around them still reflows. Text cut short with an ellipsis is allowed only when people can still reach the full text with the keyboard and by touch.

- **Why:** Content that is cut off or covered is lost. WCAG 2.2 requires it at 200% text size, except in captions and images of text (1.4.4), at 320 CSS px wide (1.4.10) and with larger text spacing (1.4.12); text cut short passes only with a way to reveal the rest (Understanding 1.4.10). Translations are usually longer, most of all short ones: text of up to 10 characters can grow 200–300% (W3C Internationalization, "Text size in translation"). A field hidden under the on-screen keyboard means typing blind.
- **Applies when:** always.
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

## Primitive

### 8. One spacing scale, and every gap comes from it

Every gap and padding is a step on the product's scale. A product without one uses the steps most systems share: 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48 and 64. A value off the scale is a gap only when it breaks rule 1, 3 or 4.

- **Why:** A scale makes equal things equal by construction, and choices fast. Material 3, Carbon, Atlassian, Primer, Fluent 2 and Polaris all have 2, 4, 8, 12, 16, 24, 32, 40 and 48, and all but Carbon add 6 and 20. No study shows that one unit works better than another, and Apple publishes no scale.
- **Applies when:** always.
- **Check:** list every gap and padding the target uses, from the computed styles, and compare them with the product's tokens.
- **Fail:** 15 px of padding on one card and 16 px on its sibling (rule 3).
- **Pass:** an 18 px gap between every pair of list rows in a product whose scale has no 18: it is consistent, and it groups correctly.

### 9. Center the shape people see, not its box

Icons, arrows and letters sit in boxes larger than their visible shapes. Center and align the visible shape:
- move an icon until it looks centered;
- trim the space above and below the letters when it makes the padding look uneven.

- **Why:** Icons are drawn in square boxes, but their visible shapes differ, so a play triangle centered by its box looks off center. A line of text has space above the capitals and below the baseline, so equal padding around its box looks uneven (Interface Craft, "Layout & Alignment" and "Typography Details").
- **Applies when:** a visible shape is lopsided in its box, or text is the only content of a control.
- **Check:** look at a screenshot at 2×, and judge the visible shape, not the box.
- **Fail:**
  - a play icon centered by its box in a round button;
  - a button label that sits 1 px low because of the font's line box.
- **Pass:**
  - the icon moved until it looks centered;
  - the label trimmed with `text-box: trim-both cap alphabetic` where the browser supports it, or its padding adjusted.

## Component

### 10. Padding looks even on every side

Measure padding from the visible content to the container's visible edge. A container that starts with a title needs less top padding than its other sides, because the title's line box adds space above the letters (rule 9).

- **Why:** Interface Craft, "Layout & Alignment" (containers).
- **Check:** measure the padding on each side, from the visible content to the visible edge; for a title, from the top of its capitals. Sides meant to be equal that differ by 1 px or more fail.
- **Fail:**
  - a card with 20 px of padding on every side, whose title looks further from the top than from the left, for example because the title is centered on a taller button beside it;
  - padding of 15 px on the left and 16 px on the right;
  - text touching a container's visible border or background edge.
- **Pass:** top padding reduced until the space above the title's capitals looks the same as the space on the left.

### 11. Side items in a list share one vertical alignment

Status labels, toggles and chevrons in a list whose rows vary in height all follow one rule: they are centered on rows of one or two lines, not set on the first line. In rows of three lines or more they may sit at the top, level with the first line.

- **Why:** Parts of one kind that sit the same way in every row are found by where they sit (Scarr et al. 2013). Material 3 centers side items in short rows and sets them at the top from three lines ("Lists"), Carbon sets them at the top, and Fluent 2 on iOS keeps them centered; Interface Craft centers them ("Layout & Alignment").
- **Check:** look at a list with one-line and two-line rows together.
- **Fail:** toggles set on the first line of each row, so they zigzag down a list of one- and two-line rows.
- **Pass:**
  - every toggle centered on its row;
  - a checkbox or radio set on the first line of its label: it reads as part of the label.

### 12. Controls side by side read as separate, and their hit areas are large enough and don't overlap

Controls side by side keep a visible gap, and text and icon buttons without a border get more of it than bordered buttons, because their padding doesn't show. Hit areas never overlap. A target smaller than 24 by 24 px keeps the spacing WCAG 2.5.8 asks for, except what 2.5.8 exempts: a link inside a sentence, a small target whose action a full-size one on the page also offers, a control the browser draws and the page doesn't restyle, and a size that is legally required or essential to the information. On touch screens, hit areas are at least 44 by 44 px, or 48 by 48 dp on Android.

- **Why:** Controls that touch read as one, and overlapping hit areas cause wrong presses. WCAG 2.2, 2.5.8 asks for targets of at least 24 by 24 CSS px, or spacing that keeps a 24 px circle on each target clear of the others. Fingers need more: Apple's default is 44 by 44 pt, with 28 as the minimum, and Android asks for 48 by 48 dp, allowing smaller targets for mouse and trackpad (Apple, "Accessibility"; Android Developers, "Make apps more accessible").
- **Check:** measure the gaps between the visible shapes, and between the hit areas. Hit areas that overlap fail, and so does a target under 24 by 24 px without the spacing 2.5.8 asks for. With touch input (a coarse pointer, or touch emulation), measure each hit area at any width: under 44 by 44 px fails.
- **Fail:**
  - two borderless icon buttons whose icons are 4 px apart;
  - a 28 px close button on a phone.
- **Pass:**
  - 8 px between two bordered buttons;
  - a 20 px icon inside a 44 px hit area on a phone;
  - a 32 px button in a desktop toolbar used with a mouse.

### 13. In lists and tables, text shares one edge and numbers line up by their digits

- Text in a column aligns to the leading edge.
- Numbers people compare by size align to the trailing edge and have the same number of decimals. Their header aligns the same way.
- Identifiers that happen to be numbers (IDs, phone numbers, postal codes) and dates align like text.
- Icons of different shapes center on one vertical line, and the text after them shares one edge.

- **Why:** Right-aligned numbers put units under units, so a longer number is visibly a larger one. Left-aligned text scans best, numbers with the same rounding compare best, and a header follows its column (EU Data Visualisation Guide 2023); Cloudscape right-aligns only the numbers people compare ("Table"). Tabular figures (`font-variant-numeric: tabular-nums`) give every digit the same width. Icons: Interface Craft, "Layout & Alignment".
- **Check:** for each column of numbers, check its alignment, its decimals and its header. For icons, draw their center lines and the text edge on a screenshot.
- **Fail:**
  - centered prices with zero, one or two decimals;
  - a row whose larger icon pushes its text off the column's text edge.
- **Pass:** prices right-aligned, each with two decimals, under a right-aligned header.

### 14. Content past an edge shows that it's there

When a row scrolls sideways, something at its edge shows that there is more: by default, part of the next item.

- **Why:** With nothing at the edge, nothing tells people the rest exists, so they can't reach it; a partly visible item tells them there is more (Feldman et al. 2023).
- **Applies when:** the hidden content matters for the job.
- **Check:** in the screenshots at each width, look for a scrolling row that ends exactly at the edge with nothing that shows there is more. Such a row fails.
- **Fail:** a row of cards that ends exactly at the container's edge, with four more cards off screen.
- **Pass:** part of the next card showing at the edge.

## Page

### 15. In right-to-left languages, the layout mirrors

In Arabic, Hebrew, Persian and Urdu, the whole layout mirrors: reading starts at the top right, navigation and panes swap sides, and the order of controls and steps reverses. Some things don't mirror: logos, check marks, media controls and their progress bar, clocks, charts, numbers, phone numbers, URLs and code.

- **Why:** Apple, Human Interface Guidelines, "Right to left"; Material 3, "Bidirectionality & RTL"; Wikimedia Codex, "Bidirectionality".
- **Applies when:** a product ships a right-to-left language.
- **Check:** set `dir="rtl"` on the page and take the screenshots at each width. Search the CSS for physical properties such as `left`, `right` and `margin-left` where a logical one (`inline-start`, `inline-end`) belongs, and for `translateX` and `background-position`, which have no logical form and need a mirrored value.
- **Fail:** `margin-right: 8px` on a list icon. In Hebrew the icon moves to the right of the text, the margin moves to its outer side, and the icon touches the text.
- **Pass:** `margin-inline-end: 8px`, or a `gap` on the row.
