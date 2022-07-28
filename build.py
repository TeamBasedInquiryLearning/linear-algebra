import subprocess, shutil, os
from checkit.bank import Bank

print('generating assets')
subprocess.run(["pretext", "generate", "-t", "web", '--all-formats'])
subprocess.run(["pretext", "generate", "-t", "print", '--all-formats'])
print('building web')
subprocess.run(["pretext", "build", 'web', '--clean'])
print('building instructor')
subprocess.run(["pretext", "build", 'web-instructor', '--clean'])
print('building print')
subprocess.run(["pretext", "build", 'print', '--clean'])

cwd = os.getcwd()
os.chdir(os.path.join(cwd,'exercises'))
try:
    print("regenerating exercises (no diagrams)")
    b = Bank()
    b.write_json(regenerate=True)
    print("building checkit viewer")
    b.build_viewer()
    shutil.rmtree("../output/deploy/2022/exercises")
    shutil.copytree("docs","../output/deploy/2022/exercises",dirs_exist_ok=True)
finally:
    os.chdir(cwd)