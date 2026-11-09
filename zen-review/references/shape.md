# Shape

A system's description is its code plus everything a consumer must remember to use it. Shape makes the description smaller.

A candidate names what disappears, writes out the smaller form that replaces it, and says whether a caller could notice. "This is complex" is not a candidate, and neither is a form that only has fewer lines. A test is not a consumer. A test that patches or calls a private function changes together with the code. Prefer a form that removes whole branches, layers, flags, or facts a reader must know to a form that tidies them. Review the whole component the change touches, not only its changed lines.

## Reuse (`reuse`)

Ask one question of everything the change adds, whether a definition, an inline block, a constant, or a pattern. Does it already exist in the repo, the standard library, the native platform, or an installed dependency? Ask it of the dependencies the change adds too: can a tool the repo already has do their job? Ask the reverse when the change adds a helper: which inline copies elsewhere in the touched component should now call it?

For every added definition and every distinctive call, literal, or pattern, name the nearest existing thing that does the same work in whole or in part, or say there is none. The matches are your first candidates. Name the exact helper or native feature to use, and check that it keeps the required behavior and the edge cases.

Do not add a dependency to replace a small piece of local code. Do not merge two things because they look alike.

## Simplify (`simplify`)

Flag complexity that does no work. Go through the touched component, comments and tests included, and ask of each piece whether it is unused, redundant, a pass-through, or not required yet. A single caller or a single implementation is a clue and proves nothing. Name what the piece does today before you propose deleting it. For dead code, prove that it is private or that this change made it unreachable. Prefer clear code to clever code. Do not extract a helper for a caller that does not exist yet.

## Efficiency (`efficiency`)

Flag wasted work that the change introduces. For each new loop, query, or call, name what it costs and the cheaper form. Work that fails at realistic volume belongs to the load angle of correctness. A small optimization with no named cost is not a candidate.

## Model (`model`)

Map the product's entities, states, and cardinalities to the code. Flag a representation that makes the code remember a domain fact the model could enforce. Flag one that draws a distinction no fact requires. For each, name the mismatch, the smallest form that makes the illegal state impossible to represent, and the branch, check, or comment that disappears.

A new type must make a named illegal state impossible to represent, or remove a decision the code makes again and again. Count the type and its conversions against what it removes.

## Ownership (`ownership`)

For each decision or fact the change touches or relies on, name every place that must know it. Then name the smallest owner that would let the other places not know it. Knowledge split across places is a candidate. So is knowledge mixed with decisions that change for different reasons.

A special case on top of shared infrastructure shows that the mechanism is not general enough. Generalize it only for needs you can name today.

A name that describes one caller's intent, or a meaning the code no longer has, shows that the knowledge sits in the wrong place. A public name is a contract. Renaming one needs the user's decision unless existing requirements already settle it.

Keep a boundary that lets the rest of the system not know something, even a thin one.

## Conventions (`conventions`)

Flag a violation of a written repo rule that covers a changed path. Flag a one-off where all the established similar code does the same thing.

Read every rule file you were given. A directory's rules cover only what is in it or below it.

Quote the exact rule and the line that violates it, or name the similar code and the exception this change introduces. A style preference is not a candidate, and neither is what a document seems to intend. Do not introduce a better way in this one place. Match the pattern, or propose a migration that covers every case.

## Surface (`surface`)

Go through what the system offers its consumers: each operation, parameter, value, mode, default, and error, and each step between a request and its effect. For each one, say who relies on it, what it costs, and what it protects against. Take your evidence from callers in the repo, from production use when you can reach it, and from what happens on the wire. A candidate is an option nobody relies on, two options for one request, a cost or default the request does not predict, or a check every caller still repeats. Say what changes, what a consumer loses, and what you recommend.

## Contract (`contract`)

For each rule the change builds, including the rules the spec requires, name its benefit to the consumer and its cost. The cost is the implementation (columns, states, checks, branches, tests) and what a consumer must keep in mind. Three kinds of rule are candidates: a rule that costs more than it gives, a rule that allows a state no writer produces, and a rule that two or more fixes in the same part of the code trace back to. Name the smaller contract, which may be weaker, stronger, or no contract at all. Name what disappears and what the consumer loses.
