# Examples

This file shows each situation in `SKILL.md` as a pair: a draft that breaks the rules, and the same content written well. We made up the names and numbers.

## A reply to the user in a chat

The draft narrates and builds up to its point. The rewrite gives the result first and ends with the one decision it needs.

Instead of:

```text
Here's what I found. I dug into both sessions, and there's a lot going on.
The short version: the process mostly works, but a few things are worth
flagging. Let me walk you through them.
```

Write:

```text
Both sessions follow the new process, and both have stopped. The first ended
its turn after saying it would draw frame 20, so it needs a "go". The second
has waited on a reply since 12:34. Should I add a rule that stops agents
from ending a turn between cells?
```

## A message in the user's voice

The user's past messages to this client are short, start with the client's first name, and make one request. The draft sounds like a brochure.

Instead of:

```text
Hi Anna! I hope this message finds you well. I wanted to reach out to share
some exciting updates on our redesign journey. We've made tremendous
progress and would love to get your thoughts at your earliest convenience!
```

Write:

```text
Anna, the new weekly view is ready to try: <link>. Could you use it in
Monday's review and tell me what's missing? I'll fix it the same week.
```

## Editing someone's text

The rewrite keeps every fact and decision, moves the answer up, and lists what it removed.

Instead of:

```text
We looked at a few options for the cache. Redis was considered, and we also
looked at an in-process cache. After some discussion, and given the p99
spikes we saw last month, which line up with GC pauses on the Redis host,
we decided to go with the in-process cache.
```

Write:

```text
We chose an in-process cache over Redis. The p99 spikes from last month
line up with GC pauses on the Redis host, and an in-process cache removes
that network hop.

Removed: "After some discussion" (no decision in it).
```

## A product update

The draft gives every feature the same size, explains how each one works, and adds a note that only some readers need. The rewrite gives each feature the words its news needs. A new kind of reminder says when to use which.

Instead of:

```text
Saved views
You can now save any filtered list of invoices as a view. Each view keeps
its filters, its sort order, and its columns, and it shows in the sidebar
under Views. If you're an Owner or an Admin, you can also share a view
with your whole team from its menu.

Two kinds of reminders
Reminders now come in two kinds, which gives you more control over when
your clients hear from you. Due-date reminders go out before an invoice is
due. Overdue reminders, which are new, go out after it's late, and they
repeat every week until the client pays.
```

Write:

```text
Saved views
Save any filtered list of invoices as a view, and open it from the sidebar.

Overdue reminders
Use a due-date reminder, like the ones you have, before an invoice is due.
Use an overdue reminder to chase a late one. It repeats every week until
the client pays.
```

Removed: how a view stores its filters (the reader sees that when they save one), the sharing note (the menu shows it to the people who can share), and "which gives you more control" (no fact in it).

## A sentence in a doc

The draft explains a mechanism with terms coined during the work. The rewrite says what happened, who did it, and what it cost.

Instead of:

```text
An answer about the account ended whichever Action it landed on.
```

Write:

```text
LinkedIn answered "account restricted", and Grip marked the message failed.
The recipient never got it, and nobody retried. This affected 30 messages.
```

## An instruction in a skill file

The draft states a rule as a slogan, with no reason. The rewrite gives the rule, the reason, and how to apply it.

Instead of:

```text
- **Make it easy for the user to follow and decide.**
- NEVER put the date first.
```

Write:

```text
- **Show the user what changed and what to decide.** The user steers by
  looking, so put every change on the canvas, next to what was wrong before.
- **Put what every item has first.** If a third of the rows have no date, a
  date slot at the start leaves a hole in those rows, so put the date at the
  end of the line.
```

## A landing page headline

The draft promises everything and proves nothing. The rewrite names an outcome, for whom, and a number that the page can back up.

Instead of:

```text
Revolutionize your finance workflow with seamless, AI-powered automation.
```

Write:

```text
Close your books in two days instead of ten.
For finance teams at companies with 50 to 500 people.
```

## A cold message

The draft flatters and asks for too much. The rewrite gives one real reason for writing and asks for one small step.

Instead of:

```text
Hi Sam, I came across your amazing profile and was really impressed by your
journey! I'd love to set up a 30-minute call to explore potential synergies
between our companies.
```

Write:

```text
Sam, your post on chasing invoice approvals by email matched what we hear
from other finance leads. We built a tool that routes them in Slack instead.
Want me to send a two-minute video of it?
```

## A commit message

The draft says nothing that the diff doesn't. The rewrite says what the commit does and why.

Instead of:

```text
Updated review stuff
```

Write:

```text
Name the cause cell for each gap in design reviews

Designers fixed gaps where they showed up, not where they started, so the
same gap came back in later cells. The review now names the cell where
each gap's cause sits.
```
