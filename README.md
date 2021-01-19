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

Clone this repository to your machine and `cd` into its folder.
`pipenv install` will install any necessary prerequisites.
The PreTeXt source may be found in the `source` folder.

```
# Run this to start the authoring environment after a successful pipenv install
$ pipenv shell

# To build HTML from updated source
$ pretext build

# To preview the built HTML in your browser
$ pretext view

# CoCalc users: To preview HTML
$ pretext view --access=cocalc

# To stop the authoring environment
$ exit
```

Use `pretext --help` for documentation of other pretext CLI features.

## Using Git to track and publish changes

Changes are tracked in the `main` Git branch, and the public website
based on the `docs` folder. The result of `pretext build` creates
files in the `output` folder which is not tracked by Git because PreTeXt
changes thousands of files during each build.

To publish changes from a `pretext build` to the public website,
run `pretext publish` from the root folder of this project,
and make a single commit like `git add docs; git commit -m "update public site"`
to the `main` branch that reflects only this change.

## Building slides

Right now slide building isn't part of PreTeXt CLI, so here's how to do it.

First, clone a copy of https://github.com/rbeezer/mathbook into the folder `slides/pretext`.

Then the following line will create a PreTeXt slideshow (run from project root).

```
xsltproc --xinclude -o slides/slides.ptx slides/extract-slides.xsl source/main.ptx
```

And the following line will build that slideshow into a Reveal.js HTML file.

```
xsltproc --xinclude -o output/html/slides.html slides/pretext/xsl/pretext-revealjs.xsl slides/slides.ptx
```

- For convenience, the following line does a `pretext build` and also builds slides in one step:

  ```
  pretext build; xsltproc --xinclude -o slides/slides.ptx slides/extract-slides.xsl source/main.ptx; xsltproc --xinclude -o output/html/slides.html slides/pretext/xsl/pretext-revealjs.xsl slides/slides.ptx
  ```

This slideshow may be previewed with `pretext view`, and will be published with
the rest of the HTML content.
