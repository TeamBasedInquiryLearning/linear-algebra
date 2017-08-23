#!/bin/bash
./bin/generateQuiz.pl lewis
./bin/generateQuiz.pl clontz

cd assessments
pdflatex problem-library.tex

cd lewis
for i in `ls *solutions.tex`
do
	pdflatex $i || exit 1
done

for i in `ls *.tex | grep -v solution | grep -v Header`
do
	pdflatex $i || exit 1
done

cd ../clontz
for i in `ls *solutions.tex`
do
	pdflatex $i || exit 1
done

for i in `ls *.tex | grep -v solution | grep -v Header`
do
	pdflatex $i || exit 1
done

cd ../..
