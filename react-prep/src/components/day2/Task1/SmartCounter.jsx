import React, { useState, useEffect } from "react";

const SmartCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    setHistory((prev) => [...prev,count]);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>History: {history.join(", ")}</h2>

      <button onClick={increment} className="bg-green-400">
        Increment
      </button>

      <button onClick={decrement} className="bg-red-400">
        Decrement
      </button>
    </div>
  );
};

export default SmartCounter;