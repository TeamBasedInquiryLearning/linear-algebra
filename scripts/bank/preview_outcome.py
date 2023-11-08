import sys
import shutil
from pathlib import Path
import lxml.etree as ET
from checkit.bank import Bank
import os
import subprocess

# get outcome slug from commandline or user
try:
    outcome = sys.argv[1].strip()
except IndexError:
    outcome = input("Which outcome slug? ").strip()

# check that this outcome exists
exercise_path = Path("exercises")
bank_root = ET.parse(exercise_path/"bank.xml")
search_string = f'.//*[name()="slug" and text()="{outcome}"]/./..'
outcome_ele = bank_root.xpath(search_string)[0]

# get path to sandbox
sandbox_path = exercise_path/"sandbox"

# destroy any existing sandbox
shutil.rmtree(sandbox_path,ignore_errors=True)

# create new sandbox with that outcome
sandbox_path.mkdir()
(sandbox_path/"bank.xml").write_text(f"""
<?xml version='1.0' encoding='UTF-8'?>
<bank xmlns="https://checkit.clontz.org" version="0.2">
    <title>Preview Bank</title>
    <slug>preview</slug>
    <url>http://tbil.org</url>
    <outcomes>
        <outcome>
            <title>{outcome_ele.find("{*}title").text}</title>
            <slug>{outcome_ele.find("{*}slug").text}</slug>
            <path>outcome</path>
            <description>Sample description</description>
        </outcome>
    </outcomes>
</bank>
""".strip())
(sandbox_path/"outcome").mkdir()
(sandbox_path/"library").mkdir()
shutil.copy(Path("exercises")/"library"/"common.sage", sandbox_path/"library"/"common.sage")
outcome_path = (exercise_path/outcome_ele.find("{*}path").text)
shutil.copy(outcome_path/"template.xml", sandbox_path/"outcome/template.xml")
shutil.copy(outcome_path/"generator.sage", sandbox_path/"outcome/generator.sage")

os.chdir("exercises/sandbox")
b = Bank()
print('generate exercises')
b.generate_exercises(regenerate=True, images=True)
b.write_json()
b.build_viewer()
subprocess.run(['python', '-m', 'http.server', '-d', 'docs'])
