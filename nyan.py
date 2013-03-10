from flask import Flask, render_template
import os
from flask.ext.mail import Mail,Message

port = int(os.environ.get('PORT', 3000))
app = Flask(__name__)
mail = Mail()

app.config.update(
	#Email Settings
	MAIL_SERVER = "smtp.live.com",
	MAIL_USE_TLS = True,
	MAIL_USE_SSL = False,
	MAIL_USERNAME = "xiaoyan@capricc.io",
	MAIL_PASSWORD = "910915"
	)
mail.init_app(app)

@app.route('/')
@app.route('/<path:url>')
def nyan(url=""):
	return render_template("nyan.html",url=url)

@app.route('/caigu')
def caigu():
	return render_template("caigu.html")

@app.route('/send/<content>')
def send(content):
	msg = Message(content,sender="xiaoyan@capricc.io",recipients=["yutao@capricc.io"])
	msg.body=content
	mail.send(msg)
	return content

if __name__ == "__main__":
	#app.debug = True
	app.run(host='0.0.0.0',port=port)