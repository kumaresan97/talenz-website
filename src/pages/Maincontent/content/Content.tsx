import React from "react";
import "./Content.css";

// const immg = document.getElementById("im");
// immg?.setAttribute("src", "./abirami.jpg");
// console.log(1);

const Content = ({ data }: any) => {
  console.log(data);
  return (
    <div className="border" style={{ height: "100%" }}>
      <div className="container">
        <div className="header-sec">
          <div className="img-sec">
            <img src={data.image} alt=" " />
          </div>
          <div>
            <p className="contentname">{data.name}</p>
            <h6>{data.native}</h6>
          </div>
          <div className="icons">
            <a href="https://github.com/ananth5895" target="_blank">
              <i className="icofont-github"></i>
            </a>
            {/* <i className="bi bi-github"></i>
            </a> */}
            <a href="">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 col-lg-5">
            <div>
              <p className="lid">Primary Skills</p>

              <p className="pstyle">
                Html, Css, Bootstrap , JavaScript, WordPress, Angular.
              </p>
            </div>
            <div>
              <p className="lid">Secondary Skills</p>
              <p className="pstyle">{data.ss}</p>
            </div>

            <div>
              <p className="lid">Expected Salary</p>
              <p className="pstyle">2.5L</p>
            </div>
          </div>
          <div className="col-6 col-lg-7">
            <div>
              <p className="lid">Education</p>

              <p className="pstyle">{data.M}</p>

              <p className="pstyle">{data.B}</p>
              <p className="pstyle">{data.H}</p>
              <p className="pstyle">{data.S}.</p>
            </div>
            <div>
              <p className="lid">Availability to join</p>
              <p className="pstyle">Immediate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
