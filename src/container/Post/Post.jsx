import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Post = (props) => {
  return (
    <Container>
      <div className="post">
        <div className="img-thumb">
          <img src="http://placeimg.com/200/150/tech" alt="tehc" class="img" />
        </div>
        <div className="container">
          <p className="title">{props.data.title}</p>
          <p className="desc">{props.data.body}</p>
          <button
            className="btn-remove"
            onClick={() => props.remove(props.data.id)}
          >
            Remove
          </button>
          <button
            className="btn-update"
            onClick={() => props.update(props.data)}
          >
            Update
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Post;
