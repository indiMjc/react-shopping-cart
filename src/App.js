import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { ProductProvider } from "./contexts/ProductContext";

function App() {
  const [cart, setCart] = useState([]);
  const addItem = item => {
    setCart([...cart, item]);
  };
  return (
    <ProductProvider>
      <div className="App">
        <Navigation cart={cart} />
        {/* Routes */}
        <Route exact path="/" component={Products} />} />
        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </div>
    </ProductProvider>
  );
}

export default App;
