```
xsltproc --xinclude -o slides.ptx extract-slides.xsl ../source/main.ptx
```

```
xsltproc --xinclude -o slides.html pretext/xsl/pretext-revealjs.xsl slides.ptx
```