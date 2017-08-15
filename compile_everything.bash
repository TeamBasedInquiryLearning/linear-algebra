#!/bin/bash

#Produce notes and slides
pdflatex course-notes.tex
pdflatex course-slides.tex
pdflatex day1_slides.tex

#Produce readiness materials
./readiness.bash

#Produce syllabus and forms
pdflatex syllabus.tex
pdflatex standards.tex
pdflatex homework\ report.tex
pdflatex reassessment_form.tex
pdflatex assessment\ calendar.tex
pdflatex homework_problems.tex
