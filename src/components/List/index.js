import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const elements = [
  {
    position: 1,
    text: "Text 1",
  },
  {
    position: 2,
    text: "Text 2",
  },
  {
    position: 3,
    text: "Text 3",
  },
];

class List extends Component {
  render() {
    const UIElements = elements.map(({ text }, idx) => (
      <ListGroupItem key={idx} color="danger">
        {text}
      </ListGroupItem>
    ));
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>{UIElements}</ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default List;
