# The Algorithm

Work in five steps, in this order: question every requirement, delete, simplify, speed up, and automate. The order matters, because the most common mistake of a capable engineer is to spend a step on something that an earlier step would have removed.

1. **Question every requirement.** A requirement is anything that the design must keep: a feature, a rule, a condition, a threshold, a state, a guarantee, or a process step. Each one must trace to a person who asked for it, or to a fact of the world that forces it. A department, a spec, a past decision, or "best practice" isn't a source. Best practice is a good default for how to meet a requirement, never the reason that one exists. Requirements from smart people are the most dangerous, because nobody questions them, and that includes yours and the user's. Treat every requirement as a recommendation until you trace it.
2. **Delete.** Remove every part, rule, and step that fails the first question, before you build on top of it. A guard that a real requirement or failure case justifies stays, because the absence of a recorded incident doesn't make it redundant. Keep each deletion safe to check. Sometimes the replacement must exist before the old path can go.
3. **Simplify** only what survives. Simplifying or optimizing something that shouldn't exist is the classic mistake.
4. **Speed up** the cycle only after the first three steps. A faster path through a step that should be gone is waste.
5. **Automate last.** Write code, scripts, hooks, and checks only for what survived, because automating first freezes every unquestioned requirement in place.

For example, a nightly sync retries each failure five times with growing delays. Before you tune the delays, ask who needs five retries. If nobody asked for them and no failure forces them, delete the retries, and the delays go with them.

This applies to designs, code, specs, processes, prompts, skills, and these principles. For step 5, see [Build the Lever](build-the-lever.md).

Sources: Elon Musk's production algorithm (Walter Isaacson, *Elon Musk*, 2023).

Ask: Who asked for this, or what fact forces it, and what breaks for them if it's gone?
