# A running build

The design is built in the running product, on its own branch.

- **Build with the product's own components and tokens,** with real data, a test login for each role from the repo's seed or example files, and a way to reach each state by its address or by test data. Data the API doesn't have yet is mocked on the branch, marked, and listed under the spec's Open questions as an API change.
- **Forks are variants behind a switch** in the real page, one shown at a time, so that the user flips between them (Emil Kowalski, "prototype"; interfaces plugin, "variant"). Show screenshots of the variants side by side as well.
- **A value that people judge by feel,** such as a duration or a density, gets a live control (Interface Craft, "Live Tuning").
- **Commit before you fix a review's findings,** and give the verifier both commits, so that it can run the design before and after.
- **Measure from the page,** with design-review's `scripts/layout-overlay.js` for alignment and design-knowledge's `scripts/style-inventory.js` for values, never from a screenshot's pixels.
- **Show the user screenshots,** with the address and the steps that reach each state.

## The user's comments

The user comments on the running page with Agentation, whose MCP server holds their comments.

1. At the start of each session, and after you show the design, read every pending comment with `agentation_get_all_pending`. While you wait for the user, `agentation_watch_annotations` returns new comments as they come.
2. Acknowledge each one with `agentation_acknowledge`, so that the user sees it was read.
3. Then answer it on the page:
   - fixed: make the fix, check it, and resolve the comment with `agentation_resolve` and a one-line summary of what changed;
   - a question back: `agentation_reply`, and leave the comment open;
   - you disagree, such as on a taste call: `agentation_reply` with your reason and the evidence, and leave the comment open, because the decision is theirs;
   - withdrawn by the user, or the same as another comment: `agentation_dismiss`, with the reason.

If the tools aren't connected, say so once, and work from the comments the user pastes.
