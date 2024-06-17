import React from 'react'
import ProductCard from './ProductCard'

const Product = ({finalPro, }) => {
  let items = finalPro.map((pitem,index) => {
    return(
      <ProductCard key={index} pitem={pitem}/>
    )
  })
  return (
    <>
      {finalPro.length >= 1 ? 
       items
      : 'No Product Found'
      
      }
    </>
  )
}

export default Product