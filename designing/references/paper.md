# Paper

These facts about Paper hold in every piece of work.

- **At the start of every session,** make the file's tokens match the product's theme, read from the repo's token files on the main branch, because other work may have changed them. Compare them with `get_tokens`, and fix each difference with `set_tokens`, leaving the work's own set of new values as it is.
- **The user's comments** are read with `list_comment_threads` and answered in their thread.
- **Drawing:** name each artboard when you create it, because renaming truncates names to 50 characters. Paper drops some styles without an error, such as `left` and `top` on a new artboard, the base color of a `background` shorthand, camelCase properties in `write_html`, and an SVG's `stroke-opacity`, so read the result back with `get_computed_styles`. Draw screens as layers bound to tokens, so that they can be measured. To try new values, add a set of tokens for the work and bind only the new frames to it. Nest the frames as the groups that people should see, with padding inside a box and gaps between its children (Figma Learn, "Guide to auto layout"; Braid, "Layout").
- **Arranging:** a new artboard ignores `left` and `top`, so it can land on another board. Move each one into its row after you create it. `get_basic_info` lists each board's position and size on a page, which shows whether two overlap. A height is missing when the page isn't the one on screen and the board's height follows its content.
- **Values that the build takes from Paper** come from `get_jsx` and `get_computed_styles`, because a screenshot's pixels depend on its scale.
