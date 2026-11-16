# Know What Is True

Before you design a change, write down what's true where the design meets reality. A design is only as good as its facts, and an unwritten fact fails last and costs the most: in review, in production, or in a plain question from someone who knew it. Write down the following:

- **The system as it is.** For each concept that the change touches, write each field's meaning, source, and clock, and when and how it changes. Add each invariant and what enforces it, and every path that reads or writes it. Read all of it from the code, not from memory or the last spec. A removal also removes whatever the removed code enforced, so list that too.
- **The people who use it.** Write who they are and what they actually do, from customers, usage data, and their requests, never from invented personas.
- **The world it depends on.** Write how vendors, platforms, and data behave under real use: daily volume, bursts, failure responses, and real payloads across the whole population, not one convenient slice. Run the cheap test, and test the vendor or library live.
- **How others solve it.** Write down the conventions, library defaults, and vendor guidance for the same problem.
- **What it costs** per real use, when cost can decide the design.

Measure cheap unknowns before you build on them. A number that a decision depends on names its source, its population, and its date, because a number from the wrong population is worse than none. For example, "LinkedIn rejects 2% of sends" means little until it says "2% of 4,100 sends from 30 accounts, Nov 1 to Nov 14." Keep what you learn where the next change will find it, not in a conversation that compaction will erase.

When a design meets a fact that it didn't know, the fact wins.

Ask: Which facts does this design stand on, where are they written, and which did I check rather than assume?
