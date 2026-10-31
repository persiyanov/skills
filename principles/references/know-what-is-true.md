# Know What Is True

Before designing a change, write down what is true where the design meets reality. A design is only as good as its facts, and an unwritten fact fails last and costs most: in review, in production, or in a plain question from someone who knew it.

- **The system as it is.** For each concept the change touches: each field's meaning, source, and clock, and when and how it changes; each invariant and what enforces it; every path that reads or writes it. Read it from the code, not from memory or the last spec. A removal removes what the removed code enforced, so list that too.
- **The people who use it.** Who they are and what they actually do, from customers, usage data, and their requests. Not invented personas.
- **The world it depends on.** How vendors, platforms, and data behave under real use: daily volume, bursts, failure responses, and real payloads across the whole population, not one convenient slice. Run the cheap test; test the vendor or library live.
- **How others solve it.** Existing solutions: the conventions, library defaults, and vendor guidance for the same problem.
- **What it costs,** per real use, when cost can decide the design.

Measure cheap unknowns before building on them. A number a decision depends on names its source, population, and date; a number from the wrong population is worse than none. Keep what you learn where the next change will find it, not in a conversation that compaction will erase.

When a design meets a fact it did not know, the fact wins.

Ask: Which facts does this design stand on, where are they written, and which did I check rather than assume?
