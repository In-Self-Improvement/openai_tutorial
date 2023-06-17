import { useState } from "react";
import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { options } from "./models/options";
import { Configuration, OpenAIApi } from "openai";
function App() {
  const [option, setOption] = useState<options>({});
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY as string,
  });
  const openai = new OpenAIApi(configuration);
  const selectOption = (option: options) => {
    setOption(option);
  };
  const doStuff = async () => {
    const object: options = { ...option, prompt: input };
    console.log("object", object);

    const response = await openai.createCompletion(object);
    console.log("response", response);

    setResult(response?.data?.choices[0]?.text ?? "");
  };
  return (
    <div className="app-main">
      {Object.values(option).length === 0 ? (
        <OptionSelection selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
