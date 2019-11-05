import React, { createContext, useState } from "react";
import data from "../data";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      {props.children}
    </ProductContext.Provider>
  );
};
