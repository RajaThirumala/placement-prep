import React from "react";
import ProductCard from "./ProductCard";
const Products = () => {
  const addtocart = (productname) => {
    console.log(`Added ${productname} to cart`);
  };

  return (
    <>
      <ProductCard
        productname="Bat"
        price={300}
        Addtocart={addtocart}
      ></ProductCard>
      <ProductCard
        productname="Ball"
        price={153}
        Addtocart={addtocart}
      ></ProductCard>
    </>
  );
};

export default Products;
