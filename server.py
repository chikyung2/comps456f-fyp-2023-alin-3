from flask import Flask, request, jsonify
from ultralytics import YOLO
from PIL import Image
from waitress import serve
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    with open('index.html', 'r') as f:
        return f.read()

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})
    
    image = request.files['image']
    image_data = image.read()
    text = request.form['text']
    location = request.form['location']
    
    return jsonify({'message': 'Image uploaded successfully'})


@app.route('/recognize', methods=['POST'])
def recognize():
    image = request.files["image_file"]
    result = classify_on_image(image.stream)
    print(result)
    return jsonify(result)


def classify_on_image(buffer):
    model = YOLO("./model/best.pt")
    results = model.predict(Image.open(buffer))
    result = results[0]

    names_dict = result.names
    probs = result.probs

    top1_class = names_dict[probs.top1]
    top1_score = probs.top1conf.item()

    return {"top1_class": top1_class, "top1_score": top1_score}


if __name__ == '__main__':
    print(f"Starting server...")
    serve(app, host='0.0.0.0', port=8080, threads=1)
