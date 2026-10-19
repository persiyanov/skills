# Make Operations Idempotent

Make repeated attempts at the same operation safe. A timeout or crash does not tell you whether the action happened.

- Prefer operations that naturally reach the same state when repeated. If repetition is already safe, extra bookkeeping adds nothing.
- For actions that could duplicate an effect, keep the same operation identity across retries and prevent duplicates at the point of the effect. A new intended action is a new operation, even if its inputs match an earlier one.
- Account for concurrent attempts. Checking a record and writing it later leaves a race; use the atomic operation or coordination needed to close it.
- Consider crashes before the effect, after it, and before success is recorded. Save enough durable information to recover safely.
- Keep uncertain external results uncertain. Retry only when the operation's guarantees or reliable evidence make it safe. A local record alone cannot prove whether a remote action happened. Reconciliation helps only when it can establish the facts needed to recover.

Ask: What can a retry, overlap, or interruption do, and what makes the next action safe?
