import React from "react";
import "./footer.scss";
import { FB, IG, LogoReactjs, TW, GIT } from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoReactjs} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={FB} />
          {/* <Icon img={TW} /> */}
          <Icon img={IG} />
          <Icon img={GIT} />
        </div>
      </div>

      <div className="copyright">
        <p>Copyright 2022</p>
      </div>
    </div>
  );
};

export default Footer;
