from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    # Domyślnie wyświetl o-mnie.html
    return send_from_directory('static', 'o-mnie.html')

@app.route('/<path:path>')
def serve_file(path):
    # Obsłuż inne pliki statyczne (CSS, JS, itd.)
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
