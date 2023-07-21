from flask import Flask, request, jsonify
from flask_caching import Cache
import requests

app = Flask(__name__)
cache= Cache(app)

@app.route('/numbers')
@cache.cached(timeout=60)
def get_numbers():
    urls = request.args.getlist('url')
    numbers = []
    for url in urls:
        try:
            response = requests.get(url)
            response.raise_for_status()
            data = response.json()
            numbers.extend(data['numbers'])
        except (requests.exceptions.RequestException, ValueError):
            pass
    return jsonify(numbers=numbers)

if __name__ == '__main__':
    app.run(port=8008)
