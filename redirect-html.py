import os

for filename in os.listdir("legacy-la"):
    if filename.endswith(".html"):
        html = f'<html><head><meta http-equiv="refresh" content="0;url=./legacy/{filename}" /></head><body>Redirecting...</body></html>'
        with open(os.path.join("legacy-la",filename),"w") as f:
            f.write(html)
    else:
        continue