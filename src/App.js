import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const handleClear = () => setInput("");
  
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  // Keyboard support
  const handleKeyPress = (event) => {
    const key = event.key;

    if ((key >= "0" && key <= "9") || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
      setInput((prev) => prev + key);
    } else if (key === "Enter") {
      handleCalculate();
    } else if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (key.toLowerCase() === "c") {
      handleClear();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="calculator">
      <h1>--Calculator--</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={handleCalculate}>=</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}

export default App;
