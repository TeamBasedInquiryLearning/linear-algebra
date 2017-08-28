#!/usr/bin/perl
use strict;
use warnings;

my @STDs = split ( ' ', `ls assessments/problems/`);
foreach my $standard (@STDs)
{
	$standard = substr ($standard,0,2);
}


open (my $outFile, '>', "assessments/problem-count.txt");

foreach my $standard (@STDs)
{
	#Specify appropriate filename and open
	my $probFilePath = "assessments/problems/" . $standard . ".tex";
	open( my $probFile, '<', $probFilePath) or die "Unable to open $probFilePath";

	#Read file to array and count the number of problems
	my @probFileLines = <$probFile>;

	my $n=0;
	foreach my $line (@probFileLines)
	{
		$n++ if( $line =~ m/begin\{problem\}/) ;
	}

	print $outFile "Standard $standard : $n problems\n";

}


