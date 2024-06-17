import React, { useState } from 'react';
import Product from './Product';
import { products } from '../components/Products';
const App2 = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(setCart)
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className=" ">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App2;
