#!/bin/bash
./bin/generateQuiz.pl

cd assessments
for i in `ls *solutions.tex`
do
	pdflatex $i || exit 1
done

for i in `ls *.tex | grep -v solution | grep -v Header`
do
	pdflatex $i || exit 1
done

cd ..
