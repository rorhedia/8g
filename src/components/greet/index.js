import React from "react";

function Greet({ firstname, lastname }) {
  return (
    <p>
      Hola {firstname} {lastname}
    </p>
  );
}

export default Greet;
