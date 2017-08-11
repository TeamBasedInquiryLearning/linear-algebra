#!/bin/bash
for i in `ls modules/*/readiness.tex` 
do
	j=${i%.tex}
	pdflatex -jobname=$j readiness_materials.tex
done
