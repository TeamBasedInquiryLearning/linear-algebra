# Linear Algebra for Team-Based Inquiry Learning

Materials for teaching linear algebra using
Team-Based Inquiry Learning, authored in
[PreTeXt](https://pretextbook.org/). This is a part of the
[TBIL Resource Library](https://sites.google.com/southalabama.edu/tbil). This work was
funded by the National Science Foundation [DUE #2011807](https://nsf.gov/awardsearch/showAward?AWD_ID=2011807).

[Steven Clontz](https://clontz.org) and
[Drew Lewis](http://drew-lewis.com) are the maintainers
of this project.

## TBIL 2022 Edition

The 2022 version of the textbook is hosted at
<https://teambasedinquirylearning.github.io/linear-algebra/2022/>.
Randomized practice exercises are available publicly on the
[CheckIt](https://teambasedinquirylearning.github.io/linear-algebra/2022/exercises/#/bank/) platform.

Other materials, such as quizzes for the Readiness Assurance Process,
are available in the PDF folder of this repository.

## 2023 Preview Edition

The in-development 2023 version is available for preview at 
<https://teambasedinquirylearning.github.io/linear-algebra/2023/>. Please note
that this version is subject to change radically without notice.
Classroom use is discouraged; these updates will be published
by August 2023.

## Copyright and Licensing

See [source/meta/copyright.ptx](source/meta/copyright.ptx) and
<https://teambasedinquirylearning.github.io/linear-algebra/2022/colophon.html>.

## Authoring

First install [Python 3.9](https://www.python.org/). Then do
the following to install [pipenv](https://github.com/pypa/pipenv).

```
$ python -V
Python 3.9.0
$ python -m pip install pip --upgrade
$ python -m pip install pipenv
```

Then the following steps will clone a copy of this book's
source and install the appropriate version of the
[PreTeXt CLI](https://github.com/PreTeXtBook/pretext-cli).

```
$ git clone git@github.com:TeamBasedInquiryLearning/linear-algebra.git tbil-la
$ cd tbil-la
$ python -m pipenv install
$ python -m pipenv run pretext --version
[displays the version specified in `Pipfile`]
```

The PreTeXt source may be found in the `source` folder and
edited as follows:

```
# Run this to start the authoring environment
$ python -m pipenv shell

# To build HTML from updated source
$ pretext build

# To preview the built HTML in your browser
$ pretext view

# To publish the latest build to GitHub pages
$ git add -A
$ git commit -m "useful description of update"
$ pretext publish

# To exit the authoring environment
$ exit
```

Use `pretext --help` for documentation of other pretext CLI features.

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
  
- Or run this if you also need to rebuild `latex-image` diagrams:

  ```
  pretext build -d; xsltproc --xinclude -o slides/slides.ptx slides/extract-slides.xsl source/main.ptx; xsltproc --xinclude -o output/html/slides.html slides/pretext/xsl/pretext-revealjs.xsl slides/slides.ptx
  ```

This slideshow may be previewed with `pretext view`, and will be published with
the rest of the HTML content.
