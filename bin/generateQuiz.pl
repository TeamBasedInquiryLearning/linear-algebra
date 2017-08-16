#!/usr/bin/perl
use strict;
use warnings;


#Count number of problems
#Pass array of file Lines by reference (e.g. countProblems(\@probFileLines)
sub countProblems
{
	
	my @Lines = @{$_[0]};
	my $n=0;
	foreach my $line (@Lines)
	{
		$n++ if( $line =~ m/begin\{problem\}/) ;
	}
	return $n;
}

#Returns an array of lines with  one problem for each standard passed as an arg
sub getRandomProblems
{
	my @STDs;
	foreach my $arg (@_)
	{
		push(@STDs, $arg) if $arg =~ m/[A-Z][0-9]/ ;
	}	

	my @out;
	foreach my $standard (@STDs)
	{
		my $probFilePath = "assessments/problems/" . $standard . ".tex";
		open( my $probFile, '<', $probFilePath) or die "Unable to open $probFilePath";

		my @probFileLines = <$probFile>;
		my $numProb = countProblems(\@probFileLines);

		#Get a random problem number
		#We count our problems starting at one.  
		my $probIndex = 1+int rand($numProb);
		my $n=0;

		foreach my $line (@probFileLines)
		{
			$n++ if( $line =~ m/begin\{problem\}/) ;
			push (@out, $line) if $n==$probIndex;

		}


	}
	return @out
}



#######################################
###        Main                     ###
#######################################

#Define Hash with class days and standards to be quizzed
my %quizStandardsHash =
(
	4 => ["E1"],
	5 => ["E2"],
	6 => ["E1","E3","E4"],
	7 => ["E2"],
	8 => ["E1","E3","E4","V1"],
	9 => ["V2"],
	10 => ["E1","E3","E4","V1"],
	11 => ["V2"],
	12 => ["V1","V3", "V4"]
	
);

while( my($classDay, $standards) = each %quizStandardsHash)
{
	foreach my $i (1..6)
	{
		my $outFileName = "assessments/quiz" . $classDay . "v" . $i . "_solutions.tex";
		print $outFileName . "\n";
		my @output = getRandomProblems (@{$standards});
		open( my $outFile, '>', $outFileName) or die "Could not open $outFileName";
	
		my $texStandards = join (",",@{$standards});
		my $header = "\\documentclass{sbgquiz}\n\n";
		$header .= "\\begin\{extract*\}\n";
		$header .= "\\input\{quizHeader.tex\}\n";
		$header .= "\\title\{Mastery Quiz Day $classDay \}\n";
		$header .= "\\standard\{$texStandards\}\n";
		$header .= "\\end\{extract*\}\n\n";
		$header .= "\\begin\{document\}\n\n";
		my $footer = "\\end\{document\}";
		print $outFile $header;
		print $outFile @output;
		print $outFile $footer;
	}
}

