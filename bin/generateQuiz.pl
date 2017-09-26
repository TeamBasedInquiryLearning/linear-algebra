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
		my $probFilePath = "assessments/problems/" . $standard . ".tex";
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

#Maybe shift this to reading from a textfile later
my $nVersions = 6;
my $genMidterm = 1;
my $genFinal = 0;

#Read explicitly assessed standard list for each quiz
my %quizStandardsHash;
open (my $explicitFileHandle, '<', "assessments/quiz-standard-explicit-map.txt");
my @quizStandards = <$explicitFileHandle>;
foreach my $line (@quizStandards)
{
	chomp($line);
	next if $line =~ /[!%*#]/;
	my ($quiz, $stds) = split (':', $line);
	my @result = split (',', $stds);
	$quizStandardsHash{$quiz} = \@result; 
}

#Read implicitly assessed standard list for each quiz
my %implicitStandardsHash;
open (my $implicitFileHandle, '<', "assessments/quiz-standard-implicit-map.txt");
my @impStandards = <$implicitFileHandle>;
foreach my $line (@impStandards)
{
	chomp($line);
	my ($quiz, $stds) = split (':', $line);
	my @result = split (',', $stds);
	$implicitStandardsHash{$quiz} = \@result;
	
}

#Profname from commandline
my $prof = $ARGV[0];

die "Bad command line argument -- use 'generateQuiz.pl clontz' or 'generateQuiz.pl lewis'\n" if not ($prof eq "clontz" or $prof eq "lewis"); 


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

#Create midterm
if($genMidterm)
{
		my @standards = split(',',qw(E1,E2,E3,E4,V1,V2,V3,V4,S1,S2,S3,S4));
		#Iterate over versions
		foreach my $i (1..$nVersions)
		{
			#Specify file name and open
			my $outFileName = "assessments/" . $prof . "/midterm-v" . $i . "_solutions.tex";
			open( my $outFile, '>', $outFileName) or die "Could not open $outFileName";

			#Get text of problems for each standard out of respective files
			my @problems = getRandomProblems (@standards);

			#Format standardlist for correct passing to \standard macro in LaTeX
			my $texStandards = join (",",@standards);

			#Specify header LaTeX code
			my $header = "\\documentclass{sbgLAexam}\n\n";
			$header .= "\\begin\{extract*\}\n";
			$header .= "\\input\{quizHeader.tex\}\n";
			$header .= "\\title\{Midterm Exam\}\n";
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

#Create final
if($genFinal)
{
		my @standards = split(',',qw(E1,E2,E3,E4,V1,V2,V3,V4,S1,S2,S3,S4,A1,A2,A3,A4,M1,M2,M3,G1,G2,G3,G4));
		#Iterate over versions
		foreach my $i (1..$nVersions)
		{
			#Specify file name and open
			my $outFileName = "assessments/" . $prof . "/final-v" . $i . "_solutions.tex";
			open( my $outFile, '>', $outFileName) or die "Could not open $outFileName";

			#Get text of problems for each standard out of respective files
			my @problems = getRandomProblems (@standards);

			#Format standardlist for correct passing to \standard macro in LaTeX
			my $texStandards = join (",",@standards);

			#Specify header LaTeX code
			my $header = "\\documentclass{sbgLAexam}\n\n";
			$header .= "\\begin\{extract*\}\n";
			$header .= "\\input\{quizHeader.tex\}\n";
			$header .= "\\title\{Final Exam\}\n";
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
