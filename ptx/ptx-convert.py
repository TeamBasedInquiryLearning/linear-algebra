import lxml
import re

# Read in all activities for module
with open("../tex/modules/6-G/activities.tex") as tex_file:
    tex_source = tex_file.read()

def command_to_ptx(s,old,new):
    return re.sub(r"\\"+old+r"{([a-zA-Z0-9 \-]*)}",r"<"+new+r">\1</"+new+r">",s)
def env_to_ptx(s,old,new,attr=None):
    if attr is None:
        s = s.replace(r"\begin{"+old+"}",r"<"+new+r">")
    else:
        oldregex = old.replace(r"*",r"\*")
        s = re.sub(r"\\begin{"+oldregex+r"}{([a-zA-Z0-9 \-]*)}",r"<"+new+r" "+attr+r"='\1'>",s)
    return s.replace(r"\end{"+old+"}",r"</"+new+r">")

tex_source = tex_source.replace(r"&",r"&amp;")
tex_source = tex_source.replace(r"\(",r"<m>")
tex_source = tex_source.replace(r"\)",r"</m>")
tex_source = tex_source.replace(r"\[",r"<me>")
tex_source = tex_source.replace(r"\]",r"</me>")
tex_source = tex_source.replace(r"\item","</li>\n<li>")
tex_source = tex_source.replace(r"\noindent","")
tex_source = tex_source.replace(r"\begin{instructorNote}","<!--")
tex_source = tex_source.replace(r"\end{instructorNote}","-->")
tex_source = tex_source.replace(r"\begin{bmatrix}",r"\left[\begin{array}")
tex_source = tex_source.replace(r"\end{bmatrix}",r"\end{array}\right]")
tex_source = re.sub(r"\[([c|]*)\]",r"{\1}",tex_source)
tex_source = command_to_ptx(tex_source,"term","term")
tex_source = command_to_ptx(tex_source,"textbf","em")
tex_source = command_to_ptx(tex_source,"url","url")
tex_source = command_to_ptx(tex_source,"texttt","c")
tex_source = env_to_ptx(tex_source,"definition","definition")
tex_source = env_to_ptx(tex_source,"remark","remark")
tex_source = env_to_ptx(tex_source,"fact","fact")
tex_source = env_to_ptx(tex_source,"observation","observation")
tex_source = env_to_ptx(tex_source,"example","example")
tex_source = env_to_ptx(tex_source,"enumerate","ol")
tex_source = env_to_ptx(tex_source,"itemize","ul")
tex_source = env_to_ptx(tex_source,"activity","activity","tbil-time")
tex_source = env_to_ptx(tex_source,"subactivity","task")
tex_source = env_to_ptx(tex_source,"alignat*","md","alignat-columns")
tex_source = env_to_ptx(tex_source,"alignedat","md","alignat-columns")
tex_source = env_to_ptx(tex_source,"multicols","sidebyside")
with open("source/05-G/raw.ptx","w") as outfile:
    print(tex_source,file=outfile)