import React, { Component } from "react";

// ANT DESIGN
import { Form, Button } from "antd";

// CSS
import "./UserForm.css";

// Components
// import Input from "../../../../components/Input";
import AntdInput from "../../../../components/AntdInput";

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      hobbies: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    console.log("asd", e);
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

        {/* <Input
          name="firstName"
          value={firstName}
          callback={this.handleInputChange}
        />
        <Input
          name="lastName"
          value={lastName}
          callback={this.handleInputChange}
        />
        <Input
          type="number"
          name="age"
          value={age}
          callback={this.handleInputChange}
        /> */}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Crear usuario
          </Button>
        </Form.Item>
        {/* <button type="submit">Crear usuario</button> */}
      </Form>
    );
  }
}

export default CustomForm;
