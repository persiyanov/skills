# Navigation

Covers how people move around a product: what the main navigation holds and its shape at each width, where the account, settings and notifications go, what people create in the sidebar, how people tell where they are and go up a level, the browser's Back, the addresses of views, tabs, the command menu, a second way to reach each page, and help in the same place on every page. Read it for any product with more than one place to go. Not covered here: links that land on the thing they name, skip links and landmarks, how the current item stands out, keyboard shortcuts, the words of labels, Back inside a form with steps, and paging through a long list, which other guides hold. The problem it solves: people who can't find a section, can't tell where they are, lose their place when they press Back or share a link, or are stuck on a page a link dropped them on.

- These rules are a floor: meeting them all makes a product well made, not yet good.
- **Every product:** holds even when popular products break it, and no product's own rules change it.
- **Current practice:** what research, the design systems of top products and strong designers recommend now. A product's own documented value replaces it.
- **Default:** a starting point for designing, taken from strong designers' practice: a review finding only when a harm can be named.
- **Fail and Pass:** examples. A Pass shows one way to meet the rule, not the only one.

The rules come in three groups: the main navigation, where people are, and moving around.

## The main navigation

### 1. The main navigation lists the product's main sections, and only peers

The main navigation lists the few sections people go to for their work, named for their tasks and the things they work with, not for the company's teams or the product's internal parts. Each item stands beside the others as an equal: a feature that only supports them, such as an assistant or help, opens where people work or sits with the account tools, not as a section. It lists the main sections, not every page: a page people reach from a section isn't listed beside it. A product that is one journey from start to end, such as a sign-up or a tax return, shows its steps instead of navigation links.

- **Why:** GOV.UK keeps navigation links for services that people use again and again, for several tasks in no fixed order, and doesn't list every part of a service in them; a service with a clear journey from start to end may need no links at all (GOV.UK, "Help users to navigate a service"). Carbon asks for navigation that follows the domain rather than an org chart, and Fluent warns that search and pinning can't make up for unclear navigation (Carbon, "Global header"; Fluent 2, "Nav"). Interface Craft took the chat out of a tab bar because it supports the main flow rather than stands beside it, and put it in a field on the main screen (Interface Craft, "Redesigning a Mobile Web App, Part 2"). Menu labels use people's words, with no made-up names or internal jargon (Laubheimer 2024).
- **Kind:** Current practice.
- **Applies when:** a product has more than one place people go to.
- **Check:** list the items of the main navigation. For each, name the task people go there for, and check that it stands beside the others: an item named for a team or a system, an item that only supports another, or a page that belongs under another item, fails. In a product that is one journey from start to end, a navigation bar in place of its steps fails; a list of its steps that lets people go back to one passes.
- **Fail:** "Growth" and "Integrations Hub", named after teams. "Assistant" as a tab beside "Tasks", when it only helps with tasks.
- **Pass:** "Inbox, Contacts, Deals, Reports", with the assistant opening from a field on every page.
- **Not a fail:** "Chat" as a section in a product whose main work is the chat.

### 2. The navigation's shape fits the number of sections and levels

In an application, a side navigation suits five or more sections, or any second level; a bar across the top suits fewer, in one level (default). On a phone, a bar at the bottom holds at most five sections of equal weight, and a section people use often never hides behind "More"; the bar stays in view on the screens inside each section, except under a sheet or a task that takes over the screen, and each section keeps the screen people left it on. Where there is room, the navigation stays in view: on a desktop it never starts hidden behind a menu button. At narrow widths it becomes a bottom bar, or a menu button at the top left (mirrored in right-to-left languages), labeled "Menu" where there is space. A sidebar narrowed to icons shows each label on hover and on focus, and on a touch screen it can widen to show them.

- **Why:** PatternFly gives five or more sections, or any second level, to a side navigation, and Carbon gives its left panel more than five secondary items (PatternFly, "Navigation"; Carbon, "UI shell left panel"); Laubheimer finds people expect an application's main navigation on the left and a website's in the header (Laubheimer 2024). Material 3 and Android give a phone's bar three to five destinations (Material 3, "Navigation bar"; Android Developers, "Navigation bar"). Apple's tab bar lets people switch sections while each keeps its own place, and Apple warns that people forget which section they are in when the bar is hidden, and miss the tabs a More tab holds (Apple, "Tab bars"); of 40 iPhone apps seen, 23 had five tabs and 36 had no More tab (Mobbin survey, 2026, convention). People forget navigation they can't see on a desktop (Laubheimer 2024), and Material 3 never hides its collapsed rail (Material 3, "Navigation rail"). Most people now recognize the three-line icon at the top left, though that study measured recognition, not how well people find what it hides, and it advises the label "Menu" (Kaplan 2025, "The Hamburger-Menu Icon Today"). PatternFly gives each icon in a narrowed sidebar a tooltip with its label (PatternFly, "Navigation").
- **Kind:** Every product: on a touch screen, an icon's label can be shown without hover, since people there can't otherwise learn what the icon means. Current practice: the shape that fits; at most five sections in a phone's bar, with none people use often behind More; the bar in view, and each section's place kept; the navigation in view where there is room; a labeled menu button at the top left. Default: five sections as the point to move from a bar at the top to a side navigation.
- **Applies when:** a product has a main navigation.
- **Check:** count the sections and levels, and see which shape holds them. At desktop widths, a main navigation that starts hidden behind a menu button fails. At phone width, more than five items in a bottom bar, a More that hides a section people use daily, a bar that disappears inside a section, or a section that returns to its start when people switch back to it, fails. Narrow the sidebar to icons, then hover over them, tab through them and, on a touch screen, look for a way to widen it: an icon whose label never shows fails.
- **Fail:** eight sections squeezed into an app's top bar in small type. A More tab hiding Messages in an app people open for messages. A three-line menu on a 1440 px screen with room to spare. A search that is cleared when people switch to Home and back.
- **Pass:** a grouped sidebar on a desktop; on a phone, four labeled tabs, each opening where people left it.
- **Not a fail:** a website's header with many sections. A sidebar people closed themselves, which stays closed until they open it.

### 3. Account, settings, notifications and help sit together, apart from the sections

The tools that serve the whole product, such as the account menu, settings, notifications, help and the switch between workspaces, sit together, apart from the section links, and in the same place on every page: in the bar across the top, or at the top or bottom of the side navigation. Where people belong to more than one workspace or account, the one they are in shows on every page.

- **Why:** Cloudscape and Carbon put these tools in the top bar, Notion keeps its inbox fixed in one corner of its sidebar, and Linear puts its inbox in the sidebar too (Cloudscape, "Service navigation"; Carbon, "Global header"; Notion Help, "Navigate with the sidebar", convention; Linear Docs, "Inbox", convention). Of 50 business web apps seen, 27 had the account menu as an avatar at the top right and 14 at the bottom of the sidebar; of 48, 25 had notifications under a bell in the top bar and 15 as an item in the sidebar (Mobbin survey, 2026, convention). Carbon's header can show which account people are using (Carbon, "Global header"), and people who can't see which workspace they are in may invite someone into the wrong one. People look for a tool where they found it before, so navigation repeated on every page keeps its order (WCAG 2.2, 3.2.3), and so does help (3.2.6).
- **Kind:** Every product: tools repeated on every page keep the same order among the page's parts, and help keeps its place among them, unless people move them (WCAG 2.2, 3.2.3 and 3.2.6), since people otherwise look for them where they were. Current practice: the tools grouped together, apart from the section links; the current workspace or account shown.
- **Applies when:** a product has tools for the account, settings, notifications or help.
- **Check:** on three pages at the same width, find the account menu, settings, notifications and help. One that changes its order among the page's parts fails; one that moves place, or sits among the section links, fails current practice. Join two workspaces and open a page in each: no sign of which one you are in fails current practice.
- **Fail:** Settings in the sidebar on one page and only in the avatar menu on another. Help as the fourth of seven sections.
- **Pass:** an avatar at the top right with Settings, Help and Sign out, a bell beside it, and the workspace's name at the top of the sidebar, on every page.
- **Not a fail:** Notifications or Activity as a tab or a sidebar item, in products where people go there as part of their work, as in social and chat apps. An inbox at the top of the sidebar, set apart from the sections. An Account tab or link at the end of the navigation, as on phones and in small services.

### 4. What people create stays short in the side navigation

When the side navigation lists things people create, such as projects, channels or pages, they sit below the main sections, in groups that fold, or as a short list of favorites or recent items with a link to all of them, so the main sections and the tools stay in view however many there are.

- **Why:** Carbon keeps content with no upper limit, such as what users create, out of its side navigation, because usability drops as the items grow (Carbon, "Global header"), while Notion lists pages in its sidebar, in toggles people open and close (Notion Help, "Navigate with the sidebar", convention). Of 46 web apps seen, 25 listed what people create in the sidebar, mostly docs, project and chat tools; 16 of those showed a control to fold the groups, none clearly lacked one, and 9 couldn't be told from a still screen (Mobbin survey, 2026, convention).
- **Kind:** Current practice.
- **Applies when:** the side navigation lists things people create.
- **Check:** create 50 projects or channels: a main section or a tool pushed out of view, or a group that can't be folded, fails.
- **Fail:** a sidebar that lists 200 projects above Settings, with no way to fold them.
- **Pass:** "Favorites" with five items, and "Projects" folded, ending in "All projects".
- **Not a fail:** a CRM whose sidebar lists only its sections, with records in their lists.

## Where people are

### 5. People can tell where they are, even when a link brought them there

Each page's header names the page. The navigation marks the section the page belongs to, even when the page sits deeper than the navigation goes, or inside a group that is folded, so people who arrive from a link see where they are.

- **Why:** Laubheimer finds a missing mark of the current place among the most common mistakes in menus, and notes that people often arrive somewhere other than the home page (Laubheimer 2024). Fluent shows the mark on a folded group when the current page is inside it, and Primer's navigation patterns exist to show people where they are and where they can go next (Fluent 2, "Nav"; Primer, "Navigation").
- **Kind:** Current practice.
- **Applies when:** a product has a main navigation.
- **Check:** open three pages from direct links, including one below the navigation's deepest level and one inside a folded group: a navigation with nothing marked, or a page whose header doesn't name it, fails.
- **Fail:** a product page in a shop, reached from a search engine, with nothing marked in the shop's menu.
- **Pass:** "Shoes" marked in the menu, and "Trail Runner 2" as the page's title.
- **Not a fail:** nothing marked on a page outside every section, such as sign-in or an error page. A full-screen view that shows no navigation, such as a document editor, whose header names it and links back to its list.

### 6. A page below the top offers a way up that doesn't need the browser

A page below a section's top shows the way up on the page: a link to its parent where it is one level down, and breadcrumbs where it is deeper. Breadcrumbs follow where the page sits, not the pages people visited; they end with the current page as plain text, or with its parent when the page's heading names it; they add to the main navigation rather than replace it; and they stay out of step-by-step flows, which show their steps instead.

- **Why:** people who arrive on a deep page from a link have no history to go back through, and some avoid the browser's Back because sites break it (GOV.UK, "Back link"); Shopify asks for a way to the previous page without the browser's button (Shopify, "Navigation"), and Android gives a screen opened from a link a history that leads up through the app, as if people had walked there (Android Developers, "Principles of navigation"). Breadcrumbs show where a page sits in the structure, don't replace the main navigation, and aren't needed in a structure one or two levels deep (Laubheimer 2018). Primer marks the current page as the last item, while GOV.UK ends the trail with the parent and keeps breadcrumbs out of journeys done in order (Primer, "Breadcrumbs"; GOV.UK, "Breadcrumbs"); Primer also gives a child page a clear way back to its parent (Primer, "Navigation"). Of 19 record pages seen, 11 had breadcrumbs and 5 a single link to the parent (Mobbin survey, 2026, convention).
- **Kind:** Current practice.
- **Applies when:** a product has pages below the top of a section.
- **Check:** open a page two levels down from a link, in a new window: no way up on the page fails. Read its breadcrumbs: a trail of pages visited, or a current page shown as a link, fails, and so do breadcrumbs in a sign-up flow.
- **Fail:** a record page whose only way back is the browser. "Home › Search results › Carer's Allowance", built from the pages visited.
- **Pass:** "Home › Benefits › Carer's Allowance", with the last item plain text; on a phone, "‹ Benefits".
- **Not a fail:** "‹ Contacts" alone on a page one level down.

## Moving around

### 7. Back returns to the view people saw before

The browser's Back, Android's Back and the back swipe return to the view people saw before, as they left it: a list comes back with its filters and its place, and in a browser and on Android, an overlay or panel that covers most of the page closes. On iPhone, a sheet closes with a swipe down instead. Back never repeats an action people can't undo, such as a payment, never undoes what they saved, and, when they leave with unsaved changes, asks first or keeps the changes.

- **Why:** many people try Back first to return to where they were before, and the W3C's guidance for people with cognitive disabilities says Back should never lose their work (W3C WAI, "Let Users Go Back"). An overlay people opened changed where they were, so a Back that leaves the page takes them past the place they wanted. The HTML standard treats Android's back button or gesture as a request to close what is shown, such as a dialog, a menu or a popover (WHATWG, HTML Standard, "Close requests"). GOV.UK keeps Back working because people who meet sites that break it stop using it (GOV.UK, "Back link"), and Primer warns about losing unsaved changes when people leave a page (Primer, "Navigation").
- **Kind:** Every product: Back never repeats an action people can't undo, such as a payment, since they would do it twice without meaning to. Current practice: the view as people left it, filters and place included; overlays closed by Back in a browser and on Android; nothing saved undone; unsaved changes asked about or kept.
- **Applies when:** people move between views in a browser or a phone app.
- **Check:** open an item from a filtered list and press Back: a list that lost its filters or its place fails. In a browser and on Android, open each overlay or panel that covers most of the page and press Back: leaving the page fails. Pay, or send something that can't be taken back, then press Back: the action ready to run again fails; a save undone fails current practice.
- **Fail:** a photo viewer over the gallery, where Back leaves the gallery. A checkout where Back after paying offers the payment again.
- **Pass:** Back closes the viewer and leaves the gallery where it was; after paying, Back shows "Order placed".
- **Not a fail:** on a desktop, Back that leaves the page while a small menu or tooltip is open: people don't see those as views.

### 8. Every view people may share or come back to has its own address

Each view people may share, bookmark or come back to, such as a record, a tab with content of its own, a filtered or sorted list, or a search, has its own address that reopens it as it was. A record opened in a panel or over a list still has its own address, since people share records.

- **Why:** Carbon suggests keeping the state that matters in the URL, so people come back to where they were after drilling down, and Primer changes the URL for breadcrumbs and for a section people scroll to by its anchor, while leaving open whether a dialog changes it (Carbon, "Global header"; Primer, "Navigation"). A view with no address of its own can't be shared or reopened, so a teammate who gets the link sees something else.
- **Kind:** Current practice.
- **Applies when:** a product runs in a browser, or has links that open its views.
- **Check:** set a filter and a sort, open a record in its panel, copy the address, and open it in a new window: a different view, a lost filter or a closed panel fails.
- **Fail:** a ticket opened in a dialog whose address stays on the list, so a teammate gets the list. Filters gone after a reload.
- **Pass:** an address that reopens the filtered list with ticket TKT-142 open in its panel. A flight search whose address keeps the dates, the airports and the filters.
- **Not a fail:** an open menu, or a half-typed search, that the address doesn't keep. A search on sensitive data, such as a patient's name, kept out of the address, so it doesn't land in the browser's history or in logs.

### 9. One row of tabs either changes the page or switches what it shows, never both

In one row of tabs, every tab either goes to a page of its own, with its own address, or switches content within the page. A row never mixes the two.

- **Why:** mixing tabs that switch content in place with tabs that go to another page makes people lose track of where they are (Sunwall 2024, "Tabs, Used Right"). Primer won't mix tabs that change the URL with tabs that only switch a panel, and Material 3 uses navigation for separate pages and tabs for related content within a page (Primer, "Navigation"; Material 3, "Navigation bar").
- **Kind:** Current practice.
- **Applies when:** a page has a row of tabs.
- **Check:** in each row of tabs, press every tab and watch the address, or in an app the screen: a row where some tabs go to a new page and others switch content in place fails, and so does a tab that leads to a page without the row.
- **Fail:** "Overview, Activity, Settings", where Settings goes to another page and the others switch the panel below.
- **Pass:** a record's tabs that each have their own address. A dialog's tabs that each switch the panel, with no address.

### 10. A command menu is a faster way to what the screen offers, never the only way

Where a product has a command menu, one shortcut opens it from any page, and a control on screen opens it too. Cmd or Ctrl+K is the common key; where it clashes with the browser's or the system's, people can change it. Every page, and every action people use often, can also be reached from the screen; only rare commands may live in the menu alone.

- **Why:** shortcuts and other faster ways serve people who know them, and people who never find them can still do the task another way (Krause and Harley 2024); Fluent warns that search can't make up for unclear navigation (Fluent 2, "Nav"). GitHub opens its command palette with Ctrl or Cmd+K and lets people change the keys where they clash with the system's or the browser's, and Linear runs actions from the same keys or from a right-click menu (GitHub Docs, "GitHub Command Palette"; Linear Docs, "Select issues"; convention). Of 32 business web apps seen, 25 showed a search or command entry on screen, and 11 of those showed a ⌘K or "/" hint (Mobbin survey, 2026, convention).
- **Kind:** Every product: no page is found only through the command menu, since each page needs more than one way to reach it, unless it is a step in a process (WCAG 2.2, 2.4.5); and the menu can be opened without its shortcut, since people on touch screens, or who never learn the key, otherwise can't reach what it holds. Current practice: one shortcut from any page, with a key people can change; the actions people use often also on the screen.
- **Applies when:** a product has a command menu.
- **Check:** open the command menu with its shortcut, and with a control on screen, on three different pages: a menu that opens only by its key fails. Then, for five commands people use often, find a way to do each on the screen: one found only in the menu fails current practice, and a page found only there fails.
- **Fail:** "Resync all chats", run every week, found only in the command menu. A menu that opens only with ⌘K, with nothing on screen to open it.
- **Pass:** a search field in the top bar that opens the command menu and shows ⌘K; "Resync all chats" also in the panel's ⋯ menu.
- **Not a fail:** a rare command, such as reloading the window, found only in a code editor's command menu. A small product with no command menu.

### 11. People can reach a page more than one way, and help sits in the same place on every page

Every page in a product can be found in at least two ways, such as the navigation and a search, a command menu, a site map or links from related pages, except a step in a process or its result. Where help repeats across pages, such as contact details, a contact form, a chat or help articles, it sits in the same order relative to the rest of the page on each.

- **Why:** People find pages in different ways, and some find one easier, such as search for people with low vision; and people who need help find it more easily when it is in the same place (Understanding 2.4.5 and 3.2.6).
- **Kind:** Every product: more than one way to reach each page in a set, unless the page is a step in a process or its result (WCAG 2.2, 2.4.5); help that repeats across pages (contact details, a contact form, a self-help link, a chat) keeps the same order relative to the rest of the page, unless the person changed it (3.2.6); since people who can't use one way are otherwise stuck, and people who need help don't find it where they found it before.
- **Applies when:** a product has more than one page.
- **Check:** pick three pages and reach each in two ways: one reachable only through the navigation fails, unless it is a step in a process. List the help on several pages (a contact link, a chat button, a help link): one that moves to a different place in the order fails.
- **Fail:** settings pages reachable only through a nested menu, with no search and no links. A help link in the header on some pages and only in the footer on others.
- **Pass:** a command menu that finds every settings page, beside the sidebar. A "Help" button in the same place on every page.
- **Not a fail:** checkout steps reachable only from the step before. A site of three or four pages, each linked from the home page, with a link home on every page (Understanding 2.4.5). A product with no help on its pages. A chat button that moves when the window narrows, since WCAG compares pages at the same width.
