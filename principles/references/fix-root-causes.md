# Fix Root Causes

Find what causes the failure, and fix it there, because making the symptom disappear doesn't prove that the cause is gone.

- Reproduce the failure when practical. Otherwise use traces, saved state, history, or targeted logging to test possible explanations. Say what remains uncertain.
- Look beyond the failing line. A guard can enforce a missing rule or hide a mistake made elsewhere. Establish which one it does.
- Look for evidence that could disprove your explanation. If restarting or clearing state helps, work out what changed.
- Check the other places where the same cause can produce the same mistake.
- Keep a necessary workaround for an external limitation, and record what would let you remove it.

For example, a report job fails on the first day of each month. A retry would hide the failure. The cause is a date filter that excludes the first day, so fix the filter, and check the other reports that copied it.

During an incident, restore service while you keep useful evidence. A restart or rollback can be the right immediate action while the cause remains unresolved.

When two or more fixes that share one premise have failed the same check, question the premise before you write another: [Attack the Premise](attack-the-premise.md). Check the fix itself: [Prove It Works](prove-it-works.md).

Ask: What observation would distinguish this explanation from the strongest alternative?
