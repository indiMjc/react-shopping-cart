import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="App">
          <Navigation />

          <Route exact path="/" component={Products} />

          <Route path="/cart" render={() => <ShoppingCart />} />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
