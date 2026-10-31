# Narrate It as the User

Take the user's point of view and narrate one concrete request: I ask for X; what do I see, what can I do next, how do I know what happened. Keep all three; a design that answers only the first has an interface, not a model. If the narration needs a word the user would not use, implementation details are leaking.

Users do not memorize rules. They compress what they experience into the fewest ideas that predict it, and they try the obvious variations to do so (see [Consistency Protocol](consistency-protocol.md)). Count the ideas one request needs. The story should be as short as the job allows and no shorter: a story kept short by hiding a distinction the user will meet later has delayed an idea, not removed one.

Every idea comes from the world or from us. The world forces a difference when removing it would make the system wrong, unsafe, or impossible; that a provider, a schema, or last quarter's decision made one path easier does not count. An idea the world did not force is a sign of a problem in the system, not the story. Trace an exception back before adding another.

For example, a user who must learn three send states, queued, sending and sent, needs only two to predict everything they can do: pending and done. The third exists because the pipeline has a stage, not because the user has a choice.

When the story reaches a case that goes wrong, say how it fails for the user and whether it recovers by itself. A failure the user can keep in mind as one sentence they would accept is a property to state in their words, not a mechanism to build.

Narrate for the consumer who carries the consequence: when two consumers' stories conflict, the one who can act wrongly on a wrong understanding decides. Write the narration where the decision lives, the spec or the PR, so someone else can count the ideas and disagree. Two or three requests that differ in a way a user would try are enough; a fourth that adds no idea means you can stop.

Take the point of view of real users ([Know What Is True](know-what-is-true.md)), including those who arrive with a goal you did not plan for. Walk each step down to the calls behind it, through every state the user can run into: just started, loading, partial, failed. Narrate before you present. A plain question that changes the design means you skipped a user. After any change, narrate the whole again.

Ask: Narrating this as the user, one request at a time, how many ideas do they need, and which of those did the world force on us?
