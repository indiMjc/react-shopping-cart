import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const addItem = item => {
    setCart([...cart, item]);
  };
  return (
    <ProductProvider>
      <CartProvider>
        <div className="App">
          <Navigation cart={cart} />
          <Route exact path="/" component={Products} />} />
          <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
