/**
 * Crear un componente funcional que renderice una card
 * haciendo referencia al post de un blog
 */

import React from "react";

// Reactstrap
import { Col, Card, CardImg, CardText, CardBody } from "reactstrap";

// CSS
import "./Post.css";

function Post({ urlImg, title, text }) {
  return (
    <Col className="post-container">
      <Card>
        <CardImg top src={urlImg} alt="Card image cap" />
        <CardBody>
          <h2>{title}</h2>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Post;
