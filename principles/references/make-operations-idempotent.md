# Make Operations Idempotent

Make repeated attempts at the same operation safe, because a timeout or a crash doesn't tell you whether the action happened.

- Prefer operations that naturally reach the same state when repeated. If repetition is already safe, extra bookkeeping adds nothing.
- For actions that could duplicate an effect, keep the same operation identity across retries and prevent duplicates at the point of the effect. A new intended action is a new operation, even if its inputs match an earlier one.
- Account for concurrent attempts. Checking a record and writing it later leaves a race, so close it with an atomic operation or the coordination that it needs.
- Consider crashes before the effect, after it, and before you record success. Save enough durable information to recover safely.
- Keep uncertain external results uncertain. Retry only when the operation's guarantees or reliable evidence make it safe. A local record alone can't prove whether a remote action happened. Reconciliation helps only when it can establish the facts that recovery needs.

For example, a charge request times out, and the card may or may not have been charged. Retry with the same idempotency key, so that the payment provider charges the card at most once.

Ask: What can a retry, overlap, or interruption do, and what makes the next action safe?
