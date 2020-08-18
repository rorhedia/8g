import React, { useState, useEffect } from "react";

// Services
import { getUser } from "../../services.js";

import { Link, useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id).then((data) => {
      setUser(data);
    });
  }, []);

  const { firstName, lastName, age, hobbies } = user;

  return (
    <>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{age} años</p>
      <p>Hobbies</p>
      <ul>
        {hobbies && hobbies.map((hobbie) => <li key={hobbie}>{hobbie}</li>)}
      </ul>
      <Link to="/users">regresar ...</Link>
    </>
  );
}

export default UserDetail;
