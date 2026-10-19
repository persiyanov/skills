# Evidence behind Readable

Load this when a rule in SKILL.md needs defending, when the user challenges one, or when deciding a case the rules do not cover. Each finding names its source. Claims marked FOLKLORE are widely repeated but not supported.

## Contents

1. The mechanics: eye movements, word recognition, skimming
2. How people actually read documents: scan patterns, attention, foraging
3. Comprehension limits: working memory, coherence, cognitive load, language-level costs
4. Formatting: what the evidence supports
5. Folklore not supported by evidence
6. The reader model in one page: modes, two layers, role to form
7. Key sources

## 1. The mechanics: what the eye and brain actually do

**Fixations and saccades.** Skilled readers fixate for ~200-250 ms, then jump ~7-9 characters (about one word). Vision is suppressed during the jump. The useful window per fixation is asymmetric: ~3-4 characters to the left, ~14-15 to the right, with actual word identification within ~7-8 characters right of fixation. (Rayner 1998; Rayner et al. 2010, PMC3075059.)

**Most short words are never looked at.** Content words are fixated ~85% of the time, function words ~35%. Two- and three-letter words are fixated only ~25% of the time; words of 8+ letters are almost always fixated, often twice. Length is the strongest predictor of skipping; high frequency adds ~5% and high predictability ~8% to skip rates. (Rayner & Duffy 1988; Brysbaert, Drieghe & Vitu 2005.) Consequence: "not", "if", "or", "unless" are the words most likely to be skipped.

**Regressions** (re-reads) are 10-15% of saccades in normal reading. They are triggered by garden-path parses ("The horse raced past the barn fell"), long subject-verb distance, unfamiliar or low-frequency words, and implausible continuations. (Frazier & Rayner 1982; Grodner & Gibson 2005.)

**Word recognition is letter-parallel, not word-shape.** The "bouma"/word-outline theory typographers cite is refuted; letters within the span are recognized simultaneously. Lowercase reads faster than ALL CAPS (10-14% slowdown in running text, Tinker 1955) because of practice, not shape; the caps penalty disappears for short labels and at tiny sizes. (Larson 2004, Microsoft; Arditi & Cho 2007.)

**Speed.** Adult silent reading averages 238 wpm for nonfiction, 260 wpm for fiction (Brysbaert 2019, 190 studies, n=18,573). "300 wpm average" is wrong. A 1,200-word memo is a five-minute read at full attention.

**Skimming loses uniformly, not selectively.** Masson 1982: pushing rate from 225 to 600 wpm cut recognition of important and unimportant information by about the same amount. Duggan & Payne 2009/2011: skimmers behave as satisficers, reading a paragraph until the rate of new information drops, then leaping to the next paragraph. Skimming beat linear reading of half the text for main ideas only, and only because the texts front-loaded importance. Under time pressure eye movements get sparser (saccades 16% longer, fixations 14% shorter), not qualitatively different. Details and inferences are the first casualties.

**Speed reading, RSVP apps, subvocalization suppression, and Bionic Reading do not work.** The perceptual span is fixed by language processing and cannot be trained wider; RSVP removes regressions and hurts recall; inner speech supports complex syntax. Bionic bolding tested on 2,074 readers: 2.6 wpm slower, identical comprehension. (Rayner, Schotter, Masson, Potter & Treiman 2016; Readwise 2022.)

## 2. How people actually read documents and pages

**They scan.** 79% of users scanned every new page, 16% read word by word (Nielsen 1997). NN/g's 2020 retrospective (500+ participants, 13 years, including Beijing): reading all or most of a page is "still extremely rare."

**The "20% of words" figure is a curve fit, not a measurement.** From 45,237 page views: time on page ≈ 25 s + 4.4 s per 100 words. At 250 wpm that is ~18 words read per 100 added, and a ceiling of 28% on the average 593-word page. Cite as "a fifth to a quarter at most." (Nielsen 2008.)

**Scan patterns, worst to best** (Pernice/NN/g 2019):
- F-pattern: first words of lines and the top of the page. This is the default when the page gives no cues. It is a failure state, not a law; readers skip content based on how text flows and do not know they skipped it.
- Spotted: fixations land on visually distinct bits (bold, numerals, links, capitals) or task words.
- Layer-cake: fixations on headings, then full reading of the one relevant section. The most effective pattern. Works only if headings stand out and accurately summarize their section.
- Commitment: full reading. Needs high motivation, and even then chunking and subheads improve comprehension.
- Bypassing: readers skip list items or sections that all begin with the same words.

**First two words decide.** In the F stem, users see roughly the first 2 words (~11 characters) of each line or link. Content-carrying first words: 85% correctly predicted the destination. (Nielsen 2009.)

**Attention decays down the page.** Eyetracking 2018 (120 participants): 57% of viewing time in the first screenful, 17% in the second, then 7/5/3/2%, then ≤1% per screen. 74% in the first two screens. Chartbeat (2 billion visits): 55% of visits under 15 s active; median scroll depth ~50-60%; 5-10% never scroll. Both agree on a sharp drop after screen one or two, then a hard core who finish.

**Information foraging** (Pirolli & Card 1999): readers use "scent" (headings, first words, link text) to predict value and leave when the expected rate of gain here drops below the rate elsewhere. Every heading, first sentence, and first two words of a bullet is a scent cue that decides whether the next chunk gets read.

**Primacy dominates.** In prose, recency is weak and primacy is strong; rated importance predicts recall independently of position (Freebody & Anderson 1986). Initial mention alone is treated as a signal of thematic importance (Kieras 1980). The first of two texts got more attention and better recall even when readers were told it had been disproved (Schüler et al. 2025).

**Screen vs paper.** Paper has a small comprehension advantage, g ≈ -0.21 to -0.25, larger for expository text and under time pressure, with more overconfidence on screen. "Shallowing" is an interpretation, not a demonstrated mechanism. (Delgado et al. 2018, 171,055 participants; Clinton 2019.) Mobile: comprehension not worse, but hard prose is read ~30 ms/word slower (NN/g 2016, 276 participants).

**Long messages.** Enterprise email: over 54% of reads take under 10 seconds; 33% of reads are rereads. Reply rates peak at ~40-125 words across two independent datasets (Boomerang 40M emails; Yang et al. 2017) and fall past 500. Randomized field trials (Rogers & Lasky-Fink): a 49-word request got 4.8% response vs 2.7% for 127 words; deleting every other paragraph of a fundraising email raised 16% more money; readers judged the same survey shorter when the email was shorter. Failure mode is "early quitting." Code review (SmartBear/Cisco, 2,500 reviews): defect detection falls sharply past ~200 lines and after 60-90 minutes.

## 3. Comprehension limits

**Working memory holds ~4 chunks, not 7.** Miller's 7±2 was rhetorical; Cowan 2001 puts capacity at 3-5. In sentences, clauses behave as chunks: readers access a limited number of clauses, and fusing two clauses into one long sentence is "effortful, at the expense of accessing fewer of the clauses" (Gilchrist, Cowan & Naveh-Benjamin 2008). FOLKLORE: 7±2 applied to bullet counts or menu items; a visible list is recognized, not recalled.

**Distance costs.** Gibson's Dependency Locality Theory: cost grows with the number of new referents between a word and what it attaches to. Integration cost explained 59% of variance in reading times for unambiguous sentences (Grodner & Gibson 2005). Center embedding and long subject-verb gaps are the concrete failure cases. On natural text, predictability (surprisal) predicts even more; both matter.

**The "8/14/43 words = 100%/90%/10% comprehension" table is unverifiable.** Every citation traces to a press-institute claim with no primary publication or method; even GOV.UK's blog commenters noted inconsistent statements. Use the mechanism (dependencies, ~4 chunks), not the table. Sentences can also be too short: chopped fragments lose the connectives that carry logic (Redish & Selzer 1985).

**Given-new.** A sentence whose given information had a direct antecedent was understood in 835 ms vs 1016 ms when a bridging inference was needed (Haviland & Clark 1974). Old information first, new last; every "the X" must point at something the reader already holds.

**Topic sentences.** Main-idea comprehension is best with the topic sentence first, then last, then none (Davey & Miller 1990). When paragraph breaks put elaboration first, readers misidentified main ideas, especially on unfamiliar topics (Goldman et al. 1995).

**Coherence and the expertise reversal.** Low-knowledge readers learn more from a fully coherent text. High-knowledge readers sometimes learn more from a minimally coherent one because gaps force inference, but this holds only for less-skilled expert readers; skilled experts still do better with high cohesion (McNamara et al. 1996; O'Reilly & McNamara 2007). Robust rule: spell out connections for newcomers. Fragile rule: gaps help experts.

**Cognitive load.** Redundancy hurts: restating identical content in full (narration plus identical on-screen text, text restating a self-explanatory figure) impairs learning; keyword pointers help (Adesope & Nesbit 2012). Split attention hurts: integrated text-and-figure beats separated, d = 0.63-0.85, more for complex material (Ginns 2006; Schroeder & Cenkci 2018). Signaling helps: author-provided cues give retention g = 0.53, transfer g = 0.33, across 103 studies, n=12,201 (Schneider et al. 2018). But signaling only some topics suppresses recall of the unsignaled ones (Lorch & Lorch 1996), and highlighting everything except one sentence reads the same as highlighting only that sentence (Rogers & Lasky-Fink). Worked examples before rules: g = 0.48 (Barbieri et al. 2023).

**Language-level costs.**
- Negation adds ~685 ms per verification (Clark & Chase 1972); the negated state is simulated first and negation integrates only after ~1.5 s. Cheaper inside an explicit, expected contrast.
- Passive voice: FOLKLORE that it is unparseable. Passives were read faster than actives in four self-paced experiments; cost appears only on who-did-what questions. Use active for agency clarity and memory, not dogma. Stative passives ("was admired by") are the real ambiguity case.
- Nominalizations: small real cost, mostly for weaker readers (Coleman & Blumenfeld 1963; Duffelmeyer 1979).
- Jargon: lowered fluency, interest, and perceived understanding, and definitions made no difference to perceived difficulty (Shulman et al. 2020, n=650). A defined term still signals "not for you."
- Concreteness: the strongest predictor of comprehensibility and recall in instructional text (Sadoski, Goetz & Fritz 1993).
- Numbers: long numerals take up to 7x more fixations than length-matched words and are skimmed with magnitude errors (de Chambrier et al. 2023). Natural frequencies beat percentages: physicians correct 21% → 87% after translation to "x in 1,000" (Gigerenzer & Hoffrage 1995).
- Curse of knowledge: writers cannot introspect the gap (tappers predicted 50% recognition, listeners got 2.5%). Fixes are reader testing and re-reading after delay.

**Processing fluency.** Needlessly complex vocabulary lowers judged author intelligence, d ≈ 0.44-0.53; a hard-to-read font alone does the same (Oppenheimer 2006). Easy text is judged truer. The opposite claim, that disfluent fonts improve memory, failed to replicate across 17 pooled experiments (Meyer et al. 2015; Sirota 2019; Sans Forgetica null in four labs).

**Plain language outcomes.** Judges and lawyers preferred plain versions 66-86% (Kimble; Flammer). VA letter rewrite: calls 1,128 → 192 per year, response 29% → 45%. NN/g pharma rewrite: task scores 46% → 68% for low-literacy and 82% → 93% for high-literacy users. Sober counterweight (Masson & Waldron 1994): simpler words and sentences doubled paraphrase accuracy but comprehension stayed low because the concepts conflicted with lay beliefs. Readability formulas correlate with comprehension only about half the time, disagree with each other by up to six grade levels, and rewrites that helped jurors sometimes worsened the score. Use as a smoke test, never a target.

**What survives in memory.** Gist, not wording: after ~80 syllables, recognition of form changes falls to chance while meaning changes stay detectable (Sachs 1967). Readers fuse related sentences into one idea and "recognize" sentences they never saw (Bransford & Franks 1971). Retrieval beats restudy: one week later, tested readers recalled 56% vs 42% (Roediger & Karpicke 2006). Advance organizers help modestly (135 studies); end summaries beat beginning summaries on recall in one study, and both beat none. A 2025 meta-analysis of Mayer's principles found pretraining non-significant; the largest effects were removing seductive detail, coherence, and cueing. So a top summary is justified by scanning behavior (57% above the fold), not by learning gains.

## 4. Formatting: what the evidence supports

**Headings.** Improve recall of topics, search, and retrieval (Hartley & Trueman 1983, nine experiments; Lorch & Lorch 1995). Readers of headed text remember more topics but slightly less per topic. Question-form vs statement headings: no overall difference. Marginal vs inline position: no difference. Headings must name the topic in the first two words; generic labels ("Overview", "Introduction") give no scent. No controlled evidence for a specific number of levels; the Columbia/Boeing slide put the decisive fact at level 5 of 6 and it was missed (Tufte).

**Bullets vs prose.** Concise text +58% usability, scannable layout +47%, objective tone +27%, all three +124% (Morkes & Nielsen 1997; small lab study). Conciseness alone outperformed scannability. Bullets improved recall of listed items in 3 of 5 studies, failed when items were heterogeneous, and in 2 studies reduced recall of the surrounding prose (Jansen & Pollmann 2014). Lists strip connectives, so causal and conditional logic disappears (Tufte's PowerPoint critique). Rule: bullets for parallel, homogeneous items; prose for reasoning.

**Tables.** For comparisons on multiple attributes, a table improved comprehension of harms and benefits vs text in a registered RCT and cut answer time 42.9% in a timed study.

**Numbered lists:** no controlled study; number only when order matters.

**Paragraph and line devices.** Front-loaded paragraphs follow from the F-pattern and topic-sentence data. "One idea per paragraph" and specific paragraph lengths are inferences, not measured effects. Line length: 55 characters per line read faster than 25 or 100 (Dyson & Haselgrove 2001); 95 cpl was fastest in Shaikh 2005 with no comprehension difference; adults prefer 65-75. 50-75 is the preference-safe range; speed and preference diverge. Ragged-right beats justified for weaker readers; no study favors justified.

**Typography.** Serif vs sans on screen: null for speed and comprehension, and the best font varies by individual (within-person differences of ~35% in speed, Wallace et al. 2022). 12pt beats 10pt; older adults prefer 14pt. Dark-on-light text beats light-on-dark for proofreading and acuity at normal vision, strongest at small sizes (Piepenbrock et al. 2013/2014). Bold does not slow continuous reading and is detected faster than italic; whole passages in italic read slower. Dyslexia fonts (Dyslexie, OpenDyslexic): null; the one benefit found was reproduced by increasing letter spacing in a standard font.

**Emphasis.** Author signaling works (g = 0.53 retention); reader highlighting is low-utility (Dunlosky et al. 2013). Bolding the one key sentence roughly doubles the chance readers leave with it; emphasis on many lines dilutes to nothing. Keep emphasis well under ~10-15% of text.

**Document length.** Medium's reading data peaks total engaged time at ~7-minute (~1,600-word) posts. Reply rates to email peak at 40-125 words. Code review accuracy collapses past ~200 lines. Progressive disclosure has practitioner support, sparse controlled evidence.

## 5. Folklore not supported by evidence

- Words are recognized by outline; lowercase is faster because of shape.
- Skimming captures "the gist" (loss is uniform unless the text is front-loaded).
- Speed reading, RSVP, subvocalization suppression, Bionic Reading.
- Disfluent fonts improve memory.
- 7±2 as a limit on list items or bullets.
- The 8/14/43-word comprehension table.
- "Users read 20% of a page" as a measurement (it is an upper-bound curve fit).
- The F-pattern as how people read (it is what happens when formatting gives no cues).
- Passive voice is inherently hard to parse.
- Serif vs sans on screen; dyslexia fonts; dark mode is easier on the eyes.
- Headings as questions beat statements.
- Bullets always improve recall.
- A top summary improves learning by a large margin (pretraining effect is non-significant; the benefit is from scanning).
- 66 characters per line is optimal for speed.
- Reader highlighting aids learning.
- BLUF is proven by trials (it is supported indirectly by primacy, signaling, and foraging research, not by trials of BLUF itself).
- Vendor survey numbers (Slack "57% won't finish 8+ sentences", Boomerang reply rates) are correlational or self-reported; use the direction, not the digits.

## 6. The reader model in one page

**Reading modes.** A document is consumed in one of several modes, and most business documents get scan, then locate, then read one section.

| Mode | Reader's question | Behavior |
| --- | --- | --- |
| Scan | Is there anything here for me? | headings, bold, first words, numbers |
| Locate | Where is X? | searches for visual and semantic cues |
| Skim | What is the gist? | samples first sentences and sections |
| Read | I need to understand this | sequential processing of one section |
| Study | I need to remember or use this | rereading, note-taking |
| Reference | What was that exact detail? | non-linear retrieval, weeks later |

**Two interfaces in one document.** The scan layer (title, opening, headings, bold, bullets, tables, callouts) must let a reader reconstruct the major claims without the body. The read layer (paragraphs) supplies reasoning, evidence, qualification, nuance. Formatting is attention routing, not decoration: author-provided signals improve retention (g = 0.53) and change which sentences get fixated (Hyönä & Lorch 2004; Schneider et al. 2018). The two layers must never disagree.

**Minimize reader state.** Every unresolved reference, long dependency, forward-pointing "this", separated definition, or acronym from four paragraphs ago is state the reader must hold. Working memory holds about four chunks. Reduce state before adding formatting.

**Design for re-entry.** Readers are interrupted and return. Clear headings, short chunks, and local context (each section re-anchors its terms) let them recover position without rereading from the top.

**Why typical AI output reads badly.** Heading, intro paragraph, six bullets, heading, intro paragraph, six bullets, conclusion restating everything. Uniform visual weight, identical section shapes, no distinction between claim, evidence, example, and caveat. The fix is representation by role: each kind of information gets the form that fits its job (see the table in SKILL.md).

**The objective.** Not "make these words pleasant to read" but "minimize the text the reader must process to get what they need, without removing their ability to go deeper." A CEO needs recommendation, why, risk, decision. An engineer descends into architecture, constraints, edge cases. Someone two months later searches for "why did we choose X". One document serves all three when it is a hierarchy: purpose line, summary layer, sections each with a takeaway then reasoning then evidence, reference material last.

## 7. Key sources

- Rayner 1998, Psychological Bulletin; Rayner et al. 2016, Psychological Science in the Public Interest ("So much to read, so little time").
- Brysbaert 2019, Journal of Memory and Language (reading rate meta-analysis).
- Larson 2004, "The Science of Word Recognition", Microsoft Typography.
- Masson 1982; Duggan & Payne 2009 (JEP:Applied) and 2011 (CHI).
- Nielsen Norman Group: "How Users Read on the Web" (1997), "How Little Do Users Read" (2008), "F-Shaped Pattern" (2006, 2017), "Text Scanning Patterns" (2019), "How People Read Online" (2020), "Scrolling and Attention" (2018), "First 2 Words" (2009), "Mobile Content" (2016), "Dark Mode".
- Pirolli & Card 1999, Psychological Review (information foraging).
- Delgado et al. 2018; Clinton 2019 (screen vs paper meta-analyses).
- Rogers & Lasky-Fink, "Writing for Busy Readers" (2023) and field experiments.
- Cowan 2001, BBS; Gilchrist, Cowan & Naveh-Benjamin 2008.
- Gibson 1998/2000 (DLT); Grodner & Gibson 2005.
- Haviland & Clark 1974; Clark & Chase 1972; Kieras 1980; Davey & Miller 1990.
- McNamara, Kintsch, Songer & Kintsch 1996; O'Reilly & McNamara 2007; Kalyuga et al. 2003.
- Lorch & Lorch 1993/1996; Hartley & Trueman 1983; Hyönä & Lorch 2004.
- Schneider, Beege, Nebel & Rey 2018 (signaling meta-analysis); Ginns 2006; Schroeder & Cenkci 2018; Adesope & Nesbit 2012.
- Oppenheimer 2006; Alter & Oppenheimer 2009; Meyer et al. 2015 (disfluency null).
- Shulman et al. 2020 (jargon); Sadoski, Goetz & Fritz 1993 (concreteness); Gigerenzer & Hoffrage 1995.
- Kimble, "Writing for Dollars, Writing to Please"; Masson & Waldron 1994; Redish & Selzer 1985.
- Morkes & Nielsen 1997; Jansen & Pollmann 2014 (bullets); Dyson & Haselgrove 2001; Shaikh 2005; Piepenbrock et al. 2014; Arditi & Cho 2007; Readwise 2022 (Bionic Reading).
- Sachs 1967; Bransford & Franks 1971; Freebody & Anderson 1986; Roediger & Karpicke 2006.
- W3C Cognitive Accessibility guidance (COGA design guide; WCAG 1.4.8 Visual Presentation).
- Google Technical Writing courses (audience, lead sentences, lists and tables, key points first).
- Mayer, coherence and signaling principles; Williams & Butterfield 1992 (advance organizers review).
