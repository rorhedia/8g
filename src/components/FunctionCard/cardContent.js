/**
 * Crear un componente funcional que renderice una card
 * haciendo referencia al post de un blog
 */

import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

function CardContent({ img2, title, text, subtitle }) {
  return (
    <Card>
      <CardImg top width="100%" src={img2} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{text}</CardText>
      </CardBody>
    </Card>
  );
}

export default CardContent;
