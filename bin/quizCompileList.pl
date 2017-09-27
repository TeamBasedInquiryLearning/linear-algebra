#!/usr/bin/perl
use strict;
use warnings;

my @quizFileNames;

#my $nVersions=6;
#my $compileMidterm=1;
#my $compileFinal=0;

#Read in parameters from file
open (my $parameterFileHandle, '<', "assessments/parameters.txt");
my @parameterFile = <$parameterFileHandle>;
my ($nVersions)  = $parameterFile[0] =~ /(^\d)/;
my ($compileMidterm) =  $parameterFile[1] =~ /(^\d)/;
my ($compileFinal) =  $parameterFile[2] =~ /(^\d)/;

open (my $explicitFileHandle, '<', "assessments/quiz-standard-explicit-map.txt");
my @quizStandards = <$explicitFileHandle>;
foreach my $line (@quizStandards)
{
	chomp($line);
	next if $line =~ /[!%*#]/;
	my ($quizNum, $stds) = split (':', $line);

	foreach my $i (1..$nVersions)
	{
		my $fn1 = "quiz" . $quizNum . "v" . $i . "_solutions.tex\n";
		my $fn2 = "quiz" . $quizNum . "v" . $i . ".tex\n";
		push (@quizFileNames, $fn1);
		push (@quizFileNames, $fn2);
	}
}

if($compileMidterm)
{	
	foreach my $i (1..$nVersions)
	{
		my $fn1 = "midterm-v" . $i . "_solutions.tex\n";
		my $fn2 = "midterm-v". $i . ".tex\n";
		push (@quizFileNames, $fn1);
		push (@quizFileNames, $fn2);
	}

}
if($compileFinal)
{	
	foreach my $i (1..$nVersions)
	{
		my $fn1 = "final-v" . $i . "_solutions.tex\n";
		my $fn2 = "final-v". $i . ".tex\n";
		push (@quizFileNames, $fn1);
		push (@quizFileNames, $fn2);
	}

}

open (my $outFileHandle, '>', "assessments/quizCompileList.txt");
print $outFileHandle  @quizFileNames;


