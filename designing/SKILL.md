---
name: designing
description: 'Design or change product UI together with the user on a Paper canvas: new UI, a redesign, polish, a new look, or one part such as a card. To review a design, use /design-review. For copy alone, use /writing.'
argument-hint: "<what to design>"
---

# Designing

You and the user design together on Paper. You propose and draw, and they pick and steer. Stay one step ahead of them and no further, because work built on a pick they haven't made gets thrown away.

## Start

1. **Understand the brief.** If the work's page already exists, read its top-left board and go on from its plan. Otherwise read today's screens and the data that the product holds for this job, and ask only what the user alone can answer.
2. **Show the plan** in one short message: the brief in a line, as you understand it, and the questions to settle, in an order where each rests only on those before it: what a page holds before the form of its parts, and a part's form before its words. Wait for their go. They can reorder, cut, or add steps at any time.

## Each step

1. **Look first.** Name the job that this part does. See how the best products settle this exact question, and how this product settles it elsewhere, and put the screens you found on the canvas. Follow the product's own form only where it's settled and fits this job, because fit comes before consistency.
2. **Draw the options** at every level: a layout, a part's form, a name, a line of copy. Each option is one that a real product uses or that the job calls for, and its board says which. Draw each as frames the user can edit, at real size in the real screen, with the same real data, in every case where it would look different. Leave the rest of the screen as it stands. Where only one answer fits, draw it beside today's version and say why nothing else does. Before your first drawing in a session, read `references/paper.md`, because Paper drops some styles without an error and can place a new board on top of another.
3. **Weigh them and recommend one.** On the board, beside the options, say what each one gives, what it costs, and when to choose it. Say how to think about the choice: the one or two things that decide it. Then name your pick, so that the user can judge the decision and not only your answer.
4. **Check it.** Read the design-knowledge guide for what the step decides, such as layout or copy. Its `SKILL.md` lists the guides. Use the drawing as the person would, and take away what the job doesn't need. Then have one fresh agent check the step's boards against the brief, the source of each fact, and that guide, and fix each finding that holds, because you can't see your own work the way a newcomer does. In Claude Code, launch it with model `opus` and effort `medium`.
5. **Show it and stop.** Send one message: where to look, each call with your pick, and the next step. They may pick, mix options, change the plan, or comment on the canvas, so read their comments before you go on.

## The canvas

Use one page per piece of work, in the product's Paper file, named `<work> · <date>`. Lay it out so that the user finds what needs them and compares options without reading the chat.

- **A row is one comparison:** its boards sit side by side, with today's version first when there is one. A new question, or the same options in another case, starts a new row below.
- **A name says what the board shows:** the step's number, a letter for each option, and "pick" on yours, so that the user can answer "4B". Mark a board that waits for them so that it stands out when zoomed out, such as with an amber outline.
- **The top-left board** says in a few lines what the page is for, the plan, each pick so far, and which calls wait for the user. Keep it current, because it's how either of you picks the work up again after a break.
- **The design as it stands** sits together in one row, with every pick applied.
- **A replaced board stays,** marked Superseded.
- **Keep the page tidy.** Boards line up in their rows with even gaps, and none lies on another. Check this after you add or resize a board, because a board that grows covers the row below.

## After Paper

The user says when to build. After the build, run /design-review in full mode on the running product, unless /planning already did.
