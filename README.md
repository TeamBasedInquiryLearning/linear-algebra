# Linear Algebra for Team-Based Inquiry Learning

Materials for teaching linear algebra using
Team-Based Inquiry Learning, authored in
[PreTeXt](https://pretextbook.org/). This is a part of the
[NSF-funded TBIL Resource Library](https://sites.google.com/southalabama.edu/tbil).

[Steven Clontz](https://clontz.org) and
[Drew Lewis](https://twitter.com/siwelwerd) are the maintainers
of this project.

## For instructors and students

A textbook of activities and sample exercises is available publicly at
<https://teambasedinquirylearning.github.io/linear-algebra>.
Randomized practice exercises are available publicly on the
[CheckIt](https://checkit.clontz.org/#/banks/tbil-la) platform.

Other materials, such as quizzes for the Readiness Assurance Process,
are available in the PDF folder of this repository.

## Authoring

First install [Python 3.9](https://www.python.org/) and [pipenv](https://github.com/pypa/pipenv).

Clone this repository to your machine, then `cd ptx` into the folder containing
the PreTeXt project. `pipenv install` will install any necessary prerequisites.
The PreTeXt source may be found in the `ptx/source` folder.

```
# Run this in the ptx folder to start the authoring environment after a successful pipenv install
$ pipenv shell

# To build HTML
$ pretext build

# To preview the built HTML in your browser
$ pretext view

# CoCalc users: To preview HTML
$ pretext view --access=cocalc

# To stop the authoring environment
$ exit
```

## Using Git to track and publish changes

Changes are tracked in the `main` Git branch, and the public website
based on the `docs` folder. The result of `pretext build` creates
files in the `ptx/output` folder which is not tracked by Git because PreTeXt
changes thousands of files during each build.

To publish changes from a `pretext build` to the public website,
run `cp -r ptx/output/html/* docs/` from the root folder of this project,
and make a single commit like `git add docs; git commit -m "update public site"`
to the `main` branch that reflects only this change.

---

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
