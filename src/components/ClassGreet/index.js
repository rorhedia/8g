import React, { Component } from "react";

// CSS Reactstrap
import { Badge } from "reactstrap";

class ClassGreet extends Component {
  render() {
    return (
      <div>
        <p>
          Hola {this.props.firstname} {this.props.lastname}{" "}
          <Badge color="secondary">Class Component</Badge>
        </p>
      </div>
    );
  }
}

export default ClassGreet;
