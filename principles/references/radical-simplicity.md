# Radical Simplicity

Find the simplest complete system that the job needs: how you'd build it from day one, knowing what you know today. This applies to every change, whether a feature, a fix, a speed-up, or a review finding, and to code, products, APIs, processes, prompts, and skills.

Start with a concrete use. Ask what someone is trying to accomplish and what they'd reasonably expect. From the other side, ask what the system should know and take care of for them.

Describe that job without assuming today's design, but keep the real constraints. Compare what the job needs with what exists. For each piece that nothing explains, ask what need it serves and whether a different design removes that need. For each missing capability, ask what users do today to make up for it.

When the design feels harder than its purpose, or the discussion turns to settings before the job is clear, question the model itself. Existing structure and past decisions explain the present, but they don't decide the future. A change shaped by them keeps the cause, and the next change builds on it.

Count complexity across the whole system, including what users and callers must understand, decide, repeat, or repair. A stronger guarantee or a better boundary can simplify more than deleting code. Moving work onto every caller doesn't make that work disappear.

Find the design through constraints. Propose one rule that the system could obey, test it against real use and failure cases, and keep it if it holds, because every state and branch that it forbids disappears. Then propose the next rule. Or split the job by concern, so that each part has one job and states what it guarantees and what it needs.

For example, before you add a cache in front of a slow query, check whether an index makes the query fast. The cache would add invalidation that every later change must respect, and the index adds nothing that anyone has to remember.

Trace every rule and mechanism to a real need or constraint, or remove it: [The Algorithm](the-algorithm.md). Use common sense to question choices, then check them against real behavior and failure cases.

Make every change to what users can expect explicit. Involve the owner when a product decision needs them.

Carry the chosen design through callers, types, documentation, and tests. Deliver in steps when that helps, and verify the whole job. A longer way there is a cost to state, never a reason to aim lower. When the cost is real, say what the smaller change gives up, and let the user choose. Return on effort decides which problems to take on, never how well to solve them.

Ask: What complexity does the problem require, and what comes from choices that we could change?
