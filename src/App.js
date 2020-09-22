import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route component={Home} path={"/"} exact />
      </Switch>
    </div>
  );
}

export default App;
