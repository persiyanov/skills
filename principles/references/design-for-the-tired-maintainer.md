# Design for the Tired Maintainer

Think like a tired maintainer: do the hard thinking that removes work from them forever, and carry the change all the way through. Writing code is cheap for you, which makes over-engineering easy. The smallest complete system is what that hard thinking produces.

- **Prefer deletion.** Removals before additions: [The Algorithm](the-algorithm.md).
- **Prefer direct paths.** No pass-throughs, and each shared rule decided once: [Minimize Reader Load](minimize-reader-load.md).
- **Minimize the diff to the right design.** Use [Radical Simplicity](radical-simplicity.md) to choose the target, then make the smallest complete change that reaches it. Keeping unnecessary code for a smaller patch doesn't simplify the system. See [Make Similar Things Behave Alike](make-similar-things-behave-alike.md).
- **Question passing data through layers.** If a task asks you to pass a new signal through types, schemas, pipelines, or similar layers, stop and look for a more direct path.
- **Fix small leaks.** Remove small pass-throughs, leaked implementation details, and duplicated choices before they spread. Small leaks compound into permanent coordination costs.

For example, a task asks you to pass a new `source` field through four layers, so that one log line can show it. The direct path is to write the log line where the source is already known.

If a human developer would find the code exhausting to maintain, it's a bad solution. The lazy solution is the one that they never have to think about again.

Ask: After this change, what would a tired maintainer still have to understand, decide, or repair?
