import subprocess, shutil, os
from checkit.bank import Bank

print('generating assets')
subprocess.run(["pretext", "generate", "-t", "web", '--all-formats'])
print('building web')
subprocess.run(["pretext", "build", 'web', '--clean'])
# print('building instructor')
# subprocess.run(["pretext", "build", 'web-instructor', '--clean'])
print('building print')
subprocess.run(["pretext", "build", 'print', '--clean'])
print('building slides')
subprocess.run(["python", "slides/build.py"])

cwd = os.getcwd()
os.chdir(os.path.join(cwd,'exercises'))
try:
    print("regenerating exercises (no diagrams)")
    b = Bank()
    b.write_json(regenerate=True)
    print("building checkit viewer")
    b.build_viewer()
    try:
        shutil.rmtree("../output/deploy/2023e/exercises")
    except FileNotFoundError:
        pass
    shutil.copytree("docs","../output/deploy/2023e/exercises",dirs_exist_ok=True)
finally:
    os.chdir(cwd)