import React from "react";
import "./detailBlog.scss";
import { RegisterBg } from "../../assets";
import { useHistory } from "react-router-dom";
import { Link } from "../../components";

const DetailBlog = () => {
  const history = useHistory();

  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author</p>
      <p className="blog-body">
        Culpa aliquip et qui proident sunt fugiat nulla do veniam commodo
        fugiat. Aliquip fugiat Lorem id excepteur labore cupidatat occaecat non
        esse. Cillum officia nulla reprehenderit ea dolor aliquip. Minim
        consequat incididunt cillum commodo occaecat et amet nisi. Ea incididunt
        ea velit minim pariatur officia dolor reprehenderit non velit consequat
        dolore dolor aliquip. Id magna ad culpa esse ad est nulla fugiat nisi
        tempor. Laborum mollit Lorem ut veniam elit.
      </p>
      <Link title="Kembali" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
