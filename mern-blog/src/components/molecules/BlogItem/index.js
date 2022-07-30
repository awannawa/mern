import React from "react";
import "./blogItem.scss";
import { Button } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, author, date, body, _id, onDelete } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="judul" />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{title}</p>
          <div className="edit-wrapper">
            <p
              className="edit"
              onClick={() => history.push(`/create-blog/${_id}`)}
            >
              Edit
            </p>{" "}
            |
            <p className="delete" onClick={() => onDelete(_id)}>
              {" "}
              Delete
            </p>
          </div>
        </div>
        <p className="author">
          {author} - {date}
        </p>
        <p className="body">{body}</p>
      </div>
      <Button
        title="View Detail"
        onClick={() => history.push(`/detail-blog/${_id}`)}
      />
    </div>
  );
};

export default BlogItem;
