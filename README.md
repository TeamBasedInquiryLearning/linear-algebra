# tbil-la

Source files and built PDFs for running a Team-Based Inquiry Learning
linear algebra course.

By [Steven Clontz](https://clontz.org) and 
[Drew Lewis](https://twitter.com/siwelwerd).

## Read this first!

This repo is still a work-in-progress. However, feel free to use it
as-is or adapt these materials for your course. 
Contact us using a link above if you do!

---


## For instructors

All the needed materials are available in the PDF folder.
See `facilitator-notes.pdf` for more information on implementing
these materials in your classroom.

## Local sectioning
For developers and/or instructors who would like to partition the slides into
sections without changing the repository, run the following commands:
`git update-index --assume-unchanged tex/modules/*/index.tex`
`git update-index --assume-unchanged pdf/course-slides-sectioned.pdf`
`git update-index --assume-unchanged tex/slides/slides-*.tex`
`git update-index --assume-unchanged pdf/slides/slides-*.pdf`


Then, you can edit `tex/modules/*/index.tex` as you like to include different
activities in different sections; resulting changes will be built to 
`pdf/course-slides-sectioned.pdf` and `pdf/slides/slides-*.pdf`.  `pdf/course-slides.pdf` will retain the slides with no section labels.

## Development

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


## Exercises

Exercises are now tracked at <https://github.com/StevenClontz/masterit-tbil-la>.
To use them in this repo, either clone a copy into an `exercises` folder:

```
git clone git@github.com:StevenClontz/masterit-tbil-la.git exercises
```

Or if they already live on your computer (perhaps inside a MasterIt installation)
you can symlink them like so:

```
ln -s path/to/your/masterit-tbil-la exercises
```

[allman]: https://en.wikipedia.org/wiki/Indentation_style#Allman_style
