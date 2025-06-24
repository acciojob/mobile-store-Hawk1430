import { createContext, useState } from "react";
import React from 'react';
import { mobilesList } from "../../data/data";


export const ProductContext = createContext();


const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(mobilesList);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
