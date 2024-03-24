import React, { useState } from "react";
import "./App.css";

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setOriginalImage(reader.result);

      // Create a FormData object and append the uploaded image file
      const formData = new FormData();
      formData.append("file", file);

      // Send a POST request to the backend with the image data
      fetch("http://localhost:5000/api/process-image", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error("Failed to process image");
          }
          // Convert the response to JSON
          return response.json();
        })
        .then((data) => {
          // Set the processed image data in state
          setProcessedImage(data.processed_image);
        })
        .catch((error) => {
          console.error("Error processing image:", error);
        });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vehicle Detection</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </header>
      <div className="Image-container">
        <div className="Image">
          <h2>Original Image</h2>
          {originalImage && <img src={originalImage} alt="Original" />}
        </div>
        <div className="Image">
          <h2>Processed Image</h2>
          {processedImage && (
            <img
              src={`data:image/jpeg;base64,${processedImage}`}
              alt="Processed"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
