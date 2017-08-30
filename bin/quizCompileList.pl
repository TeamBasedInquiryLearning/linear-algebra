#!/usr/bin/perl
use strict;
use warnings;

my @quizFileNames;
my $nVersions=6;

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

open (my $outFileHandle, '>', "assessments/quizCompileList.txt");
print $outFileHandle  @quizFileNames;


