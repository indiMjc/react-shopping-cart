import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  console.log("console.log output: cart", cart);
  const addItem = item => {
    setCart([...cart, item]);
    window.localStorage.setItem("cartItems", JSON.stringify([...cart, item]));
  };

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
