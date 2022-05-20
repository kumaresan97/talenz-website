import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-sec">
      <h1>
        Source our <strong>Active IT Job Seekers</strong>
      </h1>
      <Link to="/register">Hire Our Candidate</Link>
    </div>
  );
};

export default Home;
