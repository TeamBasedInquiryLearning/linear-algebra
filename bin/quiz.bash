#!/bin/bash
./bin/generateQuiz.pl lewis
./bin/generateQuiz.pl clontz

./bin/countProblems.pl
./bin/quizCompileList.pl

cd assessments
#Compile problem library
pdflatex problem-library.tex


#Do Lewis quizzes
cd lewis

#Compile Quizzes and solutions 
for i in  `cat ../quizCompileList.txt`
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

#Concatenate quiz solutions into one pdf
for i in `seq 1 30`;
do
	str="quiz"$i"v"
	j=`ls *.pdf | grep $str | grep  "solution"`
	#If j string is nonempty, concatenate pdfs
	[[ ! -z $j ]] && pdftk $j cat output "quiz${i}_solutions.pdf"
done


#Do Clontz quizzes
cd ../clontz
#Compile quizzes and solutions
for i in  `cat ../quizCompileList.txt`
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

#Concatenate quiz solutions into one pdf
for i in `seq 1 30`;
do
	str="quiz"$i"v"
	j=`ls *.pdf | grep $str | grep  "solution"`
	#If j string is nonempty, concatenate pdfs
	[[ ! -z $j ]] && pdftk $j cat output "quiz${i}_solutions.pdf"
done

cd ../..
