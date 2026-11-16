# Model the Domain

Encode the real domain in a data structure instead of scattering it across conditionals. Scattered booleans, repeated shape assumptions, and branching spread across files are accidental complexity. A structure that matches the domain makes invalid states unrepresentable and deletes branches. Choosing it when you write the code is cheap. Adding it later looks like a refactor, and people put it off.

Use structures like these:

- A state machine instead of scattered booleans, phases, or lifecycle checks.
- A typed object or model instead of loose parameters or repeated shape assumptions.
- A map, registry, lookup table, or discriminated union instead of branching spread across files.
- A reducer or command and event model instead of ad hoc state mutations.
- A module organized around one body of domain knowledge instead of a sequence such as load, validate, transform, and save. Execution order is not ownership.
- A small module boundary that gathers repeated behavior, ownership, or invariants.
- A queue, cache, index, graph or tree, or normalized collection where the data access pattern calls for it.
- Any other structure that fits. The list above covers the common cases only. When none fits, work out what the code must never allow and how the data gets read, then find the structure that encodes exactly that.

Don't force an abstraction. Prefer boring code if the current shape is already clear, local, and unlikely to grow. Be skeptical of an abstraction that adds indirection without removing branches, duplicated rules, invalid states, or lifecycle risk.

Revisit the model when several branches remember the same domain fact, when booleans must stay in sync, or when modules named after phases repeat the same rules. Choose the structure that removes the repeated decisions. A new branch alone doesn't show that the model is wrong.

For example, `isSent`, `isFailed`, and `isRetrying` as three booleans allow eight combinations, and most of them can't happen. One `status` field with four values allows only the real states.

Ask: What must this code never allow, and which structure makes that impossible instead of checked?
