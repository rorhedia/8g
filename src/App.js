import React from "react";
import { Layout, Menu } from "antd";

// import darkTheme from "@ant-design/dark-theme";
// import "./App.css";

// Reac Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// material UI
// import { Button } from "@material-ui/core";

// screens
import NotesBlog from "./screens/NotesBlog";
import CurrencyConverter from "./screens/CurrencyConverter";
import Users from "./screens/Users";

// Components
import Navbar from "./components/Navbar";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <Navbar />
        </Header>

        <Content style={{ padding: "50px 0" }}>
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

            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
