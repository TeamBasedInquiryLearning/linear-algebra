%% This material is subject to the LaTeX Project Public License. See http://www.ctan.org/tex-archive/help/Catalogue/licenses.lppl.html for the details of that license.

\ProvidesClass{sbgLAexam}[2017/09/26 D. Lewis]
\NeedsTeXFormat{LaTeX2e}[1999/09/01]
\typeout{}
\typeout{ ==========> SBG Exam Class (sbgexam.cls)  <============= }
\typeout{ ==========> Based off M. Singh's assignment.cls  <============= }
\typeout{}

%I don't really know what these do!
\DeclareOption{twoside}{\PassOptionsToPackage{twoside}{article}}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}\typeout{Delegating option ``\CurrentOption'' to the standard LaTeX2e article class, I hope you know what you are doing.}}
\ProcessOptions

%Builds off of article class
\LoadClass[10pt,a4paper]{article}

%Necessary packages
\RequirePackage{ifthen}
\RequirePackage{datetime2}
\RequirePackage{etoolbox}
\RequirePackage[letterpaper,left=1in,right=1in,top=1in,bottom=1in]{geometry}
\RequirePackage{xstring}
\RequirePackage{amsthm}

%Process jobname to automatically generate quiz from quiz with solution file.
\let\Xfile\empty
\StrBefore*{\jobname}{_}[\Xfile]
\edef\XXfile{\Xfile.tex}

%This tells extract package to only copy problem environment to quiz
\RequirePackage[active,generate=\Xfile,extract-env={problem}]{extract}

%Not entirely sure why this is here
\pagestyle{empty}

%Specify some macros with defaults
\newcommand{\@coursetitle}{{\em No course title specified}}
\newcommand{\@courselabel}{{\em No course label specified}}
\renewcommand{\@title}{{\em No title specified}}
\newcommand{\@Title}{{\em NO TITLE SPECIFIED}}
\DTMsavenow{currenttime}
\newcommand{\@semester}{\ifnumcomp{\DTMfetchmonth{currenttime}}{<}{6}{Spring}{\ifnumcomp{\DTMfetchmonth{currenttime}}{>}{7}{Fall}{Summer}}\ \DTMfetchyear{currenttime}}
\newcommand{\@student}{{\em Student unknown}}
\newcommand{\@subject}{}
\newcommand{\@university}{University of South Alabama}
\newcommand{\@school}{}
\newcommand{\@department}{Department of Mathematics and Statistics}
\newcommand{\@solutionstext}{{\bfseries Solution:}}
\newcommand{\@calculatorpolicy}{{No calculators are permitted.}}
\newcommand{\@version}{}
\newcommand{\@instructions}{{Show all work.  Answers without work will not receive credit. \@calculatorpolicy}}
\def \@standards{}

%Specify macros for user to change the local versions
\newcommand{\coursetitle}[1]{\renewcommand{\@coursetitle}{{#1}}}
\newcommand{\courselabel}[1]{\renewcommand{\@courselabel}{{#1}}}
\renewcommand{\title}[1]
{
	\renewcommand{\@title}{{#1}}
	\renewcommand{\@Title}{\protect\uppercase{#1}}
}
\newcommand{\subject}[1]{\renewcommand{\@subject}{#1}}
\newcommand{\semester}[1]{\renewcommand{\@semester}{{#1}}}
\newcommand{\student}[1]{\renewcommand{\@student}{{#1}}}
\newcommand{\university}[1]{\renewcommand{\@university}{#1}}
\newcommand{\school}[1]{\renewcommand{\@school}{#1}}
\newcommand{\department}[1]{\renewcommand{\@department}{#1}}
\newcommand{\solutionstext}[1]{\renewcommand{\@solutionstext}{{#1}}}

\newcommand{\calculatorpolicy}[1]{\renewcommand{\@calculatorpolicy}{{#1}}}
\newcommand{\version}[1]{\renewcommand{\@version}{{#1}}}
\newcommand{\instructions}[1]{\renewcommand{\@instructions}{{#1}}}
\newcommand{\standard}[1]{\forcsvlist{\listadd\@standards}{#1}}

\newcommand{\correctmc}{{\bf -- Correct}}
\newcommand{\partialmc}[1]{{\bf -- Partial credit (#1 points)}}

%Counters for problems and subproblems
\newcounter{problem}
\newcounter{subproblem}

%Set equation numbering
\renewcommand{\theequation}{\arabic{problem}.\arabic{equation}}

%Always use \displaystyle in math
\everymath{\displaystyle}

%Problem environment -- takes an argument which is the standard
\newenvironment{problem}[1]
%before
{
	\addtocounter{problem}{1}
	\addtocounter{equation}{-\arabic{equation}}
	\setcounter{subproblem}{0}

	\begin{flushleft}
	%{\bfseries \arabic{problem} .}
	%Problem numbering by standard
	{\bfseries {#1}. }
	\ignorespaces
}
%after
{
	\end{flushleft}
	\ifthenelse{ \equal{\value{subproblem}}{0}}{\vfill}{}
	\setcounter{subproblem}{0}	
}

\newenvironment{solution}
%before
{
	\ignorespaces
	\@solutionstext
}
%after
{
	\ignorespacesafterend
	\begin{flushright}
	{\bfseries \qed}
	\end{flushright}
	\vskip 0pt plus 1filll
}
\newenvironment{subproblem}
%before
{
	\addtocounter{subproblem}{1}
	\begin{flushleft}
	%\newline
	{(\alph{subproblem})}
	\ignorespaces
}
%after
{
	\end{flushleft}
	\vfill
}


\AtBeginDocument{%
\begin{flushright}
Name: \underline{\phantom{xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}}\\
\ \\
%\@coursetitle\ -- \@courselabel \\
%\@semester 
\end{flushright}
{
	{\bf \@Title} \hfill \@coursetitle\ -- \@courselabel \\
	{\bf\ifthenelse{\equal{\@version}{}}{\phantom{xx}}{Version \@version}} \hfill \@semester \\
	\@instructions
}
}

\AtEndDocument{%
\begin{flushright}
%\renewcommand*{\do}[1]{\bf Standard #1 score: \fbox{\rule{0.5in}{0pt}\rule[-0.5ex]{0pt}{4ex}}\\}
\renewcommand*{\do}[1]{\bf #1: \fbox{\rule{0.5in}{0pt}\rule[-0.5ex]{0pt}{4ex}} \hfill}
\dolistloop{\@standards}
\end{flushright}
%\immediate\write18{pdflatex \XXfile}
}
\endinput
%%
