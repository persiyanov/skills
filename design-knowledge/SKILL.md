---
name: design-knowledge
description: 'Standards and sources for product UI design. Foundation guides cover each aspect of every page: layout, hierarchy, type, color, surfaces, icons and images, interaction, motion, content, copy and accessibility. Product guides cover the product behind the pages: its conceptual model, and journeys across pages and over time. Pattern guides cover recurring kinds of pages and tasks: navigation, notifications, sign-in and accounts, settings, sharing and access, lists and search, forms, creating, editing and deleting things, help, AI and agents, and marketing pages. Each rule says what to do, why, how to check it, and what fails and passes. Read the guides for every subject a design or a review touches, and for questions like "what''s the standard for X in a UI".'
argument-hint: "[subject or question]"
---

# Design knowledge

Each guide is a set of rules on one subject: what to do, why, which kind of rule it is, when it applies, how to check it, and examples that fail and pass. The guides sit in three folders:

- `foundations/`: one aspect of every page, such as layout or copy.
- `product/`: the product behind the pages: its concepts, and how people use it across pages and over time.
- `patterns/`: a recurring kind of page or task, such as a marketing page.

A design or a review of a page, a component or a journey touches every guide in the Foundations and Product tables, and each guide in the Patterns table whose page or task the work includes. Read them all, unless the skill that sent you here says which to read and when.

## Levels and depths

Each piece of design work has a level, the part of the product it is, and a depth, the question it settles about that part.

| Level | What it is | Examples |
| --- | --- | --- |
| Journey | One person doing one job, across pages and over time | inviting a teammate, paying an invoice |
| Page | One place the navigation leads to, with what opens over it, such as a dialog | a project's settings |
| Component | A part made of primitives or of other components | a form field, a card, a form, a table with its toolbar |
| Primitive | One element with no parts people use separately | a button, an icon, a text style, a color |

Levels follow what people use, not how the code is layered: Radix calls its Dialog a primitive, but people use its trigger and its close button separately, so here it is a component. In Atomic Design's terms, primitives are atoms, components are molecules and organisms, and pages are pages (Brad Frost, 2016).

The depths are the three kinds of problem in Interface Craft's critique: what an interface is, how it feels to use, and how it looks (Interface Craft skill, "Design Critique").

| Depth | The question | Guides |
| --- | --- | --- |
| Structural | What it is: its concepts, its steps, what each part holds and why, the names of things | conceptual model, journeys (the steps), content, copy (names, and what the words say), hierarchy (what leads) |
| Behavioral | How it responds: states, presses, waits, failures, keyboard, motion (what it is for, where it starts, which way it goes), and what happens over time | interaction, motion (its job, origin and direction), journeys (over time), conceptual model (what the product does by itself), content (empty, loading and failed states), copy (errors and status messages) |
| Visual | How it looks: weight, space, type, color, surfaces, icons, and how long motion takes and how it eases | layout, hierarchy (weight), type, color, surfaces, icons and images, motion (durations and curves) |

The pattern guides apply at every depth, for the pages and tasks the work includes, and so does accessibility. Motion is settled at two depths: its duration and curve wait for the visual depth, because they follow the size and distance of the change, which the visual depth sets (motion, rule 6).

Depths are settled in order, structural first, because each settles what costs more to change than the next, and a change in one can redo the work after it. Levels are not: each part is judged in its next larger context, a component on its page and a page in its journey (Eliel Saarinen, quoted in *Time*, 1956), and the work moves between them both ways (Frost, 2016).

Each foundation guide groups its rules by level: rules for every level, then for primitives, components and pages, as far as its subject has them. The product guides work at the journey level, and wherever a concept shows on a page.

## Product standards

A design is judged against the guides and against its product's own standards, written in `standards.md` next to the work before anything is designed, so they can't be fitted to the design (Designer Fund, "Inside design at Linear", 2026). Each line names its source, and what nobody can supply is written as an assumption, marked as one:

- **The people:** who uses it, what each knows, the job each comes to do, with a real case and real data, and the state each arrives in: what is at stake for them, and how stressed or rushed they are, since stress narrows what people take in (Easterbrook, 1959; Interface Craft skill, "Design Critique"). They come from evidence, such as customer messages, support threads and usage data; never present an imagined person as known.
- **The product's own:** its UI rules, components, tokens and voice, and the few qualities people should notice in this product and not in every product, ranked (Interface Craft, "Facets of Quality"). They say what "the best version" means here.
- **The best existing work** for the same job, and where to see it. Use it, not only look at it, where you can, because motion and feel don't show in screenshots; otherwise take its public pages or its Mobbin screens, never memory. Say what each does and why that fits this product or doesn't, and don't average several into one. A value taken from it is measured in its page (`scripts/style-inventory.js`), never read off a screenshot.
- **What people already report:** feedback, support tickets, analytics.

## Foundations

| Read for | File |
| --- | --- |
| Layout: grouping, alignment, spacing, grids and page regions, reading order, density, and how they hold across widths, zoom, content length and right-to-left languages | `foundations/layout.md` |
| Hierarchy: what people see first, second and third; emphasis by size, weight, contrast, color, space and position; the levels of text and of actions | `foundations/hierarchy.md` |
| Type: typefaces, the type scale, line height and length, letter spacing, weights, figures, line breaks and truncation, font loading, other languages, text size settings | `foundations/type.md` |
| Color: contrast, color as a cue, what colors mean, the palette and its tokens, states and statuses, themes (light, dark, forced colors, higher contrast), text over images | `foundations/color.md` |
| Surfaces: levels, shadows, edges in dark themes and forced colors, clipping, corners, borders and dividers, see-through materials, scrims, the order of floating layers | `foundations/surfaces.md` |
| Icons and images: the icon set, size, stroke and color next to text, meaning and labels; avatars, other companies' logos, photos, screenshots and illustrations | `foundations/icons-and-images.md` |
| Interaction: what can be used, the states of controls, the answer to a press, waits, disabled controls, choosing a control, keyboard, pointer and touch, undo and confirmation, shortcuts | `foundations/interaction.md` |
| Motion: the job of each animation, duration and easing, entering, leaving and moving, motion that plays by itself or follows scrolling, reduced motion | `foundations/motion.md` |
| Content: each screen's job, which information and actions it shows, in what form, order and amount, what it starts with, AI notices and ads, and its empty, loading, failed, partial and out-of-date states | `foundations/content.md` |
| Copy: names, headings, labels and titles, the words on buttons, links and fields, error and status messages, voice and tone, capitalization, dates, numbers, money and counts | `foundations/copy.md` |
| Accessibility: what assistive technology gets (elements and ARIA, names, text alternatives, structure, announcements), forms and sign-in, media, time limits, landmarks, view changes, testing beyond scanners | `foundations/accessibility.md` |

## Product

| Read for | File |
| --- | --- |
| Conceptual model: the things people work with and what each is for, their states and the way back, what actions do, what counts count, how things relate, the same thing in every place, and what the product does on its own, in people's name, or decides for them | `product/conceptual-model.md` |
| Journeys: links that land on their item, onboarding and prompts that end, long processes (progress, leaving and coming back, checking answers, failure halfway), waiting on others, the end of a job, and doing a job again | `product/journeys.md` |

## Patterns

| Read for | File |
| --- | --- |
| AI and agents, for any chat or assistant, any feature that writes, summarizes or fills in with AI, and any agent: saying what the AI can do and see, checking before long work, answers and their sources, waits, confidence and warnings, asking again, fixing AI output, AI text beside people's, feedback, not passing as a person, approvals, how much an agent does alone, agent runs, agents that deal with others, memory | `patterns/ai-and-agents.md` |
| Creating, editing and deleting, for any product where people make, change or remove things: where creating happens and what follows it, drafts and unpublished changes, editing in place, two people editing the same thing, version history, copies, the trash, Remove, Delete and Archive, and where people land after a deletion | `patterns/create-edit-delete.md` |
| Forms, for any form: one page or steps, required marks, when answers are checked, how changes save, unsaved changes, phone keyboards, asking only what's needed | `patterns/forms.md` |
| Help, for any product that offers help, support, feedback or announcements: info tips and tooltips, help panels and links to the documentation, reaching a person, asking for help with what the product already knows, support chats, feedback, announcing new features, and changes that move what people use | `patterns/help.md` |
| Lists, search and choosing, for any page with a list or table people select from, search or filter, and any picker: selections and bulk actions, bulk edits, editing in a table, search scope and results, filters, telling look-alike options apart, a way out of a picker | `patterns/lists-and-search.md` |
| Marketing pages, for a landing, pricing or feature page: positioning, the first screen, the main action, order and length, pictures of the product, proof, prices, doubts, forms, and where persuasion stops | `patterns/marketing-pages.md` |
| Navigation, for any product with more than one place to go: what the main navigation holds and its shape at each width, account, settings and notification tools, what people create in the sidebar, where people are, the way up and breadcrumbs, Back, the addresses of views, tabs, the command menu | `patterns/navigation.md` |
| Notifications, for any product that sends push, email or text notices or shows a notification center: the channel for each kind of notice, what a notice says, bursts, repeats and notices that end, the notification center, badges, asking to send notifications, and the settings for them | `patterns/notifications.md` |
| Settings, for any product with settings or preferences: what belongs in settings, grouping, values and search, whom each setting changes, settings that can break things for others, picking colors for what people own | `patterns/settings.md` |
| Sharing and access, for any product where people share items or invite others: invitations and what they change, access levels, who else can open an item, access that comes from several places, the page without access and asking for it, removing someone, access that ends on a date, and moving ownership | `patterns/sharing-and-access.md` |
| Sign-in and accounts, for any product with accounts: when to ask for an account, the sign-in page, passwords, passkeys, failed attempts, codes and links, two-step verification and recovery, signing in again, security changes, deleting an account | `patterns/sign-in-and-accounts.md` |

## Tools and sources

| Read for | File |
| --- | --- |
| WCAG 2.2 A and AA: which guide and rule states each criterion | `scripts/wcag-index.py` |
| Measuring a page: the type, colors, borders, radii, spacing and motion it renders | `scripts/style-inventory.js` |
| Every source, with its link | `sources.md` |

Every WCAG 2.2 A and AA criterion sits in the foundation guide whose subject it concerns, marked Every product. Not covered yet: charts, brand identity, front-end code, and patterns not in the table above.

## Sources

The guides are complete on their own: using them never needs a source opened. Each idea names its source in parentheses, so anyone can check where it came from. `sources.md` lists every source once, with what we use from it and where to find it, and the rules for adding a rule or a source.
