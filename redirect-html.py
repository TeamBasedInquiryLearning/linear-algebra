import os

for filename in os.listdir("docs"):
    if filename.endswith(".html"):
        html = f'<html><meta http-equiv="refresh" content="0; URL="archive-2021/{filename}" /><body>Redirecting...</body></html>'
        with open(os.path.join("docs",filename),"w") as f:
            f.write(html)
    else:
        continue