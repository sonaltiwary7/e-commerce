import React from 'react';

const Product = ({ product, view }) => (
  <div className={`product ${view}`}>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default Product;
