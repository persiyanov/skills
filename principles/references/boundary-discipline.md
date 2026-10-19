# Boundary Discipline

Validate external data where it enters the system. Inside, rely on facts the types or constructors already guarantee. Check conditions that can change at the point where they matter.

A valid cancellation request does not prove an order is still cancellable. Check its current state when changing it, using a transaction or other synchronization to prevent another operation slipping between the check and the write.

- Parse inputs such as config, CLI arguments, and API responses into types the rest of the code can trust.
- Avoid repeating checks for facts already guaranteed. Propagate errors without revalidating the same data at every layer.
- Keep transport, storage, and framework details behind the boundary. Expose the concepts callers work with.
- Separate business decisions from framework wiring. Prefer pure functions for logic that needs no side effects.

Ask: What fact does this operation rely on, where is it checked, and can it change before use?
