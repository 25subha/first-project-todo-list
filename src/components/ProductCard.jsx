import React from 'react'

const ProductCard = ({pitem}) => {
  return (
 
      <div className='shadow-lg shadow-gray-500 text-center pb-4 '>
          <img src={pitem.thumbnail} alt="products" className='transition-transform duration-[0.3s] hover:transform hover:scale-[1.1]' />
          <h4>{pitem.title}</h4>
          <p>{`Rs: ${pitem.price}`}</p>
      </div>

  )
}

export default ProductCard;