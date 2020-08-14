import React, { Component } from "react";

// Ant Design
import { Form, Button } from "antd";

// Components
import CustomInput from "../../../../components/Input";

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteContent: "",
    };
    this.handleSentSubmit = this.handleSentSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSentSubmit() {
    const { noteTitle, noteContent } = this.state;
    this.props.handleFormSubmit(noteTitle, noteContent);
    this.setState({
      noteTitle: "",
      noteContent: "",
    });
  }

  render() {
    const { noteTitle, noteContent } = this.state;

    return (
      <Form onFinish={this.handleSentSubmit}>
        <Form.Item>
          <CustomInput
            placeholder="Note"
            name="noteTitle"
            value={noteTitle}
            error="El título es obligatorio"
            callback={this.handleChangeInput}
          />

          <CustomInput
            placeholder="Content"
            name="noteContent"
            value={noteContent}
            error="La nota es obligatoria"
            callback={this.handleChangeInput}
          />

          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CustomForm;
