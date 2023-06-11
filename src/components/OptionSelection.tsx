import { arrayItems } from "../AIOptions";
import { options } from "../models/options";

interface Props {
  selectOption: (option: options) => void;
}
export default function OptionSelection(props: Props) {
  const selectOption = props.selectOption;
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
