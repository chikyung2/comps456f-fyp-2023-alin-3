import json
from flask import Flask, request, jsonify
from ultralytics import YOLO
from PIL import Image
from waitress import serve
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load waste mapping and type info
with open("waste_dict.json", "r") as f:
    waste_dict = json.load(f)

with open("waste_type_info.json", "r", encoding="utf-8") as f:
    waste_type_info = json.load(f)


@app.route('/', methods=['GET'])
def index():
    return "Hello, World!"

@app.route('/recognize', methods=['POST'])
def recognize():
    image = request.files["image"]
    result = classify_image(image.stream)

    return jsonify(result)


def classify_image(buffer):
    model = YOLO("./model.pt")
    results = model.predict(Image.open(buffer))
    result = results[0]

    predicted_class_index = result.probs.top1
    waste_category_index = waste_dict[str(predicted_class_index)]["type"]

    return {"prediction": {"name": result.names[predicted_class_index], "confidence": result.probs.top1conf.item()}, "details": waste_type_info[str(waste_category_index)]}


if __name__ == '__main__':
    print(f"Starting server...")
    serve(app, host='0.0.0.0', port=8080, threads=1)
