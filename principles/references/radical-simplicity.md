# Radical Simplicity

Find the simplest complete system the job needs. This applies to code, products, APIs, processes, prompts, and skills.

Start with a concrete use. What is someone trying to accomplish, and what would they reasonably expect? From the other side, what should the system know and take care of for them?

Describe that job without assuming today's design, but keep real constraints. Compare what it needs with what exists. For each unexplained piece, ask what need it serves and whether a different design removes that need. For each missing capability, ask what users currently do to compensate.

When the design feels harder than its purpose, or discussion revolves around knobs before the job is clear, question the model itself. Existing structure explains today; it does not decide tomorrow. When adding a requirement, redesign as if it had been there from the start instead of bolting it on: what would we have built had we known this from day one?

Count complexity across the whole system, including what users and callers must understand, decide, repeat, or repair. A stronger guarantee or a better boundary can simplify more than deleting code. Moving work onto every caller does not make that work disappear.

Find the design by constraint. Propose one rule the system could obey, test it against real use and failure cases, and keep it if it holds: every state and branch it forbids disappears. Then the next rule. Or split the job by concern, so each part has one job and states what it guarantees and what it needs.

Every rule and mechanism traces to a real need or constraint, or goes: [The Algorithm](the-algorithm.md). Use common sense to question choices, then check them against real behavior and failure cases.

Make changes to what users can expect explicit. Involve the owner when a product decision needs them.

Carry the chosen design through callers, types, documentation, and tests. Deliver in steps when useful, and verify the whole job.

Ask: What complexity does the problem require, and what comes from choices we could change?
