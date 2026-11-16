# Attack the Premise

When fixes that share one premise fail the same check, suspect the premise, not the next fix, because each failure is evidence about the premise. Write down the one sentence that every failed fix assumed, and don't start the next fix until you've written it.

Then test the sentence. Name the observation that would disprove it, and go and get it: [Fix Root Causes](fix-root-causes.md). If the premise holds, look elsewhere and keep the evidence. If it fails, design from the corrected fact instead of around the old one: [Radical Simplicity](radical-simplicity.md).

For example, three fixes for a flaky test each made a timeout longer. All three assumed that the test was slow. A run with logging disproved that: two tests wrote to the same temporary file.

Ask: What sentence did every failed fix assume, and what would disprove it?
