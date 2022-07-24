import React from "react";
import "./blogItem.scss";
import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="judul" />
      <div className="content-detail"></div>
      <p className="title">Title Blog</p>
      <p className="author">Author - Date Post</p>
      <p className="body">
        In tempor ut eu veniam est id anim anim excepteur voluptate. Quis
        laborum irure nostrud commodo Lorem enim aute amet magna voluptate. Quis
        dolor amet fugiat in. Cillum ea officia consequat amet.
      </p>
      <Button
        title="View Detail"
        onClick={() => history.push("/detail-blog")}
      />
    </div>
  );
};

export default BlogItem;
