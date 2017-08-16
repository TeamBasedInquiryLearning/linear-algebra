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

#Produce quizzes
#./bin/quiz.bash

#Produce syllabus and forms
pdflatex syllabus-clontz-lecture.tex
pdflatex syllabus-clontz-tbl.tex
pdflatex syllabus-lewis-lecture.tex
pdflatex syllabus-lewis-tbl.tex
pdflatex standards-lewis.tex
pdflatex standards-clontz.tex
pdflatex homework-report.tex
pdflatex reassessment-form-lewis.tex
pdflatex reassessment-form-clontz.tex
pdflatex assessment-calendar-clontz-lecture.tex
pdflatex assessment-calendar-clontz-tbl.tex
pdflatex assessment-calendar-lewis-lecture.tex
pdflatex assessment-calendar-lewis-tbl.tex
pdflatex homework-problems.tex
