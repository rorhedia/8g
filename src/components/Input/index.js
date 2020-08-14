import React, { Component } from "react";

// Ant Design
import { Form, Input } from "antd";
import { FormOutlined } from "@ant-design/icons";

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput({ target: { value, name } }) {
    this.props.callback(name, value);
  }

  render() {
    const { type, name, value, placeholder, error } = this.props;
    return (
      <Form.Item
        className="form-item"
        name={name}
        rules={[{ required: true, message: error }]}
      >
        <Input
          style={{ width: 300 }}
          prefix={<FormOutlined />}
          placeholder={placeholder}
          type={type ? type : "text"}
          name={name}
          value={value}
          onChange={this.handlerInput}
        />
      </Form.Item>
    );
  }
}

export default CustomInput;
