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

<!--This is actually useless!-->
<xsl:variable name="b-latex-hardcode-numbers" select="true()"/>

<!-- We pull activities from each subsection and create a new page afterwards  -->
<xsl:template match="subsection">
    <!--Pull in activities as well as other numbered things-->
    <!--<xsl:apply-templates select="activity|fact|definition|note|remark|observation"/>-->
    <xsl:apply-templates select="activity"/>
    <xsl:text>\cleardoublepage&#xA;&#xA;</xsl:text>
</xsl:template>

<!--Redefine the whole stupid activity template so we can use the hardcoded number-->
<xsl:template match="activity" mode="environment">
    <!-- Names of various pieces normally use the      -->
    <!-- element name, but "exercise" does triple duty -->
    <xsl:variable name="environment-name">
                <xsl:value-of select="local-name(.)"/>
    </xsl:variable>
    <!-- projects and inline exercises sometimes run on their own counters -->
    <xsl:variable name="counter">
                <xsl:text>block</xsl:text>
    </xsl:variable>
    <xsl:text>%% </xsl:text>
    <!-- per-environment style -->
    <xsl:value-of select="$environment-name"/>
    <xsl:text>: fairly simple numbered block/structure&#xa;</xsl:text>
    <xsl:text>\tcbset{ </xsl:text>
    <xsl:value-of select="$environment-name"/>
    <xsl:text>style/.style={</xsl:text>
    <xsl:apply-templates select="." mode="tcb-style"/>
    <xsl:text>} }&#xa;</xsl:text>
    <!-- create and configure the environment/tcolorbox -->
    <xsl:text>\newtcolorbox</xsl:text>
    <!-- run on a common, default, faux counter -->
    <xsl:text>[</xsl:text>
    <xsl:text>use counter from=</xsl:text>
    <xsl:value-of select="$counter"/>
    <xsl:text>]</xsl:text>
    <!-- environment's tcolorbox name, pair -->
    <!-- with actual constructions in body  -->
    <xsl:text>{</xsl:text>
    <xsl:value-of select="$environment-name"/>
    <xsl:text>}[4]</xsl:text>

    <!-- begin: options -->
    <xsl:text>{</xsl:text>
    <!-- begin: title construction -->
    <!--Argument 4 will have the hardcoded number-->
    <xsl:text>title={{#1~#4}},</xsl:text>
            <xsl:text>phantomlabel={#3}, </xsl:text>
    <!-- always breakable -->
    <xsl:text>breakable, after={\par}, </xsl:text>
    <xsl:value-of select="$environment-name"/>
    <xsl:text>style, }&#xa;</xsl:text>
    <!-- end: options -->
</xsl:template>

<xsl:template match="activity">

    <xsl:variable name="project" select="true()"/>

    <!-- structured version of a project-like may contain a     -->
    <!-- prelude, which is rendered *before* environment begins -->

    <!--<xsl:if test="(statement or task)">
        <xsl:apply-templates select="prelude" />
    </xsl:if>-->
    <!-- The exact environment depends on the placement of the -->
    <!-- "exercise" when located in an "exercises" division    -->
    <xsl:variable name="env-name">
        <xsl:apply-templates select="." mode="environment-name"/>
    </xsl:variable>
    <xsl:text>\begin{</xsl:text>
    <xsl:value-of select="$env-name"/>
    <xsl:text>}</xsl:text>
    <xsl:text>{</xsl:text>
        <xsl:apply-templates select="." mode="type-name"/>
        <xsl:text>}</xsl:text>
        <xsl:text>{</xsl:text>
        <xsl:apply-templates select="." mode="title-full"/>
        <xsl:text>}</xsl:text>
            <xsl:text>{</xsl:text>
            <!--I don't know why this doesn't seem to work-->
            <!--<xsl:apply-templates select="." mode="unique-id"/>-->
            <!--This at least compiles...-->
            <xsl:apply-templates select="." mode="number" />
            <xsl:text>}</xsl:text>
        <xsl:text>{</xsl:text>
            <xsl:apply-templates select="." mode="number" />
        <xsl:text>}</xsl:text> 
  
    <xsl:text>%&#xa;</xsl:text>
    <!-- Each "idx" produces its own newline -->
    <xsl:apply-templates select="idx"/>
    <!-- Now the guts of the exercise, inside of its  -->
    <!-- (variable) identification, environment, etc. -->
    <xsl:apply-templates select="." mode="exercise-components">
        <xsl:with-param name="b-original" select="true()" />
        <xsl:with-param name="b-has-statement" select="true()" />
    </xsl:apply-templates>
    <!-- closing % necessary, as newline between adjacent environments -->
    <!-- will cause a slight indent on trailing exercise               -->
    <xsl:text>\end{</xsl:text>
    <xsl:value-of select="$env-name"/>
    <xsl:text>}%&#xa;</xsl:text>
    <xsl:apply-templates select="." mode="pop-footnote-text"/>

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