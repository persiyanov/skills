# Laziness Protocol

Borrow a tired maintainer's fatigue: do the hard thinking that removes work from them forever, and carry the change all the way there. Writing code is cheap for you, which makes over-engineering easy; the smallest complete system is the result of that thinking.

- **Prefer deletion.** Removals before additions: [The Algorithm](the-algorithm.md).
- **Prefer direct paths.** No pass-throughs, and each shared rule decided once: [Minimize Reader Load](minimize-reader-load.md).
- **Minimize the diff to the right design.** Use [Radical Simplicity](radical-simplicity.md) to choose the target, then make the smallest complete change that reaches it. Keeping unnecessary machinery for a smaller patch does not simplify the system. See [Consistency Protocol](consistency-protocol.md).
- **Question the threading.** If a task asks you to pass a new signal through types, schemas, pipelines, or similar layers, stop and look for a more direct path.
- **Sweat the small leaks.** Remove tiny pass-throughs, representation leaks, and duplicated choices before they spread. Small leaks compound into permanent coordination costs.

If a human developer would find the code exhausting to maintain, it is a bad solution. The lazy solution is the one they never have to think about again.

Ask: After this change, what would a tired maintainer still have to understand, decide, or repair?
