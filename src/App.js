import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true)
  }

  const hideCartHandler = ()=>{
    setShowCart(false)
  }

  return (
    <React.Fragment>
      {showCart && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main>
      <Meals />
      </main>
      
    </React.Fragment>
  );
}

export default App;
