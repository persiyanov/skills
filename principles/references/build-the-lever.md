# Build the Lever

Use tools to make work faster, less error-prone, or easier to check. Repetitive work deserves automation even when each step is easy. Difficult work may still need judgment rather than a script.

- Look for an existing command, query, or test harness before building another.
- Automate when the saved effort or reduced risk pays for building and maintaining the tool. Even a one-off can qualify if checking it by hand would be unreliable.
- Understand the transformation before scaling it. Check representative results, including cases the tool should leave alone.
- Use a deterministic tool for mechanical edits instead of having several agents repeat them independently.
- Make the tool safe to rerun when needed. Keep it with the work if it will remain useful.

Using an existing tool counts. Applying this principle does not require producing a new file.

[Prove It Works](prove-it-works.md) helps decide what the check must establish; automation alone does not make it a good check.

Ask: What would a tool make faster or safer to check here, and does one already exist?
