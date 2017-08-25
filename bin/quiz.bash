#!/bin/bash
./bin/generateQuiz.pl lewis
./bin/generateQuiz.pl clontz

cd assessments
#Compile problem library
pdflatex problem-library.tex

#Do Lewis quizzes
cd lewis

#Compile Solutions
for i in `ls *solutions.tex`
do
	pdflatex $i || exit 1
done

#Compile quizzes
for i in `ls *.tex | grep -v solution | grep -v Header`
do
	pdflatex $i || exit 1
done

#Concatenate quizzes into one pdf
for i in `seq 1 30`;
do
	str="quiz"$i"v"
	j=`ls *.pdf | grep $str | grep -v "solution"`
	#If j string is nonempty, concatenate pdfs
	[[ ! -z $j ]] && pdftk $j cat output "quiz$i.pdf"
done


#Do Clontz quizzes
cd ../clontz
#Compile solutions
for i in `ls *solutions.tex`
do
	pdflatex $i || exit 1
done

#Compile quizzes
for i in `ls *.tex | grep -v solution | grep -v Header`
do
	pdflatex $i || exit 1
done

#Concatenate into one pdf
for i in `seq 1 30`;
do
	str="quiz"$i"v"
	j=`ls *.pdf | grep $str | grep -v "solution"`
	#If j string is nonempty, concatenate pdfs
	[[ ! -z $j ]] && pdftk $j cat output "quiz$i.pdf"
done

cd ../..
