import React from "react";
import { arrayItems } from "../AIOptions";

export default function OptionSelection() {
  console.log("arrayItems", arrayItems);
  const selectOption = option => {
    console.log("option", option);
  };
  return (
    <>
      <h1>React AI APP</h1>
      <div className="grid-main">
        {arrayItems.map(item => {
          return (
            <div
              className="grid-child"
              onClick={() => {
                selectOption(item?.option);
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
