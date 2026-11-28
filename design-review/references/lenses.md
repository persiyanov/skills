# Lenses

Each lens is one way of finding problems.

- Unless your lens names its own order, review the target as a tree: the root first, then each part within what holds it, down to its primitives. Check each node against the rules that your lens's Rules line names, for that node's kind: design-knowledge's `scripts/rules.py --protects <Rules> --kind <kind>`, plus `--pattern` for each task in the design. Read each rule in full before you judge a node against it. List the rules you couldn't check.
- Return every finding, strongest first: the element, its place, and the proof that your lens asks for.
- A state that the medium could show but the design doesn't, such as a control never shown open, is a finding.
- In a running product, change data only in a test account.

## Concept

### From scratch

- **Question:** how should this be done, from the problem alone?
- **Gets:** the problem, the people, their jobs and the data, and the design only after its own answer.
- **How:** in this order, and with no rules: write how the best product would do it, in words: the places, what each one holds and opens on, what leads, and the form of each main part. Then read the design and list each difference. List what the design takes for granted, including decisions already made, and ask whether a smaller design could do the job, because a design built on an unquestioned assumption can improve only within it (Interface Craft, "Conceptual Range").
- **Proof:** each difference, with the job or case that it serves better.

## Simplicity

### Less

- **Question:** what can go?
- **Gets:** the design and the jobs.
- **How:** take each part away, down to a word, a line or a color, with the rest in place, and say what is lost, for whom and how often, as design-knowledge's "A part's place" describes. Two parts that do one job become one.
- **Proof:** the part taken away, with no job losing anything, or the other part that already shows the same thing.
- **Rules:** economy.
- **Not a finding:** a part that a job needs.

### Convention

- **Question:** would a well-made product, and this product's other pages, make each part this way, and what do they offer that this page lacks?
- **Gets:** the design, the product's other pages and the bar.
- **How:** for each part, ask the plain question that design-knowledge's "Making a part" asks, and answer from what you know. Compare each part, and each kind of thing it shows, with how two or three of the product's own pages show it. Then list what the same page in the bar's products offers that this one lacks, such as a setting, a view or an action, and keep each one that a job here needs.
- **Proof:** the usual form in one line, with a well-made product that uses it; the product's own part that does the same job another way; or, for something missing, the products that have it and the job that needs it.
- **Rules:** familiarity.
- **Not a finding:** a difference that a fact in the record justifies.

## Functional

### Walk

- **Question:** can each person do each job, in every state?
- **Gets:** the design, the people, their jobs, and what the design must meet.
- **How:** in the order of each job, not the tree: as each person, starting where they start, do the job step by step, and check your rules at each step. At each step, ask whether they know what to do, notice the control, connect it with their goal, and see that it worked (Wharton et al., 1994). Walk every state they can meet: empty, loading, error, each role, and the extremes of the data. Check everything the design must meet.
- **Proof:** the person, the case, the step, and what they see there.
- **In a running product:** do it for real: click, type, wait on a slow network, and cause each error.
- **Rules:** usability.

### Words

- **Question:** is each word the one the reader expects?
- **Gets:** every string in the design, in the order people meet it, and the spec's Names.
- **How:** read each string where it sits, as the person, and then on its own, with /writing's rules and the product's voice.
- **Proof:** the string, where it sits, and the word or sentence the reader would expect.
- **Rules:** clarity.

### Truth

- **Question:** does every label, number, state and action match the data and what the product does?
- **Gets:** the design, and the code, the API or the product's docs.
- **How:** trace each label, number, state and action to the field, the line or the doc that it comes from. Where the design changes what the product does, it must say so.
- **Proof:** the field, the line or the doc, beside what the design shows.
- **Rules:** truth.

### Access

- **Question:** can everyone see, read and use it?
- **Gets:** the design, and the build when there is one.
- **How:** check WCAG 2.2 A and AA, with design-knowledge's `scripts/wcag-index.py` for which rule states each criterion. In a running product: axe-core on every page and state, the accessibility tree, the keyboard alone, a screen reader, 320 px width, 200% zoom, reduced motion, forced colors and each theme. On frames: contrast, text and target sizes, names and reading order.
- **Proof:** the criterion and the measurement.
- **Rules:** accessibility.

## Craft

### Look

- **Question:** does each screen read as one design, with what matters leading, clear groups and levels, and a look that is the product's own?
- **Gets:** the design at real size, the bar's best products and the product's ranked qualities.
- **How:** screen by screen, checking your rules on each one: put each main screen beside the same screen of each best product, at the same size, sharp and then blurred until the text can't be read. Say what leads, whether that's what the job needs first, and how density, rhythm and weight compare. Check that the look follows the ranked qualities and is the product's own, not a copy of a reference.
- **Proof:** the side-by-side, and the place on it that you point at. A judgment that you can't point at on it isn't a finding.
- **Rules:** coherence.

### Detail

- **Question:** is every value exact and from the system, and does it hold in every state, with any data, window and setting?
- **Gets:** the design.
- **How:** look at each part up close, where it meets its neighbors, because small defects disappear at page scale. In a running page, run this skill's `scripts/layout-overlay.js` for alignment, on the whole screen for the lines its parts share and then on each part for the steps, and design-knowledge's `scripts/style-inventory.js` for values, measure what they miss, and compare every value with the product's tokens. On Paper, read the values with `get_computed_styles`.
- **Proof:** the measurement, from the medium, never from a screenshot's pixels, which depend on its scale.
- **In a running product:** the longest, the emptiest and the fullest data, at every width, the timing and easing of each animation, and the build against any approved Paper exploration.
- **Rules:** precision.

### Care

- **Question:** do the moments people remember feel as considered as in the best products?
- **Gets:** the design, the jobs and the bar's best products.
- **How:** moment by moment, with no rules. People judge an experience mostly by its best moment and its end (Kahneman et al., 1993), so list those moments in each job: the first use, a success, the end of the job, a wait, an error, an empty start and a return. For each one, find what the best products do at the same moment, and whether this design does as much.
- **Proof:** the side-by-side of that moment, with what the best product does that this design doesn't.
- **Not a finding:** decoration with no job, which is Less's.
