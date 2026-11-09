# Correctness

Does the code work? Is what it says true, in the spec it implements and in its own names, docs, and errors?

A candidate is a concrete situation in which the code misbehaves or contradicts what it says. Give the setup, the input or state, what should happen, and what happens instead, with the strongest evidence you have.

## Lines (`lines`)

Read every hunk, then the whole function around it, unchanged lines included. A bug in an unchanged line of a changed function is in scope. For every line, name a concrete input, state, timing, error path, or caller that makes it wrong, or say there is none. A line that drops an effect is wrong, even when its result is right.

## Removed (`removed`)

List every line the change deletes or replaces with `git diff -U0 <base> | grep '^-'`. For each line, name the invariant or behavior it enforced, then find where the new code enforces it. If you cannot find that place, the line is a candidate. Moved and extracted code loses these most often, because its author reads it as unchanged.

## Callers (`callers`)

For each function, type, field, endpoint, or event the change touches or removes, grep for every caller. Check that each caller still passes valid inputs and can handle the output, the errors, and the ordering. Check callees the same way, including a callee that another part of the same change made unsafe.

## Spec (`spec`)

Read the spec, ticket, or plan named for the change. For every requirement in it, and for every definition and rule it states about what changed, find the line that meets it. If no line does, name the gap: the setup, the input, what the spec says should happen, and what the code does instead.

Then check the code's own words. For every description, docstring, error message, and name the change touches, quote it and quote what the code does. Where the two differ, you have a candidate. Say which side should change.

Name as a candidate every behavior the change adds that no spec, ticket, rule, or commit message explains. It is an undocumented requirement or a bug. Tests show what behavior the author expected, and they never create a requirement.

## Load (`load`)

Ask what fails when two of these run at once, when one crashes midway, or when the data is a thousand times larger.

Name every writer of the shared state, including writers this change did not touch. Quote what each one checks before it writes. Then give the interleaving, or the crash and retry, that breaks the invariant. A valid state from which required work never resumes is a candidate. Name the event that should resume the work and the run that never reaches it.

For volume, name the realistic size and how the work grows with it: round trips, memory, and whether the work runs per item or per batch. Waste that is harmless at realistic volume is not a candidate. A claim that rests on a benchmark nobody ran is not one either.

## Boundaries (`boundaries`)

Trace each value that crosses a trust boundary to the effect the boundary protects, and name the path that reaches the effect without the check. Do this in both directions.

For each change that must hold in production (a migration, a new value, a permission, a config, a generated artifact, a rollout order), name the existing row, service, or environment that is not ready for it. For each failure path, say what an operator sees. A new state or retry that gives no signal is a candidate. For each change to how people run or build the repo, name who runs or builds it today and what breaks for them.

A new dependency is not a candidate for that reason alone.

## Time (`time`)

For every timestamp the change reads, writes, or compares, name its clock: the source's event time, the time the system received it, the database's time at the write, or a worker's time. Times that the code compares or orders together must share a clock. A missing or late time needs a rule for where it goes. For every view of state the change shows, name when the view goes stale and what refreshes it. A comparison across clocks, an event with no time and no rule, and a view that nothing refreshes are candidates.

## Tests (`tests`)

List the behaviors the change should have. List the modules whose bugs a flow test cannot see: logic with many branches, a race, a vendor's wire format. Only those modules get a direct test.

For each behavior, find the test that fails when the behavior breaks. If there is none, name the missing test: the setup, the input, the expected behavior, and the wrong implementation it rules out.

The flow needs one end-to-end run with a realistic payload, with its edge payloads as rows.

A narrow test of something the flow already covers is a shape candidate. Its smaller form merges the test into the flow's rows or deletes it. A row that the flow's other rows already cover is a shape candidate too. A row stays only when removing it loses a covered line or lets a plausible bug pass.

A test tests nothing when it passes because of state another test left behind, when it asserts that a mock was called with what the test gave it, or when it fixes a private call order that a correct refactor would change.

Cases that vary the dimensions of one rule make one table and count as one gap. Prefer strengthening the smallest existing test. Do not ask for a test per branch or for a coverage number.
