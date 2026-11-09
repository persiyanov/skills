# Report

Build the report from the findings file, in the format below.

- The first line gives the conclusion, the number of findings, the number of root causes, the status counts for correctness and for shape, and the disproved count. The counts add up to the number of findings in the file. Do not count table rows.
- Leave disproved findings out of the tables. The findings file lists each with its proof.
- Write Needs your decision as a /grilling round, so the user can answer from the report.

```markdown
**Fix first.** 10 findings from 4 causes. Correctness: 1 fixed, 1 open, 1 unproven. Shape: 1 fixed, 1 left, 1 your decision. 4 disproved.

Target: branch `feat/json-export` against `main`, spec `docs/specs/report-export.md`.

## Correctness

| Where | What | Status |
| --- | --- | --- |
| `export.ts:41` | Records with `active: false` are dropped, and the spec requires the full record set | fixed |
| `export.ts:77` | The stream stays open when the writer throws. Reproduced locally at 10k rows | open |
| `export.ts:90` | Cursor pagination may skip a row inserted mid-page. No interleaving proved it and none disproved it | unproven |

## Shape

| Where | What | Status |
| --- | --- | --- |
| `export.ts:12` | `formatDate` duplicates `lib/time.ts:isoDate` | fixed |
| `export.ts:55` | Merging `toRow` and `toCsvRow` changed how quoted commas are written, so the merge is reverted | left |
| `api/export.ts:30` | `?format=json` and `POST /export/json` are two ways to make one request | your decision |

## Verification

- The failing test for the dropped records failed for the predicted reason and passes now.
- Verifier, correctness pass: the dropped-records fix holds. The stream fix broke twice on the same premise, so its finding is open.
- Verifier, shape pass: the `formatDate` fix holds. The `toRow` merge broke and is reverted.
- `npm test`: 142 passed, 0 failed.
- Fixes: 3 files changed, uncommitted.
- Findings file: `<scratch>/json-export-findings.md`.
- Skipped angles: boundaries, because no input or config path changed.

## Needs your decision

One /grilling question for each finding marked your decision.
```

| Status | Meaning |
| --- | --- |
| fixed | Confirmed, fixed, and verified in this run |
| open | Confirmed and not fixed, because the run was report-only or because the fix failed verification and could not be repaired |
| left | Confirmed and not changed, because the spec or the user already decided it, or because its shape fix broke and was reverted |
| unproven | Plausible, and neither confirmed nor disproved |
| your decision | Confirmed, and either it changes a definition or a contract, or it is a real choice /principles cannot settle |
