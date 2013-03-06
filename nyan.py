from flask import Flask, render_template
import os
from pml import app
port = int(os.environ.get('PORT', 5000))
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
	app.run(host='0.0.0.0',port=port)