# Type System Discipline

Use types to prevent illegal states, mixed-up values, and forgotten cases. Add precision when it prevents a concrete mistake, including a silent wrong result.

- **Make invalid combinations impossible.** Use variants such as `{ kind: 'open' } | { kind: 'done'; at: Date }` instead of independent flags and optional fields. Derive redundant values instead of keeping them in sync.
- **Construct valid values.** A non-empty list can be a head plus a rest. Validate properties the representation cannot enforce: calling a number a duration does not make it nonnegative. Callers should not have to repeat those checks.
- **Give different meanings different types.** `UserId` and `OrderId` should not be interchangeable just because both are strings. Use the language's newtypes, opaque types, or brands.
- **Parse external data.** Declaring a type does not validate incoming JSON. Check it at the boundary ([Boundary Discipline](boundary-discipline.md)), then trust the guarantees established there.
- **Justify casts.** Prefer narrowing, validation, or a better model. When a language or library limitation requires a cast, keep it local and make its justification clear.
- **Check every variant.** Use exhaustive matching so adding a variant makes the compiler flag forgotten cases. Use the language's exhaustiveness checks or an explicit guard such as TypeScript's `never` check.
- **Derive types from the schema that defines them.** Avoid maintaining a duplicate by hand. A domain model with a different job can have its own representation and an explicit conversion.
- **Keep types only as precise as needed.** Summing a list works for an empty one. Taking its first element needs a non-empty input or an explicit absent result.

Ask: What mistake does this stronger type prevent, and is that worth the extra work to construct and use it?
