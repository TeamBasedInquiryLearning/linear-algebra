# Linear Algebra for Team-Based Inquiry Learning

Materials for teaching linear algebra using
Team-Based Inquiry Learning, authored in
[PreTeXt](https://pretextbook.org/). This is a part of the
[TBIL Resource Library](http://library.tbil.org). This work was
funded in part by the National Science Foundation
[DUE #2011807](https://nsf.gov/awardsearch/showAward?AWD_ID=2011807).

[Steven Clontz](https://clontz.org) and
[Drew Lewis](http://drew-lewis.com) are the maintainers
of this project.

## Getting started

These materials are hosted at
<http://linear.tbil.org>.

Other materials, such as quizzes for the Readiness Assurance Process,
are available in the PDF folder of this repository, with updated versions
available by joining the TBIL Slack community. Learn more at
[TBIL.org](http://tbil.org).

## Copyright and Licensing

See [source/meta/copyright.ptx](source/meta/copyright.ptx).

## Authoring

The project is set up to use [GitHub Codespaces](https://github.com/features/codespaces)
to supporting authoring within the web browser, or a locally installed VS Code application.

Our codespace is set up to allow the authoring of our web and print targets using
the PreTeXt authoring toolkit described
[in the PreTeXt Guide](https://pretextbook.org/doc/guide/html/tutorial-github.html).

## Building slides

Slides can be built using the Terminal tab in your Codespace.

```bash
/workspaces/linear-algebra# python scripts/slides.py
```

## Building exercise bank

Currently CheckIt is not set up to work with Codespaces, but the bank can still be
built.

```bash
/workspaces/linear-algebra# python scripts/bank.py
```

## Deploying to the public

These steps should be followed from the `main` branch only to ensure
only the accepted changes to the book are deployed to the public
at <http://linear.tbil.org>.

1. `build web` target using PreTeXt
2. `build print` target using PreTeXt 
3. Build slides using `python scripts/slides.py`
4. Build bank using `python scripts/bank.py`
    - One liner: `pretext build web && pretext build print && python scripts/slides.py && python scripts/bank.py`
5. `deploy` using PreTeXt
    - `pretext deploy --stage-only` can be used to stage what deployment will look like in `output/stage`
