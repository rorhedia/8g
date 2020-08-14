import React, { Component } from "react";

import { Button, Row, Col } from "antd";

// CSS
import "./Users.css";

// Custom Components
import CustomForm from "./components/CustomForm";
import UpdateUserForm from "./components/UpdateUserForm";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      updateUser: {},
    };
    this.handleForm = this.handleForm.bind(this);
    this.handerClickEdit = this.handerClickEdit.bind(this);
  }

  componentDidMount() {
    fetch("https://reactsessions-ac545.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((users) => {
        let usersArr = [];
        for (const key in users) {
          users[key]["key"] = key;
          usersArr.push(users[key]);
        }

        if (users) {
          this.setState({
            users: usersArr,
          });
        }
      });
  }

  handleForm(firstName, lastName, age) {
    fetch("https://reactsessions-ac545.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        age,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        let key = user.name;

        const { users } = this.state;
        const newUsers = [...users, { firstName, lastName, age, key }];

        this.setState({
          users: newUsers,
        });
      });
  }

  handerClickEdit(key) {
    const { users } = this.state;
    const user = users.filter(({ key: userKey }) => key === userKey);
    this.setState({
      updateUser: user,
    });
    console.log(user);
  }

  handerClickDelete(key) {
    const { users } = this.state;
    const user = users.filter(({ key: userKey }) => key === userKey);
    this.setState({
      updateUser: user,
    });
    console.log(user);
  }

  render() {
    const { users, updateUser } = this.state;

    const UIUsers = users.map(({ firstName, lastName, age, key }, idx) => {
      return (
        <div key={key}>
          <li>
            {firstName} {lastName}
            <Button
              className="user-button"
              type="primary"
              shape="round"
              onClick={(e) => this.handerClickEdit(key)}
            >
              Edit
            </Button>
            <Button
              className="user-button"
              type="primary"
              shape="round"
              onClick={(e) => this.handerClickDelete(key)}
              danger
            >
              Delete
            </Button>
          </li>
        </div>
      );
    });

    return (
      <>
        <Row justify="space-around" align="middle">
          <Col span={8} offset={4}>
            {Object.keys(updateUser).length ? (
              <UpdateUserForm
                isUpdate={true}
                data={updateUser}
                callback={this.handleForm}
              />
            ) : (
              <CustomForm isUpdate={false} callback={this.handleForm} />
            )}
          </Col>
          <Col span={8}>col-4</Col>
        </Row>
      </>
      // <div className="Container">
      //   <Row>
      //     <Col span={8} offset={8} className="example">
      //       col
      //     </Col>
      //   </Row>
      //   <div>
      //     {Object.keys(updateUser).length ? (
      //       <UpdateUserForm
      //         isUpdate={true}
      //         data={updateUser}
      //         callback={this.handleForm}
      //       />
      //     ) : (
      //       <CustomForm isUpdate={false} callback={this.handleForm} />
      //     )}
      //   </div>
      //   <div>
      //     {UIUsers.length ? null : <h1>No hay usuarios</h1>}
      //     <ul>{UIUsers}</ul>
      //   </div>
      // </div>
    );
  }
}

export default Users;
