# Narrate It as the User

Take the user's point of view and narrate one concrete request: "I ask for X. What do I see, what can I do next, and how do I know what happened?" Keep all three questions, because a design that answers only the first has an interface, not a model. If the narration needs a word that the user wouldn't use, implementation details are leaking.

Users don't memorize rules. They compress what they experience into the fewest ideas that predict it, and they try the obvious variations to do so (see [Consistency Protocol](consistency-protocol.md)). Count the ideas one request needs. Keep the story as short as the job allows and no shorter. A story that stays short by hiding a distinction that the user will meet later has delayed an idea, not removed one.

Every idea comes from the world or from us. The world forces a difference when removing it would make the system wrong, unsafe, or impossible. A provider, a schema, or last quarter's decision that made one path easier doesn't count. An idea the world did not force is a sign of a problem in the system, not the story. Trace an exception back before you add another.

For example, a user who must learn three send states, queued, sending, and sent, needs only two to predict everything they can do: pending and done. The third exists because the pipeline has a stage, not because the user has a choice.

When the story reaches a case that goes wrong, say how it fails for the user and whether it recovers by itself. If the user can keep a failure in mind as one sentence that they'd accept, state it in their words as a property instead of building a mechanism for it.

Narrate for the consumer who carries the consequence. When two consumers' stories conflict, the one who could act wrongly on a wrong understanding decides. Write the narration where the decision lives, such as the spec or the PR, so that someone else can count the ideas and disagree. Two or three requests that differ in a way that a user would try are enough. When a fourth adds no idea, stop.

Take the point of view of real users ([Know What Is True](know-what-is-true.md)), including those who arrive with a goal that you didn't plan for. Walk each step down to the calls behind it, through every state that the user can run into: just started, loading, partial, and failed. Narrate before you present. A plain question that changes the design means you skipped a user. After any change, narrate the whole again.

Ask: Narrating this as the user, one request at a time, how many ideas do they need, and which of those did the world force on us?
