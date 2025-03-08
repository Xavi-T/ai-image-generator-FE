import { useState } from "react";
import axios from "axios";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [jsonData, setJsonData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleGenerateJSON = async () => {
    try {
      const response = await axios.post("http://localhost:5001/generate-json", { prompt });
      setJsonData(response.data);
    } catch (error) {
      console.error("Error generating JSON:", error);
    }
  };

  const handleGenerateImage = async () => {
    if (!jsonData) return;
    try {
      const response = await axios.post("http://localhost:5001/generate-image", { json: jsonData });
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>AI Image Generator</h1>
      <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Enter a description..."
        style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
      />
      <br />
      <button onClick={handleGenerateJSON} style={{ marginRight: "10px" }}>Generate JSON</button>
      {jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}
      {jsonData && <button onClick={handleGenerateImage}>Generate Image</button>}
      {imageUrl && <img src={imageUrl} alt="Generated" style={{ width: "300px", marginTop: "20px" }} />}
    </div>
  );
};

export default ImageGenerator;
