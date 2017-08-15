#!/bin/bash
for i in `ls modules/*/readiness.tex` 
do
	j=${i%.tex}
	pdflatex -jobname=$j readiness_materials.tex
done

for i in `ls modules/*/readiness.pdf`
do
	j=${i/readiness.pdf/readiness_outcomes.pdf} 
	pdftk $i cat 1 output $j
done

for i in `ls rat/*.tex`
do
	pdflatex --output-director=rat $i	
done
