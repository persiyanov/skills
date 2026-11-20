---
name: design-knowledge
description: 'Product UI standards with their sources, in guides for every aspect of a page, from layout and copy to color and motion, for the product behind the pages, and for recurring patterns such as forms, navigation and settings. Read the guides that a design or a review touches, and use them to answer questions like "what''s the standard for X in a UI".'
argument-hint: "[subject or question]"
---

# Design knowledge

This skill holds the standards for product UI. A product's UI is parts inside parts, at four levels, and each guide covers one aspect of a part, such as its layout, its copy or its motion. You check each part against the guides for its level, in what holds it, and you judge the whole design against the product's own standards.

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

Each guide covers one aspect of a part, and the guides group into three layers, each of which settles one kind of decision:

| Layer | It settles | Guides |
| --- | --- | --- |
| Structure | What is there and what it does: the concepts, the steps of each journey, what each page and part holds, where each part sits and what leads, every state and what it says, the words, which control each choice gets, what each action does (where it leads, what it changes and what is kept), and what assistive technology gets | conceptual model, journeys, content, copy, controls, layout, accessibility, and each pattern guide for the pages and tasks the work includes |
| Style | How it looks, finished: spacing and alignment, size, type, color, surfaces, icons, visual weight, and the look of each state | visual language, spacing and alignment, hierarchy, type, color, surfaces, icons and images |
| Behavior | How it responds and moves from moment to moment: when each state shows, the answer to a press, focus and keys, announcements, transitions and motion | interaction, motion |

Every rule says what must be true, why, when it applies, how to check it, and what passes and fails. The guides apply as follows:

- **Foundation guides** group their rules by level: every level, then primitive, component, and page.
- **Product guides** apply to journeys, and to any part where a concept appears, whatever its level.
- **Pattern guides** apply to the pages and tasks that they name, and each of their rules says when it applies.

## What depends on what

Structure decides most of whether a design works, and each later layer changes little of what came before (Interface Craft skill, "Design Critique"). You judge each part in the context of the next larger one: a component on its page, and a page in its journey (Eliel Saarinen, quoted in *Time*, 1956). A value makes sense only once you know what it's for, and values chosen before the whole that they serve end up tweaked one at a time. In Puckett's redesign, each value follows from what the look should convey: he names the attributes first, and then picks, for example, a corner radius that leans slightly friendly (Interface Craft, "Redesigning a Mobile Web App, Part 2"). Building goes the other way, shared parts first, because pages are made of them, and a part that the product already has comes in finished. Journeys have only structure, because their look and behavior come from their pages.

## Scope

The target decides the scope: the target and every part inside it, in every aspect. List every part inside it, down to its primitives, so that you miss none (Brad Frost, "Interface Inventory", 2013): for a page, each control group, card, row, menu and toolbar, and each text style, color, icon, spacing value and button. If the user names levels, layers or aspects, cover only those. For example, a card redesign covers the card and every part inside it in every aspect, and a copy pass on the card covers the same parts with only the copy guide.

Fix each problem at the level where it starts, even if that means going back up (Frost, 2016).

## A part's place

Every part takes attention from the rest, so each one earns its place:

| Place | When it fits | Rules |
| --- | --- | --- |
| In view | Most people need it for the screen's main job | content 3 |
| Only where it differs | It matters for some items or states, so it shows only there | content 4 |
| One step away | Only some people need it, behind a control that names it | content 3 and 16, help 1, settings 2 |
| Gone | Nothing is lost without it, or another part already shows it | content 1 and 4, conceptual model 1 and 2, hierarchy 4 |

## Check a part

To check a part, follow these steps:

1. Take it away, with the rest of the design in place, and say what is lost, for whom and how often, because people look for what to add and overlook what to take away unless they're prompted (Adams et al., 2021). That decides its place, as "A part's place" sets out.
2. List its rules: for each aspect in scope, its guide's rules for the part's level, plus the rules for every level. `grep -E '^## |^### |^- \*\*Applies when' <guides>` lists them by title.
3. Read each rule in full before you check the part against it.

The rules are a floor: a product that meets them all is well made, but not yet good.

## When a product's rule differs from a guide

Follow the product's documented rule, unless it makes people fail: they can't see, read, reach, or use what they need, or they do the wrong thing. WCAG 2.2 A and AA and the law always apply. A value marked "default" is a starting point taken from good designers' practice, so departing from it is a gap only if you can name the harm.

## Product standards

Each piece of work judges its design against the guides and against the product's own standards, written in `standards.md` next to the work. When you write or check a `standards.md`, read `product-standards.md`: the people, the product's own rules and ranked qualities, the best products and what each decided, and the user's verdicts.

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

The guides carry what each source says, so you can use them as they are. `sources.md` lists every source and the rules for adding one.
