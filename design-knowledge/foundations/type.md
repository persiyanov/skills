# Type

Covers how text is set: typefaces, sizes and the type scale, line height and line length, letter spacing, weights, figures and typographic characters, line breaks and truncation, how fonts load, text in other languages, and how text follows the user's size settings.

- These rules are a floor: meeting them all makes a product well made, not yet good.
- **Every product:** holds even when popular products break it, and no product's own rules change it.
- **Current practice:** what research, the design systems of top products and strong designers recommend now. A product's own documented value replaces it.
- **Default:** a starting point for designing, taken from strong designers' practice: a review finding only when a harm can be named.
- **Fail and Pass:** examples. A Pass shows one way to meet the rule, not the only one.

The rules come in four groups: rules for every level, then rules for primitives (a text style or a single control), components (a part made of controls, such as a card or a list row) and pages.

## Every level

### 1. Text is big enough to read

Text is sized for how the page is used. Pages made for reading, such as articles, help and marketing pages, set their text larger than the screens people work on in a tool, and nothing people need is tiny.

- **Why:** Reading slows sharply below a critical size, an x-height of about 0.2° of visual angle (Legge and Bigelow 2011), and in long reading on the web people understood more at larger sizes (Rello et al. 2016). Systems set body text at 16 px or more on pages made for reading and at 14 px on a tool's screens, and their smallest style at 11 or 12; only Apple's macOS styles, for desktop apps, go lower, to 13 for body text and 10 at the smallest (Carbon, "Type sets"; Material 3, "Type scale"; GOV.UK, "Type scale"; Primer, tokens; Apple, "Typography").
- **Kind:** Current practice: no text people need is smaller than 11 px, the smallest style in the web and phone systems above; 16 px or more for body text on pages made for reading; 14 px for body text on the screens of a tool people work in, short paragraphs included, and 13 px only at desktop widths, as in Apple's macOS styles.
- **Applies when:** text people need to read. Decorative text and logos don't count.
- **Check:** list the computed font size of each kind of text on the screen: paragraphs, labels, controls, captions, legal text, badges. Text people need under 11 px fails, and so do paragraphs under 16 px on a page made for reading and body text under 14 px at a phone width.
- **Fail:** timestamps at 10 px in a list. A help article in 13 px paragraphs.
- **Pass:** help articles at 16 px; in a tool, table cells, labels and descriptions at 14 px and captions at 12 px.
- **Not a fail:** 14 px descriptions and comments on a tool's working screens, and 13 px at desktop widths: Carbon's productive set and Primer use 14 px, and Apple's macOS body style is 13 pt.

### 2. Every text style comes from one scale

The product has a small set of text styles. Each is a size with its line height, weight and letter spacing, for one kind of text, and every text on the screen uses one of them. A style can also come in a heavier weight, to stress a label or a few words. As a starting point, one screen uses about five text sizes (default).

- **Why:** Systems define a fixed set of text styles, each for one kind of text, and a product uses only some of them: Material 3 has 15, each with an emphasized version in a heavier weight, Apple 11 and GOV.UK 7 (Material 3, "Type scale"; Apple, "Typography"; GOV.UK, "Type scale"). Each extra size on one screen blurs the steps between levels, so designers start from about five (Interface Craft, "Typography Details").
- **Kind:** Current practice. The product's scale comes first. Default: about five text sizes on one screen.
- **Check:** list each distinct combination of computed font size, line height, weight and letter spacing on the screen, with the text it styles. Match each to the product's text styles, from its tokens or design docs where they exist. A combination that matches no style, or two styles for one kind of text, fails.
- **Fail:** one label at 15 px among text at 14 and 16 px. Card titles at 16 px semibold on one page and 17 px bold on another.
- **Pass:** five text styles across the product, each named for a kind of text.
- **Not a fail:** a label at the body style's size and line height in a heavier weight: it is that style's emphasized version, such as medium in Material 3 and semibold in Apple's styles. A marketing headline that steps down to a smaller size on narrow screens, as Carbon's expressive set and GOV.UK's type scale do. Six sizes on a dense data screen, where each marks a level people need.

### 3. Few typefaces, each with one job

One family sets the interface text, a monospace sets code, and at most one more face sets titles or the brand. Each face keeps its job everywhere. The interface face is made for screens: a large x-height, wide letters and open shapes. Where a family comes in optical sizes, such as Text and Display cuts, small text uses the one made for small sizes.

- **Why:** Too many typefaces blur the hierarchy and make text harder to read (Apple, "Typography"). Apple, Material 3, Carbon and Primer each pair one interface family with a monospace, and Material 3 allows one brand face for display and headline text. On screen, people prefer faces with a larger x-height, wider letters and more open shapes, while serif and sans serif read at the same speed (Dyson 2023). Optical sizes draw small text with heavier strokes than large text (MDN, "font-optical-sizing"), and Apple's system fonts adjust to each size by themselves (Apple, "Typography").
- **Kind:** Current practice.
- **Check:** list the fonts each kind of text renders in, from the computed `font-family` and the faces the page loads. Two faces for one job, or more than three faces on a screen, fails. Then set the interface face's smallest text beside a system interface font at the same size: a clearly smaller x-height or clearly narrower letters fails. Read the face name or `font-variation-settings` of small text: a Display cut, or a fixed large `opsz`, fails.
- **Fail:** headings in one sans serif and body text in another that looks almost the same. A narrow display face used for 13 px table text. A family's Display cut on 13 px labels.
- **Pass:** one sans serif for all interface text, and a monospace for code and IDs.
- **Not a fail:** a display face for the main headline of a marketing page.

### 4. Text grows with zoom and with the user's text size

When people zoom in, or raise their browser's text size, the text grows and nothing is lost.

- **Why:** WCAG 2.2 requires text that resizes to 200% without loss, except captions and images of text; browser zoom alone can meet it, and text that a smaller layout sets smaller passes if zooming further makes it twice its first size (1.4.4, AA; Understanding 1.4.4). Text sized only in viewport units doesn't grow with zoom (failure F94). Images of text pass only where people can restyle the text or its exact look is essential (1.4.5, AA). Font sizes in px ignore the browser's text-size setting in some browsers (MDN, "font-size"), and about a third of phone users have changed their system text size (CSSWG, `env(preferred-text-scale)` explainer).
- **Kind:** Every product: browser zoom can make text twice its size, at 200% or, where a smaller layout takes over, at a higher zoom; at 200% none of it is cut off, overlaps or disappears; words are real text, not images. Captions on video, images of text people can restyle, and images whose exact look is essential, such as a logo, don't count. Current practice: font sizes in rem or em, so text follows the browser's text-size setting.
- **Check:** zoom to 200%, and measure text on screenshots: developer tools show sizes before zoom. Nothing should be cut off, overlap or be hidden. Text that isn't twice as large: keep zooming, up to the browser's limit (500% in most browsers); it fails if it never reaches twice its size, often because its size is in `vw`. A font size set with `clamp()` and `vw`, or stepped by media queries, whose largest value is more than 2.5 times its smallest may not reach twice its size even at 500% zoom (Barvian 2023): zoom that text to 500% before passing it. In the CSS, look for px font sizes on the root element or on text: that text ignores the browser's text-size setting. Look for images that contain words.
- **Fail:** a headline at `font-size: 6vw` that stays the same size at 200% zoom. A card title cut off at 200%. A pricing table saved as an image.
- **Pass:** at 200% zoom the text wraps and nothing is lost, and it also grows when the browser's text size is raised.
- **Not a fail:** a logo or wordmark as an image: WCAG counts text that is part of a logo or brand name as essential (1.4.5).

### 5. Every language gets its letter forms and its room

The page states its language, and so does any passage in another language. Text in any script the product shows has room for its full height, the right letter forms, and no fake bold or italic. A name or other text people enter, shown inside the interface's own text, keeps its own direction, so the words and numbers around it stay in place.

- **Why:** The language in code lets screen readers pronounce the text and browsers show the right characters and hyphenate it (WCAG 2.2, Understanding 3.1.1; MDN, "hyphens"). Many scripts need taller lines, or text overlaps: about 7% taller for Arabic, Chinese, Hindi, Japanese, Korean, Thai and Vietnamese, and 30% for Burmese and Telugu (Material 3, "Type scale"). Fonts for Chinese, Japanese and Korean often have no bold or italic, and faked ones can hurt legibility or change the meaning; MDN turns faking off for Arabic too (MDN, "font-synthesis"). Lines of Chinese, Japanese and Korean run at most about 40 characters (W3C, JLREQ, for Japanese; WCAG 2.2, 1.4.8). Text whose direction isn't known needs `dir="auto"` or `<bdi>`, or a number after a Hebrew or Arabic name moves to the wrong side of it (W3C Internationalization, "Inline markup and bidirectional text in HTML").
- **Kind:** Every product: the page's language is set and passages in other languages are marked, except proper names, technical terms, words of no clear language, and words borrowed into the surrounding language (WCAG 2.2, 3.1.1 and 3.1.2); text in any script the product shows is never clipped; a right-to-left name never moves the text around it. Current practice: Chinese, Japanese, Korean and Arabic text is never in fake bold or italic; taller lines for the scripts above (Material 3); at most 40 characters a line for Chinese, Japanese and Korean.
- **Applies when:** always for the page's language. The rest applies when the product shows text in other scripts, including names and content people enter.
- **Check:** read `lang` on `<html>` and on text in other languages. In the browser, replace a name or a heading with Arabic, Japanese and Thai text, and with Vietnamese in capitals, such as "ẤN TƯỢNG", on screen only, and look for clipped letters and fake bold. Read `font-synthesis`. Put an Arabic name into a row with a count after it, such as "- 5 reviews", and check that the count stays after the name.
- **Fail:** Arabic names whose letters are cut off at the top of their row. A Japanese heading in fake bold. A French quote in an English page with no `lang="fr"`. A Hebrew shop name followed by "- 5 reviews", with the 5 shown before the name.
- **Pass:** `lang="en"` on the page and `lang="fr"` on the quote; Arabic names with room above and below.
- **Not a fail:** a product name, or "café" in an English sentence, with no `lang`.

## Primitive

### 6. Line height suits the size and the length of the text

Paragraphs get about 1.5 times the font size. Text under 36 px that wraps to three lines or more is never set tight. Display text, 36 px and up, can sit tighter, and small text needs relatively more space. Lines never touch or overlap, at any text size.

- **Why:** Lines too close together, or too far apart, slow reading: speed rose up to about 1.25 to 1.5 times normal spacing, then stopped, and small text gains more from extra space (Chung 2004; Dyson 2023). WCAG 2.2 asks for a way to get line spacing of 1.5 in paragraphs, which the browser can provide (1.4.8, AAA), and nothing may break when people set it (1.4.12, AA). Body styles for 14 and 16 px run from 1.43 to 1.5, and Carbon's compact body, 14/18, is for up to four lines; Material 3 recommends 1.2 for headings, and its display styles, from 36 up, go down to 1.12 (Material 3, "Type scale" and "Applying type"; Carbon, "Type sets"). Apple asks to avoid tight leading on three lines or more (Apple, "Typography").
- **Kind:** Every product: lines never overlap. Current practice: text under 36 px that wraps to three lines or more has a line height of at least 1.2, and lines never touch; about 1.5 for paragraphs; 1.1 to 1.3 for headings.
- **Check:** for each text style, divide the computed line height by the font size. Text under 36 px that wraps to three lines or more fails under 1.2, and paragraphs, running text of more than four lines, fail under 1.4. Look at display text where it wraps the most, often at a phone width: letters that touch the line below fail. Then zoom to 200%, raise the browser's text size, and look for lines that touch or overlap.
- **Fail:** a three-line card description at a line height of 1, so descenders touch the capitals below. Help paragraphs at 1.25. A line height of 20px on text sized in rem, so lines overlap when the browser's text size is raised.
- **Pass:** help paragraphs at 16/24; a two-line headline at 1.2.
- **Not a fail:** a 56 px headline at 1.1 that wraps to three lines on a phone, its lines clear of each other; a one-line label in a line box as tall as its font.

### 7. Letter spacing follows the font, and small text is never tightened

Text keeps the spacing its font was designed with, or the spacing the font's documentation gives for each size. Text of 16 px or smaller is never set tighter than that. Text of 12 px or smaller can open up a little, and display text closes up as far as the font's documentation or its makers' design system sets it.

- **Why:** Tighter letter spacing makes reading harder, and the spacing type designers set is a good default (Dyson 2023). Fonts set their own spacing by size: Apple's system font is wider at 10 pt, tighter from 13 to 20 pt and wider again at display sizes; Material 3 adds space to its body and label styles, Carbon adds 0.32 px at 12 px, 0.16 px at 14 px and nothing from 16 px, and both tighten only their largest display styles (Apple, "Typography"; Carbon, "Type sets"; Material 3, "Type scale"). At display sizes these run from wider than the font's default to about 1% tighter, so display spacing means something only next to the font's own values.
- **Kind:** Current practice: text of 16 px or smaller is never set tighter than its font's own spacing for that size; a little extra spacing at 12 px and below; at display sizes, the spacing the font's documentation or its makers' design system gives, or slight tightening when the font has neither.
- **Check:** list the computed letter spacing of each text style, in em. Negative spacing on text of 16 px or smaller fails, unless the font's documentation gives that value for that size. For display text, look up the font's own values before judging: tighter than those fails.
- **Fail:** 14 px table text at −0.02 em, so letters crowd. Every text style at −0.03 em, copied from the display style.
- **Pass:** 12 px captions at +0.02 em; a 40 px headline at −0.01 em.
- **Not a fail:** zero or positive spacing on a large heading, as Apple's system font uses at display sizes. Display text tightened as far as the font's makers tighten it in their own design system.

### 8. Capitals only for short labels, spaced out

Only short labels go in capitals: a word or a few, such as a table header or a badge. Sentences and paragraphs are in normal case. Capitals get a little extra letter spacing.

- **Why:** All capitals slow reading compared with normal case (Tinker 1963; Dyson 2023), except at sizes near the limit of what people can see (Arditi and Cho 2007). Capitals look too tight at normal spacing, so they get extra letter spacing, 0.025 em on buttons and 0.1 to 0.15 em on longer runs, and are kept to a few words (USWDS, "Typography" and "Letterspacing").
- **Kind:** Current practice: sentences and paragraphs are never set in capitals, and capitals get extra letter spacing.
- **Check:** find text set in capitals, by `text-transform: uppercase` or in the content. A sentence in capitals fails. For each label in capitals, read its letter spacing: no extra spacing fails.
- **Fail:** a warning message in capitals. Table headers in capitals with no extra spacing.
- **Pass:** two-word table headers in capitals at 0.06 em.
- **Not a fail:** abbreviations such as API or PDF in running text.

### 9. Text is regular weight or heavier, and every weight is real

Weights lighter than regular are only for large display text. Every weight and style the page uses is loaded as its own font face, so the browser never fakes bold or italic.

- **Why:** Light weights are hard to see, most of all in small text, so Apple asks to avoid them and to set a thin custom font larger than usual (Apple, "Typography"). Material 3 keeps lighter weights for large sizes such as display type, whose styles start at 36, and Carbon's productive set uses Light only for its 42 and 54 px headings (Material 3, "Editorial treatments"; Carbon, "Type sets"). When a font has no face for a weight or style, the browser may fake it from another face (MDN, "font-synthesis").
- **Kind:** Current practice.
- **Check:** list the computed weight and size of each text style. A weight under 400 on text smaller than 36 px fails. Compare the weights and styles in use with the font faces the page loads (`document.fonts`): a weight in use with no face of its own is faked.
- **Fail:** 14 px body text at weight 300. A semibold label that the browser fakes from the regular face, because the semibold file isn't loaded.
- **Pass:** a light weight only on a 56 px marketing headline.
- **Not a fail:** the same weights in light and dark themes: at the font's default grade, Material's tests found no difference in readability between light and dark mode (Gilbert et al. 2022).

### 10. Numbers that line up or change keep their digits in place

Numbers in columns people compare, and numbers that change while people watch, use tabular figures, in which every digit has the same width. Numbers in running text keep proportional figures.

- **Why:** Digits of different widths don't line up in a column, and a number whose digits change width moves the text around it. Tabular figures go in tables and wherever values change often, such as clocks (Material 3, "Applying type"); Shopify sets prices, quantities and counts in them, and Apple's system font offers fixed-width digits (Shopify, "Number"; Apple, `monospacedDigit()`). Proportional figures suit body text (Interface Craft, "Typography details"; Butterick, "Alternate figures").
- **Kind:** Current practice: digits line up in columns people compare, numbers that change don't move the text around them, and running text uses proportional figures.
- **Check:** in each table, column of numbers, counter and timer, compare the width of "1111" and "8888" in that text style: different widths mean proportional figures. Watch numbers that update.
- **Fail:** a timer whose text shakes as the digits change. A column of amounts whose digits don't line up, because 1 is narrower than 8.
- **Pass:** amounts in tabular figures, with every digit under the one above it.
- **Not a fail:** a font whose default figures are already tabular.

### 11. Real typographic characters, and the font's own features

Text uses the right characters: curly quotes and apostrophes, an en dash for ranges and an em dash for a break, the ellipsis character, the multiplication sign (×) and the minus sign (−), and a non-breaking space between a number and its unit. Small capitals come from the font, never from shrunken capitals. Codes and IDs people read or type show a zero that differs from the letter O.

- **Why:** People who can't tell 0 from O in a code type the wrong one, and the code is rejected; a slashed zero prevents it (Interface Craft, "Typography details"). Three periods can break across lines, and a plain space can split a number from its unit; the ellipsis character and a no-break space prevent both (Apple Style Guide). Style guides ask for curly quotes outside code, an en dash for ranges, the minus sign and ×; Microsoft's straight quotes follow from its font, which has no curly ones (Interface Craft, "Typography details"; Apple Style Guide; Microsoft Writing Style Guide). Capitals scaled down come out thin and too light (Interface Craft, "Typography details"; Butterick, "Small caps").
- **Kind:** Every product: in codes and IDs people read or type, people can tell 0 from O: the zero looks different from the O, or the code leaves one of them out. Current practice: the right quotes, dashes, signs and spaces, and small capitals from the font.
- **Check:** search the page's text, outside code, for straight quotes and apostrophes, three periods, a hyphen between two numbers, a letter x between two numbers, and a plain space between a number and its unit. Look at small capitals and at codes and IDs at 2× zoom. Read the `unicode-range` of each `@font-face`: characters outside it show in the next font in the stack, so it covers these characters and the letters of every language the product shows.
- **Fail:** "Don't" with a straight apostrophe in a heading. "Saving..." with three periods. "1920x1080". A recovery code whose 0 and O look the same. A web font limited to `unicode-range: U+0020-007F`, so every curly apostrophe, dash and accented letter shows in the fallback font.
- **Pass:** "Don’t", "Saving…", "Mon–Fri", "1920 × 1080".
- **Not a fail:** straight quotes in code and in fields where people type. A code whose letters leave out O, in a font with a plain zero.

### 12. Lines break in good places

A heading doesn't leave one short word alone on any line, as a line break placed by hand can at a narrower width, and paragraphs avoid ending on a single short word. Long strings such as links, email addresses and IDs wrap inside their box. Words are split with hyphens only where the page's language is set.

- **Why:** Browsers can balance the lines of short blocks such as headings (`text-wrap: balance`, up to six lines in Chromium and ten in Firefox) and keep a paragraph's last line from being a lone word (`text-wrap: pretty`, in Chrome and Safari, not Firefox) (MDN, "text-wrap"; Simmons 2025). `overflow-wrap: anywhere` breaks a long string only when it can't fit on a line of its own (MDN, "overflow-wrap"). Browsers hyphenate only when `lang` is set and they have a dictionary for that language (MDN, "hyphens").
- **Kind:** Every product: long strings never run outside their box: at 320 px they would scroll sideways or be cut off (WCAG 2.2, 1.4.10). Current practice: balanced headings, with line breaks placed by hand only where they suit every width, and no lone short word on a paragraph's last line where the browser can avoid it.
- **Check:** at each width, look at headings and paragraphs for one short word alone on the last line, and in headings on any line: a break placed by hand that leaves one word alone at some width fails. In the browser, replace a link, email address or ID with the longest real one, on screen only, and look for overflow. Where text is hyphenated, check `lang`.
- **Fail:** a two-line heading with one word on its second line. A shared link that runs past the edge of a card. A hero heading with a `<br>` after its third word that leaves "your" alone on a line on phones.
- **Pass:** a heading whose two lines are about the same length; the link wrapping inside the card.

### 13. Form fields on phones use 16 px text

On phones, text in form fields is at least 16 px, so the browser doesn't zoom in when a field gets focus.

- **Why:** Safari on iPhone zooms the page when people focus a field whose text is under 16 px (WebKit source, `WKWebViewIOS.mm`). Stopping the zoom with `user-scalable=no`, or a `maximum-scale` below 2, also stops people from zooming (ACT rule "Meta viewport allows for zoom"; WCAG 2.2, 1.4.4).
- **Kind:** Every product: the page never stops people from zooming, with `user-scalable=no` or a `maximum-scale` below 2 (WCAG 2.2, 1.4.4). Current practice: form fields on phones use 16 px text, so Safari doesn't zoom the page when people focus them.
- **Applies when:** pages that work on phones.
- **Check:** at a phone width, read the computed font size of every input, select and text area. Under 16 px fails. Read the viewport tag: `user-scalable=no` or a `maximum-scale` below 2 fails.
- **Fail:** a 14 px search field on a phone. `maximum-scale=1` added to stop the zoom.
- **Pass:** fields at 16 px at phone widths and 14 px on desktop.

## Component

### 14. Truncate only where the full text can be reached

Cut text short only where space is truly limited, and only when everyone can reach the full text: on focus or by opening the item, not only on hover. Titles, labels, error and validation messages, notifications, and numbers people read or compare, such as amounts, dates and times, wrap or get the room they need instead. Names whose ends matter, such as file names and IDs, are cut in the middle.

- **Why:** WCAG accepts truncation only when the full text can be reached on focus or after activation (WCAG 2.2, Understanding 1.4.4). Keyboard and speech users can't reach hover tooltips, and the browser's `title` tooltip gets no WCAG protection (Primer, "Truncation"; WCAG 2.2, 1.4.13). Carbon never truncates headers, titles, labels, error and validation messages or notifications, and Material 3 never truncates without another way to see the text (Carbon, "Overflow content"; Material 3, "Text truncation"). Names that differ only at the end look the same once the end is cut, and a number cut short shows a different value: "$1,234,5…" hides how large the amount is.
- **Kind:** Every product: truncated text can be read in full with the keyboard and by touch, not only on hover; error and validation messages, and numbers, amounts, dates and times, are never truncated; truncation never makes two items look the same. Current practice: titles and labels wrap; names whose ends matter are cut in the middle.
- **Check:** find every place text can be cut short: text cut on screen, and `text-overflow: ellipsis` and `line-clamp` in the CSS. In the browser, fill each place with the longest real value, on screen only, so the cut shows. For each, reach the full text with the mouse, the keyboard and touch. Then check what kind of text it is.
- **Fail:** customer names cut to "Bartholomew-Feath…" with the full name only in a hover `title`. An error message clamped to one line. Report names cut at the end, so "Q3 report v1" and "Q3 report v2" both read "Q3 rep…". An amount column that shows "$1,234,5…".
- **Pass:** a file name cut in the middle, with the full name on focus and in the details view.
- **Not a fail:** a product description clamped to two lines in search results, when opening the product shows all of it.

## Page

### 15. Paragraphs run 45 to 75 characters a line, aligned to one edge

Paragraphs people read run about 45 to 75 characters a line, never more than 80, and are aligned to the start edge, not justified.

- **Why:** On screens, people read long lines as fast as short ones, but they understood a 55-character line better than a 100-character one, and they prefer about 50 to 70 (Dyson and Haselgrove 2001; Dyson 2023). Systems range from Material 3's 40 to 60, with up to 120 on large screens, to the U.S. Web Design System's 45 to 90 and Primer's 80 or less (Material 3, "Lists"; USWDS, "Typography"; Primer, "Typography"); WCAG asks for a way to get lines of 80 characters or fewer, or 40 for Chinese, Japanese and Korean (1.4.8, AAA). Justified text lowered poorer readers' comprehension on short lines (Gregory and Poulton 1970), and WCAG asks for a way to turn it off (1.4.8).
- **Kind:** Current practice.
- **Applies when:** text people read in paragraphs, such as articles, help, descriptions and messages longer than a few lines.
- **Check:** for each paragraph, count the characters in a full line, or compare the block's width with the font's `ch` unit. Lines over 80 characters fail, and so do lines under 40. Look for justified paragraphs.
- **Fail:** a help article whose paragraphs run 140 characters a line on a wide screen. Justified help text with wide gaps between words.
- **Pass:** a help article capped at about 70 characters a line, aligned left.
- **Not a fail:** table cells, labels and other text of a line or two.

### 16. Fonts load without hiding or moving text

Text shows as soon as the page does, in a fallback font if the web font hasn't arrived, and it doesn't move when the web font replaces the fallback.

- **Why:** With `font-display: block`, text is invisible for a short block period while the font loads (MDN, "font-display"). `swap` shows the fallback at once, but text that moves when the web font arrives disturbs people already reading; `optional` uses the web font only if it is ready for the first paint, after a block period of 100 ms or less (CSS Fonts 4, `font-display`). A fallback matched to the web font's size and metrics (`size-adjust`, `ascent-override`) can remove the shift (Hempenius 2023), though `ascent-override` isn't in shipping Safari yet (MDN browser compatibility data).
- **Kind:** Current practice: text is never invisible for more than a moment while fonts load, and nothing moves when the web font replaces the fallback.
- **Check:** reload with the cache off and the network slowed (Chrome's "Slow 4G"), and watch for invisible text and for text that moves or rewraps when the font arrives. Read `font-display` in the `@font-face` rules. Record layout shifts with a `PerformanceObserver` on `layout-shift`.
- **Fail:** a headline invisible for two seconds on a slow connection. Paragraphs that rewrap when the web font replaces a wider fallback.
- **Pass:** text shows at once in a fallback matched to the web font's size, and doesn't move when the web font arrives.
- **Not a fail:** an icon font with `font-display: block`, so icon names never flash as text.
