import React from "react";
import { LoginBg } from "../../../assets";
import "./upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="Preview Image" />
      <input type="file" />
    </div>
  );
};

export default Upload;
