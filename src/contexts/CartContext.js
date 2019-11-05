import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart, setCart] = useState([]);
  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
