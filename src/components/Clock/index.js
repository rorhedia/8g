import React, { Component } from "react";

import { Badge, Container, Button } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      color: "danger",
      counter: 1,
      flag: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "primary" });
    }, 2000);

    setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  handleClick() {
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({
      counter,
    });
  }

  changeColor() {
    let { flag } = this.state;

    flag = !flag;
    this.setState({
      flag,
    });
  }

  render() {
    return (
      <div>
        <h1>
          <Badge color={!this.state.flag ? "primary" : "danger"}>
            {this.state.date}
          </Badge>
        </h1>
        <Container>
          <Badge color={!this.state.flag ? "danger" : "primary"}>
            {this.state.counter}
          </Badge>
          <br />
          <Button onClick={this.changeColor}>Click me!</Button>
        </Container>
      </div>
    );
  }
}

export default Clock;
