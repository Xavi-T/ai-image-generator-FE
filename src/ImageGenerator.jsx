import { DownloadOutlined } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import { Button, Card, Image, Input, message, Typography } from "antd";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
const { Title } = Typography;
const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [jsonData, setJsonData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loadingJson, setLoadingJson] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);

  const handleGenerateJSON = async () => {
    if (!prompt.trim() || prompt.length < 5) {
      message.error("Prompt must be at least 5 characters long.");
      return;
    }
    setLoadingJson(true);
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/generate-json`,
        { prompt }
      );
      setJsonData(response.data);
    } catch (error) {
      console.error("Error generating JSON:", error);
      message.error("Error generating JSON. Please try again!");
    } finally {
      setLoadingJson(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!jsonData) return;
    setLoadingImage(true);
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/generate-image`,
        { json: jsonData }
      );
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
      message.error("Error generating image! Please try again!");
    } finally {
      setLoadingImage(false);
    }
  };

  const handleDownload = async () => {
    if (!imageUrl) return;
    setLoadingDownload(true);
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "generated-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
      message.error("Error downloading image! Please try again!");
    } finally {
      setLoadingDownload(false);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
        background: "linear-gradient(135deg, #f0f2f5, #d6e4ff)",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title level={2}>AI Image Generator</Title>
      </motion.div>

      <Input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a description..."
        style={{ marginBottom: "10px" }}
      />

      <Button
        type="primary"
        onClick={handleGenerateJSON}
        loading={loadingJson}
        style={{ marginRight: "10px" }}
      >
        Generate JSON
      </Button>

      {jsonData && (
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: "#282c34",
            color: "#61dafb",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "left",
            overflowX: "auto",
            maxHeight: "200px",
          }}
        >
          {JSON.stringify(jsonData, null, 2)}
        </motion.pre>
      )}

      {jsonData && (
        <Button
          type="primary"
          onClick={handleGenerateImage}
          loading={loadingImage}
        >
          Generate Image
        </Button>
      )}

      {imageUrl && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Card style={{ marginTop: "20px", textAlign: "center" }}>
            <Image width={300} src={imageUrl} alt="Generated" />
            <Button
              loading={loadingDownload}
              type="dashed"
              icon={<DownloadOutlined />}
              onClick={handleDownload}
              style={{ margin: "10px" }}
            >
              Download Image
            </Button>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default ImageGenerator;
