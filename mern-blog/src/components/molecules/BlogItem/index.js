import React from "react";
import "./blogItem.scss";
import { Button } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, author, date, body } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="judul" />
      <div className="content-detail">
        {" "}
        <p className="title">{title}</p>
        <p className="author">
          {author} - {date}
        </p>
        <p className="body">{body}</p>
      </div>
      <Button
        title="View Detail"
        onClick={() => history.push("/detail-blog")}
      />
    </div>
  );
};

export default BlogItem;
