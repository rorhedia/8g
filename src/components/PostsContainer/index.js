import React, { Component } from "react";

// Reactstrap
import { Row } from "reactstrap";
import Post from "../Post";

const postsList = [
  {
    urlImg: "https://picsum.photos/id/230/100/100",
    title: "Card 1",
    text:
      "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  },
  {
    urlImg: "https://picsum.photos/id/230/100/100",
    title: "Card 2",
    text:
      "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  },
  {
    urlImg: "https://picsum.photos/id/230/100/100",
    title: "Card 3",
    text:
      "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  },
  {
    urlImg: "https://picsum.photos/id/230/100/100",
    title: "Card 4",
    text:
      "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  },
  {
    urlImg: "https://picsum.photos/id/230/100/100",
    title: "Card 5",
    text:
      "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  },
  {
    urlImg: "https://picsum.photos/id/230/100/100",
    title: "Card 6",
    text:
      "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  },
  {
    urlImg: "https://picsum.photos/id/230/100/100",
    title: "Card 7",
    text:
      "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  },
];

class PostContainer extends Component {
  render() {
    const Posts = postsList.map(({ urlImg, title, text }, idx) => (
      <Post key={idx} urlImg={urlImg} title={title} text={text} />
    ));

    return <Row sm="4">{Posts}</Row>;
  }
}

export default PostContainer;
