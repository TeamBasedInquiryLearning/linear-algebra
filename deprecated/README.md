## Instructions for Deprecated LaTeX materials

All source files are located within `./tex`. These files are designed
to be built by `pdflatex` run from within this folder, so `.tex` files
located in this folder (not within a subfolder) may be built directly
for development purposes. A `makefile` is provided so that materials may
be built by running `make`.

During development, it's recommended to run (e.g.) `make pdf/slides-1-E.pdf`
to build only the appropriate piece of the project for testing purposes.
A `make slides` command is provided that will make only the individual module slides.

When possible, run the global `make` build as its own commit so that content
changes aren't hidden within a large build. 
 
For convenience, files ignored by Git (e.g. TeX auxiliary files) may be
removed by running `git clean -fX`.

### Style Guide

- Definitions should use `\term{}` for the term being defined.
- LaTeX-style math delimiters `\(x\)` and `\[x\]` should be used in
  place of TeX-style delimiters `$x$` and `$$x$$`.
- Bracket delimiters should follow [BSD/Allman style][allman].
    - Exceptions can be made for e.g. `\newcommand` issues
- Sets should use the provided `\setBuilder` and `\setList` commands.
- Use `alignat` or `alignedat` environments for systems of equations.
- Unless necessary, limit lines to 80 characters for clean `git diff`s.


[allman]: https://en.wikipedia.org/wiki/Indentation_style#Allman_style
