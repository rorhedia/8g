import React from "react";
import "./App.css";

// Reactstrap
import { Container } from "reactstrap";

// Components
// import SwitchExample from "./components/SwitchExample";
// import List from "./components/List";
import PostContainer from "./components/PostsContainer";

function App() {
  return (
    // <div className="App">
    //   <SwitchExample />
    //   <List />
    // </div>
    <Container className="Post-container">
      <PostContainer />
    </Container>
  );
}

export default App;
