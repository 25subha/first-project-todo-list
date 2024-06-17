import React from 'react'

const ProductCard = ({pitem}) => {
  return (
 
      <div className='shadow-lg text-center pb-4 '>
          <img src={pitem.thumbnail} alt="products" className='' />
          <h4>{pitem.title}</h4>
          <p>{`Rs:${pitem.price}`}</p>
      </div>

  )
}

export default ProductCard;