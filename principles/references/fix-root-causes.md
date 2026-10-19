# Fix Root Causes

Find what causes the failure and fix it there. Making the symptom disappear does not prove the cause is gone.

- Reproduce the failure when practical. Otherwise use traces, saved state, history, or targeted logging to test possible explanations. Say what remains uncertain.
- Look beyond the failing line. A guard can enforce a missing rule or hide a mistake made elsewhere; establish which.
- Look for evidence that could disprove your explanation. If restarting or clearing state helps, work out what changed.
- Check other places the same cause can produce the same mistake.
- Keep a necessary workaround for an external limitation, and record what would allow its removal.

During an incident, restore service while preserving useful evidence. A restart or rollback can be the right immediate action while the cause remains unresolved.

When two or more fixes that share one premise have failed the same check, question the premise before writing another: [Attack the Premise](attack-the-premise.md). Check the fix itself: [Prove It Works](prove-it-works.md).

Ask: What observation would distinguish this explanation from the strongest alternative?
