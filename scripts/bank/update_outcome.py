import shutil
from pathlib import Path
import lxml.etree as ET

exercise_path = Path("exercises")
sandbox_path = exercise_path / "sandbox"
bank_root = ET.parse(sandbox_path/"bank.xml").getroot()
outcome_ele = bank_root.find("{*}outcomes/{*}outcome")
outcome = outcome_ele.find("{*}slug").text
bank_root = ET.parse(exercise_path/"bank.xml").getroot()
search_string = f'.//*[name()="slug" and text()="{outcome}"]/./..'
outcome_ele = bank_root.xpath(search_string)[0]

outcome_path = (exercise_path/outcome_ele.find("{*}path").text)
shutil.copy(sandbox_path / "outcome" / "template.xml", outcome_path / "template.xml")
shutil.copy(sandbox_path / "outcome" / "generator.sage", outcome_path / "generator.sage")
