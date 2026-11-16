# Consistency Protocol

Make similar things follow one rule, so that someone who learned one can predict the other. For the thing in front of you, ask what else nearby does a similar job.

Apply this to names, behavior, screens, APIs, errors, and empty states.

- **Find the existing rule.** Start in the same flow or module, then look at related features. Look where a user would look too: the same kind of thing elsewhere, the same situation under a different operation, the same request in a different mode. Reuse the rule when it fits. If the right choice is unclear, compare real alternatives: [Exhaust the Design Space](exhaust-the-design-space.md).
- **Avoid a second way to do the same thing.** A smaller patch can create more complexity when it introduces an exception.
- **Improve the related cases together.** If the existing rule is wrong, propose a better one and carry the approved change through the related cases. A better experience can justify changing the convention: [Experience First](experience-first.md).
- **Make migrations explicit.** When a change must roll out in stages, define where the temporary difference applies and when you'll remove it. A focused bug fix doesn't need to wait for an unrelated redesign.
- **Keep differences that serve a real need.** A dense list and a detail page need different layouts. Similarity alone is no reason to force them into the same layout.

For example, if Archive in one list asks for confirmation and Archive in another list offers Undo instead, people who learned one are surprised by the other. Pick one rule, and apply it to both lists.

Ask: Would someone who learned one correctly predict the other, and if not, what need or migration step explains the difference?
