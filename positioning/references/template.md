# The Positioning Artifact

Lives at `.agents/positioning.md`, or at a `POSITIONING.md` in the project root (see `SKILL.md` for how the location resolves). The project-local source of truth for positioning. Copy, campaigns, and roadmap filtering read it. The session writes it. EVOLVE updates it.

## Maintenance rules

- **Status** is one of three values. `Draft`: session interrupted, incomplete. Routing resumes the session before any APPLY. `Hypothesis`: a complete bet the user chose, but unvalidated, from a pre-PMF or compressed session. APPLY proceeds with a stated caveat and names the guessed slots. `Active bet`: chosen and validated in use. Promote `Hypothesis` to `Active bet` when the market confirms the triple through repeated customer patterns, closed deals in the segment, or resonating outbound. The cheapest confirmation test: read the positioning statement aloud to five target customers. Nods promote it, confused looks revise it.
- **The artifact states only the current bet.** Git history is the record of past bets and why they changed, so commit each substantive change on its own, with the why in the message.
- **Self-contained.** The artifact carries everything downstream work needs: segment, anchors, problem statements in customer words, value vector, proof, messaging rules. Copy, campaigns, and roadmap filtering never depend on another file being present. Other marketing docs in the repo are session input, not runtime dependencies.
- **Keep parked segments.** They are the sequencing plan and the re-scoring shortlist for the next EVOLVE.
- Keep it under ~150 lines.

## Template

```markdown
# Positioning: [Product]

*Status: Active bet | Hypothesis | Draft*
*Last updated: [date]*
*Revenue context: [near-term goal or stage the specificity is calibrated to]*

## One-liner

[Product] is a [primary anchor] that helps [secondary anchors: who] [do what].

## The bet: target segment (ICP)

- **Workflow:** [what they're doing / about to do]
- **Competitive alternative:** [named: vendor, stack, spreadsheet, process, nothing]
- **Problem with it:** [what's deficient, that they already feel, in customer words]
- **Further segmentation:** [company type, department, stage, or "none"]
- **Scorecard:** severity [n]/5 · differentiation [n]/5 · access [n]/5 · size [n]/5
- **Access channel:** [where we reliably reach them]

## Anchors

- **Primary:** [category | use case | competitive alternative]: "[exact phrasing]"
  - Why this anchor: [one line]
  - Who it excludes (accepted): [one line]
- **Secondary:** [1–2: company type / department / outcome]

## Unique value

- **Problem statement (linked to anchor):** "[e.g. Most CDPs are inflexible and lock you in]"
- **Differentiated solve:** [capabilities and their first-order outcomes, with the enabling features named in plain language]
- **Value vector:** [the one dimension where we are provably superior]
- **Proof:** [demoable moment, metric, customer. Every claim falsifiable]
- **Shift/foil narrative:** [what changed in the world, plus the old-way villain, or "none"]
- **Transformation:** [the aspirational activity or outcome we sell beyond the tool, or "none"]

## Positioning statement (Moore)

**For** [target customer]
**that need** [problem/underserved need],
[Product] **is a** [primary anchor: category, or "a way to <use case>"]
**that** [first-order benefit].
**Unlike** [the real alternative],
it **provides** [differentiation].

## Hero answers

1. **What is it:** …
2. **What does it replace:** …
3. **What makes it different/better:** …
- **Hook candidate:** "[the remarkable one-sentence version, or omit]"

## Messaging rules

- **SAM-level (homepage, deck):** [the cross-segment framing]
- **SOM-level (landing pages, campaigns):** [per-segment framings, as proven]
- **Words to use:** [customer verbatims, anchor phrasing]
- **Words to avoid:** [buzzwords, wrong-shelf terms, 2nd-order benefit claims]

## Parked segments (sequence / runner-ups)

| Segment (workflow + alternative + problem) | Scores (sev/diff/acc/size) | Why parked | Revisit when |
|---|---|---|---|
| | | | |
```
