# Surfaces

Covers how surfaces look: their levels, shadows and the light they imply, edges in dark themes and forced colors, clipping, corners, borders and dividers, see-through materials, scrims, and the order in which floating layers stack. Whether a group needs a box at all is not covered here: this guide is about how a box looks once there is one.

The rules come in four groups: rules for every level, then rules for primitives (a radius or a border), components (a surface with something inside it, such as a card holding an image, a button with its focus ring, or a header) and pages (the layers over a page).

## Every level

### 1. A surface's look shows its level, and there are few levels

A screen has a few levels, each with one job: the page, the surfaces that rest on it, and the layers that float above it, such as menus, popovers, dialogs and toasts. A resting surface is set apart by a fill, a border, or at most a small shadow. Larger shadows are for what floats, or for what people drag. Each level keeps one look across the product. A bar that content scrolls under is set apart from that content while content is under it, by a change of fill, a shadow, a line or a fade. A fade over content looks right in every theme, with no light band on a dark screen. A long or dark fade eases its stops so it ends without a visible line (default).

- **Why:** Cast shadows tell people whether a thing rests on a surface or floats above it (Mamassian et al. 1998), so a resting card with a menu's shadow looks as if it floats, and a level with two looks no longer tells people which things are alike. Systems keep a handful of levels: resting surfaces are set apart by tone or a border, with at most a small shadow, and larger shadows go to what floats or is being moved (Material 3, "Elevation"; Atlassian, "Elevation"; Carbon and Primer tokens). Apple and Material 3 give a bar an edge while content scrolls under it, so people can tell the bar from the content (Apple, "Scroll views"; Material 3, "App bars"). A fade painted in the page's color breaks in the other theme, showing as a white band over dark content, while a mask fades the content itself; evenly spaced stops leave a visible edge where a long or dark fade ends (Interface Craft, "Masks" and "Color Details").
- **Applies when:** always.
- **Check:** list each surface on the screen with its computed fill, border, shadow and radius, and sort the surfaces into the product's levels, each with its own job: the page, each resting level it has, such as a sunken well and a card, and the floating layers. Two looks for one level fail, and so does a resting surface whose shadow is as large as a floating layer's. Then open each menu, popover and panel where it overlaps a resting surface: one set apart only by its outline, with no shadow you can see, fails. Floating layers over other floating layers may share one look. Scroll content under each fixed or sticky bar: a bar with no change of fill, shadow, line or fade while content passes under it fails. Switch themes and scroll content under each fade: a band of the wrong color fails.
- **Fail:**
  - a summary card with the same large shadow as the dropdown menu above it;
  - three card styles on one page: one with a border, one with a shadow, one with both;
  - a white sticky header with no line or shadow over white cards scrolled under it, so the cards look cut off;
  - a white fade at the foot of a list that shows as a white band in the dark theme.
- **Pass:**
  - resting cards with a 1 px border on the page color, menus and popovers with one shadow, and dialogs with a larger one;
  - a card that lifts while people drag it, or that people can open and that rises one level while the pointer is over it;
  - a resting surface on a photo or another busy background, where a shadow is what sets it apart.

### 2. One light: every shadow falls the same way and grows with height

All shadows on a screen fall one way, as if from one light above. The higher a layer floats, the larger and softer its shadow. A low shadow, such as a card's or a menu's, has a tight, darker part where the surface meets what is under it, and a wider, fainter part around it.

- **Why:** People assume one light for a whole scene, shining from above (Ramachandran 1988; Mamassian and Goutcher 2001), so shadows that fall different ways, or a higher layer with a smaller shadow, give conflicting cues to height. Material 3, Fluent 2, Primer, Atlassian, Radix and Tailwind all cast shadows straight down (their tokens), and Fluent 2 and Primer build a low shadow from a tight part that draws the edge and a wider one that shows distance, both growing with height (Fluent 2, "Elevation"; Primer tokens). A single wide, faint blur reads as haze, not height (Interface Craft skill, "Design Critique").
- **Applies when:** the product uses shadows, except the light inside an illustration.
- **Check:** list every computed `box-shadow` and `filter: drop-shadow()` on the screen, with its element and level. Shadows offset in different directions fail, and so do a higher layer with a smaller shadow than a lower one, and a card or menu shadow that is a single wide, faint blur with no tight part. A ring with no offset and no blur, such as `0 0 0 1px`, is an edge, not a shadow.
- **Fail:**
  - a card shadow offset to the right, next to a menu whose shadow falls straight down;
  - `box-shadow: 0 4px 24px rgb(0 0 0 / .08)` on every card: a haze with no edge.
- **Pass:**
  - Primer's scale: `0 1px 1px #25292e1a, 0 3px 6px #25292e1f` on resting cards, then larger, softer shadows for menus, popovers and dialogs, all falling straight down;
  - resting surfaces with no shadows;
  - hard shadows with no blur, when every shadow falls the same way and grows with height.

### 3. Raised surfaces keep an edge where their shadow can't show

A shadow disappears on dark backgrounds and in forced colors, so nothing people need rests on a shadow alone. A selected or focused surface shows its state with an edge, a fill or a mark, not with its shadow. In a dark theme, a higher surface is lighter than the one under it, or has a light edge, and a shadow the dark theme keeps is at least as strong there as in the light theme. A surface whose only edge is a shadow, a fill or a gradient also has a border, transparent if needed, which forced colors make visible.

- **Why:** Shadows barely show on dark backgrounds (Material Components for Android, "Dark theme"; Atlassian, "Elevation"). Forced colors remove shadows and gradients and turn fills into one system color, while border and outline colors, even transparent ones, take the user's colors and show (CSS Color Adjustment 1; Matuzović 2026). So an edge or a state drawn only by a shadow disappears for these people, and a state's mark needs 3:1 against the colors next to it (WCAG 2.2, Understanding 1.4.11). In dark themes, Material 3, Apple, Atlassian and Carbon make a higher surface lighter, and Primer and Radix add a light 1 px ring to floating ones (their tokens; Apple, "Dark Mode"). A shadow shows less on a dark page, so Carbon, Fluent 2, Atlassian and Primer make their dark-theme shadows darker (their tokens).
- **Applies when:** the product uses shadows or fills to set surfaces apart, or has a dark theme, except a surface that sits flush in its own region, such as a sidebar set apart by a divider.
- **Check:** find each selected, current or focused surface and what marks it: a shadow alone fails. Switch to the dark theme and compare each raised surface with the one under it: one that is not lighter, with only a shadow, fails. Compare each floating layer's shadow in both themes: one fainter in the dark theme fails. Turn on forced colors (Chrome DevTools, Rendering panel) and open each menu, popover and dialog: one whose edge disappears fails. When you can't emulate, the CSS decides: a surface whose only edge is a shadow, a fill or a gradient, with no border and no `forced-colors` rule, fails.
- **Fail:**
  - a selected card marked only by a larger shadow;
  - a dark-theme menu in the page's own gray, set apart by a black shadow;
  - a popover marked only by its shadow, which merges with the page in a contrast theme.
- **Pass:**
  - the selected card with a 2 px accent border;
  - the dark-theme menu one step lighter than the page, with a 1 px light ring;
  - a dark-theme dialog darker than the page, with a 1 px light ring;
  - the popover with `border: 1px solid transparent` under its shadow.

### 4. Nothing a surface holds gets cut off by it

Menus, popovers and tooltips open above every container, so no container's edge can cut them, and near the window's edge they stay whole inside the window. A container that clips what it holds leaves room for the focus outlines and shadows inside it.

- **Why:** A menu cut off by its container hides items people need, and a focus outline cut on every side hides where focus is (WCAG 2.2, 2.4.7). The usual cause is a container whose `overflow` is not `visible`: it clips the shadows and outlines of what it holds (CSS Overflow 3). The top layer, where modal dialogs and popovers open, is beyond any container's clipping (CSS Positioned Layout 4).
- **Applies when:** always.
- **Check:** open every menu, select, popover and tooltip that sits near the edge of a scrolling or clipping container, such as in the last row of a table in a panel, and near each edge of the window at the narrowest width the product supports. Then Tab through the controls inside each container whose `overflow` is `hidden`, `auto`, `scroll` or `clip`, and look at the focus outline on every side. A menu or tooltip cut by a container or by the window fails, and so does a focus outline or a shadow cut on any side. In the code, look for menus rendered inside the clipping container instead of in the top layer or a portal.
- **Fail:**
  - a row menu in a scrolling table, cut by the table's bottom edge;
  - a row menu at the right edge of a phone screen that runs past it;
  - a focus outline whose corners a dialog's `overflow: hidden` cuts off.
- **Pass:**
  - the row menu as a popover in the top layer;
  - controls inside the scrolling dialog body with padding around them at least as wide as the focus outline and its offset, or an inset outline (a negative `outline-offset`);
  - a scrolling list that cuts its own rows at its edge, since the rest scrolls into view.

## Primitive

### 5. Corners come from one scale, and each kind of element keeps one radius

Radii come from a short scale, and each kind of element keeps its radius everywhere: one for buttons and fields, one for cards and menus, one for dialogs. A pill is a choice for a kind of element, such as tags, not a size that varies.

- **Why:** One radius for each kind of element lets people tell the kinds apart, and a short scale keeps the product one family. Atlassian gives 6 px to buttons and fields, 8 px to cards and menus and 12 px to modals, and Material 3 also assigns its scale by kind (Atlassian, "Radius"; Material 3, "Shape").
- **Applies when:** always.
- **Check:** list the computed `border-radius` of each surface and control with its kind of element, and match it to the product's radius tokens. Two radii for one kind of element fail, and so does a radius off the scale.
- **Fail:**
  - buttons at 6 px on one page and 8 px on another;
  - cards at 12, 14 and 16 px.
- **Pass:**
  - buttons and fields at 6 px, cards and menus at 8 px, dialogs at 12 px, everywhere;
  - pill-shaped tags next to rounded-rectangle buttons, when the product's scale gives tags the pill;
  - round avatars.

### 6. Borders come from a few roles

Lines come from a few roles: dividers between items are the faintest, and the edges of containers and fields a step stronger. A field's edge is never fainter than a card's. Most lines share one width, usually 1 px. Where two lines meet, only one is drawn. A border is never lighter than the fill it surrounds. As a starting point, a border on things that sit on surfaces of several colors, such as rows that tint on hover, is translucent, so it stays a step darker than whatever is behind it, while fields keep a solid edge (default).

- **Why:** Material 3, Primer and Carbon draw dividers fainter than the edges of containers, and fields at least as strong as cards; shadcn/ui and coss ui use one color, #e5e5e5, for both (their tokens and CSS). A field needs a 3:1 edge only when nothing else, such as its label or its text, shows where it is (WCAG 2.2, Understanding 1.4.11). Most lines are 1 px (Primer and Atlassian tokens). Where two translucent lines cross, their alphas add up: two lines of 10% black make a 19% black dot that no one meant (alpha compositing; Interface Craft, "Compositing"). A solid light border on a row tinted for hover or selection can come out lighter than the row, which looks like a glow, while a translucent one darkens whatever it sits on (Interface Craft, "Style Details").
- **Applies when:** always.
- **Check:** list the computed border colors and widths on the screen, with what each one separates, and match each to the product's border tokens. A border that matches no role fails, and so do a divider stronger than the edge of its container, a field's edge fainter than a card's, two widths for one role, and a darker dot where two translucent lines cross. Hover and select rows and cards: a border lighter than the fill it surrounds fails.
- **Fail:**
  - dividers in a darker gray than the edges of the cards they sit in;
  - a table whose rows and cells each have a 10% black border, so every crossing shows a darker dot;
  - a #e5e5e5 border around a row tinted #d4d4d4 on hover, which glows.
- **Pass:**
  - dividers in #f0f0f0, and card and field edges in #e5e5e5, all 1 px;
  - the table with row lines only;
  - field edges stronger than the card edges, such as Carbon's #8d8d8d;
  - a field with no border, set apart by a fill.

## Component

### 7. Nested corners share one center

When a rounded surface holds a rounded element near its corner, the inner radius is the outer radius minus the gap between their edges, so both curves share one center. When the inner element is a control with its own radius, such as a button in a toolbar or a segment of a segmented control, it keeps that radius, and the container's radius is the control's plus the gap. A focus ring drawn outside a control does the reverse: its radius is the control's radius plus the ring's offset.

- **Why:** Two curves stay the same distance apart around a corner only when their radii differ by that distance; with equal radii, the gap is wider at the corner than along the sides (geometry). The gap is the padding plus any border (CSS Backgrounds 3). Apple and Atlassian apply this to nested shapes and to focus rings (Apple, "Get to know the new design system"; Atlassian, "Radius"). When the gap is larger than the outer radius, the formula gives a square inner corner, which tends to look wrong, so the inner radius is set by eye (Coyier 2024).
- **Applies when:** a rounded element sits inside a rounded one, close to its corners, such as an image or a selected item's fill inside a card or a menu; and a focus ring drawn outside a rounded control.
- **Check:** for each rounded element inside a rounded parent, read both computed radii and the gap between their edges (padding plus border). When the gap is smaller than the outer radius, an inner radius that isn't the step on the product's scale closest to the outer radius minus the gap fails; around a control that keeps its own radius, a container whose radius isn't the control's plus the gap fails. For each focus ring outside a rounded control, a radius smaller than the control's radius plus the ring's offset fails.
- **Fail:**
  - a card at 12 px holding an image 8 px in, also at 12 px: the gap is 8 px along the sides and wider at the corners;
  - a button at 6 px with a focus ring 2 px outside it, also at 6 px;
  - a toolbar at 12 px holding 6 px buttons 2 px in.
- **Pass:**
  - the image at 4 px;
  - the focus ring at 8 px;
  - the toolbar at 8 px;
  - an image that runs to the card's edge and is clipped by it, since it takes the card's corners.

### 8. See-through surfaces float over content, and text on them reads over anything behind

Clear, glass-like materials are for layers that float over content, such as a header people scroll under, a toolbar or a menu. The content itself sits on opaque surfaces or on a thick, mostly opaque material. Text on a see-through surface, other than text in a disabled control or a logo, has a contrast of at least 4.5:1, or 3:1 for large text (24 px, or 18.67 px bold), and the icons people need at least 3:1, with the busiest, darkest and lightest content that can pass behind them. When people ask their system for less transparency or more contrast, the surface turns solid.

- **Why:** Contrast is measured against what renders behind the text and icons (WCAG 2.2, 1.4.3 and 1.4.11; Understanding 1.4.3), so text on a see-through surface that passes over a white page can fail over a photo. With text or line drawings behind a see-through palette, people found its icons more slowly (Harrison et al. 1995), and over busy photos, white text read best with a dark layer behind it, which helped more than blur (Sawyer et al. 2020). Apple keeps clear Liquid Glass for controls and navigation over content, and puts content on thicker, more opaque materials; Microsoft keeps Acrylic for short-lived surfaces (Apple, "Materials"; Microsoft, "Acrylic material"). People can turn transparency off in macOS, iOS and Windows, which turns Microsoft's materials solid, but on the web only Chrome and Edge report the setting, so the see-through default must pass on its own (MDN; Microsoft, "Acrylic material"). On macOS, Increase Contrast also turns on Reduce Transparency and locks it (Fleishman 2025), but only Chrome and Edge report that setting, so in other browsers `prefers-contrast: more` is often the only sign a page gets.
- **Applies when:** a surface that lets content show through, with `backdrop-filter`, opacity or a translucent fill, except a decorative shape with no text or controls, such as a panel on a marketing page.
- **Check:** find each see-through surface. Scroll the busiest, the darkest and the lightest content of the page under it, and measure its text and icons against what renders behind them: under the ratios above fails. Body text or cards on a clear, glass-like surface fail. In Chrome DevTools (Rendering panel), emulate `prefers-reduced-transparency: reduce`, then `prefers-contrast: more`: a surface that stays see-through under either fails.
- **Fail:**
  - a header of 70% white whose gray nav text (#6b7280) passes at 4.8:1 over the white page and drops to 2.3:1 when a black image scrolls under it;
  - cards of clear glass over a photo or a gradient page.
- **Pass:** the header at 85% white with a strong blur, and nav text in #374151: 7.3:1 even over black.

## Page

### 9. A modal dims the page behind it; menus and popovers don't

A modal dialog or sheet sits over a scrim that dims the page, which shows that the page can't be used until it closes. Menus, popovers and other layers that leave the page usable float without a scrim.

- **Why:** A modal blocks the page until people close it (Apple, "Modality"; MDN), and the scrim shows that; a scrim behind a menu tells people the page is blocked when it isn't. Material 3, Carbon, Primer and Atlassian dim the page behind modals, Material 3 with black at 32% (their tokens), and Microsoft keeps menus, flyouts and other non-modal layers on a translucent material that leaves the page in view (Microsoft, "Acrylic material").
- **Applies when:** the product shows dialogs, sheets, menus or popovers.
- **Check:** open each dialog, sheet, menu and popover. A modal with no scrim fails, and so does a scrim behind a layer that leaves the page usable.
- **Fail:**
  - a confirmation dialog floating over a fully bright page;
  - a dropdown menu that dims the whole page.
- **Pass:**
  - the dialog over a 32% black scrim, and the menu with only its shadow;
  - a full-screen dialog on a phone, which covers the page instead of dimming it;
  - a modal side panel with a scrim.

### 10. Floating layers stack in one order, and a message never hides under a dialog

Floating layers stack in one fixed order across the product, set in its tokens: sticky headers lowest, then menus and popovers opened from the page, then dialogs with their scrims, then toasts and other messages, then tooltips. A menu, popover or message opened while a modal dialog is open appears above the dialog and its scrim, and people can press it and screen readers can reach it.

- **Why:** A message under a scrim can't be read, so people miss what happened, and a menu under a dialog can't be used. While a modal dialog is open, everything outside it is inert, so a toast shown from outside it can be seen but not pressed or reached by screen readers (HTML Standard, "Modal dialogs and inert subtrees"). The usual causes are a `z-index` set per component, which can't lift a menu above the level of a sticky or transformed parent (MDN, "Stacking context"), and toasts placed in the page rather than in the top layer, where the element added last renders on top (CSS Positioned Layout 4). Primer fixes one order in its tokens, and Atlassian dropped its numbered layers for the top layer (Primer tokens; Atlassian, top-layer package).
- **Applies when:** the product has more than one kind of floating layer.
- **Check:** list the `z-index` values in the CSS and match them to the product's layer tokens: a value off the scale, such as `z-index: 9999` in one component, fails. Then open each menu, popover and tooltip where it can overlap another layer, such as a menu from the page header over a table's sticky header row: one drawn under it fails. Open a dialog and trigger a message from inside it, such as a validation error or a "Copied" confirmation: a message under the dialog or its scrim fails. Open a menu inside a dialog: a menu under the dialog fails. Press the action of each message and menu shown over a dialog, and read the accessibility tree: one that doesn't respond, or is missing from the tree, fails.
- **Fail:**
  - a "Saved" toast drawn under a modal's scrim;
  - a tooltip that a sticky header covers;
  - a "Copied" toast drawn above a modal dialog from outside it, whose Undo does nothing when pressed;
  - an account menu in the sticky page header drawn under a table's sticky header row.
- **Pass:**
  - toasts shown as popovers in the top layer;
  - while a modal dialog is open, its messages rendered inside the dialog;
  - a message that waits until the dialog closes, when the dialog shows the same message itself.
