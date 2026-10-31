# skills

Agent skills I use with Claude Code and Codex. Each folder is one skill: a `SKILL.md` plus any references it loads.

Install by cloning and symlinking a skill folder into `~/.claude/skills/` or `~/.codex/skills/`.

## Mine

| Skill | What it does |
|---|---|
| brainstorming | Turns a problem into an approved spec by grilling the user |
| planning | Builds an approved spec into ordered, verifiable PRs |
| zen-review | Reviews a change for correctness and design, then fixes and verifies |
| distill | Questions each contract a design makes and proposes the smallest correct one |
| thebar | Compares work with the ideal end state when it goes off track |
| readable | Presents docs, specs and reports so a reader can find and use them |
| positioning | Product positioning: segment, alternative, differentiation |
| product-design | Research-first UI and UX design (built on Refero's design skill, see below) |

## Borrowed

Thanks to these authors. Most skills below are modified from the original; the linked upstream is the source of truth for theirs.

| Skill | Source | License |
|---|---|---|
| principles | [pstack](https://github.com/cursor/plugins/tree/main/pstack/skills) by Lauren Tan (poteto), heavily edited and extended | MIT |
| sharpen | [pstack](https://github.com/cursor/plugins/tree/main/pstack/skills) by Lauren Tan, via [backnotprop/bro](https://github.com/backnotprop/bro) | MIT |
| bro, facts, readback, clean-room | [backnotprop/bro](https://github.com/backnotprop/bro) | No license upstream |
| grilling | [Matt Pocock's skills](https://github.com/mattpocock/skills) | MIT |
| copywriting, marketing-psychology, product-marketing-context | [marketingskills](https://github.com/coreyhaines31/marketingskills) by Corey Haines | MIT |
| show-me | [HumanLayer skills](https://github.com/humanlayer/skills/tree/main/plugins/show-me) (ASCII diagrams instead of Mermaid) | MIT |
| product-design (in part) | [Refero design skill](https://github.com/referodesign/refero_skill), without the Refero MCP parts | MIT |
| stop-slop | [Hardik Pandya](https://github.com/hardikpandya/stop-slop) | MIT |
| interface-craft | Josh Puckett, [DialKit](https://github.com/joshpuckett/dialkit) | Not stated |
| writing-clearly-and-concisely | [Jesse Vincent (obra)](https://github.com/obra/the-elements-of-style); *The Elements of Style* is public domain | Not stated |
| agent-browser | [Vercel Labs](https://github.com/vercel-labs/agent-browser) | Apache-2.0 |
| context7-mcp | [Upstash Context7](https://github.com/upstash/context7) | MIT |

If you wrote one of these and want it credited differently or removed, open an issue.
