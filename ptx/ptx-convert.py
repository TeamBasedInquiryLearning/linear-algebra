import lxml
import re

# Read in all activities for module
with open("../tex/modules/1-E/activities.tex") as tex_file:
    tex_source = tex_file.read()

def command_to_ptx(s,old,new):
    return re.sub(r"\\"+old+r"{([a-zA-Z \-]*)}",r"<"+new+r">\1</"+new+r">",s)


tex_source = tex_source.replace(r"\(",r"<m>")
tex_source = tex_source.replace(r"\)",r"</m>")
tex_source = tex_source.replace(r"\[",r"<me>")
tex_source = tex_source.replace(r"\]",r"</me>")
tex_source = command_to_ptx(tex_source,"term","term")
tex_source = command_to_ptx(tex_source,"textbf","em")
print(tex_source)