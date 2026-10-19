# The Positioning Session

An interactive discovery process that ends with a saved positioning artifact (see `SKILL.md` for where it lives). It is structured discovery, not brainstorming. Every step forces a choice, and the output is a scored, revisable bet.

## Facilitation rules

- **Open with a heads-up.** Before the first question, tell the user in three or four plain sentences what they've started: a positioning session, seven steps, ending with a saved positioning artifact that copy, campaigns, and roadmap decisions will run on. Then offer the entry mode as a numbered choice: (1) Guided, one question at a time, typically 10 to 20 minutes. (2) Context dump: they paste everything they have (site copy, deck, call notes) and you ask only about the gaps. (3) Best guess: you draft the whole thing from the repo and they correct it. Fastest. Recommend the mode that fits what's already available, and mention they can pause anytime because progress is saved.
- **One question per turn.** Never dump the whole questionnaire. Show progress ("Step 3 of 7").
- **Stay conversational.** One or two sentences of framing per question. Explain a concept only at the moment a choice depends on it. The user came to make decisions, not to attend a lecture.
- **Offer 3 or 4 numbered options** adapted to what you already know about the product, plus "or describe your own." When you have a recommendation, put it first and mark it "(recommended)" once. Don't re-pitch it in prose.
- **Use what you were given.** Anything in the invocation, a pasted context dump, or the repo (README, landing copy, marketing docs, specs) counts as answers given. Skip what it covers. Don't re-ask.
- **Auto-draft when possible.** If the project repo is the product, offer to draft a best-guess positioning first and have the user correct it. Correcting a draft is faster than answering questions cold. Present the draft, then ask only about the weak slots. Auto-draft covers segment mapping, anchors, value, and outputs (steps 2, 4, 5, 6). The step-3 choice always goes to the user. Never auto-decide the bet.
- **Push past vague answers, twice.** The first answer is usually the polished version, and the real one comes on the second or third push. "Businesses that need better tools" fails every quality check. Ask "why do they need that?" until you hit a workflow, a named alternative, and a felt problem. A wrong-but-specific answer beats a safe-but-vague one because you can test it. The register matters. Soft: "That's a big market! What kind of tool?" Forcing: "There are 10,000 AI developer tools. What specific task does a specific person waste 2+ hours a week on that yours eliminates? Name the person." Aim for the second.
- **Take a position on every answer.** No "that's an interesting approach," no "there are many ways to think about this." Say whether the answer holds, why, and what evidence would change your mind. When an answer is strong, name what made it strong in one line and move to a harder question. Diagnosis is the job, and comfort means you haven't pushed hard enough.
- **Impatience protocol.** If the user says "just decide" or "skip the questions," defend the session once: the hard questions are the value, so offer to ask only the two most load-bearing remaining ones (usually the alternative and the segment choice). If they push back again, respect it: switch to compressed mode, fill the rest with marked best guesses, and save as `Hypothesis`.
- **Compressed mode.** If the user is mid-task ("just write my landing page"), run all steps at best-guess speed in one short exchange: draft the segment triples and scores yourself, put the segment choice to the user as one question (the choice is never skipped, even here), draft anchors, value, and the step-6 outputs as best guesses, save the artifact with status `Hypothesis`, then do the task. Never block a task on a full workshop, and never APPLY from an unsaved or choiceless session.
- **Interruptions.** If the user pauses or detours, save partial progress into the artifact with status `Draft` so nothing is lost. `Draft` means resume the session before any APPLY. `Hypothesis` means a usable bet, expected to change.

## Step 0: Intake

Gather before questioning. Ask only for what you can't find yourself.
- Current homepage copy, sales deck, or pitch. This is the current positioning, stated or accidental.
- Who they think the customer is, competitor names, win/loss or sales-objection notes.
- Where positioning breaks today: sales calls, website bounce, flat outbound, wrong comparisons.
- The near-term revenue goal, or a stage proxy (pre-PMF, first $1M, scaling). This sets specificity for everything after.

## Step 1: Entry path

Pick the path by where the user's conviction lives. Ask if unclear. Adapt rather than force.

1. **Customer-focused.** Deep conviction about a specific audience, often their own former role. Start from the audience, map their workflows, then the alternatives used for each, then layer differentiation to find the strongest ground.
2. **Technology-focused.** Conviction about a capability with the market unclear, common for AI products. Start from the most compelling capabilities, work backward to alternatives that are dramatically weaker, then find who uses those alternatives and hurts most.
3. **Competition-focused.** Conviction about disrupting a category. Start from the products to replace, work backward to the audiences who hate them most and why.

All three converge on the same target: segments defined by workflow, alternative, and problem.

## Step 2: Map candidate segments

Build 2 to 5 candidate segments, each a full triple:
- **Workflow.** What are they doing, or about to start doing? Be concrete: "running cold outbound," not "growing revenue."
- **Alternative.** How do they do it today? Name it: a vendor, a tool stack, a spreadsheet, a manual process, or nothing. The sharpest elicitation: "if the product disappeared tomorrow, what would these customers use instead, including spreadsheets and manual work?" If the user names only venture-backed competitors, ask what the non-buyers do. That is usually the real market.
- **Problem.** What's deficient about the alternative, in the customer's words if possible? If the honest answer is "nothing, it's fine," that segment needs expensive education or isn't a segment.
Tag firmographics (company type, department, stage) per segment if useful.

**Landscape check (default, not optional).** Ground the map in the live landscape before scoring. Never rely on the user's memory of competitors when you can verify: how do the named alternatives position themselves today, what vocabulary does the category use, who else claims the same shelf? Run it with whatever the host provides. Web search, page fetches, or research subagents all work, and subagents are the preferred route since they can sweep several competitors in parallel while the conversation continues. Search generalized category terms plus the named competitors, never the user's unreleased product name or stealth idea. Synthesize what you find in three layers. Layer 1: what everyone already knows about this category, the conventional positioning. Layer 2: what current discourse says, read skeptically, since search results are inputs to your thinking rather than answers. Layer 3: first-principles reasoning about where the conventional wisdom is wrong for this specific product. Layer 3 is the prize. A clear, evidence-backed reason the category's standard framing fails here is a positioning wedge, so name it when you find one. Report where the user's read contradicts the field. That contradiction is either their differentiation or their blind spot, and the session must decide which. Only when the host has no research tools at all: proceed on the user's knowledge and say so explicitly.

## Step 3: Score and choose the bet

Score each candidate 1 to 5 on the four criteria (rubric in `method.md`): problem severity, differentiation, access, size. Judge size against the revenue goal from Step 0, not the vision. Every score names its evidence, and rank the evidence honestly: behavior counts, money counts, panic-when-it-broke counts. Waitlists, signups, and "people say it's interesting" don't. Interest is not demand. Write a score you can't evidence as "?" or a range, never a confident number. Severity and access are facts only the user has (sales calls, reply rates, communities they can reach), so ask for their read on those two before recommending. Differentiation and size you can draft from the material and have them correct. Present the scores in a small table with the evidence, name the tradeoffs, recommend one segment, and ask the user to choose. Then stop and wait. A clearly winning segment is still the user's decision. Writing the recommendation and rolling forward into anchors is the failure mode this gate exists to prevent. Call it a strategic bet, revisable later, not a life sentence. If the user resists choosing, say plainly: without the bet every downstream artifact stays vague, and vague messaging is the most expensive choice of all.

If differentiation scores weak everywhere, stop and say so. Either narrow the segmentation further or the product needs to change. Positioning can't manufacture an advantage that isn't there.

## Step 4: Choose anchors

For the chosen segment:
- Pick the primary anchor: product category, use case, or competitive alternative. Guidance: a well-understood category with budget favors the category anchor. A category that would mis-frame the product or invite the wrong comparison favors the use-case anchor, the early-stage default. A segment that universally knows and resents one incumbent favors the competitive-alternative anchor.
- Check specificity: would a stranger, hearing only the anchor, correctly file what this is? "CRM" passes. "Platform" fails.
- Add one or two secondary anchors (company type, department, outcome) to sharpen the ICP.
- Note who the anchor choice excludes. Exclusion is part of the design. Record it.

## Step 5: Articulate unique value

- State the problem linked to the primary anchor. Examples: "Most CDPs are inflexible and lock you in." "The LinkedIn inbox is slow and annoying." "Getting SOC 2 compliant eats months."
- State the differentiated solve: the specific capabilities and the first-order outcomes they produce. Identify the one value vector where the product is provably superior for this segment, on a demo or with a number.
- Collect proof: metrics, customers, demoable moments. Cut or reword any claim with no possible proof until it is falsifiable.
- If a real shift or foil narrative exists (something changed in the world that obsoletes the old way), capture it. It powers the About page, deck, and demand-gen content. Don't invent one. Separately, capture the transformation if one is real: the aspirational activity or outcome the product enables, the horseback riding to the product's saddle. It needs no world-shift, only genuine ambition beyond the tool.

## Step 6: Draft outputs and stress-test

Draft in this order:
1. **One-liner.** Primary plus secondary anchors: "[Product] is a [category/use case] that helps [who] [do what]."
2. **Moore positioning statement.** For / that need / is a / that / Unlike / provides. The "is a" slot takes the primary anchor in whatever form was chosen: a category anchor fills it directly, a use-case anchor fills it as "a way to [use case]" (or the nearest serviceable category label, stated as secondary). Don't invent a category the session just rejected.
3. **Hero answers.** The three homepage questions: what is it, what does it replace, what makes it different or better.
4. **A remarkable hook candidate.** The sharpest one-sentence version. Construction: package the value so it costs nothing to repeat, as a short rhythmic phrase, a vivid analogy, or an anecdote-sized concrete claim ("Finally, WiFi that works," "no late fees," "replace eight credit cards with one," "how much is my home worth?"). Test: would a user repeat it verbatim to a colleague? Optional. A forced hook is worse than none.

Stress-test aloud with the user:
- Would the target customer recognize themselves in the first line?
- Is the "Unlike" the alternative buyers weigh in real deals?
- Is every claim falsifiable or demoable?
- Cocktail-party test: could a user repeat the one-liner to a friend accurately?
- Would this answer a roadmap question ("should we build X?")?
Revise anything that fails. Two failed revisions on the same slot usually means a wrong choice upstream, in segment or anchor. Go back one step rather than word-smithing.

## Step 7: Save and hand off

- Write the artifact to its resolved location (`.agents/positioning.md`, or the root `POSITIONING.md` — see `SKILL.md`) per `template.md`. Status `Active bet`, or `Hypothesis` for pre-PMF and compressed sessions. Record the runner-up segments and why they lost in Parked segments. Then apply the stop-slop skill to the finished file.
- Tell the user the file is the source of truth for copy, campaigns, and roadmap filtering, and that invoking the skill again applies it or rethinks it.
- Suggest the natural next step, usually the homepage hero rewrite or the first SOM campaign, and offer to do it now using `apply.md`.
- If the team is more than one person, remind them to socialize the doc with sales, product, and CS before shipping messaging. Positioning that only marketing adopts reverts within a quarter.
