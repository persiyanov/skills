---
name: design-knowledge
description: 'Product UI standards with their sources, in guides for every aspect of a page, from layout and copy to color and motion, for the product behind the pages, and for recurring patterns such as forms, navigation and settings. Read the guides that a design or a review touches, and use them to answer questions like "what''s the standard for X in a UI".'
argument-hint: "[subject or question]"
---

# Design knowledge

This skill holds the standards for product UI. A product's UI is a tree of parts, and each guide covers one aspect of a part, such as its layout, its copy or its motion. A part's tests come from its job and from the guides' rules for its kind and layer, and you judge the whole design against the product's own standards.

## The tree

A design is a tree of parts, and each part is a node. A node is a part that people read or use as one thing, with a job you can say in a line, small enough to judge in one look. A divider or a gap isn't a node: it belongs to how its parent arranges its children. A node's states, such as empty or loading, and its kinds, such as each kind of entry in a feed, are forms of the node, not its children.

| Kind | What it is | Examples |
| --- | --- | --- |
| Journey | One person doing one job, across pages and over time. The root when the work spans pages | inviting a teammate, paying an invoice |
| Page | One place the navigation leads to, with what opens over it, such as a dialog. The root when the work is on one page | a project's settings |
| Component | A part made of primitives or of other components, at any depth | a form field, a card, a form, a table with its toolbar |
| Primitive | One element with no parts people use separately. The leaves | a button, an icon, a text style, a color |

Radix calls its Dialog a primitive, but people use the trigger and the close button separately, so here a dialog is a component. In Atomic Design terms, primitives are atoms, and components are molecules and organisms (Brad Frost, 2016).

- **A brief:** each node gets one from its parent: its job, what it must show, where it sits and how much room it has. The parent decides how its children sit, and each child decides its own insides. When a child can't meet its brief, the problem is the parent's.
- **Shared things:** the product's things and their names, its patterns, its design system and its voice. Each is defined once and used by many nodes, so a change to one reaches every node that uses it.
- **The look as the work:** when the work is the product's look itself, the root is the look, the one root that isn't a journey or a page, and its tree is the design system's: the primitives, such as colors and text styles, and the components made of them, each judged on the screens where people start their jobs.

## Layers and guides

Each guide covers one aspect of a part, and the guides group into three layers. Each layer settles one kind of decision, and each pass of the work may change only its own layer:

| Layer | It settles | Its pass may change | You can see it on | Guides |
| --- | --- | --- | --- | --- |
| Structure | The job first: who it's for, what must be true, what's nice to have and what it must not do. Then what is there and what it does: the concepts, the steps of each journey, what each page and part holds, the form of each fact (a word, an icon, a chip or a number), what sits together and where each part sits, what leads, every state and what it says, the words, which control each choice gets, what each action does (where it leads, what it changes and what is kept), and what assistive technology gets | Anything in the tree | A wireframe with its notes | conceptual model, journeys, content, copy, controls, layout, accessibility, and each pattern guide for the pages and tasks the work includes |
| Style | How it looks, finished: spacing and alignment, size, type, color, surfaces, how icons are drawn, how strongly each part stands out, and the look of each state | Values only. The tree is locked | Only the finished screen | visual language, spacing and alignment, hierarchy, type, color, surfaces, icons and images |
| Behavior | How it responds and moves from moment to moment: when each state shows, the answer to a press, focus and keys, announcements, transitions and motion | What happens over time. The tree and the look are locked | Only in use | interaction, motion |

Three lines between structure and style are easy to blur. The form of a fact is structure, and how an icon is drawn is style. What sits together is structure, and the size of the gap is style. What leads is structure, and how strongly it stands out is style. A change that needs a layer that an earlier pass settled reopens that layer at that node. A few rules still sit in a guide of a later layer than the one where they're fixed, such as the icon guide's rule that one icon means one thing, which is structure. Until they move, the structure pass reads them too, and a finding names the layer where its fix is made, whatever its guide.

Every rule says what must be true, why, when it applies, how to check it, and what passes and fails, so each rule is a test. The guides apply as follows:

- **Foundation guides** group their rules by kind of node, under the headings Every level, Primitive, Component and Page.
- **Product guides** apply to journeys, and to any part where a concept appears, whatever its kind.
- **Pattern guides** apply to the pages and tasks that they name, and each of their rules says when it applies.

## What depends on what

- **Structure decides most of whether a design works:** critiques rank its problems first (Interface Craft skill, "Design Critique"), so style rests on structure, and behavior on both. Looking at the finished screen still finds structure problems, so expect reopens.
- **A part is judged in what holds it:** a component on its page, and a page in its journey (Eliel Saarinen, quoted in *Time*, 1956). A parent's brief limits its children, and siblings share the parent's room and the reader's attention, so a change to a parent reaches every child, and a change to one sibling can reach the others.
- **A question deep in the tree can change what's above it,** and it costs least while little depends on it.
- **A value makes sense only once you know what it's for,** and values chosen before the whole that they serve end up tweaked one at a time. In Puckett's redesign, each value follows from what the look should convey: he names the attributes first, and then picks, for example, a corner radius that leans slightly friendly (Interface Craft, "Redesigning a Mobile Web App, Part 2"). A look is judged whole, and a shared part carries its look to every place it appears.
- **Behavior shows only in use.**
- **Building goes from shared parts up,** because pages are made of them, and a part that the product already has comes in finished.
- **Journeys have only structure,** because their look and behavior come from their pages.

## Scope

The target is a node, and the scope is the node and every node under it, in the passes the work covers. List every part inside it, down to its primitives, so that you miss none (Brad Frost, "Interface Inventory", 2013): for a page, each control group, card, row, menu and toolbar, and each text style, color, icon, spacing value and button. If the user names a pass, an aspect or a kind of node, such as the icons, cover only those. For example, a card redesign covers the card and every part inside it in every pass, and a copy pass on the card covers the same parts with only the copy guide.

Fix each problem at the node and layer where it starts, even if that means going back up (Frost, 2016).

## A part's place

Every part takes attention from the rest, so each one earns its place. To find it, take the part away, with the rest of the design in place, and say what is lost, for whom and how often, because people look for what to add and overlook what to take away unless they're prompted (Adams et al., 2021).

| Place | When it fits | Rules |
| --- | --- | --- |
| In view | Most people need it for the screen's main job | content 3 |
| Only where it differs | It matters for some items or states, so it shows only there | content 4 |
| One step away | Only some people need it, behind a control that names it | content 3 and 16, help 1, settings 2 |
| Gone | Nothing is lost without it, or another part already shows it | content 1 and 4, conceptual model 1 and 2, hierarchy 4 |
| Later | A job with evidence needs it, but it costs more than the release can carry. The cut is the user's, and what stays is made as good as the best products (Singer, *Shape Up*) | – |

## A node's tests

A node's tests are what must be true for it to do its job. Each one names what someone must be able to do or know, from a job or a case, so that taking a part away fails a test only when someone loses something. They cover what this node decides, with its children as blocks, and the cases and rules about a child's insides wait for that child, so the set stays the size of the node. They come from four places:

- **Its brief and its cases:** each person with their real job and data, starting where they start, and every version that people meet: empty, loading and error states, each role, each place where a shared part appears, and the extremes of everything that varies, such as the shortest and longest data, none, one, and the most it will hold after long use, the narrowest and widest windows that people use, and the largest text size (Emil Kowalski, "break-ui"). Include where the job goes next.
- **The rules:** for the pass's layer, each guide's rules for the node's kind and those under Every level, and the rules of each pattern guide whose task the node serves. `grep -E '^## |^### |^- \*\*Applies when' <guides>` lists them by title. Read each rule in full before you check the node against it. Siblings of one kind share their rules, so list and read them once, and cite them in each node's tests.
- **The product's UI rules,** and each observation in their log whose cause this node could repeat, as `product-standards.md` describes. An observation counts only through its cause, so a design never fails for looking like something the user once disliked.
- **The best products:** the same part from each one in the work's bar, which ours must equal at the job.

Each pass runs them its own way:

- **Structure:** walk each case through the design, step by step, as the person. At each step, ask whether they know what to do, notice the control, connect it with their goal, and see that it worked (Wharton et al., 1994). Then put the node beside the same part from each best product.
- **Style:** look at the node on its whole page, beside the same part from each best product at the same size, sharp and then blurred, because a look can only be judged whole. Count its text sizes, weights, text colors and surface styles from the frame or the page, because the counts are the proof for hierarchy rule 4, surfaces rule 1 and the visual-language guide, and they catch a part whose pieces are each correct but which looks cluttered as a whole. Most style tests are judgments beside the best products, and the counts are what can be checked, so the user's style approval is the gate.
- **Behavior:** use it in the running build: every input, the keyboard alone, a slow network, real data and each wait.

The rules are a floor: a product that meets them all is well made, but not yet good.

## When a product's rule differs from a guide

Follow the product's documented rule, unless it makes people fail: they can't see, read, reach, or use what they need, or they do the wrong thing. WCAG 2.2 A and AA and the law always apply. A value marked "default" is a starting point taken from good designers' practice, so departing from it is a gap only if you can name the harm.

## Product standards

Each piece of work judges its design against the guides and against the product's own standards: the product's UI rules and their log, kept in the repo, and the bar for the work, kept in its `design.md`. Read `product-standards.md` before you write or check either: where each lives, what it holds, and how what the user says becomes a rule.

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
