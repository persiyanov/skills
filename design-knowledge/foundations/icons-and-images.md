# Icons and images

Covers the icons of an interface (their set, how they are drawn and delivered, their size, stroke and color next to text, and their meaning), avatars, other companies' logos, and the photos, screenshots and illustrations on product screens and marketing pages: how they load and how they meet their surroundings. Not covered here: whether an image belongs at all, and whether an icon-only control can be understood. Alt text and the contrast of icons are covered here only where a rule needs them.

The rules come in three groups: rules for every level, then rules for primitives (a single icon or image, and how it is drawn and loaded) and components (an icon with its text, an avatar and a logo).

## Every level

### 1. One icon means one thing, everywhere

Each icon stands for one thing across the product, and each thing keeps its icon wherever it appears: in a list, a menu, an empty state or an email. Standard actions use the platform's standard icons. In a product that ships a right-to-left language, icons that show direction, such as arrows, chevrons and send, point the other way, while logos, check marks and clocks keep their shape.

- **Why:** People who go by the picture don't recognize a repeated control whose icon changes, such as Save drawn as a floppy disk on one page and a check mark on another; the criterion covers one control repeated, not different controls that do the same thing (WCAG 2.2, 3.2.4; Understanding 3.2.4). An icon with two meanings can't be relied on: products use a sparkles icon that can look like a star for AI, while most users read the star as saving or favoriting (Kaplan, "Sparkles Icon", 2024), and the "more" and menu icons each keep one job (Kaplan, "Designing Effective Contextual Menus", 2025). Platforms have their own icons for standard actions, such as Apple's share and more symbols and GitHub's separate Android share icon (Apple, "Icons"; Primer, "Octicons"). In right-to-left languages, direction icons point the other way, while logos, check marks and clocks keep their shape (Apple, "Right to left"; Material 3, "Bidirectionality & RTL").
- **Applies when:** always.
- **Check:** list the icons on the screens in scope with what each does. A repeated control with a different icon on another screen fails. One icon for two actions, or one action with two icons, fails. Compare the icons for standard actions (share, more, settings, search, close, delete) with the platform's standard icons: a different one fails. In a product that ships a right-to-left language, set `dir="rtl"`: an arrow, chevron or send icon still pointing the old way fails, and so does a flipped logo, check mark or clock.
- **Fail:**
  - a star for "Favorite" on one page and for "AI summary" on another;
  - a trash can for both "Remove from list" and "Delete forever";
  - a pencil for edit in the table and a gear for edit in the menu;
  - a back arrow that still points left in Arabic.
- **Pass:**
  - one pencil for edit everywhere;
  - an X for "Remove from list" and a trash can for "Delete";
  - one icon for one action, shown at two sizes;
  - the header's search shown as the word "Search" on wide screens and as a magnifying glass named "Search" on narrow ones;
  - two products that share the mark their owner publishes, each labeled by its name.

## Primitive

### 2. Icons come from one set, drawn alike

The product's icons look like one family: the same size steps, stroke weight, corner and end style, level of detail and fill style. Where the set pairs outlined and filled icons, a filled icon has a reason, usually the selected state. Where the set has a drawing, or an optical size, for the size an icon renders at, that one is used. Emoji are not interface icons.

- **Why:** Apple, Material 3 and NN/g ask the icons of a set to share size, detail, stroke weight, corners and fill; no study of mixing styles was found, so the rule rests on them (Apple, "Icons"; Material 3, "Applying icons"; Krause 2023). Solid icons were recognized and found faster than outlined ones while they were unfamiliar, and the gap shrank with familiarity (Shen et al. 2025). Where a set pairs the two, systems fill the selected item: Material 3 with a bold label as well, Fluent 2 also for small moments, and Apple fills every tab and lets the system mark the selected one (Material 3, "Navigation bar"; Fluent 2, "Iconography"; Apple, "Tab bars"). Emoji look different on each platform, and text-to-speech reads each by a name that may change (Unicode, UTS #51).
- **Applies when:** the icons of the interface, except logos and app icons in their own styles, illustrations, and emoji in what people write, such as messages and reactions.
- **Check:** list the icons on the screens in scope with their source (the library or component behind each SVG), rendered size, rendered stroke width and fill. When one drawing is scaled, the rendered stroke is the drawn stroke times the rendered size over the drawing grid: a 2 px stroke drawn on a 24 px grid renders at 1.33 px at 16 px. A set drawn again for each size, an optical size, or a stroke set not to scale keeps its own stroke: read the stroke of the drawing used. Two libraries whose size, stroke, corners or fill differ, two stroke widths at one size, outlined and filled icons mixed with nothing selected, emoji in place of icons, or an icon scaled from another size when its set has a drawing for the size it renders at fail.
- **Fail:**
  - Lucide icons in the sidebar and Heroicons in the toolbar;
  - a filled bell among outlined icons in a toolbar, with nothing selected;
  - 🚀 and ⚙️ as menu icons.
- **Pass:**
  - one set at 16 and 20 px with one stroke weight, and the current page's icon filled, with a bold label;
  - a symbol that the outlined set itself keeps filled, such as a full-body person (Material 3, "Applying icons");
  - custom icons drawn to match the library's size, stroke and corners (Apple, "Icons");
  - a typographic symbol inside text, such as "Next →" or a "•" between items, hidden from screen readers where it only decorates.

### 3. Icons are vector drawings that follow the text color

Icons are SVG, inline or from a sprite, drawn in the current text color (`currentColor`), so they follow every theme, state and forced-color setting. An icon people need, with no text beside it, is never drawn with an icon font, unless each icon is marked as an image and has a name, so that people's own fonts don't replace it.

- **Why:** When people choose their own font, icon fonts disappear unless each icon is marked with `role="img"` (WCAG 2.2, technique ARIA24). In forced colors, an SVG in `currentColor` takes the forced text color, while fixed fills stay as drawn and can vanish against the forced background (CSS Color Adjustment 1). Carbon and Atlassian color icons like their text (Carbon, "Icons"; Atlassian, "Iconography").
- **Applies when:** every icon, except multicolor logos and illustrations, which keep their own colors.
- **Check:** in the code, find how each icon is drawn: an inline `<svg>` or one with `<use>`, an icon font (a class such as `material-symbols`, or a `font-family` on an `<i>` or `<span>`), an `<img>`, or a CSS background. An icon font on an icon-only control fails unless the icon element has `role="img"` and a name. Read the `fill` and `stroke` of each SVG: a fixed color on an icon people need, with no text beside it and no `forced-colors` rule, fails. When you can emulate forced colors (Chrome DevTools, Rendering panel), look at each icon-only control: one that disappears fails.
- **Fail:**
  - icon-only toolbar buttons drawn with the Material Symbols font, with no `role="img"`;
  - a delete button whose only content is an SVG with `fill="#6b7280"`.
- **Pass:**
  - inline SVG with `stroke="currentColor"`, colored by the button's text color;
  - an icon font for icons next to their text labels.

### 4. Images hold their space and load in order

Every image reserves its space before it loads, with `width` and `height` or an `aspect-ratio`, and fills its slot with `object-fit`, cropped the same way in every slot of one kind, with its subject in view. The image people see first loads first, and the rest load as people scroll near them. Images come in the sizes and formats each screen needs.

- **Why:** Content that moves after it appears makes people lose their place or press the wrong thing (web.dev, "Cumulative Layout Shift"), and `width` and `height` let the browser reserve an image's space before it loads (MDN, "`<img>`"). A lazy image in the first view loads late, so the first image is never lazy, and `fetchpriority="high"` loads it sooner (web.dev, "Browser-level image lazy loading"). `srcset` with `sizes`, and `<picture>` with AVIF and WebP, let the browser pick a file for the screen (MDN, "`<img>`" and "`<picture>`"); `fetchpriority` has worked in every major browser since October 2024, and AVIF since January 2024 (web-features).
- **Applies when:** always.
- **Check:** in the code, list each `<img>` and CSS background image with its `width` and `height` or `aspect-ratio`, `loading`, `fetchpriority`, `srcset` and `sizes`. Reload with the cache off and the network slowed, and watch the first frames: a control, text or image that moves when an image arrives fails. The first visible image with `loading="lazy"` fails. Compare each image's file size in pixels with its rendered size times the screen's pixel ratio: a file far larger, or one file for every screen width, fails. At the narrowest width, look at each cropped image: one whose subject is cut away fails.
- **Fail:**
  - avatars with no size, so the names beside them jump right as they load;
  - a hero image with `loading="lazy"`;
  - a team photo cropped to its empty middle on a phone.
- **Pass:**
  - `<img width="48" height="48">` for avatars;
  - a hero with `fetchpriority="high"` and AVIF and WebP sources;
  - an image in a slot whose size CSS already fixes, without `width` and `height` attributes.

### 5. An image keeps its edge and fits the theme

An image whose edge can be as light as the surface it sits on, or as dark, gets a faint edge, so it doesn't bleed into the surface. Screenshots and illustrations made for a light background get a version for the dark theme.

- **Why:** An image whose edge has the color of the surface around it has no visible edge: people can't see where it ends, and a screenshot's content runs into the page. Primer rings its avatars with 1 px, Interface Craft outlines images on backgrounds that aren't pure white, and Atlassian's image swaps sources for the light and dark themes (Primer, Avatar component styles; Interface Craft, "Style Details"; Atlassian, "Image"). Forced colors remove `box-shadow` edges, while raster images keep their colors (CSS Color Adjustment 1).
- **Applies when:** an image sits on a surface close to the colors at its edge, or the product has a dark theme.
- **Check:** find images whose edges can match their surface: screenshots with white margins on white cards, photos with dark edges in the dark theme, logos with transparent backgrounds. One that bleeds into its surface, with no edge, fails. An inset `box-shadow` on an `<img>` counts as no edge, since the picture is drawn over it (CSS Backgrounds 3). Switch to the dark theme: a light screenshot or illustration glaring on a dark surface fails.
- **Fail:**
  - a white screenshot on a white card, with nothing between them;
  - a light-theme screenshot on the dark theme's page.
- **Pass:**
  - the screenshot with a faint 1 px `outline` offset −1 px, inside its edge, which forced colors keep;
  - a dark version of the screenshot in the dark theme;
  - transparent art meant to sit on the page.

## Component

### 6. An icon matches the text beside it

An icon next to text is about as large as the text or one step larger, drawn about as heavy as its letters, colored like it, and centered on it rather than set on its baseline.

- **Why:** Systems match an icon to the text beside it: Material 3 asks for the same size and optical weight, Apple's symbols come in the weights of the text, Carbon pairs 16 and 20 px icons with 14 and 16 px text and centers them rather than on the baseline, and Atlassian's 16 px default suits body text (Material 3, "Applying icons"; Apple, "SF Symbols"; Carbon, "Icons"; Atlassian, "Iconography"). When one drawing is scaled, the stroke people see depends on the size it renders at: Lucide's 2 px stroke on a 24 px grid renders at about 1.33 px at 16 px (Lucide, "Lucide design language").
- **Applies when:** an icon sits beside text, as in a button, a menu item, a list row or a label, except a larger icon above its label, as in a tab bar or an empty state.
- **Check:** for each icon beside text, read the icon's rendered size, rendered stroke and color, and the text's size, weight and color. On a screenshot at 2×, compare the icon's strokes with the stems of the letters, and the icon's center with the middle of the capital letters. An icon more than a step larger or smaller than the text, strokes clearly heavier or lighter than the stems, a color unlike the text's with no meaning, or an icon whose center misses the middle of the capitals fails.
- **Fail:**
  - 24 px icons with a 2 px stroke beside 13 px regular menu text;
  - icons in the label's gray at half its weight;
  - a 16 px icon resting on the baseline of 14 px text, its center 3 px above the middle of the capitals.
- **Pass:**
  - 16 px icons with a 1.33 px stroke beside 14 px regular labels, in the label's color and centered on it;
  - a colored status icon that marks a state.

### 7. An avatar shows who it is: round for people, square for the rest

A person's avatar is round. An organization, team, project, app, bot or AI agent gets a square one with rounded corners, so people can tell them apart. An avatar without a photo shows initials or a neutral figure. Avatar sizes come from a short scale.

- **Why:** Primer, Atlassian and Fluent 2 draw people in circles and other accounts in squares: Primer its bots, AI agents, teams and organizations, Fluent 2 its teams and organizations, Atlassian its projects and spaces, with a hexagon for AI agents. Primer's sizes run from 16 to 64 px, and Fluent 2 shows initials while a photo loads and picks colors from a hash of the name, so two people can share one: the color is not an identity (Primer, "Avatar"; Atlassian, "Avatar"; Fluent 2, "Avatar").
- **Applies when:** the product shows people or other accounts, except avatars inside a decorative picture of the product, hidden from screen readers.
- **Check:** list each avatar with what it stands for, its shape and its size. A person in a square, an organization or bot in a circle, or a size off the product's scale, fails. In an avatar stack, "+N" must say how many more there are, and each person must be nameable. Break each avatar's image URL: initials or the neutral figure show at the same size, and the browser's broken-image mark fails. Give an account a name that starts with an emoji: initials that show a broken character fail.
- **Fail:**
  - a bot and a person in the same round avatars in one comment thread;
  - the broken-image mark where a failed photo should fall back to initials.
- **Pass:**
  - a person's photo in a circle and a company's logo in a rounded square, each with its name beside it;
  - a third shape for AI agents, such as Atlassian's hexagon, in a product that documents it.

### 8. Other companies' logos follow their owners' rules

A third-party logo keeps the colors, proportions and clear space its owner publishes, and appears only where its owner allows it. A logo is never grayed out or faded to show a state, and no one draws a stand-in for another company's mark. The product's name in text is always safe.

- **Why:** Owners publish rules for their logos: most forbid other colors or proportions, some allow the logo only for certain uses or with a license or written approval, and Microsoft and Anthropic let a product name their products in text, such as "works with Microsoft Teams" (LinkedIn, "Brand policies"; Slack, "Brand Terms of Service"; GitHub, "Logos"; Google, "Sign in with Google branding guidelines"; Microsoft, "Trademark and Brand Guidelines"; Anthropic, "Trademark Guidelines" and "Legal and compliance"; OpenAI, "Brand guidelines"). LinkedIn allows only its "in" logo, and only for sign-in, social icons and links to LinkedIn; GitHub allows its logo in gray; Sign in with Google keeps the full-color "G" (same pages).
- **Applies when:** the product or its marketing pages show other companies' logos.
- **Check:** list each third-party logo and compare it with its owner's published brand rules. A recolored, stretched, cropped or crowded logo fails, and so do a logo its owner doesn't license, such as Microsoft's product logos, a logo grayed out or faded to show a state, and a mark drawn as a stand-in for another company's product.
- **Fail:**
  - a "Works with" row where the LinkedIn, Slack and Microsoft Teams logos are all recolored to one gray;
  - the logos of agents not yet connected, shown in gray at half opacity.
- **Pass:**
  - LinkedIn's "in" mark in its own blue and proportions, on a "Sign in with LinkedIn" button;
  - "Works with Microsoft Teams" written in text;
  - a neutral plug icon while no agent is connected, then the agent's own logo once it connects;
  - GitHub's mark in gray, which GitHub allows;
  - a site's own favicon beside a link to that site, the way browsers and search results show it;
  - a row of customer logos in one color on a marketing page, where the customers agreed to that use.
