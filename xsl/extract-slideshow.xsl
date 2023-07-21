<?xml version='1.0'?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
  xmlns:xml="http://www.w3.org/XML/1998/namespace"
>

<xsl:import href="./core/publisher-variables.xsl"/>
<xsl:import href="./core/pretext-assembly.xsl"/>
<xsl:import href="./core/pretext-common.xsl"/>

<!-- provide xml:id of section to process -->
<xsl:param name="section" select="'LE1'"/>

<xsl:output method="xml" indent="yes"/>

<!-- https://stackoverflow.com/a/6357859/1607849
<xsl:variable name="slide-defaults">|<xsl:value-of select="pretext/docinfo/@slide-defaults"/>|</xsl:variable>-->
          <!--<xsl:for-each select="*[contains($slide-defaults,concat('|',local-name(),'|')) or @slide='true']">-->

<xsl:template match="/">
    <pretext xmlns:xi="http://www.w3.org/2001/XInclude">
        <xsl:copy-of select="$root/docinfo"/>
        <slideshow>
            <xsl:apply-templates select="$root/book|$root/article"/>
        </slideshow>
    </pretext>
</xsl:template>

<xsl:template match="book|article">
    <xsl:copy-of select="title"/>
    <xsl:copy-of select="subtitle[@component='main']"/>
    <xsl:apply-templates select="frontmatter"/>
    <xsl:apply-templates select="//section"/>
</xsl:template>

<xsl:template match="frontmatter">
    <frontmatter>
        <xsl:copy-of select="titlepage"/>
        <xsl:copy-of select="abstract"/>
    </frontmatter>
</xsl:template>

<xsl:template match="*" mode="slides-title">
    <title>
        <xsl:apply-templates select="." mode="type-name"/><xsl:text> </xsl:text>
        <xsl:apply-templates select="." mode="number"/><xsl:if test="title">:
        <xsl:value-of select="title"/></xsl:if>
        <xsl:text> </xsl:text>
        <xsl:if test="@estimated-time">(~<xsl:value-of select="@estimated-time"/> min)</xsl:if>
    </title>
</xsl:template>

<xsl:template match="section">
    <xsl:if test="@xml:id = $section">
        <section>
            <xsl:apply-templates select="." mode="slides-title"/>
            <xsl:apply-templates select="subsection"/>
        </section>
    </xsl:if>
</xsl:template>

<xsl:template match="subsection">
    <xsl:apply-templates select="activity|definition|remark|fact|observation|example"/>
</xsl:template>

<xsl:template match="definition|remark|fact|observation|example">
    <slide>
        <xsl:apply-templates select="." mode="slides-title"/>
        <xsl:choose>
            <xsl:when test="statement">
                <xsl:apply-templates select="statement/*" mode="slideshow-copy"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates select="*" mode="slideshow-copy"/>
            </xsl:otherwise>
        </xsl:choose>
    </slide>
</xsl:template>

<xsl:template match="activity">
    <xsl:choose>
        <xsl:when test="task">
            <xsl:apply-templates select="task" mode="slideshow-copy"/>
        </xsl:when>
        <xsl:otherwise>
            <slide>
                <xsl:apply-templates select="." mode="slides-title"/>
                <xsl:apply-templates select="statement/*" mode="slideshow-copy"/>
            </slide>
            <xsl:if test="answer">
                <slide>
                    <xsl:apply-templates select="." mode="slides-title"/>
                    <p><em>Answer.</em></p>
                    <xsl:apply-templates select="answer" mode="slideshow-separate"/>
                </slide>
            </xsl:if>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>

<xsl:template match="task" mode="slideshow-copy">
    <slide>
        <xsl:apply-templates select="ancestor::activity[1]" mode="slides-title"/>
        <xsl:apply-templates select="ancestor::activity[1]/introduction/*" mode="slideshow-copy"/>
        <p><em>Part <xsl:value-of select="count(preceding-sibling::task)+1"/>.</em></p>
        <xsl:apply-templates select="*" mode="slideshow-copy"/>
    </slide>
    <xsl:if test="answer">
        <slide>
            <xsl:apply-templates select="ancestor::activity[1]" mode="slides-title"/>
            <xsl:apply-templates select="ancestor::activity[1]/introduction/*" mode="slideshow-copy"/>
            <p><em>Answer to part <xsl:value-of select="count(preceding-sibling::task)+1"/>.</em></p>
            <xsl:apply-templates select="answer" mode="slideshow-separate"/>
        </slide>
    </xsl:if>
</xsl:template>

<!-- show answers to tasks in separate slideshow slide -->
<xsl:template match="answer" mode="slideshow-copy"></xsl:template>
<xsl:template match="answer" mode="slideshow-separate">
        <xsl:apply-templates select="*" mode="slideshow-copy"/>
</xsl:template>

<!-- Identity template : copy all text nodes, elements and attributes -->
    <!-- modified from https://stackoverflow.com/a/14985831 -->
    <!-- Identity template : copy all text nodes, elements and attributes -->   
    <xsl:template match="@*|node()" mode="slideshow-copy">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()" mode="slideshow-copy" />
        </xsl:copy>
    </xsl:template> 
    <!-- kill possible duped xml IDs -->
    <xsl:template match="@xml:id" mode="slideshow-copy"/>

<xsl:template match="xref" mode="slideshow-copy">
    <xsl:variable name="target" select="id(@ref)"/>
    <xsl:apply-templates select="$target" mode="long-name"/>
</xsl:template>

<xsl:template match="image" mode="slideshow-copy">
    <image>
        <xsl:choose>
            <xsl:when test="latex-image">
                    <xsl:attribute name="source">
                        <xsl:text>generated/latex-image/</xsl:text>
                        <xsl:apply-templates select="." mode="visible-id" />
                        <xsl:text>.svg</xsl:text>
                    </xsl:attribute>
            </xsl:when>
            <xsl:when test="sageplot">
                    <xsl:attribute name="source">
                        <xsl:text>generated/sageplot/</xsl:text>
                        <xsl:apply-templates select="." mode="visible-id" />
                        <xsl:text>.svg</xsl:text>
                    </xsl:attribute>
            </xsl:when>
            <xsl:otherwise>
                    <xsl:attribute name="source">
                        <xsl:text>external/</xsl:text>
                        <xsl:value-of select="@source"/>
                    </xsl:attribute>
            </xsl:otherwise>
        </xsl:choose>
    </image>
</xsl:template>



</xsl:stylesheet>