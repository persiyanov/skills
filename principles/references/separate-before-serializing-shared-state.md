# Separate Before Serializing Shared State

Eliminate shared mutable state before you serialize access to it. Concurrent writes to shared state create race conditions that are intermittent, hard to reproduce, and expensive to debug. Instructions and conventions are not concurrency control: telling agents or goroutines to "take turns" does not work.

1. **Find the shared mutable state:** files both read and write, branches both push to, APIs both define and consume.
2. **Eliminate the shared write target by default.** Do these actors need one canonical object, or are they publishing independent facts? Give each actor its own file, key, branch, or state directory, and merge only at the read or reporting boundary. Two workers writing their own `lastX` field into one `state.json` is still shared mutation; `indexer-state.json` and `metrics-state.json` are not.
3. **Serialize structurally only when one shared write target is a real invariant:** lockfiles, sequential phases, a single-writer actor, or atomic compare-and-swap. Treat "we need a lock" as a design smell to check, not as the default answer.

Ask: Do these actors need one mutable object, or can each own its own and merge on read?
