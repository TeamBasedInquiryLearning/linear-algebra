import subprocess
from pathlib import Path
from lxml import etree
from pretext.project import Project

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
] + ["geology", "pagerank", "truss"]
p = Project.parse()
extract_target = p.get_target("extract-slides")
slides_target = p.get_target("slides")
for xml_id in XML_IDS:
    print(f"building slides for {xml_id}")
    extract_slides_filename = Path(f"{xml_id}.ptx")
    extract_target.output_filename = extract_slides_filename
    extract_target.stringparams["section"] = xml_id
    extract_target.build(no_generate=True)
    slides_target.source = Path("../output/extract-slides")/extract_slides_filename
    slides_target.output_filename = Path(f"{xml_id}.slides.html")
    slides_target.build(no_generate=True)

