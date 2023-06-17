import React, { ChangeEvent } from "react";

interface TranslationProps {
  doStuff: () => void;
  setInput: (value: string) => void;
  result: string;
}

export default function Translation({
  doStuff,
  setInput,
  result,
}: TranslationProps) {
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <textarea
        className="test-area"
        cols={50}
        rows={10}
        onChange={handleInputChange}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Do your Stuff!
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
