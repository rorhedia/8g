import React from "react";
import { Layout } from "antd";

// CSS
import "./App.css";

// Reac Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// screens
import NotesBlog from "./screens/NotesBlog";
import CurrencyConverter from "./screens/CurrencyConverter";
import Users from "./screens/Users";
import Hooks from "./screens/Hooks";
import HookCurrecyConverter from "./screens/HookCurrencyConverter";

// Components
import Navbar from "./components/Navbar";

const { Header, Content } = Layout;

function App() {
  const pathname = window.location.pathname.substr(1);

  let selectedLink = "1";
  if (pathname === "notesBlog") {
    selectedLink = "2";
  } else if (pathname === "currencyConverter") {
    selectedLink = "3";
  } else if (pathname === "users") {
    selectedLink = "4";
  } else if (pathname === "hooks") {
    selectedLink = "5";
  } else if (pathname === "currencyHooks") {
    selectedLink = "6";
  }

  return (
    <Layout>
      <Router>
        <Header>
          <Navbar selectedLink={selectedLink} />
        </Header>

        <Content className="content">
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

            <Route path="/hooks">
              <Hooks />
            </Route>

            <Route path="/currencyHooks">
              <HookCurrecyConverter />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
