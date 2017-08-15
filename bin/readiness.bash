#!/bin/bash
for i in `ls modules/*/readiness.tex`
do
	j=${i%.tex}
	pdflatex -jobname=$j readiness-materials.tex
done

for i in `ls modules/*/readiness.pdf`
do
	mod=${i#modules\/}
	mod=${mod%/readiness.pdf}
	out=${i/readiness.pdf/readiness-outcomes-$mod.pdf}
	pdftk $i cat 1 output $out
done

for i in `ls rat/*.tex`
do
	pdflatex --output-director=rat $i
done
