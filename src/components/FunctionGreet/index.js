import React from "react";

// CSS
import { Badge } from "reactstrap";

function Greet({ firstname, lastname }) {
  return (
    <div>
      <p>
        Hola {firstname} {lastname}{" "}
        <Badge color="secondary">Functional Component</Badge>
      </p>
    </div>
  );
}

export default Greet;
