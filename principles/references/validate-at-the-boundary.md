# Validate at the Boundary

Validate external data where it enters the system. Inside, rely on facts the types or constructors already guarantee. Check conditions that can change at the point where they matter.

For example, a valid cancellation request doesn't prove that the customer can still cancel the order. Check the order's current state when you change it, and use a transaction or other synchronization, so that no other operation slips in between the check and the write.

- Parse inputs such as config, CLI arguments, and API responses into types the rest of the code can trust.
- Avoid repeating checks for facts already guaranteed. Propagate errors without revalidating the same data at every layer.
- Keep transport, storage, and framework details behind the boundary. Expose the concepts callers work with.
- Separate business decisions from framework wiring. Prefer pure functions for logic that needs no side effects.

Ask: What fact does this operation rely on, where is it checked, and can it change before use?
