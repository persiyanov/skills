# Minimize Reader Load

Make code easy to understand by reducing what readers must trace and keep in mind. A flat file full of mutable globals can be as difficult as a stack of thin wrappers.

- Remove layers that only forward work. Keep a helper, adapter, or boundary when it hides a useful decision, even if it has only one caller; the number of files alone does not decide whether a layer belongs.
- Give callers a small interface that lets them forget the implementation. A broad interface that hides little makes them learn both.
- Keep mutable state as local as possible. Prefer returning a value to changing shared state, and deriving a value to keeping copies in sync.
- Decide a shared rule once, in the code responsible for it, so callers use the result instead of repeating the decision and readers learn it in one place.

[Guard the Context Window](guard-the-context-window.md) applies the same concern to the agent's working context.

Ask: Can a reader answer "where does this come from?" and "what can change it?" without reconstructing unrelated details?
