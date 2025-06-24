import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js';
import { ProductContext } from './MobileContext/ProductContext.js';

const ProductList = () => {
  const {products} = useContext(ProductContext);
  
  return (
    <div>
      <h2>Mobile Store</h2>
      {products.map(product => (
        <div key={product.id} style={{'border': '2px solid black', 'marginBottom': '10px', 'padding': '10px', 'textAlign': 'center'}}>
          <img src={product.image} width="100" alt={product.name} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;