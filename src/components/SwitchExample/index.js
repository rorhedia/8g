import React, { Component } from "react";
import { Container, Row, Col, Badge, Button } from "reactstrap";

// CSS
import "./SwitchExample.css";

class SwitchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClickSwithc = this.handleClickSwithc.bind(this);
  }

  handleClickSwithc() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  render() {
    const { active } = this.state;
    const color = active ? "primary" : "secondary";

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h1>
                <Badge color={color}>Holi</Badge>
              </h1>
              <Button color="success" onClick={this.handleClickSwithc}>
                Switch color!
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default SwitchExample;
