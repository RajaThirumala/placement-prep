import React, { useState, useMemo, useEffect } from 'react'

const Recal = () => {
  const [theme, setTheme] = useState("Light");
  const [input, setInput] = useState(0);

  const sum = useMemo(() => {
    console.log("Inside function");

    let total = 0;
    for (let i = 0; i < input; i++) {
      for (let j = i; j < input; j++) {
        total += j;
      }
    }

    return total;
  }, [input]);
  useEffect(() => {
  console.log("Mounted");
}, []);
useEffect(() => {
  console.log("input changed");
}, [input]);

console.log("Render happened");

  return (
    <>
      <div className={theme === "Light" ? "bg-amber-300" : "bg-amber-950"}>
        <button onClick={() =>
          setTheme(prev => prev === "Light" ? "Dark" : "Light")
        }>
          changetheme
        </button>
      </div>

      <input
        value={input}
        type="number"
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <h1>totalsum: {sum}</h1>
    </>
  )
}

export default Recal;