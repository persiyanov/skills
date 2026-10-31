---
name: principles
description: Thinking, product and engineering principles with a grouped index and full per-principle references. Load at the start of any non-trivial task — designing, implementing, refactoring, debugging, migrating, reviewing, or shipping code; making a product or UX decision; writing anything a user or customer reads — and whenever the user invokes /principles, names a principle, or asks for common sense or first principles. Not needed for casual questions or trivial mechanical edits. When user invokes or mentions this skill, you must read the skill and applicable principles in full.
---

# Principles

Read this index at task start. Each entry gives the principle, then when to use it. Read the reference file in full for any principle you apply. When the user invokes this skill explicitly, at least one principle (likely more) applies: read each of them in full.

Stay within the assignment: in a review, report findings; in design, bring the whole design and state your decisions; make changes when authorized. When principles conflict, let the job and its real constraints decide.

Explain important choices and why they help. Name a principle when that makes the explanation clearer.

Thinking principles apply to all work: read them first. The others apply when the work touches their subject.

## Thinking

- **Common Sense** (`references/common-sense.md`). Ask the plain questions a sensible person would ask (what is it for, what happens today, how do others do it, why do we need this, why is this case different, did I check) and answer them before you show anything; a plain question should not change your answer. Use before showing any proposal, design, copy, or answer, and when the user asks a simple "why would we...?" or says "common sense".
- **Know What Is True** (`references/know-what-is-true.md`). Write down the system as it is, its users, and how the world it depends on behaves; measure what is cheap, and date every number. Use when designing a change, before the first option.
- **The Algorithm** (`references/the-algorithm.md`). Question every requirement until it traces to a person or a fact that forces it, then delete, simplify, speed up, and automate last, in that order. Use when designing, reviewing, or changing anything: a system, a spec, a process, a rule.
- **Radical Simplicity** (`references/radical-simplicity.md`). Derive the simplest complete design from the job and its real constraints, and question every choice that adds complexity. Use when designing at any level or adding a requirement to an existing design, and again when the user says "common sense", "just works" or "from scratch", or the design feels harder than its purpose.
- **Exhaust the Design Space** (`references/exhaust-the-design-space.md`). Compare real alternatives, find what settles the choice, and bring one choice, not a list. Use when an important design choice is still unclear.
- **Attack the Premise** (`references/attack-the-premise.md`). Write down the premise the failed fixes share, and test it instead of writing another fix that assumes it. Use when two or more fixes that share one premise have failed the same check.
- **Encode Lessons in Structure** (`references/encode-lessons-in-structure.md`). Change what allows the mistake, and keep rules that need judgment short. Use when the same correction keeps coming up.

## People Who Use It

- **Experience First** (`references/experience-first.md`). Choose user delight over implementation convenience. Use when weighing product, UX, or feature-scope tradeoffs.
- **Narrate It as the User** (`references/narrate-it-as-the-user.md`). Narrate concrete requests from real users' point of view (what they see, what they can do next, how they know what happened) through every state and down to the calls behind each step, and question every idea they must keep in mind that the world did not force. Use when designing or reviewing behavior a consumer will experience.
- **Write for the Reader** (`references/write-for-the-reader.md`). Decide the reader, the change you want in them, and their value in their words before the first word, and read it cold before showing it. Use when writing anything someone reads: copy, a changelog, an email, a message, a doc, a prompt.

## Code and Architecture

- **Laziness Protocol** (`references/laziness-protocol.md`). Think like a tired maintainer: do the hard thinking that removes work from them forever, and carry the change all the way through. Use when writing or changing code.
- **Consistency Protocol** (`references/consistency-protocol.md`). Make similar things follow one rule, so someone who learned one can predict the other; explain each difference and temporary migration step. Use when similar things behave differently, or a change would introduce an exception.
- **Minimize Reader Load** (`references/minimize-reader-load.md`). Reduce what readers must trace and keep in mind. Use when code is hard to follow or requires remembering hidden state.
- **Model the Domain** (`references/model-the-domain.md`). Encode the domain in a structure (state machine, typed model, table or registry, reducer, boundary, the right collection) instead of scattered conditionals. Use when writing stateful logic, or code that branches a lot or repeats a shape assumption across files.
- **Boundary Discipline** (`references/boundary-discipline.md`). Validate inputs on entry, and enforce business rules when changing state. Use when handling external data, framework adapters, or conditions that can change before use.
- **Type System Discipline** (`references/type-system-discipline.md`). Make the compiler prevent mistakes, without adding needless complexity. Use when types allow mix-ups, illegal states, or forgotten cases.
- **Make Operations Idempotent** (`references/make-operations-idempotent.md`). Make retries safe, and don't guess whether an uncertain external action happened. Use when work may repeat, overlap, or be interrupted.
- **Separate Before Serializing Shared State** (`references/separate-before-serializing-shared-state.md`). Eliminate the sharing first, and where sharing is real, serialize access with a lock or similar mechanism. Use when concurrent actors might write the same file, branch, key, or object.

## Delivery

- **Foundational Thinking** (`references/foundational-thinking.md`). Build foundations when upcoming work needs them, and test uncertain assumptions first. Use when deciding what to build first, or making a choice that is costly to undo.
- **Sequence Work into Verifiable Units** (`references/sequence-verifiable-units.md`). Group changes that belong together, and check them before building on them. Use when later work depends on earlier changes.
- **Outcome-Oriented Execution** (`references/outcome-oriented-execution.md`). Reach the intended design without leaving temporary compatibility code behind: migrate the callers and delete the old API in the same batch of changes, and protect live users throughout. Use when carrying out a planned rewrite or migration, or replacing an internal API.
- **Build the Lever** (`references/build-the-lever.md`). Use an existing tool, or build the smallest useful one. Use when work is repetitive, easy to get wrong by hand, or hard to check manually.

## Verification and Debugging

- **Prove It Works** (`references/prove-it-works.md`). Check the actual result and version, and say what remains unverified. Use when claiming something works or is complete.
- **Fix Root Causes** (`references/fix-root-causes.md`). Find what causes the failure, and distinguish restoring service from fixing the cause. Use when investigating a failure or a recurring symptom.
- **Test Behavior, Not Implementation** (`references/test-behavior-not-implementation.md`). Call the code the way its users do and assert the result against a literal expected value; a test that would still pass when every imported function returns nothing gets rewritten or deleted. Use when writing, changing, or keeping a test.

## Working with Humans and Agents

- **Guard the Context Window** (`references/guard-the-context-window.md`). Read selectively, and preserve sources, decisions, and remaining work. Use when large outputs, repeated reads, or long tasks crowd out useful context.
