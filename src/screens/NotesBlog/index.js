import React, { Component } from "react";

// Materia UI
import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@material-ui/core";

// CSS
import "./NotesBlog.css";

// const notes = [
//   { title: "My first note", content: "This is an amazing note!" },
//   { title: "My first note", content: "This is an amazing note!" },
// ];

class NotesBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      noteTitle: "",
      noteContent: "",
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { notes, noteTitle, noteContent } = this.state;
    const newNote = [...notes, { title: noteTitle, content: noteContent }];
    const stringNewNotes = JSON.stringify(newNote);

    localStorage.setItem("notes", JSON.stringify(stringNewNotes));

    this.setState({
      notes: newNote,
      noteTitle: "",
      noteContent: "",
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
    const { notes, noteTitle, noteContent } = this.state;

    const UINotes = notes.map(({ title, content }, idx) => (
      <ListItem key={idx} className="List-item">
        <ListItemText primary={title} secondary={content} />
      </ListItem>
    ));

    return (
      <React.Fragment>
        <Container maxWidth="md">
          <List dense={false}>{UINotes}</List>
        </Container>
        <Container maxWidth="md">
          <form onSubmit={this.handleFormSubmit}>
            <TextField
              color="secondary"
              className="input"
              label="Titulo"
              variant="outlined"
              value={noteTitle}
              name="noteTitle"
              onChange={this.handleChangeInput}
            />
            <TextField
              color="secondary"
              className="input"
              label="content"
              variant="outlined"
              value={noteContent}
              name="noteContent"
              onChange={this.handleChangeInput}
            />
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

export default NotesBlog;
