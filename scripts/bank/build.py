from checkit.bank import Bank
import os
os.chdir("exercises")
b = Bank()
b.generate_exercises()
b.write_json()
b.build_viewer()
os.chdir("..")
