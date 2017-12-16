# tbil-la

Source files and built PDFs for running a Team-Based Inquiry Learning
linear algebra course.

## Development

All source files are located within `./tex`. These files are designed
to be built by `pdflatex` run from within this folder, so `.tex` files
located in this folder (not within a subfolder) may be built directly
for development purposes.

Before each commit, run `bin/build` to compile all `.tex` files and
move their resulting PDFs to the `./pdf` folder.

For convenience, files ignored by Git (e.g. TeX auxiliary files) may be
removed by running `git clean -fX`.
