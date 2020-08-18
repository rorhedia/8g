import React, { useState, useEffect } from "react";

// Services
import { getUsers } from "../../services.js";

import { Link, useRouteMatch } from "react-router-dom";

import "./UserList.css";

function UserList() {
  const { url } = useRouteMatch();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      let usersArr = [];

      for (const key in users) {
        users[key]["key"] = key;
        usersArr.push(users[key]);
      }

      if (usersArr) {
        setUsers(usersArr);
      }
    });
  });

  const parsedUsers = users.map(({ firstName, lastName, key }, idx) => (
    <Link key={key} to={`${url}/${key}`}>
      {firstName} {lastName}
    </Link>
  ));

  return (
    <div className="Container">
      <div className="Item">
        <ul>{parsedUsers}</ul>
      </div>
    </div>
  );
}

export default UserList;
