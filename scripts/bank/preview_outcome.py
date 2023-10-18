from checkit.bank import Bank
import os
import subprocess
os.chdir("exercises/sandbox")
b = Bank()
print('generate exercises')
b.generate_exercises(regenerate=True, images=True)
b.write_json()
b.build_viewer()
subprocess.run(['python', '-m', 'http.server', '-d', 'docs'])
