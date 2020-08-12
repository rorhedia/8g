import React, { Component } from "react";

// Materia UI
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
} from "@material-ui/core";

// CSS
import "./NotesBlog.css";

// Components
import CustomTextField from "../../components/customTextField";

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

  handleChangeInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { notes, noteTitle, noteContent } = this.state;
    const newNote = [...notes, { title: noteTitle, content: noteContent }];
    const stringNewNotes = JSON.stringify(newNote);
    localStorage.setItem("notes", stringNewNotes);

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
      <>
        <Container maxWidth="md">
          <List dense={false}>{UINotes}</List>
        </Container>
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <form onSubmit={this.handleFormSubmit}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <CustomTextField
                  className="input"
                  value={noteTitle}
                  name="noteTitle"
                  label="Note"
                  callback={this.handleChangeInput}
                />
                <CustomTextField
                  className="input"
                  value={noteContent}
                  name="noteContent"
                  label="Content"
                  callback={this.handleChangeInput}
                />
                <Button type="submit" variant="contained" color="primary">
                  Guardar
                </Button>
              </Grid>
            </form>
          </Grid>
        </Container>
      </>
    );
  }
}

export default NotesBlog;
