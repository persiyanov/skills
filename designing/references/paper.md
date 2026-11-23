# Paper

Paper is for exploring: an open look's directions, and forks worth seeing side by side. The design itself is built, as `build.md` describes.

- **Use one page per piece of work,** named after the target and the start date. Put the explorations side by side, each with one line on what it decides, and mark the pick. One References artboard holds each best product's screenshot, its source and one line on what it decided.
- **At the start of every session,** make the file's tokens match the product's theme, read from the repo's token files on the main branch, because other work may have changed them: compare them with `get_tokens`, and fix each difference with `set_tokens`, leaving the work's own set of new values as it is.
- **The user's comments on Paper** are read with `list_comment_threads` and answered in their thread.
- **Drawing:** move each new artboard into place, and name it when you create it, because renaming truncates names to 50 characters. Paper drops some styles without an error, such as `left` and `top` on a new artboard, the base color of a `background` shorthand, camelCase properties in `write_html`, and an SVG's `stroke-opacity`, so read the result back with `get_computed_styles`. Draw screens as layers bound to tokens, so that they can be measured. To try new values, add a set of tokens for the work and bind only the new frames to it. Nest the frames as the groups that people should see, with padding inside a box and gaps between its children (Figma Learn, "Guide to auto layout"; Braid, "Layout").
- **Values that the build takes from an exploration** come from `get_jsx` and `get_computed_styles`, because a screenshot's pixels depend on its scale.
