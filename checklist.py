import json
from flask import Flask, render_template, request, redirect

with open("static/checklist.json") as f:
    checklist = json.load(f)

app = Flask(__name__)

@app.route("/", methods=["POST", "GET"])
def home():
    if request.method == "POST":
        for item in request.form.items():
            if item[1] == "":
                try:
                    del checklist[item[0]]
                except KeyError:
                    pass
            else:
                checklist[item[0]] = item[1]
        with open("static/checklist.json", "w") as f:
            json.dump(checklist, f, indent=4)
    return render_template("index.html", checklist=checklist)

@app.route("/submit/", methods=["POST", "GET"])
def submit():
    if request.method == "POST":
        for item in request.form.items():
            if item[1] == "":
                try:
                    del checklist[item[0]]
                except KeyError:
                    pass
            else:
                checklist[item[0]] = item[1]
        with open("static/checklist.json", "w") as f:
            json.dump(checklist, f, indent=4)
    return redirect("http://localhost/")

app.run(port=5555, host="0.0.0.0")