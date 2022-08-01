import subprocess
from pathlib import Path
from lxml import etree

et = etree.parse(Path("source")/"main.ptx")
et.xinclude()
for e in et.xpath("//section[@tbil-slides]"):
    xmlid = e.get(r"{http://www.w3.org/XML/1998/namespace}id")
    print(f"building slides for {xmlid}")
    subprocess.run(["pretext","build",f"slide-ptx-{xmlid}"])
    subprocess.run(["pretext","build",f"slide-html-{xmlid}"])