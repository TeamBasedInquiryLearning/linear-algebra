<?xml version="1.0" encoding="UTF-8" ?>


<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<!-- Next paths assume current file has been copied to mathbook/user -->
<xsl:import href="./core/pretext-latex.xsl" />

<xsl:output method="text" />

<!-- As a subset of full content, we can't         -->
<!-- point to much of the content with hyperlinks  -->
<!-- We do have the full context as we process, so -->
<!-- we can get numbers for cross-references and   -->
<!-- hard code them into the LaTeX                 -->
<!-- This override obliterates autonaming support  -->
<xsl:template match="*" mode="ref-id">
    <xsl:apply-templates select="." mode="number" />
</xsl:template>

<!-- We do the expedient thing and *hard-code* the number    -->
<!-- of each item cross-referenced from within the solutions -->
<!-- manual, so the cropss-refernce text matches with HTML   -->
<!-- output and LaTeX output for the entire book.            -->
<!-- Since the output LaTeX file is a subset of the content, -->
<!-- there will not be a \label for many \ref, and worse, if -->
<!-- there is a \label then a \ref to it will be wrong.      -->
<xsl:template match="*" mode="xref-number">
  <xsl:apply-templates select="." mode="number" />
</xsl:template>


<!-- We pull activities from each subsection and create a new page afterwards  -->
<xsl:template match="subsection">
    <!--Pull in activities as well as other numbered things-->
    <xsl:apply-templates select="activity|fact|definition|note|remark|observation"/>
    <xsl:text>\cleardoublepage&#xA;&#xA;</xsl:text>
</xsl:template>

<!--We don't want to actually display these, so just increase the counter to preserve numbering-->
<xsl:template match="fact|definition|note|remark|observation">
    <xsl:text>\refstepcounter{tcb@cnt@block}&#xa;&#xA;</xsl:text>
</xsl:template>

<xsl:template match="objectives" />
<!--Exercise groups are not in a subsection, so drop them -->
<xsl:template match="exercises" />
<!--Drop all the preface-->
<xsl:template match="preface" />
<!--Drop readiness !-->
<xsl:template match="paragraphs[contains(@xml:id, 'readiness')]"/>
<!--Drop back matter stuff -->
<xsl:template match="appendix[@xml:id='appendix-extras']"/>
<xsl:template match="index" />

<!-- Use letter paper and leave one-inch margins all around -->
<!--<xsl:param name="latex.geometry" select="'letterpaper,margin=1in'" />-->


<!-- Style titles -->
<xsl:template name="titlesec-section-style">
    <!-- This next bit is stock PTX -->
    <xsl:text>\titleformat{\chapter}[block]&#xa;</xsl:text>
    <xsl:text>{\normalfont\Huge\bfseries}{Chapter\space\thechapter:\space\titleptx}{1em}{}&#xa;</xsl:text>
    <xsl:text>[{\large\authorsptx}\newpage]&#xa;</xsl:text>
    <!--<xsl:text>{}{}{1em}{}[]</xsl:text>-->
    <xsl:text>\titleformat{\section}[block]&#xa;</xsl:text>
    <xsl:text>{\normalfont\Large\bfseries}{\thesection\space\titleptx}{1em}{}&#xa;</xsl:text>
    <xsl:text>[{\large\authorsptx}]&#xa;</xsl:text>
    <xsl:text>\titleformat{name=\section,numberless}[block]&#xa;</xsl:text>
    <xsl:text>{\normalfont\Large\bfseries}{}{0pt}{#1}&#xa;</xsl:text>
    <xsl:text>[{\large\authorsptx}]&#xa;</xsl:text>
    <xsl:text>\titlespacing*{\section}{0pt}{3.5ex plus 1ex minus .2ex}{2.3ex plus .2ex}&#xa;</xsl:text>
    <xsl:text>\titleformat{\subsection}[block]&#xa;</xsl:text>
    <xsl:text>{\normalfont\large\bfseries}{\thesubsection\space\titleptx}{1em}{}&#xa;</xsl:text>
    <xsl:text>[{\normalsize\authorsptx}]&#xa;</xsl:text>
    <xsl:text>\titleformat{name=\subsection,numberless}[block]&#xa;</xsl:text>
    <xsl:text>{\normalfont\large\bfseries}{}{0pt}{#1}&#xa;</xsl:text>
    <xsl:text>[{\normalsize\authorsptx}]&#xa;</xsl:text>
    <xsl:text>\titlespacing*{\subsection}{0pt}{3.25ex plus 1ex minus .2ex}{1.5ex plus .2ex}&#xa;</xsl:text>
    <xsl:text>\titleformat{\subsubsection}[block]&#xa;</xsl:text>
    <xsl:text>{\normalfont\normalsize\bfseries}{\thesubsubsection\space\titleptx}{1em}{}&#xa;</xsl:text>
    <xsl:text>[{\small\authorsptx}]&#xa;</xsl:text>
    <xsl:text>\titleformat{name=\subsubsection,numberless}[block]&#xa;</xsl:text>
    <xsl:text>{\normalfont\normalsize\bfseries}{}{0pt}{#1}&#xa;</xsl:text>
    <xsl:text>[{\normalsize\authorsptx}]&#xa;</xsl:text>
    <xsl:text>\titlespacing*{\subsubsection}{0pt}{3.25ex plus 1ex minus .2ex}{1.5ex plus .2ex}&#xa;</xsl:text>    
    <!--Custom headers -->
    <xsl:text>\renewpagestyle{headings}{&#xa;</xsl:text>
    <xsl:text>\sethead[][\textbf{\small \sectiontitle}][] % even&#xa;</xsl:text>
    <xsl:text>{}{\textbf{\small \sectiontitle}}{}} % odd&#xa;</xsl:text>
    <xsl:text>\pagestyle{headings}&#xa;</xsl:text>
</xsl:template>




</xsl:stylesheet>