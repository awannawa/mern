import React from "react";
import "./mainApp.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "../../components";
import { CreateBlog, DetailBlog, Home } from "../../pages";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path={"/create-blog"}>
              <CreateBlog />
            </Route>
            <Route path={"/detail-blog"}>
              <DetailBlog />
            </Route>
            <Route path={"/"}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
