import React, { Component } from "react";

// ANT DESIGN
import { Form } from "antd";

// CSS
import "./UserForm.css";

// Components
// import Input from "../../../../components/Input";
import CustomInput from "../../../../components/Input";

class CustomForm extends Component {
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

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    return (
      <Form {...layout} name="basic" onFinish={this.handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <CustomInput
            name="firstName"
            value={firstName}
            callback={this.handleInputChange}
            placeholder="Nombre"
          />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <CustomInput
            name="firstName"
            value={firstName}
            callback={this.handleInputChange}
            placeholder="Nombre"
          />
        </Form.Item>
        {/* <AntdInput
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
        </Form.Item> */}
      </Form>
    );
  }
}

export default CustomForm;
