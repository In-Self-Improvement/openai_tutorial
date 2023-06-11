import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
      <textarea
        className="test-area"
        cols={50}
        rows={10}
        onChange={e => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Do you Stuff!
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
