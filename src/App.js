import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Reactstrap
import { Container, Row } from "reactstrap";

// Components
import Greet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greet firstname="Daniel" lastname="Heredia" />
        <ClassGreet firstname="Daniel" lastname="Heredia" />
      </header>
      <Container className="Post-container">
        <Row sm="4">
          <Post
            title="Card 1"
            text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
            urlImg="https://picsum.photos/id/230/100/100"
          />
          <Post
            title="Card 2"
            text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
            urlImg="https://picsum.photos/id/231/100/100"
          />
          <Post
            title="Card 3"
            text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
            urlImg="https://picsum.photos/id/232/100/100"
          />
          <Post
            title="Card 4"
            text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
            urlImg="https://picsum.photos/id/233/100/100"
          />
          <Post
            title="Card 5"
            text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
            urlImg="https://picsum.photos/id/234/100/100"
          />
          <Post
            title="Card 6"
            text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
            urlImg="https://picsum.photos/id/235/100/100"
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
