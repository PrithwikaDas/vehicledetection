from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import base64

app = Flask(__name__)

# Enable CORS with specific settings
CORS(app, origins='http://localhost:3000', methods=['GET', 'POST'])


# Load pre-trained classifier for vehicle detection
car_cascade_path = './haarcascade_car.xml'  # Specify the correct path here
car_cascade = cv2.CascadeClassifier(car_cascade_path)

@app.route('/process-image', methods=['POST'])
def process_image():
    file = request.files['file']
    # Read the uploaded image file
    img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)

    # Convert image to grayscale for better processing
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Perform vehicle detection
    vehicles = car_cascade.detectMultiScale(gray, 1.1, 4)

    # Draw bounding boxes around detected vehicles and count them
    vehicles_count = len(vehicles)
    for (x, y, w, h) in vehicles:
        cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)

    # Convert processed image back to bytes
    _, img_encoded = cv2.imencode('.jpg', img)
    img_bytes = img_encoded.tobytes()

    # Encode the processed image bytes as Base64
    img_base64 = base64.b64encode(img_bytes).decode('utf-8')

    return jsonify({'vehicles_count': vehicles_count, 'processed_image': img_base64})

if __name__ == '__main__':
    app.run(debug=True)
