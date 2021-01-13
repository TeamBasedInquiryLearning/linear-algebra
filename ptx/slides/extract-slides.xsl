<?xml version='1.0'?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
  xmlns:xml="http://www.w3.org/XML/1998/namespace"
>

<xsl:include href="pretext/xsl/pretext-common.xsl"/>

<xsl:output method="xml" indent="yes"/>

<!-- https://stackoverflow.com/a/6357859/1607849
<xsl:variable name="slide-defaults">|<xsl:value-of select="pretext/docinfo/@slide-defaults"/>|</xsl:variable>-->
          <!--<xsl:for-each select="*[contains($slide-defaults,concat('|',local-name(),'|')) or @slide='true']">-->

<xsl:template match="/">
    <pretext xmlns:xi="http://www.w3.org/2001/XInclude">
        <xsl:copy-of select="pretext/docinfo"/>
        <slideshow>
            <xsl:apply-templates select="pretext/book|pretext/article"/>
        </slideshow>
    </pretext>
</xsl:template>

<xsl:template match="book|article">
    <xsl:copy-of select="title"/>
    <xsl:copy-of select="subtitle"/>
    <xsl:apply-templates select="frontmatter"/>
    <xsl:apply-templates select="chapter"/>
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
    </title>
</xsl:template>

<xsl:template match="chapter">
    <section>
        <xsl:apply-templates select="." mode="slides-title"/>
    </section>
    <xsl:apply-templates select="section"/>
</xsl:template>

<xsl:template match="section">
    <section>
        <xsl:apply-templates select="." mode="slides-title"/>
        <xsl:apply-templates select="activity|definition|remark|fact|observation|example|subsection"/>
    </section>
</xsl:template>

<xsl:template match="subsection">
    <xsl:apply-templates select="activity|definition|remark|fact|observation|example"/>
</xsl:template>

<xsl:template match="activity|definition|remark|fact|observation|example">
    <slide>
        <xsl:apply-templates select="." mode="slides-title"/>
        <xsl:choose>
            <xsl:when test="statement|introduction">
                <xsl:copy-of select="statement/*|introduction/*"/>
                <xsl:if test="task">
                    <ol pause="yes">
                        <xsl:apply-templates select="task"/>
                    </ol>
                </xsl:if>
            </xsl:when>
            <xsl:otherwise>
                <xsl:copy-of select="*"/>
            </xsl:otherwise>
        </xsl:choose>
    </slide>
</xsl:template>

<xsl:template match="task">
    <li>
        <xsl:copy-of select="*"/>
    </li>
</xsl:template>

</xsl:stylesheet>