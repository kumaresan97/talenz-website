import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/image/Fabevy.png";
import Register from "../form/Register";
//import Home from "../pages/Maincontent/home/Home";

const Navbar = () => {
  return (
    <div className=" nav-sec">
      <div className="container">
        <div className="row ">
          <div className="col-6 ">
            <img src={Img} alt="logo" />
          </div>
          <div className="col-6  leftsec">
            <Link to="/register">Hire Our Candidates</Link>
            {/* <a
              href="https://forms.office.com/r/igZvivDwCC"
              target="_blank"
              className="login-btn"
              id=""
            >
              Hire Our Candidates
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
