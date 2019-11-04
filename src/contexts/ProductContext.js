import React, { useState, createContext } from "react";
import data from "../data";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  return <ProductContext>{props.children}</ProductContext>;
};
