# Starter backend for Code Helper Bot
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Code Helper Backend is running!"
