import React, { useContext, useState } from 'react'
import { ProductContext } from './MobileContext/ProductContext'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ProductDetails = () => {
  const {products} = useContext(ProductContext);
  const {id} = useParams();
  const history = useHistory();

  const product = products.find( p => p.id === parseInt(id));

  if(!product) return <p>Product not found</p>
    
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button className='btn' onClick={() => history.push('/')}>Back</button>

    </div>
  )
}

export default ProductDetails