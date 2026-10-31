# Design

A system's description is its code plus everything a consumer must remember to use it. Design makes the description smaller. A possible finding names what disappears and the smaller version that replaces it, written out, and says whether a caller could notice. "This is complex" and fewer lines are not findings. A test is not a consumer: one that patches or calls a private function moves with the code. Prefer the version that removes whole branches, layers, flags, or pieces of knowledge over the one that tidies them, and review the whole component the change touches, not only its changed lines.

## Reuse (`reuse`)

Ask one question of everything the change adds, whether a definition, an inline block, a constant, or a pattern: does this already exist in the repo, standard library, native platform, or an installed dependency? Include dependencies the change adds: can an existing tool do their job? And the reverse: when the change adds a helper, which inline copies elsewhere in the touched component should now call it? For every added definition and every distinctive call, literal, or pattern, name the nearest existing thing that does the same work in whole or in part, or none. The matches are your first possible findings. Name the exact helper or native feature to use instead, and check that it preserves required behavior and edge cases. Do not add a dependency to replace small local code, and do not merge two things because they look alike: duplication is cheaper than the wrong abstraction.

## Simplify (`simplify`)

Flag complexity that does no work. Walk through the touched component, comments and tests included, and ask of each piece whether it is unused, redundant, pass-through, or not required yet. One caller or implementation is a clue, not proof; name what the piece does today before proposing its deletion. For dead code, prove it is private or that this change made it unreachable. Name the smaller version and write it out. Clear beats clever: a dense expression is the same control flow with its steps hidden. Do not extract for a caller that does not exist yet.

## Efficiency (`efficiency`)

Flag wasted work the change introduces. For each new loop, query, or call, name what it costs and the cheaper version. Work that fails at realistic volume belongs to correctness's load area, and a micro-optimization with no named cost is not a finding.

## Model (`model`)

Map the product's entities, states, and cardinalities to the code. Flag a representation that makes code remember a domain fact the model could enforce, or that draws a distinction no fact requires: name the mismatch, the smallest version that makes the illegal state unrepresentable, and the branch, check, or comment that disappears. A new type must make a named illegal state unrepresentable or delete a recurring decision; count it and its conversions against what it removes. A codebase-wide term is a separate rename decision.

## Ownership (`ownership`)

For each decision or piece of knowledge the change touches or relies on, name every place that must know it and the smallest owner that would let the rest not know it. Split across places, or mixed with decisions that change for different reasons, is a possible finding. A special case on top of shared infrastructure means the mechanism is not general enough; prefer generalizing it over adding the case. A name that describes one caller's intent, or a meaning the code no longer has, means the knowledge is in the wrong place. A public name is a contract, so renaming one needs a user decision unless existing requirements already settle it. A boundary that lets the rest of the system not know something stays, even when it is thin. Two special cases are not a pattern; generalize only for named current needs.

## Conventions (`conventions`)

Flag a violation of a written repo rule that covers a changed path, or a one-off where established similar code all does the same thing. Read every rule file that governs a changed path: CLAUDE.md, AGENTS.md, CONTRIBUTING, any rule file in an ancestor directory of a changed file, and the policies those files name; a directory's rules cover only what is at or below it. Quote the exact rule and the violating line, or name the similar code and the exception this change introduces; style preference and what a document seems to intend are not findings. Do not introduce the better way only here: match the pattern, or propose a uniform migration.

## Surface (`surface`)

Walk through what the system offers its consumers: each operation, parameter, value, mode, default, and error, and each step between a request and its effect. For each, who relies on it, what it costs, and what it protects against. Evidence is callers in the repo, production use when reachable, and what actually happens on the wire. A possible finding is an option nobody relies on, two options for one request, a cost or default the request does not predict, or a check every caller still repeats. Say what changes, what a consumer loses, and your recommendation.

## Contract (`contract`)

For each rule the change builds, including those the spec requires, name its benefit to the consumer and what it costs: the implementation (columns, states, checks, branches, tests) and the mental model a consumer must keep. A rule whose cost exceeds its benefit is a possible finding; so is one that allows a state no writer produces, and one reached by two or more fixes in the same part of the code. Name the smaller contract (weaker, stronger, or none), what disappears, and what the consumer loses. A possible finding that changes a spec requirement goes to Needs your decision, never to Fix.
