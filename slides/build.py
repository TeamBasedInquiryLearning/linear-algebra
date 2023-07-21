import subprocess
from pathlib import Path
from lxml import etree
from pretext.project.refactor import Project

et = etree.parse(Path("source")/"main.ptx")
for _ in range(10):
    et.xinclude()
XML_IDS = [
    f"LE{n}" for n in range(1,5)
] + [
    f"EV{n}" for n in range(1,8)
] + [
    f"AT{n}" for n in range(1,7)
] + [
    f"MX{n}" for n in range(1,5)
] + [
    f"GT{n}" for n in range(1,5)
]
p = Project()
extract_target = p.target("extract-slides")
slides_target = p.target("slides")
for xml_id in XML_IDS:
    print(f"building slides for {xml_id}")
    extract_target.output = Path(f"output/slide-extraction/{xml_id}.ptx")
    extract_target.stringparams["section"] = xml_id
    extract_target.build()
    slides_target.source = extract_target.output
    slides_target.output = Path(f"output/slides/{xml_id}.slides.html")
    extract_target.build()

