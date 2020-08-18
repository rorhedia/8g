import React, { useState } from "react";

// Ant Design
import { Divider, Button, Input, Row, Col } from "antd";

function Hooks() {
  const [greet] = useState("hola que hace");
  const [activeButton, setActiveButton] = useState(false);
  const [num, setNumber] = useState(0);

  const handleClick = () => setActiveButton(!activeButton);

  return (
    <div className="Container">
      <div className="Item">
        <h1>{greet}</h1>
      </div>
      <div className="Item">
        <button onClick={handleClick}>{activeButton ? "Off" : "On"}</button>
      </div>

      <Divider>Incrementar o decrementar</Divider>
      <Row>
        <Col span={8}>
          <Button
            type="primary"
            shape="circle"
            onClick={() => setNumber(num - 1)}
          >
            -
          </Button>
        </Col>
        <Col span={8}>
          <Input value={num} />
        </Col>
        <Col span={8}>
          <Button
            type="primary"
            shape="circle"
            onClick={() => setNumber(num + 1)}
          >
            +
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Hooks;
