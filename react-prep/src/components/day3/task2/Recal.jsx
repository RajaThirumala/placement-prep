import React, { useState, useMemo } from 'react'

const Recal = () => {
  const [theme, setTheme] = useState("Light");
  const [input, setInput] = useState(0);

  const sum = useMemo(() => {
    console.log("Inside");

    let total = 0;
    for (let i = 0; i < input; i++) {
      for (let j = i; j < input; j++) {
        total += j;
      }
    }

    return total;
  }, [input]);

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