# Work Toward the End State

Aim every step at the intended end state, not at the next state that looks finished. Start from the end: write what must be true when the work is done, and order the steps so that each one moves toward it.

An in-between state needs to be safe only for whoever depends on it. Live users, external callers, and data that people rely on keep their guarantees at every step. Your own half-done work, such as edits in a branch, can stay broken while you work, because nobody depends on it. Don't spend effort keeping a state alive that nobody will use.

Finish at the end state. Remove what served only the way there: adapters, feature flags, double writes, old copies, and parallel versions. If you keep one, give it an owner and an end date, because temporary things that nobody removes become permanent.

The following cases show the same move:

| Work | What creeps in | The move toward the end state |
| --- | --- | --- |
| Replacing an internal API | An adapter that keeps old callers working | Migrate every caller, delete the old API, and update the tests to the new contract, in the same batch of changes |
| Renaming a database column | Writing both columns forever | Copy the data, switch the reads, then drop the old column, with each step safe for live users |
| Rolling out a feature | A flag that stays after launch | Remove the flag and the old path when the rollout ends |
| Replacing documents or skills | Old versions kept "just in case" | Delete them, and rely on version history |

Verify the end state where it runs, not only each step: [Prove It Works](prove-it-works.md).

Ask: When this ships, what temporary thing is left, who still needs it, and when does it go?
