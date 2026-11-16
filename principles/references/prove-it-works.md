# Prove It Works

Check what you claim works, against the actual result and version. Compilation, a passing test, and a successful request prove different things.

- Choose checks that would catch a plausible wrong result. Static reasoning can establish a local invariant. Claims about runtime behavior need evidence from running the code.
- Exercise the changed behavior, including failures or realistic scale when they matter.
- Check the external contract or communication path behind an integration claim. A local mock can't establish what the external system does.
- Inspect the artifact and results yourself, including delegated work. Separate what you observed from what you inferred.
- Investigate unexpected failures in the work or the check. Say what remains unverified, because a local test can't prove that a deployment succeeded.

For example, "the email now sends" needs the sent email in an inbox or in the provider's log, not a passing unit test with a mocked mailer.

Reuse existing checks, and automate them when that helps. A repeatable check of the wrong thing is still the wrong check. See [Build the Lever](build-the-lever.md). A test that can't fail for a defect isn't a check. See [Test Behavior, Not Implementation](test-behavior-not-implementation.md). Stop when the evidence supports the claim and no important uncertainty needs another check.

Ask: What wrong result does this rule out, and what does it leave open?
