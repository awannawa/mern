import React from "react";
import "./blogItem.scss";
import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, name, date, body } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="judul" />
      <div className="content-detail"></div>
      <p className="title">{title}</p>
      <p className="author">
        {name} - {date}
      </p>
      <p className="body">{body}</p>
      <Button
        title="View Detail"
        onClick={() => history.push("/detail-blog")}
      />
    </div>
  );
};

export default BlogItem;
