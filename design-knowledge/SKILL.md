---
name: design-knowledge
description: 'Standards and sources for product UI design. Foundation guides cover each aspect of every page: content, copy, controls, layout and accessibility (structure); spacing and alignment, hierarchy, type, color, surfaces, and icons and images (style); interaction and motion (behavior). Product guides cover the product behind the pages: its conceptual model, and journeys across pages and over time. Pattern guides cover recurring kinds of pages and tasks: navigation, notifications, sign-in and accounts, settings, sharing and access, lists and search, forms, creating, editing and deleting things, help, AI and agents, and marketing pages. Read the guides for every subject a design or a review touches, and for questions like "what''s the standard for X in a UI".'
argument-hint: "[subject or question]"
---

# Design knowledge

This skill holds the standards for product UI. You design and review a product one cell at a time: one level of the product, such as a page, in one layer of decisions, such as structure. You check each cell against its layer's guides, and you judge the whole design against the product's own standards.

## Levels

A part's level depends on what people use separately:

| Level | What it is | Examples |
| --- | --- | --- |
| Journey | One person doing one job, across pages and over time | inviting a teammate, paying an invoice |
| Page | One place the navigation leads to, with what opens over it, such as a dialog | a project's settings |
| Component | A part made of primitives or of other components | a form field, a card, a form, a table with its toolbar |
| Primitive | One element with no parts people use separately | a button, an icon, a text style, a color |

Radix calls its Dialog a primitive, but people use the trigger and the close button separately, so here a dialog is a component. In Atomic Design terms, primitives are atoms, and components are molecules and organisms (Brad Frost, 2016).

## Layers and guides

Each layer settles one kind of decision, and each guide covers one layer. Structure decides most of whether a design works, and each later layer changes little of what came before, so working in order rarely sends you back (Interface Craft skill, "Design Critique"):

| Layer | It settles | Guides |
| --- | --- | --- |
| Structure | What is there and what it does: the concepts, the steps of each journey, what each page and part holds, where each part sits and what leads, every state and what it says, the words, which control each choice gets, what each action does (where it leads, what it changes and what is kept), and what assistive technology gets | conceptual model, journeys, content, copy, controls, layout, accessibility, and each pattern guide for the pages and tasks the work includes |
| Style | How it looks, finished: spacing and alignment, size, type, color, surfaces, icons, visual weight, and the look of each state | visual language, spacing and alignment, hierarchy, type, color, surfaces, icons and images |
| Behavior | How it responds and moves from moment to moment: when each state shows, the answer to a press, focus and keys, announcements, transitions and motion | interaction, motion |

A rule belongs to the layer where you'd fix it, so if a fix spans two layers, it's two rules. Every rule says what must be true, why, when it applies, how to check it, and what passes and fails. The guides apply as follows:

- **Foundation guides** group their rules by level: every level, then primitive, component, and page.
- **Product guides** apply to journeys, and to any page where a concept appears.
- **Pattern guides** apply to the pages and tasks that they name, and each of their rules says when it applies.

## Cell order

Work through the cells in the following order:

| | Journey | Page | Component | Primitive |
| --- | --- | --- | --- | --- |
| Structure | 1 | 2 | 3 | 4 |
| Style | | 7 | 6 | 5 |
| Behavior | | 10 | 9 | 8 |

Structure goes top-down, because you judge each part in the context of the next larger one: a component on its page, and a page in its journey (Eliel Saarinen, quoted in *Time*, 1956). Style and behavior go bottom-up, shared primitives first, but you still judge each primitive on a real page. Puckett works this way in his redesign: the architecture first, then a visual language tried on raw components, then the full pages (Interface Craft, "Redesigning a Mobile Web App, Part 2"). Journeys have only structure, because their look and behavior come from their pages.

When the target is the product's look itself, such as a new visual language or a restyle of every page, settle the product-wide choices that the visual-language guide covers first, and then work through the style cells. Building the look bottom-up from values, before anyone has decided what each value is for, ends in values tweaked one at a time.

## Choose the cells

The target decides which cells you cover: its own level and every level below, in each layer. If the user names levels, layers, or guides, cover only those. For example, a card redesign covers the card and its primitives in all three layers, and a copy pass on the card covers two cells and uses only the copy guide.

Fix each problem at the level where it starts, even if that means going back up (Frost, 2016). Ask the user before you go above the target, because the target is their choice.

## Check a cell

To check a cell, follow these steps:

1. List every part of the target at the cell's level, so that you don't miss any (Brad Frost, "Interface Inventory", 2013). For a page's components, list each control group, card, row, menu, and toolbar. For its primitives, list each text style, color, icon, spacing value, and button.
2. List the cell's rules: its layer's rules for its level, plus the rules for every level. `grep -E '^## |^### |^- \*\*Applies when' <guides>` lists them by title.
3. Read each rule in full before you check the work against it.

The rules are a minimum: a product that meets them all is well made, but not yet good.

## When a product's rule differs from a guide

Follow the product's documented rule, unless it makes people fail: they can't see, read, reach, or use what they need, or they do the wrong thing. WCAG 2.2 A and AA and the law always apply. A value marked "default" is a starting point taken from good designers' practice, so departing from it is a gap only if you can name the harm.

## Product standards

Judge a design against the guides and against the product's own standards. Write the standards in `standards.md`, next to the work, before you design anything, so that nobody can bend them to fit the design later (Designer Fund, "Inside design at Linear", 2026). Give a source for each line, mark anything that nobody can confirm as an assumption, and cover the following:

- **The people:** Who uses the product, what they know, and the job they come to do, with a real case and real data. Include the state they arrive in: what's at stake for them, and how stressed or rushed they are, because stress narrows what people take in (Easterbrook, 1959; Interface Craft skill, "Design Critique"). Base this on evidence, such as customer messages, support threads, and usage data. Never present an imagined person as real.
- **The product's own rules:** Its UI rules, components, tokens, and voice, plus a short ranked list of the qualities that people should notice in this product and not in others (Interface Craft, "Facets of Quality"). These say what "the best version" means here.
- **The best products:** The best products for the same job, with screens or links to them, because a reviewer compares parts side by side. Use the products yourself if you can, because screenshots don't show motion or feel. Otherwise, use their public pages or Mobbin screens, never memory. Say what each one does well and whether it suits this product, and keep them separate rather than blending several into one. Follow the conventions that most of them share, because people already know them, but never take one product's look, such as its palette, type or shapes, because a copied look makes this product pass for that one.
- **What each best product decided:** When the work sets the product's look, such as a visual language or a restyle, write down what each best product decided, which default it left, and why that fits it. Start with the whole page, because that's where the feel comes from: how large and dense the text and spacing are, how many weights and text colors separate levels, how soft the shapes are, how surfaces sit, how much color there is, and what the screen is for. Then go on to single parts. Measure the values on the product's own page with `scripts/style-inventory.js` wherever you can open it, because small previews hide scale and space. Where you can only see screens, such as a page behind a login, record counts and proportions from the largest screens you have, such as how many items a group shows and how many weights it uses, and mark them unmeasured. This record widens the options for this product and shows what to avoid copying.
- **The user's verdicts:** Each verdict that the user gives on the look, such as "too close to that product" or "this panel looks cluttered", dated and in their words, with what it rules out and no more. Add each one when the user gives it, and never rewrite one to fit a design. Verdicts are how a fresh designer or reviewer learns this user's taste.

## Foundations

| Read for | File |
| --- | --- |
| Visual language: the product's look as a whole, the few choices that hold on every page, where they come from, and whether the look is the product's own | `foundations/visual-language.md` |
| Layout: where each part sits: the same place across items of one kind, next to what it acts on, where people expect it, a form's column, where an action's result appears, the grid, margins and reading width, how it changes with the window, density, sticky areas, short screens, one modal at a time | `foundations/layout.md` |
| Spacing and alignment: grouping by space, gaps, the spacing scale, alignment lines, centering, padding, side items in a list, hit areas, the edges of text and numbers, and nothing that moves, overlaps, gets cut off or shows out of the code's order, across widths, zoom, content length and right-to-left languages | `foundations/spacing-and-alignment.md` |
| Hierarchy: what people see first, second and third; emphasis by size, weight, contrast, color, space and position; the levels of text and of buttons; what looks usable, and the look of each state of a control | `foundations/hierarchy.md` |
| Type: typefaces, the type scale, line height, paragraph alignment, letter spacing, weights, figures, line breaks and truncation, font loading, other languages, text size settings | `foundations/type.md` |
| Color: contrast, color as a cue, what colors mean, the palette and its tokens, states and statuses, themes (light, dark, forced colors, higher contrast), text over images | `foundations/color.md` |
| Surfaces: levels, shadows, edges in dark themes and forced colors, clipping, corners, borders and dividers, see-through materials, scrims, the order of floating layers | `foundations/surfaces.md` |
| Icons and images: the icon set, size, stroke and color next to text, meaning; avatars, other companies' logos, photos, screenshots and illustrations | `foundations/icons-and-images.md` |
| Controls: nothing reachable only by hover or right-click, controls that look alike acting alike, a changed value that never takes people elsewhere, disabled controls, choosing a control, what a field accepts, icon-only controls, a click for every drag or gesture, undo and confirmation, time limits and content that moves or updates by itself | `foundations/controls.md` |
| Interaction: when each state shows, the answer to a press, waits, focus, announcements, keyboard, pointer and touch, selecting text, messages that appear on their own, when errors appear, shortcuts, view changes in a single-page app | `foundations/interaction.md` |
| Motion: the job of each animation, duration and easing, entering, leaving and moving, motion that plays by itself or follows scrolling, reduced motion | `foundations/motion.md` |
| Content: each screen's job, which information and actions it shows, in what form, order and amount, how each kind of thing and each event is shown, which leads (the first screen, the primary action, headings, promotions), which images belong, what it starts with, AI notices and ads, and its empty, loading, failed, partial and out-of-date states | `foundations/content.md` |
| Copy: names, headings, labels and titles, the words on buttons, links and fields, error and status messages, voice and tone, capitalization, dates, numbers, money and counts | `foundations/copy.md` |
| Accessibility: what assistive technology gets (elements and ARIA, names, text alternatives, structure in the code and its order), fields, media, landmarks, testing beyond scanners | `foundations/accessibility.md` |

## Product

| Read for | File |
| --- | --- |
| Conceptual model: the things people work with and what each is for, their states and the way back, what actions do, what counts count, how things relate, the same thing in the same form in every place, and what the product does on its own, in people's name, or decides for them | `product/conceptual-model.md` |
| Journeys: links that land on their item, onboarding and prompts that end, long processes (progress, leaving and coming back, checking answers, failure halfway), waiting on others, the end of a job, and doing a job again | `product/journeys.md` |

## Patterns

| Read for | File |
| --- | --- |
| AI and agents, for any chat or assistant, any feature that writes, summarizes or fills in with AI, and any agent: saying what the AI can do and see, checking before long work, answers and their sources, waits, confidence and warnings, asking again, fixing AI output, AI text beside people's, feedback, not passing as a person, approvals, how much an agent does alone, agent runs, agents that deal with others, memory | `patterns/ai-and-agents.md` |
| Creating, editing and deleting, for any product where people make, change or remove things: where creating happens and what follows it, drafts and unpublished changes, editing in place, two people editing the same thing, version history, copies, the trash, Remove, Delete and Archive, and where people land after a deletion | `patterns/create-edit-delete.md` |
| Forms, for any form: one page or steps, required marks, how changes save, unsaved changes, phone keyboards, asking only what's needed, and never twice | `patterns/forms.md` |
| Help, for any product that offers help, support, feedback or announcements: info tips and tooltips, help panels and links to the documentation, reaching a person, asking for help with what the product already knows, support chats, feedback, announcing new features, and changes that move what people use | `patterns/help.md` |
| Lists, search and choosing, for any page with a list or table people select from, search or filter, and any picker: selections and bulk actions, bulk edits, search scope and results, filters, telling look-alike options apart, a way out of a picker | `patterns/lists-and-search.md` |
| Marketing pages, for a landing, pricing or feature page: positioning, the first screen, the main action, order and length, pictures of the product, proof, prices, doubts, forms, and where persuasion stops | `patterns/marketing-pages.md` |
| Navigation, for any product with more than one place to go: what the main navigation holds and its shape at each width, account, settings and notification tools, what people create in the sidebar, where people are, the way up and breadcrumbs, Back, the addresses of views, tabs, the command menu, a second way to each page, help in one place | `patterns/navigation.md` |
| Notifications, for any product that sends push, email or text notices or shows a notification center: the channel for each kind of notice, what a notice says, bursts, repeats and notices that end, the notification center, badges, asking to send notifications, and the settings for them | `patterns/notifications.md` |
| Settings, for any product with settings or preferences: what belongs in settings, grouping, values and search, whom each setting changes, settings that can break things for others, picking colors for what people own | `patterns/settings.md` |
| Sharing and access, for any product where people share items or invite others: invitations and what they change, access levels, who else can open an item, access that comes from several places, the page without access and asking for it, removing someone, access that ends on a date, and moving ownership | `patterns/sharing-and-access.md` |
| Sign-in and accounts, for any product with accounts: when to ask for an account, the sign-in page, memory tests and puzzles, passwords, passkeys, failed attempts, codes and links, two-step verification and recovery, signing in again, security changes, deleting an account | `patterns/sign-in-and-accounts.md` |

## Tools and sources

| Read for | File |
| --- | --- |
| WCAG 2.2 A and AA: which guide and rule states each criterion | `scripts/wcag-index.py` |
| Measuring a page: the type, colors, borders, radii, spacing and motion it renders | `scripts/style-inventory.js` |
| Every source, with its link | `sources.md` |

Each guide cites the WCAG 2.2 A and AA criteria for its subject by number. The guides don't yet cover charts, logos and brand marks, front-end code, or patterns not listed above.

## Sources

You never need to open a source to use the guides. `sources.md` lists every source and the rules for adding one.
