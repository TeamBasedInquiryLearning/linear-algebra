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

#Returns an array of lines with one randomly chosen problem for each 
#standard passed as an arg
sub getRandomProblems
{
	#Sanitize arguments
	my @STDs;
	foreach my $arg (@_)
	{
		push(@STDs, $arg) if $arg =~ m/[A-Z][0-9]/ ;
	}	

	my @out;
	my $index=0;
	foreach my $standard (@STDs)
	{
		#Specify appropriate filename and open
		my $probFilePath = "problems/" . $standard . ".tex";
		open( my $probFile, '<', $probFilePath) or die "Unable to open $probFilePath";

		#Read file to array and count the number of problems
		my @probFileLines = <$probFile>;
		my $numProb = countProblems(\@probFileLines);

		#Get a random problem number
		#We count our problems starting at one.  
		my $probIndex = 1+int rand($numProb);

		#This variable keeps track of how many problems we've seen so far as we iterate
		#through the lines of the file
		my $n=0;

		#Get the random problem
		foreach my $line (@probFileLines)
		{
			$n++ if( $line =~ m/begin\{problem\}/) ;
			push (@out, $line) if $n==$probIndex;

		}

		#Put a newpage after every second problem except the last one
		push (@out, "\\begin\{extract\}\\newpage\\end\{extract\}\n") if ($index % 2 == 1 and $index != $#STDs) ;
		$index++;

	}
	return @out
}



#######################################
###        Main                     ###
#######################################

#Define Hash with class days and standards to be quizzed
#Maybe read these out of a file later for greater portability
my $nVersions = 6;
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

my %implicitStandardsHash = 
(
	6 => ["E2"],
	8 => ["E2"],
	9 => ["E2"],
	10 => ["E2"],
	11 => ["E2"],
	28 => ["G1"]
);

#Profname from commandline
my $prof = $ARGV[0];

die "Bad command line argument $prof \n" if not ($prof eq "clontz" or $prof eq "lewis"); 


#Iterate over the hash
while( my($classDay, $standards) = each %quizStandardsHash)
{
	#Iterate over versions
	foreach my $i (1..$nVersions)
	{
		#Specify file name and open
		my $outFileName = "assessments/" . $prof . "/quiz" . $classDay . "v" . $i . "_solutions.tex";
		open( my $outFile, '>', $outFileName) or die "Could not open $outFileName";

		#Get text of problems for each standard out of respective files
		my @problems = getRandomProblems (@{$standards});
	
		#Format standardlist for correct passing to \standard macro in LaTeX
		my $texStandards = join (",",@{$standards});
		$texStandards .= "," . join ( ",",@{$implicitStandardsHash{$classDay}}) if ($implicitStandardsHash{$classDay} ne undef);


		#Specify header LaTeX code
		my $header = "\\documentclass{sbgLAquiz}\n\n";
		$header .= "\\begin\{extract*\}\n";
		$header .= "\\input\{quizHeader.tex\}\n";
		$header .= "\\title\{Mastery Quiz Day $classDay \}\n";
		$header .= "\\standard\{$texStandards\}\n";
		$header .= "\\version\{$i\}\n";
		$header .= "\\end\{extract*\}\n\n";
		$header .= "\\begin\{document\}\n\n";

		#Specify footer LaTeX code
		my $footer = "\\end\{document\}";
	
		#Write to file
		print $outFile $header;
		print $outFile @problems;
		print $outFile $footer;
	}
}

