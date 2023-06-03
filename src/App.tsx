import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    try {
      console.log("clicked");

      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });
      setResult(response?.data?.data[0]?.url);
    } catch (e) {
      console.log("something is wrong", e);
    }
  };

  return (
    <div className="app-main">
      <h3>Generate an Image using Open AI API</h3>
      <input
        className="app-input"
        placeholder="Type something to Generate an Image.."
        onChange={e => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate an Image</button>
      {result.length > 0 ? (
        <img className="result-image" src={result} alt="result" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
