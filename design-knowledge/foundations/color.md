# Color

Covers how color is used: the contrast of text and of controls, color as a cue, what each color means, the palette and its tokens, the colors of states and of statuses, themes (light, dark, forced colors and higher contrast), color in CSS, and text over images and see-through surfaces.

Contrast ratios here are WCAG 2 ratios, computed from the colors the browser renders. The rules come in four groups: rules for every level, then rules for primitives (a color, a token, or a single control and its states), components (a section of a page, such as a header or a hero) and pages.

## Every level

### 1. Text has enough contrast

All text, and text in images, has a contrast of at least 4.5:1 with the color right behind it, or 3:1 for large text: 24 px and up, or 18.67 px bold and up. This includes placeholder text, links, the labels of buttons and badges, and text in every state. A character used as an icon, such as a close button's ×, needs 3:1, as icons do.

- **Why:** For letters of moderate size, cutting contrast tenfold slowed normal readers by less than half, while 16 of 19 low-vision readers needed more contrast than normal, about 3.9 times as much, so text that looks fine to its designer can be too faint for others (Legge et al. 1987; Rubin and Legge 1989). WCAG 2.2 sets 4.5:1, the 3:1 minimum of ISO 9241-3 raised about 1.5 times for the loss in contrast sensitivity of 20/40 vision, or 3:1 for text of at least 18 pt, or 14 pt bold: 24 px, or 18.67 px bold, since CSS sets 1 pt at 4/3 px (1.4.3, AA; Understanding 1.4.3; CSS Values and Units 4). The criterion covers placeholders and text shown on hover or focus, and ratios aren't rounded: 4.499:1 fails. APCA, another way to measure contrast, is in no standard (WCAG 3 Working Draft, 2026).
- **Applies when:** all text and text in images, except text in disabled controls, pure decoration, text no one can see, text inside a photo or picture with other important content, and logos and brand names.
- **Check:** for each kind of text on the screen (body, secondary, captions, placeholders, links, button and badge labels, and text in each state), read its computed color and the color that renders right behind it: the nearest painted background, with any see-through layers and opacity blended in. Compute the WCAG ratio. Under 4.5:1, or under 3:1 for large text, fails. Where text sits on a color people pick, such as a label or project color, measure it on the lightest and the darkest color they can pick.
- **Fail:**
  - placeholder text in #9ca3af on white, 2.5:1;
  - captions in #999 on white, 2.8:1;
  - white text on an orange #ff8c00 button, 2.3:1, chosen because dark text looks muddy on bright colors: black gives 9.0:1;
  - metadata in black at 45% opacity on white, 3.36:1;
  - gray text in #777 on white, 4.48:1;
  - read-only values set in the disabled gray: read-only text isn't a disabled control;
  - white label text on a pale yellow a user picked, 1.25:1.
- **Pass:**
  - secondary text in #6b7280 on white, 4.8:1;
  - white text on a #2563eb button, 5.2:1.

### 2. Controls, their states and focus have enough contrast

These have a contrast of at least 3:1 with the colors next to them:
- the marks that show what state a control is in: a checkbox's box and check, a radio button's circle and dot, the position of a switch;
- the icons people need that have no text label, including characters used as icons, such as × and ›;
- the parts of a chart or diagram whose information no text gives;
- the focus indicators the product styles. Focus is a solid line at least 2 px wide.

A field's border needs no 3:1 when a label, text or an icon shows the field is there, which is almost always.

- **Why:** Controls with low contrast are hard to see, and people with a visual impairment can miss them altogether (Understanding 1.4.11). WCAG 2.2 asks for 3:1 against the colors next to them for what shows a control and its state, for focus indicators the author styles, and for the parts of graphics people need (1.4.11, AA). A control needs a boundary only when nothing else, such as its text or label, shows it is there, and a graphic needs none when text on or beside it gives the same information, or when it is there only for looks. Disabled controls and controls the browser draws unchanged are exempt, and so are graphics whose exact look is essential to what they show, such as a logo, a flag, a photo or a heat map; a logo the author shows faded is not (Understanding 1.4.11, "Essential exception"). At AAA, a focus indicator is at least as large as a 2 px line around the control (2.4.13), and Carbon draws focus as a 2 px border (Carbon, "Color overview").
- **Applies when:** controls, icons people need, charts and focus, except lines that only separate, such as between list rows.
- **Check:** for each control, find what shows its state (box, check, dot, knob, fill) and, for a control with no text, the icon that shows what it does. Measure each against the color next to it, on every surface where the control appears. Then move focus through the page with the Tab key and measure each focus indicator against the colors around it. Under 3:1 fails, and so does a focus indicator thinner than 2 px. A native checkbox, radio button, range or progress bar tinted with `accent-color` counts as styled: measure its checked fill as it renders.
- **Fail:**
  - unchecked checkboxes drawn with a #e5e7eb box on white, 1.2:1;
  - a focus ring in #93c5fd on white, 1.8:1;
  - an icon-only delete button in #d1d5db on white, 1.5:1;
  - checkboxes tinted with `accent-color: #93c5fd` on white, whose checked fill renders at 1.8:1.
- **Pass:**
  - checkbox boxes in #8a8a8a on white, 3.45:1;
  - a 2 px focus outline in #2563eb, 5.2:1 on white;
  - a field with a label, placeholder, value or icon, whatever the contrast of its border;
  - a button with a visible label and a faint fill;
  - a hover color close to the rest color;
  - the browser's own focus ring, unchanged;
  - a meter, chart line or connector whose values or meaning are written beside it, such as a usage bar next to "0/40".

### 3. Color is never the only cue

Anything color tells people, such as an error, a status, a link inside text, a required field or the selected item, is also shown another way: by text, an icon, a shape, an underline, or a difference in lightness. Colors people must tell apart at a glance also differ in lightness.

- **Why:** About 8% of men and 0.4% of women of European descent mix up red and green, and the much rarer tritan forms mix up blue and green, so a meaning shown by hue alone is lost to them (Birch 2012; Almustanyir 2025). WCAG 2.2 counts a lightness difference of 3:1 as a second cue, except where people must recognize a particular color, such as red for invalid (1.4.1, A; Understanding 1.4.1). A link inside text needs its cue at rest, an underline or 3:1 against the text around it, not only on hover or focus; links that the page's design sets apart, such as navigation, need none (F73; G183).
- **Check:** list what color tells people on the screen: links inside text, errors, required fields, statuses, the selected item, the current page. For each, find a second cue that works without color: text, an icon, a shape, an underline, position, or a lightness difference of 3:1 or more. Meaning with no second cue fails, and so does a cue that shows only on hover or focus. Then view the page in grayscale (`html{filter:grayscale(1)}`) and with Chrome DevTools' protanopia and deuteranopia emulation (Rendering panel, "Emulate vision deficiencies"): two colors that should differ but look the same fail.
- **Fail:**
  - a status shown by a green or red dot alone;
  - required fields marked only by red labels;
  - links in #2563eb inside #374151 body text with no underline: 2.0:1 against the text around them.
- **Pass:**
  - a red dot with the word "Failed" beside it;
  - an error field with an icon and a message;
  - links underlined;
  - links in #2563eb inside #111827 text with no underline: 3.4:1 against the text, and 5.2:1 against the white page;
  - visited links in another color;
  - links that stand alone, such as navigation items or search result titles, with no underline until hover, as Carbon draws standalone links.

### 4. Each color has one job

On product screens, neutral colors carry the surfaces and the text. Every other color has one job across the product: the accent marks what people can act on, what is selected and where focus is, and each status color marks its status. A color never takes another color's job, and color with no job is left out.

- **Why:** A color with two meanings confuses people, such as the brand color on buttons and on text that can't be clicked (Apple, "Color"). Material 3, Carbon and Primer each keep their main color for actions and for selected or active states (Material 3, "Color roles"; Carbon, "Color overview"; Primer, "Color usage"). Meanings differ between cultures: in mainland China red marks rising prices, as it does in Apple's Stocks app in Chinese (Apple, "Color").
- **Applies when:** product screens, except marketing pages and illustrations, which can use large areas of color for the brand, logos and app icons in their brand colors, and colors people pick themselves, such as label or project colors.
- **Check:** group the screen's colors by hue, from their computed values, and write down what each marks. A hue that marks two different things, such as the link color on headings that can't be clicked, or the error red on a badge that isn't an error, fails, and so does a strong color that marks nothing, such as a gradient behind a settings panel.
- **Fail:**
  - section headings in the link blue;
  - a red "Beta" badge in a product where red means error;
  - each page with its own accent color.
- **Pass:**
  - blue only on links, primary buttons, selected items and focus;
  - red only on errors and destructive actions;
  - red for rising prices in a product for mainland China;
  - a screen with almost no color.

### 5. Every theme passes on its own

Each theme the product offers meets the rules of this guide on its own. The dark theme is made for dark backgrounds: text, links, focus and status colors use lighter tints that pass on the dark surfaces, not the light theme's colors and not an inversion of them. As a starting point, the dark theme's accent is a little less saturated than the light one's, and its scales have more steps at the dark end (default).

- **Why:** The light theme's colors fail on dark surfaces: Carbon's blue #0f62fe measures 3.6:1 on its dark background #161616, so its dark themes use lighter tints, such as #78a9ff for links, at 7.7:1 (computed from published tokens), and dark colors aren't simply inversions of light ones (Apple, "Dark Mode"). Some people with low vision read 10–50% faster with light text on dark (Legge 2016), so the dark theme has to pass for them. Designers lower the accent's saturation for a dark theme and add steps at its dark end, rather than reversing the light scale (Jakub Krehel, interfaces "better-colors").
- **Applies when:** the product offers more than one theme.
- **Check:** switch to each theme, with the product's setting or the system setting it follows, and repeat the checks of rules 1, 2 and 3 on the same screens. A dark theme made with `filter: invert()` fails.
- **Fail:**
  - links in #2563eb on a #111827 dark page, 3.4:1;
  - a dark theme made by inverting the light one, so photos turn into negatives.
- **Pass:**
  - links in #60a5fa on #111827, 7.0:1;
  - a pure black background;
  - a primary button that keeps one fill in both themes, as Carbon's does, when its text passes on it;
  - saturated accents on a dark background that pass the checks.

### 6. Forced colors and higher contrast keep everything visible

When people turn on a forced color theme, such as a Windows contrast theme, focus stays visible, controls keep their edges, selected items stay marked and icons stay visible. When people ask for more contrast, faint lines and secondary text get stronger.

- **Why:** In forced colors the browser puts the user's colors in place of the page's, `box-shadow` computes to none and most background images are dropped, so a focus ring drawn as a shadow, a selected item marked only by a tint, or an SVG icon with a fixed fill can disappear, while borders, outlines, font weight, text and `currentColor` stay (CSS Color Adjustment 1, "Forced Color Mode"). An outline with `outline-color: transparent` shows only in forced colors, and system colors such as `Highlight` are kept, so a `forced-colors` rule can mark a selection in the user's colors (CSS Color Adjustment 1). `prefers-contrast: more` works in all major browsers (MDN, "prefers-contrast"): Apple asks apps whose colors miss 4.5:1 to offer stronger ones when people ask for it, and warns that in Dark Mode this can lower the contrast of dark text on a dark background (Apple, "Accessibility"; "Dark Mode"), and Material 3 and Primer offer higher-contrast themes (Material 3, "How the system works"; Primer, "Color usage").
- **Check:** turn on forced colors, once light and once dark: in Chrome DevTools, Rendering panel, "Emulate CSS media feature forced-colors", with "prefers-color-scheme" set to light and then to dark, or with a light and a dark Windows contrast theme. Move focus with the Tab key and look at each control, selected item and icon: focus, a control's edge, a selected state or an icon people need that disappears fails. Elements with `forced-color-adjust: none` keep the page's own colors, so they are the first to vanish on a dark theme. When you can't emulate, the CSS decides: focus styles made only of `box-shadow` with `outline: none`, selected items marked only by color and controls set apart only by a fill, with no `forced-colors` rule, and SVG icons with fixed fills fail. Then emulate `prefers-contrast: more`, once in each theme: faint lines and secondary text that don't get stronger fail, and so does a color that loses contrast, such as text made darker on a dark background.
- **Fail:**
  - a focus ring made of `box-shadow` with `outline: none`, gone in forced colors;
  - a selected item marked only by color (a tint and a darker label), with no `forced-colors` rule;
  - an icon with `fill="#111827"`, invisible on a black contrast theme.
- **Pass:**
  - focus as a 2 px outline, or a `box-shadow` ring over `outline: 2px solid transparent`;
  - a selected item that also has a cue forced colors keep, such as a bolder label, a line or a check, or that gets `Highlight` and `HighlightText` inside `@media (forced-colors: active)`;
  - icons in `currentColor`;
  - brand colors replaced by the user's colors in forced colors;
  - a picture whose meaning is written beside it, such as a connection diagram labeled "Connected" and "Waiting".

## Primitive

### 7. One palette, used through role names

Every color comes from one palette: one gray scale and a few color scales, built so that the same step looks about as light in every hue. As a starting point, each scale has finer steps at its light end and its most saturated color in the middle, and a brand color sits on the step whose lightness matches it, with a darker step for buttons where white text on the brand color fails (default). Screens use the palette through role names, such as text-secondary or border-field, never raw values, and each role has one value in each theme. Each fill that carries text, such as a button, a banner or a colored container, has its own text role, which passes on that fill.

- **Why:** When a step looks equally light in every hue, its contrast follows from the step alone: in Material 3's tone, a difference of 40 gives at least 3:1 and 50 at least 4.5:1 (Material 3, "Glossary"), while in HSL a change of hue changes how light a color looks (CSS Color 4, "HSL Colors"). A difference of 0.02 in OKLab is about the smallest people notice (CSS Color 4, "Gamut Mapping"), so closer colors look like one. Role names let a value change by theme without touching the screens, and pair each fill with a text role that passes on it (Material 3, "Color roles"; Carbon, "Color overview"; Primer, "Color usage"). Warm and cool grays on one screen are two gray scales (Interface Craft, "Color Details"). Shipped scales crowd their light end: Tailwind's blue steps by 4 to 5 points of OKLCH lightness at its light end and 7 to 10 in the middle, with its most saturated color at step 600 (Tailwind CSS, "theme.css", v4.2.4). White on its blue-500 measures about 3.8:1 and on blue-600 5.3:1, so a brand color placed on its own step may need the darker one for buttons (Jakub Krehel, interfaces "better-colors").
- **Applies when:** the colors of the product's own interface, except those in a logo, a photo or an illustration.
- **Check:** list every distinct computed color on the screen, for text, backgrounds, borders and icons, with how many elements use it, and convert each to OKLCH. Match each to the product's tokens, from its CSS variables or design docs. A color that matches no token, two colors less than 0.02 apart in OKLab, or warm and cool grays on one screen, which are two gray scales, fail. In the code, colors written as raw values in components rather than tokens fail. For text on each colored fill, check that it uses that fill's text role and passes rule 1 on it: the page's secondary gray on a colored fill fails.
- **Fail:**
  - eleven grays on one screen, three of them less than 0.01 apart;
  - cool gray text on warm gray cards;
  - a hex value typed into one component to match a mockup;
  - secondary text in the page gray #9ca3af on a #2563eb banner, 2.0:1, or in white at 80%, 3.9:1.
- **Pass:**
  - one gray scale and one blue scale, used through about a dozen role tokens;
  - text in #1e40af on a #dbeafe container, 7.1:1, where the page's secondary #64748b gives 3.9:1;
  - a pure gray scale with no tint.

### 8. States keep their contrast and look the same everywhere

Hover, pressed, focused, selected and disabled each have their own color step, the same in every control of one kind, and disabled controls look the same across the product. Text and edges keep their contrast in every state, and a selected item is marked by more than a change of hue.

- **Why:** A control that loses contrast in one state can't be seen in that state, and a selected item marked only by hue is lost to people who can't tell hues apart (rule 3). WCAG 2.2 asks that a control keep its contrast in every state, with 3:1 for what shows it is selected or focused, but not between hover and rest (Understanding 1.4.11), and exempts disabled controls (1.4.3; 1.4.11). Systems set one step per state and one disabled look: Material 3 adds 8% of the content color for hover and 10% for focus and pressed, and shows disabled content at 38% (Material 3, "States"); Carbon moves half a step for hover and always uses gray when disabled (Carbon, "Color overview").
- **Check:** for each kind of control, show each state: rest, hover, pressed, focused, selected and disabled (force the state in DevTools with ":hov", or set the class or attribute). Measure text and edges in each state as in rules 1 and 2. Text under rule 1's contrast, 4.5:1 or 3:1 for large text, fails. For a selected item, find what marks it. A fill, edge, line or check counts when it has 3:1 against the colors next to it. A label counts when it turns bolder, or changes lightness by 3:1 or more against the unselected labels. A selected item with nothing that counts fails, even when it has several weak cues. Then compare controls of one kind: different hover colors on two buttons of one kind, or disabled controls that look different from one page to the next, fail.
- **Fail:**
  - a selected row marked only by a #eff6ff tint on white, 1.1:1;
  - a selected chip with a 1.1:1 tint, a label only a little darker than the others (2.3:1) and its faint edge removed: three cues, none that counts;
  - white button text that drops to 2.5:1 when the button turns #60a5fa on hover;
  - a disabled button at 40% opacity on one page and plain gray on the next.
- **Pass:**
  - hover adding 8% of the text color and pressed 10%;
  - a selected row with a tint and a check mark;
  - each kind of control with its own mark: Material 3 marks a selected chip or segment with a check, a change of fill or both, and a selected tab with a line under it, its active indicator (Material 3, "Selection"; "Tabs");
  - a hover color only a little different from rest: WCAG asks for no contrast between hover and rest;
  - a disabled label at 2:1: WCAG exempts disabled controls.

### 9. Each status color comes as a set that passes

Each status color, such as error, warning or success, comes as a set: a tone for text and icons, a tone for fills, and a light background. Each pair the set uses together passes contrast. Warning text on light backgrounds is a dark amber or ochre, never bright yellow or orange, and a bright yellow icon gets a dark outline or mark.

- **Why:** Bright yellows and oranges measure 1.5–2.5:1 as text on white, far under 4.5:1, so systems that color warning text use a dark amber or ochre, such as Primer's #9a6700, Carbon keeps its yellow #f1c21b for icons with a dark outline, and bright fills take dark text: white on Radix's amber fill is 1.6:1 (computed from published tokens). Status text on its own pale background sits near the minimum even in these systems, at 4.43–4.57:1 (computed), so each pair needs measuring.
- **Check:** list each status the product shows, and where: text, icon, badge, banner background, border. Measure each text against its own background and each icon against what surrounds it. Under 4.5:1 for text, or 3:1 for icons, fails; bright yellow, orange or green text is the usual case.
- **Fail:**
  - warning text in #f59e0b on white, 2.1:1;
  - success text in #22c55e on #f0fdf4, 2.2:1;
  - white text on a yellow badge.
- **Pass:**
  - warning text in #92400e on #fffbeb, 6.8:1;
  - a #ffb800 badge with near-black text;
  - a yellow warning icon with a dark mark inside it, as Carbon draws it;
  - a product with only error and success colors.

### 10. Colors render as intended in every browser

Colors stay within what screens can show, or come with a fallback. Gradients don't turn gray between two hues, and a large gradient between close colors doesn't show bands. Text colors that CSS computes are measured, not assumed.

- **Why:** A color the browser can't read is dropped, and one the screen can't show is changed. `oklch()`, `lab()`, Display P3 and `color-mix()` are widely available only since November 2025, and relative colors, `light-dark()` and `contrast-color()` are newly available, so older browsers lack them (web-features). Browsers clip colors the screen can't show, which can shift the hue (CSS Color 4, "Gamut Mapping"), so a wide-gamut color needs an sRGB value before it or an `@supports` or `@media` check (Argyle 2023). Gradients between hex, `rgb()` or `hsl()` colors mix in sRGB and can turn gray or dark in the middle (CSS Color 4, "Color Interpolation"; CSS Images 4). `contrast-color()` returns only black or white, by a method each browser chooses, and on a mid-blue such as #2277d3 its black text is not readable at small sizes (CSS Color 5; MDN, "contrast-color()"). A screen with 8 bits per channel shows only the levels between two colors, so a gradient from #0b0b0f to #16161c has 11 to 13 of them: across 1,200 px, each shows as a band about 100 px wide. More distance between the stops, a smaller area or fine noise hides them (Jakub Krehel, interfaces "better-colors").
- **Check:** in the CSS, find colors outside sRGB, such as `oklch()` or `color(display-p3 …)` values with high chroma, and check that each has an sRGB value before it or sits inside `@media (color-gamut: p3)`: one with neither fails. Look at each gradient on screen: a gray or muddy middle between two hues fails. Find text colors set with `contrast-color()`, `color-mix()` or relative colors, and measure what they render to, as in rule 1. Look at each large gradient at 1x: visible bands fail. Count the 8-bit levels between its stops against its width to find the likely ones.
- **Fail:**
  - a blue-to-yellow gradient in hex that turns gray in the middle;
  - a Display P3 green with no sRGB value;
  - a dark glow from #0b0b0f to #16161c across a hero, showing stripes.
- **Pass:**
  - a blue-to-yellow gradient written `in oklch`, which keeps its strength through the middle;
  - Display P3 colors inside `@media (color-gamut: p3)`, after their sRGB values;
  - the same dark glow with a fine noise layer over it.

## Component

### 11. Text over images and see-through surfaces passes at its weakest spot

Text and icons on photos, video, gradients and see-through surfaces pass contrast where the background behind them is most like them. Where the background varies, a solid or dimmed layer sits behind the text.

- **Why:** Text on a background that varies is only as readable as the spot behind it most like the text, and WCAG measures it there: the lightest part for light text (Understanding 1.4.3; F83). Over pure white, white text reaches 4.5:1 only with a black layer of about 54% or more between them, and a 40% layer gives 2.8:1 (computed); the other fixes are an outline of at least 1 px or a halo (G18). WCAG 2 gives no method for blurred, see-through surfaces, and the WCAG 3 draft says to test the rendered color (WCAG 3 Working Draft, 2026), so measure what renders, with the content that can scroll behind.
- **Applies when:** text or controls sit on a photo, a video, a gradient, or a surface people can see through, such as a blurred header, except text that is part of the photo itself, such as a shop sign.
- **Check:** find text on images, video, gradients and see-through surfaces. Measure the text color against the part of the background behind it that is most like the text: the lightest part for light text, the darkest for dark text. For a see-through surface, scroll the busiest and the darkest content of the page under it and measure there. Where people upload the images, or the images change, try a very light one and a very dark one. Where the background moves, such as an animation or a video, take screenshots across one full cycle and measure the frame where it is most like the text. Text under the ratios of rule 1 fails, and so do icons under 3:1.
- **Fail:**
  - a white headline on a photo whose sky behind the letters is near white;
  - gray #6b7280 text on a header of 80% white: 4.8:1 over a white page, 3.0:1 when a black image scrolls under it.
- **Pass:**
  - white text on a 60% black layer over the photo: 5.7:1 even where the photo is white;
  - text on a solid card placed over the image.

## Page

### 12. The browser's own parts follow the theme, from the first frame

The page tells the browser which themes it supports, so scrollbars, form controls and the page behind the content match the theme. The page shows in the right theme from its first frame, with no flash of the other one. A page that sets the browser's bar color (`theme-color`) sets one for each theme. A product with both themes starts in the one the system is set to, and a theme choice inside the product, where there is one, includes following the system.

- **Why:** Without `color-scheme`, the browser draws scrollbars, form controls and the page behind the content in its light colors, even on a dark page, and set in a `<meta>` tag before any CSS, it helps prevent a flash on load (MDN, "color-scheme"). A theme people pick in the product needs a small script in `<head>` that applies it before the page renders, or the wrong theme flashes first (Qwik, "Theme management"), and with `light dark` the browser's own parts follow the system, not that choice (CSS Color Adjustment 1, "color-scheme"). People expect apps to follow the system setting: Apple asks apps not to offer an appearance setting of their own, and Android recommends an in-app choice with System default as the recommended default (Apple, "Dark Mode"; Android Developers, "Dark theme"). The browser's bar takes the page's `theme-color`, which can be set per theme, so an installed app with one light value shows a white bar over its dark theme (MDN, "theme-color").
- **Applies when:** the product has a dark theme.
- **Check:** read `color-scheme` on the root element and in the meta tag. In the dark theme, look at scrollbars, native selects, date pickers and checkboxes: light browser parts on a dark page fail. Choose the dark theme in the product, reload with the cache off and the network slowed, and watch the first frames: a flash of the light theme fails. Set the system to dark and open the product in a fresh browser profile: it should start dark. Then, with the system light, pick the dark theme in the product and look at every part again, the browser's included: a part left light fails. Where the page sets `theme-color`, open it as an installed app, or in Chrome on Android, in the dark theme: a light bar over the dark theme fails.
- **Fail:**
  - white scrollbars and a white dropdown list on a dark page;
  - light scrollbars and date pickers in a dark theme picked in the product, because `color-scheme` still says `light dark` and the system is light;
  - a white flash on every load for people who chose the dark theme.
- **Pass:** `<meta name="color-scheme" content="light dark">` before the CSS, and the stored theme applied by a script in `<head>`.
