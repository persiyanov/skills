# Correctness

Does it work, and is what it says true: the spec it implements, and its own names, docs, and errors?

A candidate is a concrete situation in which the code misbehaves or contradicts what it says: the setup, the input or state, what should happen, and what happens instead, with the strongest evidence you have. Each angle works through its enumeration to the end; a line, symbol, or requirement no angle reached is the miss that ships.

## Lines (`lines`)

Read every hunk, then the whole enclosing function, unchanged lines included: a bug in an unchanged line of a touched function is in scope because the change re-exposes it. For every line, name a concrete input, state, timing, error path, or caller that makes it wrong, or none. Wrong includes a dropped effect, not only a wrong result. Include this language's well-known traps.

## Removed (`removed`)

For every line the change deletes or replaces (`git diff -U0 <base> | grep '^-'` is the list), name the invariant or behavior it enforced, then find where the new code re-establishes it. Not found is a candidate. Moved and extracted code drops these most often, because the author reads it as unchanged.

## Callers (`callers`)

For each function, type, field, endpoint, or event the change touches or removes, grep every caller and check it still meets the inputs and can handle the output, errors, and ordering. Check callees the same way, including ones a parallel change in the same slice made unsafe: the instance a call actually talks to, not only the name it was given. A method callers use that the type does not forward is a candidate.

## Spec (`spec`)

Read the spec, ticket, or plan named for the change. For every requirement in the spec, and every definition and rule it states for what changed, find the line that meets it, or name the gap: the setup, the input, what the spec says should happen, and what the code does instead. Then the code's own words: for every description, docstring, error message, and name the change touches, quote it and quote what the code does; where they differ, that is a candidate, and which side moves is part of it. For every behavior the change adds that no spec, ticket, rule, or commit rationale explains, name it as a candidate; it is either an undocumented requirement or a bug. Tests reveal promises but never create requirements, and a requirement the code omits stays a requirement.

## Load (`load`)

What fails when two of these run at once, one crashes midway, or the data is a thousand times larger? Name every writer of the shared state, including ones this change did not touch, quote what each checks before it writes, and give the interleaving or crash-and-retry that breaks the invariant. A legal state from which required work never resumes is a candidate: name the restoring event and the run that never reaches it. For volume, name the realistic size and how the work scales with it: round-trips, memory, and whether work is per item or per batch. Waste harmless at realistic volume, and a claim resting on an unrun benchmark, are not candidates.

## Boundaries (`boundaries`)

Values crossing a trust boundary: trace each to the protected effect and name the path that reaches it without the check, in either direction. For each change that must hold in production — a migration, a new value, a permission, a config, a generated artifact, a rollout order — name the existing row, service, or environment that is not ready for it. For each failure path, what an operator sees; a new state or retry with no signal is a candidate. For each change to how people run or build the repo, name who already does and what breaks for them. Success on an empty database is not proof, and a new dependency alone is not a finding.

## Time (`time`)

For every timestamp the change reads, writes, or compares, name its clock: the source's event time, the system's receipt, the database at the write, or a worker. Times compared or ordered together must share a clock; a missing or late time needs a rule for where it lands. For every view of state the change shows, name when it goes stale and what refreshes it. A comparison across clocks, an untimed event with no rule, and a view nothing refreshes are candidates.

## Tests (`tests`)

Is this the suite a strong senior engineer would have written for this slice, from the point of view of whoever the code serves? List the slice's promises and the modules whose wrongness a flow test cannot see: branch-dense logic, a race, a vendor's wire. For each promise, find the test that fails when it breaks, or name the missing one: setup, input, expected behavior, and the wrong implementation it rules out. Only those modules get a direct test. The flow needs one end-to-end run with a realistic payload and its edge payloads as rows; one end-to-end case covers more than many unit cases of the same flow. A narrow test of what the flow already covers is a shape finding: fold it into the flow's rows or delete it. So is a row the flow's other rows already cover: a row stays only when removing it loses a covered line or lets a plausible bug pass. A test that passes on a neighbour's state, asserts a mock was called with what it was given, or pins private call order a correct refactor would change, pins nothing. Cases varying one rule's dimensions are one table, not separate gaps; prefer strengthening the smallest existing test. Not a test per branch, not coverage as a number; deleting or reorganizing tests is shape.

