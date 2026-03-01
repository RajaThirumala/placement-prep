import React from "react";

const ProductCard = ({ productname, price, Addtocart }) => {
  return (
    <div>
      <h1>productname:{productname}</h1>
      <h2>price:{price}</h2>
      <button className="bg-blue-600" onClick={() => Addtocart(productname)}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
