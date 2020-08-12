import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
      .then((res) => res.json())
      .then((users) =>
        this.setState({
          users,
        })
      );
  }

  render() {
    const { users } = this.state;
    const UIUsers = users.map(({ firstName, lastName }, idx) => (
      <li key={idx}>
        {firstName} {lastName}
      </li>
    ));

    return (
      <div className="Container">
        {UIUsers.length ? null : <h1>No hay usuarios</h1>}
        <ul>{UIUsers}</ul>
      </div>
    );
  }
}

export default Users;
