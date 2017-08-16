#!/bin/bash
./bin/generateQuiz.pl

cd assessments
for i in `ls *solutions.tex`
do
	pdflatex $i || exit 1
done

cd ..
