# Outcome-Oriented Execution

Finish a planned rewrite or migration at the intended design. Avoid compatibility code whose only job is to keep disposable intermediate edits working.

Temporary breakage in isolated work is acceptable when you planned it and can reverse it. A signature and its callers can change together before compilation passes again. Live users must retain the guarantees they rely on throughout deployment.

When a new internal API replaces an old one, migrate the callers and delete the old API in the same batch of changes:

1. List the callers.
2. Migrate them.
3. Delete the old path.
4. Update the tests to assert the new contract, and delete the tests that only protect the old implementation.

An adapter is a time-boxed exception, not architecture. Keeping both APIs creates dual-path complexity, slows cleanup, and makes the codebase feel append-only. This holds while only internal callers depend on the old API. External users keep their guarantees, as above.

Decide where to check progress, run useful checks as you go, and remove temporary migration code when its job is done. Verify the completed result before you declare success, including the affected execution path when runtime behavior changes.

Ask: When this ships, what temporary code is left, and who still needs it?
