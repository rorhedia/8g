import React from "react";
import { CardColumns } from "reactstrap";
import img2 from "./img2.jpg";

import CardContent from "./cardContent";

function CardContainer() {
  return (
    <CardColumns>
      <CardContent
        title="Card title"
        text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
        subtitle="Last updated 3 mins ago"
        img2={img2}
      />
      <CardContent
        title="Card title"
        text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
        subtitle="Last updated 3 mins ago"
        img2={img2}
      />
      <CardContent
        title="Card title"
        text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
        subtitle="Last updated 3 mins ago"
        img2={img2}
      />
      <CardContent
        title="Card title"
        text="This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer."
        subtitle="Last updated 3 mins ago"
        img2={img2}
      />
    </CardColumns>
  );
}

export default CardContainer;
