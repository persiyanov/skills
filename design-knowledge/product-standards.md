# Product standards

A design is judged against the guides and against the product's own standards. The standards live in two places: what holds across the product lives in the repo, in its UI rules, and the bar for one piece of work lives in that work's own record.

## The product's UI rules

- **Where they live:** in the files where the repo keeps its UI conventions and its voice, such as a policy or a guide that `AGENTS.md` names. The repo decides the file and its shape. If it has none, propose one to the user and wait for their yes, because the file is theirs. Until it exists, keep the ranked qualities and the log in the work's own record.
- **What they hold:**
  - a short ranked list of the qualities that people should notice in this product and not in others, which say what "the best version" means here (Interface Craft, "Facets of Quality")
  - the products that it's judged beside
  - its rules, each written as the condition it protects, with an example of each side from the product: a screen that meets it and one that breaks it
  - a log of what the user has said about designs, one dated line each, read to learn what they value and to spot a repeat.
- **Values and components stay in the code,** because a copy in a doc drifts from what ships.
- **A rule is a default, not a law.** A design may depart from one for a concrete reason, written in the work's record.

## What the user says about a design

- **A verdict is an observation:** what the user saw, where and when, in their words. "I don't like this" rejects that design in that place, and says nothing yet about the same form elsewhere, because rejecting a claim doesn't prove its opposite. Praise is evidence in the same way: it shows what worked in that context, and serves as an example to compare with.
- **Find its cause:** which quality, job or rule the design failed, measured where you can, such as "the total and the due date look the same, so neither leads" rather than the invoice row that they pointed at. Mark the cause as your reading. Record it twice, the same day: in the work's record, as something its design must now meet, so that the next check covers it, and as one line in the product's log, with the date, what they saw and the cause.
- **A rule comes from a repeat or from the user.** When an observation on a different screen shares a cause with one already in the log, or the user states a rule, first remove the need with a token, a shared component, a type or a lint. Otherwise fold the lesson into a broader rule that already covers it. Only then add a rule, written as the condition, with an example of each side. The repo decides where and in what shape a rule lands, and this section decides when an observation becomes one.
- **When it's unclear whether the user gave a verdict or stated a rule,** ask once, and treat it as a verdict meanwhile.

## The bar for a piece of work

Write the bar in the work's record before its design starts, so that nobody can bend it to fit the design later (Designer Fund, "Inside design at Linear", 2026). Mark what rests on a guess as an assumption.

- **The people:** who uses this part of the product, what they know, and the job they come to do. Include the state they arrive in: what's at stake for them, and how stressed or rushed they are, because stress narrows what people take in (Easterbrook, 1959; Interface Craft skill, "Design Critique").
- **The best products:** the best products for the same job, with screens or links to them, because a reviewer compares parts side by side. Use the products yourself if you can, because screenshots don't show motion or feel. Otherwise, use their public pages or Mobbin screens, which show what they really do. Say what each one does well and whether it suits this product, and keep them separate rather than blending several into one. Follow the conventions that most of them share, because people already know them, and keep this product's own look, such as its palette, type and shapes, because a copied look makes this product pass for another one.
- **What each best product decided:** When the work sets the product's look, such as a visual language or a restyle, write down what each best product decided, which default it left, and why that fits it. Start with the whole page, because that's where the feel comes from: how large and dense the text and spacing are, how many weights and text colors separate levels, how soft the shapes are, how surfaces sit, how much color there is, and what the screen is for. Then go on to single parts. Measure the values on each best product's own page with `scripts/style-inventory.js` wherever you can open it, because small previews hide scale and space. Where you can only see screens, such as a page behind a login, record counts and proportions from the largest screens you have, such as how many items a group shows and how many weights it uses, and mark them unmeasured. This record widens the options for this product and shows what to avoid copying.
