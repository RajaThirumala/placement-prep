import React, { useState, useEffect } from "react";

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetching() {
      try {
        setLoading(true);

        const res = await fetch("https://fakestoreapi.com/products/");

        if (!res.ok) {
          throw new Error("Fetch failed");
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetching();
    return ()=>console.log("Cleared logs")
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      {data.map((item) => (
        <h3 key={item.id}>Name: {item.title}</h3>
      ))}
    </>
  );
};

export default DataFetch;