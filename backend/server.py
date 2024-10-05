from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = Flask(__name__)

openai_api_key = os.getenv('OPENAI_API_KEY')

@app.route('/')
def index():
    return "Backend Live"

if __name__ == '__main__':
    app.run(debug=True)
