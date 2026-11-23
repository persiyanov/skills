---
name: design-knowledge
description: 'Product UI standards with their sources: guides for every aspect of a part, from layout and copy to color and motion, for the product behind the screens, and for recurring patterns such as forms, navigation and settings. Each rule says what it protects and how it''s checked. Read it to make a part, to check one, and to answer questions like "what''s the standard for X in a UI".'
argument-hint: "[subject or question]"
---

# Design knowledge

This skill holds the standards for product UI: about 300 rules, filed by topic in the guides below. Each rule says what must be true and why, when it applies, what it protects, how it's checked, and what passes and fails. The same rules serve three uses: making a part, checking one, and saying what the standard is.

`scripts/rules.py` prints any set of rules in full, or one line each with `--titles`, and `--count` counts those in scope. The foundation and product guides are always in scope. A pattern guide comes in only when you name it with `--pattern`, because its rules apply only to the task it covers.

## Making a part

1. **Say its job in one line.**
2. **Use the product's own part** if it has one, and extend it when it almost fits, so that every place that uses it gets the extension, because a second part for one job is one more to learn and keep alike.
3. **Otherwise ask the plain question first:** how would a well-made product make this part? Answer from what you know, without a new search for references, and start from that form, because people already know it, and a form made up to meet a rule is one more thing for them to learn. Leave it only when a rule or a real case shows that it fails here.
4. **Explore when the answer is open:** when the part is the focus of the work, or the usual form doesn't settle it. Make two or three options that answer it differently in one way, such as what leads, what the part holds, its form or its density. Write down what they all share, and make one option break it, because first ideas repeat what you've already seen (Jansson and Smith, 1991). Pick by the job.
5. **Read its rules:** `rules.py --kind <journey|page|component|primitive> --pattern <each task it serves> --titles`, then each rule that applies, in full, with `--rule <guide>:<number>`. Make the part, in whatever medium the work uses, to meet them, with real data.
6. **Check it and take away what nothing needs:** run each rule's Check, and take away what nothing needs, as "A part's place" describes. Look at the part again where it sits, or on its own when it has no page yet, because a change has effects nobody intended (Schön, 1983). It's done when no rule fails and nothing more can go.

## What each rule protects

Each rule protects one of eight things that a design must be, named on its Protects line, the way each WCAG criterion sits under one of its four principles. Its Check line says how to check it, and its Fail and Pass lines show each side. `rules.py --protects <name> --pattern <each task in the design>` lists the rules that protect one of them. Read each rule in full before you judge a part against it.

| Protects | A design has it when |
| --- | --- |
| usability | People can do their jobs: they find, understand, reach and finish what they came for, and recover when something goes wrong |
| clarity | The words say what people need, in their words |
| truth | It shows only what is true, and says what it does and what happens next |
| accessibility | Everyone can perceive and operate it, whatever their senses, devices and settings |
| economy | It holds nothing that people don't need |
| familiarity | It works the way people already know, from this product and from others |
| coherence | The screen reads as one design: what leads is what matters, groups and levels are clear, and the look is the product's own |
| precision | Every value, edge and timing is exact, comes from the system, and holds with any data, window and setting |

The rules are a floor: a product that meets them all is well made, but not yet good. Above the floor, a design is judged beside the best products for the same job.

## The tree

A design is a tree of parts. A part is something people read or use as one thing, with a job you can say in a line, small enough to judge in one look. A divider or a gap isn't a part: it belongs to how its parent arranges its children. A part's states, such as empty or loading, and its kinds, such as each kind of entry in a feed, are forms of the part, not its children.

| Kind | What it is | Examples |
| --- | --- | --- |
| Journey | One person doing one job, across pages and over time. The root when the work spans pages | inviting a teammate, paying an invoice |
| Page | One place the navigation leads to, with what opens over it, such as a dialog. The root when the work is on one page | a project's settings |
| Component | A part made of primitives or of other components, at any depth | a form field, a card, a form, a table with its toolbar |
| Primitive | One element with no parts people use separately. The leaves | a button, an icon, a text style, a color |

When the work is one part, such as a card, that part is the root, judged in each place where it appears.

- **A parent decides how its children sit,** and each child decides its own insides, its form included. When a child can't do its job in the room that its parent gives it, the problem is the parent's.
- **Shared things:** the product's things and their names, its patterns, its design system and its voice. Each is defined once and used by many parts, so a change to one reaches every part that uses it.
- **The look as the work:** when the work is the product's look itself, the root is the look, and its tree is the design system's: the primitives, such as colors and text styles, and the components made of them, each judged on the screens where people start their jobs.

The foundation guides group their rules by kind of part, under Every level, Primitive, Component and Page. The product guides apply to journeys and to every part where a concept appears, and each pattern rule says when it applies.

## What depends on what

- **What a part holds decides most of whether it works,** and critiques rank those problems first (Interface Craft skill, "Design Critique"). So fix what a part holds before its look, and its look before its details.
- **A part is judged in what holds it:** a component on its page, and a page in its journey (Eliel Saarinen, quoted in *Time*, 1956). Siblings share their parent's room and the reader's attention, so a change to a parent reaches every child, and a change to one sibling can reach the others.
- **A question deep in the tree can change what's above it,** and it costs least while little depends on it.
- **A value makes sense only once you know what it's for,** and values chosen before the whole that they serve end up tweaked one at a time. In Puckett's redesign, each value follows from what the look should convey: he names the attributes first, and then picks, for example, a corner radius that leans slightly friendly (Interface Craft, "Redesigning a Mobile Web App, Part 2"). A look is judged whole, and a shared part carries its look to every place it appears.
- **How a part responds shows only in use,** in a running build.
- **Building goes from shared parts up,** because pages are made of them, and a part that the product already has comes in finished.

## A part's place

Every part takes attention from the rest, so each one earns its place. To find it, take the part away, with the rest of the design in place, and say what is lost, for whom and how often, because people look for what to add and overlook what to take away unless they're prompted (Adams et al., 2021).

| Place | When it fits | Rules |
| --- | --- | --- |
| In view | Most people need it for the screen's main job | content 3 |
| Only where it differs | It matters for some items or states, so it shows only there | content 4 |
| One step away | Only some people need it, behind a control that names it | content 3 and 16, help 1, settings 2 |
| Gone | Nothing is lost without it, or another part already shows it | content 1 and 4, conceptual-model 1 and 2, hierarchy 4 |
| Later | A job with evidence needs it, but it costs more than the release can carry. The cut is the user's, and what stays is made as good as the best products (Singer, *Shape Up*) | – |

## When a product's rule differs from a guide

Follow the product's documented rule, unless it makes people fail: they can't see, read, reach, or use what they need, or they do the wrong thing. WCAG 2.2 A and AA and the law always apply. A value marked "default" is a starting point taken from good designers' practice, so departing from it is a gap only if you can name the harm.

## Product standards

Each piece of work judges its design against the guides and against the product's own standards: the product's UI rules and their log, kept in the repo, and the bar for the work, kept in the work's own record. Read `product-standards.md` before you write or check either: where each lives, what it holds, and how what the user says becomes a rule.

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
| Copy: names, headings, labels and titles, a fact shown as its value rather than a sentence, the words on buttons, links and fields, error and status messages, voice and tone, capitalization, dates, numbers, money and counts | `foundations/copy.md` |
| Accessibility: what assistive technology gets (elements and ARIA, names, text alternatives, structure in the code and its order), fields, media, landmarks, testing beyond scanners | `foundations/accessibility.md` |

## Product

| Read for | File |
| --- | --- |
| Conceptual model: the things people work with and what each is for, their states and the way back, what actions do, what counts count, how things relate, the same thing in the same form in every place, and what the product does on its own, in people's name, or decides for them | `product/conceptual-model.md` |
| Journeys: links that land on their item, onboarding and prompts that end, long processes (progress, leaving and coming back, checking answers, failure halfway), waiting on others, the end of a job, and doing a job again | `product/journeys.md` |

## Patterns

The pattern guides are shortcuts: the gotchas of common tasks, which save deriving them again. Any other pattern is derived from the foundation and product guides, starting from the plain question in "Making a part", because no list of patterns is complete.

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
| Printing rules by kind of part, task, guide or what they protect, or one by one, in full or as titles | `scripts/rules.py` |
| WCAG 2.2 A and AA: which guide and rule states each criterion | `scripts/wcag-index.py` |
| Measuring a page: the type, colors, borders, radii, spacing and motion it renders | `scripts/style-inventory.js` |
| Every source, with its link | `sources.md` |

Each guide cites the WCAG 2.2 A and AA criteria for its subject by number. Not covered yet: the composition of a whole screen, and how to build a look from the ranked qualities; what makes the moments people remember feel considered; the extras that designs pick up, as gotchas for "A part's place"; charts, for which use /dataviz; logos and brand marks; front-end code. Where a part needs one of these, say so, and work from the fundamentals and the best products.

## Sources

The guides carry what each source says, so you can use them as they are. `sources.md` lists every source and the rules for adding one.
