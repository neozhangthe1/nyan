from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
@app.route('/<path:url>')
def nyan(url=""):
	return render_template("nyan.html",url=url)

@app.route('/caigu')
def caigu():
	return render_template("caigu.html")


if __name__ == "__main__":
	#app.debug = True
	app.run()