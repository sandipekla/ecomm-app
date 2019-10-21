import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import SignInOrRegister from "./pages/SignInOrRegister/SignInOrRegister";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/signin" component={SignInOrRegister}></Route>
      </Switch>
    </div>
  );
}

export default App;
