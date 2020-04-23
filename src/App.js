import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./components/Homepage";

const hatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={hatsPage} />
      </Switch>
    </>
  );
}

export default App;
