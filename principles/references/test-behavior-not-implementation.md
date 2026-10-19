# Test Behavior, Not Implementation

Call the code the way its users do and assert the result they observe against a literal expected value. A test that asserts which calls the code made, or restates a constant the code contains, does neither.

Before keeping a test, ask whether it would still pass if every function it imports returned nothing. If yes, it observes no behavior and cannot fail for a defect. Rewrite the assertion or delete the test.

A test that cannot fail for a defect costs CI time and review attention and catches nothing. A constant pin also fails when someone edits the constant, so it prevents that edit.

Shapes that still pass when every imported function returns nothing:

- **Weak or no assertion.** No assertion, or only that a value is defined, truthy, an instance of a type, greater than zero, or that nothing threw.
- **Mock or absence only.** Only that a function was called, was not called, returned nothing, returned an empty list, or is not some wrong value.
- **Self-referential.** The expected value comes from the code under test: `expect(f(a)).toBe(f(a))`, or comparing a parsed field to another helper that builds the same field.
- **Constant pin.** The assertion restates a hand-maintained constant, config default, table row, or prompt string.
- **Fixture asserts fixture.** The assertion reads data the test built or a value computed in setup, and the subject never runs in the body.

Call the subject in the test body with one concrete input and assert the literal output or the observable effect: `expect(slugify("Hello, World!")).toBe("hello-world")`. For an absence, assert the presence on the other input in the same test. For a constant, test the mechanism that reads it with one input instead of restating the value. For a mock, assert the payload it received or the state after the call, not that it was called. When no such assertion exists, delete the test.

Keep a test of a relation across a table's rows (a key present in two tables, a parent that exists), and a compile-time type check.

Ask: Would this test still pass if every imported function returned nothing?
