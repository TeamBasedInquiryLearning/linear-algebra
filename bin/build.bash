#!/bin/bash

#Produce notes and slides
pdflatex course-notes.tex
pdflatex course-slides.tex
pdflatex day1-slides-clontz-lecture.tex
pdflatex day1-slides-clontz-tbl.tex
pdflatex day1-slides-lewis-lecture.tex
pdflatex day1-slides-lewis-tbl.tex

#Produce readiness materials
./bin/readiness.bash

#Produce syllabus and forms
pdflatex syllabus-clontz-lecture.tex
pdflatex syllabus-clontz-tbl.tex
pdflatex syllabus-lewis-lecture.tex
pdflatex syllabus-lewis-tbl.tex
pdflatex standards.tex
pdflatex homework-report.tex
pdflatex reassessment-form.tex
pdflatex assessment-calendar-clontz-lecture.tex
pdflatex assessment-calendar-clontz-tbl.tex
pdflatex assessment-calendar-lewis-lecture.tex
pdflatex assessment-calendar-lewis-tbl.tex
pdflatex homework-problems.tex

# TODO copy built PDFs into appropriate section folders
# here's a quick one for syllabi and standards
# TODO A symlink is probably a better choice than copying
cp syllabus-clontz-lecture.pdf clontz/lecture/
cp syllabus-clontz-tbl.pdf clontz/tbl/
cp syllabus-lewis-lecture.pdf lewis/lecture/
cp syllabus-lewis-tbl.pdf lewis/tbl/
cp standards.pdf clontz/lecture/
cp standards.pdf clontz/tbl/
cp standards.pdf lewis/lecture/
cp standards.pdf lewis/tbl/
# TODO write a Makefile that (might?) handle partial builds more intelligently
