import React from "react";
import "./App.css";

// Reac Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// material UI
// import { Button } from "@material-ui/core";

// Components
import NotesBlog from "./screens/NotesBlog";
import CurrencyConverter from "./screens/CurrencyConverter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact={true} path="/">
            <h1>Hola desde home</h1>
          </Route>

          <Route path="/notesBlog">
            <NotesBlog />
          </Route>

          <Route path="/currencyConverter">
            <CurrencyConverter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
