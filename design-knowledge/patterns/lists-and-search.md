# Lists, search and choosing

Covers finding and acting on items in a collection: selecting many items and acting on them at once, searching, filtering, and choosing one item from many, as in assigning a task, linking a record or mentioning someone. Read it for any page with a list or table that people select from, search or filter, and for any picker. Not covered here: a record's own page, where an edited row stays, the form of a list (table, list or cards), its first order, paging, and its empty, loading and failed states, which the foundation guides hold. The problem it solves: people act on items they can't see, lose track of what a selection or a filter covers, and can't tell look-alike options apart.

The rules come in four groups: selecting many and acting on them, searching, filtering, and choosing one item.

## Selecting many and acting on them

### 1. A selection shows how many items it holds and how far it reaches

While anything is selected, the number selected is in view, and it says whether it covers the items on this page or every match. A checkbox in the header selects only the items on this page, and shows a mixed state when some are selected. Selecting beyond this page is a separate control that says which items it covers, such as "Select all 2,430 matching". When people change the page, the sort or a filter, the selection either clears where they can see it go, or stays and keeps counting every selected item; it never stays active out of sight.

- **Why:** people act on what they think is selected, and a selection they can't see makes them change or delete items they never chose. Marigold warns against rows ticked on one page staying selected, unseen, while people work on the next (Marigold, "Bulk actions"). Cloudscape shows the count beside the total, PatternFly counts across all pages, and Gmail's header box selects the page, then offers to select every conversation as a link that gives the number (Cloudscape, "Table"; PatternFly, "Bulk selection"; Gmail Help, "Delete or recover deleted Gmail messages", convention). 32 of 36 apps showed the number selected (Mobbin survey, 2026, convention).
- **Applies when:** people can select several items in a list or table.
- **Check:** select two rows and read the count. Tick the header checkbox on page 1 of several: anything beyond page 1 selected with no count that says which items it covers fails, and selected with no second, worded control fails. Select rows, then change the page, the sort and a filter: a selection that still applies with no count in view fails, and one that vanishes with no sign fails.
- **Fail:**
  - a header checkbox that selects all 2,430 matching rows at once;
  - rows ticked on page 1 that stay selected, with no count, while people work on page 2;
  - Delete pressed on page 2 while three rows ticked on page 1 stay selected, unseen.
- **Pass:**
  - "50 on this page selected. Select all 2,430 matching" as its own link, and "2,430 selected" once it is used;
  - a selection that clears when the page changes, when the bar and its count visibly go away.

### 2. While items are selected, the count and the bulk actions sit together

While items are selected, a bar shows the count, the actions for the selection and a way to clear it, at the top of the list in or in place of its toolbar, or floating at the bottom. A row's own action buttons and menu pause until the selection is cleared, so one Delete never sits beside another that covers different items; opening a row still works. On phones, selecting is a mode people enter; the count shows in the title or the bottom bar, and the actions sit at the bottom.

- **Why:** a row's Delete beside a bulk Delete leaves people unsure which items a press affects, so Carbon and Marigold disable row actions while rows are selected (Carbon, "Data table"; Marigold, "Bulk actions"). Products put the bulk actions in a bar at the top of the table (15 of 36) or floating at the bottom (13), and on phones at the bottom of the screen (24 of 29) (Mobbin survey, 2026, convention).
- **Applies when:** people can select several items and act on them at once.
- **Check:** select two rows. A count and actions apart from each other, no way to clear the selection, or a row's own menu still active, fails.
- **Fail:**
  - bulk actions in the page header while the count sits in the table footer;
  - a row's Delete still active beside a bulk Delete.
- **Pass:**
  - "3 selected · Archive · Delete · ×" in place of the table's toolbar, with the row menus dimmed until the selection clears;
  - a toolbar that keeps its search and filters while the selection bar sits above it.

### 3. A bulk action reports its result in numbers, and keeps what failed

After a bulk action, people learn what happened, in numbers: how many items it changed, and which items failed or were skipped, with the reason. Items that failed stay selected, so people can try again. Selected items the action can't apply to are never skipped without a word: the product says so before the action, or reports them after it.

- **Why:** a result that counts failed or skipped items as done makes people believe work is done that isn't, and a bare "Something went wrong", or a cleared selection after a partial failure, leaves people unable to find what failed, so Shopify keeps the selection on failure and Marigold reports "11 of 12 events updated. 1 failed" and keeps the failed one selected (Shopify, "Migrate SelectAllActions from Polaris React"; Marigold, "Bulk actions"). Cloudscape blocks selecting items no action can touch, and says why (Cloudscape, "Table").
- **Applies when:** people run an action on several items at once.
- **Check:** select five items, make one fail (block its request, or pick one the action can't apply to), and run the action. "Done" or a count that includes the failed item fails. A bare error, or a selection cleared with no way to find the failed item, fails.
- **Fail:**
  - "Archived" when 2 of the 6 selected were locked and skipped;
  - "Error" after a move that half worked, with the selection gone.
- **Pass:**
  - "Moved 4 of 5 files. 1 failed: you don't have access to it. It stays selected.";
  - a selection kept after a successful action, so people can run a second action on the same set.

### 4. A bulk edit changes only what people set

A form that edits several records at once never shows one record's value as if all of them shared it. A field whose values differ shows that they differ, such as "Multiple values", and saving writes only the fields people changed. A field that holds several values, such as tags, says whether the change adds, removes or replaces them. A field that every record shares may show its value. The button says how many records the change covers, such as "Apply to 12 events".

- **Why:** the plain way to build it loads the first record into the form, and saving it then writes that record's values over every other record without a word, so Marigold never fills a field from one record when the values differ, and writes only what people touched (Marigold, "Bulk actions").
- **Applies when:** people edit several records at once.
- **Check:** select records whose values differ in a field and open the bulk edit: a field filled from one record fails. Change one other field, save, and open the records: any other field changed fails. Add one tag to records that already have different tags: their own tags replaced fails.
- **Fail:** a bulk price edit that shows the first item's price, and saves it to all twelve.
- **Pass:** "Price: Multiple values" left as it is, and "Apply to 12 products" changing only the status that was set.

## Searching

### 5. Search covers everything people look for, or says what it covers

The main search finds everything people come to find: records, people, settings and help. A search box that covers less says so in its field, such as "Search projects", and a narrower scope starts on "All" and is easy to widen.

- **Why:** a search box that covers less than people expect, without saying so, answers "No results" for things that exist, and people decide they aren't there. People search for whatever they need, not only the main kind of record: on intranets, one search over content, people and tools worked best, and people slowed down when several search fields existed (Kaley and Rosala 2024); 34% of shoppers searched for things that aren't products, such as a return policy (Scott 2026, "Search Query Types"). Carbon starts a scope menu on "All", and Apple defaults to a broader scope (Carbon, "Search"; Apple, "Search fields").
- **Applies when:** a product has search.
- **Check:** from the main search, look for a record, a person and a setting. One the search misses, without saying it covers less, fails. A narrower scope that starts on anything but "All" fails.
- **Fail:** a header search that finds only projects, with nothing saying so.
- **Pass:**
  - one field that finds projects, people and settings, grouped;
  - a table's own box that reads "Search invoices", searching only that table;
  - a search that starts on the place people are in, shown in the field, such as one code repository, with one step to widen it.

### 6. Search keeps the query and says what it found

After a search, the query stays in the field, ready to edit. The page says how many results matched, zero included, or "1,000+" where the exact total isn't known. Results show as people type when they come back fast, and after people submit when the data is large or slow. Before people type, the field may offer recent or common searches; while they type, suggestions that move with the arrow keys and take Enter.

- **Why:** people change a word and search again, often several times, so the query stays (MacDonald 2026, "Search Bar UI"; Material 3, "Search"), and a count, zero included, tells them whether to widen or narrow (Carbon, "Search"; Cloudscape, "Text filter"). Results as people type suit a small, fast set; on a large one they lag behind the typing (Carbon, "Search"; PatternFly, "Filters"). Carbon, Apple and the W3C offer recent searches before people type, and suggestions as they type, moved with the arrow keys and taken with Enter (Carbon, "Search"; Apple, "Search fields"; WAI-ARIA APG, "Combobox Pattern").
- **Applies when:** a product has search.
- **Check:** search, then look at the field and the count: an empty field, or no count, fails. Search for something that doesn't exist: no "0 results" fails. Type fast into a live search over a large set: results that lag behind the typing fail.
- **Fail:** results for "acme" under an empty search box.
- **Pass:**
  - "acme" still in the field, and "12 results" above them;
  - a jump-to menu, such as a command menu, that shows live matches with no count and closes when people choose one.

## Filtering

### 7. Filters, search and select-all cover the whole collection

A filter, a search over a list and "select all matching" act on the whole collection, not only on the items loaded so far. Where the product can only work on what it loaded, it says so.

- **Why:** people expect filters to work on the full collection, not just what is visible (Cloudscape, "Filtering patterns"). A filter over loaded rows only shows "No results" for an item that exists, so people decide it isn't there, and may create it again.
- **Applies when:** a list loads in parts, by page or as people scroll.
- **Check:** on a list loaded in parts, filter for an item that sits on a page not yet loaded, and select all matching: a miss, or a count that matches only the loaded items, fails.
- **Fail:** "No results" for a customer on page 9 of a list that loaded page 1.
- **Pass:** a filter that asks the server and shows "1 of 2,430 customers".

### 8. Applied filters show in one place, each easy to remove

Every filter in use shows near the results, each with its own way to remove it, and one control clears them all. A closed filter panel shows how many filters apply, and can clear them without being opened. People can pick several values in one filter; values in one filter widen the results, and separate filters narrow them. Filters apply at once when results come back fast and people set one at a time, and with an Apply button when they set several or results are slow. A filter shown as a shortcut above the list stays in the full filter panel too. On shopping sites, where the count is exact, each value shows how many results it would leave.

- **Why:** without an overview of applied filters, people tailored lists more slowly, some lost their way, and on phones they reopened the panel just to check what was applied (Reeves 2026). Carbon's closed filter shows the number applied and clears them without opening, and PatternFly combines values in one filter with OR and filters with AND (Carbon, "Filtering"; PatternFly, "Filters"). Carbon suits instant updates to one choice at a time, and an Apply button to several choices or slow results (Carbon, "Filtering"). People expect the filter panel to hold every filter, so one moved out as a shortcut is missed there (Scott 2023, "Promoting Important Filters"). On shopping sites, counts beside values give people confidence before they click (MacDonald 2026, "Ecommerce Filter UI").
- **Applies when:** a list has filters.
- **Check:** apply three filters, close the panel and look at the list: no sign of what is applied, or no way to remove one without reopening the panel, fails. Try to choose two values in one filter: being forced to choose one fails, unless the filter switches between views, such as All and Mine, or its values nest, such as date ranges. Set filters on a slow list: results reloading at every choice fail.
- **Fail:**
  - a "Filters" button that looks the same with or without filters applied;
  - a status filter that takes only one status.
- **Pass:**
  - "Status: Open, Waiting × · Owner: Me × · Clear all" above the results;
  - a single select in the toolbar whose value already shows what is applied.

## Choosing one item

### 9. A picker tells look-alike options apart, and says what it is doing

Where two options can share a name, as people, companies and records people create can, each option carries a detail that tells them apart, such as an email, a company or a place. A picker that loads its options shows that it is loading, says so when loading fails and offers to try again, says when nothing matches, and never shows a failed load as "No matches".

- **Why:** a failed load shown as "No matches" makes people decide the item doesn't exist, and they may create it again. People choose by what they see, and two rows reading "Anna Smith" make it a guess, so Salesforce shows each lookup result with its type and place, and Atlassian groups options that would otherwise share a name (Salesforce Lightning Design System, "Lookups"; Atlassian, "Select"). 18 of 35 pickers showed a second line, such as an email or a company, and 15 more an avatar only, which can't tell apart two people with the same initials and no photo (Mobbin survey, 2026, convention). Cloudscape gives a loading picker states for loading, failure with a way to recover, no match and the end of results (Cloudscape, "Autosuggest").
- **Applies when:** people choose one item from a list that can hold look-alikes, or from options the product loads.
- **Check:** create two records with the same name and open the picker: two identical options fail. Slow, then block the request for options: an empty list, or "No matches", during the failure fails, and no way to try again fails.
- **Fail:**
  - "Anna Smith" twice in an assignee picker;
  - "No contacts found" while the request is failing.
- **Pass:**
  - "Anna Smith · anna@acme.com" and "Anna Smith · Globex";
  - "Couldn't load contacts. Retry".

### 10. A picker over a list that may be incomplete has a way out

When what people need may not be in the list, the picker offers a next step: a "None of these" answer, using what they typed, or creating the item, without losing what they had entered elsewhere on the page. Before creating a record, it shows close matches, so people don't create a second copy. Where only listed values are valid, it offers none of these.

- **Why:** a dead end makes people give up or pick a wrong item, so Cloudscape offers to use the exact value people typed, Salesforce's fuller lookup offers to create a new record, GOV.UK adds a "None" answer so people don't skip a question by accident, and a manual address where its lookup misses (Cloudscape, "Autosuggest"; Salesforce Lightning Design System, "Lookups"; GOV.UK, "Checkboxes" and "Addresses"). Creating from a picker that opens a separate page loses what people had entered on this one, and a record created while a close match exists becomes a second copy that splits the record's history.
- **Applies when:** people choose from a list that may not hold what they need: contacts, companies, tags, addresses.
- **Check:** type a name that matches nothing: "No matches" with no next step fails, where people may enter or create one. Create a record from the picker: losing what was entered elsewhere fails, and so does creating a near-duplicate of an existing one with no warning.
- **Fail:**
  - "No matches" and nothing else, for a tag people want to use for the first time;
  - "Create contact" that opens a new page and loses the half-written note.
- **Pass:**
  - "No contacts match 'Ivan P.' · Create contact 'Ivan P.'", which opens over the note and shows "Ivan Petrov · Acme" as a possible match first;
  - a currency picker with no way to add a currency.

### 11. Many similar matches get a fuller view, and choices stay put

When many options match, the best matches come first, the picker says how many there are, and a fuller view, with details side by side, is one step away. What people have chosen stays visible, and the list doesn't reorder while they choose.

- **Why:** typing more narrows a list only when people know a name that tells the match apart; twenty contacts named Smith need their details compared side by side, so Salesforce's lookup opens a fuller view with columns, filters and a result count (Salesforce Lightning Design System, "Lookups"). Cloudscape orders options by closest match and relevance, and Primer can rank them by how often each is chosen (Cloudscape, "Autosuggest"; Primer, "Autocomplete"), and Primer keeps chosen items first when a list opens and avoids reordering after a choice (Primer, "SelectPanel").
- **Applies when:** a picker can return many similar matches, or people choose several options.
- **Check:** search for a common name with 20 or more matches: rows that look alike, with neither a count nor a way to compare their details, fail. Choose several options: a list that reorders under the pointer, or choices hidden once made, fails.
- **Fail:** an airport picker that lists "Portland" three times, with nothing to tell Oregon from Maine.
- **Pass:**
  - "20 matches · View all", which opens a table with company, email and last activity;
  - a mention picker whose rows already show what tells people apart, such as a title and a city.
