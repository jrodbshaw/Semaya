import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/home/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
