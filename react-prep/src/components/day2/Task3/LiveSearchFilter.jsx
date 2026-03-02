import React, { useState } from "react";

const LiveSearchFilter = () => {
  const [searchingItem, setSearchingItem] = useState("");

  const items = [
    "Bat",
    "Ball",
    "Ring",
    "MuskaBun",
    "chai",
    "Biryani",
  ];

  const filteredList = items.filter((item) =>
    item.toLowerCase().includes(searchingItem.toLowerCase())
  );

  return (
    <>
      <input
        value={searchingItem}
        onChange={(e) => setSearchingItem(e.target.value)}
        className="bg-blue-400 border-2 border-black-500"
        type="text"
        placeholder="Search here"
      />

      {searchingItem &&
        (filteredList.length === 0
          ? <h3>No results found</h3>
          : filteredList.map((item) => (
              <h1 key={item}>{item}</h1>
            )))}
    </>
  );
};

export default LiveSearchFilter;