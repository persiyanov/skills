# Report

First line: conclusion, the total findings after dedup (finding list), the number of root causes, then the five status counts. Count at dedup, not by adding the table; the total equals their sum. Then target and base. Then findings, verification, and Needs your decision, written as a /grilling round so the user can answer from the report. Disproved findings are counted, never listed.

```markdown
**Fix first.** 9 findings from 4 causes, 2 fixed, 1 open, 1 unproven, 1 your decision, 4 disproved.

Target: branch `feat/json-export` against `main`, spec `docs/specs/report-export.md`.

## Correctness

| Where | What | Status |
| --- | --- | --- |
| `export.ts:41` | Records with `active: false` dropped; spec requires the full record set | fixed |
| `export.ts:77` | Stream not closed when the writer throws; reproduced at 10k rows locally | open |
| `export.ts:90` | Cursor pagination may skip a row inserted mid-page; no interleaving proved it, none disproved it | unproven |

## Design

| Where | What | Status |
| --- | --- | --- |
| `export.ts:12` | `formatDate` duplicates `lib/time.ts:isoDate` | fixed |
| `api/export.ts:30` | `?format=json` and `POST /export/json` are two ways to make one request | your decision |

## Verification

- Failing test written for the bug, failed for the predicted reason, passes now.
- Verifier: both fixes hold under varied inputs and callers; no better solution found.
- `npm test`: 142 passed, 0 failed.
- Fixes: 3 files changed, uncommitted.
- Skipped areas: boundaries (no input or config path changed).

## Needs your decision

❓ **Q1** - **Two routes for one export** (`api/export.ts:30`): `?format=json` and `POST /export/json` make the same request. The dashboard is the only caller and uses `POST`.

Question: Keep both routes, or drop `?format=json`?

A. Keep both: no change for anyone.
B. Drop `?format=json`: one way to export.

➡️ B: no caller uses `?format=json`, so nothing breaks.
```

| Status | Meaning |
| --- | --- |
| fixed | Confirmed, fixed, verified in this run |
| open | Confirmed, not fixed: report-only mode, or verification failed and could not be repaired |
| unproven | Plausible, neither confirmed nor disproved |
| your decision | Confirmed, but a real choice /principles cannot settle |
