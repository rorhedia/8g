import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";

import "./customTextField.css";

class CustomTextField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.props.callback(name, value);
  }

  render() {
    const { value, name, label } = this.props;
    return (
      <TextField
        className="input"
        color=""
        variant="outlined"
        label={label}
        value={value}
        name={name}
        onChange={this.handleChange}
      />
    );
  }
}

export default CustomTextField;
