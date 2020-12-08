import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [colorInput, setColorInput] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setColorInput(e.target.value);
  };
  const changeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const mycolor = document.getElementsByTagName("input")[0].value;
    setColor(mycolor);
  };
  return (
    <>
      <div className="App">
        Change Div color
        <div>
          <input
            type="text"
            placeholder="Enter the color name"
            value={colorInput}
            onChange={inputOnChange}
            id="newcolor"
          />
          <button type="submit" onClick={changeColor}>
            Submit
          </button>
          <div
            className="colorfull"
            style={{ backgroundColor: `${color}` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
