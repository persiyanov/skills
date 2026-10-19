# Narrate It as the User

Take the user's seat and narrate one concrete request: I ask for X; what do I see, what can I do next, how do I know what happened. Keep all three; a design that answers only the first has a surface, not a model. If the narration needs a word the user would not use, the design is leaking.

Users do not hold rules. They compress what they experience into the fewest ideas that predict it, and they test the obvious axes to do so (see [Consistency Protocol](consistency-protocol.md)). Count the ideas one request needs. The story should be as short as the job allows and no shorter: a story kept short by hiding a distinction the user will meet later has deferred an idea, not removed one.

Every idea is either the world's or ours. The world forces a difference when removing it would make the system wrong, unsafe, or impossible; that a provider, a schema, or last quarter's decision made one path easier does not count. An idea the world did not force is a suspicion about the system, not the story. Trace an exception back before adding another.

For example, a user who must learn three send states, queued, sending and sent, needs only two to predict everything they can do: pending and done. The third exists because the pipeline has a stage, not because the user has a choice.

When the story reaches a case that goes wrong, say which way it fails for the user and whether it heals by itself. A failure the user can hold as one sentence they would accept is a property to state in their words, not a mechanism to build.

Narrate the seat that carries the consequence: when two consumers' stories conflict, the one who can act wrongly on a wrong model decides. Write the narration where the decision lives, the spec or the PR, so someone else can count the ideas and disagree. Two or three requests that differ along an axis a user would try are enough; a fourth that adds no idea is the signal to stop.

Take the seats of real users ([Know What Is True](know-what-is-true.md)), including those who arrive with a goal you did not plan for. Walk each step down to the calls behind it, through every state the user can meet: just started, loading, partial, failed. Narrate before you present. A plain question that changes the design marks a seat you skipped. After any change, narrate the whole again.

Ask: Narrating this as the user, one request at a time, how many ideas do they need, and which of those did the world force on us?
