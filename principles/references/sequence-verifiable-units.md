# Sequence Work into Verifiable Units

Group changes that belong together, then check they work before building on them. A signature and its callers are one unit, even across several files.

Know the starting state and any existing failures. For a long transformation or data migration, use batches that make errors easy to find and recover from. Investigate unexpected failures before relying on the result.

A regression test failing for the expected reason can confirm the bug; the fix must then make it pass. Planned intermediate edits can be incomplete in isolated work. [Outcome-Oriented Execution](outcome-oriented-execution.md) explains why live deployments need different care.

Choose commit and release boundaries that make changes understandable and safe to deliver. A test and its fix can share a commit. Check the completed result as well as the steps along the way. [Prove It Works](prove-it-works.md) helps choose the check.

Ask: What later work would be wasted or unsafe if this went unchecked?
