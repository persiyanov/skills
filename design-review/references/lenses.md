# Lenses

Each lens is one way of finding problems. A finder works through its whole lens, on every part in the target and every state, and returns every candidate, strongest first. For each one, it gives the element, the place and the proof that its lens names. "Rules" names what the lens's rules protect, as design-knowledge's "What each rule protects" defines it: `scripts/rules.py --protects <name>`, plus `--pattern` for each task in the design; read each rule in full before you judge a part against it.

## Concept

### From scratch

- **Question:** how should this be done, from the problem alone?
- **Gets:** the problem, the people, their jobs, the cases and the data. It sees the design only after it has written its own answer, because whatever it sees first shapes that answer.
- **How:** write how the best product would do it, in words: the places, what each one holds and opens on, what leads, and the form of each main part. Then read the design and list each difference. List what the design takes for granted, including decisions already made, and ask whether a smaller design could do the job, because a design built on an unquestioned assumption can improve only within it (Interface Craft, "Conceptual Range").
- **Proof:** each difference, with the job or case that it serves better.
- **Not a finding:** a difference that the record already justifies with a fact you can check.

## Simplicity

### Less

- **Question:** what can go?
- **Gets:** the design, the jobs and the cases.
- **How:** take each part away, with the rest in place, and say what is lost, for whom and how often, as design-knowledge's "A part's place" describes: sections, fields, columns, labels, captions, help text, words, steps, boxes, lines, icons, color and motion. Two parts that do one job become one. People look for what to add and overlook what to take away unless they're prompted (Adams et al., 2021), so this lens is the prompt.
- **Proof:** the part taken away, with nobody in the jobs or cases losing anything, or the other part that already shows the same thing.
- **Rules:** economy.
- **Not a finding:** a part that a job with evidence needs.

### Convention

- **Question:** would a well-made product make each part this way, and do the product's other pages?
- **Gets:** the design, the product's other pages and the bar.
- **How:** for each part, ask the plain question that design-knowledge's "Making a part" asks, and answer from what you know. Then compare each part with the parts that do the same job on two or three of the product's own pages, and each kind of thing, such as a person, a file or a status, with the form it takes elsewhere in the product, because people learn a part once and expect it to work the same everywhere.
- **Proof:** the usual form in one line, with a well-made product that uses it, or the product's own part that does the same job another way.
- **Rules:** familiarity.
- **Not a finding:** a difference that a fact in the record justifies.

## Functional

### Walk

- **Question:** can each person do each job, in every state?
- **Gets:** the design, the people, their jobs, the cases, and what the design must meet.
- **How:** as each person, starting where they start, do each job step by step with real data. At each step, ask whether they know what to do, notice the control, connect it with their goal, and see that it worked (Wharton et al., 1994). Walk every state they can meet: empty, loading, error, each role, and the extremes of the data. Check everything the design must meet.
- **Proof:** the person, the case, the step, and what they see there.
- **In a running product:** do it for real, in a test account: click, type, wait on a slow network, and cause each error.
- **Rules:** usability.

### Words

- **Question:** is each word the one the reader expects?
- **Gets:** every string in the design, in the order people meet it, and the record's names of things and their states.
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
- **How:** check WCAG 2.2 A and AA, with design-knowledge's `scripts/wcag-index.py` for which rule states each criterion. On frames: contrast, text and target sizes, names and reading order. In a running product: axe on every page and state, the accessibility tree, the keyboard alone, a screen reader, 320 px width, 200% zoom, reduced motion, forced colors and each theme.
- **Proof:** the criterion and the measurement.
- **Rules:** accessibility.

## Craft

### Look

- **Question:** does the whole hold up next to the best products?
- **Gets:** the design at real size, the bar's best products and the product's ranked qualities.
- **How:** put each main screen beside the same screen of each best product, at the same size, sharp and then blurred until the text can't be read. Say what leads, whether that's what the job needs first, and how density, rhythm and weight compare. Check that the look follows the ranked qualities and is the product's own, not a copy of a reference.
- **Proof:** the side-by-side, and the place on it that you point at. A judgment that you can't point at on it isn't a finding.
- **Rules:** coherence.

### Detail

- **Question:** is every edge, gap, value and timing right?
- **Gets:** the design, measured: Paper's computed styles, or the page's DOM.
- **How:** look at each part up close, where it meets its neighbors, because small defects disappear at page scale. Measure, and compare with the product's tokens: on Paper, read the values with `get_computed_styles`; in a page, this skill's `scripts/layout-overlay.js` shows the alignment, and design-knowledge's `scripts/style-inventory.js` lists the type, colors, spacing, radii and motion in use. Render the longest, the emptiest and the fullest data, at the narrowest and the widest windows.
- **Proof:** the measurement, from the medium, never from a screenshot's pixels, which depend on its scale.
- **In a running product:** every width, the timing and easing of each animation, and, where an approved design exists, the build measured against it.
- **Rules:** precision.

### Care

- **Question:** do the moments people remember feel as considered as in the best products?
- **Gets:** the design, the jobs and the bar's best products.
- **How:** people judge an experience mostly by its best moment and its end (Kahneman et al., 1993). List those moments in each job: the first use, a success, the end of the job, a wait, an error, an empty start and a return. For each one, find what the best products do at the same moment, and whether this design does as much.
- **Proof:** the side-by-side of that moment, with what the best product does that this design doesn't.
- **Not a finding:** decoration with no job, which is Less's.
