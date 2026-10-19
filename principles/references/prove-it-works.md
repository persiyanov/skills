# Prove It Works

Check what you claim works, against the actual result and version. Compilation, a passing test, and a successful request prove different things.

- Choose checks that would catch a plausible wrong result. Static reasoning can establish a local invariant; claims about runtime behavior need execution evidence.
- Exercise the changed behavior, including failures or realistic scale when they matter.
- Check the external contract or communication path behind an integration claim. A local mock cannot establish what the external system does.
- Inspect the artifact and results yourself, including delegated work. Separate what you observed from what you inferred.
- Investigate unexpected failures in the work or the check. Say what remains unverified; a local test cannot prove a deployment succeeded.

Reuse existing checks and automate when useful. A repeatable check of the wrong thing is still the wrong check. See [Build the Lever](build-the-lever.md). A test that cannot fail for a defect is not a check. See [Test Behavior, Not Implementation](test-behavior-not-implementation.md). Stop when the claim is supported and no important uncertainty needs another check.

Ask: What wrong result does this rule out, and what does it leave open?
