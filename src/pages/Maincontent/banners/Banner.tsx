import React from "react";
import Content from "../content/Content";
import Data from "./Data.json";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bannerheading">
      <div className="title">Active IT Jobseekers</div>
      <div style={{ margin: "0px 30px", padding: "70px 0px 0px" }}>
        <div className="row">
          {Data.map((item, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4"
              style={{ margin: "20px 0px" }}
            >
              <Content data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
