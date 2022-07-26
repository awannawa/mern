import React, { useEffect, useState } from "react";
import "./detailBlog.scss";
import { useHistory, withRouter } from "react-router-dom";
import { Link } from "../../components";
import axios from "axios";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);
  const history = useHistory();
  if (data.author) {
    return (
      <div className="detail-blog-wrapper">
        <img
          className="img-cover"
          src={`http://localhost:4000/${data.image}`}
          alt="thumb"
        />
        <p className="blog-title">{data.title}</p>
        <p className="blog-author">
          {data.author.name} - Dibuat pada {data.createdAt} - Diupdate Pada{" "}
          {data.updatedAt}
        </p>
        <p className="blog-body">{data.body}</p>
        <Link title="Kembali" onClick={() => history.push("/")} />
      </div>
    );
  }
  return <p>Loading data...</p>;
};

export default withRouter(DetailBlog);
