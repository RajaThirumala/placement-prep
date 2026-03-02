import React from 'react'

const ProductList = React.memo(({addtocart})=> {
  console.log("ProductList rerendered");  
  const products = [{id:1,name:"Facewash"},
    {id:2,name:"Bodywash"},
{id:3,name:"Serum"},
{id:4,name:"Shampoo"},
{id:5,name:"Conditioner"},
{id:6,name:"Toner"},
{id:7,name:"Moisturizer"},
{id:8,name:"BodyLotion"},
{id:9,name:"Hairserum"},
{id:10,name:"Sunscreen"}]
  return (
    <>
    {
        products.map((product)=>{
           return( <div key={product.id}>
                <h3>{product.name}</h3>
                <button className= "bg-pink-300" onClick = {addtocart}>Add to cart</button>
            </div>)
        })
    }
    </>
  )
} )

export default ProductList