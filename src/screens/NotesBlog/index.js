import React, { Component } from "react";

// Ant Design
import { List, Row, Col } from "antd";

// Components
import CustomForm from "./components/CustomForm";

class NotesBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(noteTitle, noteContent) {
    const { notes } = this.state;
    const newNote = [...notes, { title: noteTitle, content: noteContent }];
    const stringNewNotes = JSON.stringify(newNote);
    localStorage.setItem("notes", stringNewNotes);

    this.setState({
      notes: newNote,
    });
  }

  componentDidMount() {
    let stringNotes = localStorage.getItem("notes");
    if (stringNotes) {
      let parsedNotes = JSON.parse(stringNotes);
      this.setState({
        notes: parsedNotes,
      });
    }
  }

  render() {
    const { notes } = this.state;

    let UINotes = <h1>No hay nada que mostrar</h1>;

    if (notes.length) {
      UINotes = notes.map(({ title, content }, idx) => (
        <List.Item key={idx} className="List-item">
          <List.Item.Meta title={title} description={content} />
        </List.Item>
      ));
    }

    return (
      <Row>
        <Col span={8} offset={4}>
          <CustomForm handleFormSubmit={this.handleFormSubmit} />
        </Col>
        <Col span={8} offset={4}>
          <List>{UINotes}</List>
        </Col>
      </Row>
    );
  }
}

export default NotesBlog;
