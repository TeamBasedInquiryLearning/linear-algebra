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

foreach my $dayFileName (`ls modules/*/*day*tex`)
{
	chomp $dayFileName;
	#Get Module Name (e.g. 2-V)
	my $moduleName = (split(/\//, $dayFileName))[1];
	
	#Open input file
	open( my $dayFileHandle, '<', $dayFileName) or die "Unable to open $dayFileName";
	my @dayFileLines = <$dayFileHandle>;

	#Get Class Day Number
	my $classDay;
	foreach my $line (@dayFileLines)
	{
		if( $line =~ /.*applicationActivities}\{\d+\}\{(\d+)\}.*/ ) 
		{
			$classDay=$1;
			last; #Perl uses dumb words sometimes; this breaks out of the for loop
		}
	}


	#Specify file name and open
	my $outFileName = "definitions/$moduleName" . "-Class_Day-$classDay.tex";
	print "OutFileName=$outFileName\n";
	#open( my $outFile, '>', $outFileName) or die "Could not open $outFileName";


	#Specify header LaTeX code
	my $header = "\\documentclass{sbgLAquiz}\n\n";
	$header .= "\\begin\{extract*\}\n";
	$header .= "\\input\{quizHeader.tex\}\n";
	$header .= "\\end\{extract*\}\n\n";
	$header .= "\\begin\{document\}\n\n";

	#Specify footer LaTeX code
	my $footer = "\\end\{document\}";

	#Write to file
	#print $outFile $header;
	#print $outFile $footer;
}

