import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const elements = [
  // {
  //   position: 1,
  //   text: "Text 1",
  // },
  // {
  //   position: 2,
  //   text: "Text 2",
  // },
  // {
  //   position: 3,
  //   text: "Text 3",
  // },
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: true,
    };
    this.handleShowListClick = this.handleShowListClick.bind(this);
  }

  handleShowListClick() {
    const { activeList } = this.state;
    this.setState({
      activeList: !activeList,
    });
  }

  render() {
    const { activeList } = this.state;

    let UIElements = elements.map(({ text }, idx) => (
      <ListGroupItem key={idx} color="danger">
        {text}
      </ListGroupItem>
    ));

    if (!UIElements.length) {
      UIElements = <h1>No hay elements</h1>;
    }

    return (
      <Container>
        <Row>
          <Col>
            {activeList ? <ListGroup>{UIElements}</ListGroup> : null}
            {UIElements.length ? (
              <Button onClick={this.handleShowListClick}>
                {activeList ? "Hide list" : "Show list"}
              </Button>
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default List;
