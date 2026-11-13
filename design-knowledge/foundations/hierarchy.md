# Hierarchy

Covers how the look ranks what matters and shows what can be used: what people see first, second and third; the means of emphasis (size, weight, contrast, color, space and position); the levels of text and of buttons; what looks usable, and the look of each state of a control; and how the ranking holds across text sizes, widths, themes and states. Not covered here: which content and actions a page shows and which leads, its first screen, and the outline of its headings.

The rules come in four groups: rules for every level, then rules for primitives (a text style, a button, an icon), components (a part made of controls or of other components, such as a list of steps, a message, or a toolbar with its list) and pages.

## Every level

### 1. Visual weight follows importance

Decide what people need first, second and third on the screen, for the job it serves. Give the first the most weight, the second less, and the rest the least. Weight comes from size, contrast with the background, color, boldness, the space around an element, position (people look at the top and the leading edge first) and motion: something that moves draws the eye more than something still.

- **Why:** Early looks go to what differs most from its surroundings in color, size, orientation or motion (Wolfe and Horowitz 2004), and to the upper left of web, desktop and mobile screens (Jiang et al. 2023). An element that stands out without being needed slows the search for the one people want, even after practice (Theeuwes 1992), and since people's goals also steer their eyes, standing out alone predicts looks only modestly (Wolfe and Horowitz 2017).
- **Applies when:** always. The order comes from the job: on a tool, the data or work people came for; on a page people land on, what the product is and what to do.
- **Check:** write the screen's job, and list what people need first, second and third. Then blur the page until the text can't be read, once lightly and once heavily (add `html{filter:blur(5px)}`, then `blur(20px)`, and take a screenshot of each), and list what stands out, in order: a strong color can take over at the heavy blur. The two lists should match. Blurring is a design-school practice, not a tested measure, so confirm what it shows with the computed size, weight and contrast of the elements.
- **Fail:**
  - a decorative illustration or a promo banner that outweighs the screen's main data or action;
  - finished steps drawn stronger than the step the user is on (Interface Craft, "Redesigning a Mobile Web App, Part 1");
  - bold labels and regular values in a detail panel, so the eye reads "Email" before the address.
- **Pass:**
  - an account page where the balance is the largest and darkest text, the transactions below it are body text, and the filters are quieter still;
  - an error on the field the user just submitted, which outranks the page's usual lead: it is what they need now.

### 2. One thing leads, and few things stand out

On each view, at most one element is the strongest. A few support it, and the rest is quiet. Every extra element that stands out takes force from the others.

- **Why:** An item that differs from all the others in one feature is found almost at once (Treisman and Gelade 1980), but search slows as the other items differ more among themselves (Duncan and Humphreys 1989), so two elements emphasized the same way no longer stand out from each other. Cueing a few sentences of a text helped readers remember them; cueing many removed the benefit (Lorch et al. 1995).
- **Applies when:** each page, dialog and panel, one screen at a time: a long page has a lead on each screen. A page made of independent areas, such as a dashboard, has one lead per area.
- **Check:** in the blurred screenshot of rule 1, count the elements at the strongest level, then at the second. Anything that moves or blinks counts at the strongest level.
- **Fail:**
  - a filled button, a bright banner, a large colored number and an illustration on one screen, so the eye has nowhere to start;
  - every task in a list given the same weight, with nothing to say which comes next (Interface Craft, "Redesigning a Mobile Web App, Part 1").
- **Pass:**
  - one large number, with last month's figure beside it, leads the page; its chart and the list below it are quieter;
  - a grid of items of one kind, such as products or files, where none leads and all look the same.

### 3. Levels differ clearly, or not at all

When two levels differ only a little, people can't tell which ranks higher. Make each level clearly different from the next, or make them the same. Use one or two strong cues, size first and weight second, rather than many weak ones: headings about 20% apart in size, or a clear weight step where they share a size. Secondary text can differ from primary text by color alone.

- **Why:** Heading levels were easier to tell apart when they differed in fewer features, and in size most of all, with relative steps of about 20% (Williams and Spyridakis 1992, a print study read in abstract). A difference guides the eye only when it is much larger than the smallest one people notice (Wolfe and Horowitz 2004). Systems also use a weight step at one size, and a lighter color alone for secondary text (Apple, "Typography"; Material 3, "Color roles"; Primer, "Color").
- **Applies when:** the levels of text and of actions on one screen: titles, headings and body text; primary and secondary text; primary and secondary buttons.
- **Check:** list the text levels with their computed size, weight and color. For each pair of neighbors, check the size, weight and color steps, and that the two still look different in the blurred screenshot.
- **Fail:**
  - a 16 px section heading over 15 px body text, both regular weight;
  - headings set apart by bold, italic, underline and capitals at once.
- **Pass:**
  - a 20 px semibold heading over 16 px regular body text;
  - a 14 px row title in near-black with 14 px details in gray.

### 4. Few levels, each with a job

Count the sizes, weights and text colors a screen uses. Each one marks a level with a job, such as title, heading, body, secondary text or label. Merge levels that do the same job, and levels people can't tell apart. One screen uses two main text colors, primary and secondary, plus a disabled color and at most one more for rare text such as placeholders, and at most three heading levels.

- **Why:** With four or more heading levels, readers lose track of where they are (Digital.gov, "Headings"). Systems use two main text colors, primary and secondary, plus a disabled one, and Apple has four label colors (Material 3, "Color roles"; Primer, "Color"; Apple, "Color"). Their type scales hold more styles than one screen needs: 15 in Material 3, 11 in Apple's (Material 3, "Applying type"; Apple, "Typography").
- **Applies when:** one screen. The product's scale can hold more styles.
- **Check:** list the computed font sizes, weights and text colors on the screen, and name each one's job. Two values with one job, or two jobs that look the same, fail, and so do more text colors or heading levels than the rule allows.
- **Fail:**
  - secondary text in three nearly equal grays (#666, #6b6b6b and #707070);
  - five font weights on one screen.
- **Pass:** one text color for primary content and one for secondary.

### 5. Things of equal importance look equal

Peers, such as tags, categories, navigation links, filters or cards of one kind, get the same size, weight and strength of color, and controls of one kind, such as the buttons in a toolbar, share one shape, fill, stroke and material. A difference between them reads as a difference in importance.

The other way round, things of different kinds that sit together, such as a person's message and the assistant's answer, or a system label and the user's own text, differ in a way people see at a glance.

- **Why:** An item that differs from the others in one feature stands out at once (Treisman and Gelade 1980), and an item unlike the rest of a list is remembered better (Hunt 1995). Hues of equal HSL lightness don't look equally bright, so peers colored that way don't look equal; equal OKLCH lightness keeps them even: in HSL, changing the hue changes how light a color looks (CSS Color 4, "HSL Colors"). Shape, fill, stroke and material work the same way: one control drawn unlike its neighbors stands out (Interface Craft, "Style Details").
- **Check:** for each set of peers, compare the computed size and weight, and the OKLCH lightness and chroma of their colors. For controls of one kind, such as the buttons in a toolbar, also compare shape, fill, stroke, radius and material: one that differs without marking a difference people need fails.
- **Fail:**
  - category tags in hues of the same HSL lightness, where one looks brighter and reads as more important;
  - one metric tile with a colored background among plain ones, for no reason;
  - one outlined button in a toolbar of filled ones of equal weight.
- **Pass:**
  - tags with the same OKLCH lightness and chroma, differing only in hue;
  - the selected or current item among its peers: the difference marks its state.

### 6. Lines, backgrounds and navigation stay quieter than the content

Borders, dividers, grid lines, backgrounds, shadows, navigation and toolbars hold the content and help people reach it. Each is just strong enough to do its job, and weaker than the content it holds.

- **Why:** An element that stands out without being needed slows the search for what is (Theeuwes 1992); each pull costs only about 25 ms (Egeth et al. 2010), but people scan a screen many times. Make such parts quieter rather than removing them: in graphs, pictorial backgrounds slowed reading but axis lines sped it up (Gillan and Richman 1994), and a chart with fewer, lighter gridlines is easier to read (Government Analysis Function, "Data visualisation: charts").
- **Applies when:** always. Lines and labels that help people read stay visible; only their strength drops.
- **Check:** compare the contrast of borders, dividers and grid lines with that of the text they hold, and the weight of the navigation with the page title. Then hide the boxes (add `*{border-color:transparent!important;background-color:transparent!important;box-shadow:none!important}`; for a dialog or side panel, put its selector before `*`, so it keeps its own background) and compare: if the content reads more easily without them, they were too strong.
- **Fail:**
  - a 2 px dark border around cards whose text is gray;
  - grid lines darker than the data line;
  - sidebar links in bold color that outweigh the page title.
- **Pass:**
  - hairline borders lighter than the secondary text;
  - grid lines in light gray;
  - navigation in the secondary text color, with the current item marked;
  - a strong border that marks the selected item, a field with an error, or a notice's status, such as Carbon's 3 px colored edge on inline notifications ("Notification"): it carries state.

### 7. Color draws the eye only where it is rare

Most of the screen stays neutral. Strong color goes on small areas that need attention: the primary action, the user's current place, status that needs action, the one data series that matters. A color used everywhere marks nothing. Meaning never rests on hue alone: text or a shape also tells the states apart.

- **Why:** Color guides the eye only when the difference is large and the rest is alike (Wolfe and Horowitz 2004), so strong color goes on small areas against quieter tones (Ordnance Survey, "Guide to cartography: Colour"); key values in a color of their own, with a headline and a note, were remembered better (Ajani et al. 2021). Colored text is the usual sign of a link: Primer keeps its accent color for links and selected states (Primer, "Color"; "Color usage"). Meaning carried by hue alone is lost to people who can't tell the hues apart (WCAG 2.2, 1.4.1).
- **Applies when:** product screens, except marketing pages, where large fields of color can carry the brand without ranking anything.
- **Check:** mark every element in an accent or status color on a screenshot, and name what it needs from the user. Color that marks nothing fails. Then view the page in grayscale (add `html{filter:grayscale(1)}`): the order should mostly hold, and a meaning that depends on hue alone, with no text or shape to tell the states apart, fails.
- **Fail:**
  - every section heading in the accent color, so the accent no longer marks what can be clicked;
  - four metric cards, each with a different colored background.
- **Pass:**
  - a neutral page with one filled accent button, and the current navigation item tinted, with its label in semibold;
  - a lightly tinted sidebar or background that stays quieter than the content.

### 8. What people need never looks like an ad

Content and actions people need don't take the look of advertising: set inside an image, or styled like a promotion in a top banner or a side column, where ads usually sit.

- **Why:** People doing a task look little at banners: news readers spent 5.5% of their viewing time on banner ads (Simonetti and Bigne 2023), people searching for a specific product overlooked top and side banners more than people browsing (Friesen and Gorbunova 2025), and picture banners were missed more often than text ones (Ning et al. 2023). These studies measured real ads; that content styled like an ad is skipped the same way is an inference from them.
- **Check:** find the elements the screen most needs people to see. Is any of them inside an image, or styled like a promotion (an illustration, a bright color block, a "New" badge) in a top banner or a side column?
- **Fail:** an important change announced in a bright, boxed banner with an illustration at the top of the page.
- **Pass:**
  - the same news in a plain notice at the top of the area it affects;
  - a plain notice across the top of the app about the whole account, such as a failed payment;
  - a side panel with the details of the selected item.

### 9. The order holds at every text size, width, theme and state

When the text grows, the window narrows, the theme changes or the content changes, what led still leads.

- **Why:** Apple asks to keep the relative hierarchy of text, and primary elements toward the top, when people change the text size (Apple, "Typography"). Navigation hidden behind a menu always costs an extra step and keeps options out of sight, even now that most people know the menu icon (Kaplan, "The Hamburger-Menu Icon Today", 2025); an action moved into a menu loses its rank the same way.
- **Applies when:** every supported text size, width and theme, and every state of the content: empty, loading, error, short and long.
- **Check:** repeat the blur check of rule 1 with larger text (add `html{font-size:200%}`), at 320 px wide, in each theme, and in the empty and error states. The same element should lead.
- **Fail:**
  - headings set in px while body text grows with the user's setting, so at 200% the body text outgrows the headings;
  - on a phone, Save moves into a menu while Share stays visible;
  - in the dark theme, the shadow that lifted the selected card disappears and nothing else marks it.
- **Pass:**
  - at 200% text, the headings still outweigh the body;
  - the primary action stays in view on a phone;
  - the selected card marked by a border in both themes, not by a shadow;
  - text that keeps its size when the root font size changes: the order can't change. Whether text follows the user's text-size setting is an accessibility question, not one of ranking;
  - a large page title that shrinks into the bar as people scroll, and grows back at the top (Apple, "Toolbars"; Material 3, "App bars").

### 10. What can be used looks usable, and nothing else does

Every button, field, link and draggable item shows at rest, before any hover, that it can be used: a button by its shape or its place among actions, a field by its box, a draggable item by its handle, a link by its color, and inside a paragraph also by an underline (default) or by 3:1 contrast with the text around it. A dotted underline marks a term whose definition shows on hover and focus, so a solid one still means a link (default). Nothing that can't be used borrows those signs, or gets a hover effect or the hand cursor. Every part of a control that looks usable takes the press: a checkbox's or switch's label, its box and the space between them are one target, and no layer people can't see takes the presses meant for what is under it. Whether buttons show the hand cursor is the product's choice; whichever it is, every button does the same, and a disabled control never shows the hand.

- **Why:** People find a control by the cues they can see at rest, so one without them goes unused, and the same cues on something that can't be used draw wasted presses (Norman 2008). A link marked only by hue is lost to people who can't see the difference, so WCAG 2.2 asks a link inside text to differ from the text around it by more than hue, such as an underline, bold, or 3:1 contrast with the text, and a cue that shows only on hover or focus doesn't count (1.4.1, F73, G183); GOV.UK and Primer underline links in text, the hand cursor marks a link, a label works its control, and systems split on the cursor for buttons (GOV.UK, "Links"; Primer, "Link"; CSS Basic User Interface 3; HTML Standard, "The label element"; Tailwind CSS, "Upgrade guide"; the button styles of Primer, Carbon, Fluent 2 and GOV.UK). Browsers draw an abbreviation with a title under a dotted line, and Jakub Krehel marks defined terms the same way (HTML Standard, "Rendering"; interfaces "better-typography").
- **Applies when:** always.
- **Check:** take a screenshot with the pointer off the page. Mark what can be clicked, typed in or dragged: a control you can't pick out from the screenshot alone fails, such as a button drawn as plain text in the body color. For a link inside text with no underline and no bold, measure its color against the text color: under 3:1 fails (WCAG 2.2, 1.4.1). Move the pointer over headings, plain text, cards, images and badges: a hover effect or a hand cursor on something that does nothing when clicked fails. Compare the cursor over buttons on several screens: a mix fails, and so does the hand over a disabled control. Click the label, and the gap beside the box, of each checkbox, radio button and switch: one that does nothing fails. Press every visible control: one that doesn't respond because a layer on top takes the press fails.
- **Fail:**
  - Edit as plain gray text styled like the labels around it;
  - a card that lifts and shows the hand on hover but does nothing when clicked;
  - words in the link color used for emphasis;
  - a link in a paragraph marked by a blue hue at 1.3:1 against the text, underlined only on hover;
  - a card's buttons under a transparent sheen that takes every click.
- **Pass:**
  - links underlined inside paragraphs;
  - links in a paragraph with no underline, at 3.4:1 against the text around them, as color rule 3 passes;
  - text buttons in the accent color in a toolbar, where their place shows they are actions;
  - the arrow over every button and the hand only over links, or the hand over every button;
  - navigation links and tabs with no underline: their place shows that they can be clicked, as F73 allows for navigation links.

### 11. Every state a control can be in has a look of its own

Each control has a look for each state it can be in, such as hover, pressed, keyboard focus, selected, open, disabled and busy. Disabled controls have no hover or pressed look. Every custom button shows the press, for example by shrinking slightly, to about 0.97 of its size (default). On phones, the browser's tap highlight is turned off (`-webkit-tap-highlight-color: transparent`), and everything people tap has its own pressed look instead (default).

- **Why:** A button with no pressed look can feel as if it didn't respond (Apple, "Buttons"); Emil Kowalski scales anything pressable to 0.95–0.98 while pressed, so the press shows at once (Emil Kowalski, "emil-design-eng"). Safari on iOS and Chrome on Android paint a see-through box over anything tapped that has a click handler, which fights the product's own pressed look, so Emil Kowalski turns it off and gives each tappable thing its own (Emil Kowalski, "Feeling Native On Mobile"), and without visible focus keyboard users lose their place (WCAG 2.2, 2.4.7). Material 3 and Carbon give each state a look, and disabled controls none (Material 3, "Applying states"; Carbon, "Disabled states").
- **Applies when:** always.
- **Check:** for each kind of control, show each state: force hover, focus and active in DevTools (":hov"), and set the attributes for selected, open, disabled and busy. A state with no look of its own fails, and so does a custom button with no pressed look. Tab through the page: a stop with no visible focus fails. Hover and press a disabled control: any change in its look fails; a not-allowed cursor doesn't count.
- **Fail:**
  - a custom button that looks the same at rest and when pressed;
  - a focus outline removed with `outline: none` and nothing in its place.
- **Pass:**
  - a button that darkens while pressed, and a ring on keyboard focus;
  - a press shown by a change of color, with no scaling;
  - navigation bars and other containers with no hover look, which Material 3 doesn't give them.

## Primitive

### 12. Inside text, stress a few words, with weight

To stress words in running text, set a few of them in the product's emphasized weight, clearly heavier than the text around them: Material 3 uses medium on body text, Apple semibold (Material 3, "Type scale"; Apple, "Typography"). Bold everywhere stresses nothing. Color alone reads as a link, and an underline means a link.

- **Why:** Readers remembered cued sentences better when few were cued; with heavy cueing the benefit disappeared (Lorch et al. 1995). People scanning a long page look at bold text, and bold helps only when used sparingly (Wang and Chan 2023). Colored text reads as a link (rule 7).
- **Check:** count the bold runs in each block of text, and look for colored or underlined text that isn't a link.
- **Fail:**
  - half of each paragraph in bold;
  - a key phrase in the link color that can't be clicked.
- **Pass:** a few key phrases in the emphasized weight, in the body color.

### 13. Button styles rank actions, and the danger style marks only destructive ones

The product has one style per level of action: primary, the strongest, often filled; secondary, quieter; tertiary, quieter still, often text only. The styles stay the same across the product. A secondary style is quieter than the primary one, such as an outline or a tonal fill beside a filled primary. A destructive action uses a danger style, never the primary one, and nothing else uses a danger style. The strong danger style is for the final step, such as the confirm button of a delete dialog.

Buttons offered as one set of choices share a size, and the preferred one differs by style; a larger main button is for a button group the product's system defines that way.

- **Why:** People press a prominent button without reading it, so a destructive action in the primary style gets pressed by mistake (Apple, "Buttons"). Systems pair a filled main button with an outlined or tonal secondary one, and keep the strong danger style for the final or required destructive step, since it works only when rare (Material 3, "Buttons"; Carbon, "Button usage"; Atlassian, "Button"; GOV.UK, "Button"). On size they differ: Apple sets the preferred choice apart by style, Material 3 by size in button groups ("Buttons" in both).
- **Check:** list every button on the screen with its style and what it does. A destructive action in the primary style fails, and so do the danger style on anything else and two styles for one level. Where the primary and danger styles share a hue, check that they differ in another way people see: fill against outline, an icon, or the label.
- **Fail:**
  - Delete account as the filled primary button of a settings page;
  - a red button that only opens a menu.
- **Pass:**
  - Delete as a quiet danger text button in the settings list, and a filled red Delete only in the confirm dialog;
  - a product whose design system orders its styles differently, as long as each level keeps one style.

### 14. An icon carries the same weight as the text beside it

An icon next to a label matches the label's color and weight, so neither outweighs the other.

- **Why:** An icon heavier or darker than its label is seen first and leads the row. Material 3 asks for icons of the same optical weight as their text, and Apple's symbols come in the same weights as the system font (Material 3, "Applying icons"; Apple, "SF Symbols").
- **Check:** at 2×, compare each icon's stroke and color with its label.
- **Fail:** black 2 px icons beside gray regular labels in a table, so the icons lead each row.
- **Pass:**
  - icons in the label's color, with a stroke that matches its weight;
  - a status icon in its status color beside neutral text: the color carries meaning.

## Component

### 15. The current item stands out, and finished ones never outweigh it

In steps, tasks, tabs and navigation, the item the user is on now is the strongest of its peers. Finished items stay findable but never outweigh it.

- **Why:** People need to see where they are, and marking the current item, as in a navigation bar, is one way to show it (WCAG 2.2, Understanding 2.4.8, level AAA; technique G128). Finished tasks drawn stronger than the remaining work made the job look larger than it was (Interface Craft, "Redesigning a Mobile Web App, Part 1").
- **Check:** find the current item in the blurred screenshot of rule 1: it should be the strongest of its peers. Compare the finished items with it.
- **Fail:** finished steps in bold with green checks, and the current step in plain text.
- **Pass:** the current step in a stronger weight with an accent marker; finished steps in secondary text with a check.

### 16. Urgency sets emphasis, and the urgent look stays rare

Errors, warnings, notices and confirmations each have one look, ranked by how much they need from the user. Routine messages never borrow the look of urgent ones, and urgent ones never take a routine look.

- **Why:** People who saw many routine notices that looked like security warnings learned to ignore the warnings too (Vance et al. 2019). An error or warning that looks like a routine message stands out no more than one, so people miss it (rule 1).
- **Check:** list the messages the screen can show, with their look. Two levels that share a look fail.
- **Fail:**
  - a product tip in the same red box as payment errors;
  - info, warning and error notices that differ only in their icon.
- **Pass:** errors in red with an icon and a title, warnings in amber, info in neutral, each used only for its level.
