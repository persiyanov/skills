# Build Foundations When Work Needs Them

Build foundations when upcoming work needs them. Test uncertain assumptions before making choices that will be costly to undo.

When you understand the domain, agree on shared data structures and who owns each responsibility before callers spread conflicting assumptions. [Model the Domain](model-the-domain.md) helps choose those structures.

When requirements are unclear, build a small end-to-end example to learn from. Keep uncertain decisions local, so that changing them doesn't mean rebuilding everything.

Build infrastructure when it enables specific upcoming work or makes that work safer. A possible future feature isn't enough reason to build a platform or to prepare every alternative.

For example, before three features each store dates their own way, agree on one date type and on who converts time zones. But don't build a plugin system for exporters that nobody has asked for. Ship the one exporter that people need.

Ask: What becomes harder if we wait, and what might we learn that would change this decision?
