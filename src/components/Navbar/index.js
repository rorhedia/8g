import React, { Component } from "react";
import { Menu } from "antd";

// Reac Router Dom
import { Link } from "react-router-dom";

// CSS
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/notesBlog">Blog de notas</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/currencyConverter">Conversor de divisas</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/users">Usuarios</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
