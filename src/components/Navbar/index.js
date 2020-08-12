import React, { Component } from "react";

// Reac Router Dom
import { Link } from "react-router-dom";

// CSS
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/notesBlog">Blog de notas</Link>
            </li>
            <li>
              <Link to="/currencyConverter">Conversor de divisas</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
