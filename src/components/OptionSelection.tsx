import { arrayItems } from "../AIOptions";
import { options } from "../models/options";
export default function OptionSelection() {
  const selectOption = (option: options) => {
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
                selectOption(item?.option as options);
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
