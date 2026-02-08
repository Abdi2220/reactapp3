import React, { useState } from "react";

const MyCalculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display) || "");
      } catch {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-2xl w-80 ml-29">
        <input
          type="text"
          readOnly
          value={display}
          className="w-full p-4 mb-4 text-2xl bg-gray-900 text-white rounded text-right shadow-inner"
        />
        <div className="grid grid-cols-4 gap-2 w-full">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`p-4 text-xl font-bold rounded text-white transition duration-150 ${
                "+-*/".includes(btn)
                  ? "bg-orange-500 hover:brightness-125"
                  : btn === "C"
                  ? "bg-red-500 hover:brightness-125"
                  : "bg-gray-700 hover:brightness-125"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCalculator;
