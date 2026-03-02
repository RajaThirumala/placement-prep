import React, { useState, useCallback} from 'react'
import ProductList from './ProductList';

const CartCount = () => {
  const [cartCount,setCartCount] = useState(0);
  const addtocart = useCallback(()=>{
    setCartCount((prev)=>prev+1);
  },[])  
  return (
    <>
    
    <h2>cartcount:{cartCount}</h2>
    <ProductList addtocart = {addtocart}></ProductList>
    </>
  )
}

export default CartCount