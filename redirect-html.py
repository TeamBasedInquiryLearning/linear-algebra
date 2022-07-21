import os

for filename in os.listdir("output/deploy"):
    if filename.endswith(".html"):
        html = f'<html><head><meta http-equiv="refresh" content="5;url=./legacy/{filename}" /></head><body><p>Linear Algebra for TBIL has been updated! <a href="./index.html">Learn more.</a></p><p>Redirecting to <a href="./legacy/{filename}">legacy edition</a> of Linear Algebra for TBIL in five seconds...</p></body></html>'
        with open(os.path.join("output/deploy",filename),"w") as f:
            f.write(html)
    else:
        continue