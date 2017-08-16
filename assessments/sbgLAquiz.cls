%%
%% This is file `assignment.cls',
%% generated with the docstrip utility.
%%
%% The original source files were:
%%
%% assignment.dtx
%% Copyright (C) 2004 Madhusudan Singh.
%% This material is subject to the LaTeX Project Public License. See http://www.ctan.org/tex-archive/help/Catalogue/licenses.lppl.html for the details of that license.

\ProvidesClass{sbgLAquiz}[2011/01/23 D. Lewis]
\NeedsTeXFormat{LaTeX2e}[1999/09/01]
\typeout{}
\typeout{ ==========> SBG Quiz Class (sbgquiz.cls)  <============= }
\typeout{}

\DeclareOption{twoside}{\PassOptionsToPackage{twoside}{article}}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}\typeout{Delegating option ``\CurrentOption'' to the standard LaTeX2e article class, I hope you know what you are doing.}}

\ProcessOptions

\LoadClass[10pt,a4paper]{article}

\RequirePackage{ifthen}
\RequirePackage{datetime2}
\RequirePackage{etoolbox}
\RequirePackage[letterpaper,left=1in,right=1in,top=1in,bottom=1in]{geometry}

\RequirePackage{xstring}

\let\Xfile\empty
\StrBefore*{\jobname}{_}[\Xfile]
\edef\XXfile{\Xfile.tex}

\RequirePackage[active,generate=\Xfile,extract-env={problem}]{extract}



%\setlength{\textwidth}{6.0in}
\pagestyle{empty}
\newcommand{\@coursetitle}{{\em No course title specified}}
\newcommand{\@courselabel}{{\em No course label specified}}
\renewcommand{\@title}{{\em No title specified}}
\newcommand{\@Title}{{\em NO TITLE SPECIFIED}}
\DTMsavenow{currenttime}
\newcommand{\@semester}{\ifnumcomp{\DTMfetchmonth{currenttime}}{<}{6}{Spring}{\ifnumcomp{\DTMfetchmonth{currenttime}}{>}{7}{Fall}{Summer}}\ \DTMfetchyear{currenttime}}
%\newcommand{\@semester}{{\em No semester specified}}

%\newcommand{\@standard}{}
\def \@standards{}
\newcommand{\@student}{{\em Student unknown}}
\newcommand{\@subject}{}
\newcommand{\@university}{University of South Alabama}
\newcommand{\@school}{}
\newcommand{\@department}{Department of Mathematics}
\newcommand{\@solutionstext}{{\bfseries Solution:}}

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
%\newcommand{\standard}[1]{\renewcommand{\@standard}{#1}}
\newcommand{\standard}[1]{\forcsvlist{\listadd\@standards}{#1}}
\newcommand{\department}[1]{\renewcommand{\@department}{#1}}
\newcommand{\solutionstext}[1]{\renewcommand{\@solutionstext}{{#1}}}

\newcommand{\@calculatorpolicy}{{No calculators are permitted.}}
\newcommand{\calculatorpolicy}[1]{\renewcommand{\@calculatorpolicy}{{#1}}}
\newcommand{\@instructions}{{Show all work.  Answers without work will not receive credit. \@calculatorpolicy}}
\newcommand{\instructions}[1]{\renewcommand{\@instructions}{{#1}}}

\newcommand{\correctmc}{{\bf -- Correct}}
\newcommand{\partialmc}[1]{{\bf -- Partial credit (#1 points)}}

\newcounter{problem}
\newcounter{subproblem}
\renewcommand{\theequation}{\arabic{problem}.\arabic{equation}}
%\newcommand   {\boxit}[1]     {$$\fbox{$#1$}$$}
\everymath{\displaystyle}

\newenvironment{problem}
%before
{
	\addtocounter{problem}{1}
	\addtocounter{equation}{-\arabic{equation}}
	\setcounter{subproblem}{0}

	\begin{flushleft}
	{\bfseries \arabic{problem}.}
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
	%\vspace{0.1 in}
	\ignorespaces
	
	\@solutionstext
	%\begin{boldmath}
}
%after
{
	%\end{boldmath}
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
	{\bf\ifthenelse{\equal{\@subject}{}}{\phantom{xx}}{\@subject}} \hfill \@semester \\
	\@instructions
}
}

\AtEndDocument{%
\begin{flushright}
\renewcommand*{\do}[1]{\bf Standard #1 score: \fbox{\rule{0.5in}{0pt}\rule[-0.5ex]{0pt}{4ex}}\\}
\dolistloop{\@standards}
\end{flushright}
%\immediate\write18{pdflatex \XXfile}
}
\endinput
%%
