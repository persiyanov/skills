# Icons and images

Covers the icons of an interface (their set, how they are drawn and delivered, their size, stroke and color next to text, their meaning, and when an icon needs a label), avatars, other companies' logos, and the photos, screenshots and illustrations on product screens and marketing pages: when they belong, how they load and how they meet their surroundings. Alt text and the contrast of icons are covered here only where a rule needs them.

- These rules are a floor: meeting them all makes a product well made, not yet good.
- **Every product:** holds even when popular products break it, and no product's own rules change it.
- **Current practice:** what research, the design systems of top products and strong designers recommend now. A product's own documented value replaces it.
- **Default:** a starting point for designing, taken from strong designers' practice: a review finding only when a harm can be named.
- **Fail and Pass:** examples. A Pass shows one way to meet the rule, not the only one.

The rules come in three groups: rules for every level, then rules for primitives (a single icon or image, and how it is drawn and loaded) and components (an icon with its text, an avatar, a logo, and a section of a page with images, such as a hero, a feature list or an empty state).

## Every level

### 1. People can tell what an icon-only control does before they press it

Icon-only controls are normal in toolbars, rows and dense panels. Each one has a name that screen readers announce, such as `aria-label`, and the name includes what the icon shows, such as the count on a badge. Sighted people get the name in one of three ways, depending on the icon:
- an icon people know in the place they expect it, such as close, search, back, the ⋯ menu or copy, needs no visible name;
- an unclear icon whose press is harmless and explains itself, such as one that opens a menu of named items or shows "Copied", may show its name in a tooltip;
- an unclear icon whose press does something, such as recording, sending, deleting or changing a setting, shows its name before the press: in a tooltip on hover and focus, or as a visible label. A touch screen has no hover, so there it shows a visible label, unless the platform has made the icon standard.

Whether people know an icon is judged for each market the product ships to: an object or gesture known in one region, such as a US mailbox for mail, is unclear in others. Navigation items and tabs show a text label. An icon that stands for a word people read, such as a column header, keeps the word unless the icon is one people know.

- **Why:** Screen readers get a control's name, and what its icon shows, such as a count, only from the code (WCAG 2.2, 4.1.2 and 1.3.1). People misread icons even when they know the object: a ribbon was taken for a keyhole (Kaplan, "Icon Usability", 2024). Systems split on tooltips: Carbon, Primer, Atlassian, Material 3 and Fluent 2 show one on every icon button, Kumo, Geist and coss on none (Carbon, "Tooltip"; Primer, "IconButton"; Atlassian, "Icon button"; Material 3, "Icon buttons"; Fluent 2, "Tooltip"; Kumo, "Button"; Geist, "Tooltip"; coss ui, "Button"), so what decides it is whether pressing to find out is safe. Navigation keeps its words (Material 3, "Applying icons"; Apple, "Tab bars").
- **Kind:** Every product: a name screen readers announce, which includes what the icon shows (WCAG 2.2, 4.1.2 and 1.3.1). Current practice: the three ways above, and text labels in navigation and tabs.
- **Applies when:** an icon is a control or a link, or stands for a word people read.
- **Check:** for each icon-only control, read its name in the browser's accessibility tree: no name fails, and so does a name that leaves out a count or dot the icon shows. Then ask: would someone new, in each market the product ships to, know what it does from the icon and where it sits? If not, is pressing it harmless, with a result that explains itself? A control that is neither, and shows no name on hover, focus or screen, fails current practice. A navigation item or tab with no visible text fails.
- **Fail:** a delete button with only an icon and no `aria-label`. A sidebar of icons with no text. A bell with a red "3" named "Notifications". A microphone in a message box with no name on hover, where pressing it may start dictation or a voice call. A US-style mailbox with a raised flag as the only sign for Inbox, in a product used across Europe and Asia.
- **Pass:** a ⋯ button named "More actions for Avery Owner". A bell named "Notifications, 3 unread". A microphone with the tooltip "Dictate". Sidebar items with an icon and a label.
- **Not a fail:** a ⋯ menu or a copy button with no tooltip: people know these icons, the menu names its items, and the copy confirms itself. An icon next to a text label that names it, hidden from screen readers.

### 2. One icon means one thing, everywhere

Each icon stands for one thing across the product, and each thing keeps its icon wherever it appears: in a list, a menu, an empty state or an email. Standard actions use the platform's standard icons.

- **Why:** People who go by the picture don't recognize a repeated control whose icon changes, such as Save drawn as a floppy disk on one page and a check mark on another; the criterion covers one control repeated, not different controls that do the same thing (WCAG 2.2, 3.2.4; Understanding 3.2.4). An icon with two meanings can't be relied on: products use a sparkles icon that can look like a star for AI, while most users read the star as saving or favoriting (Kaplan, "Sparkles Icon", 2024), and the "more" and menu icons each keep one job (Kaplan, "Designing Effective Contextual Menus", 2025). Platforms have their own icons for standard actions, such as Apple's share and more symbols and GitHub's separate Android share icon (Apple, "Icons"; Primer, "Octicons"). In right-to-left languages, direction icons point the other way, while logos, check marks and clocks keep their shape (Apple, "Right to left"; Material 3, "Bidirectionality & RTL").
- **Kind:** Every product: a control that repeats across screens, such as a toolbar's Save or the header's search, keeps one icon wherever it repeats (WCAG 2.2, 3.2.4). Current practice: one action keeps one icon everywhere, one icon never stands for two actions, standard actions use the platform's icons, and in a right-to-left language direction icons flip; the product's own icon list comes first.
- **Applies when:** always.
- **Check:** list the icons on the screens in scope with what each does. A repeated control with a different icon on another screen fails. One icon for two actions, or one action with two icons, fails current practice. Compare the icons for standard actions (share, more, settings, search, close, delete) with the platform's standard icons. In a product that ships a right-to-left language, set `dir="rtl"`: an arrow, chevron or send icon still pointing the old way fails, and so does a flipped logo, check mark or clock.
- **Fail:** a star for "Favorite" on one page and for "AI summary" on another. A trash can for both "Remove from list" and "Delete forever". A pencil for edit in the table and a gear for edit in the menu. A back arrow that still points left in Arabic.
- **Pass:** one pencil for edit everywhere; an X for "Remove from list" and a trash can for "Delete".
- **Not a fail:** one icon for one action, shown at two sizes. The header's search shown as the word "Search" on wide screens and as a magnifying glass named "Search" on narrow ones. Two products that share the mark their owner publishes, each labeled by its name.

## Primitive

### 3. Icons come from one set, drawn alike

The product's icons look like one family: the same size steps, stroke weight, corner and end style, level of detail and fill style. Where the set pairs outlined and filled icons, a filled icon has a reason, usually the selected state. Where the set has a drawing, or an optical size, for the size an icon renders at, that one is used. Emoji are not interface icons.

- **Why:** Apple, Material 3 and NN/g ask the icons of a set to share size, detail, stroke weight, corners and fill; no study of mixing styles was found, so the rule rests on them (Apple, "Icons"; Material 3, "Applying icons"; Krause 2023). Solid icons were recognized and found faster than outlined ones while they were unfamiliar, and the gap shrank with familiarity (Shen et al. 2025). Where a set pairs the two, systems fill the selected item: Material 3 with a bold label as well, Fluent 2 also for small moments, and Apple fills every tab and lets the system mark the selected one (Material 3, "Navigation bar"; Fluent 2, "Iconography"; Apple, "Tab bars"). Emoji look different on each platform, and text-to-speech reads each by a name that may change (Unicode, UTS #51).
- **Kind:** Current practice. The product's own set comes first.
- **Applies when:** always.
- **Check:** list the icons on the screens in scope with their source (the library or component behind each SVG), rendered size, rendered stroke width and fill. When one drawing is scaled, the rendered stroke is the drawn stroke times the rendered size over the drawing grid: a 2 px stroke drawn on a 24 px grid renders at 1.33 px at 16 px. A set drawn again for each size, an optical size, or a stroke set not to scale keeps its own stroke: read the stroke of the drawing used. Two libraries whose size, stroke, corners or fill differ, two stroke widths at one size, outlined and filled icons mixed with nothing selected, emoji in place of icons, or an icon scaled from another size when its set has a drawing for the size it renders at fail.
- **Fail:** Lucide icons in the sidebar and Heroicons in the toolbar. A filled bell among outlined icons in a toolbar, with nothing selected. 🚀 and ⚙️ as menu icons.
- **Pass:** one set at 16 and 20 px with one stroke weight, and the current page's icon filled, with a bold label.
- **Not a fail:** logos and app icons in their own styles. A separate illustration style on marketing pages. A symbol that the outlined set itself keeps filled, such as a full-body person (Material 3, "Applying icons"). Custom icons drawn to match the library's size, stroke and corners (Apple, "Icons"). Emoji in what people write, such as messages and reactions. A typographic symbol inside text, such as "Next →" or a "•" between items, hidden from screen readers where it only decorates.

### 4. Icons are vector drawings that follow the text color

Icons are SVG, inline or from a sprite, drawn in the current text color (`currentColor`), so they follow every theme, state and forced-color setting. An icon people need, with no text beside it, is never drawn with an icon font, unless each icon is marked as an image so that people's own fonts don't replace it.

- **Why:** When people choose their own font, icon fonts disappear unless each icon is marked with `role="img"` (WCAG 2.2, technique ARIA24). In forced colors, an SVG in `currentColor` takes the forced text color, while fixed fills stay as drawn and can vanish against the forced background (CSS Color Adjustment 1). Carbon and Atlassian color icons like their text (Carbon, "Icons"; Atlassian, "Iconography").
- **Kind:** Every product: an icon people need, with no text beside it, stays visible when people choose their own font and in forced colors. An icon font does this only when each icon has `role="img"` and a name (WCAG 2.2, technique ARIA24). Current practice: inline SVG or an SVG sprite in `currentColor`.
- **Applies when:** always.
- **Check:** in the code, find how each icon is drawn: an inline `<svg>` or one with `<use>`, an icon font (a class such as `material-symbols`, or a `font-family` on an `<i>` or `<span>`), an `<img>`, or a CSS background. An icon font on an icon-only control fails unless the icon element has `role="img"` and a name. Read the `fill` and `stroke` of each SVG: a fixed color on an icon people need, with no text beside it and no `forced-colors` rule, fails. When you can emulate forced colors (Chrome DevTools, Rendering panel), look at each icon-only control: one that disappears fails.
- **Fail:** icon-only toolbar buttons drawn with the Material Symbols font, with no `role="img"`. A delete button whose only content is an SVG with `fill="#6b7280"`.
- **Pass:** inline SVG with `stroke="currentColor"`, colored by the button's text color.
- **Not a fail:** an icon font for icons next to their text labels. Multicolor logos and illustrations, which keep their own colors.

### 5. Images hold their space and load in order

Every image reserves its space before it loads, with `width` and `height` or an `aspect-ratio`, and fills its slot with `object-fit`, cropped the same way in every slot of one kind. The image people see first loads first, and the rest load as people scroll near them. Images come in the sizes and formats each screen needs.

- **Why:** Content that moves after it appears makes people lose their place or press the wrong thing (web.dev, "Cumulative Layout Shift"), and `width` and `height` let the browser reserve an image's space before it loads (MDN, "`<img>`"). A lazy image in the first view loads late, so the first image is never lazy, and `fetchpriority="high"` loads it sooner (web.dev, "Browser-level image lazy loading"). `srcset` with `sizes`, and `<picture>` with AVIF and WebP, let the browser pick a file for the screen (MDN, "`<img>`" and "`<picture>`"); `fetchpriority` has worked in every major browser since October 2024, and AVIF since January 2024 (web-features).
- **Kind:** Every product: an image that loads late never pushes a control people may be about to press. Current practice: `width` and `height` or `aspect-ratio` on every image, the first visible image loaded first and never lazy, the rest lazy, and files sized for the screen.
- **Applies when:** always.
- **Check:** in the code, list each `<img>` and CSS background image with its `width` and `height` or `aspect-ratio`, `loading`, `fetchpriority`, `srcset` and `sizes`. Reload with the cache off and the network slowed, and watch the first frames: a control that moves when an image arrives fails, and so does any text or image that moves. The first visible image with `loading="lazy"` fails. Compare each image's file size in pixels with its rendered size times the screen's pixel ratio: a file far larger, or one file for every screen width, fails. At the narrowest width, look at each cropped image: one whose subject is cut away fails.
- **Fail:** avatars with no size, so the names beside them jump right as they load. A hero image with `loading="lazy"`. A team photo cropped to its empty middle on a phone.
- **Pass:** `<img width="48" height="48">` for avatars, and a hero with `fetchpriority="high"` and AVIF and WebP sources.
- **Not a fail:** an image in a slot whose size CSS already fixes, without `width` and `height` attributes.

### 6. An image keeps its edge and fits the theme

An image whose edge can be as light as the surface it sits on, or as dark, gets a faint edge, so it doesn't bleed into the surface. Screenshots and illustrations made for a light background get a version for the dark theme.

- **Why:** An image whose edge has the color of the surface around it has no visible edge: people can't see where it ends, and a screenshot's content runs into the page. Primer rings its avatars with 1 px, Interface Craft outlines images on backgrounds that aren't pure white, and Atlassian's image swaps sources for the light and dark themes (Primer, Avatar component styles; Interface Craft, "Style Details"; Atlassian, "Image"). Forced colors remove `box-shadow` edges, while raster images keep their colors (CSS Color Adjustment 1).
- **Kind:** Current practice.
- **Applies when:** an image sits on a surface close to the colors at its edge, or the product has a dark theme.
- **Check:** find images whose edges can match their surface: screenshots with white margins on white cards, photos with dark edges in the dark theme, logos with transparent backgrounds. One that bleeds into its surface, with no edge, fails. An inset `box-shadow` on an `<img>` counts as no edge, since the picture is drawn over it (CSS Backgrounds 3). Switch to the dark theme: a light screenshot or illustration glaring on a dark surface fails.
- **Fail:** a white screenshot on a white card, with nothing between them. A light-theme screenshot on the dark theme's page.
- **Pass:** the screenshot with a faint 1 px `outline` offset −1 px, inside its edge, which forced colors keep. A dark version of the screenshot in the dark theme.
- **Not a fail:** a photo whose edges never match its surface. Transparent art meant to sit on the page.

## Component

### 7. An icon matches the text beside it

An icon next to text is about as large as the text or one step larger, drawn about as heavy as its letters, colored like it, and centered on it rather than set on its baseline.

- **Why:** Systems match an icon to the text beside it: Material 3 asks for the same size and optical weight, Apple's symbols come in the weights of the text, Carbon pairs 16 and 20 px icons with 14 and 16 px text and centers them rather than on the baseline, and Atlassian's 16 px default suits body text (Material 3, "Applying icons"; Apple, "SF Symbols"; Carbon, "Icons"; Atlassian, "Iconography"). When one drawing is scaled, the stroke people see depends on the size it renders at: Lucide's 2 px stroke on a 24 px grid renders at about 1.33 px at 16 px (Lucide, "Lucide design language").
- **Kind:** Current practice. The product's own pairing comes first.
- **Applies when:** an icon sits beside text, as in a button, a menu item, a list row or a label.
- **Check:** for each icon beside text, read the icon's rendered size, rendered stroke and color, and the text's size, weight and color. On a screenshot at 2×, compare the icon's strokes with the stems of the letters, and the icon's center with the middle of the capital letters. An icon more than a step larger or smaller than the text, strokes clearly heavier or lighter than the stems, a color unlike the text's with no meaning, or an icon whose center misses the middle of the capitals fails.
- **Fail:** 24 px icons with a 2 px stroke beside 13 px regular menu text. Icons in the label's gray at half its weight. A 16 px icon resting on the baseline of 14 px text, its center 3 px above the middle of the capitals.
- **Pass:** 16 px icons with a 1.33 px stroke beside 14 px regular labels, in the label's color and centered on it.
- **Not a fail:** a colored status icon that marks a state. A larger icon above its label, as in a tab bar or an empty state.

### 8. An avatar shows who it is: round for people, square for the rest

A person's avatar is round. An organization, team, project, app, bot or AI agent gets a square one with rounded corners, so people can tell them apart. An avatar without a photo shows initials or a neutral figure, and the name sits beside it, or screen readers announce it. Avatar sizes come from a short scale.

- **Why:** Primer, Atlassian and Fluent 2 draw people in circles and other accounts in squares: Primer its bots, AI agents, teams and organizations, Fluent 2 its teams and organizations, Atlassian its projects and spaces, with a hexagon for AI agents. All three pair an avatar with a name that is shown or announced, Primer's sizes run from 16 to 64 px, and Fluent 2 shows initials while a photo loads and picks colors from a hash of the name, so two people can share one: the color is not an identity (Primer, "Avatar"; Atlassian, "Avatar"; Fluent 2, "Avatar").
- **Kind:** Every product: an avatar with no name beside it has a label that screen readers announce, such as `alt` or `aria-label`, since otherwise people using a screen reader can't tell who it is (WCAG 2.2, 1.1.1). Current practice: the shapes, fallbacks and sizes; for these the product's own avatar rules come first.
- **Applies when:** the product shows people or other accounts.
- **Check:** list each avatar with what it stands for, its shape and its size. A person in a square, an organization or bot in a circle, an avatar whose name is neither shown beside it nor announced by screen readers, or a size off the product's scale, fails. A name shown only in a tooltip on an avatar that can't take focus fails current practice: keyboard users never see it (Atlassian, "Avatar"). In an avatar stack, "+N" must say how many more there are, and each person must be nameable. Break each avatar's image URL: initials or the neutral figure show at the same size, and the browser's broken-image mark fails. Give an account a name that starts with an emoji: initials that show a broken character fail.
- **Fail:** a bot and a person in the same round avatars in one comment thread. A row of avatars with no names anywhere. The broken-image mark where a failed photo should fall back to initials.
- **Pass:** a person's photo in a circle and a company's logo in a rounded square, each with its name beside it.
- **Not a fail:** a third shape for AI agents, such as Atlassian's hexagon, in a product that documents it. Avatars inside a decorative picture of the product, hidden from screen readers.

### 9. Other companies' logos follow their owners' rules

A third-party logo keeps the colors, proportions and clear space its owner publishes, and appears only where its owner allows it. A logo is never grayed out or faded to show a state, and no one draws a stand-in for another company's mark. The product's name in text is always safe.

- **Why:** Owners publish rules for their logos: most forbid other colors or proportions, some allow the logo only for certain uses or with a license or written approval, and Microsoft and Anthropic let a product name their products in text, such as "works with Microsoft Teams" (LinkedIn, "Brand policies"; Slack, "Brand Terms of Service"; GitHub, "Logos"; Google, "Sign in with Google branding guidelines"; Microsoft, "Trademark and Brand Guidelines"; Anthropic, "Trademark Guidelines" and "Legal and compliance"; OpenAI, "Brand guidelines"). LinkedIn allows only its "in" logo, and only for sign-in, social icons and links to LinkedIn; GitHub allows its logo in gray; Sign in with Google keeps the full-color "G" (same pages).
- **Kind:** Current practice. Each owner's published rules come first.
- **Applies when:** the product or its marketing pages show other companies' logos.
- **Check:** list each third-party logo and compare it with its owner's published brand rules. A recolored, stretched, cropped or crowded logo fails, and so do a logo its owner doesn't license, such as Microsoft's product logos, a logo grayed out or faded to show a state, and a mark drawn as a stand-in for another company's product.
- **Fail:** a "Works with" row where the LinkedIn, Slack and Microsoft Teams logos are all recolored to one gray. The logos of agents not yet connected, shown in gray at half opacity.
- **Pass:** LinkedIn's "in" mark in its own blue and proportions, on a "Sign in with LinkedIn" button. "Works with Microsoft Teams" written in text. A neutral plug icon while no agent is connected, then the agent's own logo once it connects.
- **Not a fail:** GitHub's mark in gray, which GitHub allows. A site's own favicon beside a link to that site, the way browsers and search results show it. A row of customer logos in one color on a marketing page, where the customers agreed to that use. The product's own logo.

### 10. An image shows something people need, or it goes

Every picture earns its place, however it is drawn: photos, screenshots, illustrations, icons used as pictures, background patterns and textures, and shapes or glows drawn in CSS or SVG. Each one shows what people need to see: the product, the real people, the result. Decorative pictures are left out, and so is a picture repeated on every step of a flow that tells nothing new after the first. In the product, an illustration belongs only in an empty, error or success state, onboarding or a feature tour, and it is the first thing to drop when space is tight. A person in a photo looks toward the content the photo should lead to. A generated or altered photo or video that looks real, of people, places or events, says so where it is shown.

- **Why:** People look closely at photos of real products and people that carry information, and skip feel-good and stock images, which take up space and add little (Nielsen 2010; Paul, "7 Tips", 2024; Krause 2023); interesting but irrelevant additions, pictures among them, lowered what people learned (Sundararajan and Adesope 2020), and pictures behind content slowed reading (Gillan and Richman 1994). Atlassian keeps illustrations in the product to empty, error and success states, onboarding and feature tours, and patterns to messages and promotional areas, and Carbon drops the empty-state image when space is tight (Atlassian, "Illustrations"; Carbon, "Empty states pattern"). A face looking toward an ad's text or product drew attention there and helped people remember it (Sajjacholapunt and Ball 2014; Palcu et al. 2017). People take a realistic photo as a record of something real, and from 2 August 2026, whoever shows a realistic image or video made or altered by AI in the EU must say so (EU AI Act, Article 50(4)).
- **Kind:** Every product: a generated or altered photo or video that looks real says so where it is shown (EU AI Act, Article 50(4)). Current practice: the rest.
- **Applies when:** a screen or section shows any picture or graphic beyond text and controls. Lines, borders and boxes that group content are not pictures.
- **Check:** list the pictures from the screenshot and from the CSS: `background-image`, gradients, `::before` and `::after`, and inline SVG that isn't an icon or a chart. For each, write down what it tells people that the text doesn't. These fail:
  - a picture that tells nothing;
  - a picture repeated on each step of a flow with nothing new to tell;
  - in the product, a background pattern or texture behind content, except in a message or a promotional area;
  - in the product, an illustration outside an empty, error or success state, onboarding or a feature tour.

  In photos of people meant to lead to a headline or a button, a face looking away from it fails. Ask the owner which photos and videos are generated or altered: one that looks real, with no notice where it is shown, fails.
- **Fail:** a stock photo of a handshake beside a pricing table. A grid of feature cards whose icons repeat their headings. An illustration above every section of the settings. A dot pattern behind a sign-in form. A generated photo of "our team" on an About page, with no notice.
- **Pass:** on a marketing page, a screenshot of the real feature beside its description. An empty list with one small illustration and a sentence about what will appear there.
- **Not a fail:** a brand image in a marketing hero, when the page's own rules call for one. A row of real customers' or integrations' logos, which is proof, not decoration.
