import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://reactsessions-ac545.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((users) => {
        let usersArr = [];
        for (const key in users) {
          if (users.hasOwnProperty(key)) {
            users[key]["key"] = key;
            usersArr.push(users[key]);
          }
        }

        if (users) {
          this.setState({
            users: usersArr,
          });
        }
      });
  }

  render() {
    const { users } = this.state;

    const UIUsers = users.map(({ firstName, lastName, age, key }, idx) => {
      return (
        <li key={key}>
          {firstName} {lastName} tiene {age} añitos
        </li>
      );
    });

    return (
      <div className="Container">
        {UIUsers.length ? null : <h1>No hay usuarios</h1>}
        <ul>{UIUsers}</ul>
      </div>
    );
  }
}

export default Users;

// var user = {
//   firstName: "Daniel",
//   lastName: "Heredia",
//   age: 29,
// };

// fetch("https://reactsessions-ac545.firebaseio.com/users.json", {
//   method: "POST",
//   body: JSON.stringify(user),
// })
//   .then((res) => res.json())
//   .then((users) => console.log(users));

//   var user = {
//     hobbies:['Jugar','Viajar','Dormir']
//   };

//   fetch("https://reactsessions-ac545.firebaseio.com/users/-ME_S1AhlNq5CXUyXVTx.json", {
//     method: "PATCH",
//     body: JSON.stringify(user),
//   })
//     .then((res) => res.json())
//     .then((users) => console.log(users));
