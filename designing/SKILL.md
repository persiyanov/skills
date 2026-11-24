---
name: designing
description: 'Design or change product UI together with the user on a Paper canvas: new UI, a redesign, polish, a new look, or one part such as a card. To review a design, use /design-review. For copy alone, use /writing.'
argument-hint: "<what to design>"
---

# Designing

Design together with the user on Paper. You propose and draw, and the user picks and steers. Stay one step ahead and no further, because work built on a pick the user hasn't made gets thrown away.

## Start

1. **Understand the brief.** If a page for this work exists, continue from the plan board. Otherwise read the current screens and the data that the product holds for this job, and ask only what the user alone can answer.
2. **Show the plan** in one short message: the brief in a line, and the questions to settle, each resting only on those before it. Wait for a go.

## Each step

1. **Look first,** for every question, however small. Name the job that this part does. Find how the best products settle this exact question and how this product settles it elsewhere, and put those screens on the canvas. Follow the form the product already uses only where it fits this job, because fit comes before consistency.
2. **Draw the options** at every level: a layout, the form of a part, a name, a line of copy. Each is one that a real product uses or that the job calls for. Draw them at real size in the real screen, with the same real data, in each case where they'd look different. Where only one answer fits, draw it beside the current version and say why. Before the first drawing in a session, read `references/paper.md`, because Paper drops some styles without an error.
3. **Weigh them and recommend one.** Beside each option, give a line for what it gives, a line for what it costs, and where it comes from. Then say in a line what decides the choice, and name a pick, so that the user can judge the decision and not only the answer.
4. **Check it.** Read the design-knowledge guide for what the step decides, such as layout or copy. Use the drawing as the person would, and take away what the job doesn't need. Then have a fresh agent, which hasn't read the chat, check the boards of the step against the brief, the source of each fact and that guide, and for real references, real options, what each costs, and a pick. Fix each finding that holds. In Claude Code, launch it with model `opus` and effort `medium`.
5. **Show it and stop.** Send one short message: where to look, the references on the board, each open question with the pick, and the next step. The user may pick, mix options, change the plan, or comment on the canvas, so read the comments before going on.

## The canvas

Use one page per piece of work, in the Paper file of the product, named `<work> · <date>`. The user reviews by looking, so lay the page out for review.

- **Show over tell.** What differs between options is drawn and marked, and words say only what a drawing can't. A paragraph on a board means something wasn't drawn.
- **Open questions stand out,** also when zoomed out, such as with an amber outline. They come first on a board, and a settled question takes a line.
- **A name says what the board shows:** the step number, a letter for each option, and "pick" on the recommended one, so that the user can answer "4B". When a step holds several questions, number each (4.1, 4.2) and letter the options of each from A.
- **The page reads like text.** Boards of one step stay together, with the current version first, and steps run left to right, then down, so that nothing is a long scroll away.
- **The plan board** holds the plan, each pick so far, and the open questions, so that the work can be picked up after a break. The plan board and the design as it stands, with every pick applied, sit beside the step that waits.
- **A replaced board stays,** marked Superseded.
- **Boards sit clear of each other.** Check after adding or resizing a board, because a board that grows covers the one below.

## After Paper

The user says when to build. After the build, run /design-review in full mode on the running product, unless /planning already did.
