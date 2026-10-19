# Shape

A system's description is its code plus everything a consumer must hold in their head to use it. Shape makes the description smaller. A candidate names what disappears and the smaller form that replaces it, written out, and says whether a caller could notice. "This is complex" and fewer lines are not candidates. A test is not a consumer: one that patches or calls a private function moves with the code. Prefer the form that makes whole branches, layers, flags, or pieces of knowledge disappear over the one that tidies them, and review the whole component the change touches, not only its changed lines.

## Reuse (`reuse`)

Ask one question of everything the change adds, whether a definition, an inline block, a constant, or a pattern: does this already exist in the repo, standard library, native platform, or an installed dependency? Include dependencies the change adds: can an existing facility do their job? And the reverse: when the change adds a helper, which inline copies elsewhere in the touched component should now call it? For every added definition and every distinctive call, literal, or pattern, name the nearest existing thing that does the same work in whole or in part, or none. The matches are your first candidates. Name the exact helper or native feature to use instead, and check that it preserves required behavior and edge cases. Do not add a dependency to replace small local code, and do not merge two things because they look alike: duplication is cheaper than the wrong abstraction.

## Simplify (`simplify`)

Flag complexity that does no work. Walk the touched component, comments and tests included, and ask of each piece whether it is unused, redundant, pass-through, or not required yet. One caller or implementation is a clue, not proof; name what the piece does today before proposing its deletion. For dead code, prove it is private or that this change made it unreachable. Name the smaller form and write it out. Clear beats clever: a dense expression is the same control flow with its seams hidden. Do not extract for a caller that does not exist yet.

## Efficiency (`efficiency`)

Flag wasted work the change introduces. For each new loop, query, or call, name what it costs and the cheaper form. Work that fails at realistic volume belongs to correctness's load angle, and a micro-optimization with no named cost is not a candidate.

## Model (`model`)

Map the product's nouns, states, and cardinalities to the code. Flag a representation that makes code remember a domain fact the model could enforce, or that draws a distinction no fact requires: name the mismatch, the smallest legal-by-construction form, and the branch, check, or comment that disappears. A new type must make a named illegal state unrepresentable or delete a recurring decision; count it and its conversions against what it removes. A codebase-wide term is a separate rename decision.

## Ownership (`ownership`)

For each decision or piece of knowledge the change touches or relies on, name every place that must know it and the smallest owner that would make the rest ignorant of it. Split across places, or mixed with decisions that change for different reasons, is a candidate. A special case layered on shared infrastructure means the mechanism is not general enough; prefer generalizing it over adding the case. A name that describes one caller's intent, or a meaning the code no longer has, means the knowledge is in the wrong place. A public name is a promise, so renaming one needs a user decision unless existing requirements already settle it. A seam that lets the rest of the system forget something stays, even when it is thin. Two special cases are not a pattern; generalize only for named current needs.

## Conventions (`conventions`)

Flag a violation of a written repo rule that covers a changed path, or a one-off where established siblings all do the same thing. Read every rule file that governs a changed path: CLAUDE.md, AGENTS.md, CONTRIBUTING, any rule file in an ancestor directory of a changed file, and the policies those files name; a directory's rules cover only what is at or below it. Quote the exact rule and the violating line, or name the sibling and the exception this change introduces; style preference and the inferred spirit of a document are not candidates. Do not introduce the better way only here: match the pattern, or propose a uniform migration.

## Surface (`surface`)

Walk what the system offers its consumers: each operation, parameter, value, mode, default, and error, and each step between a request and its effect. For each, who relies on it, what it costs, and what it defends against. Evidence is callers in the repo, production use when reachable, and what actually happens on the wire. A candidate is an offer nobody relies on, two offers for one request, a cost or default the request does not predict, or a check every caller still repeats. Say what moves, what a consumer loses, and your pick.

## Contract (`contract`)

For each rule the change builds, including those the spec requires, name what it buys its consumer and what it costs: the machinery (columns, states, checks, branches, tests) and the theory a consumer must hold. A rule whose cost exceeds what it buys is a candidate; so is one that admits a state no writer produces, and one reached by two or more fixes in the same area. Name the smaller contract (weaker, stronger, or none), what disappears, and what the consumer loses. A candidate that changes a spec requirement goes to Needs your call, never to Fix.
