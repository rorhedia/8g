import React, { Component } from "react";

// ANT DESIGN
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

class AntdInput extends Component {
  constructor(props) {
    super(props);
    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput({ target: { value, name } }) {
    this.props.callback(name, value);
  }

  render() {
    const { type, name, value, placeholder } = this.props;
    return (
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={this.handlerInput}
        placeholder={placeholder}
      />
    );
  }
}

export default AntdInput;
