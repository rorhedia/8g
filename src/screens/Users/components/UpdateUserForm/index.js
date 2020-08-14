import React, { Component } from "react";

// ANT DESIGN
import { Form, Button } from "antd";

// CSS
// import "./UserForm.css";

// Components
// import Input from "../../../../components/Input";
import AntdInput from "../../../../components/Input";

class UpdateUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      // hobbies: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {}

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    // e.preventDefault();
    const { firstName, lastName, age } = this.state;
    this.props.callback(firstName, lastName, age);
  }

  render() {
    const { firstName, lastName, age } = this.state;

    return (
      <Form onFinish={this.handleSubmit}>
        <AntdInput
          name="firstName"
          value={firstName}
          callback={this.handleInputChange}
          placeholder="Nombre"
        />
        <AntdInput
          name="lastName"
          value={lastName}
          callback={this.handleInputChange}
          placeholder="Apellido"
        />
        <AntdInput
          type="number"
          name="age"
          value={age}
          callback={this.handleInputChange}
          placeholder="Edad"
        />

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Crear usuario
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default UpdateUserForm;
