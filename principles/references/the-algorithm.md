# The Algorithm

Work in five steps, in this order: question every requirement, delete, simplify, speed up, automate. The order is the point: each step wasted on something an earlier step would have removed is the most common error of a capable engineer.

1. **Question every requirement.** A requirement is anything the design must keep: a feature, a rule, a condition, a threshold, a state, a guarantee, a process step. Each must trace to a person who asked for it, or to a fact of the world that forces it. A department, a spec, a past decision, or "best practice" is not a source: best practice is a good default for how to meet a requirement, never the reason one exists. Requirements from smart people are the most dangerous, because nobody questions them, and that includes yours and the user's. Treat every requirement as a recommendation until it is traced.
2. **Delete.** Remove every part, rule and step that fails the first question, before you build on top of it. A guard justified by a real requirement or failure case stays: the absence of a recorded incident does not make it redundant. Keep the deletion safe to check; sometimes the replacement must exist before the old path can go.
3. **Simplify.** Only what survives. Simplifying or optimizing a thing that should not exist is the classic mistake.
4. **Speed up.** Shorten the cycle only after the first three. A faster path through a step that should be gone is waste.
5. **Automate last.** Code, scripts, hooks and checks only for what survived. Automating first freezes every unquestioned requirement in place.

This applies to designs, code, specs, processes, prompts, skills, and to these principles themselves. See [Build the Lever](build-the-lever.md) for step 5.

Sources: Elon Musk's production algorithm (Walter Isaacson, *Elon Musk*, 2023).

Ask: Who asked for this, or what fact forces it, and what breaks for them if it is gone?
